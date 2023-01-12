function Oy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Ly(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fi={},Dy={get exports(){return Fi},set exports(e){Fi=e}},$a={},S={},My={get exports(){return S},set exports(e){S=e}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _o=Symbol.for("react.element"),$y=Symbol.for("react.portal"),Uy=Symbol.for("react.fragment"),Fy=Symbol.for("react.strict_mode"),zy=Symbol.for("react.profiler"),jy=Symbol.for("react.provider"),By=Symbol.for("react.context"),Hy=Symbol.for("react.forward_ref"),Vy=Symbol.for("react.suspense"),Wy=Symbol.for("react.memo"),Gy=Symbol.for("react.lazy"),rh=Symbol.iterator;function Ky(e){return e===null||typeof e!="object"?null:(e=rh&&e[rh]||e["@@iterator"],typeof e=="function"?e:null)}var Bm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hm=Object.assign,Vm={};function Kr(e,t,n){this.props=e,this.context=t,this.refs=Vm,this.updater=n||Bm}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wm(){}Wm.prototype=Kr.prototype;function of(e,t,n){this.props=e,this.context=t,this.refs=Vm,this.updater=n||Bm}var sf=of.prototype=new Wm;sf.constructor=of;Hm(sf,Kr.prototype);sf.isPureReactComponent=!0;var ih=Array.isArray,Gm=Object.prototype.hasOwnProperty,af={current:null},Km={key:!0,ref:!0,__self:!0,__source:!0};function Ym(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Gm.call(t,r)&&!Km.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:_o,type:e,key:o,ref:s,props:i,_owner:af.current}}function Yy(e,t){return{$$typeof:_o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function lf(e){return typeof e=="object"&&e!==null&&e.$$typeof===_o}function Xy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var oh=/\/+/g;function Al(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xy(""+e.key):t.toString(36)}function bs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case _o:case $y:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Al(s,0):r,ih(i)?(n="",e!=null&&(n=e.replace(oh,"$&/")+"/"),bs(i,t,n,"",function(u){return u})):i!=null&&(lf(i)&&(i=Yy(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(oh,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",ih(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Al(o,a);s+=bs(o,t,n,l,i)}else if(l=Ky(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Al(o,a++),s+=bs(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Vo(e,t,n){if(e==null)return e;var r=[],i=0;return bs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function qy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},Is={transition:null},Qy={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Is,ReactCurrentOwner:af};j.Children={map:Vo,forEach:function(e,t,n){Vo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vo(e,function(){t++}),t},toArray:function(e){return Vo(e,function(t){return t})||[]},only:function(e){if(!lf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=Kr;j.Fragment=Uy;j.Profiler=zy;j.PureComponent=of;j.StrictMode=Fy;j.Suspense=Vy;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qy;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hm({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=af.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Gm.call(t,l)&&!Km.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:_o,type:e.type,key:i,ref:o,props:r,_owner:s}};j.createContext=function(e){return e={$$typeof:By,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jy,_context:e},e.Consumer=e};j.createElement=Ym;j.createFactory=function(e){var t=Ym.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:Hy,render:e}};j.isValidElement=lf;j.lazy=function(e){return{$$typeof:Gy,_payload:{_status:-1,_result:e},_init:qy}};j.memo=function(e,t){return{$$typeof:Wy,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=Is.transition;Is.transition={};try{e()}finally{Is.transition=t}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(e,t){return Le.current.useCallback(e,t)};j.useContext=function(e){return Le.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};j.useEffect=function(e,t){return Le.current.useEffect(e,t)};j.useId=function(){return Le.current.useId()};j.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return Le.current.useMemo(e,t)};j.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};j.useRef=function(e){return Le.current.useRef(e)};j.useState=function(e){return Le.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return Le.current.useTransition()};j.version="18.2.0";(function(e){e.exports=j})(My);const Ua=Ly(S),Iu=Oy({__proto__:null,default:Ua},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jy=S,Zy=Symbol.for("react.element"),e2=Symbol.for("react.fragment"),t2=Object.prototype.hasOwnProperty,n2=Jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r2={key:!0,ref:!0,__self:!0,__source:!0};function Xm(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)t2.call(t,r)&&!r2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Zy,type:e,key:o,ref:s,props:i,_owner:n2.current}}$a.Fragment=e2;$a.jsx=Xm;$a.jsxs=Xm;(function(e){e.exports=$a})(Dy);const In=Fi.Fragment,g=Fi.jsx,E=Fi.jsxs;var Tu={},Cu={},i2={get exports(){return Cu},set exports(e){Cu=e}},Ye={},Nu={},o2={get exports(){return Nu},set exports(e){Nu=e}},qm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,$){var z=P.length;P.push($);e:for(;0<z;){var oe=z-1>>>1,he=P[oe];if(0<i(he,$))P[oe]=$,P[z]=he,z=oe;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var $=P[0],z=P.pop();if(z!==$){P[0]=z;e:for(var oe=0,he=P.length,Bo=he>>>1;oe<Bo;){var Rn=2*(oe+1)-1,Pl=P[Rn],On=Rn+1,Ho=P[On];if(0>i(Pl,z))On<he&&0>i(Ho,Pl)?(P[oe]=Ho,P[On]=z,oe=On):(P[oe]=Pl,P[Rn]=z,oe=Rn);else if(On<he&&0>i(Ho,z))P[oe]=Ho,P[On]=z,oe=On;else break e}}return $}function i(P,$){var z=P.sortIndex-$.sortIndex;return z!==0?z:P.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,h=3,v=!1,y=!1,w=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=P)r(u),$.sortIndex=$.expirationTime,t(l,$);else break;$=n(u)}}function _(P){if(w=!1,m(P),!y)if(n(l)!==null)y=!0,Cl(x);else{var $=n(u);$!==null&&Nl(_,$.startTime-P)}}function x(P,$){y=!1,w&&(w=!1,p(A),A=-1),v=!0;var z=h;try{for(m($),f=n(l);f!==null&&(!(f.expirationTime>$)||P&&!ot());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,h=f.priorityLevel;var he=oe(f.expirationTime<=$);$=e.unstable_now(),typeof he=="function"?f.callback=he:f===n(l)&&r(l),m($)}else r(l);f=n(l)}if(f!==null)var Bo=!0;else{var Rn=n(u);Rn!==null&&Nl(_,Rn.startTime-$),Bo=!1}return Bo}finally{f=null,h=z,v=!1}}var b=!1,I=null,A=-1,B=5,U=-1;function ot(){return!(e.unstable_now()-U<B)}function oi(){if(I!==null){var P=e.unstable_now();U=P;var $=!0;try{$=I(!0,P)}finally{$?si():(b=!1,I=null)}}else b=!1}var si;if(typeof d=="function")si=function(){d(oi)};else if(typeof MessageChannel<"u"){var nh=new MessageChannel,Ry=nh.port2;nh.port1.onmessage=oi,si=function(){Ry.postMessage(null)}}else si=function(){T(oi,0)};function Cl(P){I=P,b||(b=!0,si())}function Nl(P,$){A=T(function(){P(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Cl(x))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var z=h;h=$;try{return P()}finally{h=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,$){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var z=h;h=P;try{return $()}finally{h=z}},e.unstable_scheduleCallback=function(P,$,z){var oe=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?oe+z:oe):z=oe,P){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=z+he,P={id:c++,callback:$,priorityLevel:P,startTime:z,expirationTime:he,sortIndex:-1},z>oe?(P.sortIndex=z,t(u,P),n(l)===null&&P===n(u)&&(w?(p(A),A=-1):w=!0,Nl(_,z-oe))):(P.sortIndex=he,t(l,P),y||v||(y=!0,Cl(x))),P},e.unstable_shouldYield=ot,e.unstable_wrapCallback=function(P){var $=h;return function(){var z=h;h=$;try{return P.apply(this,arguments)}finally{h=z}}}})(qm);(function(e){e.exports=qm})(o2);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm=S,Ke=Nu;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jm=new Set,zi={};function ir(e,t){$r(e,t),$r(e+"Capture",t)}function $r(e,t){for(zi[e]=t,e=0;e<t.length;e++)Jm.add(t[e])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pu=Object.prototype.hasOwnProperty,s2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sh={},ah={};function a2(e){return Pu.call(ah,e)?!0:Pu.call(sh,e)?!1:s2.test(e)?ah[e]=!0:(sh[e]=!0,!1)}function l2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function u2(e,t,n,r){if(t===null||typeof t>"u"||l2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function cf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(uf,cf);_e[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(uf,cf);_e[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(uf,cf);_e[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function ff(e,t,n,r){var i=_e.hasOwnProperty(t)?_e[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(u2(t,n,i,r)&&(n=null),r||i===null?a2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wo=Symbol.for("react.element"),cr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),df=Symbol.for("react.strict_mode"),Au=Symbol.for("react.profiler"),Zm=Symbol.for("react.provider"),eg=Symbol.for("react.context"),hf=Symbol.for("react.forward_ref"),Ru=Symbol.for("react.suspense"),Ou=Symbol.for("react.suspense_list"),pf=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),tg=Symbol.for("react.offscreen"),lh=Symbol.iterator;function ai(e){return e===null||typeof e!="object"?null:(e=lh&&e[lh]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,Rl;function vi(e){if(Rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rl=t&&t[1]||""}return`
`+Rl+e}var Ol=!1;function Ll(e,t){if(!e||Ol)return"";Ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ol=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vi(e):""}function c2(e){switch(e.tag){case 5:return vi(e.type);case 16:return vi("Lazy");case 13:return vi("Suspense");case 19:return vi("SuspenseList");case 0:case 2:case 15:return e=Ll(e.type,!1),e;case 11:return e=Ll(e.type.render,!1),e;case 1:return e=Ll(e.type,!0),e;default:return""}}function Lu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case cr:return"Portal";case Au:return"Profiler";case df:return"StrictMode";case Ru:return"Suspense";case Ou:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case eg:return(e.displayName||"Context")+".Consumer";case Zm:return(e._context.displayName||"Context")+".Provider";case hf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pf:return t=e.displayName||null,t!==null?t:Lu(e.type)||"Memo";case qt:t=e._payload,e=e._init;try{return Lu(e(t))}catch{}}return null}function f2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lu(t);case 8:return t===df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ng(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function d2(e){var t=ng(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Go(e){e._valueTracker||(e._valueTracker=d2(e))}function rg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ng(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Du(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function uh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_n(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ig(e,t){t=t.checked,t!=null&&ff(e,"checked",t,!1)}function Mu(e,t){ig(e,t);var n=_n(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$u(e,t.type,n):t.hasOwnProperty("defaultValue")&&$u(e,t.type,_n(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ch(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $u(e,t,n){(t!=="number"||Vs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yi=Array.isArray;function Tr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_n(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Uu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(yi(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_n(n)}}function og(e,t){var n=_n(t.value),r=_n(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function dh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ko,ag=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ko=Ko||document.createElement("div"),Ko.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ko.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ji(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},h2=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(e){h2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ii[t]=Ii[e]})});function lg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ii.hasOwnProperty(e)&&Ii[e]?(""+t).trim():t+"px"}function ug(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=lg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var p2=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zu(e,t){if(t){if(p2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function ju(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bu=null;function mf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hu=null,Cr=null,Nr=null;function hh(e){if(e=xo(e)){if(typeof Hu!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Ha(t),Hu(e.stateNode,e.type,t))}}function cg(e){Cr?Nr?Nr.push(e):Nr=[e]:Cr=e}function fg(){if(Cr){var e=Cr,t=Nr;if(Nr=Cr=null,hh(e),t)for(e=0;e<t.length;e++)hh(t[e])}}function dg(e,t){return e(t)}function hg(){}var Dl=!1;function pg(e,t,n){if(Dl)return e(t,n);Dl=!0;try{return dg(e,t,n)}finally{Dl=!1,(Cr!==null||Nr!==null)&&(hg(),fg())}}function Bi(e,t){var n=e.stateNode;if(n===null)return null;var r=Ha(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Vu=!1;if(Mt)try{var li={};Object.defineProperty(li,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",li,li),window.removeEventListener("test",li,li)}catch{Vu=!1}function m2(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ti=!1,Ws=null,Gs=!1,Wu=null,g2={onError:function(e){Ti=!0,Ws=e}};function v2(e,t,n,r,i,o,s,a,l){Ti=!1,Ws=null,m2.apply(g2,arguments)}function y2(e,t,n,r,i,o,s,a,l){if(v2.apply(this,arguments),Ti){if(Ti){var u=Ws;Ti=!1,Ws=null}else throw Error(k(198));Gs||(Gs=!0,Wu=u)}}function or(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function mg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ph(e){if(or(e)!==e)throw Error(k(188))}function w2(e){var t=e.alternate;if(!t){if(t=or(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ph(i),e;if(o===r)return ph(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function gg(e){return e=w2(e),e!==null?vg(e):null}function vg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vg(e);if(t!==null)return t;e=e.sibling}return null}var yg=Ke.unstable_scheduleCallback,mh=Ke.unstable_cancelCallback,_2=Ke.unstable_shouldYield,k2=Ke.unstable_requestPaint,se=Ke.unstable_now,E2=Ke.unstable_getCurrentPriorityLevel,gf=Ke.unstable_ImmediatePriority,wg=Ke.unstable_UserBlockingPriority,Ks=Ke.unstable_NormalPriority,x2=Ke.unstable_LowPriority,_g=Ke.unstable_IdlePriority,Fa=null,kt=null;function S2(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Fa,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:T2,b2=Math.log,I2=Math.LN2;function T2(e){return e>>>=0,e===0?32:31-(b2(e)/I2|0)|0}var Yo=64,Xo=4194304;function wi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ys(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=wi(a):(o&=s,o!==0&&(r=wi(o)))}else s=n&~i,s!==0?r=wi(s):o!==0&&(r=wi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function C2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-dt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=C2(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Gu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kg(){var e=Yo;return Yo<<=1,!(Yo&4194240)&&(Yo=64),e}function Ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ko(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function P2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function vf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var G=0;function Eg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xg,yf,Sg,bg,Ig,Ku=!1,qo=[],un=null,cn=null,fn=null,Hi=new Map,Vi=new Map,Jt=[],A2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gh(e,t){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":Hi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(t.pointerId)}}function ui(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=xo(t),t!==null&&yf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function R2(e,t,n,r,i){switch(t){case"focusin":return un=ui(un,e,t,n,r,i),!0;case"dragenter":return cn=ui(cn,e,t,n,r,i),!0;case"mouseover":return fn=ui(fn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Hi.set(o,ui(Hi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Vi.set(o,ui(Vi.get(o)||null,e,t,n,r,i)),!0}return!1}function Tg(e){var t=$n(e.target);if(t!==null){var n=or(t);if(n!==null){if(t=n.tag,t===13){if(t=mg(n),t!==null){e.blockedOn=t,Ig(e.priority,function(){Sg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ts(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bu=r,n.target.dispatchEvent(r),Bu=null}else return t=xo(n),t!==null&&yf(t),e.blockedOn=n,!1;t.shift()}return!0}function vh(e,t,n){Ts(e)&&n.delete(t)}function O2(){Ku=!1,un!==null&&Ts(un)&&(un=null),cn!==null&&Ts(cn)&&(cn=null),fn!==null&&Ts(fn)&&(fn=null),Hi.forEach(vh),Vi.forEach(vh)}function ci(e,t){e.blockedOn===t&&(e.blockedOn=null,Ku||(Ku=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,O2)))}function Wi(e){function t(i){return ci(i,e)}if(0<qo.length){ci(qo[0],e);for(var n=1;n<qo.length;n++){var r=qo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&ci(un,e),cn!==null&&ci(cn,e),fn!==null&&ci(fn,e),Hi.forEach(t),Vi.forEach(t),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)Tg(n),n.blockedOn===null&&Jt.shift()}var Pr=Wt.ReactCurrentBatchConfig,Xs=!0;function L2(e,t,n,r){var i=G,o=Pr.transition;Pr.transition=null;try{G=1,wf(e,t,n,r)}finally{G=i,Pr.transition=o}}function D2(e,t,n,r){var i=G,o=Pr.transition;Pr.transition=null;try{G=4,wf(e,t,n,r)}finally{G=i,Pr.transition=o}}function wf(e,t,n,r){if(Xs){var i=Yu(e,t,n,r);if(i===null)Gl(e,t,r,qs,n),gh(e,r);else if(R2(i,e,t,n,r))r.stopPropagation();else if(gh(e,r),t&4&&-1<A2.indexOf(e)){for(;i!==null;){var o=xo(i);if(o!==null&&xg(o),o=Yu(e,t,n,r),o===null&&Gl(e,t,r,qs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Gl(e,t,r,null,n)}}var qs=null;function Yu(e,t,n,r){if(qs=null,e=mf(r),e=$n(e),e!==null)if(t=or(e),t===null)e=null;else if(n=t.tag,n===13){if(e=mg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qs=e,null}function Cg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E2()){case gf:return 1;case wg:return 4;case Ks:case x2:return 16;case _g:return 536870912;default:return 16}default:return 16}}var on=null,_f=null,Cs=null;function Ng(){if(Cs)return Cs;var e,t=_f,n=t.length,r,i="value"in on?on.value:on.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Cs=i.slice(e,1<r?1-r:void 0)}function Ns(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qo(){return!0}function yh(){return!1}function Xe(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Qo:yh,this.isPropagationStopped=yh,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),t}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kf=Xe(Yr),Eo=ne({},Yr,{view:0,detail:0}),M2=Xe(Eo),$l,Ul,fi,za=ne({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ef,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fi&&(fi&&e.type==="mousemove"?($l=e.screenX-fi.screenX,Ul=e.screenY-fi.screenY):Ul=$l=0,fi=e),$l)},movementY:function(e){return"movementY"in e?e.movementY:Ul}}),wh=Xe(za),$2=ne({},za,{dataTransfer:0}),U2=Xe($2),F2=ne({},Eo,{relatedTarget:0}),Fl=Xe(F2),z2=ne({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),j2=Xe(z2),B2=ne({},Yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),H2=Xe(B2),V2=ne({},Yr,{data:0}),_h=Xe(V2),W2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=K2[e])?!!t[e]:!1}function Ef(){return Y2}var X2=ne({},Eo,{key:function(e){if(e.key){var t=W2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ns(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?G2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ef,charCode:function(e){return e.type==="keypress"?Ns(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ns(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),q2=Xe(X2),Q2=ne({},za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kh=Xe(Q2),J2=ne({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ef}),Z2=Xe(J2),ew=ne({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tw=Xe(ew),nw=ne({},za,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rw=Xe(nw),iw=[9,13,27,32],xf=Mt&&"CompositionEvent"in window,Ci=null;Mt&&"documentMode"in document&&(Ci=document.documentMode);var ow=Mt&&"TextEvent"in window&&!Ci,Pg=Mt&&(!xf||Ci&&8<Ci&&11>=Ci),Eh=String.fromCharCode(32),xh=!1;function Ag(e,t){switch(e){case"keyup":return iw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function sw(e,t){switch(e){case"compositionend":return Rg(t);case"keypress":return t.which!==32?null:(xh=!0,Eh);case"textInput":return e=t.data,e===Eh&&xh?null:e;default:return null}}function aw(e,t){if(dr)return e==="compositionend"||!xf&&Ag(e,t)?(e=Ng(),Cs=_f=on=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pg&&t.locale!=="ko"?null:t.data;default:return null}}var lw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lw[e.type]:t==="textarea"}function Og(e,t,n,r){cg(r),t=Qs(t,"onChange"),0<t.length&&(n=new kf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ni=null,Gi=null;function uw(e){Vg(e,0)}function ja(e){var t=mr(e);if(rg(t))return e}function cw(e,t){if(e==="change")return t}var Lg=!1;if(Mt){var zl;if(Mt){var jl="oninput"in document;if(!jl){var bh=document.createElement("div");bh.setAttribute("oninput","return;"),jl=typeof bh.oninput=="function"}zl=jl}else zl=!1;Lg=zl&&(!document.documentMode||9<document.documentMode)}function Ih(){Ni&&(Ni.detachEvent("onpropertychange",Dg),Gi=Ni=null)}function Dg(e){if(e.propertyName==="value"&&ja(Gi)){var t=[];Og(t,Gi,e,mf(e)),pg(uw,t)}}function fw(e,t,n){e==="focusin"?(Ih(),Ni=t,Gi=n,Ni.attachEvent("onpropertychange",Dg)):e==="focusout"&&Ih()}function dw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ja(Gi)}function hw(e,t){if(e==="click")return ja(t)}function pw(e,t){if(e==="input"||e==="change")return ja(t)}function mw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:mw;function Ki(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Pu.call(t,i)||!pt(e[i],t[i]))return!1}return!0}function Th(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ch(e,t){var n=Th(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Th(n)}}function Mg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $g(){for(var e=window,t=Vs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vs(e.document)}return t}function Sf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gw(e){var t=$g(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mg(n.ownerDocument.documentElement,n)){if(r!==null&&Sf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ch(n,o);var s=Ch(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vw=Mt&&"documentMode"in document&&11>=document.documentMode,hr=null,Xu=null,Pi=null,qu=!1;function Nh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qu||hr==null||hr!==Vs(r)||(r=hr,"selectionStart"in r&&Sf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pi&&Ki(Pi,r)||(Pi=r,r=Qs(Xu,"onSelect"),0<r.length&&(t=new kf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hr)))}function Jo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pr={animationend:Jo("Animation","AnimationEnd"),animationiteration:Jo("Animation","AnimationIteration"),animationstart:Jo("Animation","AnimationStart"),transitionend:Jo("Transition","TransitionEnd")},Bl={},Ug={};Mt&&(Ug=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function Ba(e){if(Bl[e])return Bl[e];if(!pr[e])return e;var t=pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ug)return Bl[e]=t[n];return e}var Fg=Ba("animationend"),zg=Ba("animationiteration"),jg=Ba("animationstart"),Bg=Ba("transitionend"),Hg=new Map,Ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,t){Hg.set(e,t),ir(t,[e])}for(var Hl=0;Hl<Ph.length;Hl++){var Vl=Ph[Hl],yw=Vl.toLowerCase(),ww=Vl[0].toUpperCase()+Vl.slice(1);Tn(yw,"on"+ww)}Tn(Fg,"onAnimationEnd");Tn(zg,"onAnimationIteration");Tn(jg,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(Bg,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_w=new Set("cancel close invalid load scroll toggle".split(" ").concat(_i));function Ah(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,y2(r,t,void 0,e),e.currentTarget=null}function Vg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Ah(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Ah(i,a,u),o=l}}}if(Gs)throw e=Wu,Gs=!1,Wu=null,e}function Y(e,t){var n=t[tc];n===void 0&&(n=t[tc]=new Set);var r=e+"__bubble";n.has(r)||(Wg(t,e,2,!1),n.add(r))}function Wl(e,t,n){var r=0;t&&(r|=4),Wg(n,e,r,t)}var Zo="_reactListening"+Math.random().toString(36).slice(2);function Yi(e){if(!e[Zo]){e[Zo]=!0,Jm.forEach(function(n){n!=="selectionchange"&&(_w.has(n)||Wl(n,!1,e),Wl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zo]||(t[Zo]=!0,Wl("selectionchange",!1,t))}}function Wg(e,t,n,r){switch(Cg(t)){case 1:var i=L2;break;case 4:i=D2;break;default:i=wf}n=i.bind(null,t,n,e),i=void 0,!Vu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Gl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=$n(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}pg(function(){var u=o,c=mf(n),f=[];e:{var h=Hg.get(e);if(h!==void 0){var v=kf,y=e;switch(e){case"keypress":if(Ns(n)===0)break e;case"keydown":case"keyup":v=q2;break;case"focusin":y="focus",v=Fl;break;case"focusout":y="blur",v=Fl;break;case"beforeblur":case"afterblur":v=Fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=U2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Z2;break;case Fg:case zg:case jg:v=j2;break;case Bg:v=tw;break;case"scroll":v=M2;break;case"wheel":v=rw;break;case"copy":case"cut":case"paste":v=H2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=kh}var w=(t&4)!==0,T=!w&&e==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var d=u,m;d!==null;){m=d;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,p!==null&&(_=Bi(d,p),_!=null&&w.push(Xi(d,_,m)))),T)break;d=d.return}0<w.length&&(h=new v(h,y,null,n,c),f.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Bu&&(y=n.relatedTarget||n.fromElement)&&($n(y)||y[$t]))break e;if((v||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?$n(y):null,y!==null&&(T=or(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(w=wh,_="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=kh,_="onPointerLeave",p="onPointerEnter",d="pointer"),T=v==null?h:mr(v),m=y==null?h:mr(y),h=new w(_,d+"leave",v,n,c),h.target=T,h.relatedTarget=m,_=null,$n(c)===u&&(w=new w(p,d+"enter",y,n,c),w.target=m,w.relatedTarget=T,_=w),T=_,v&&y)t:{for(w=v,p=y,d=0,m=w;m;m=lr(m))d++;for(m=0,_=p;_;_=lr(_))m++;for(;0<d-m;)w=lr(w),d--;for(;0<m-d;)p=lr(p),m--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=lr(w),p=lr(p)}w=null}else w=null;v!==null&&Rh(f,h,v,w,!1),y!==null&&T!==null&&Rh(f,T,y,w,!0)}}e:{if(h=u?mr(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var x=cw;else if(Sh(h))if(Lg)x=pw;else{x=dw;var b=fw}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=hw);if(x&&(x=x(e,u))){Og(f,x,n,c);break e}b&&b(e,h,u),e==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&$u(h,"number",h.value)}switch(b=u?mr(u):window,e){case"focusin":(Sh(b)||b.contentEditable==="true")&&(hr=b,Xu=u,Pi=null);break;case"focusout":Pi=Xu=hr=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,Nh(f,n,c);break;case"selectionchange":if(vw)break;case"keydown":case"keyup":Nh(f,n,c)}var I;if(xf)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else dr?Ag(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Pg&&n.locale!=="ko"&&(dr||A!=="onCompositionStart"?A==="onCompositionEnd"&&dr&&(I=Ng()):(on=c,_f="value"in on?on.value:on.textContent,dr=!0)),b=Qs(u,A),0<b.length&&(A=new _h(A,e,null,n,c),f.push({event:A,listeners:b}),I?A.data=I:(I=Rg(n),I!==null&&(A.data=I)))),(I=ow?sw(e,n):aw(e,n))&&(u=Qs(u,"onBeforeInput"),0<u.length&&(c=new _h("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=I))}Vg(f,t)})}function Xi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Bi(e,n),o!=null&&r.unshift(Xi(e,o,i)),o=Bi(e,t),o!=null&&r.push(Xi(e,o,i))),e=e.return}return r}function lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rh(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Bi(n,o),l!=null&&s.unshift(Xi(n,l,a))):i||(l=Bi(n,o),l!=null&&s.push(Xi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var kw=/\r\n?/g,Ew=/\u0000|\uFFFD/g;function Oh(e){return(typeof e=="string"?e:""+e).replace(kw,`
`).replace(Ew,"")}function es(e,t,n){if(t=Oh(t),Oh(e)!==t&&n)throw Error(k(425))}function Js(){}var Qu=null,Ju=null;function Zu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ec=typeof setTimeout=="function"?setTimeout:void 0,xw=typeof clearTimeout=="function"?clearTimeout:void 0,Lh=typeof Promise=="function"?Promise:void 0,Sw=typeof queueMicrotask=="function"?queueMicrotask:typeof Lh<"u"?function(e){return Lh.resolve(null).then(e).catch(bw)}:ec;function bw(e){setTimeout(function(){throw e})}function Kl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Wi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wi(t)}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Dh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xr=Math.random().toString(36).slice(2),yt="__reactFiber$"+Xr,qi="__reactProps$"+Xr,$t="__reactContainer$"+Xr,tc="__reactEvents$"+Xr,Iw="__reactListeners$"+Xr,Tw="__reactHandles$"+Xr;function $n(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Dh(e);e!==null;){if(n=e[yt])return n;e=Dh(e)}return t}e=n,n=e.parentNode}return null}function xo(e){return e=e[yt]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ha(e){return e[qi]||null}var nc=[],gr=-1;function Cn(e){return{current:e}}function q(e){0>gr||(e.current=nc[gr],nc[gr]=null,gr--)}function K(e,t){gr++,nc[gr]=e.current,e.current=t}var kn={},Ne=Cn(kn),Ue=Cn(!1),Yn=kn;function Ur(e,t){var n=e.type.contextTypes;if(!n)return kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(e){return e=e.childContextTypes,e!=null}function Zs(){q(Ue),q(Ne)}function Mh(e,t,n){if(Ne.current!==kn)throw Error(k(168));K(Ne,t),K(Ue,n)}function Gg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,f2(e)||"Unknown",i));return ne({},n,r)}function ea(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,Yn=Ne.current,K(Ne,e),K(Ue,Ue.current),!0}function $h(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Gg(e,t,Yn),r.__reactInternalMemoizedMergedChildContext=e,q(Ue),q(Ne),K(Ne,e)):q(Ue),K(Ue,n)}var Nt=null,Va=!1,Yl=!1;function Kg(e){Nt===null?Nt=[e]:Nt.push(e)}function Cw(e){Va=!0,Kg(e)}function Nn(){if(!Yl&&Nt!==null){Yl=!0;var e=0,t=G;try{var n=Nt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nt=null,Va=!1}catch(i){throw Nt!==null&&(Nt=Nt.slice(e+1)),yg(gf,Nn),i}finally{G=t,Yl=!1}}return null}var vr=[],yr=0,ta=null,na=0,Je=[],Ze=0,Xn=null,Pt=1,At="";function Ln(e,t){vr[yr++]=na,vr[yr++]=ta,ta=e,na=t}function Yg(e,t,n){Je[Ze++]=Pt,Je[Ze++]=At,Je[Ze++]=Xn,Xn=e;var r=Pt;e=At;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var o=32-dt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Pt=1<<32-dt(t)+i|n<<i|r,At=o+e}else Pt=1<<o|n<<i|r,At=e}function bf(e){e.return!==null&&(Ln(e,1),Yg(e,1,0))}function If(e){for(;e===ta;)ta=vr[--yr],vr[yr]=null,na=vr[--yr],vr[yr]=null;for(;e===Xn;)Xn=Je[--Ze],Je[Ze]=null,At=Je[--Ze],Je[Ze]=null,Pt=Je[--Ze],Je[Ze]=null}var Ve=null,Be=null,J=!1,ut=null;function Xg(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Uh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,Be=dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xn!==null?{id:Pt,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,Be=null,!0):!1;default:return!1}}function rc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ic(e){if(J){var t=Be;if(t){var n=t;if(!Uh(e,t)){if(rc(e))throw Error(k(418));t=dn(n.nextSibling);var r=Ve;t&&Uh(e,t)?Xg(r,n):(e.flags=e.flags&-4097|2,J=!1,Ve=e)}}else{if(rc(e))throw Error(k(418));e.flags=e.flags&-4097|2,J=!1,Ve=e}}}function Fh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function ts(e){if(e!==Ve)return!1;if(!J)return Fh(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zu(e.type,e.memoizedProps)),t&&(t=Be)){if(rc(e))throw qg(),Error(k(418));for(;t;)Xg(e,t),t=dn(t.nextSibling)}if(Fh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Be=dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=Ve?dn(e.stateNode.nextSibling):null;return!0}function qg(){for(var e=Be;e;)e=dn(e.nextSibling)}function Fr(){Be=Ve=null,J=!1}function Tf(e){ut===null?ut=[e]:ut.push(e)}var Nw=Wt.ReactCurrentBatchConfig;function at(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ra=Cn(null),ia=null,wr=null,Cf=null;function Nf(){Cf=wr=ia=null}function Pf(e){var t=ra.current;q(ra),e._currentValue=t}function oc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ar(e,t){ia=e,Cf=wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(Cf!==e)if(e={context:e,memoizedValue:t,next:null},wr===null){if(ia===null)throw Error(k(308));wr=e,ia.dependencies={lanes:0,firstContext:e}}else wr=wr.next=e;return t}var Un=null;function Af(e){Un===null?Un=[e]:Un.push(e)}function Qg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Af(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qt=!1;function Rf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ut(e,n)}return i=r.interleaved,i===null?(t.next=t,Af(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ut(e,n)}function Ps(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vf(e,n)}}function zh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oa(e,t,n,r){var i=e.updateQueue;Qt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,v=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(h=t,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(v,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(v,f,h):y,h==null)break e;f=ne({},f,h);break e;case 2:Qt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=v,l=f):c=c.next=v,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Qn|=s,e.lanes=s,e.memoizedState=f}}function jh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Zg=new Qm.Component().refs;function sc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wa={isMounted:function(e){return(e=e._reactInternals)?or(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oe(),i=mn(e),o=Dt(r,i);o.payload=t,n!=null&&(o.callback=n),t=hn(e,o,i),t!==null&&(ht(t,e,i,r),Ps(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oe(),i=mn(e),o=Dt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=hn(e,o,i),t!==null&&(ht(t,e,i,r),Ps(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oe(),r=mn(e),i=Dt(n,r);i.tag=2,t!=null&&(i.callback=t),t=hn(e,i,r),t!==null&&(ht(t,e,r,n),Ps(t,e,r))}};function Bh(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ki(n,r)||!Ki(i,o):!0}function e1(e,t,n){var r=!1,i=kn,o=t.contextType;return typeof o=="object"&&o!==null?o=nt(o):(i=Fe(t)?Yn:Ne.current,r=t.contextTypes,o=(r=r!=null)?Ur(e,i):kn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Hh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wa.enqueueReplaceState(t,t.state,null)}function ac(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Zg,Rf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=nt(o):(o=Fe(t)?Yn:Ne.current,i.context=Ur(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(sc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Wa.enqueueReplaceState(i,i.state,null),oa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function di(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Zg&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ns(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vh(e){var t=e._init;return t(e._payload)}function t1(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=gn(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,_){return d===null||d.tag!==6?(d=tu(m,p.mode,_),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,_){var x=m.type;return x===fr?c(p,d,m.props.children,_,m.key):d!==null&&(d.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===qt&&Vh(x)===d.type)?(_=i(d,m.props),_.ref=di(p,d,m),_.return=p,_):(_=Ms(m.type,m.key,m.props,null,p.mode,_),_.ref=di(p,d,m),_.return=p,_)}function u(p,d,m,_){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=nu(m,p.mode,_),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,_,x){return d===null||d.tag!==7?(d=Wn(m,p.mode,_,x),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=tu(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Wo:return m=Ms(d.type,d.key,d.props,null,p.mode,m),m.ref=di(p,null,d),m.return=p,m;case cr:return d=nu(d,p.mode,m),d.return=p,d;case qt:var _=d._init;return f(p,_(d._payload),m)}if(yi(d)||ai(d))return d=Wn(d,p.mode,m,null),d.return=p,d;ns(p,d)}return null}function h(p,d,m,_){var x=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return x!==null?null:a(p,d,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Wo:return m.key===x?l(p,d,m,_):null;case cr:return m.key===x?u(p,d,m,_):null;case qt:return x=m._init,h(p,d,x(m._payload),_)}if(yi(m)||ai(m))return x!==null?null:c(p,d,m,_,null);ns(p,m)}return null}function v(p,d,m,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(m)||null,a(d,p,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Wo:return p=p.get(_.key===null?m:_.key)||null,l(d,p,_,x);case cr:return p=p.get(_.key===null?m:_.key)||null,u(d,p,_,x);case qt:var b=_._init;return v(p,d,m,b(_._payload),x)}if(yi(_)||ai(_))return p=p.get(m)||null,c(d,p,_,x,null);ns(d,_)}return null}function y(p,d,m,_){for(var x=null,b=null,I=d,A=d=0,B=null;I!==null&&A<m.length;A++){I.index>A?(B=I,I=null):B=I.sibling;var U=h(p,I,m[A],_);if(U===null){I===null&&(I=B);break}e&&I&&U.alternate===null&&t(p,I),d=o(U,d,A),b===null?x=U:b.sibling=U,b=U,I=B}if(A===m.length)return n(p,I),J&&Ln(p,A),x;if(I===null){for(;A<m.length;A++)I=f(p,m[A],_),I!==null&&(d=o(I,d,A),b===null?x=I:b.sibling=I,b=I);return J&&Ln(p,A),x}for(I=r(p,I);A<m.length;A++)B=v(I,p,A,m[A],_),B!==null&&(e&&B.alternate!==null&&I.delete(B.key===null?A:B.key),d=o(B,d,A),b===null?x=B:b.sibling=B,b=B);return e&&I.forEach(function(ot){return t(p,ot)}),J&&Ln(p,A),x}function w(p,d,m,_){var x=ai(m);if(typeof x!="function")throw Error(k(150));if(m=x.call(m),m==null)throw Error(k(151));for(var b=x=null,I=d,A=d=0,B=null,U=m.next();I!==null&&!U.done;A++,U=m.next()){I.index>A?(B=I,I=null):B=I.sibling;var ot=h(p,I,U.value,_);if(ot===null){I===null&&(I=B);break}e&&I&&ot.alternate===null&&t(p,I),d=o(ot,d,A),b===null?x=ot:b.sibling=ot,b=ot,I=B}if(U.done)return n(p,I),J&&Ln(p,A),x;if(I===null){for(;!U.done;A++,U=m.next())U=f(p,U.value,_),U!==null&&(d=o(U,d,A),b===null?x=U:b.sibling=U,b=U);return J&&Ln(p,A),x}for(I=r(p,I);!U.done;A++,U=m.next())U=v(I,p,A,U.value,_),U!==null&&(e&&U.alternate!==null&&I.delete(U.key===null?A:U.key),d=o(U,d,A),b===null?x=U:b.sibling=U,b=U);return e&&I.forEach(function(oi){return t(p,oi)}),J&&Ln(p,A),x}function T(p,d,m,_){if(typeof m=="object"&&m!==null&&m.type===fr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Wo:e:{for(var x=m.key,b=d;b!==null;){if(b.key===x){if(x=m.type,x===fr){if(b.tag===7){n(p,b.sibling),d=i(b,m.props.children),d.return=p,p=d;break e}}else if(b.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===qt&&Vh(x)===b.type){n(p,b.sibling),d=i(b,m.props),d.ref=di(p,b,m),d.return=p,p=d;break e}n(p,b);break}else t(p,b);b=b.sibling}m.type===fr?(d=Wn(m.props.children,p.mode,_,m.key),d.return=p,p=d):(_=Ms(m.type,m.key,m.props,null,p.mode,_),_.ref=di(p,d,m),_.return=p,p=_)}return s(p);case cr:e:{for(b=m.key;d!==null;){if(d.key===b)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=nu(m,p.mode,_),d.return=p,p=d}return s(p);case qt:return b=m._init,T(p,d,b(m._payload),_)}if(yi(m))return y(p,d,m,_);if(ai(m))return w(p,d,m,_);ns(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=tu(m,p.mode,_),d.return=p,p=d),s(p)):n(p,d)}return T}var zr=t1(!0),n1=t1(!1),So={},Et=Cn(So),Qi=Cn(So),Ji=Cn(So);function Fn(e){if(e===So)throw Error(k(174));return e}function Of(e,t){switch(K(Ji,t),K(Qi,e),K(Et,So),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fu(t,e)}q(Et),K(Et,t)}function jr(){q(Et),q(Qi),q(Ji)}function r1(e){Fn(Ji.current);var t=Fn(Et.current),n=Fu(t,e.type);t!==n&&(K(Qi,e),K(Et,n))}function Lf(e){Qi.current===e&&(q(Et),q(Qi))}var ee=Cn(0);function sa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xl=[];function Df(){for(var e=0;e<Xl.length;e++)Xl[e]._workInProgressVersionPrimary=null;Xl.length=0}var As=Wt.ReactCurrentDispatcher,ql=Wt.ReactCurrentBatchConfig,qn=0,te=null,ce=null,pe=null,aa=!1,Ai=!1,Zi=0,Pw=0;function Ee(){throw Error(k(321))}function Mf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function $f(e,t,n,r,i,o){if(qn=o,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,As.current=e===null||e.memoizedState===null?Lw:Dw,e=n(r,i),Ai){o=0;do{if(Ai=!1,Zi=0,25<=o)throw Error(k(301));o+=1,pe=ce=null,t.updateQueue=null,As.current=Mw,e=n(r,i)}while(Ai)}if(As.current=la,t=ce!==null&&ce.next!==null,qn=0,pe=ce=te=null,aa=!1,t)throw Error(k(300));return e}function Uf(){var e=Zi!==0;return Zi=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?te.memoizedState=pe=e:pe=pe.next=e,pe}function rt(){if(ce===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=pe===null?te.memoizedState:pe.next;if(t!==null)pe=t,ce=e;else{if(e===null)throw Error(k(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},pe===null?te.memoizedState=pe=e:pe=pe.next=e}return pe}function eo(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=rt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ce,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((qn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,te.lanes|=c,Qn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,pt(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,te.lanes|=o,Qn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Jl(e){var t=rt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);pt(o,t.memoizedState)||($e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function i1(){}function o1(e,t){var n=te,r=rt(),i=t(),o=!pt(r.memoizedState,i);if(o&&(r.memoizedState=i,$e=!0),r=r.queue,Ff(l1.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,to(9,a1.bind(null,n,r,i,t),void 0,null),me===null)throw Error(k(349));qn&30||s1(n,t,i)}return i}function s1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function a1(e,t,n,r){t.value=n,t.getSnapshot=r,u1(t)&&c1(e)}function l1(e,t,n){return n(function(){u1(t)&&c1(e)})}function u1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function c1(e){var t=Ut(e,1);t!==null&&ht(t,e,1,-1)}function Wh(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:eo,lastRenderedState:e},t.queue=e,e=e.dispatch=Ow.bind(null,te,e),[t.memoizedState,e]}function to(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function f1(){return rt().memoizedState}function Rs(e,t,n,r){var i=vt();te.flags|=e,i.memoizedState=to(1|t,n,void 0,r===void 0?null:r)}function Ga(e,t,n,r){var i=rt();r=r===void 0?null:r;var o=void 0;if(ce!==null){var s=ce.memoizedState;if(o=s.destroy,r!==null&&Mf(r,s.deps)){i.memoizedState=to(t,n,o,r);return}}te.flags|=e,i.memoizedState=to(1|t,n,o,r)}function Gh(e,t){return Rs(8390656,8,e,t)}function Ff(e,t){return Ga(2048,8,e,t)}function d1(e,t){return Ga(4,2,e,t)}function h1(e,t){return Ga(4,4,e,t)}function p1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function m1(e,t,n){return n=n!=null?n.concat([e]):null,Ga(4,4,p1.bind(null,t,e),n)}function zf(){}function g1(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function v1(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function y1(e,t,n){return qn&21?(pt(n,t)||(n=kg(),te.lanes|=n,Qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function Aw(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=ql.transition;ql.transition={};try{e(!1),t()}finally{G=n,ql.transition=r}}function w1(){return rt().memoizedState}function Rw(e,t,n){var r=mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_1(e))k1(t,n);else if(n=Qg(e,t,n,r),n!==null){var i=Oe();ht(n,e,r,i),E1(n,t,r)}}function Ow(e,t,n){var r=mn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_1(e))k1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,pt(a,s)){var l=t.interleaved;l===null?(i.next=i,Af(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Qg(e,t,i,r),n!==null&&(i=Oe(),ht(n,e,r,i),E1(n,t,r))}}function _1(e){var t=e.alternate;return e===te||t!==null&&t===te}function k1(e,t){Ai=aa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function E1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vf(e,n)}}var la={readContext:nt,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},Lw={readContext:nt,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Gh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Rs(4194308,4,p1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Rs(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Rw.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:Wh,useDebugValue:zf,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=Wh(!1),t=e[0];return e=Aw.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,i=vt();if(J){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),me===null)throw Error(k(349));qn&30||s1(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Gh(l1.bind(null,r,o,e),[e]),r.flags|=2048,to(9,a1.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=vt(),t=me.identifierPrefix;if(J){var n=At,r=Pt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Pw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Dw={readContext:nt,useCallback:g1,useContext:nt,useEffect:Ff,useImperativeHandle:m1,useInsertionEffect:d1,useLayoutEffect:h1,useMemo:v1,useReducer:Ql,useRef:f1,useState:function(){return Ql(eo)},useDebugValue:zf,useDeferredValue:function(e){var t=rt();return y1(t,ce.memoizedState,e)},useTransition:function(){var e=Ql(eo)[0],t=rt().memoizedState;return[e,t]},useMutableSource:i1,useSyncExternalStore:o1,useId:w1,unstable_isNewReconciler:!1},Mw={readContext:nt,useCallback:g1,useContext:nt,useEffect:Ff,useImperativeHandle:m1,useInsertionEffect:d1,useLayoutEffect:h1,useMemo:v1,useReducer:Jl,useRef:f1,useState:function(){return Jl(eo)},useDebugValue:zf,useDeferredValue:function(e){var t=rt();return ce===null?t.memoizedState=e:y1(t,ce.memoizedState,e)},useTransition:function(){var e=Jl(eo)[0],t=rt().memoizedState;return[e,t]},useMutableSource:i1,useSyncExternalStore:o1,useId:w1,unstable_isNewReconciler:!1};function Br(e,t){try{var n="",r=t;do n+=c2(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Zl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function lc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $w=typeof WeakMap=="function"?WeakMap:Map;function x1(e,t,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ca||(ca=!0,yc=r),lc(e,t)},n}function S1(e,t,n){n=Dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){lc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){lc(e,t),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Kh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $w;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Qw.bind(null,e,t,n),t.then(e,e))}function Yh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dt(-1,1),t.tag=2,hn(n,t,1))),n.lanes|=1),e)}var Uw=Wt.ReactCurrentOwner,$e=!1;function Ae(e,t,n,r){t.child=e===null?n1(t,null,n,r):zr(t,e.child,n,r)}function qh(e,t,n,r,i){n=n.render;var o=t.ref;return Ar(t,i),r=$f(e,t,n,r,o,i),n=Uf(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(J&&n&&bf(t),t.flags|=1,Ae(e,t,r,i),t.child)}function Qh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Yf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,b1(e,t,o,r,i)):(e=Ms(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ki,n(s,r)&&e.ref===t.ref)return Ft(e,t,i)}return t.flags|=1,e=gn(o,r),e.ref=t.ref,e.return=t,t.child=e}function b1(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ki(o,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,Ft(e,t,i)}return uc(e,t,n,r,i)}function I1(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(kr,je),je|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(kr,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,K(kr,je),je|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,K(kr,je),je|=r;return Ae(e,t,i,n),t.child}function T1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function uc(e,t,n,r,i){var o=Fe(n)?Yn:Ne.current;return o=Ur(t,o),Ar(t,i),n=$f(e,t,n,r,o,i),r=Uf(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(J&&r&&bf(t),t.flags|=1,Ae(e,t,n,i),t.child)}function Jh(e,t,n,r,i){if(Fe(n)){var o=!0;ea(t)}else o=!1;if(Ar(t,i),t.stateNode===null)Os(e,t),e1(t,n,r),ac(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=Fe(n)?Yn:Ne.current,u=Ur(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Hh(t,s,r,u),Qt=!1;var h=t.memoizedState;s.state=h,oa(t,r,s,i),l=t.memoizedState,a!==r||h!==l||Ue.current||Qt?(typeof c=="function"&&(sc(t,n,c,r),l=t.memoizedState),(a=Qt||Bh(t,n,a,r,h,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Jg(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:at(t.type,a),s.props=u,f=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=nt(l):(l=Fe(n)?Yn:Ne.current,l=Ur(t,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Hh(t,s,r,l),Qt=!1,h=t.memoizedState,s.state=h,oa(t,r,s,i);var y=t.memoizedState;a!==f||h!==y||Ue.current||Qt?(typeof v=="function"&&(sc(t,n,v,r),y=t.memoizedState),(u=Qt||Bh(t,n,u,r,h,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return cc(e,t,n,r,o,i)}function cc(e,t,n,r,i,o){T1(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&$h(t,n,!1),Ft(e,t,o);r=t.stateNode,Uw.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=zr(t,e.child,null,o),t.child=zr(t,null,a,o)):Ae(e,t,a,o),t.memoizedState=r.state,i&&$h(t,n,!0),t.child}function C1(e){var t=e.stateNode;t.pendingContext?Mh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mh(e,t.context,!1),Of(e,t.containerInfo)}function Zh(e,t,n,r,i){return Fr(),Tf(i),t.flags|=256,Ae(e,t,n,r),t.child}var fc={dehydrated:null,treeContext:null,retryLane:0};function dc(e){return{baseLanes:e,cachePool:null,transitions:null}}function N1(e,t,n){var r=t.pendingProps,i=ee.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),K(ee,i&1),e===null)return ic(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Xa(s,r,0,null),e=Wn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=dc(n),t.memoizedState=fc,e):jf(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Fw(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=gn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=gn(a,o):(o=Wn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?dc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=fc,r}return o=e.child,e=o.sibling,r=gn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function jf(e,t){return t=Xa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function rs(e,t,n,r){return r!==null&&Tf(r),zr(t,e.child,null,n),e=jf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fw(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Zl(Error(k(422))),rs(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Xa({mode:"visible",children:r.children},i,0,null),o=Wn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&zr(t,e.child,null,s),t.child.memoizedState=dc(s),t.memoizedState=fc,o);if(!(t.mode&1))return rs(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=Zl(o,r,void 0),rs(e,t,s,r)}if(a=(s&e.childLanes)!==0,$e||a){if(r=me,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ut(e,i),ht(r,e,i,-1))}return Kf(),r=Zl(Error(k(421))),rs(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Jw.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Be=dn(i.nextSibling),Ve=t,J=!0,ut=null,e!==null&&(Je[Ze++]=Pt,Je[Ze++]=At,Je[Ze++]=Xn,Pt=e.id,At=e.overflow,Xn=t),t=jf(t,r.children),t.flags|=4096,t)}function ep(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),oc(e.return,t,n)}function eu(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function P1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ae(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ep(e,n,t);else if(e.tag===19)ep(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&sa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),eu(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&sa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}eu(t,!0,n,null,o);break;case"together":eu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Os(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zw(e,t,n){switch(t.tag){case 3:C1(t),Fr();break;case 5:r1(t);break;case 1:Fe(t.type)&&ea(t);break;case 4:Of(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;K(ra,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?N1(e,t,n):(K(ee,ee.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);K(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return P1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,I1(e,t,n)}return Ft(e,t,n)}var A1,hc,R1,O1;A1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hc=function(){};R1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Fn(Et.current);var o=null;switch(n){case"input":i=Du(e,i),r=Du(e,r),o=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),o=[];break;case"textarea":i=Uu(e,i),r=Uu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Js)}zu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Y("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};O1=function(e,t,n,r){n!==r&&(t.flags|=4)};function hi(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jw(e,t,n){var r=t.pendingProps;switch(If(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Fe(t.type)&&Zs(),xe(t),null;case 3:return r=t.stateNode,jr(),q(Ue),q(Ne),Df(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ts(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(kc(ut),ut=null))),hc(e,t),xe(t),null;case 5:Lf(t);var i=Fn(Ji.current);if(n=t.type,e!==null&&t.stateNode!=null)R1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return xe(t),null}if(e=Fn(Et.current),ts(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[yt]=t,r[qi]=o,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<_i.length;i++)Y(_i[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":uh(r,o),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Y("invalid",r);break;case"textarea":fh(r,o),Y("invalid",r)}zu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&es(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&es(r.textContent,a,e),i=["children",""+a]):zi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Y("scroll",r)}switch(n){case"input":Go(r),ch(r,o,!0);break;case"textarea":Go(r),dh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Js)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[yt]=t,e[qi]=r,A1(e,t,!1,!1),t.stateNode=e;e:{switch(s=ju(n,r),n){case"dialog":Y("cancel",e),Y("close",e),i=r;break;case"iframe":case"object":case"embed":Y("load",e),i=r;break;case"video":case"audio":for(i=0;i<_i.length;i++)Y(_i[i],e);i=r;break;case"source":Y("error",e),i=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),i=r;break;case"details":Y("toggle",e),i=r;break;case"input":uh(e,r),i=Du(e,r),Y("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),Y("invalid",e);break;case"textarea":fh(e,r),i=Uu(e,r),Y("invalid",e);break;default:i=r}zu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?ug(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ag(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ji(e,l):typeof l=="number"&&ji(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Y("scroll",e):l!=null&&ff(e,o,l,s))}switch(n){case"input":Go(e),ch(e,r,!1);break;case"textarea":Go(e),dh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_n(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Tr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Js)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)O1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Fn(Ji.current),Fn(Et.current),ts(t)){if(r=t.stateNode,n=t.memoizedProps,r[yt]=t,(o=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:es(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&es(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=t,t.stateNode=r}return xe(t),null;case 13:if(q(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Be!==null&&t.mode&1&&!(t.flags&128))qg(),Fr(),t.flags|=98560,o=!1;else if(o=ts(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[yt]=t}else Fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xe(t),o=!1}else ut!==null&&(kc(ut),ut=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?fe===0&&(fe=3):Kf())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return jr(),hc(e,t),e===null&&Yi(t.stateNode.containerInfo),xe(t),null;case 10:return Pf(t.type._context),xe(t),null;case 17:return Fe(t.type)&&Zs(),xe(t),null;case 19:if(q(ee),o=t.memoizedState,o===null)return xe(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)hi(o,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=sa(e),s!==null){for(t.flags|=128,hi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(ee,ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&se()>Hr&&(t.flags|=128,r=!0,hi(o,!1),t.lanes=4194304)}else{if(!r)if(e=sa(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!J)return xe(t),null}else 2*se()-o.renderingStartTime>Hr&&n!==1073741824&&(t.flags|=128,r=!0,hi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=se(),t.sibling=null,n=ee.current,K(ee,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return Gf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Bw(e,t){switch(If(t),t.tag){case 1:return Fe(t.type)&&Zs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jr(),q(Ue),q(Ne),Df(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Lf(t),null;case 13:if(q(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(ee),null;case 4:return jr(),null;case 10:return Pf(t.type._context),null;case 22:case 23:return Gf(),null;case 24:return null;default:return null}}var is=!1,Ie=!1,Hw=typeof WeakSet=="function"?WeakSet:Set,N=null;function _r(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function pc(e,t,n){try{n()}catch(r){re(e,t,r)}}var tp=!1;function Vw(e,t){if(Qu=Xs,e=$g(),Sf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++c===r&&(l=s),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ju={focusedElem:e,selectionRange:n},Xs=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,T=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:at(t.type,w),T);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(_){re(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return y=tp,tp=!1,y}function Ri(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&pc(t,n,o)}i=i.next}while(i!==r)}}function Ka(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function mc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function L1(e){var t=e.alternate;t!==null&&(e.alternate=null,L1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[qi],delete t[tc],delete t[Iw],delete t[Tw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function D1(e){return e.tag===5||e.tag===3||e.tag===4}function np(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||D1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Js));else if(r!==4&&(e=e.child,e!==null))for(gc(e,t,n),e=e.sibling;e!==null;)gc(e,t,n),e=e.sibling}function vc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vc(e,t,n),e=e.sibling;e!==null;)vc(e,t,n),e=e.sibling}var ve=null,lt=!1;function Kt(e,t,n){for(n=n.child;n!==null;)M1(e,t,n),n=n.sibling}function M1(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Fa,n)}catch{}switch(n.tag){case 5:Ie||_r(n,t);case 6:var r=ve,i=lt;ve=null,Kt(e,t,n),ve=r,lt=i,ve!==null&&(lt?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(lt?(e=ve,n=n.stateNode,e.nodeType===8?Kl(e.parentNode,n):e.nodeType===1&&Kl(e,n),Wi(e)):Kl(ve,n.stateNode));break;case 4:r=ve,i=lt,ve=n.stateNode.containerInfo,lt=!0,Kt(e,t,n),ve=r,lt=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&pc(n,t,s),i=i.next}while(i!==r)}Kt(e,t,n);break;case 1:if(!Ie&&(_r(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){re(n,t,a)}Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,Kt(e,t,n),Ie=r):Kt(e,t,n);break;default:Kt(e,t,n)}}function rp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hw),t.forEach(function(r){var i=Zw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ve=a.stateNode,lt=!1;break e;case 3:ve=a.stateNode.containerInfo,lt=!0;break e;case 4:ve=a.stateNode.containerInfo,lt=!0;break e}a=a.return}if(ve===null)throw Error(k(160));M1(o,s,i),ve=null,lt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){re(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$1(t,e),t=t.sibling}function $1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),gt(e),r&4){try{Ri(3,e,e.return),Ka(3,e)}catch(w){re(e,e.return,w)}try{Ri(5,e,e.return)}catch(w){re(e,e.return,w)}}break;case 1:st(t,e),gt(e),r&512&&n!==null&&_r(n,n.return);break;case 5:if(st(t,e),gt(e),r&512&&n!==null&&_r(n,n.return),e.flags&32){var i=e.stateNode;try{ji(i,"")}catch(w){re(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ig(i,o),ju(a,s);var u=ju(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?ug(i,f):c==="dangerouslySetInnerHTML"?ag(i,f):c==="children"?ji(i,f):ff(i,c,f,u)}switch(a){case"input":Mu(i,o);break;case"textarea":og(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Tr(i,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?Tr(i,!!o.multiple,o.defaultValue,!0):Tr(i,!!o.multiple,o.multiple?[]:"",!1))}i[qi]=o}catch(w){re(e,e.return,w)}}break;case 6:if(st(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){re(e,e.return,w)}}break;case 3:if(st(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wi(t.containerInfo)}catch(w){re(e,e.return,w)}break;case 4:st(t,e),gt(e);break;case 13:st(t,e),gt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Vf=se())),r&4&&rp(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ie=(u=Ie)||c,st(t,e),Ie=u):st(t,e),gt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(N=e,c=e.child;c!==null;){for(f=N=c;N!==null;){switch(h=N,v=h.child,h.tag){case 0:case 11:case 14:case 15:Ri(4,h,h.return);break;case 1:_r(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){re(r,n,w)}}break;case 5:_r(h,h.return);break;case 22:if(h.memoizedState!==null){op(f);continue}}v!==null?(v.return=h,N=v):op(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lg("display",s))}catch(w){re(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){re(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:st(t,e),gt(e),r&4&&rp(e);break;case 21:break;default:st(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(D1(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ji(i,""),r.flags&=-33);var o=np(e);vc(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=np(e);gc(e,a,s);break;default:throw Error(k(161))}}catch(l){re(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ww(e,t,n){N=e,U1(e)}function U1(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||is;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ie;a=is;var u=Ie;if(is=s,(Ie=l)&&!u)for(N=i;N!==null;)s=N,l=s.child,s.tag===22&&s.memoizedState!==null?sp(i):l!==null?(l.return=s,N=l):sp(i);for(;o!==null;)N=o,U1(o),o=o.sibling;N=i,is=a,Ie=u}ip(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):ip(e)}}function ip(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||Ka(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&jh(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}jh(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Wi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Ie||t.flags&512&&mc(t)}catch(h){re(t,t.return,h)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function op(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function sp(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ka(4,t)}catch(l){re(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){re(t,i,l)}}var o=t.return;try{mc(t)}catch(l){re(t,o,l)}break;case 5:var s=t.return;try{mc(t)}catch(l){re(t,s,l)}}}catch(l){re(t,t.return,l)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var Gw=Math.ceil,ua=Wt.ReactCurrentDispatcher,Bf=Wt.ReactCurrentOwner,tt=Wt.ReactCurrentBatchConfig,V=0,me=null,le=null,ye=0,je=0,kr=Cn(0),fe=0,no=null,Qn=0,Ya=0,Hf=0,Oi=null,Me=null,Vf=0,Hr=1/0,Ct=null,ca=!1,yc=null,pn=null,os=!1,sn=null,fa=0,Li=0,wc=null,Ls=-1,Ds=0;function Oe(){return V&6?se():Ls!==-1?Ls:Ls=se()}function mn(e){return e.mode&1?V&2&&ye!==0?ye&-ye:Nw.transition!==null?(Ds===0&&(Ds=kg()),Ds):(e=G,e!==0||(e=window.event,e=e===void 0?16:Cg(e.type)),e):1}function ht(e,t,n,r){if(50<Li)throw Li=0,wc=null,Error(k(185));ko(e,n,r),(!(V&2)||e!==me)&&(e===me&&(!(V&2)&&(Ya|=n),fe===4&&Zt(e,ye)),ze(e,r),n===1&&V===0&&!(t.mode&1)&&(Hr=se()+500,Va&&Nn()))}function ze(e,t){var n=e.callbackNode;N2(e,t);var r=Ys(e,e===me?ye:0);if(r===0)n!==null&&mh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mh(n),t===1)e.tag===0?Cw(ap.bind(null,e)):Kg(ap.bind(null,e)),Sw(function(){!(V&6)&&Nn()}),n=null;else{switch(Eg(r)){case 1:n=gf;break;case 4:n=wg;break;case 16:n=Ks;break;case 536870912:n=_g;break;default:n=Ks}n=G1(n,F1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function F1(e,t){if(Ls=-1,Ds=0,V&6)throw Error(k(327));var n=e.callbackNode;if(Rr()&&e.callbackNode!==n)return null;var r=Ys(e,e===me?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=da(e,r);else{t=r;var i=V;V|=2;var o=j1();(me!==e||ye!==t)&&(Ct=null,Hr=se()+500,Vn(e,t));do try{Xw();break}catch(a){z1(e,a)}while(1);Nf(),ua.current=o,V=i,le!==null?t=0:(me=null,ye=0,t=fe)}if(t!==0){if(t===2&&(i=Gu(e),i!==0&&(r=i,t=_c(e,i))),t===1)throw n=no,Vn(e,0),Zt(e,r),ze(e,se()),n;if(t===6)Zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Kw(i)&&(t=da(e,r),t===2&&(o=Gu(e),o!==0&&(r=o,t=_c(e,o))),t===1))throw n=no,Vn(e,0),Zt(e,r),ze(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Dn(e,Me,Ct);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=Vf+500-se(),10<t)){if(Ys(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Oe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ec(Dn.bind(null,e,Me,Ct),t);break}Dn(e,Me,Ct);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-dt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gw(r/1960))-r,10<r){e.timeoutHandle=ec(Dn.bind(null,e,Me,Ct),r);break}Dn(e,Me,Ct);break;case 5:Dn(e,Me,Ct);break;default:throw Error(k(329))}}}return ze(e,se()),e.callbackNode===n?F1.bind(null,e):null}function _c(e,t){var n=Oi;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=da(e,t),e!==2&&(t=Me,Me=n,t!==null&&kc(t)),e}function kc(e){Me===null?Me=e:Me.push.apply(Me,e)}function Kw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!pt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~Hf,t&=~Ya,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function ap(e){if(V&6)throw Error(k(327));Rr();var t=Ys(e,0);if(!(t&1))return ze(e,se()),null;var n=da(e,t);if(e.tag!==0&&n===2){var r=Gu(e);r!==0&&(t=r,n=_c(e,r))}if(n===1)throw n=no,Vn(e,0),Zt(e,t),ze(e,se()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,Me,Ct),ze(e,se()),null}function Wf(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(Hr=se()+500,Va&&Nn())}}function Jn(e){sn!==null&&sn.tag===0&&!(V&6)&&Rr();var t=V;V|=1;var n=tt.transition,r=G;try{if(tt.transition=null,G=1,e)return e()}finally{G=r,tt.transition=n,V=t,!(V&6)&&Nn()}}function Gf(){je=kr.current,q(kr)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xw(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(If(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zs();break;case 3:jr(),q(Ue),q(Ne),Df();break;case 5:Lf(r);break;case 4:jr();break;case 13:q(ee);break;case 19:q(ee);break;case 10:Pf(r.type._context);break;case 22:case 23:Gf()}n=n.return}if(me=e,le=e=gn(e.current,null),ye=je=t,fe=0,no=null,Hf=Ya=Qn=0,Me=Oi=null,Un!==null){for(t=0;t<Un.length;t++)if(n=Un[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Un=null}return e}function z1(e,t){do{var n=le;try{if(Nf(),As.current=la,aa){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}aa=!1}if(qn=0,pe=ce=te=null,Ai=!1,Zi=0,Bf.current=null,n===null||n.return===null){fe=1,no=t,le=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=Yh(s);if(v!==null){v.flags&=-257,Xh(v,s,a,o,t),v.mode&1&&Kh(o,u,t),t=v,l=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){Kh(o,u,t),Kf();break e}l=Error(k(426))}}else if(J&&a.mode&1){var T=Yh(s);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Xh(T,s,a,o,t),Tf(Br(l,a));break e}}o=l=Br(l,a),fe!==4&&(fe=2),Oi===null?Oi=[o]:Oi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=x1(o,l,t);zh(o,p);break e;case 1:a=l;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(pn===null||!pn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var _=S1(o,a,t);zh(o,_);break e}}o=o.return}while(o!==null)}H1(n)}catch(x){t=x,le===n&&n!==null&&(le=n=n.return);continue}break}while(1)}function j1(){var e=ua.current;return ua.current=la,e===null?la:e}function Kf(){(fe===0||fe===3||fe===2)&&(fe=4),me===null||!(Qn&268435455)&&!(Ya&268435455)||Zt(me,ye)}function da(e,t){var n=V;V|=2;var r=j1();(me!==e||ye!==t)&&(Ct=null,Vn(e,t));do try{Yw();break}catch(i){z1(e,i)}while(1);if(Nf(),V=n,ua.current=r,le!==null)throw Error(k(261));return me=null,ye=0,fe}function Yw(){for(;le!==null;)B1(le)}function Xw(){for(;le!==null&&!_2();)B1(le)}function B1(e){var t=W1(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?H1(e):le=t,Bf.current=null}function H1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Bw(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,le=null;return}}else if(n=jw(n,t,je),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);fe===0&&(fe=5)}function Dn(e,t,n){var r=G,i=tt.transition;try{tt.transition=null,G=1,qw(e,t,n,r)}finally{tt.transition=i,G=r}return null}function qw(e,t,n,r){do Rr();while(sn!==null);if(V&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(P2(e,o),e===me&&(le=me=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||os||(os=!0,G1(Ks,function(){return Rr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=tt.transition,tt.transition=null;var s=G;G=1;var a=V;V|=4,Bf.current=null,Vw(e,n),$1(n,e),gw(Ju),Xs=!!Qu,Ju=Qu=null,e.current=n,Ww(n),k2(),V=a,G=s,tt.transition=o}else e.current=n;if(os&&(os=!1,sn=e,fa=i),o=e.pendingLanes,o===0&&(pn=null),S2(n.stateNode),ze(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ca)throw ca=!1,e=yc,yc=null,e;return fa&1&&e.tag!==0&&Rr(),o=e.pendingLanes,o&1?e===wc?Li++:(Li=0,wc=e):Li=0,Nn(),null}function Rr(){if(sn!==null){var e=Eg(fa),t=tt.transition,n=G;try{if(tt.transition=null,G=16>e?16:e,sn===null)var r=!1;else{if(e=sn,sn=null,fa=0,V&6)throw Error(k(331));var i=V;for(V|=4,N=e.current;N!==null;){var o=N,s=o.child;if(N.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:Ri(8,c,o)}var f=c.child;if(f!==null)f.return=c,N=f;else for(;N!==null;){c=N;var h=c.sibling,v=c.return;if(L1(c),c===u){N=null;break}if(h!==null){h.return=v,N=h;break}N=v}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var T=w.sibling;w.sibling=null,w=T}while(w!==null)}}N=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,N=s;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ri(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,N=p;break e}N=o.return}}var d=e.current;for(N=d;N!==null;){s=N;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,N=m;else e:for(s=d;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ka(9,a)}}catch(x){re(a,a.return,x)}if(a===s){N=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,N=_;break e}N=a.return}}if(V=i,Nn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Fa,e)}catch{}r=!0}return r}finally{G=n,tt.transition=t}}return!1}function lp(e,t,n){t=Br(n,t),t=x1(e,t,1),e=hn(e,t,1),t=Oe(),e!==null&&(ko(e,1,t),ze(e,t))}function re(e,t,n){if(e.tag===3)lp(e,e,n);else for(;t!==null;){if(t.tag===3){lp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=Br(n,e),e=S1(t,e,1),t=hn(t,e,1),e=Oe(),t!==null&&(ko(t,1,e),ze(t,e));break}}t=t.return}}function Qw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(ye&n)===n&&(fe===4||fe===3&&(ye&130023424)===ye&&500>se()-Vf?Vn(e,0):Hf|=n),ze(e,t)}function V1(e,t){t===0&&(e.mode&1?(t=Xo,Xo<<=1,!(Xo&130023424)&&(Xo=4194304)):t=1);var n=Oe();e=Ut(e,t),e!==null&&(ko(e,t,n),ze(e,n))}function Jw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),V1(e,n)}function Zw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),V1(e,n)}var W1;W1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,zw(e,t,n);$e=!!(e.flags&131072)}else $e=!1,J&&t.flags&1048576&&Yg(t,na,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Os(e,t),e=t.pendingProps;var i=Ur(t,Ne.current);Ar(t,n),i=$f(null,t,r,e,i,n);var o=Uf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(o=!0,ea(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rf(t),i.updater=Wa,t.stateNode=i,i._reactInternals=t,ac(t,r,e,n),t=cc(null,t,r,!0,o,n)):(t.tag=0,J&&o&&bf(t),Ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Os(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=t_(r),e=at(r,e),i){case 0:t=uc(null,t,r,e,n);break e;case 1:t=Jh(null,t,r,e,n);break e;case 11:t=qh(null,t,r,e,n);break e;case 14:t=Qh(null,t,r,at(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),uc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),Jh(e,t,r,i,n);case 3:e:{if(C1(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Jg(e,t),oa(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Br(Error(k(423)),t),t=Zh(e,t,r,n,i);break e}else if(r!==i){i=Br(Error(k(424)),t),t=Zh(e,t,r,n,i);break e}else for(Be=dn(t.stateNode.containerInfo.firstChild),Ve=t,J=!0,ut=null,n=n1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fr(),r===i){t=Ft(e,t,n);break e}Ae(e,t,r,n)}t=t.child}return t;case 5:return r1(t),e===null&&ic(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Zu(r,i)?s=null:o!==null&&Zu(r,o)&&(t.flags|=32),T1(e,t),Ae(e,t,s,n),t.child;case 6:return e===null&&ic(t),null;case 13:return N1(e,t,n);case 4:return Of(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zr(t,null,r,n):Ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),qh(e,t,r,i,n);case 7:return Ae(e,t,t.pendingProps,n),t.child;case 8:return Ae(e,t,t.pendingProps.children,n),t.child;case 12:return Ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,K(ra,r._currentValue),r._currentValue=s,o!==null)if(pt(o.value,s)){if(o.children===i.children&&!Ue.current){t=Ft(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Dt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),oc(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(k(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),oc(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ar(t,n),i=nt(i),r=r(i),t.flags|=1,Ae(e,t,r,n),t.child;case 14:return r=t.type,i=at(r,t.pendingProps),i=at(r.type,i),Qh(e,t,r,i,n);case 15:return b1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),Os(e,t),t.tag=1,Fe(r)?(e=!0,ea(t)):e=!1,Ar(t,n),e1(t,r,i),ac(t,r,i,n),cc(null,t,r,!0,e,n);case 19:return P1(e,t,n);case 22:return I1(e,t,n)}throw Error(k(156,t.tag))};function G1(e,t){return yg(e,t)}function e_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new e_(e,t,n,r)}function Yf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function t_(e){if(typeof e=="function")return Yf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hf)return 11;if(e===pf)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ms(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Yf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case fr:return Wn(n.children,i,o,t);case df:s=8,i|=8;break;case Au:return e=et(12,n,t,i|2),e.elementType=Au,e.lanes=o,e;case Ru:return e=et(13,n,t,i),e.elementType=Ru,e.lanes=o,e;case Ou:return e=et(19,n,t,i),e.elementType=Ou,e.lanes=o,e;case tg:return Xa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zm:s=10;break e;case eg:s=9;break e;case hf:s=11;break e;case pf:s=14;break e;case qt:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=et(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Wn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function Xa(e,t,n,r){return e=et(22,e,r,t),e.elementType=tg,e.lanes=n,e.stateNode={isHidden:!1},e}function tu(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function nu(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function n_(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xf(e,t,n,r,i,o,s,a,l){return e=new n_(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=et(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rf(o),e}function r_(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function K1(e){if(!e)return kn;e=e._reactInternals;e:{if(or(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Fe(n))return Gg(e,n,t)}return t}function Y1(e,t,n,r,i,o,s,a,l){return e=Xf(n,r,!0,e,i,o,s,a,l),e.context=K1(null),n=e.current,r=Oe(),i=mn(n),o=Dt(r,i),o.callback=t??null,hn(n,o,i),e.current.lanes=i,ko(e,i,r),ze(e,r),e}function qa(e,t,n,r){var i=t.current,o=Oe(),s=mn(i);return n=K1(n),t.context===null?t.context=n:t.pendingContext=n,t=Dt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=hn(i,t,s),e!==null&&(ht(e,i,s,o),Ps(e,i,s)),s}function ha(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function up(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qf(e,t){up(e,t),(e=e.alternate)&&up(e,t)}function i_(){return null}var X1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qf(e){this._internalRoot=e}Qa.prototype.render=Qf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));qa(e,t,null,null)};Qa.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jn(function(){qa(null,e,null,null)}),t[$t]=null}};function Qa(e){this._internalRoot=e}Qa.prototype.unstable_scheduleHydration=function(e){if(e){var t=bg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&Tg(e)}};function Jf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cp(){}function o_(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ha(s);o.call(u)}}var s=Y1(t,r,e,0,null,!1,!1,"",cp);return e._reactRootContainer=s,e[$t]=s.current,Yi(e.nodeType===8?e.parentNode:e),Jn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ha(l);a.call(u)}}var l=Xf(e,0,!1,null,null,!1,!1,"",cp);return e._reactRootContainer=l,e[$t]=l.current,Yi(e.nodeType===8?e.parentNode:e),Jn(function(){qa(t,l,n,r)}),l}function Za(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=ha(s);a.call(l)}}qa(t,s,e,i)}else s=o_(n,t,e,i,r);return ha(s)}xg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wi(t.pendingLanes);n!==0&&(vf(t,n|1),ze(t,se()),!(V&6)&&(Hr=se()+500,Nn()))}break;case 13:Jn(function(){var r=Ut(e,1);if(r!==null){var i=Oe();ht(r,e,1,i)}}),qf(e,1)}};yf=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=Oe();ht(t,e,134217728,n)}qf(e,134217728)}};Sg=function(e){if(e.tag===13){var t=mn(e),n=Ut(e,t);if(n!==null){var r=Oe();ht(n,e,t,r)}qf(e,t)}};bg=function(){return G};Ig=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};Hu=function(e,t,n){switch(t){case"input":if(Mu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ha(r);if(!i)throw Error(k(90));rg(r),Mu(r,i)}}}break;case"textarea":og(e,n);break;case"select":t=n.value,t!=null&&Tr(e,!!n.multiple,t,!1)}};dg=Wf;hg=Jn;var s_={usingClientEntryPoint:!1,Events:[xo,mr,Ha,cg,fg,Wf]},pi={findFiberByHostInstance:$n,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},a_={bundleType:pi.bundleType,version:pi.version,rendererPackageName:pi.rendererPackageName,rendererConfig:pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gg(e),e===null?null:e.stateNode},findFiberByHostInstance:pi.findFiberByHostInstance||i_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ss.isDisabled&&ss.supportsFiber)try{Fa=ss.inject(a_),kt=ss}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s_;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jf(t))throw Error(k(200));return r_(e,t,null,n)};Ye.createRoot=function(e,t){if(!Jf(e))throw Error(k(299));var n=!1,r="",i=X1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Xf(e,1,!1,null,null,n,!1,r,i),e[$t]=t.current,Yi(e.nodeType===8?e.parentNode:e),new Qf(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=gg(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return Jn(e)};Ye.hydrate=function(e,t,n){if(!Ja(t))throw Error(k(200));return Za(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!Jf(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=X1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Y1(t,null,e,1,n??null,i,!1,o,s),e[$t]=t.current,Yi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Qa(t)};Ye.render=function(e,t,n){if(!Ja(t))throw Error(k(200));return Za(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!Ja(e))throw Error(k(40));return e._reactRootContainer?(Jn(function(){Za(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};Ye.unstable_batchedUpdates=Wf;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ja(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Za(e,t,n,!1,r)};Ye.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ye})(i2);var fp=Cu;Tu.createRoot=fp.createRoot,Tu.hydrateRoot=fp.hydrateRoot;/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pa(){return pa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pa.apply(this,arguments)}var an;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(an||(an={}));const dp="popstate";function l_(e){e===void 0&&(e={});function t(i,o){let{pathname:s="/",search:a="",hash:l=""}=sr(i.location.hash.substr(1));return Ec("",{pathname:s,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof o=="string"?o:ro(o))}function r(i,o){u_(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return d_(t,n,r,e)}function ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function u_(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function c_(){return Math.random().toString(36).substr(2,8)}function hp(e){return{usr:e.state,key:e.key}}function Ec(e,t,n,r){return n===void 0&&(n=null),pa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?sr(t):t,{state:n,key:t&&t.key||r||c_()})}function ro(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function sr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function f_(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof e=="string"?e:ro(e);return ue(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}function d_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=an.Pop,l=null;function u(){a=an.Pop,l&&l({action:a,location:h.location})}function c(v,y){a=an.Push;let w=Ec(h.location,v,y);n&&n(w,v);let T=hp(w),p=h.createHref(w);try{s.pushState(T,"",p)}catch{i.location.assign(p)}o&&l&&l({action:a,location:h.location})}function f(v,y){a=an.Replace;let w=Ec(h.location,v,y);n&&n(w,v);let T=hp(w),p=h.createHref(w);s.replaceState(T,"",p),o&&l&&l({action:a,location:h.location})}let h={get action(){return a},get location(){return e(i,s)},listen(v){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(dp,u),l=v,()=>{i.removeEventListener(dp,u),l=null}},createHref(v){return t(i,v)},encodeLocation(v){let y=f_(typeof v=="string"?v:ro(v));return{pathname:y.pathname,search:y.search,hash:y.hash}},push:c,replace:f,go(v){return s.go(v)}};return h}var pp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pp||(pp={}));function h_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?sr(t):t,i=J1(r.pathname||"/",n);if(i==null)return null;let o=q1(e);p_(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=x_(o[a],I_(i));return s}function q1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ue(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=vn([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(ue(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),q1(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:k_(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Q1(o.path))i(o,s,l)}),t}function Q1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Q1(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function p_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:E_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const m_=/^:\w+$/,g_=3,v_=2,y_=1,w_=10,__=-2,mp=e=>e==="*";function k_(e,t){let n=e.split("/"),r=n.length;return n.some(mp)&&(r+=__),t&&(r+=v_),n.filter(i=>!mp(i)).reduce((i,o)=>i+(m_.test(o)?g_:o===""?y_:w_),r)}function E_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function x_(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=S_({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:vn([i,c.pathname]),pathnameBase:P_(vn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=vn([i,c.pathnameBase]))}return o}function S_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=b_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=a[f]||"";s=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=T_(a[f]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:e}}function b_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function I_(e){try{return decodeURI(e)}catch(t){return Zf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function T_(e,t){try{return decodeURIComponent(e)}catch(n){return Zf(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function J1(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Zf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function C_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?sr(e):e;return{pathname:n?n.startsWith("/")?n:N_(n,t):t,search:A_(r),hash:R_(i)}}function N_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ru(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Z1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ev(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=sr(e):(i=pa({},e),ue(!i.pathname||!i.pathname.includes("?"),ru("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),ru("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),ru("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let f=t.length-1;if(s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=C_(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const vn=e=>e.join("/").replace(/\/\/+/g,"/"),P_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),A_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,R_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class O_{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function L_(e){return e instanceof O_}const D_=["post","put","patch","delete"];[...D_];/**
 * React Router v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xc(){return xc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xc.apply(this,arguments)}function M_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const $_=typeof Object.is=="function"?Object.is:M_,{useState:U_,useEffect:F_,useLayoutEffect:z_,useDebugValue:j_}=Iu;function B_(e,t,n){const r=t(),[{inst:i},o]=U_({inst:{value:r,getSnapshot:t}});return z_(()=>{i.value=r,i.getSnapshot=t,iu(i)&&o({inst:i})},[e,r,t]),F_(()=>(iu(i)&&o({inst:i}),e(()=>{iu(i)&&o({inst:i})})),[e]),j_(r),r}function iu(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!$_(n,r)}catch{return!0}}function H_(e,t,n){return t()}const V_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",W_=!V_,G_=W_?H_:B_;"useSyncExternalStore"in Iu&&(e=>e.useSyncExternalStore)(Iu);const K_=S.createContext(null),Y_=S.createContext(null),ed=S.createContext(null),el=S.createContext(null),tl=S.createContext(null),qr=S.createContext({outlet:null,matches:[]}),tv=S.createContext(null);function X_(e,t){let{relative:n}=t===void 0?{}:t;Qr()||ue(!1);let{basename:r,navigator:i}=S.useContext(el),{hash:o,pathname:s,search:a}=nv(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:vn([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Qr(){return S.useContext(tl)!=null}function nl(){return Qr()||ue(!1),S.useContext(tl).location}function td(){Qr()||ue(!1);let{basename:e,navigator:t}=S.useContext(el),{matches:n}=S.useContext(qr),{pathname:r}=nl(),i=JSON.stringify(Z1(n).map(a=>a.pathnameBase)),o=S.useRef(!1);return S.useEffect(()=>{o.current=!0}),S.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=ev(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:vn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function nv(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=S.useContext(qr),{pathname:i}=nl(),o=JSON.stringify(Z1(r).map(s=>s.pathnameBase));return S.useMemo(()=>ev(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function q_(e,t){Qr()||ue(!1);let{navigator:n}=S.useContext(el),r=S.useContext(ed),{matches:i}=S.useContext(qr),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=nl(),u;if(t){var c;let w=typeof t=="string"?sr(t):t;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||ue(!1),u=w}else u=l;let f=u.pathname||"/",h=a==="/"?f:f.slice(a.length)||"/",v=h_(e,{pathname:h}),y=ek(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},s,w.params),pathname:vn([a,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:vn([a,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return t&&y?S.createElement(tl.Provider,{value:{location:xc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:an.Pop}},y):y}function Q_(){let e=ik(),t=L_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unhandled Thrown Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:o},"errorElement")," props on ",S.createElement("code",{style:o},"<Route>")))}class J_ extends S.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?S.createElement(qr.Provider,{value:this.props.routeContext},S.createElement(tv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Z_(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(K_);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),S.createElement(qr.Provider,{value:t},r)}function ek(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||ue(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=n?s.route.errorElement||S.createElement(Q_,null):null,c=t.concat(r.slice(0,a+1)),f=()=>S.createElement(Z_,{match:s,routeContext:{outlet:o,matches:c}},l?u:s.route.element!==void 0?s.route.element:o);return n&&(s.route.errorElement||a===0)?S.createElement(J_,{location:n.location,component:u,error:l,children:f(),routeContext:{outlet:null,matches:c}}):f()},null)}var gp;(function(e){e.UseRevalidator="useRevalidator"})(gp||(gp={}));var ma;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(ma||(ma={}));function tk(e){let t=S.useContext(ed);return t||ue(!1),t}function nk(e){let t=S.useContext(qr);return t||ue(!1),t}function rk(e){let t=nk(),n=t.matches[t.matches.length-1];return n.route.id||ue(!1),n.route.id}function ik(){var e;let t=S.useContext(tv),n=tk(ma.UseRouteError),r=rk(ma.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function rv(e){let{to:t,replace:n,state:r,relative:i}=e;Qr()||ue(!1);let o=S.useContext(ed),s=td();return S.useEffect(()=>{o&&o.navigation.state!=="idle"||s(t,{replace:n,state:r,relative:i})}),null}function $s(e){ue(!1)}function ok(e){let{basename:t="/",children:n=null,location:r,navigationType:i=an.Pop,navigator:o,static:s=!1}=e;Qr()&&ue(!1);let a=t.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=sr(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:v="default"}=r,y=S.useMemo(()=>{let w=J1(u,a);return w==null?null:{pathname:w,search:c,hash:f,state:h,key:v}},[a,u,c,f,h,v]);return y==null?null:S.createElement(el.Provider,{value:l},S.createElement(tl.Provider,{children:n,value:{location:y,navigationType:i}}))}function sk(e){let{children:t,location:n}=e,r=S.useContext(Y_),i=r&&!t?r.router.routes:Sc(t);return q_(i,n)}var vp;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(vp||(vp={}));new Promise(()=>{});function Sc(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;if(r.type===S.Fragment){n.push.apply(n,Sc(r.props.children,t));return}r.type!==$s&&ue(!1),!r.props.index||!r.props.children||ue(!1);let o=[...t,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=Sc(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bc(){return bc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bc.apply(this,arguments)}function ak(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function lk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function uk(e,t){return e.button===0&&(!t||t==="_self")&&!lk(e)}const ck=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function fk(e){let{basename:t,children:n,window:r}=e,i=S.useRef();i.current==null&&(i.current=l_({window:r,v5Compat:!0}));let o=i.current,[s,a]=S.useState({action:o.action,location:o.location});return S.useLayoutEffect(()=>o.listen(a),[o]),S.createElement(ok,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}const Se=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c}=t,f=ak(t,ck),h=X_(u,{relative:i}),v=dk(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i});function y(w){r&&r(w),w.defaultPrevented||v(w)}return S.createElement("a",bc({},f,{href:h,onClick:o?r:y,ref:n,target:l}))});var yp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(yp||(yp={}));var wp;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(wp||(wp={}));function dk(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=td(),l=nl(),u=nv(e,{relative:s});return S.useCallback(c=>{if(uk(c,n)){c.preventDefault();let f=r!==void 0?r:ro(l)===ro(u);a(e,{replace:f,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,e,o,s])}const hk=()=>E(In,{children:[g(CE,{}),g(bE,{}),g(TE,{})]}),pk=()=>{const e=S.useRef(!0),t=()=>{new window.google.translate.TranslateElement({pageLanguage:"en"},"google_translate_element")};return S.useEffect(()=>{if(e.current){e.current=!1;var n=document.createElement("script");n.setAttribute("src","//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"),document.body.appendChild(n),window.googleTranslateElementInit=t}},[]),g(In,{children:E("div",{className:"flex flex-col justify-center items-center py-6",children:[g("span",{className:"w-2/6 h-px block bg-zinc-900 opacity-30"}),g("div",{id:"google_translate_element",className:"w-full flex justify-center my-6"}),g("span",{className:"w-2/6 h-px block bg-zinc-900 opacity-30"})]})})};function _p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_p(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_p(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ga(e){return ga=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ga(e)}function mk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function kp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function gk(e,t,n){return t&&kp(e.prototype,t),n&&kp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nd(e,t){return yk(e)||_k(e,t)||iv(e,t)||Ek()}function bo(e){return vk(e)||wk(e)||iv(e)||kk()}function vk(e){if(Array.isArray(e))return Ic(e)}function yk(e){if(Array.isArray(e))return e}function wk(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _k(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function iv(e,t){if(e){if(typeof e=="string")return Ic(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ic(e,t)}}function Ic(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function kk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ek(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ep=function(){},rd={},ov={},sv=null,av={mark:Ep,measure:Ep};try{typeof window<"u"&&(rd=window),typeof document<"u"&&(ov=document),typeof MutationObserver<"u"&&(sv=MutationObserver),typeof performance<"u"&&(av=performance)}catch{}var xk=rd.navigator||{},xp=xk.userAgent,Sp=xp===void 0?"":xp,En=rd,Q=ov,bp=sv,as=av;En.document;var Gt=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",lv=~Sp.indexOf("MSIE")||~Sp.indexOf("Trident/"),ls,us,cs,fs,ds,zt="___FONT_AWESOME___",Tc=16,uv="fa",cv="svg-inline--fa",Zn="data-fa-i2svg",Cc="data-fa-pseudo-element",Sk="data-fa-pseudo-element-pending",id="data-prefix",od="data-icon",Ip="fontawesome-i2svg",bk="async",Ik=["HTML","HEAD","STYLE","SCRIPT"],fv=function(){try{return!0}catch{return!1}}(),X="classic",ie="sharp",sd=[X,ie];function Io(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var io=Io((ls={},de(ls,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),de(ls,ie,{fa:"solid",fass:"solid","fa-solid":"solid"}),ls)),oo=Io((us={},de(us,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),de(us,ie,{solid:"fass"}),us)),so=Io((cs={},de(cs,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),de(cs,ie,{fass:"fa-solid"}),cs)),Tk=Io((fs={},de(fs,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),de(fs,ie,{"fa-solid":"fass"}),fs)),Ck=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,dv="fa-layers-text",Nk=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Pk=Io((ds={},de(ds,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),de(ds,ie,{900:"fass"}),ds)),hv=[1,2,3,4,5,6,7,8,9,10],Ak=hv.concat([11,12,13,14,15,16,17,18,19,20]),Rk=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],zn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ao=new Set;Object.keys(oo[X]).map(ao.add.bind(ao));Object.keys(oo[ie]).map(ao.add.bind(ao));var Ok=[].concat(sd,bo(ao),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",zn.GROUP,zn.SWAP_OPACITY,zn.PRIMARY,zn.SECONDARY]).concat(hv.map(function(e){return"".concat(e,"x")})).concat(Ak.map(function(e){return"w-".concat(e)})),Di=En.FontAwesomeConfig||{};function Lk(e){var t=Q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Dk(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Q&&typeof Q.querySelector=="function"){var Mk=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Mk.forEach(function(e){var t=nd(e,2),n=t[0],r=t[1],i=Dk(Lk(n));i!=null&&(Di[r]=i)})}var pv={styleDefault:"solid",familyDefault:"classic",cssPrefix:uv,replacementClass:cv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Di.familyPrefix&&(Di.cssPrefix=Di.familyPrefix);var Vr=C(C({},pv),Di);Vr.autoReplaceSvg||(Vr.observeMutations=!1);var R={};Object.keys(pv).forEach(function(e){Object.defineProperty(R,e,{enumerable:!0,set:function(n){Vr[e]=n,Mi.forEach(function(r){return r(R)})},get:function(){return Vr[e]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(t){Vr.cssPrefix=t,Mi.forEach(function(n){return n(R)})},get:function(){return Vr.cssPrefix}});En.FontAwesomeConfig=R;var Mi=[];function $k(e){return Mi.push(e),function(){Mi.splice(Mi.indexOf(e),1)}}var Yt=Tc,_t={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Uk(e){if(!(!e||!Gt)){var t=Q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Q.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return Q.head.insertBefore(t,r),e}}var Fk="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function lo(){for(var e=12,t="";e-- >0;)t+=Fk[Math.random()*62|0];return t}function Jr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ad(e){return e.classList?Jr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function mv(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zk(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(mv(e[n]),'" ')},"").trim()}function rl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ld(e){return e.size!==_t.size||e.x!==_t.x||e.y!==_t.y||e.rotate!==_t.rotate||e.flipX||e.flipY}function jk(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function Bk(e){var t=e.transform,n=e.width,r=n===void 0?Tc:n,i=e.height,o=i===void 0?Tc:i,s=e.startCentered,a=s===void 0?!1:s,l="";return a&&lv?l+="translate(".concat(t.x/Yt-r/2,"em, ").concat(t.y/Yt-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/Yt,"em), calc(-50% + ").concat(t.y/Yt,"em)) "):l+="translate(".concat(t.x/Yt,"em, ").concat(t.y/Yt,"em) "),l+="scale(".concat(t.size/Yt*(t.flipX?-1:1),", ").concat(t.size/Yt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Hk=`:root, :host {
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
}`;function gv(){var e=uv,t=cv,n=R.cssPrefix,r=R.replacementClass,i=Hk;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Tp=!1;function ou(){R.autoAddCss&&!Tp&&(Uk(gv()),Tp=!0)}var Vk={mixout:function(){return{dom:{css:gv,insertCss:ou}}},hooks:function(){return{beforeDOMElementCreation:function(){ou()},beforeI2svg:function(){ou()}}}},jt=En||{};jt[zt]||(jt[zt]={});jt[zt].styles||(jt[zt].styles={});jt[zt].hooks||(jt[zt].hooks={});jt[zt].shims||(jt[zt].shims=[]);var ct=jt[zt],vv=[],Wk=function e(){Q.removeEventListener("DOMContentLoaded",e),va=1,vv.map(function(t){return t()})},va=!1;Gt&&(va=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),va||Q.addEventListener("DOMContentLoaded",Wk));function Gk(e){Gt&&(va?setTimeout(e,0):vv.push(e))}function To(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?mv(e):"<".concat(t," ").concat(zk(r),">").concat(o.map(To).join(""),"</").concat(t,">")}function Cp(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Kk=function(t,n){return function(r,i,o,s){return t.call(n,r,i,o,s)}},su=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=i!==void 0?Kk(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,t[u],u,t);return c};function Yk(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Nc(e){var t=Yk(e);return t.length===1?t[0].toString(16):null}function Xk(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Np(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Pc(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=Np(t);typeof ct.hooks.addPack=="function"&&!i?ct.hooks.addPack(e,Np(t)):ct.styles[e]=C(C({},ct.styles[e]||{}),o),e==="fas"&&Pc("fa",t)}var hs,ps,ms,Er=ct.styles,qk=ct.shims,Qk=(hs={},de(hs,X,Object.values(so[X])),de(hs,ie,Object.values(so[ie])),hs),ud=null,yv={},wv={},_v={},kv={},Ev={},Jk=(ps={},de(ps,X,Object.keys(io[X])),de(ps,ie,Object.keys(io[ie])),ps);function Zk(e){return~Ok.indexOf(e)}function e3(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Zk(i)?i:null}var xv=function(){var t=function(o){return su(Er,function(s,a,l){return s[l]=su(a,o,{}),s},{})};yv=t(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),wv=t(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),Ev=t(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in Er||R.autoFetchSvg,r=su(qk,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});_v=r.names,kv=r.unicodes,ud=il(R.styleDefault,{family:R.familyDefault})};$k(function(e){ud=il(e.styleDefault,{family:R.familyDefault})});xv();function cd(e,t){return(yv[e]||{})[t]}function t3(e,t){return(wv[e]||{})[t]}function jn(e,t){return(Ev[e]||{})[t]}function Sv(e){return _v[e]||{prefix:null,iconName:null}}function n3(e){var t=kv[e],n=cd("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function xn(){return ud}var fd=function(){return{prefix:null,iconName:null,rest:[]}};function il(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,i=io[r][e],o=oo[r][e]||oo[r][i],s=e in ct.styles?e:null;return o||s||null}var Pp=(ms={},de(ms,X,Object.keys(so[X])),de(ms,ie,Object.keys(so[ie])),ms);function ol(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},de(t,X,"".concat(R.cssPrefix,"-").concat(X)),de(t,ie,"".concat(R.cssPrefix,"-").concat(ie)),t),s=null,a=X;(e.includes(o[X])||e.some(function(u){return Pp[X].includes(u)}))&&(a=X),(e.includes(o[ie])||e.some(function(u){return Pp[ie].includes(u)}))&&(a=ie);var l=e.reduce(function(u,c){var f=e3(R.cssPrefix,c);if(Er[c]?(c=Qk[a].includes(c)?Tk[a][c]:c,s=c,u.prefix=c):Jk[a].indexOf(c)>-1?(s=c,u.prefix=il(c,{family:a})):f?u.iconName=f:c!==R.replacementClass&&c!==o[X]&&c!==o[ie]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=s==="fa"?Sv(u.iconName):{},v=jn(u.prefix,u.iconName);h.prefix&&(s=null),u.iconName=h.iconName||v||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Er.far&&Er.fas&&!R.autoFetchSvg&&(u.prefix="fas")}return u},fd());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===ie&&(Er.fass||R.autoFetchSvg)&&(l.prefix="fass",l.iconName=jn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=xn()||"fas"),l}var r3=function(){function e(){mk(this,e),this.definitions={}}return gk(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=C(C({},n.definitions[a]||{}),s[a]),Pc(a,s[a]);var l=so[X][a];l&&Pc(l,s[a]),xv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,u=s.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),e}(),Ap=[],xr={},Or={},i3=Object.keys(Or);function o3(e,t){var n=t.mixoutsTo;return Ap=e,xr={},Object.keys(Or).forEach(function(r){i3.indexOf(r)===-1&&delete Or[r]}),Ap.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),ga(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){xr[s]||(xr[s]=[]),xr[s].push(o[s])})}r.provides&&r.provides(Or)}),n}function Ac(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=xr[e]||[];return o.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function er(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=xr[e]||[];i.forEach(function(o){o.apply(null,n)})}function Bt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Or[e]?Or[e].apply(null,t):void 0}function Rc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||xn();if(t)return t=jn(n,t)||t,Cp(bv.definitions,n,t)||Cp(ct.styles,n,t)}var bv=new r3,s3=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,er("noAuto")},a3={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Gt?(er("beforeI2svg",t),Bt("pseudoElements2svg",t),Bt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,Gk(function(){u3({autoReplaceSvgRoot:n}),er("watch",t)})}},l3={icon:function(t){if(t===null)return null;if(ga(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:jn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=il(t[0]);return{prefix:r,iconName:jn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(R.cssPrefix,"-"))>-1||t.match(Ck))){var i=ol(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||xn(),iconName:jn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=xn();return{prefix:o,iconName:jn(o,t)||t}}}},qe={noAuto:s3,config:R,dom:a3,parse:l3,library:bv,findIconDefinition:Rc,toHtml:To},u3=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Q:n;(Object.keys(ct.styles).length>0||R.autoFetchSvg)&&Gt&&R.autoReplaceSvg&&qe.dom.i2svg({node:r})};function sl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return To(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Gt){var r=Q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function c3(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,s=e.transform;if(ld(s)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=rl(C(C({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function f3(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,s=o===!0?"".concat(t,"-").concat(R.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},i),{},{id:s}),children:r}]}]}function dd(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,s=e.transform,a=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,h=e.watchable,v=h===void 0?!1:h,y=r.found?r:n,w=y.width,T=y.height,p=i==="fak",d=[R.replacementClass,o?"".concat(R.cssPrefix,"-").concat(o):""].filter(function(B){return f.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(f.classes).join(" "),m={children:[],attributes:C(C({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(T)})},_=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/T*16*.0625,"em")}:{};v&&(m.attributes[Zn]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||lo())},children:[l]}),delete m.attributes.title);var x=C(C({},m),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:s,symbol:a,styles:C(C({},_),f.styles)}),b=r.found&&n.found?Bt("generateAbstractMask",x)||{children:[],attributes:{}}:Bt("generateAbstractIcon",x)||{children:[],attributes:{}},I=b.children,A=b.attributes;return x.children=I,x.attributes=A,a?f3(x):c3(x)}function Rp(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,s=e.extra,a=e.watchable,l=a===void 0?!1:a,u=C(C(C({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(u[Zn]="");var c=C({},s.styles);ld(i)&&(c.transform=Bk({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=rl(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function d3(e){var t=e.content,n=e.title,r=e.extra,i=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=rl(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var au=ct.styles;function Oc(e){var t=e[0],n=e[1],r=e.slice(4),i=nd(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(zn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(zn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(zn.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:s}}var h3={found:!1,width:512,height:512};function p3(e,t){!fv&&!R.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Lc(e,t){var n=t;return t==="fa"&&R.styleDefault!==null&&(t=xn()),new Promise(function(r,i){if(Bt("missingIconAbstract"),n==="fa"){var o=Sv(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&au[t]&&au[t][e]){var s=au[t][e];return r(Oc(s))}p3(e,t),r(C(C({},h3),{},{icon:R.showMissingIcons&&e?Bt("missingIconAbstract")||{}:{}}))})}var Op=function(){},Dc=R.measurePerformance&&as&&as.mark&&as.measure?as:{mark:Op,measure:Op},ki='FA "6.2.1"',m3=function(t){return Dc.mark("".concat(ki," ").concat(t," begins")),function(){return Iv(t)}},Iv=function(t){Dc.mark("".concat(ki," ").concat(t," ends")),Dc.measure("".concat(ki," ").concat(t),"".concat(ki," ").concat(t," begins"),"".concat(ki," ").concat(t," ends"))},hd={begin:m3,end:Iv},Us=function(){};function Lp(e){var t=e.getAttribute?e.getAttribute(Zn):null;return typeof t=="string"}function g3(e){var t=e.getAttribute?e.getAttribute(id):null,n=e.getAttribute?e.getAttribute(od):null;return t&&n}function v3(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(R.replacementClass)}function y3(){if(R.autoReplaceSvg===!0)return Fs.replace;var e=Fs[R.autoReplaceSvg];return e||Fs.replace}function w3(e){return Q.createElementNS("http://www.w3.org/2000/svg",e)}function _3(e){return Q.createElement(e)}function Tv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?w3:_3:n;if(typeof e=="string")return Q.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){i.appendChild(Tv(s,{ceFn:r}))}),i}function k3(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Fs={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Tv(i),n)}),n.getAttribute(Zn)===null&&R.keepOriginalSource){var r=Q.createComment(k3(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ad(n).indexOf(R.replacementClass))return Fs.replace(t);var i=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===R.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return To(a)}).join(`
`);n.setAttribute(Zn,""),n.innerHTML=s}};function Dp(e){e()}function Cv(e,t){var n=typeof t=="function"?t:Us;if(e.length===0)n();else{var r=Dp;R.mutateApproach===bk&&(r=En.requestAnimationFrame||Dp),r(function(){var i=y3(),o=hd.begin("mutate");e.map(i),o(),n()})}}var pd=!1;function Nv(){pd=!0}function Mc(){pd=!1}var ya=null;function Mp(e){if(bp&&R.observeMutations){var t=e.treeCallback,n=t===void 0?Us:t,r=e.nodeCallback,i=r===void 0?Us:r,o=e.pseudoElementsCallback,s=o===void 0?Us:o,a=e.observeMutationsRoot,l=a===void 0?Q:a;ya=new bp(function(u){if(!pd){var c=xn();Jr(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Lp(f.addedNodes[0])&&(R.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&R.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&Lp(f.target)&&~Rk.indexOf(f.attributeName))if(f.attributeName==="class"&&g3(f.target)){var h=ol(ad(f.target)),v=h.prefix,y=h.iconName;f.target.setAttribute(id,v||c),y&&f.target.setAttribute(od,y)}else v3(f.target)&&i(f.target)})}}),Gt&&ya.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function E3(){ya&&ya.disconnect()}function x3(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function S3(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=ol(ad(e));return i.prefix||(i.prefix=xn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=t3(i.prefix,e.innerText)||cd(i.prefix,Nc(e.innerText))),!i.iconName&&R.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function b3(e){var t=Jr(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return R.autoA11y&&(n?t["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(r||lo()):(t["aria-hidden"]="true",t.focusable="false")),t}function I3(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_t,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $p(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=S3(e),r=n.iconName,i=n.prefix,o=n.rest,s=b3(e),a=Ac("parseNodeAttributes",{},e),l=t.styleParser?x3(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:_t,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var T3=ct.styles;function Pv(e){var t=R.autoReplaceSvg==="nest"?$p(e,{styleParser:!1}):$p(e);return~t.extra.classes.indexOf(dv)?Bt("generateLayersText",e,t):Bt("generateSvgReplacementMutation",e,t)}var Sn=new Set;sd.map(function(e){Sn.add("fa-".concat(e))});Object.keys(io[X]).map(Sn.add.bind(Sn));Object.keys(io[ie]).map(Sn.add.bind(Sn));Sn=bo(Sn);function Up(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Gt)return Promise.resolve();var n=Q.documentElement.classList,r=function(f){return n.add("".concat(Ip,"-").concat(f))},i=function(f){return n.remove("".concat(Ip,"-").concat(f))},o=R.autoFetchSvg?Sn:sd.map(function(c){return"fa-".concat(c)}).concat(Object.keys(T3));o.includes("fa")||o.push("fa");var s=[".".concat(dv,":not([").concat(Zn,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(Zn,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=Jr(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=hd.begin("onTree"),u=a.reduce(function(c,f){try{var h=Pv(f);h&&c.push(h)}catch(v){fv||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){Cv(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),f(h)})})}function C3(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Pv(e).then(function(n){n&&Cv([n],t)})}function N3(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Rc(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Rc(i||{})),e(r,C(C({},n),{},{mask:i}))}}var P3=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?_t:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,v=n.titleId,y=v===void 0?null:v,w=n.classes,T=w===void 0?[]:w,p=n.attributes,d=p===void 0?{}:p,m=n.styles,_=m===void 0?{}:m;if(t){var x=t.prefix,b=t.iconName,I=t.icon;return sl(C({type:"icon"},t),function(){return er("beforeDOMElementCreation",{iconDefinition:t,params:n}),R.autoA11y&&(h?d["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(y||lo()):(d["aria-hidden"]="true",d.focusable="false")),dd({icons:{main:Oc(I),mask:l?Oc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:b,transform:C(C({},_t),i),symbol:s,title:h,maskId:c,titleId:y,extra:{attributes:d,styles:_,classes:T}})})}},A3={mixout:function(){return{icon:N3(P3)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Up,n.nodeCallback=C3,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Q:r,o=n.callback,s=o===void 0?function(){}:o;return Up(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(v,y){Promise.all([Lc(i,a),c.iconName?Lc(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var T=nd(w,2),p=T[0],d=T[1];v([n,dd({icons:{main:p,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:s,extra:h,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=rl(a);l.length>0&&(i.style=l);var u;return ld(s)&&(u=Bt("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},R3={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return sl({type:"layer"},function(){er("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(bo(o)).join(" ")},children:s}]})}}}},O3={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return sl({type:"counter",content:n},function(){return er("beforeDOMElementCreation",{content:n,params:r}),d3({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(bo(a))}})})}}}},L3={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?_t:i,s=r.title,a=s===void 0?null:s,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,v=h===void 0?{}:h;return sl({type:"text",content:n},function(){return er("beforeDOMElementCreation",{content:n,params:r}),Rp({content:n,transform:C(C({},_t),o),title:a,extra:{attributes:f,styles:v,classes:["".concat(R.cssPrefix,"-layers-text")].concat(bo(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,l=null;if(lv){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return R.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Rp({content:n.innerHTML,width:a,height:l,transform:o,title:i,extra:s,watchable:!0})])}}},D3=new RegExp('"',"ug"),Fp=[1105920,1112319];function M3(e){var t=e.replace(D3,""),n=Xk(t,0),r=n>=Fp[0]&&n<=Fp[1],i=t.length===2?t[0]===t[1]:!1;return{value:Nc(i?t[0]:t),isSecondary:r||i}}function zp(e,t){var n="".concat(Sk).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=Jr(e.children),s=o.filter(function(I){return I.getAttribute(Cc)===t})[0],a=En.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(Nk),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ie:X,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?oo[h][l[2].toLowerCase()]:Pk[h][u],y=M3(f),w=y.value,T=y.isSecondary,p=l[0].startsWith("FontAwesome"),d=cd(v,w),m=d;if(p){var _=n3(w);_.iconName&&_.prefix&&(d=_.iconName,v=_.prefix)}if(d&&!T&&(!s||s.getAttribute(id)!==v||s.getAttribute(od)!==m)){e.setAttribute(n,m),s&&e.removeChild(s);var x=I3(),b=x.extra;b.attributes[Cc]=t,Lc(d,v).then(function(I){var A=dd(C(C({},x),{},{icons:{main:I,mask:fd()},prefix:v,iconName:m,extra:b,watchable:!0})),B=Q.createElement("svg");t==="::before"?e.insertBefore(B,e.firstChild):e.appendChild(B),B.outerHTML=A.map(function(U){return To(U)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function $3(e){return Promise.all([zp(e,"::before"),zp(e,"::after")])}function U3(e){return e.parentNode!==document.head&&!~Ik.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Cc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function jp(e){if(Gt)return new Promise(function(t,n){var r=Jr(e.querySelectorAll("*")).filter(U3).map($3),i=hd.begin("searchPseudoElements");Nv(),Promise.all(r).then(function(){i(),Mc(),t()}).catch(function(){i(),Mc(),n()})})}var F3={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=jp,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Q:r;R.searchPseudoElements&&jp(i)}}},Bp=!1,z3={mixout:function(){return{dom:{unwatch:function(){Nv(),Bp=!0}}}},hooks:function(){return{bootstrap:function(){Mp(Ac("mutationObserverCallbacks",{}))},noAuto:function(){E3()},watch:function(n){var r=n.observeMutationsRoot;Bp?Mc():Mp(Ac("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Hp=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},j3={mixout:function(){return{parse:{transform:function(n){return Hp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Hp(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(s/2*-1," -256)")},v={outer:a,inner:f,path:h};return{tag:"g",attributes:C({},v.outer),children:[{tag:"g",attributes:C({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),v.path)}]}]}}}},lu={x:0,y:0,width:"100%",height:"100%"};function Vp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function B3(e){return e.tag==="g"?e.children:[e]}var H3={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?ol(i.split(" ").map(function(s){return s.trim()})):fd();return o.prefix||(o.prefix=xn()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,u=o.width,c=o.icon,f=s.width,h=s.icon,v=jk({transform:l,containerWidth:f,iconWidth:u}),y={tag:"rect",attributes:C(C({},lu),{},{fill:"white"})},w=c.children?{children:c.children.map(Vp)}:{},T={tag:"g",attributes:C({},v.inner),children:[Vp(C({tag:c.tag,attributes:C(C({},c.attributes),v.path)},w))]},p={tag:"g",attributes:C({},v.outer),children:[T]},d="mask-".concat(a||lo()),m="clip-".concat(a||lo()),_={tag:"mask",attributes:C(C({},lu),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,p]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:B3(h)},_]};return r.push(x,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},lu)}),{children:r,attributes:i}}}},V3={provides:function(t){var n=!1;En.matchMedia&&(n=En.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=C(C({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:C(C({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:C(C({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:C(C({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},W3={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},G3=[Vk,A3,R3,O3,L3,F3,z3,j3,H3,V3,W3];o3(G3,{mixoutsTo:qe});qe.noAuto;qe.config;qe.library;qe.dom;var $c=qe.parse;qe.findIconDefinition;qe.toHtml;var K3=qe.icon;qe.layer;qe.text;qe.counter;var F={},Y3={get exports(){return F},set exports(e){F=e}},X3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",q3=X3,Q3=q3;function Av(){}function Rv(){}Rv.resetWarningCache=Av;var J3=function(){function e(r,i,o,s,a,l){if(l!==Q3){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Rv,resetWarningCache:Av};return n.PropTypes=n,n};Y3.exports=J3();function Wp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ln(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wp(Object(n),!0).forEach(function(r){Sr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wa(e){return wa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wa(e)}function Sr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function eE(e,t){if(e==null)return{};var n=Z3(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Uc(e){return tE(e)||nE(e)||rE(e)||iE()}function tE(e){if(Array.isArray(e))return Fc(e)}function nE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rE(e,t){if(e){if(typeof e=="string")return Fc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fc(e,t)}}function Fc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function iE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oE(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,h=e.fixedWidth,v=e.inverse,y=e.border,w=e.listItem,T=e.flip,p=e.size,d=e.rotation,m=e.pull,_=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":v,"fa-border":y,"fa-li":w,"fa-flip":T===!0,"fa-flip-horizontal":T==="horizontal"||T==="both","fa-flip-vertical":T==="vertical"||T==="both"},Sr(t,"fa-".concat(p),typeof p<"u"&&p!==null),Sr(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Sr(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Sr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(_).map(function(x){return _[x]?x:null}).filter(function(x){return x})}function sE(e){return e=e-0,e===e}function Ov(e){return sE(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var aE=["style"];function lE(e){return e.charAt(0).toUpperCase()+e.slice(1)}function uE(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Ov(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[lE(i)]=o:t[i]=o,t},{})}function Lv(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Lv(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=uE(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Ov(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=eE(n,aE);return i.attrs.style=ln(ln({},i.attrs.style),s),e.apply(void 0,[t.tag,ln(ln({},i.attrs),a)].concat(Uc(r)))}var Dv=!1;try{Dv=!0}catch{}function cE(){if(!Dv&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Gp(e){if(e&&wa(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if($c.icon)return $c.icon(e);if(e===null)return null;if(e&&wa(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function uu(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Sr({},e,t):{}}var M=Ua.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,s=e.title,a=e.titleId,l=e.maskId,u=Gp(n),c=uu("classes",[].concat(Uc(oE(e)),Uc(o.split(" ")))),f=uu("transform",typeof e.transform=="string"?$c.transform(e.transform):e.transform),h=uu("mask",Gp(r)),v=K3(u,ln(ln(ln(ln({},c),f),h),{},{symbol:i,title:s,titleId:a,maskId:l}));if(!v)return cE("Could not find icon",u),null;var y=v.abstract,w={ref:t};return Object.keys(e).forEach(function(T){M.defaultProps.hasOwnProperty(T)||(w[T]=e[T])}),fE(y[0],w)});M.displayName="FontAwesomeIcon";M.propTypes={beat:F.bool,border:F.bool,beatFade:F.bool,bounce:F.bool,className:F.string,fade:F.bool,flash:F.bool,mask:F.oneOfType([F.object,F.array,F.string]),maskId:F.string,fixedWidth:F.bool,inverse:F.bool,flip:F.oneOf([!0,!1,"horizontal","vertical","both"]),icon:F.oneOfType([F.object,F.array,F.string]),listItem:F.bool,pull:F.oneOf(["right","left"]),pulse:F.bool,rotation:F.oneOf([0,90,180,270]),shake:F.bool,size:F.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:F.bool,spinPulse:F.bool,spinReverse:F.bool,symbol:F.oneOfType([F.bool,F.string]),title:F.string,titleId:F.string,transform:F.oneOfType([F.string,F.object]),swapOpacity:F.bool};M.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var fE=Lv.bind(null,Ua.createElement),dE={prefix:"fab",iconName:"skype",icon:[448,512,[],"f17e","M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"]},gs={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},vs={prefix:"fas",iconName:"gavel",icon:[512,512,["legal"],"f0e3","M318.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-120 120c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0l4-4L325.4 293.4l-4 4c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0l120-120c12.5-12.5 12.5-32.8 0-45.3l-16-16c-12.5-12.5-32.8-12.5-45.3 0l-4 4L330.6 74.6l4-4c12.5-12.5 12.5-32.8 0-45.3l-16-16zm-152 288c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l48 48c12.5 12.5 32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-1.4-1.4L272 285.3 226.7 240 168 298.7l-1.4-1.4z"]},hE={prefix:"fas",iconName:"flag",icon:[448,512,[127988,61725],"f024","M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"]},pE={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80s-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM416 224c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"]},mE={prefix:"fas",iconName:"key",icon:[512,512,[128273],"f084","M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zm40-176c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40z"]},gE={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},vE={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M352 96h64c17.7 0 32 14.3 32 32V384c0 17.7-14.3 32-32 32H352c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c53 0 96-43 96-96V128c0-53-43-96-96-96H352c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-7.5 177.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H160v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"]},ys={prefix:"fas",iconName:"handshake",icon:[640,512,[],"f2b5","M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM96 128H0V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128zM48 352c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V128H544zm64 208c0 8.8-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16z"]},yE={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},wE={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},ws={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},_E={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Kp=_E,Yp={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},Xp={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},kE={prefix:"fas",iconName:"earth-europe",icon:[512,512,["globe-europe"],"f7a2","M266.3 48.3L232.5 73.6c-5.4 4-8.5 10.4-8.5 17.1v9.1c0 6.8 5.5 12.3 12.3 12.3c2.4 0 4.8-.7 6.8-2.1l41.8-27.9c2-1.3 4.4-2.1 6.8-2.1h1c6.2 0 11.3 5.1 11.3 11.3c0 3-1.2 5.9-3.3 8l-19.9 19.9c-5.8 5.8-12.9 10.2-20.7 12.8l-26.5 8.8c-5.8 1.9-9.6 7.3-9.6 13.4c0 3.7-1.5 7.3-4.1 10l-17.9 17.9c-6.4 6.4-9.9 15-9.9 24v4.3c0 16.4 13.6 29.7 29.9 29.7c11 0 21.2-6.2 26.1-16l4-8.1c2.4-4.8 7.4-7.9 12.8-7.9c4.5 0 8.7 2.1 11.4 5.7l16.3 21.7c2.1 2.9 5.5 4.5 9.1 4.5c8.4 0 13.9-8.9 10.1-16.4l-1.1-2.3c-3.5-7 0-15.5 7.5-18l21.2-7.1c7.6-2.5 12.7-9.6 12.7-17.6c0-10.3 8.3-18.6 18.6-18.6H400c8.8 0 16 7.2 16 16s-7.2 16-16 16H379.3c-7.2 0-14.2 2.9-19.3 8l-4.7 4.7c-2.1 2.1-3.3 5-3.3 8c0 6.2 5.1 11.3 11.3 11.3h11.3c6 0 11.8 2.4 16 6.6l6.5 6.5c1.8 1.8 2.8 4.3 2.8 6.8s-1 5-2.8 6.8l-7.5 7.5C386 262 384 266.9 384 272s2 10 5.7 13.7L408 304c10.2 10.2 24.1 16 38.6 16H454c6.5-20.2 10-41.7 10-64c0-111.4-87.6-202.4-197.7-207.7zm172 307.9c-3.7-2.6-8.2-4.1-13-4.1c-6 0-11.8-2.4-16-6.6L396 332c-7.7-7.7-18-12-28.9-12c-9.7 0-19.2-3.5-26.6-9.8L314 287.4c-11.6-9.9-26.4-15.4-41.6-15.4H251.4c-12.6 0-25 3.7-35.5 10.7L188.5 301c-17.8 11.9-28.5 31.9-28.5 53.3v3.2c0 17 6.7 33.3 18.7 45.3l16 16c8.5 8.5 20 13.3 32 13.3H248c13.3 0 24 10.7 24 24c0 2.5 .4 5 1.1 7.3c71.3-5.8 132.5-47.6 165.2-107.2zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM187.3 100.7c-6.2-6.2-16.4-6.2-22.6 0l-32 32c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l32-32c6.2-6.2 6.2-16.4 0-22.6z"]},EE=kE,xE={prefix:"fas",iconName:"dollar-sign",icon:[320,512,[128178,61781,"dollar","usd"],"24","M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c10.6 1.6 42.1 6.7 55.1 10c17.1 4.3 27.5 21.7 23.2 38.9s-21.7 27.5-38.9 23.2c-9.3-2.4-37.6-7-48.9-8.7c-32.1-4.8-59.6-2.4-78.5 4.9c-18.3 7-25.9 16.9-27.9 28c-1.9 10.7-.5 16.8 1.3 20.6c1.9 4 5.6 8.5 12.9 13.4c16.2 10.8 41.1 17.9 73.3 26.7l2.8 .8c28.4 7.7 63.2 17.2 89 34.3c14.1 9.4 27.3 22.1 35.5 39.7c8.3 17.8 10.1 37.8 6.3 59.1c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.2-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.4 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.7 .5-16.8-1.3-20.6c-1.9-4-5.6-8.5-12.9-13.4c-16.2-10.8-41.1-17.9-73.3-26.7l-2.8-.8c-28.4-7.7-63.2-17.2-89-34.3c-14.1-9.4-27.3-22.1-35.5-39.7c-8.3-17.8-10.1-37.8-6.3-59.1C25 114.1 53 89.3 86 76.7c13-5 27.2-8.2 42-10V32c0-17.7 14.3-32 32-32z"]},ur=xE;const SE=e=>{const{cardsData:t}=e;let[n,r]=S.useState(t);return E("div",{className:"col-span-1 p-8 flex flex-col justify-center items-center text-center card-bg border-[6px] border-y-0 rounded-md "+n.bordercolor,children:[g("img",{src:n.image}),E("h1",{className:"text-2xl text-gray-400 font-light py-4",children:[n.heading,g("br",{}),"Daddy"]}),g("p",{className:"text-sm text-gray-400 font-light",children:n.shortDescription}),E("p",{className:"text-base font-light pt-2 "+n.textcolor,children:["$",n.price]}),g("p",{className:"text-sm text-gray-400 font-light text-justify py-4",children:n.description}),E("a",{href:n.skype,className:"text-white flex flex-col justify-center items-center",children:[g(M,{icon:dE}),g("h1",{className:"text-sm font-bold",children:"SKYPE"}),g("p",{className:"text-ellipsis w-1/2 overflow-hidden",children:n.skype})]}),E("button",{type:"button",className:"text-white mt-4 p-2 w-full "+n.bgcolor,children:[g(M,{icon:hE}),E("h1",{className:"drop-shadow-2xl shadow-black",children:["REPORT",g("br",{}),"DADDY"]})]})]})},bE=()=>{let[e,t]=S.useState(hT);return g(In,{children:E("div",{className:"w-full flex flex-col justify-center items-center pb-40 lg:px-80 md:px-40 px-20",children:[g("h1",{className:"text-white text-4xl font-semibold mb-4",children:"Featured Sugar Daddies"}),g("div",{className:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-6 gap-2",children:e.map((n,r)=>g(SE,{cardsData:n},r))})]})})};var qp={prefix:"far",iconName:"hand",icon:[512,512,[129306,9995,"hand-paper"],"f256","M408 80c-3.994 0-7.91 .3262-11.73 .9551c-9.586-28.51-36.57-49.11-68.27-49.11c-6.457 0-12.72 .8555-18.68 2.457C296.6 13.73 273.9 0 248 0C222.1 0 199.3 13.79 186.6 34.44C180.7 32.85 174.5 32 168.1 32C128.4 32 96.01 64.3 96.01 104v121.6C90.77 224.6 85.41 224 80.01 224c-.0026 0 .0026 0 0 0C36.43 224 0 259.2 0 304.1c0 20.29 7.558 39.52 21.46 54.45l81.25 87.24C141.9 487.9 197.4 512 254.9 512h33.08C393.9 512 480 425.9 480 320V152C480 112.3 447.7 80 408 80zM432 320c0 79.41-64.59 144-143.1 144H254.9c-44.41 0-86.83-18.46-117.1-50.96l-79.76-85.63c-6.202-6.659-9.406-15.4-9.406-23.1c0-22.16 18.53-31.4 31.35-31.4c8.56 0 17.1 3.416 23.42 10.18l26.72 28.69C131.8 312.7 133.9 313.4 135.9 313.4c4.106 0 8.064-3.172 8.064-8.016V104c0-13.25 10.75-24 23.1-24c13.25 0 23.1 10.75 23.1 24v152C192 264.8 199.2 272 208 272s15.1-7.163 15.1-15.1L224 72c0-13.25 10.75-24 23.1-24c13.25 0 23.1 10.75 23.1 24v184C272 264.8 279.2 272 288 272s15.99-7.164 15.99-15.1l.0077-152.2c0-13.25 10.75-24 23.1-24c13.25 0 23.1 10.75 23.1 24v152.2C352 264.8 359.2 272 368 272s15.1-7.163 15.1-15.1V152c0-13.25 10.75-24 23.1-24c13.25 0 23.1 10.75 23.1 24V320z"]},IE={prefix:"far",iconName:"circle-left",icon:[512,512,[61840,"arrow-alt-circle-left"],"f359","M360 224L272 224v-56c0-9.531-5.656-18.16-14.38-22C248.9 142.2 238.7 143.9 231.7 150.4l-96 88.75C130.8 243.7 128 250.1 128 256.8c.3125 7.781 2.875 13.25 7.844 17.75l96 87.25c7.031 6.406 17.19 8.031 25.88 4.188s14.28-12.44 14.28-21.94l-.002-56L360 288C373.3 288 384 277.3 384 264v-16C384 234.8 373.3 224 360 224zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"]};const TE=()=>E(In,{children:[E("div",{className:"flex flex-col justify-center items-center text-white",children:[g("h1",{className:"text-sm font-bold",children:"READ THIS IF YOU ARE A SUGAR DADDY"}),g("p",{className:"text-sm text-gray-500",children:"Four reasons.."}),g("h1",{className:"py-6 text-3xl",children:"..why you need us to find your Sugar Baby."}),E("div",{className:"grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16 lg:px-36 md:px-16 px-8 py-20",children:[E("div",{className:"col-span-1 flex flex-col justify-start items-center",children:[g(M,{icon:qp,className:"text-5xl text-primary-9"}),E("h1",{className:"py-6 text-xl text-center",children:["OTHER ",g("br",{})," SITES"]}),g("p",{className:"text-sm leading-6 text-gray-500",children:"Other sites can be hazardous because they have no security or 24/7 Support to act quickly on abuse reports; sometimes, they do not even care and ignore your emails because they dont want to lose their paying members. But hold on, we do care; we want you to stay; that is why we remove Sugar Daddy listings if they violate our Terms & Conditions. Our goal is safety first, then comes the money!"})]}),E("div",{className:"col-span-1 flex flex-col justify-start items-center",children:[g(M,{icon:mE,className:"text-5xl text-white"}),E("h1",{className:"py-6 text-xl text-center",children:["STRONG  ",g("br",{})," KEYWORDS"]}),g("p",{className:"text-sm leading-6 text-gray-500",children:"We have one of the best and strongest keywords on the Sugar Daddy market, which makes it easy for Sugar Babies to find our website, and they might be interested in talking to you and to satisfy your needs."})]}),E("div",{className:"col-span-1 flex flex-col justify-start items-center",children:[g(M,{icon:vE,className:"text-5xl text-primary-10"}),E("h1",{className:"py-6 text-xl text-center",children:["NO SIGNUP OR ",g("br",{})," LOGIN"]}),g("p",{className:"text-sm leading-6 text-gray-500",children:"There is no sign-up or login required. You probably recognized that there is no sign-up, well, there is none, and there will never be one. Promise! Keep your personal details to yourself; we dont need them."})]}),E("div",{className:"col-span-1 flex flex-col justify-start items-center",children:[g(M,{icon:Xp,className:"text-5xl text-primary-11"}),E("h1",{className:"py-6 text-xl text-center",children:["OTHER ",g("br",{})," ADD"]}),g("p",{className:"text-sm leading-6 text-gray-500",children:"Sugar Babies can easily add you. They only have to click the social media icons on your listing. Our site is entirely free for Sugar Babies; no need to pay to find a Sugar Daddy."})]})]})]}),E("div",{className:"flex flex-col justify-center items-center text-white",children:[g("h1",{className:"text-sm font-bold",children:"READ THIS IF YOU ARE A SUGAR BABY"}),g("p",{className:"text-sm text-gray-500",children:"Four reasons.."}),g("h1",{className:"py-6 text-3xl",children:"..why you need us to find your Sugar Daddy."}),E("div",{className:"grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16 lg:px-36 md:px-16 px-8 py-20",children:[E("div",{className:"col-span-1 flex flex-col justify-start items-center",children:[g(M,{icon:qp,className:"text-5xl text-primary-9"}),E("h1",{className:"py-6 text-xl text-center",children:["OTHER ",g("br",{})," SITES"]}),g("p",{className:"text-sm leading-6 text-gray-500",children:"Other sites can be hazardous because they have no security or 24/7 Support to act quickly on abuse reports; sometimes, they do not even care and ignore your emails because they dont want to lose their paying members. But hold on, we do care; we want you to stay; that is why we remove Sugar Daddy listings if they violate our Terms & Conditions. Our goal is safety first, then comes the money!"})]}),E("div",{className:"col-span-1 flex flex-col justify-start items-center",children:[g(M,{icon:yE,className:"text-5xl text-primary-10"}),E("h1",{className:"py-6 text-xl text-center",children:["MANUAL",g("br",{}),"LISTING"]}),g("p",{className:"text-sm leading-6 text-gray-500",children:"Youve heard it right! We list each Sugar Daddy manually to prevent spam or other weird creatures that want to scam you. However, we are just humans; mistakes happen, and we cannot guarantee 100% satisfaction; nobody can. Some people are too good to pretend to be a legit Sugar Daddy."})]}),E("div",{className:"col-span-1 flex flex-col justify-start items-center",children:[g(M,{icon:wE,className:"text-5xl text-primary-12"}),E("h1",{className:"py-6 text-xl text-center",children:["FREE FOR SUGAR ",g("br",{})," BABIES"]}),g("p",{className:"text-sm leading-6 text-gray-500",children:"Yay! It is free for a Sugar Baby to add Sugar Daddies. There is nothing you need to do; browse through the pages and find your Sugar Daddy."})]}),E("div",{className:"col-span-1 flex flex-col justify-start items-center",children:[g(M,{icon:Xp,className:"text-5xl text-primary-11"}),E("h1",{className:"py-6 text-xl text-center",children:["ABUSE ",g("br",{})," REPORT"]}),g("p",{className:"text-sm leading-6 text-gray-500",children:"Under each Sugar Daddy listing is a report button. Just choose your preferred email provider and send us an email. Ensure to provide the username you added and attach screenshots of the entire conversation history between you and the Sugar Daddy; this will make it easier for us to identify and take action immediately. Our abuse email is monitored 24/7. abuse@how-to-find-a-sugar-daddy.com"})]})]})]})]}),Mv="/assets/logo-1d63a908.png",CE=()=>E(In,{children:[g("nav",{className:"py-4 w-full flex justify-center",children:g("img",{src:Mv,className:"w-16"})}),E("nav",{className:"navbar navbar-expand-lg py-2 relative flex items-center justify-center",children:[g("div",{className:"flex items-center justify-center",children:E("div",{className:"inline-flex shadow-md hover:shadow-lg focus:shadow-lg",role:"group",children:[E(Se,{to:"#","aria-current":"page",className:"flex flex-col justify-center text-center gap-2 rounded-l px-3 py-2.5 bg-primary-1 text-primary-3 font-semibold text-[75%] leading-loose hover:bg-primary-2 transition duration-150 ease-in-out",children:[g(M,{icon:gE,className:"text-lg"}),"Featured",g("br",{}),"Daddies"]}),E(Se,{to:"#",className:"flex flex-col justify-center text-center gap-2 px-3 py-3.5 border-y border-primary-1 text-primary-1 hover:text-primary-3 font-semibold text-[75%] leading-loose hover:bg-primary-1 transition duration-150 ease-in-out",children:[g(M,{icon:EE,className:"text-lg"}),"Find",g("br",{}),"Daddies"]}),E(Se,{to:"#",className:"flex flex-col justify-center text-center gap-2 rounded-r px-3 py-2.5 border border-primary-1 text-primary-1 hover:text-primary-3 font-semibold text-[75%] leading-loose hover:bg-primary-1 transition duration-150 ease-in-out",children:[g(M,{icon:pE,className:"text-lg"}),"Become a",g("br",{}),"Sugar Daddy"]})]})}),E("div",{className:"flex flex-wrap items-center justify-between",children:[g("div",{className:"flex items-center",children:g("button",{className:"border border-white navbar-toggler py-3 px-4 rounded lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContentY","aria-controls":"navbarSupportedContentY","aria-expanded":"false","aria-label":"Toggle navigation",children:g("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas",className:"w-5",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:g("path",{fill:"currentColor",d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"})})})}),g("div",{className:"navbar-collapse collapse grow items-center lg:block hidden",id:"navbarSupportedContentY",children:E("ul",{className:"navbar-nav mx-auto lg:flex flex-col",children:[g("li",{className:"nav-item",children:E("a",{href:"/how-to-find-a-sugar-daddy-in-china/",className:"flex flex-col items-center",children:[g(M,{icon:Kp,className:"text-white"}),g("h1",{className:"dropdown-toggle px-4 py-1 text-white font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap",type:"button",children:"Home"})]})}),E("li",{className:"nav-item flex flex-col items-center group",children:[g(M,{icon:ur,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"}),E("div",{className:"dropdown relative",children:[E("button",{className:"dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Pricing Plan",g("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",className:"w-2 ml-2",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:g("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})})]}),E("ul",{className:"dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none","aria-labelledby":"dropdownMenuButton1",children:[g("li",{children:E(Se,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[g(M,{icon:ur}),"Lifetime Plan"]})}),g("li",{children:E(Se,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[g(M,{icon:ur}),"Featured Plan"]})})]})]})]}),E("li",{className:"nav-item flex flex-col items-center group",children:[g(M,{icon:gs,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"}),E("div",{className:"dropdown relative",children:[E("button",{className:"dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Follow Us",g("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",className:"w-2 ml-2",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:g("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})})]}),g("ul",{className:"dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none","aria-labelledby":"dropdownMenuButton1",children:g("li",{children:E(Se,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[g(M,{icon:gs}),"@#             "]})})})]})]}),E("li",{className:"nav-item flex flex-col items-center group",children:[g(M,{icon:ys,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"}),E("div",{className:"dropdown relative",children:[E("button",{className:"dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Partner",g("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",className:"w-2 ml-2",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:g("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})})]}),g("ul",{className:"dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none","aria-labelledby":"dropdownMenuButton1",children:g("li",{children:E(Se,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[g(M,{icon:ys}),"PARTNER WITH US"]})})})]})]}),E("li",{className:"nav-item flex flex-col items-center group",children:[E("div",{className:"flex gap-1",children:[g(M,{icon:ws,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"}),g(M,{icon:Yp,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"}),g(M,{icon:vs,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"})]}),E("div",{className:"dropdown relative",children:[E("button",{className:"dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Privacy & Terms",g("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",className:"w-2 ml-2",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:g("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})})]}),E("ul",{className:"dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none","aria-labelledby":"dropdownMenuButton1",children:[g("li",{children:E(Se,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[g(M,{icon:ws}),"Privacy Policy"]})}),g("li",{children:E(Se,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[g(M,{icon:vs}),"Terms and Conditions"]})})]})]})]})]})})]})]}),g("div",{className:"navbar-collapse collapse grow items-center lg:hidden block",id:"navbarSupportedContentY",children:E("ul",{className:"navbar-nav mx-auto lg:flex flex-col",children:[g("li",{className:"nav-item my-4",children:E(Se,{to:"#",className:"flex flex-col items-center",children:[g(M,{icon:Kp,className:"text-white"}),g("div",{className:"dropdown relative",children:g("button",{className:"dropdown-toggle px-4 py-1 text-white font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Home"})})]})}),E("li",{className:"nav-item my-4 flex flex-col items-center group",children:[g(M,{icon:ur,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"}),E("div",{className:"dropdown relative",children:[E("button",{className:"dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Pricing Plan",g("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",className:"w-2 ml-2",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:g("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})})]}),E("ul",{className:"dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none","aria-labelledby":"dropdownMenuButton1",children:[g("li",{children:E(Se,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[g(M,{icon:ur}),"Lifetime Plan"]})}),g("li",{children:E(Se,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[g(M,{icon:ur}),"Featured Plan"]})})]})]})]}),E("li",{className:"nav-item my-4 flex flex-col items-center group",children:[g(M,{icon:gs,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"}),E("div",{className:"dropdown relative",children:[E("button",{className:"dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Follow Us",g("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",className:"w-2 ml-2",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:g("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})})]}),g("ul",{className:"dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none","aria-labelledby":"dropdownMenuButton1",children:g("li",{children:E(Se,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[g(M,{icon:gs}),"@#             "]})})})]})]}),E("li",{className:"nav-item my-4 flex flex-col items-center group",children:[g(M,{icon:ys,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"}),E("div",{className:"dropdown relative",children:[E("button",{className:"dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Partner",g("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",className:"w-2 ml-2",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:g("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})})]}),g("ul",{className:"dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none","aria-labelledby":"dropdownMenuButton1",children:g("li",{children:E(Se,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[g(M,{icon:ys}),"PARTNER WITH US"]})})})]})]}),E("li",{className:"nav-item my-4 flex flex-col items-center group",children:[E("div",{className:"flex gap-1",children:[g(M,{icon:ws,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"}),g(M,{icon:Yp,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"}),g(M,{icon:vs,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"})]}),E("div",{className:"dropdown relative",children:[E("button",{className:"dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Privacy & Terms",g("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",className:"w-2 ml-2",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:g("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})})]}),E("ul",{className:"dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none","aria-labelledby":"dropdownMenuButton1",children:[g("li",{children:E(Se,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[g(M,{icon:ws}),"Privacy Policy"]})}),g("li",{children:E(Se,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[g(M,{icon:vs}),"Terms and Conditions"]})})]})]})]})]})}),g(pk,{})]}),NE=()=>{let{user:e}=Tl();return e?g(cT,{}):g(rv,{to:"/admin"})},PE=()=>{let{user:e}=Tl();return e?g(rv,{to:"/dashboard"}):g(dT,{})};/**
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
 */const $v=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},AE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Uv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let h=(a&15)<<2|u>>6,v=u&63;l||(v=64,s||(h=64)),r.push(n[c],n[f],n[h],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray($v(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):AE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw Error();const h=o<<2|a>>4;if(r.push(h),u!==64){const v=a<<4&240|u>>2;if(r.push(v),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},RE=function(e){const t=$v(e);return Uv.encodeByteArray(t,!0)},_a=function(e){return RE(e).replace(/\./g,"")},Fv=function(e){try{return Uv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function LE(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function DE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ME(){const e=Pe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function $E(){try{return typeof indexedDB=="object"}catch{return!1}}function UE(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function FE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zE=()=>FE().__FIREBASE_DEFAULTS__,jE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},BE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Fv(e[1]);return t&&JSON.parse(t)},md=()=>{try{return zE()||jE()||BE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},zv=e=>{var t,n;return(n=(t=md())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},jv=e=>{const t=zv(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},HE=()=>{var e;return(e=md())===null||e===void 0?void 0:e.config},Bv=e=>{var t;return(t=md())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class VE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Hv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[_a(JSON.stringify(n)),_a(JSON.stringify(s)),a].join(".")}/**
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
 */const WE="FirebaseError";class It extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=WE,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Co.prototype.create)}}class Co{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?GE(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new It(i,a,r)}}function GE(e,t){return e.replace(KE,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const KE=/\{\$([^}]+)}/g;function YE(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ka(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Qp(o)&&Qp(s)){if(!ka(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Qp(e){return e!==null&&typeof e=="object"}/**
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
 */function No(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ei(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function xi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function XE(e,t){const n=new qE(e,t);return n.subscribe.bind(n)}class qE{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");QE(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=cu),i.error===void 0&&(i.error=cu),i.complete===void 0&&(i.complete=cu);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QE(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function cu(){}/**
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
 */function Qe(e){return e&&e._delegate?e._delegate:e}class bn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Mn="[DEFAULT]";/**
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
 */class JE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new VE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ex(t))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Mn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Mn){return this.instances.has(t)}getOptions(t=Mn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ZE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Mn){return this.component?this.component.multipleInstances?t:Mn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ZE(e){return e===Mn?void 0:e}function ex(e){return e.instantiationMode==="EAGER"}/**
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
 */class tx{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new JE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(W||(W={}));const nx={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},rx=W.INFO,ix={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},ox=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=ix[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class gd{constructor(t){this.name=t,this._logLevel=rx,this._logHandler=ox,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in W))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?nx[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...t),this._logHandler(this,W.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...t),this._logHandler(this,W.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,W.INFO,...t),this._logHandler(this,W.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,W.WARN,...t),this._logHandler(this,W.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...t),this._logHandler(this,W.ERROR,...t)}}const sx=(e,t)=>t.some(n=>e instanceof n);let Jp,Zp;function ax(){return Jp||(Jp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lx(){return Zp||(Zp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vv=new WeakMap,zc=new WeakMap,Wv=new WeakMap,fu=new WeakMap,vd=new WeakMap;function ux(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(yn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Vv.set(n,e)}).catch(()=>{}),vd.set(t,e),t}function cx(e){if(zc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});zc.set(e,t)}let jc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return zc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Wv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function fx(e){jc=e(jc)}function dx(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(du(this),t,...n);return Wv.set(r,t.sort?t.sort():[t]),yn(r)}:lx().includes(e)?function(...t){return e.apply(du(this),t),yn(Vv.get(this))}:function(...t){return yn(e.apply(du(this),t))}}function hx(e){return typeof e=="function"?dx(e):(e instanceof IDBTransaction&&cx(e),sx(e,ax())?new Proxy(e,jc):e)}function yn(e){if(e instanceof IDBRequest)return ux(e);if(fu.has(e))return fu.get(e);const t=hx(e);return t!==e&&(fu.set(e,t),vd.set(t,e)),t}const du=e=>vd.get(e);function px(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=yn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(yn(s.result),l.oldVersion,l.newVersion,yn(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const mx=["get","getKey","getAll","getAllKeys","count"],gx=["put","add","delete","clear"],hu=new Map;function em(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(hu.get(t))return hu.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=gx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mx.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return hu.set(t,o),o}fx(e=>({...e,get:(t,n,r)=>em(t,n)||e.get(t,n,r),has:(t,n)=>!!em(t,n)||e.has(t,n)}));/**
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
 */class vx{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yx(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Bc="@firebase/app",tm="0.9.0";/**
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
 */const tr=new gd("@firebase/app"),wx="@firebase/app-compat",_x="@firebase/analytics-compat",kx="@firebase/analytics",Ex="@firebase/app-check-compat",xx="@firebase/app-check",Sx="@firebase/auth",bx="@firebase/auth-compat",Ix="@firebase/database",Tx="@firebase/database-compat",Cx="@firebase/functions",Nx="@firebase/functions-compat",Px="@firebase/installations",Ax="@firebase/installations-compat",Rx="@firebase/messaging",Ox="@firebase/messaging-compat",Lx="@firebase/performance",Dx="@firebase/performance-compat",Mx="@firebase/remote-config",$x="@firebase/remote-config-compat",Ux="@firebase/storage",Fx="@firebase/storage-compat",zx="@firebase/firestore",jx="@firebase/firestore-compat",Bx="firebase",Hx="9.15.0";/**
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
 */const Hc="[DEFAULT]",Vx={[Bc]:"fire-core",[wx]:"fire-core-compat",[kx]:"fire-analytics",[_x]:"fire-analytics-compat",[xx]:"fire-app-check",[Ex]:"fire-app-check-compat",[Sx]:"fire-auth",[bx]:"fire-auth-compat",[Ix]:"fire-rtdb",[Tx]:"fire-rtdb-compat",[Cx]:"fire-fn",[Nx]:"fire-fn-compat",[Px]:"fire-iid",[Ax]:"fire-iid-compat",[Rx]:"fire-fcm",[Ox]:"fire-fcm-compat",[Lx]:"fire-perf",[Dx]:"fire-perf-compat",[Mx]:"fire-rc",[$x]:"fire-rc-compat",[Ux]:"fire-gcs",[Fx]:"fire-gcs-compat",[zx]:"fire-fst",[jx]:"fire-fst-compat","fire-js":"fire-js",[Bx]:"fire-js-all"};/**
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
 */const Ea=new Map,Vc=new Map;function Wx(e,t){try{e.container.addComponent(t)}catch(n){tr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function nr(e){const t=e.name;if(Vc.has(t))return tr.debug(`There were multiple attempts to register component ${t}.`),!1;Vc.set(t,e);for(const n of Ea.values())Wx(n,e);return!0}function al(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Gx={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wn=new Co("app","Firebase",Gx);/**
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
 */class Kx{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw wn.create("app-deleted",{appName:this._name})}}/**
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
 */const Zr=Hx;function Gv(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Hc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw wn.create("bad-app-name",{appName:String(i)});if(n||(n=HE()),!n)throw wn.create("no-options");const o=Ea.get(i);if(o){if(ka(n,o.options)&&ka(r,o.config))return o;throw wn.create("duplicate-app",{appName:i})}const s=new tx(i);for(const l of Vc.values())s.addComponent(l);const a=new Kx(n,r,s);return Ea.set(i,a),a}function yd(e=Hc){const t=Ea.get(e);if(!t&&e===Hc)return Gv();if(!t)throw wn.create("no-app",{appName:e});return t}function xt(e,t,n){var r;let i=(r=Vx[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tr.warn(a.join(" "));return}nr(new bn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Yx="firebase-heartbeat-database",Xx=1,uo="firebase-heartbeat-store";let pu=null;function Kv(){return pu||(pu=px(Yx,Xx,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(uo)}}}).catch(e=>{throw wn.create("idb-open",{originalErrorMessage:e.message})})),pu}async function qx(e){try{return(await Kv()).transaction(uo).objectStore(uo).get(Yv(e))}catch(t){if(t instanceof It)tr.warn(t.message);else{const n=wn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});tr.warn(n.message)}}}async function nm(e,t){try{const r=(await Kv()).transaction(uo,"readwrite");return await r.objectStore(uo).put(t,Yv(e)),r.done}catch(n){if(n instanceof It)tr.warn(n.message);else{const r=wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tr.warn(r.message)}}}function Yv(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Qx=1024,Jx=30*24*60*60*1e3;class Zx{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new t4(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=rm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=Jx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=rm(),{heartbeatsToSend:n,unsentEntries:r}=e4(this._heartbeatsCache.heartbeats),i=_a(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function rm(){return new Date().toISOString().substring(0,10)}function e4(e,t=Qx){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),im(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),im(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class t4{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $E()?UE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nm(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nm(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function im(e){return _a(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function n4(e){nr(new bn("platform-logger",t=>new vx(t),"PRIVATE")),nr(new bn("heartbeat",t=>new Zx(t),"PRIVATE")),xt(Bc,tm,e),xt(Bc,tm,"esm2017"),xt("fire-js","")}n4("");function wd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Xv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const r4=Xv,qv=new Co("auth","Firebase",Xv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=new gd("@firebase/auth");function zs(e,...t){om.logLevel<=W.ERROR&&om.error(`Auth (${Zr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e,...t){throw _d(e,...t)}function St(e,...t){return _d(e,...t)}function i4(e,t,n){const r=Object.assign(Object.assign({},r4()),{[t]:n});return new Co("auth","Firebase",r).create(t,{appName:e.name})}function _d(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return qv.create(e,...t)}function L(e,t,...n){if(!e)throw _d(t,...n)}function Rt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw zs(t),new Error(t)}function Ht(e,t){e||Rt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=new Map;function Ot(e){Ht(e instanceof Function,"Expected a class definition");let t=sm.get(e);return t?(Ht(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,sm.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o4(e,t){const n=al(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(ka(o,t??{}))return i;mt(i,"already-initialized")}return n.initialize({options:t})}function s4(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ot);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function a4(){return am()==="http:"||am()==="https:"}function am(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(a4()||LE()||"connection"in navigator)?navigator.onLine:!0}function u4(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ht(n>t,"Short delay should be less than long delay!"),this.isMobile=OE()||DE()}get(){return l4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(e,t){Ht(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4=new Po(3e4,6e4);function ei(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ar(e,t,n,r,i={}){return Jv(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=No(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Qv.fetch()(Zv(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function Jv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},c4),t);try{const i=new d4(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw _s(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _s(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw _s(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw _s(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw i4(e,c,u);mt(e,c)}}catch(i){if(i instanceof It)throw i;mt(e,"network-request-failed")}}async function ll(e,t,n,r,i={}){const o=await ar(e,t,n,r,i);return"mfaPendingCredential"in o&&mt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Zv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?kd(e.config,i):`${e.config.apiScheme}://${i}`}class d4{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(St(this.auth,"network-request-failed")),f4.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _s(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=St(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h4(e,t){return ar(e,"POST","/v1/accounts:delete",t)}async function p4(e,t){return ar(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function m4(e,t=!1){const n=Qe(e),r=await n.getIdToken(t),i=Ed(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:$i(mu(i.auth_time)),issuedAtTime:$i(mu(i.iat)),expirationTime:$i(mu(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function mu(e){return Number(e)*1e3}function Ed(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return zs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Fv(n);return i?JSON.parse(i):(zs("Failed to decode base64 JWT payload"),null)}catch(i){return zs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function g4(e){const t=Ed(e);return L(t,"internal-error"),L(typeof t.exp<"u","internal-error"),L(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof It&&v4(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function v4({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$i(this.lastLoginAt),this.creationTime=$i(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xa(e){var t;const n=e.auth,r=await e.getIdToken(),i=await co(e,p4(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?k4(o.providerUserInfo):[],a=_4(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new e0(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function w4(e){const t=Qe(e);await xa(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function _4(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function k4(e){return e.map(t=>{var{providerId:n}=t,r=wd(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E4(e,t){const n=await Jv(e,{},async()=>{const r=No({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=Zv(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qv.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){L(t.idToken,"internal-error"),L(typeof t.idToken<"u","internal-error"),L(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):g4(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return L(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await E4(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new fo;return r&&(L(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(e,t){L(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Gn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=wd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new y4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new e0(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await co(this,this.stsTokenManager.getToken(this.auth,t));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return m4(this,t)}reload(){return w4(this)}_assign(t){this!==t&&(L(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Gn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await xa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await co(this,h4(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:_,isAnonymous:x,providerData:b,stsTokenManager:I}=n;L(m&&I,t,"internal-error");const A=fo.fromJSON(this.name,I);L(typeof m=="string",t,"internal-error"),Xt(f,t.name),Xt(h,t.name),L(typeof _=="boolean",t,"internal-error"),L(typeof x=="boolean",t,"internal-error"),Xt(v,t.name),Xt(y,t.name),Xt(w,t.name),Xt(T,t.name),Xt(p,t.name),Xt(d,t.name);const B=new Gn({uid:m,auth:t,email:h,emailVerified:_,displayName:f,isAnonymous:x,photoURL:y,phoneNumber:v,tenantId:w,stsTokenManager:A,createdAt:p,lastLoginAt:d});return b&&Array.isArray(b)&&(B.providerData=b.map(U=>Object.assign({},U))),T&&(B._redirectEventId=T),B}static async _fromIdTokenResponse(t,n,r=!1){const i=new fo;i.updateFromServerResponse(n);const o=new Gn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await xa(o),o}}/**
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
 */class t0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}t0.type="NONE";const lm=t0;/**
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
 */function js(e,t,n){return`firebase:${e}:${t}:${n}`}class Lr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=js(this.userKey,i.apiKey,o),this.fullPersistenceKey=js("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Gn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Lr(Ot(lm),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Ot(lm);const s=js(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=Gn._fromJSON(t,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Lr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Lr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(i0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(n0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(s0(t))return"Blackberry";if(a0(t))return"Webos";if(xd(t))return"Safari";if((t.includes("chrome/")||r0(t))&&!t.includes("edge/"))return"Chrome";if(o0(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function n0(e=Pe()){return/firefox\//i.test(e)}function xd(e=Pe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function r0(e=Pe()){return/crios\//i.test(e)}function i0(e=Pe()){return/iemobile/i.test(e)}function o0(e=Pe()){return/android/i.test(e)}function s0(e=Pe()){return/blackberry/i.test(e)}function a0(e=Pe()){return/webos/i.test(e)}function ul(e=Pe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function x4(e=Pe()){var t;return ul(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function S4(){return ME()&&document.documentMode===10}function l0(e=Pe()){return ul(e)||o0(e)||a0(e)||s0(e)||/windows phone/i.test(e)||i0(e)}function b4(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(e,t=[]){let n;switch(e){case"Browser":n=um(Pe());break;case"Worker":n=`${um(Pe())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zr}/${r}`}/**
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
 */class I4{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cm(this),this.idTokenSubscription=new cm(this),this.beforeStateQueue=new I4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ot(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Lr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await xa(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=u4()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Qe(t):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&L(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Co("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ot(t)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Lr.create(this,[Ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return L(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=u0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function cl(e){return Qe(e)}class cm{constructor(t){this.auth=t,this.observer=null,this.addObserver=XE(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function C4(e,t,n){const r=cl(e);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=c0(t),{host:s,port:a}=N4(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||P4()}function c0(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function N4(e){const t=c0(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:fm(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:fm(s)}}}function fm(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function P4(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(t){return Rt("not implemented")}_linkToIdToken(t,n){return Rt("not implemented")}_getReauthenticationResolver(t){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A4(e,t){return ar(e,"POST","/v1/accounts:resetPassword",ei(e,t))}async function R4(e,t){return ar(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O4(e,t){return ll(e,"POST","/v1/accounts:signInWithPassword",ei(e,t))}async function L4(e,t){return ar(e,"POST","/v1/accounts:sendOobCode",ei(e,t))}async function D4(e,t){return L4(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M4(e,t){return ll(e,"POST","/v1/accounts:signInWithEmailLink",ei(e,t))}async function $4(e,t){return ll(e,"POST","/v1/accounts:signInWithEmailLink",ei(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho extends Sd{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ho(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ho(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return O4(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return M4(t,{email:this._email,oobCode:this._password});default:mt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return R4(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $4(t,{idToken:n,email:this._email,oobCode:this._password});default:mt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(e,t){return ll(e,"POST","/v1/accounts:signInWithIdp",ei(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U4="http://localhost";class rr extends Sd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new rr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=wd(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new rr(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Dr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Dr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Dr(t,n)}buildRequest(){const t={requestUri:U4,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=No(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F4(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function z4(e){const t=Ei(xi(e)).link,n=t?Ei(xi(t)).deep_link_id:null,r=Ei(xi(e)).deep_link_id;return(r?Ei(xi(r)).link:null)||r||n||t||e}class bd{constructor(t){var n,r,i,o,s,a;const l=Ei(xi(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=F4((i=l.mode)!==null&&i!==void 0?i:null);L(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=z4(t);try{return new bd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.providerId=ti.PROVIDER_ID}static credential(t,n){return ho._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=bd.parseLink(n);return L(r,"argument-error"),ho._fromEmailAndCode(t,r.code,r.tenantId)}}ti.PROVIDER_ID="password";ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ao extends f0{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Ao{constructor(){super("facebook.com")}static credential(t){return rr._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return en.credentialFromTaggedObject(t)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return en.credential(t.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Ao{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return rr._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return tn.credentialFromTaggedObject(t)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Ao{constructor(){super("github.com")}static credential(t){return rr._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return nn.credentialFromTaggedObject(t)}static credentialFromError(t){return nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return nn.credential(t.oauthAccessToken)}catch{return null}}}nn.GITHUB_SIGN_IN_METHOD="github.com";nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Ao{constructor(){super("twitter.com")}static credential(t,n){return rr._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return rn.credentialFromTaggedObject(t)}static credentialFromError(t){return rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return rn.credential(n,r)}catch{return null}}}rn.TWITTER_SIGN_IN_METHOD="twitter.com";rn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Gn._fromIdTokenResponse(t,r,i),s=dm(r);return new Wr({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=dm(r);return new Wr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function dm(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa extends It{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Sa.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Sa(t,n,r,i)}}function d0(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Sa._fromErrorAndOperation(e,o,t,r):o})}async function j4(e,t,n=!1){const r=await co(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Wr._forOperation(e,"link",r)}/**
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
 */async function B4(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await co(e,d0(r,i,t,e),n);L(o.idToken,r,"internal-error");const s=Ed(o.idToken);L(s,r,"internal-error");const{sub:a}=s;return L(e.uid===a,r,"user-mismatch"),Wr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&mt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h0(e,t,n=!1){const r="signIn",i=await d0(e,r,t),o=await Wr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function H4(e,t){return h0(cl(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V4(e,t,n){var r;L(((r=n.url)===null||r===void 0?void 0:r.length)>0,e,"invalid-continue-uri"),L(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(L(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(L(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W4(e,t,n){const r=Qe(e),i={requestType:"PASSWORD_RESET",email:t};n&&V4(r,i,n),await D4(r,i)}async function G4(e,t,n){await A4(Qe(e),{oobCode:t,newPassword:n})}function K4(e,t,n){return H4(Qe(e),ti.credential(t,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y4(e,t){return Qe(e).setPersistence(t)}function X4(e,t,n,r){return Qe(e).onIdTokenChanged(t,n,r)}function q4(e,t,n){return Qe(e).beforeAuthStateChanged(t,n)}function Q4(e,t,n,r){return Qe(e).onAuthStateChanged(t,n,r)}function J4(e){return Qe(e).signOut()}const ba="__sak";/**
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
 */class p0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ba,"1"),this.storage.removeItem(ba),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z4(){const e=Pe();return xd(e)||ul(e)}const eS=1e3,tS=10;class m0 extends p0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Z4()&&b4(),this.fallbackToPolling=l0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);S4()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,tS):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},eS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}m0.type="LOCAL";const g0=m0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0 extends p0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}v0.type="SESSION";const y0=v0;/**
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
 */function nS(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class fl{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new fl(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await nS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class rS{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Id("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(h.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return window}function iS(e){bt().location.href=e}/**
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
 */function w0(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function oS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sS(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function aS(){return w0()?self:null}/**
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
 */const _0="firebaseLocalStorageDb",lS=1,Ia="firebaseLocalStorage",k0="fbase_key";class Ro{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dl(e,t){return e.transaction([Ia],t?"readwrite":"readonly").objectStore(Ia)}function uS(){const e=indexedDB.deleteDatabase(_0);return new Ro(e).toPromise()}function Gc(){const e=indexedDB.open(_0,lS);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ia,{keyPath:k0})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ia)?t(r):(r.close(),await uS(),t(await Gc()))})})}async function hm(e,t,n){const r=dl(e,!0).put({[k0]:t,value:n});return new Ro(r).toPromise()}async function cS(e,t){const n=dl(e,!1).get(t),r=await new Ro(n).toPromise();return r===void 0?null:r.value}function pm(e,t){const n=dl(e,!0).delete(t);return new Ro(n).toPromise()}const fS=800,dS=3;class E0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gc(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>dS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return w0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fl._getInstance(aS()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await oS(),!this.activeServiceWorker)return;this.sender=new rS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||sS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Gc();return await hm(t,ba,"1"),await pm(t,ba),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hm(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>cS(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>pm(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=dl(i,!1).getAll();return new Ro(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}E0.type="LOCAL";const hS=E0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function mS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=St("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",pS().appendChild(r)})}function gS(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Po(3e4,6e4);/**
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
 */function vS(e,t){return t?Ot(t):(L(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Td extends Sd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Dr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Dr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Dr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function yS(e){return h0(e.auth,new Td(e),e.bypassAuthState)}function wS(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),B4(n,new Td(e),e.bypassAuthState)}async function _S(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),j4(n,new Td(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return yS;case"linkViaPopup":case"linkViaRedirect":return _S;case"reauthViaPopup":case"reauthViaRedirect":return wS;default:mt(this.auth,"internal-error")}}resolve(t){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=new Po(2e3,1e4);class br extends x0{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,br.currentPopupAction&&br.currentPopupAction.cancel(),br.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return L(t,this.auth,"internal-error"),t}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const t=Id();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,br.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,kS.get())};t()}}br.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES="pendingRedirect",Bs=new Map;class xS extends x0{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Bs.get(this.auth._key());if(!t){try{const r=await SS(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Bs.set(this.auth._key(),t)}return this.bypassAuthState||Bs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SS(e,t){const n=TS(t),r=IS(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function bS(e,t){Bs.set(e._key(),t)}function IS(e){return Ot(e._redirectPersistence)}function TS(e){return js(ES,e.config.apiKey,e.name)}async function CS(e,t,n=!1){const r=cl(e),i=vS(r,t),s=await new xS(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=10*60*1e3;class PS{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!AS(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!S0(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(St(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=NS&&this.cachedEventUids.clear(),this.cachedEventUids.has(mm(t))}saveEventToCache(t){this.cachedEventUids.add(mm(t)),this.lastProcessedEventTime=Date.now()}}function mm(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function S0({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function AS(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return S0(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(e,t={}){return ar(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LS=/^https?/;async function DS(e){if(e.config.emulator)return;const{authorizedDomains:t}=await RS(e);for(const n of t)try{if(MS(n))return}catch{}mt(e,"unauthorized-domain")}function MS(e){const t=Wc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!LS.test(n))return!1;if(OS.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $S=new Po(3e4,6e4);function gm(){const e=bt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function US(e){return new Promise((t,n)=>{var r,i,o;function s(){gm(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{gm(),n(St(e,"network-request-failed"))},timeout:$S.get()})}if(!((i=(r=bt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=bt().gapi)===null||o===void 0)&&o.load)s();else{const a=gS("iframefcb");return bt()[a]=()=>{gapi.load?s():n(St(e,"network-request-failed"))},mS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Hs=null,t})}let Hs=null;function FS(e){return Hs=Hs||US(e),Hs}/**
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
 */const zS=new Po(5e3,15e3),jS="__/auth/iframe",BS="emulator/auth/iframe",HS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WS(e){const t=e.config;L(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?kd(t,BS):`https://${e.config.authDomain}/${jS}`,r={apiKey:t.apiKey,appName:e.name,v:Zr},i=VS.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${No(r).slice(1)}`}async function GS(e){const t=await FS(e),n=bt().gapi;return L(n,e,"internal-error"),t.open({where:document.body,url:WS(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HS,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=St(e,"network-request-failed"),a=bt().setTimeout(()=>{o(s)},zS.get());function l(){bt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const KS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YS=500,XS=600,qS="_blank",QS="http://localhost";class vm{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JS(e,t,n,r=YS,i=XS){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},KS),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Pe().toLowerCase();n&&(a=r0(u)?qS:n),n0(u)&&(t=t||QS,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[v,y])=>`${h}${v}=${y},`,"");if(x4(u)&&a!=="_self")return ZS(t||"",a),new vm(null);const f=window.open(t||"",a,c);L(f,e,"popup-blocked");try{f.focus()}catch{}return new vm(f)}function ZS(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const eb="__/auth/handler",tb="emulator/auth/handler";function ym(e,t,n,r,i,o){L(e.config.authDomain,e,"auth-domain-config-required"),L(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Zr,eventId:i};if(t instanceof f0){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",YE(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof Ao){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${nb(e)}?${No(a).slice(1)}`}function nb({config:e}){return e.emulator?kd(e,tb):`https://${e.authDomain}/${eb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="webStorageSupport";class rb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=y0,this._completeRedirectFn=CS,this._overrideRedirectResult=bS}async _openPopup(t,n,r,i){var o;Ht((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=ym(t,n,r,Wc(),i);return JS(t,s,Id())}async _openRedirect(t,n,r,i){return await this._originValidation(t),iS(ym(t,n,r,Wc(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Ht(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await GS(t),r=new PS(t);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(gu,{type:gu},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[gu];s!==void 0&&n(!!s),mt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DS(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return l0()||xd()||ul()}}const ib=rb;var wm="@firebase/auth",_m="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ab(e){nr(new bn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{L(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),L(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:u0(e)},c=new T4(a,l,u);return s4(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),nr(new bn("auth-internal",t=>{const n=cl(t.getProvider("auth").getImmediate());return(r=>new ob(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(wm,_m,sb(e)),xt(wm,_m,"esm2017")}/**
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
 */const lb=5*60,ub=Bv("authIdTokenMaxAge")||lb;let km=null;const cb=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ub)return;const i=n==null?void 0:n.token;km!==i&&(km=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fb(e=yd()){const t=al(e,"auth");if(t.isInitialized())return t.getImmediate();const n=o4(e,{popupRedirectResolver:ib,persistence:[hS,g0,y0]}),r=Bv("authTokenSyncURL");if(r){const o=cb(r);q4(n,o,()=>o(n.currentUser)),X4(n,s=>o(s))}const i=zv("auth");return i&&C4(n,`http://${i}`),n}ab("Browser");var db="firebase",hb="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(db,hb,"app");var pb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,Cd=Cd||{},D=pb||self;function Ta(){}function hl(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Oo(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function mb(e){return Object.prototype.hasOwnProperty.call(e,vu)&&e[vu]||(e[vu]=++gb)}var vu="closure_uid_"+(1e9*Math.random()>>>0),gb=0;function vb(e,t,n){return e.call.apply(e.bind,arguments)}function yb(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Te(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Te=vb:Te=yb,Te.apply(null,arguments)}function ks(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function ke(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return t.prototype[i].apply(r,s)}}function Pn(){this.s=this.s,this.o=this.o}var wb=0;Pn.prototype.s=!1;Pn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),wb!=0)&&mb(this)};Pn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b0=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Nd(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Em(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(hl(r)){const i=e.length||0,o=r.length||0;e.length=i+o;for(let s=0;s<o;s++)e[i+s]=r[s]}else e.push(r)}}function Ce(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var _b=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{D.addEventListener("test",Ta,t),D.removeEventListener("test",Ta,t)}catch{}return e}();function Ca(e){return/^[\s\xa0]*$/.test(e)}var xm=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function yu(e,t){return e<t?-1:e>t?1:0}function pl(){var e=D.navigator;return e&&(e=e.userAgent)?e:""}function wt(e){return pl().indexOf(e)!=-1}function Pd(e){return Pd[" "](e),e}Pd[" "]=Ta;function kb(e){var t=Sb;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Eb=wt("Opera"),po=wt("Trident")||wt("MSIE"),I0=wt("Edge"),Kc=I0||po,T0=wt("Gecko")&&!(pl().toLowerCase().indexOf("webkit")!=-1&&!wt("Edge"))&&!(wt("Trident")||wt("MSIE"))&&!wt("Edge"),xb=pl().toLowerCase().indexOf("webkit")!=-1&&!wt("Edge");function C0(){var e=D.document;return e?e.documentMode:void 0}var Yc;e:{var wu="",_u=function(){var e=pl();if(T0)return/rv:([^\);]+)(\)|;)/.exec(e);if(I0)return/Edge\/([\d\.]+)/.exec(e);if(po)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(xb)return/WebKit\/(\S+)/.exec(e);if(Eb)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(_u&&(wu=_u?_u[1]:""),po){var ku=C0();if(ku!=null&&ku>parseFloat(wu)){Yc=String(ku);break e}}Yc=wu}var Sb={};function bb(){return kb(function(){let e=0;const t=xm(String(Yc)).split("."),n=xm("9").split("."),r=Math.max(t.length,n.length);for(let s=0;e==0&&s<r;s++){var i=t[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],i[0].length==0&&o[0].length==0)break;e=yu(i[1].length==0?0:parseInt(i[1],10),o[1].length==0?0:parseInt(o[1],10))||yu(i[2].length==0,o[2].length==0)||yu(i[2],o[2]),i=i[3],o=o[3]}while(e==0)}return 0<=e})}D.document&&po&&C0();function mo(e,t){if(Ce.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(T0){e:{try{Pd(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Ib[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&mo.X.h.call(this)}}ke(mo,Ce);var Ib={2:"touch",3:"pen",4:"mouse"};mo.prototype.h=function(){mo.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Lo="closure_listenable_"+(1e6*Math.random()|0),Tb=0;function Cb(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++Tb,this.ba=this.ea=!1}function ml(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Ad(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function N0(e){const t={};for(const n in e)t[n]=e[n];return t}const Sm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P0(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let o=0;o<Sm.length;o++)n=Sm[o],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function gl(e){this.src=e,this.g={},this.h=0}gl.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=qc(e,t,r,i);return-1<s?(t=e[s],n||(t.ea=!1)):(t=new Cb(t,this.src,o,!!r,i),t.ea=n,e.push(t)),t};function Xc(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=b0(r,t),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(ml(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function qc(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.ba&&o.listener==t&&o.capture==!!n&&o.ha==r)return i}return-1}var Rd="closure_lm_"+(1e6*Math.random()|0),Eu={};function A0(e,t,n,r,i){if(r&&r.once)return O0(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)A0(e,t[o],n,r,i);return null}return n=Dd(n),e&&e[Lo]?e.N(t,n,Oo(r)?!!r.capture:!!r,i):R0(e,t,n,!1,r,i)}function R0(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=Oo(i)?!!i.capture:!!i,a=Ld(e);if(a||(e[Rd]=a=new gl(e)),n=a.add(t,n,r,s,o),n.proxy)return n;if(r=Nb(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)_b||(i=s),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(D0(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Nb(){function e(n){return t.call(e.src,e.listener,n)}const t=Pb;return e}function O0(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)O0(e,t[o],n,r,i);return null}return n=Dd(n),e&&e[Lo]?e.O(t,n,Oo(r)?!!r.capture:!!r,i):R0(e,t,n,!0,r,i)}function L0(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)L0(e,t[o],n,r,i);else r=Oo(r)?!!r.capture:!!r,n=Dd(n),e&&e[Lo]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=qc(o,n,r,i),-1<n&&(ml(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ld(e))&&(t=e.g[t.toString()],e=-1,t&&(e=qc(t,n,r,i)),(n=-1<e?t[e]:null)&&Od(n))}function Od(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Lo])Xc(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(D0(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ld(t))?(Xc(n,e),n.h==0&&(n.src=null,t[Rd]=null)):ml(e)}}}function D0(e){return e in Eu?Eu[e]:Eu[e]="on"+e}function Pb(e,t){if(e.ba)e=!0;else{t=new mo(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&Od(e),e=n.call(r,t)}return e}function Ld(e){return e=e[Rd],e instanceof gl?e:null}var xu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dd(e){return typeof e=="function"?e:(e[xu]||(e[xu]=function(t){return e.handleEvent(t)}),e[xu])}function ge(){Pn.call(this),this.i=new gl(this),this.P=this,this.I=null}ke(ge,Pn);ge.prototype[Lo]=!0;ge.prototype.removeEventListener=function(e,t,n,r){L0(this,e,t,n,r)};function we(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,typeof t=="string")t=new Ce(t,e);else if(t instanceof Ce)t.target=t.target||e;else{var i=t;t=new Ce(r,e),P0(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=Es(s,r,!0,t)&&i}if(s=t.g=e,i=Es(s,r,!0,t)&&i,i=Es(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=Es(s,r,!1,t)&&i}ge.prototype.M=function(){if(ge.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ml(n[r]);delete e.g[t],e.h--}}this.I=null};ge.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};ge.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Es(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,l=s.ha||s.src;s.ea&&Xc(e.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Md=D.JSON.stringify;function Ab(){var e=U0;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Rb{constructor(){this.h=this.g=null}add(t,n){const r=M0.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var M0=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Ob,e=>e.reset());class Ob{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Lb(e){D.setTimeout(()=>{throw e},0)}function $0(e,t){Qc||Db(),Jc||(Qc(),Jc=!0),U0.add(e,t)}var Qc;function Db(){var e=D.Promise.resolve(void 0);Qc=function(){e.then(Mb)}}var Jc=!1,U0=new Rb;function Mb(){for(var e;e=Ab();){try{e.h.call(e.g)}catch(n){Lb(n)}var t=M0;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Jc=!1}function vl(e,t){ge.call(this),this.h=e||1,this.g=t||D,this.j=Te(this.lb,this),this.l=Date.now()}ke(vl,ge);O=vl.prototype;O.ca=!1;O.R=null;O.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),we(this,"tick"),this.ca&&($d(this),this.start()))}};O.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $d(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}O.M=function(){vl.X.M.call(this),$d(this),delete this.g};function Ud(e,t,n){if(typeof e=="function")n&&(e=Te(e,n));else if(e&&typeof e.handleEvent=="function")e=Te(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:D.setTimeout(e,t||0)}function F0(e){e.g=Ud(()=>{e.g=null,e.i&&(e.i=!1,F0(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class $b extends Pn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:F0(this)}M(){super.M(),this.g&&(D.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function go(e){Pn.call(this),this.h=e,this.g={}}ke(go,Pn);var bm=[];function z0(e,t,n,r){Array.isArray(n)||(n&&(bm[0]=n.toString()),n=bm);for(var i=0;i<n.length;i++){var o=A0(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function j0(e){Ad(e.g,function(t,n){this.g.hasOwnProperty(n)&&Od(t)},e),e.g={}}go.prototype.M=function(){go.X.M.call(this),j0(this)};go.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function yl(){this.g=!0}yl.prototype.Aa=function(){this.g=!1};function Ub(e,t,n,r,i,o){e.info(function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");s=2<=f.length&&f[1]=="type"?s+(c+"="+u+"&"):s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+s})}function Fb(e,t,n,r,i,o,s){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+o+" "+s})}function Ir(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+jb(e,n)+(r?" "+r:"")})}function zb(e,t){e.info(function(){return"TIMEOUT: "+t})}yl.prototype.info=function(){};function jb(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return Md(n)}catch{return t}}var ni={},Im=null;function Fd(){return Im=Im||new ge}ni.Pa="serverreachability";function B0(e){Ce.call(this,ni.Pa,e)}ke(B0,Ce);function vo(e){const t=Fd();we(t,new B0(t))}ni.STAT_EVENT="statevent";function H0(e,t){Ce.call(this,ni.STAT_EVENT,e),this.stat=t}ke(H0,Ce);function Re(e){const t=Fd();we(t,new H0(t,e))}ni.Qa="timingevent";function V0(e,t){Ce.call(this,ni.Qa,e),this.size=t}ke(V0,Ce);function Do(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return D.setTimeout(function(){e()},t)}var zd={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Bb={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function jd(){}jd.prototype.h=null;function Tm(e){return e.h||(e.h=e.i())}function Hb(){}var Mo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Bd(){Ce.call(this,"d")}ke(Bd,Ce);function Hd(){Ce.call(this,"c")}ke(Hd,Ce);var Zc;function wl(){}ke(wl,jd);wl.prototype.g=function(){return new XMLHttpRequest};wl.prototype.i=function(){return{}};Zc=new wl;function $o(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new go(this),this.O=Vb,e=Kc?125:void 0,this.T=new vl(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new W0}function W0(){this.i=null,this.g="",this.h=!1}var Vb=45e3,ef={},Na={};O=$o.prototype;O.setTimeout=function(e){this.O=e};function tf(e,t,n){e.K=1,e.v=kl(Vt(t)),e.s=n,e.P=!0,G0(e,null)}function G0(e,t){e.F=Date.now(),Uo(e),e.A=Vt(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),ey(n.i,"t",r),e.C=0,n=e.l.H,e.h=new W0,e.g=ky(e.l,n?t:null,!e.s),0<e.N&&(e.L=new $b(Te(e.La,e,e.g),e.N)),z0(e.S,e.g,"readystatechange",e.ib),t=e.H?N0(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),vo(),Ub(e.j,e.u,e.A,e.m,e.U,e.s)}O.ib=function(e){e=e.target;const t=this.L;t&&Lt(e)==3?t.l():this.La(e)};O.La=function(e){try{if(e==this.g)e:{const c=Lt(this.g);var t=this.g.Ea();const f=this.g.aa();if(!(3>c)&&(c!=3||Kc||this.g&&(this.h.h||this.g.fa()||Am(this.g)))){this.I||c!=4||t==7||(t==8||0>=f?vo(3):vo(2)),_l(this);var n=this.g.aa();this.Y=n;t:if(K0(this)){var r=Am(this.g);e="";var i=r.length,o=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bn(this),Ui(this);var s="";break t}this.h.i=new D.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=n==200,Fb(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ca(a)){var u=a;break t}}u=null}if(n=u)Ir(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,nf(this,n);else{this.i=!1,this.o=3,Re(12),Bn(this),Ui(this);break e}}this.P?(Y0(this,c,s),Kc&&this.i&&c==3&&(z0(this.S,this.T,"tick",this.hb),this.T.start())):(Ir(this.j,this.m,s,null),nf(this,s)),c==4&&Bn(this),this.i&&!this.I&&(c==4?vy(this.l,this):(this.i=!1,Uo(this)))}else n==400&&0<s.indexOf("Unknown SID")?(this.o=3,Re(12)):(this.o=0,Re(13)),Bn(this),Ui(this)}}}catch{}finally{}};function K0(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Y0(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if(i=Wb(e,n),i==Na){t==4&&(e.o=4,Re(14),r=!1),Ir(e.j,e.m,null,"[Incomplete Response]");break}else if(i==ef){e.o=4,Re(15),Ir(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Ir(e.j,e.m,i,null),nf(e,i);K0(e)&&i!=Na&&i!=ef&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Re(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),qd(t),t.K=!0,Re(11))):(Ir(e.j,e.m,n,"[Invalid Chunked Response]"),Bn(e),Ui(e))}O.hb=function(){if(this.g){var e=Lt(this.g),t=this.g.fa();this.C<t.length&&(_l(this),Y0(this,e,t),this.i&&e!=4&&Uo(this))}};function Wb(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Na:(n=Number(t.substring(n,r)),isNaN(n)?ef:(r+=1,r+n>t.length?Na:(t=t.substr(r,n),e.C=r+n,t)))}O.cancel=function(){this.I=!0,Bn(this)};function Uo(e){e.V=Date.now()+e.O,X0(e,e.O)}function X0(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Do(Te(e.gb,e),t)}function _l(e){e.B&&(D.clearTimeout(e.B),e.B=null)}O.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(zb(this.j,this.A),this.K!=2&&(vo(),Re(17)),Bn(this),this.o=2,Ui(this)):X0(this,this.V-e)};function Ui(e){e.l.G==0||e.I||vy(e.l,e)}function Bn(e){_l(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,$d(e.T),j0(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function nf(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||rf(n.h,e))){if(!e.J&&rf(n.h,e)&&n.G==3){try{var r=n.Fa.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Ra(n),bl(n);else break e;Xd(n),Re(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Do(Te(n.cb,n),6e3));if(1>=ry(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Hn(n,11)}else if((e.J||n.g==e)&&Ra(n),!Ca(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const f=u[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const v=e.g;if(v){const y=v.g?v.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var o=r.h;o.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(Vd(o,o.h),o.h=null))}if(r.D){const w=v.g?v.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.za=w,Z(r.F,r.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var s=e;if(r.sa=_y(r,r.H?r.ka:null,r.V),s.J){iy(r.h,s);var a=s,l=r.J;l&&a.setTimeout(l),a.B&&(_l(a),Uo(a)),r.g=s}else my(r);0<n.i.length&&Il(n)}else u[0]!="stop"&&u[0]!="close"||Hn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Hn(n,7):Yd(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}vo(4)}catch{}}function Gb(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(hl(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Kb(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(hl(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function q0(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(hl(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Kb(e),r=Gb(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}var Q0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yb(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Kn(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Kn){this.h=t!==void 0?t:e.h,Pa(this,e.j),this.s=e.s,this.g=e.g,Aa(this,e.m),this.l=e.l,t=e.i;var n=new yo;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Cm(this,n),this.o=e.o}else e&&(n=String(e).match(Q0))?(this.h=!!t,Pa(this,n[1]||"",!0),this.s=Si(n[2]||""),this.g=Si(n[3]||"",!0),Aa(this,n[4]),this.l=Si(n[5]||"",!0),Cm(this,n[6]||"",!0),this.o=Si(n[7]||"")):(this.h=!!t,this.i=new yo(null,this.h))}Kn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(bi(t,Nm,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(bi(t,Nm,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(bi(n,n.charAt(0)=="/"?Qb:qb,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",bi(n,Zb)),e.join("")};function Vt(e){return new Kn(e)}function Pa(e,t,n){e.j=n?Si(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Aa(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Cm(e,t,n){t instanceof yo?(e.i=t,eI(e.i,e.h)):(n||(t=bi(t,Jb)),e.i=new yo(t,e.h))}function Z(e,t,n){e.i.set(t,n)}function kl(e){return Z(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Si(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function bi(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Xb),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Xb(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Nm=/[#\/\?@]/g,qb=/[#\?:]/g,Qb=/[#\?]/g,Jb=/[#\?@]/g,Zb=/#/g;function yo(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function An(e){e.g||(e.g=new Map,e.h=0,e.i&&Yb(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}O=yo.prototype;O.add=function(e,t){An(this),this.i=null,e=ri(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function J0(e,t){An(e),t=ri(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Z0(e,t){return An(e),t=ri(e,t),e.g.has(t)}O.forEach=function(e,t){An(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};O.oa=function(){An(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let o=0;o<i.length;o++)n.push(t[r])}return n};O.W=function(e){An(this);let t=[];if(typeof e=="string")Z0(this,e)&&(t=t.concat(this.g.get(ri(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};O.set=function(e,t){return An(this),this.i=null,e=ri(this,e),Z0(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};O.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function ey(e,t,n){J0(e,t),0<n.length&&(e.i=null,e.g.set(ri(e,t),Nd(n)),e.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")};function ri(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function eI(e,t){t&&!e.j&&(An(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(J0(this,r),ey(this,i,n))},e)),e.j=t}var tI=class{constructor(e,t){this.h=e,this.g=t}};function ty(e){this.l=e||nI,D.PerformanceNavigationTiming?(e=D.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(D.g&&D.g.Ga&&D.g.Ga()&&D.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nI=10;function ny(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function ry(e){return e.h?1:e.g?e.g.size:0}function rf(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Vd(e,t){e.g?e.g.add(t):e.h=t}function iy(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}ty.prototype.cancel=function(){if(this.i=oy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function oy(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Nd(e.i)}function Wd(){}Wd.prototype.stringify=function(e){return D.JSON.stringify(e,void 0)};Wd.prototype.parse=function(e){return D.JSON.parse(e,void 0)};function rI(){this.g=new Wd}function iI(e,t,n){const r=n||"";try{q0(e,function(i,o){let s=i;Oo(i)&&(s=Md(i)),t.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function oI(e,t){const n=new yl;if(D.Image){const r=new Image;r.onload=ks(xs,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ks(xs,n,r,"TestLoadImage: error",!1,t),r.onabort=ks(xs,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ks(xs,n,r,"TestLoadImage: timeout",!1,t),D.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function xs(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function El(e){this.l=e.ac||null,this.j=e.jb||!1}ke(El,jd);El.prototype.g=function(){return new xl(this.l,this.j)};El.prototype.i=function(e){return function(){return e}}({});function xl(e,t){ge.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Gd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ke(xl,ge);var Gd=0;O=xl.prototype;O.open=function(e,t){if(this.readyState!=Gd)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,wo(this)};O.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||D).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fo(this)),this.readyState=Gd};O.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,wo(this)),this.g&&(this.readyState=3,wo(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof D.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sy(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function sy(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}O.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Fo(this):wo(this),this.readyState==3&&sy(this)}};O.Va=function(e){this.g&&(this.response=this.responseText=e,Fo(this))};O.Ua=function(e){this.g&&(this.response=e,Fo(this))};O.ga=function(){this.g&&Fo(this)};function Fo(e){e.readyState=4,e.l=null,e.j=null,e.A=null,wo(e)}O.setRequestHeader=function(e,t){this.v.append(e,t)};O.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function wo(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(xl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var sI=D.JSON.parse;function ae(e){ge.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ay,this.K=this.L=!1}ke(ae,ge);var ay="",aI=/^https?$/i,lI=["POST","PUT"];O=ae.prototype;O.Ka=function(e){this.L=e};O.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Zc.g(),this.C=this.u?Tm(this.u):Tm(Zc),this.g.onreadystatechange=Te(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(o){Pm(this,o);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=D.FormData&&e instanceof D.FormData,!(0<=b0(lI,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{cy(this),0<this.B&&((this.K=uI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Te(this.qa,this)):this.A=Ud(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){Pm(this,o)}};function uI(e){return po&&bb()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}O.qa=function(){typeof Cd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,we(this,"timeout"),this.abort(8))};function Pm(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ly(e),Sl(e)}function ly(e){e.D||(e.D=!0,we(e,"complete"),we(e,"error"))}O.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,we(this,"complete"),we(this,"abort"),Sl(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Sl(this,!0)),ae.X.M.call(this)};O.Ha=function(){this.s||(this.F||this.v||this.l?uy(this):this.fb())};O.fb=function(){uy(this)};function uy(e){if(e.h&&typeof Cd<"u"&&(!e.C[1]||Lt(e)!=4||e.aa()!=2)){if(e.v&&Lt(e)==4)Ud(e.Ha,0,e);else if(we(e,"readystatechange"),Lt(e)==4){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.H).match(Q0)[1]||null;if(!i&&D.self&&D.self.location){var o=D.self.location.protocol;i=o.substr(0,o.length-1)}r=!aI.test(i?i.toLowerCase():"")}n=r}if(n)we(e,"complete"),we(e,"success");else{e.m=6;try{var s=2<Lt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.aa()+"]",ly(e)}}finally{Sl(e)}}}}function Sl(e,t){if(e.g){cy(e);const n=e.g,r=e.C[0]?Ta:null;e.g=null,e.C=null,t||we(e,"ready");try{n.onreadystatechange=r}catch{}}}function cy(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(D.clearTimeout(e.A),e.A=null)}function Lt(e){return e.g?e.g.readyState:0}O.aa=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}};O.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),sI(t)}};function Am(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case ay:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}O.Ea=function(){return this.m};O.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function fy(e){let t="";return Ad(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Kd(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=fy(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):Z(e,t,n))}function mi(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function dy(e){this.Ca=0,this.i=[],this.j=new yl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=mi("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=mi("baseRetryDelayMs",5e3,e),this.bb=mi("retryDelaySeedMs",1e4,e),this.$a=mi("forwardChannelMaxRetries",2,e),this.ta=mi("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new ty(e&&e.concurrentRequestLimit),this.Fa=new rI,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}O=dy.prototype;O.ma=8;O.G=1;function Yd(e){if(hy(e),e.G==3){var t=e.U++,n=Vt(e.F);Z(n,"SID",e.I),Z(n,"RID",t),Z(n,"TYPE","terminate"),zo(e,n),t=new $o(e,e.j,t,void 0),t.K=2,t.v=kl(Vt(n)),n=!1,D.navigator&&D.navigator.sendBeacon&&(n=D.navigator.sendBeacon(t.v.toString(),"")),!n&&D.Image&&(new Image().src=t.v,n=!0),n||(t.g=ky(t.l,null),t.g.da(t.v)),t.F=Date.now(),Uo(t)}wy(e)}function bl(e){e.g&&(qd(e),e.g.cancel(),e.g=null)}function hy(e){bl(e),e.u&&(D.clearTimeout(e.u),e.u=null),Ra(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&D.clearTimeout(e.m),e.m=null)}function Il(e){ny(e.h)||e.m||(e.m=!0,$0(e.Ja,e),e.C=0)}function cI(e,t){return ry(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Do(Te(e.Ja,e,t),yy(e,e.C)),e.C++,!0)}O.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new $o(this,this.j,e,void 0);let o=this.s;if(this.S&&(o?(o=N0(o),P0(o,this.S)):o=this.S),this.o!==null||this.N||(i.H=o,o=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=py(this,i,t),n=Vt(this.F),Z(n,"RID",e),Z(n,"CVER",22),this.D&&Z(n,"X-HTTP-Session-Id",this.D),zo(this,n),o&&(this.N?t="headers="+encodeURIComponent(String(fy(o)))+"&"+t:this.o&&Kd(n,this.o,o)),Vd(this.h,i),this.Ya&&Z(n,"TYPE","init"),this.O?(Z(n,"$req",t),Z(n,"SID","null"),i.Z=!0,tf(i,n,null)):tf(i,n,t),this.G=2}}else this.G==3&&(e?Rm(this,e):this.i.length==0||ny(this.h)||Rm(this))};function Rm(e,t){var n;t?n=t.m:n=e.U++;const r=Vt(e.F);Z(r,"SID",e.I),Z(r,"RID",n),Z(r,"AID",e.T),zo(e,r),e.o&&e.s&&Kd(r,e.o,e.s),n=new $o(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=py(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Vd(e.h,n),tf(n,r,t)}function zo(e,t){e.ia&&Ad(e.ia,function(n,r){Z(t,r,n)}),e.l&&q0({},function(n,r){Z(t,r,n)})}function py(e,t,n){n=Math.min(e.i.length,n);var r=e.l?Te(e.l.Ra,e.l,e):null;e:{var i=e.i;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=o,0>u)o=Math.max(0,i[l].h-100),a=!1;else try{iI(c,s,"req"+u+"_")}catch{r&&r(c)}}if(a){r=s.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function my(e){e.g||e.u||(e.Z=1,$0(e.Ia,e),e.A=0)}function Xd(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Do(Te(e.Ia,e),yy(e,e.A)),e.A++,!0)}O.Ia=function(){if(this.u=null,gy(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Do(Te(this.eb,this),e)}};O.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Re(10),bl(this),gy(this))};function qd(e){e.B!=null&&(D.clearTimeout(e.B),e.B=null)}function gy(e){e.g=new $o(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Vt(e.sa);Z(t,"RID","rpc"),Z(t,"SID",e.I),Z(t,"CI",e.L?"0":"1"),Z(t,"AID",e.T),Z(t,"TYPE","xmlhttp"),zo(e,t),e.o&&e.s&&Kd(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=kl(Vt(t)),n.s=null,n.P=!0,G0(n,e)}O.cb=function(){this.v!=null&&(this.v=null,bl(this),Xd(this),Re(19))};function Ra(e){e.v!=null&&(D.clearTimeout(e.v),e.v=null)}function vy(e,t){var n=null;if(e.g==t){Ra(e),qd(e),e.g=null;var r=2}else if(rf(e.h,t))n=t.D,iy(e.h,t),r=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=Fd(),we(r,new V0(r,n)),Il(e)}else my(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(r==1&&cI(e,t)||r==2&&Xd(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Hn(e,5);break;case 4:Hn(e,10);break;case 3:Hn(e,6);break;default:Hn(e,2)}}}function yy(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Hn(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=Te(e.kb,e);n||(n=new Kn("//www.google.com/images/cleardot.gif"),D.location&&D.location.protocol=="http"||Pa(n,"https"),kl(n)),oI(n.toString(),r)}else Re(2);e.G=0,e.l&&e.l.va(t),wy(e),hy(e)}O.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function wy(e){if(e.G=0,e.la=[],e.l){const t=oy(e.h);(t.length!=0||e.i.length!=0)&&(Em(e.la,t),Em(e.la,e.i),e.h.i.length=0,Nd(e.i),e.i.length=0),e.l.ua()}}function _y(e,t,n){var r=n instanceof Kn?Vt(n):new Kn(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),Aa(r,r.m);else{var i=D.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new Kn(null,void 0);r&&Pa(o,r),t&&(o.g=t),i&&Aa(o,i),n&&(o.l=n),r=o}return n=e.D,t=e.za,n&&t&&Z(r,n,t),Z(r,"VER",e.ma),zo(e,r),r}function ky(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new ae(new El({jb:!0})):new ae(e.ra),t.Ka(e.H),t}function Ey(){}O=Ey.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Ra=function(){};function it(e,t){ge.call(this),this.g=new dy(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Ca(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ca(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ii(this)}ke(it,ge);it.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Re(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=_y(e,null,e.V),Il(e)};it.prototype.close=function(){Yd(this.g)};it.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Md(e),e=n);t.i.push(new tI(t.ab++,e)),t.G==3&&Il(t)};it.prototype.M=function(){this.g.l=null,delete this.j,Yd(this.g),delete this.g,it.X.M.call(this)};function xy(e){Bd.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ke(xy,Bd);function Sy(){Hd.call(this),this.status=1}ke(Sy,Hd);function ii(e){this.g=e}ke(ii,Ey);ii.prototype.xa=function(){we(this.g,"a")};ii.prototype.wa=function(e){we(this.g,new xy(e))};ii.prototype.va=function(e){we(this.g,new Sy)};ii.prototype.ua=function(){we(this.g,"b")};it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;zd.NO_ERROR=0;zd.TIMEOUT=8;zd.HTTP_ERROR=6;Bb.COMPLETE="complete";Hb.EventType=Mo;Mo.OPEN="a";Mo.CLOSE="b";Mo.ERROR="c";Mo.MESSAGE="d";ge.prototype.listen=ge.prototype.N;ae.prototype.listenOnce=ae.prototype.O;ae.prototype.getLastError=ae.prototype.Oa;ae.prototype.getLastErrorCode=ae.prototype.Ea;ae.prototype.getStatus=ae.prototype.aa;ae.prototype.getResponseJson=ae.prototype.Sa;ae.prototype.getResponseText=ae.prototype.fa;ae.prototype.send=ae.prototype.da;ae.prototype.setWithCredentials=ae.prototype.Ka;const Om="@firebase/firestore";/**
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
 */class be{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
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
 */let jo="9.15.0";/**
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
 */const Gr=new gd("@firebase/firestore");function He(e,...t){if(Gr.logLevel<=W.DEBUG){const n=t.map(Jd);Gr.debug(`Firestore (${jo}): ${e}`,...n)}}function Qd(e,...t){if(Gr.logLevel<=W.ERROR){const n=t.map(Jd);Gr.error(`Firestore (${jo}): ${e}`,...n)}}function fI(e,...t){if(Gr.logLevel<=W.WARN){const n=t.map(Jd);Gr.warn(`Firestore (${jo}): ${e}`,...n)}}function Jd(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Zd(e="Unexpected state"){const t=`FIRESTORE (${jo}) INTERNAL ASSERTION FAILED: `+e;throw Qd(t),new Error(t)}function Oa(e,t){e||Zd()}/**
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
 */const We={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ge extends It{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Mr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class by{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class dI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(be.UNAUTHENTICATED))}shutdown(){}}class hI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pI{constructor(t){this.t=t,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new Mr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Mr,t.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{He("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(He("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Mr)}},0),s()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(He("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oa(typeof r.accessToken=="string"),new by(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Oa(t===null||typeof t=="string"),new be(t)}}class mI{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=be.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Oa(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class gI{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new mI(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vI{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yI{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const r=o=>{o.error!=null&&He("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.A;return this.A=o.token,He("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{He("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.T.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.T.getImmediate({optional:!0});o?i(o):He("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Oa(typeof n.token=="string"),this.A=n.token,new vI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class _I{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=wI(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=t.charAt(i[o]%t.length))}return r}}function Iy(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class kI{constructor(t,n,r,i,o,s,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class La{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new La("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof La&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var Lm,H;(H=Lm||(Lm={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";function Su(){return typeof document<"u"?document:null}class EI{constructor(t,n,r=1e3,i=1.5,o=6e4){this.Hs=t,this.timerId=n,this.mo=r,this.yo=i,this.po=o,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&He("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class eh{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}static createAndSchedule(t,n,r,i,o){const s=Date.now()+r,a=new eh(t,n,s,i,o);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ge(We.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xI(e,t){if(Qd("AsyncQueue",`${t}: ${e}`),Iy(e))return new Ge(We.UNAVAILABLE,`${t}: ${e}`);throw e}function SI(e,t,n,r){if(t===!0&&r===!0)throw new Ge(We.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function bI(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Zd()}function II(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ge(We.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bI(e);throw new Ge(We.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=new Map;class Mm{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new Ge(We.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ge(We.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,SI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ge(We.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Ge(We.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mm(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new dI;switch(n.type){case"gapi":const r=n.client;return new gI(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Ge(We.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Dm.get(t);n&&(He("ComponentProvider","Removing Datastore"),Dm.delete(t),n.terminate())}(this),Promise.resolve()}}function TI(e,t,n,r={}){var i;const o=(e=II(e,Ty))._getSettings();if(o.host!=="firestore.googleapis.com"&&o.host!==t&&fI("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},o),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let s,a;if(typeof r.mockUserToken=="string")s=r.mockUserToken,a=be.MOCK_USER;else{s=Hv(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new Ge(We.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new be(l)}e._authCredentials=new hI(new by(s,a))}}/**
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
 */class CI{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=be.UNAUTHENTICATED,this.clientId=_I.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{He("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(He("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ge(We.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=xI(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}class NI{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new EI(this,"async_queue_retry"),this.Wc=()=>{const n=Su();n&&He("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=Su();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=Su();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Mr;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Iy(t))throw t;He("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(o){let s=o.message||"";return o.stack&&(s=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),s}(r);throw Qd("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(t,n,r){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=eh.createAndSchedule(this,t,n,r,o=>this.Yc(o));return this.Uc.push(i),i}zc(){this.Kc&&Zd()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}class PI extends Ty{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new NI,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||RI(this),this._firestoreClient.terminate()}}function AI(e,t){const n=typeof e=="object"?e:yd(),r=typeof e=="string"?e:t||"(default)",i=al(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=jv("firestore");o&&TI(i,...o)}return i}function RI(e){var t;const n=e._freezeSettings(),r=function(i,o,s,a){return new kI(i,o,s,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new CI(e._authCredentials,e._appCheckCredentials,e._queue,r)}(function(e,t=!0){(function(n){jo=n})(Zr),nr(new bn("firestore",(n,{instanceIdentifier:r,options:i})=>{const o=n.getProvider("app").getImmediate(),s=new PI(new pI(n.getProvider("auth-internal")),new yI(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Ge(We.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new La(a.options.projectId,l)}(o,r),o);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),xt(Om,"3.8.0",e),xt(Om,"3.8.0","esm2017")})();/**
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
 */const Cy="firebasestorage.googleapis.com",OI="storageBucket",LI=2*60*1e3,DI=10*60*1e3;/**
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
 */class Tt extends It{constructor(t,n,r=0){super(bu(t),`Firebase Storage: ${n} (${bu(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Tt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return bu(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function bu(e){return"storage/"+e}function MI(){const e="An unknown error occurred, please check the error payload for server response.";return new Tt("unknown",e)}function $I(){return new Tt("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function UI(){return new Tt("canceled","User canceled the upload/download.")}function FI(e){return new Tt("invalid-url","Invalid URL '"+e+"'.")}function zI(e){return new Tt("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function $m(e){return new Tt("invalid-argument",e)}function Ny(){return new Tt("app-deleted","The Firebase app was deleted.")}function jI(e){return new Tt("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class ft{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=ft.makeFromUrl(t,n)}catch{return new ft(t,"")}if(r.path==="")return r;throw zI(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",v=new RegExp(`^https?://${f}/${c}/b/${i}/o${h}`,"i"),y={bucket:1,path:3},w=n===Cy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",p=new RegExp(`^https?://${w}/${i}/${T}`,"i"),m=[{regex:a,indices:l,postModify:o},{regex:v,indices:y,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<m.length;_++){const x=m[_],b=x.regex.exec(t);if(b){const I=b[x.indices.bucket];let A=b[x.indices.path];A||(A=""),r=new ft(I,A),x.postModify(r);break}}if(r==null)throw FI(t);return r}}class BI{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function HI(e,t,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return a===2}let u=!1;function c(...T){u||(u=!0,t.apply(null,T))}function f(T){i=setTimeout(()=>{i=null,e(v,l())},T)}function h(){o&&clearTimeout(o)}function v(T,...p){if(u){h();return}if(T){h(),c.call(null,T,...p);return}if(l()||s){h(),c.call(null,T,...p);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,f(m)}let y=!1;function w(T){y||(y=!0,h(),!u&&(i!==null?(T||(a=2),clearTimeout(i),f(0)):T||(a=1)))}return f(0),o=setTimeout(()=>{s=!0,w(!0)},n),w}function VI(e){e(!1)}/**
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
 */function WI(e){return e!==void 0}function Um(e,t,n,r){if(r<t)throw $m(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw $m(`Invalid value for '${e}'. Expected ${n} or less.`)}function GI(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Da;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Da||(Da={}));/**
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
 */function KI(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||i||o}/**
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
 */class YI{constructor(t,n,r,i,o,s,a,l,u,c,f,h=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=f,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,y)=>{this.resolve_=v,this.reject_=y,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Ss(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===Da.NO_ERROR,l=o.getStatus();if((!a||KI(l,this.additionalRetryCodes_))&&this.retry){const c=o.getErrorCode()===Da.ABORT;r(!1,new Ss(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ss(u,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());WI(l)?o(l):o()}catch(l){s(l)}else if(a!==null){const l=MI();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(i.canceled){const l=this.appDelete_?Ny():UI();s(l)}else{const l=$I();s(l)}};this.canceled_?n(!1,new Ss(!1,null,!0)):this.backoffId_=HI(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&VI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ss{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function XI(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function qI(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function QI(e,t){t&&(e["X-Firebase-GMPID"]=t)}function JI(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function ZI(e,t,n,r,i,o,s=!0){const a=GI(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return QI(u,t),XI(u,n),qI(u,o),JI(u,r),new YI(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,s)}/**
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
 */function eT(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function tT(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class Ma{constructor(t,n){this._service=t,n instanceof ft?this._location=n:this._location=ft.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Ma(t,n)}get root(){const t=new ft(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tT(this._location.path)}get storage(){return this._service}get parent(){const t=eT(this._location.path);if(t===null)return null;const n=new ft(this._location.bucket,t);return new Ma(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw jI(t)}}function Fm(e,t){const n=t==null?void 0:t[OI];return n==null?null:ft.makeFromBucketSpec(n,e)}function nT(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:Hv(i,e.app.options.projectId))}class rT{constructor(t,n,r,i,o){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=Cy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LI,this._maxUploadRetryTime=DI,this._requests=new Set,i!=null?this._bucket=ft.makeFromBucketSpec(i,this._host):this._bucket=Fm(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ft.makeFromBucketSpec(this._url,t):this._bucket=Fm(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Um("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Um("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ma(this,t)}_makeRequest(t,n,r,i,o=!0){if(this._deleted)return new BI(Ny());{const s=ZI(t,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const zm="@firebase/storage",jm="0.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py="storage";function iT(e=yd(),t){e=Qe(e);const r=al(e,Py).getImmediate({identifier:t}),i=jv("storage");return i&&oT(r,...i),r}function oT(e,t,n,r={}){nT(e,t,n,r)}function sT(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new rT(n,r,i,t,Zr)}function aT(){nr(new bn(Py,sT,"PUBLIC").setMultipleInstances(!0)),xt(zm,jm,""),xt(zm,jm,"esm2017")}aT();const lT={apiKey:"AIzaSyDKgU0hinlqT9wTstTYt2TKkJhJR7CP7jY",authDomain:"sugardaddy-find.firebaseapp.com",projectId:"sugardaddy-find",storageBucket:"sugardaddy-find.appspot.com",messagingSenderId:"178486831723",appId:"1:178486831723:web:26aac8d007837752e7df2e",measurementId:"G-1E2DKGX5CD"},th=Gv(lT),gi=fb(th);AI(th);iT(th);const Ay=S.createContext(),uT=({children:e})=>{const[t,n]=S.useState({}),r=async(a,l)=>await K4(gi,a,l),i=async a=>await W4(gi,a),o=async a=>await G4(oobCode,a),s=async()=>J4(gi);return S.useEffect(()=>{const a=Q4(gi,l=>{Y4(gi,g0),n(l)});return()=>{a()}},[]),g(Ay.Provider,{value:{user:t,signIn:r,logOut:s,forgetPassword:i,resetPassword:o},children:e})};function Tl(){return S.useContext(Ay)}const cT=()=>{const{logOut:e,user:t}=Tl();return g(In,{children:E("div",{className:"w-full flex justify-between px-4",children:[g("h1",{className:"text-white",children:"Dashboard"}),g("button",{onClick:async()=>{try{await e(),navigate("/admin")}catch{console.log("error")}},type:"button",className:"text-white",children:"Logout"})]})})},fT="/assets/VectorOne-0d97683e.svg",dT=()=>{const[e,t]=S.useState(""),[n,r]=S.useState(""),[i,o]=S.useState(""),[s,a]=S.useState(!0),{signIn:l,forgetPassword:u}=Tl(),c=td();return E(In,{children:[g("nav",{className:"py-4 w-full fixed-top flex justify-center",children:g("img",{src:Mv,className:"w-16 h-16"})}),E("div",{className:"grid grid-cols-2 place-content-center h-screen lg:px-20 md:px-12 px-6",children:[g("div",{className:"lg:col-span-1 col-span-2 flex flex-col justify-center items-center",children:s?E("div",{className:"lg:w-3/4 w-full trhide",children:[g("h1",{className:"text-4xl text-white pb-2 lg:text-left text-center",children:"Login"}),g("p",{className:"text-xs text-white pb-2 lg:text-left text-center",children:"Enter your credentials to access your account"}),E("div",{className:"flex flex-col pt-4",children:[g("label",{htmlFor:"email",className:"text-sm text-white pb-2 pl-1",children:"Email"}),g("input",{onChange:v=>{t(v.target.value)},type:"email",id:"email",placeholder:"Enter your email",className:"text-base p-2 border border-gray-300 rounded shadow-sm mb-4 placeholder:text-xs placeholder:text-zinc-400 focus:outline-primary-1"}),g("label",{htmlFor:"password",className:"text-sm text-white pb-2 pl-1",children:"Password"}),g("input",{onChange:v=>{r(v.target.value)},type:"password",id:"password",placeholder:"Enter your password",className:"text-base p-2 border border-gray-300 rounded shadow-sm mb-4 placeholder:text-xs placeholder:text-zinc-400 focus:outline-primary-1"}),g("div",{className:"flex justify-end py-2",children:g("button",{onClick:()=>a(!1),className:"text-xs text-primary-1",children:"Forget Password"})}),g("button",{onClick:async v=>{v.preventDefault();try{await l(e,n),c("/dashboard")}catch{console.log("Error")}},type:"button",className:"text-base p-2 bg-primary-1 text-zinc-800 rounded shadow-sm mt-2",children:"Login"})]})]}):E("div",{className:"lg:w-3/4 w-full trshow",children:[E("button",{onClick:()=>a(!0),type:"button",className:"flex items-center gap-2 text-base text-primary-1 py-2",children:[g(M,{icon:IE}),g("p",{className:"",children:"Back to Login"})]}),g("h1",{className:"text-4xl text-white pb-2 lg:text-left text-center",children:"Forget Password"}),g("p",{className:"text-xs text-white pb-2 lg:text-left text-center",children:"Enter your email to reset your password"}),E("div",{className:"flex flex-col pt-4",children:[g("label",{htmlFor:"email",className:"text-sm text-white pb-2 pl-1",children:"Email"}),g("input",{onChange:v=>{o(v.target.value)},type:"email",id:"email",placeholder:"Enter your email",className:"text-base p-2 border border-gray-300 rounded shadow-sm mb-4 placeholder:text-xs placeholder:text-zinc-400 focus:outline-primary-1"}),g("button",{type:"button",onClick:async v=>{v.preventDefault();try{await u(i),a(!0)}catch{console.log("Error")}},className:"text-base p-2 bg-primary-1 text-zinc-800 rounded shadow-sm mt-2",children:"Reset Password"})]})]})}),g("div",{className:"col-span-1 lg:flex hidden justify-center items-center",children:g("img",{src:fT})})]})]})},hT=[{id:"1",bgcolor:"bg-primary-6",bordercolor:"border-primary-6",textcolor:"text-primary-6",image:"/images/rich.png",heading:"Rich",shortDescription:"He is now listed for 3 months. He paid..",price:"350",description:"This is a rich Sugar Daddy and paid $350 to be featured on the top. If you want to be his Sugar Baby, you can add his Social Media accounts below.",skype:"https://join.skype.com/invite/test"},{id:"2",bgcolor:"bg-primary-7",bordercolor:"border-primary-7",textcolor:"text-primary-7",image:"/images/business.png",heading:"Business",shortDescription:"He is now listed for 1 months. He paid..",price:"150",description:"This is a business Sugar Daddy and paid $150 to be featured on the top. If you want to be his Sugar Baby, you can add his Social Media accounts below.",skype:"https://join.skype.com/invite/test"},{id:"3",bgcolor:"bg-primary-8",bordercolor:"border-primary-8",textcolor:"text-primary-8",image:"/images/regular.png",heading:"Regular",shortDescription:"He is now listed for 1 week. He paid..",price:"50",description:"This is a regular Sugar Daddy and paid $50 to be featured on the top. If you want to be his Sugar Baby, you can add his Social Media accounts below.",skype:"https://join.skype.com/invite/test"}],pT=()=>g(In,{children:g(uT,{children:E(sk,{children:[g($s,{path:"/",element:g(hk,{})}),g($s,{path:"/admin",element:g(PE,{})}),g($s,{path:"/dashboard",element:g(NE,{})})]})})});Tu.createRoot(document.getElementById("root")).render(g(Ua.StrictMode,{children:g(fk,{children:g(pT,{})})}));
