const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Welcome-CFqr40Sn.js","./marked.esm-DKjyhwJX.js","./Welcome-Ba3syqy_.css","./PythonYieldFrom-CGYpYb9P.js","./PythonYieldFrom-C0zAW_DX.css","./NotFound-JoeyuI-f.js","./NotFound-C0dPu2vV.css"])))=>i.map(i=>d[i]);
var Gc=Object.defineProperty;var Xc=(e,t,n)=>t in e?Gc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var et=(e,t,n)=>Xc(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Rs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const xe={},Cn=[],Pt=()=>{},Yc=()=>!1,Jr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Os=e=>e.startsWith("onUpdate:"),Xe=Object.assign,Ms=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Jc=Object.prototype.hasOwnProperty,ge=(e,t)=>Jc.call(e,t),ee=Array.isArray,Tn=e=>Qr(e)==="[object Map]",Sa=e=>Qr(e)==="[object Set]",oe=e=>typeof e=="function",Le=e=>typeof e=="string",sn=e=>typeof e=="symbol",ke=e=>e!==null&&typeof e=="object",_a=e=>(ke(e)||oe(e))&&oe(e.then)&&oe(e.catch),Ca=Object.prototype.toString,Qr=e=>Ca.call(e),Qc=e=>Qr(e).slice(8,-1),Ta=e=>Qr(e)==="[object Object]",Ns=e=>Le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xn=Rs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),eo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ed=/-(\w)/g,xt=eo(e=>e.replace(ed,(t,n)=>n?n.toUpperCase():"")),td=/\B([A-Z])/g,xn=eo(e=>e.replace(td,"-$1").toLowerCase()),to=eo(e=>e.charAt(0).toUpperCase()+e.slice(1)),Oo=eo(e=>e?`on${to(e)}`:""),rn=(e,t)=>!Object.is(e,t),Rr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Aa=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Xo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let pi;const no=()=>pi||(pi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ls(e){if(ee(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=Le(r)?sd(r):Ls(r);if(o)for(const s in o)t[s]=o[s]}return t}else if(Le(e)||ke(e))return e}const nd=/;(?![^(]*\))/g,rd=/:([^]+)/,od=/\/\*[^]*?\*\//g;function sd(e){const t={};return e.replace(od,"").split(nd).forEach(n=>{if(n){const r=n.split(rd);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ro(e){let t="";if(Le(e))t=e;else if(ee(e))for(let n=0;n<e.length;n++){const r=ro(e[n]);r&&(t+=r+" ")}else if(ke(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const id="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ad=Rs(id);function Ra(e){return!!e||e===""}const Oa=e=>!!(e&&e.__v_isRef===!0),Yn=e=>Le(e)?e:e==null?"":ee(e)||ke(e)&&(e.toString===Ca||!oe(e.toString))?Oa(e)?Yn(e.value):JSON.stringify(e,Ma,2):String(e),Ma=(e,t)=>Oa(t)?Ma(e,t.value):Tn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o],s)=>(n[Mo(r,s)+" =>"]=o,n),{})}:Sa(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Mo(n))}:sn(t)?Mo(t):ke(t)&&!ee(t)&&!Ta(t)?String(t):t,Mo=(e,t="")=>{var n;return sn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let it;class ld{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=it,!t&&it&&(this.index=(it.scopes||(it.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=it;try{return it=this,t()}finally{it=n}}}on(){++this._on===1&&(this.prevScope=it,it=this)}off(){this._on>0&&--this._on===0&&(it=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function cd(){return it}let Ee;const No=new WeakSet;class Na{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,it&&it.active&&it.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,No.has(this)&&(No.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hi(this),Fa(this);const t=Ee,n=$t;Ee=this,$t=!0;try{return this.fn()}finally{Da(this),Ee=t,$t=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ds(t);this.deps=this.depsTail=void 0,hi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?No.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Yo(this)&&this.run()}get dirty(){return Yo(this)}}let La=0,Jn,Qn;function Pa(e,t=!1){if(e.flags|=8,t){e.next=Qn,Qn=e;return}e.next=Jn,Jn=e}function Ps(){La++}function Fs(){if(--La>0)return;if(Qn){let t=Qn;for(Qn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Jn;){let t=Jn;for(Jn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Fa(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Da(e){let t,n=e.depsTail,r=n;for(;r;){const o=r.prevDep;r.version===-1?(r===n&&(n=o),Ds(r),dd(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}e.deps=t,e.depsTail=n}function Yo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ia(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ia(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===lr)||(e.globalVersion=lr,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Yo(e))))return;e.flags|=2;const t=e.dep,n=Ee,r=$t;Ee=e,$t=!0;try{Fa(e);const o=e.fn(e._value);(t.version===0||rn(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{Ee=n,$t=r,Da(e),e.flags&=-3}}function Ds(e,t=!1){const{dep:n,prevSub:r,nextSub:o}=e;if(r&&(r.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Ds(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function dd(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let $t=!0;const Ba=[];function Vt(){Ba.push($t),$t=!1}function Zt(){const e=Ba.pop();$t=e===void 0?!0:e}function hi(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Ee;Ee=void 0;try{t()}finally{Ee=n}}}let lr=0;class ud{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Is{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Ee||!$t||Ee===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ee)n=this.activeLink=new ud(Ee,this),Ee.deps?(n.prevDep=Ee.depsTail,Ee.depsTail.nextDep=n,Ee.depsTail=n):Ee.deps=Ee.depsTail=n,qa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ee.depsTail,n.nextDep=void 0,Ee.depsTail.nextDep=n,Ee.depsTail=n,Ee.deps===n&&(Ee.deps=r)}return n}trigger(t){this.version++,lr++,this.notify(t)}notify(t){Ps();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Fs()}}}function qa(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)qa(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Jo=new WeakMap,mn=Symbol(""),Qo=Symbol(""),cr=Symbol("");function Ze(e,t,n){if($t&&Ee){let r=Jo.get(e);r||Jo.set(e,r=new Map);let o=r.get(n);o||(r.set(n,o=new Is),o.map=r,o.key=n),o.track()}}function Ut(e,t,n,r,o,s){const i=Jo.get(e);if(!i){lr++;return}const a=c=>{c&&c.trigger()};if(Ps(),t==="clear")i.forEach(a);else{const c=ee(e),d=c&&Ns(n);if(c&&n==="length"){const l=Number(r);i.forEach((u,f)=>{(f==="length"||f===cr||!sn(f)&&f>=l)&&a(u)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),d&&a(i.get(cr)),t){case"add":c?d&&a(i.get("length")):(a(i.get(mn)),Tn(e)&&a(i.get(Qo)));break;case"delete":c||(a(i.get(mn)),Tn(e)&&a(i.get(Qo)));break;case"set":Tn(e)&&a(i.get(mn));break}}Fs()}function En(e){const t=he(e);return t===e?t:(Ze(t,"iterate",cr),vt(e)?t:t.map(ze))}function oo(e){return Ze(e=he(e),"iterate",cr),e}const fd={__proto__:null,[Symbol.iterator](){return Lo(this,Symbol.iterator,ze)},concat(...e){return En(this).concat(...e.map(t=>ee(t)?En(t):t))},entries(){return Lo(this,"entries",e=>(e[1]=ze(e[1]),e))},every(e,t){return qt(this,"every",e,t,void 0,arguments)},filter(e,t){return qt(this,"filter",e,t,n=>n.map(ze),arguments)},find(e,t){return qt(this,"find",e,t,ze,arguments)},findIndex(e,t){return qt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return qt(this,"findLast",e,t,ze,arguments)},findLastIndex(e,t){return qt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return qt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Po(this,"includes",e)},indexOf(...e){return Po(this,"indexOf",e)},join(e){return En(this).join(e)},lastIndexOf(...e){return Po(this,"lastIndexOf",e)},map(e,t){return qt(this,"map",e,t,void 0,arguments)},pop(){return Hn(this,"pop")},push(...e){return Hn(this,"push",e)},reduce(e,...t){return gi(this,"reduce",e,t)},reduceRight(e,...t){return gi(this,"reduceRight",e,t)},shift(){return Hn(this,"shift")},some(e,t){return qt(this,"some",e,t,void 0,arguments)},splice(...e){return Hn(this,"splice",e)},toReversed(){return En(this).toReversed()},toSorted(e){return En(this).toSorted(e)},toSpliced(...e){return En(this).toSpliced(...e)},unshift(...e){return Hn(this,"unshift",e)},values(){return Lo(this,"values",ze)}};function Lo(e,t,n){const r=oo(e),o=r[t]();return r!==e&&!vt(e)&&(o._next=o.next,o.next=()=>{const s=o._next();return s.value&&(s.value=n(s.value)),s}),o}const pd=Array.prototype;function qt(e,t,n,r,o,s){const i=oo(e),a=i!==e&&!vt(e),c=i[t];if(c!==pd[t]){const u=c.apply(e,s);return a?ze(u):u}let d=n;i!==e&&(a?d=function(u,f){return n.call(this,ze(u),f,e)}:n.length>2&&(d=function(u,f){return n.call(this,u,f,e)}));const l=c.call(i,d,r);return a&&o?o(l):l}function gi(e,t,n,r){const o=oo(e);let s=n;return o!==e&&(vt(e)?n.length>3&&(s=function(i,a,c){return n.call(this,i,a,c,e)}):s=function(i,a,c){return n.call(this,i,ze(a),c,e)}),o[t](s,...r)}function Po(e,t,n){const r=he(e);Ze(r,"iterate",cr);const o=r[t](...n);return(o===-1||o===!1)&&zs(n[0])?(n[0]=he(n[0]),r[t](...n)):o}function Hn(e,t,n=[]){Vt(),Ps();const r=he(e)[t].apply(e,n);return Fs(),Zt(),r}const hd=Rs("__proto__,__v_isRef,__isVue"),za=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(sn));function gd(e){sn(e)||(e=String(e));const t=he(this);return Ze(t,"has",e),t.hasOwnProperty(e)}class Ha{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(o?s?Sd:Va:s?Wa:ja).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=ee(t);if(!o){let c;if(i&&(c=fd[n]))return c;if(n==="hasOwnProperty")return gd}const a=Reflect.get(t,n,He(t)?t:r);return(sn(n)?za.has(n):hd(n))||(o||Ze(t,"get",n),s)?a:He(a)?i&&Ns(n)?a:a.value:ke(a)?o?Ka(a):so(a):a}}class Ua extends Ha{constructor(t=!1){super(!1,t)}set(t,n,r,o){let s=t[n];if(!this._isShallow){const c=on(s);if(!vt(r)&&!on(r)&&(s=he(s),r=he(r)),!ee(t)&&He(s)&&!He(r))return c?!1:(s.value=r,!0)}const i=ee(t)&&Ns(n)?Number(n)<t.length:ge(t,n),a=Reflect.set(t,n,r,He(t)?t:o);return t===he(o)&&(i?rn(r,s)&&Ut(t,"set",n,r):Ut(t,"add",n,r)),a}deleteProperty(t,n){const r=ge(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&r&&Ut(t,"delete",n,void 0),o}has(t,n){const r=Reflect.has(t,n);return(!sn(n)||!za.has(n))&&Ze(t,"has",n),r}ownKeys(t){return Ze(t,"iterate",ee(t)?"length":mn),Reflect.ownKeys(t)}}class md extends Ha{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const bd=new Ua,vd=new md,xd=new Ua(!0);const es=e=>e,Cr=e=>Reflect.getPrototypeOf(e);function yd(e,t,n){return function(...r){const o=this.__v_raw,s=he(o),i=Tn(s),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,d=o[e](...r),l=n?es:t?Ir:ze;return!t&&Ze(s,"iterate",c?Qo:mn),{next(){const{value:u,done:f}=d.next();return f?{value:u,done:f}:{value:a?[l(u[0]),l(u[1])]:l(u),done:f}},[Symbol.iterator](){return this}}}}function Tr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function wd(e,t){const n={get(o){const s=this.__v_raw,i=he(s),a=he(o);e||(rn(o,a)&&Ze(i,"get",o),Ze(i,"get",a));const{has:c}=Cr(i),d=t?es:e?Ir:ze;if(c.call(i,o))return d(s.get(o));if(c.call(i,a))return d(s.get(a));s!==i&&s.get(o)},get size(){const o=this.__v_raw;return!e&&Ze(he(o),"iterate",mn),Reflect.get(o,"size",o)},has(o){const s=this.__v_raw,i=he(s),a=he(o);return e||(rn(o,a)&&Ze(i,"has",o),Ze(i,"has",a)),o===a?s.has(o):s.has(o)||s.has(a)},forEach(o,s){const i=this,a=i.__v_raw,c=he(a),d=t?es:e?Ir:ze;return!e&&Ze(c,"iterate",mn),a.forEach((l,u)=>o.call(s,d(l),d(u),i))}};return Xe(n,e?{add:Tr("add"),set:Tr("set"),delete:Tr("delete"),clear:Tr("clear")}:{add(o){!t&&!vt(o)&&!on(o)&&(o=he(o));const s=he(this);return Cr(s).has.call(s,o)||(s.add(o),Ut(s,"add",o,o)),this},set(o,s){!t&&!vt(s)&&!on(s)&&(s=he(s));const i=he(this),{has:a,get:c}=Cr(i);let d=a.call(i,o);d||(o=he(o),d=a.call(i,o));const l=c.call(i,o);return i.set(o,s),d?rn(s,l)&&Ut(i,"set",o,s):Ut(i,"add",o,s),this},delete(o){const s=he(this),{has:i,get:a}=Cr(s);let c=i.call(s,o);c||(o=he(o),c=i.call(s,o)),a&&a.call(s,o);const d=s.delete(o);return c&&Ut(s,"delete",o,void 0),d},clear(){const o=he(this),s=o.size!==0,i=o.clear();return s&&Ut(o,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=yd(o,e,t)}),n}function Bs(e,t){const n=wd(e,t);return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(ge(n,o)&&o in r?n:r,o,s)}const Ed={get:Bs(!1,!1)},kd={get:Bs(!1,!0)},$d={get:Bs(!0,!1)};const ja=new WeakMap,Wa=new WeakMap,Va=new WeakMap,Sd=new WeakMap;function _d(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cd(e){return e.__v_skip||!Object.isExtensible(e)?0:_d(Qc(e))}function so(e){return on(e)?e:qs(e,!1,bd,Ed,ja)}function Za(e){return qs(e,!1,xd,kd,Wa)}function Ka(e){return qs(e,!0,vd,$d,Va)}function qs(e,t,n,r,o){if(!ke(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=Cd(e);if(s===0)return e;const i=o.get(e);if(i)return i;const a=new Proxy(e,s===2?r:n);return o.set(e,a),a}function An(e){return on(e)?An(e.__v_raw):!!(e&&e.__v_isReactive)}function on(e){return!!(e&&e.__v_isReadonly)}function vt(e){return!!(e&&e.__v_isShallow)}function zs(e){return e?!!e.__v_raw:!1}function he(e){const t=e&&e.__v_raw;return t?he(t):e}function Td(e){return!ge(e,"__v_skip")&&Object.isExtensible(e)&&Aa(e,"__v_skip",!0),e}const ze=e=>ke(e)?so(e):e,Ir=e=>ke(e)?Ka(e):e;function He(e){return e?e.__v_isRef===!0:!1}function er(e){return Ga(e,!1)}function Ad(e){return Ga(e,!0)}function Ga(e,t){return He(e)?e:new Rd(e,t)}class Rd{constructor(t,n){this.dep=new Is,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:he(t),this._value=n?t:ze(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||vt(t)||on(t);t=r?t:he(t),rn(t,n)&&(this._rawValue=t,this._value=r?t:ze(t),this.dep.trigger())}}function Ft(e){return He(e)?e.value:e}const Od={get:(e,t,n)=>t==="__v_raw"?e:Ft(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return He(o)&&!He(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Xa(e){return An(e)?e:new Proxy(e,Od)}class Md{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Is(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=lr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ee!==this)return Pa(this,!0),!0}get value(){const t=this.dep.track();return Ia(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Nd(e,t,n=!1){let r,o;return oe(e)?r=e:(r=e.get,o=e.set),new Md(r,o,n)}const Ar={},Br=new WeakMap;let un;function Ld(e,t=!1,n=un){if(n){let r=Br.get(n);r||Br.set(n,r=[]),r.push(e)}}function Pd(e,t,n=xe){const{immediate:r,deep:o,once:s,scheduler:i,augmentJob:a,call:c}=n,d=R=>o?R:vt(R)||o===!1||o===0?jt(R,1):jt(R);let l,u,f,h,p=!1,b=!1;if(He(e)?(u=()=>e.value,p=vt(e)):An(e)?(u=()=>d(e),p=!0):ee(e)?(b=!0,p=e.some(R=>An(R)||vt(R)),u=()=>e.map(R=>{if(He(R))return R.value;if(An(R))return d(R);if(oe(R))return c?c(R,2):R()})):oe(e)?t?u=c?()=>c(e,2):e:u=()=>{if(f){Vt();try{f()}finally{Zt()}}const R=un;un=l;try{return c?c(e,3,[h]):e(h)}finally{un=R}}:u=Pt,t&&o){const R=u,q=o===!0?1/0:o;u=()=>jt(R(),q)}const y=cd(),w=()=>{l.stop(),y&&y.active&&Ms(y.effects,l)};if(s&&t){const R=t;t=(...q)=>{R(...q),w()}}let E=b?new Array(e.length).fill(Ar):Ar;const A=R=>{if(!(!(l.flags&1)||!l.dirty&&!R))if(t){const q=l.run();if(o||p||(b?q.some((J,te)=>rn(J,E[te])):rn(q,E))){f&&f();const J=un;un=l;try{const te=[q,E===Ar?void 0:b&&E[0]===Ar?[]:E,h];E=q,c?c(t,3,te):t(...te)}finally{un=J}}}else l.run()};return a&&a(A),l=new Na(u),l.scheduler=i?()=>i(A,!1):A,h=R=>Ld(R,!1,l),f=l.onStop=()=>{const R=Br.get(l);if(R){if(c)c(R,4);else for(const q of R)q();Br.delete(l)}},t?r?A(!0):E=l.run():i?i(A.bind(null,!0),!0):l.run(),w.pause=l.pause.bind(l),w.resume=l.resume.bind(l),w.stop=w,w}function jt(e,t=1/0,n){if(t<=0||!ke(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,He(e))jt(e.value,t,n);else if(ee(e))for(let r=0;r<e.length;r++)jt(e[r],t,n);else if(Sa(e)||Tn(e))e.forEach(r=>{jt(r,t,n)});else if(Ta(e)){for(const r in e)jt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&jt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mr(e,t,n,r){try{return r?e(...r):e()}catch(o){io(o,t,n)}}function It(e,t,n,r){if(oe(e)){const o=mr(e,t,n,r);return o&&_a(o)&&o.catch(s=>{io(s,t,n)}),o}if(ee(e)){const o=[];for(let s=0;s<e.length;s++)o.push(It(e[s],t,n,r));return o}}function io(e,t,n,r=!0){const o=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||xe;if(t){let a=t.parent;const c=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const l=a.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,c,d)===!1)return}a=a.parent}if(s){Vt(),mr(s,null,10,[e,c,d]),Zt();return}}Fd(e,n,o,r,i)}function Fd(e,t,n,r=!0,o=!1){if(o)throw e;console.error(e)}const nt=[];let Mt=-1;const Rn=[];let Qt=null,kn=0;const Ya=Promise.resolve();let qr=null;function Ja(e){const t=qr||Ya;return e?t.then(this?e.bind(this):e):t}function Dd(e){let t=Mt+1,n=nt.length;for(;t<n;){const r=t+n>>>1,o=nt[r],s=dr(o);s<e||s===e&&o.flags&2?t=r+1:n=r}return t}function Hs(e){if(!(e.flags&1)){const t=dr(e),n=nt[nt.length-1];!n||!(e.flags&2)&&t>=dr(n)?nt.push(e):nt.splice(Dd(t),0,e),e.flags|=1,Qa()}}function Qa(){qr||(qr=Ya.then(tl))}function Id(e){ee(e)?Rn.push(...e):Qt&&e.id===-1?Qt.splice(kn+1,0,e):e.flags&1||(Rn.push(e),e.flags|=1),Qa()}function mi(e,t,n=Mt+1){for(;n<nt.length;n++){const r=nt[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;nt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function el(e){if(Rn.length){const t=[...new Set(Rn)].sort((n,r)=>dr(n)-dr(r));if(Rn.length=0,Qt){Qt.push(...t);return}for(Qt=t,kn=0;kn<Qt.length;kn++){const n=Qt[kn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Qt=null,kn=0}}const dr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function tl(e){try{for(Mt=0;Mt<nt.length;Mt++){const t=nt[Mt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),mr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Mt<nt.length;Mt++){const t=nt[Mt];t&&(t.flags&=-2)}Mt=-1,nt.length=0,el(),qr=null,(nt.length||Rn.length)&&tl()}}let ft=null,nl=null;function zr(e){const t=ft;return ft=e,nl=e&&e.type.__scopeId||null,t}function Et(e,t=ft,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&_i(-1);const s=zr(t);let i;try{i=e(...o)}finally{zr(s),r._d&&_i(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function rl(e,t){if(ft===null)return e;const n=uo(ft),r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[s,i,a,c=xe]=t[o];s&&(oe(s)&&(s={mounted:s,updated:s}),s.deep&&jt(i),r.push({dir:s,instance:n,value:i,oldValue:void 0,arg:a,modifiers:c}))}return e}function cn(e,t,n,r){const o=e.dirs,s=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];s&&(a.oldValue=s[i].value);let c=a.dir[r];c&&(Vt(),It(c,n,8,[e.el,a,e,t]),Zt())}}const Bd=Symbol("_vte"),qd=e=>e.__isTeleport;function Us(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Us(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function ol(e,t){return oe(e)?Xe({name:e.name},t,{setup:e}):e}function sl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Hr(e,t,n,r,o=!1){if(ee(e)){e.forEach((p,b)=>Hr(p,t&&(ee(t)?t[b]:t),n,r,o));return}if(tr(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Hr(e,t,n,r.component.subTree);return}const s=r.shapeFlag&4?uo(r.component):r.el,i=o?null:s,{i:a,r:c}=e,d=t&&t.r,l=a.refs===xe?a.refs={}:a.refs,u=a.setupState,f=he(u),h=u===xe?()=>!1:p=>ge(f,p);if(d!=null&&d!==c&&(Le(d)?(l[d]=null,h(d)&&(u[d]=null)):He(d)&&(d.value=null)),oe(c))mr(c,a,12,[i,l]);else{const p=Le(c),b=He(c);if(p||b){const y=()=>{if(e.f){const w=p?h(c)?u[c]:l[c]:c.value;o?ee(w)&&Ms(w,s):ee(w)?w.includes(s)||w.push(s):p?(l[c]=[s],h(c)&&(u[c]=l[c])):(c.value=[s],e.k&&(l[e.k]=c.value))}else p?(l[c]=i,h(c)&&(u[c]=i)):b&&(c.value=i,e.k&&(l[e.k]=i))};i?(y.id=-1,dt(y,n)):y()}}}no().requestIdleCallback;no().cancelIdleCallback;const tr=e=>!!e.type.__asyncLoader,il=e=>e.type.__isKeepAlive;function zd(e,t){al(e,"a",t)}function Hd(e,t){al(e,"da",t)}function al(e,t,n=Ke){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(ao(t,r,n),n){let o=n.parent;for(;o&&o.parent;)il(o.parent.vnode)&&Ud(r,t,n,o),o=o.parent}}function Ud(e,t,n,r){const o=ao(t,e,r,!0);Ws(()=>{Ms(r[t],o)},n)}function ao(e,t,n=Ke,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{Vt();const a=br(n),c=It(t,n,e,i);return a(),Zt(),c});return r?o.unshift(s):o.push(s),s}}const Kt=e=>(t,n=Ke)=>{(!fr||e==="sp")&&ao(e,(...r)=>t(...r),n)},jd=Kt("bm"),js=Kt("m"),Wd=Kt("bu"),Vd=Kt("u"),Zd=Kt("bum"),Ws=Kt("um"),Kd=Kt("sp"),Gd=Kt("rtg"),Xd=Kt("rtc");function Yd(e,t=Ke){ao("ec",e,t)}const Jd="components";function en(e,t){return eu(Jd,e,!0,t)||e}const Qd=Symbol.for("v-ndc");function eu(e,t,n=!0,r=!1){const o=ft||Ke;if(o){const s=o.type;{const a=zu(s,!1);if(a&&(a===t||a===xt(t)||a===to(xt(t))))return s}const i=bi(o[e]||s[e],t)||bi(o.appContext[e],t);return!i&&r?s:i}}function bi(e,t){return e&&(e[t]||e[xt(t)]||e[to(xt(t))])}function tu(e,t,n,r){let o;const s=n,i=ee(e);if(i||Le(e)){const a=i&&An(e);let c=!1,d=!1;a&&(c=!vt(e),d=on(e),e=oo(e)),o=new Array(e.length);for(let l=0,u=e.length;l<u;l++)o[l]=t(c?d?Ir(ze(e[l])):ze(e[l]):e[l],l,void 0,s)}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,s)}else if(ke(e))if(e[Symbol.iterator])o=Array.from(e,(a,c)=>t(a,c,void 0,s));else{const a=Object.keys(e);o=new Array(a.length);for(let c=0,d=a.length;c<d;c++){const l=a[c];o[c]=t(e[l],l,c,s)}}else o=[];return o}const ts=e=>e?Cl(e)?uo(e):ts(e.parent):null,nr=Xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ts(e.parent),$root:e=>ts(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>cl(e),$forceUpdate:e=>e.f||(e.f=()=>{Hs(e.update)}),$nextTick:e=>e.n||(e.n=Ja.bind(e.proxy)),$watch:e=>Eu.bind(e)}),Fo=(e,t)=>e!==xe&&!e.__isScriptSetup&&ge(e,t),nu={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:o,props:s,accessCache:i,type:a,appContext:c}=e;let d;if(t[0]!=="$"){const h=i[t];if(h!==void 0)switch(h){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(Fo(r,t))return i[t]=1,r[t];if(o!==xe&&ge(o,t))return i[t]=2,o[t];if((d=e.propsOptions[0])&&ge(d,t))return i[t]=3,s[t];if(n!==xe&&ge(n,t))return i[t]=4,n[t];ns&&(i[t]=0)}}const l=nr[t];let u,f;if(l)return t==="$attrs"&&Ze(e.attrs,"get",""),l(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==xe&&ge(n,t))return i[t]=4,n[t];if(f=c.config.globalProperties,ge(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return Fo(o,t)?(o[t]=n,!0):r!==xe&&ge(r,t)?(r[t]=n,!0):ge(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},i){let a;return!!n[i]||e!==xe&&ge(e,i)||Fo(t,i)||(a=s[0])&&ge(a,i)||ge(r,i)||ge(nr,i)||ge(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ge(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function vi(e){return ee(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ns=!0;function ru(e){const t=cl(e),n=e.proxy,r=e.ctx;ns=!1,t.beforeCreate&&xi(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:i,watch:a,provide:c,inject:d,created:l,beforeMount:u,mounted:f,beforeUpdate:h,updated:p,activated:b,deactivated:y,beforeDestroy:w,beforeUnmount:E,destroyed:A,unmounted:R,render:q,renderTracked:J,renderTriggered:te,errorCaptured:me,serverPrefetch:Ae,expose:Re,inheritAttrs:Ue,components:rt,directives:Ie,filters:Ye}=t;if(d&&ou(d,r,null),i)for(const de in i){const X=i[de];oe(X)&&(r[de]=X.bind(n))}if(o){const de=o.call(n,n);ke(de)&&(e.data=so(de))}if(ns=!0,s)for(const de in s){const X=s[de],Fe=oe(X)?X.bind(n,n):oe(X.get)?X.get.bind(n,n):Pt,je=!oe(X)&&oe(X.set)?X.set.bind(n):Pt,Be=kt({get:Fe,set:je});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>Be.value,set:Oe=>Be.value=Oe})}if(a)for(const de in a)ll(a[de],r,n,de);if(c){const de=oe(c)?c.call(n):c;Reflect.ownKeys(de).forEach(X=>{Or(X,de[X])})}l&&xi(l,e,"c");function $e(de,X){ee(X)?X.forEach(Fe=>de(Fe.bind(n))):X&&de(X.bind(n))}if($e(jd,u),$e(js,f),$e(Wd,h),$e(Vd,p),$e(zd,b),$e(Hd,y),$e(Yd,me),$e(Xd,J),$e(Gd,te),$e(Zd,E),$e(Ws,R),$e(Kd,Ae),ee(Re))if(Re.length){const de=e.exposed||(e.exposed={});Re.forEach(X=>{Object.defineProperty(de,X,{get:()=>n[X],set:Fe=>n[X]=Fe})})}else e.exposed||(e.exposed={});q&&e.render===Pt&&(e.render=q),Ue!=null&&(e.inheritAttrs=Ue),rt&&(e.components=rt),Ie&&(e.directives=Ie),Ae&&sl(e)}function ou(e,t,n=Pt){ee(e)&&(e=rs(e));for(const r in e){const o=e[r];let s;ke(o)?"default"in o?s=Dt(o.from||r,o.default,!0):s=Dt(o.from||r):s=Dt(o),He(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):t[r]=s}}function xi(e,t,n){It(ee(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ll(e,t,n,r){let o=r.includes(".")?El(n,r):()=>n[r];if(Le(e)){const s=t[e];oe(s)&&rr(o,s)}else if(oe(e))rr(o,e.bind(n));else if(ke(e))if(ee(e))e.forEach(s=>ll(s,t,n,r));else{const s=oe(e.handler)?e.handler.bind(n):t[e.handler];oe(s)&&rr(o,s,e)}}function cl(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,a=s.get(t);let c;return a?c=a:!o.length&&!n&&!r?c=t:(c={},o.length&&o.forEach(d=>Ur(c,d,i,!0)),Ur(c,t,i)),ke(t)&&s.set(t,c),c}function Ur(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&Ur(e,s,n,!0),o&&o.forEach(i=>Ur(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=su[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const su={data:yi,props:wi,emits:wi,methods:Zn,computed:Zn,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:Zn,directives:Zn,watch:au,provide:yi,inject:iu};function yi(e,t){return t?e?function(){return Xe(oe(e)?e.call(this,this):e,oe(t)?t.call(this,this):t)}:t:e}function iu(e,t){return Zn(rs(e),rs(t))}function rs(e){if(ee(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function Zn(e,t){return e?Xe(Object.create(null),e,t):t}function wi(e,t){return e?ee(e)&&ee(t)?[...new Set([...e,...t])]:Xe(Object.create(null),vi(e),vi(t??{})):t}function au(e,t){if(!e)return t;if(!t)return e;const n=Xe(Object.create(null),e);for(const r in t)n[r]=tt(e[r],t[r]);return n}function dl(){return{app:null,config:{isNativeTag:Yc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lu=0;function cu(e,t){return function(r,o=null){oe(r)||(r=Xe({},r)),o!=null&&!ke(o)&&(o=null);const s=dl(),i=new WeakSet,a=[];let c=!1;const d=s.app={_uid:lu++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:Uu,get config(){return s.config},set config(l){},use(l,...u){return i.has(l)||(l&&oe(l.install)?(i.add(l),l.install(d,...u)):oe(l)&&(i.add(l),l(d,...u))),d},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),d},component(l,u){return u?(s.components[l]=u,d):s.components[l]},directive(l,u){return u?(s.directives[l]=u,d):s.directives[l]},mount(l,u,f){if(!c){const h=d._ceVNode||Se(r,o);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),e(h,l,f),c=!0,d._container=l,l.__vue_app__=d,uo(h.component)}},onUnmount(l){a.push(l)},unmount(){c&&(It(a,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(l,u){return s.provides[l]=u,d},runWithContext(l){const u=On;On=d;try{return l()}finally{On=u}}};return d}}let On=null;function Or(e,t){if(Ke){let n=Ke.provides;const r=Ke.parent&&Ke.parent.provides;r===n&&(n=Ke.provides=Object.create(r)),n[e]=t}}function Dt(e,t,n=!1){const r=Ke||ft;if(r||On){let o=On?On._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&oe(t)?t.call(r&&r.proxy):t}}const ul={},fl=()=>Object.create(ul),pl=e=>Object.getPrototypeOf(e)===ul;function du(e,t,n,r=!1){const o={},s=fl();e.propsDefaults=Object.create(null),hl(e,t,o,s);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=r?o:Za(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function uu(e,t,n,r){const{props:o,attrs:s,vnode:{patchFlag:i}}=e,a=he(o),[c]=e.propsOptions;let d=!1;if((r||i>0)&&!(i&16)){if(i&8){const l=e.vnode.dynamicProps;for(let u=0;u<l.length;u++){let f=l[u];if(lo(e.emitsOptions,f))continue;const h=t[f];if(c)if(ge(s,f))h!==s[f]&&(s[f]=h,d=!0);else{const p=xt(f);o[p]=os(c,a,p,h,e,!1)}else h!==s[f]&&(s[f]=h,d=!0)}}}else{hl(e,t,o,s)&&(d=!0);let l;for(const u in a)(!t||!ge(t,u)&&((l=xn(u))===u||!ge(t,l)))&&(c?n&&(n[u]!==void 0||n[l]!==void 0)&&(o[u]=os(c,a,u,void 0,e,!0)):delete o[u]);if(s!==a)for(const u in s)(!t||!ge(t,u))&&(delete s[u],d=!0)}d&&Ut(e.attrs,"set","")}function hl(e,t,n,r){const[o,s]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(Xn(c))continue;const d=t[c];let l;o&&ge(o,l=xt(c))?!s||!s.includes(l)?n[l]=d:(a||(a={}))[l]=d:lo(e.emitsOptions,c)||(!(c in r)||d!==r[c])&&(r[c]=d,i=!0)}if(s){const c=he(n),d=a||xe;for(let l=0;l<s.length;l++){const u=s[l];n[u]=os(o,c,u,d[u],e,!ge(d,u))}}return i}function os(e,t,n,r,o,s){const i=e[n];if(i!=null){const a=ge(i,"default");if(a&&r===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&oe(c)){const{propsDefaults:d}=o;if(n in d)r=d[n];else{const l=br(o);r=d[n]=c.call(null,t),l()}}else r=c;o.ce&&o.ce._setProp(n,r)}i[0]&&(s&&!a?r=!1:i[1]&&(r===""||r===xn(n))&&(r=!0))}return r}const fu=new WeakMap;function gl(e,t,n=!1){const r=n?fu:t.propsCache,o=r.get(e);if(o)return o;const s=e.props,i={},a=[];let c=!1;if(!oe(e)){const l=u=>{c=!0;const[f,h]=gl(u,t,!0);Xe(i,f),h&&a.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!s&&!c)return ke(e)&&r.set(e,Cn),Cn;if(ee(s))for(let l=0;l<s.length;l++){const u=xt(s[l]);Ei(u)&&(i[u]=xe)}else if(s)for(const l in s){const u=xt(l);if(Ei(u)){const f=s[l],h=i[u]=ee(f)||oe(f)?{type:f}:Xe({},f),p=h.type;let b=!1,y=!0;if(ee(p))for(let w=0;w<p.length;++w){const E=p[w],A=oe(E)&&E.name;if(A==="Boolean"){b=!0;break}else A==="String"&&(y=!1)}else b=oe(p)&&p.name==="Boolean";h[0]=b,h[1]=y,(b||ge(h,"default"))&&a.push(u)}}const d=[i,a];return ke(e)&&r.set(e,d),d}function Ei(e){return e[0]!=="$"&&!Xn(e)}const Vs=e=>e[0]==="_"||e==="$stable",Zs=e=>ee(e)?e.map(Lt):[Lt(e)],pu=(e,t,n)=>{if(t._n)return t;const r=Et((...o)=>Zs(t(...o)),n);return r._c=!1,r},ml=(e,t,n)=>{const r=e._ctx;for(const o in e){if(Vs(o))continue;const s=e[o];if(oe(s))t[o]=pu(o,s,r);else if(s!=null){const i=Zs(s);t[o]=()=>i}}},bl=(e,t)=>{const n=Zs(t);e.slots.default=()=>n},vl=(e,t,n)=>{for(const r in t)(n||!Vs(r))&&(e[r]=t[r])},hu=(e,t,n)=>{const r=e.slots=fl();if(e.vnode.shapeFlag&32){const o=t._;o?(vl(r,t,n),n&&Aa(r,"_",o,!0)):ml(t,r)}else t&&bl(e,t)},gu=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,i=xe;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:vl(o,t,n):(s=!t.$stable,ml(t,o)),i=t}else t&&(bl(e,t),i={default:1});if(s)for(const a in o)!Vs(a)&&i[a]==null&&delete o[a]},dt=Au;function mu(e){return bu(e)}function bu(e,t){const n=no();n.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:i,createText:a,createComment:c,setText:d,setElementText:l,parentNode:u,nextSibling:f,setScopeId:h=Pt,insertStaticContent:p}=e,b=(g,m,x,$=null,T=null,C=null,F=void 0,L=null,N=!!m.dynamicChildren)=>{if(g===m)return;g&&!Un(g,m)&&($=_(g),Oe(g,T,C,!0),g=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:O,ref:K,shapeFlag:D}=m;switch(O){case co:y(g,m,x,$);break;case Ln:w(g,m,x,$);break;case Io:g==null&&E(m,x,$,F);break;case Nt:rt(g,m,x,$,T,C,F,L,N);break;default:D&1?q(g,m,x,$,T,C,F,L,N):D&6?Ie(g,m,x,$,T,C,F,L,N):(D&64||D&128)&&O.process(g,m,x,$,T,C,F,L,N,U)}K!=null&&T&&Hr(K,g&&g.ref,C,m||g,!m)},y=(g,m,x,$)=>{if(g==null)r(m.el=a(m.children),x,$);else{const T=m.el=g.el;m.children!==g.children&&d(T,m.children)}},w=(g,m,x,$)=>{g==null?r(m.el=c(m.children||""),x,$):m.el=g.el},E=(g,m,x,$)=>{[g.el,g.anchor]=p(g.children,m,x,$,g.el,g.anchor)},A=({el:g,anchor:m},x,$)=>{let T;for(;g&&g!==m;)T=f(g),r(g,x,$),g=T;r(m,x,$)},R=({el:g,anchor:m})=>{let x;for(;g&&g!==m;)x=f(g),o(g),g=x;o(m)},q=(g,m,x,$,T,C,F,L,N)=>{m.type==="svg"?F="svg":m.type==="math"&&(F="mathml"),g==null?J(m,x,$,T,C,F,L,N):Ae(g,m,T,C,F,L,N)},J=(g,m,x,$,T,C,F,L)=>{let N,O;const{props:K,shapeFlag:D,transition:j,dirs:Y}=g;if(N=g.el=i(g.type,C,K&&K.is,K),D&8?l(N,g.children):D&16&&me(g.children,N,null,$,T,Do(g,C),F,L),Y&&cn(g,null,$,"created"),te(N,g,g.scopeId,F,$),K){for(const fe in K)fe!=="value"&&!Xn(fe)&&s(N,fe,null,K[fe],C,$);"value"in K&&s(N,"value",null,K.value,C),(O=K.onVnodeBeforeMount)&&Rt(O,$,g)}Y&&cn(g,null,$,"beforeMount");const ie=vu(T,j);ie&&j.beforeEnter(N),r(N,m,x),((O=K&&K.onVnodeMounted)||ie||Y)&&dt(()=>{O&&Rt(O,$,g),ie&&j.enter(N),Y&&cn(g,null,$,"mounted")},T)},te=(g,m,x,$,T)=>{if(x&&h(g,x),$)for(let C=0;C<$.length;C++)h(g,$[C]);if(T){let C=T.subTree;if(m===C||$l(C.type)&&(C.ssContent===m||C.ssFallback===m)){const F=T.vnode;te(g,F,F.scopeId,F.slotScopeIds,T.parent)}}},me=(g,m,x,$,T,C,F,L,N=0)=>{for(let O=N;O<g.length;O++){const K=g[O]=L?tn(g[O]):Lt(g[O]);b(null,K,m,x,$,T,C,F,L)}},Ae=(g,m,x,$,T,C,F)=>{const L=m.el=g.el;let{patchFlag:N,dynamicChildren:O,dirs:K}=m;N|=g.patchFlag&16;const D=g.props||xe,j=m.props||xe;let Y;if(x&&dn(x,!1),(Y=j.onVnodeBeforeUpdate)&&Rt(Y,x,m,g),K&&cn(m,g,x,"beforeUpdate"),x&&dn(x,!0),(D.innerHTML&&j.innerHTML==null||D.textContent&&j.textContent==null)&&l(L,""),O?Re(g.dynamicChildren,O,L,x,$,Do(m,T),C):F||X(g,m,L,null,x,$,Do(m,T),C,!1),N>0){if(N&16)Ue(L,D,j,x,T);else if(N&2&&D.class!==j.class&&s(L,"class",null,j.class,T),N&4&&s(L,"style",D.style,j.style,T),N&8){const ie=m.dynamicProps;for(let fe=0;fe<ie.length;fe++){const ue=ie[fe],Je=D[ue],We=j[ue];(We!==Je||ue==="value")&&s(L,ue,Je,We,T,x)}}N&1&&g.children!==m.children&&l(L,m.children)}else!F&&O==null&&Ue(L,D,j,x,T);((Y=j.onVnodeUpdated)||K)&&dt(()=>{Y&&Rt(Y,x,m,g),K&&cn(m,g,x,"updated")},$)},Re=(g,m,x,$,T,C,F)=>{for(let L=0;L<m.length;L++){const N=g[L],O=m[L],K=N.el&&(N.type===Nt||!Un(N,O)||N.shapeFlag&198)?u(N.el):x;b(N,O,K,null,$,T,C,F,!0)}},Ue=(g,m,x,$,T)=>{if(m!==x){if(m!==xe)for(const C in m)!Xn(C)&&!(C in x)&&s(g,C,m[C],null,T,$);for(const C in x){if(Xn(C))continue;const F=x[C],L=m[C];F!==L&&C!=="value"&&s(g,C,L,F,T,$)}"value"in x&&s(g,"value",m.value,x.value,T)}},rt=(g,m,x,$,T,C,F,L,N)=>{const O=m.el=g?g.el:a(""),K=m.anchor=g?g.anchor:a("");let{patchFlag:D,dynamicChildren:j,slotScopeIds:Y}=m;Y&&(L=L?L.concat(Y):Y),g==null?(r(O,x,$),r(K,x,$),me(m.children||[],x,K,T,C,F,L,N)):D>0&&D&64&&j&&g.dynamicChildren?(Re(g.dynamicChildren,j,x,T,C,F,L),(m.key!=null||T&&m===T.subTree)&&xl(g,m,!0)):X(g,m,x,K,T,C,F,L,N)},Ie=(g,m,x,$,T,C,F,L,N)=>{m.slotScopeIds=L,g==null?m.shapeFlag&512?T.ctx.activate(m,x,$,F,N):Ye(m,x,$,T,C,F,N):ht(g,m,N)},Ye=(g,m,x,$,T,C,F)=>{const L=g.component=Fu(g,$,T);if(il(g)&&(L.ctx.renderer=U),Du(L,!1,F),L.asyncDep){if(T&&T.registerDep(L,$e,F),!g.el){const N=L.subTree=Se(Ln);w(null,N,m,x)}}else $e(L,g,m,x,T,C,F)},ht=(g,m,x)=>{const $=m.component=g.component;if(Cu(g,m,x))if($.asyncDep&&!$.asyncResolved){de($,m,x);return}else $.next=m,$.update();else m.el=g.el,$.vnode=m},$e=(g,m,x,$,T,C,F)=>{const L=()=>{if(g.isMounted){let{next:D,bu:j,u:Y,parent:ie,vnode:fe}=g;{const mt=yl(g);if(mt){D&&(D.el=fe.el,de(g,D,F)),mt.asyncDep.then(()=>{g.isUnmounted||L()});return}}let ue=D,Je;dn(g,!1),D?(D.el=fe.el,de(g,D,F)):D=fe,j&&Rr(j),(Je=D.props&&D.props.onVnodeBeforeUpdate)&&Rt(Je,ie,D,fe),dn(g,!0);const We=$i(g),gt=g.subTree;g.subTree=We,b(gt,We,u(gt.el),_(gt),g,T,C),D.el=We.el,ue===null&&Tu(g,We.el),Y&&dt(Y,T),(Je=D.props&&D.props.onVnodeUpdated)&&dt(()=>Rt(Je,ie,D,fe),T)}else{let D;const{el:j,props:Y}=m,{bm:ie,m:fe,parent:ue,root:Je,type:We}=g,gt=tr(m);dn(g,!1),ie&&Rr(ie),!gt&&(D=Y&&Y.onVnodeBeforeMount)&&Rt(D,ue,m),dn(g,!0);{Je.ce&&Je.ce._injectChildStyle(We);const mt=g.subTree=$i(g);b(null,mt,x,$,g,T,C),m.el=mt.el}if(fe&&dt(fe,T),!gt&&(D=Y&&Y.onVnodeMounted)){const mt=m;dt(()=>Rt(D,ue,mt),T)}(m.shapeFlag&256||ue&&tr(ue.vnode)&&ue.vnode.shapeFlag&256)&&g.a&&dt(g.a,T),g.isMounted=!0,m=x=$=null}};g.scope.on();const N=g.effect=new Na(L);g.scope.off();const O=g.update=N.run.bind(N),K=g.job=N.runIfDirty.bind(N);K.i=g,K.id=g.uid,N.scheduler=()=>Hs(K),dn(g,!0),O()},de=(g,m,x)=>{m.component=g;const $=g.vnode.props;g.vnode=m,g.next=null,uu(g,m.props,$,x),gu(g,m.children,x),Vt(),mi(g),Zt()},X=(g,m,x,$,T,C,F,L,N=!1)=>{const O=g&&g.children,K=g?g.shapeFlag:0,D=m.children,{patchFlag:j,shapeFlag:Y}=m;if(j>0){if(j&128){je(O,D,x,$,T,C,F,L,N);return}else if(j&256){Fe(O,D,x,$,T,C,F,L,N);return}}Y&8?(K&16&&ot(O,T,C),D!==O&&l(x,D)):K&16?Y&16?je(O,D,x,$,T,C,F,L,N):ot(O,T,C,!0):(K&8&&l(x,""),Y&16&&me(D,x,$,T,C,F,L,N))},Fe=(g,m,x,$,T,C,F,L,N)=>{g=g||Cn,m=m||Cn;const O=g.length,K=m.length,D=Math.min(O,K);let j;for(j=0;j<D;j++){const Y=m[j]=N?tn(m[j]):Lt(m[j]);b(g[j],Y,x,null,T,C,F,L,N)}O>K?ot(g,T,C,!0,!1,D):me(m,x,$,T,C,F,L,N,D)},je=(g,m,x,$,T,C,F,L,N)=>{let O=0;const K=m.length;let D=g.length-1,j=K-1;for(;O<=D&&O<=j;){const Y=g[O],ie=m[O]=N?tn(m[O]):Lt(m[O]);if(Un(Y,ie))b(Y,ie,x,null,T,C,F,L,N);else break;O++}for(;O<=D&&O<=j;){const Y=g[D],ie=m[j]=N?tn(m[j]):Lt(m[j]);if(Un(Y,ie))b(Y,ie,x,null,T,C,F,L,N);else break;D--,j--}if(O>D){if(O<=j){const Y=j+1,ie=Y<K?m[Y].el:$;for(;O<=j;)b(null,m[O]=N?tn(m[O]):Lt(m[O]),x,ie,T,C,F,L,N),O++}}else if(O>j)for(;O<=D;)Oe(g[O],T,C,!0),O++;else{const Y=O,ie=O,fe=new Map;for(O=ie;O<=j;O++){const Qe=m[O]=N?tn(m[O]):Lt(m[O]);Qe.key!=null&&fe.set(Qe.key,O)}let ue,Je=0;const We=j-ie+1;let gt=!1,mt=0;const an=new Array(We);for(O=0;O<We;O++)an[O]=0;for(O=Y;O<=D;O++){const Qe=g[O];if(Je>=We){Oe(Qe,T,C,!0);continue}let bt;if(Qe.key!=null)bt=fe.get(Qe.key);else for(ue=ie;ue<=j;ue++)if(an[ue-ie]===0&&Un(Qe,m[ue])){bt=ue;break}bt===void 0?Oe(Qe,T,C,!0):(an[bt-ie]=O+1,bt>=mt?mt=bt:gt=!0,b(Qe,m[bt],x,null,T,C,F,L,N),Je++)}const qn=gt?xu(an):Cn;for(ue=qn.length-1,O=We-1;O>=0;O--){const Qe=ie+O,bt=m[Qe],wr=Qe+1<K?m[Qe+1].el:$;an[O]===0?b(null,bt,x,wr,T,C,F,L,N):gt&&(ue<0||O!==qn[ue]?Be(bt,x,wr,2):ue--)}}},Be=(g,m,x,$,T=null)=>{const{el:C,type:F,transition:L,children:N,shapeFlag:O}=g;if(O&6){Be(g.component.subTree,m,x,$);return}if(O&128){g.suspense.move(m,x,$);return}if(O&64){F.move(g,m,x,U);return}if(F===Nt){r(C,m,x);for(let D=0;D<N.length;D++)Be(N[D],m,x,$);r(g.anchor,m,x);return}if(F===Io){A(g,m,x);return}if($!==2&&O&1&&L)if($===0)L.beforeEnter(C),r(C,m,x),dt(()=>L.enter(C),T);else{const{leave:D,delayLeave:j,afterLeave:Y}=L,ie=()=>{g.ctx.isUnmounted?o(C):r(C,m,x)},fe=()=>{D(C,()=>{ie(),Y&&Y()})};j?j(C,ie,fe):fe()}else r(C,m,x)},Oe=(g,m,x,$=!1,T=!1)=>{const{type:C,props:F,ref:L,children:N,dynamicChildren:O,shapeFlag:K,patchFlag:D,dirs:j,cacheIndex:Y}=g;if(D===-2&&(T=!1),L!=null&&(Vt(),Hr(L,null,x,g,!0),Zt()),Y!=null&&(m.renderCache[Y]=void 0),K&256){m.ctx.deactivate(g);return}const ie=K&1&&j,fe=!tr(g);let ue;if(fe&&(ue=F&&F.onVnodeBeforeUnmount)&&Rt(ue,m,g),K&6)yn(g.component,x,$);else{if(K&128){g.suspense.unmount(x,$);return}ie&&cn(g,null,m,"beforeUnmount"),K&64?g.type.remove(g,m,x,U,$):O&&!O.hasOnce&&(C!==Nt||D>0&&D&64)?ot(O,m,x,!1,!0):(C===Nt&&D&384||!T&&K&16)&&ot(N,m,x),$&&yt(g)}(fe&&(ue=F&&F.onVnodeUnmounted)||ie)&&dt(()=>{ue&&Rt(ue,m,g),ie&&cn(g,null,m,"unmounted")},x)},yt=g=>{const{type:m,el:x,anchor:$,transition:T}=g;if(m===Nt){Gt(x,$);return}if(m===Io){R(g);return}const C=()=>{o(x),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(g.shapeFlag&1&&T&&!T.persisted){const{leave:F,delayLeave:L}=T,N=()=>F(x,C);L?L(g.el,C,N):N()}else C()},Gt=(g,m)=>{let x;for(;g!==m;)x=f(g),o(g),g=x;o(m)},yn=(g,m,x)=>{const{bum:$,scope:T,job:C,subTree:F,um:L,m:N,a:O,parent:K,slots:{__:D}}=g;ki(N),ki(O),$&&Rr($),K&&ee(D)&&D.forEach(j=>{K.renderCache[j]=void 0}),T.stop(),C&&(C.flags|=8,Oe(F,g,m,x)),L&&dt(L,m),dt(()=>{g.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ot=(g,m,x,$=!1,T=!1,C=0)=>{for(let F=C;F<g.length;F++)Oe(g[F],m,x,$,T)},_=g=>{if(g.shapeFlag&6)return _(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const m=f(g.anchor||g.el),x=m&&m[Bd];return x?f(x):m};let z=!1;const I=(g,m,x)=>{g==null?m._vnode&&Oe(m._vnode,null,null,!0):b(m._vnode||null,g,m,null,null,null,x),m._vnode=g,z||(z=!0,mi(),el(),z=!1)},U={p:b,um:Oe,m:Be,r:yt,mt:Ye,mc:me,pc:X,pbc:Re,n:_,o:e};return{render:I,hydrate:void 0,createApp:cu(I)}}function Do({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function dn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function vu(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function xl(e,t,n=!1){const r=e.children,o=t.children;if(ee(r)&&ee(o))for(let s=0;s<r.length;s++){const i=r[s];let a=o[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[s]=tn(o[s]),a.el=i.el),!n&&a.patchFlag!==-2&&xl(i,a)),a.type===co&&(a.el=i.el),a.type===Ln&&!a.el&&(a.el=i.el)}}function xu(e){const t=e.slice(),n=[0];let r,o,s,i,a;const c=e.length;for(r=0;r<c;r++){const d=e[r];if(d!==0){if(o=n[n.length-1],e[o]<d){t[r]=o,n.push(r);continue}for(s=0,i=n.length-1;s<i;)a=s+i>>1,e[n[a]]<d?s=a+1:i=a;d<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=t[i];return n}function yl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:yl(t)}function ki(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const yu=Symbol.for("v-scx"),wu=()=>Dt(yu);function rr(e,t,n){return wl(e,t,n)}function wl(e,t,n=xe){const{immediate:r,deep:o,flush:s,once:i}=n,a=Xe({},n),c=t&&r||!t&&s!=="post";let d;if(fr){if(s==="sync"){const h=wu();d=h.__watcherHandles||(h.__watcherHandles=[])}else if(!c){const h=()=>{};return h.stop=Pt,h.resume=Pt,h.pause=Pt,h}}const l=Ke;a.call=(h,p,b)=>It(h,l,p,b);let u=!1;s==="post"?a.scheduler=h=>{dt(h,l&&l.suspense)}:s!=="sync"&&(u=!0,a.scheduler=(h,p)=>{p?h():Hs(h)}),a.augmentJob=h=>{t&&(h.flags|=4),u&&(h.flags|=2,l&&(h.id=l.uid,h.i=l))};const f=Pd(e,t,a);return fr&&(d?d.push(f):c&&f()),f}function Eu(e,t,n){const r=this.proxy,o=Le(e)?e.includes(".")?El(r,e):()=>r[e]:e.bind(r,r);let s;oe(t)?s=t:(s=t.handler,n=t);const i=br(this),a=wl(o,s.bind(r),n);return i(),a}function El(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}const ku=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${xt(t)}Modifiers`]||e[`${xn(t)}Modifiers`];function $u(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||xe;let o=n;const s=t.startsWith("update:"),i=s&&ku(r,t.slice(7));i&&(i.trim&&(o=n.map(l=>Le(l)?l.trim():l)),i.number&&(o=n.map(Xo)));let a,c=r[a=Oo(t)]||r[a=Oo(xt(t))];!c&&s&&(c=r[a=Oo(xn(t))]),c&&It(c,e,6,o);const d=r[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,It(d,e,6,o)}}function kl(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let i={},a=!1;if(!oe(e)){const c=d=>{const l=kl(d,t,!0);l&&(a=!0,Xe(i,l))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!a?(ke(e)&&r.set(e,null),null):(ee(s)?s.forEach(c=>i[c]=null):Xe(i,s),ke(e)&&r.set(e,i),i)}function lo(e,t){return!e||!Jr(t)?!1:(t=t.slice(2).replace(/Once$/,""),ge(e,t[0].toLowerCase()+t.slice(1))||ge(e,xn(t))||ge(e,t))}function $i(e){const{type:t,vnode:n,proxy:r,withProxy:o,propsOptions:[s],slots:i,attrs:a,emit:c,render:d,renderCache:l,props:u,data:f,setupState:h,ctx:p,inheritAttrs:b}=e,y=zr(e);let w,E;try{if(n.shapeFlag&4){const R=o||r,q=R;w=Lt(d.call(q,R,l,u,h,f,p)),E=a}else{const R=t;w=Lt(R.length>1?R(u,{attrs:a,slots:i,emit:c}):R(u,null)),E=t.props?a:Su(a)}}catch(R){or.length=0,io(R,e,1),w=Se(Ln)}let A=w;if(E&&b!==!1){const R=Object.keys(E),{shapeFlag:q}=A;R.length&&q&7&&(s&&R.some(Os)&&(E=_u(E,s)),A=Pn(A,E,!1,!0))}return n.dirs&&(A=Pn(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&Us(A,n.transition),w=A,zr(y),w}const Su=e=>{let t;for(const n in e)(n==="class"||n==="style"||Jr(n))&&((t||(t={}))[n]=e[n]);return t},_u=(e,t)=>{const n={};for(const r in e)(!Os(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Cu(e,t,n){const{props:r,children:o,component:s}=e,{props:i,children:a,patchFlag:c}=t,d=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Si(r,i,d):!!i;if(c&8){const l=t.dynamicProps;for(let u=0;u<l.length;u++){const f=l[u];if(i[f]!==r[f]&&!lo(d,f))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?Si(r,i,d):!0:!!i;return!1}function Si(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(t[s]!==e[s]&&!lo(n,s))return!0}return!1}function Tu({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const $l=e=>e.__isSuspense;function Au(e,t){t&&t.pendingBranch?ee(e)?t.effects.push(...e):t.effects.push(e):Id(e)}const Nt=Symbol.for("v-fgt"),co=Symbol.for("v-txt"),Ln=Symbol.for("v-cmt"),Io=Symbol.for("v-stc"),or=[];let pt=null;function sr(e=!1){or.push(pt=e?null:[])}function Ru(){or.pop(),pt=or[or.length-1]||null}let ur=1;function _i(e,t=!1){ur+=e,e<0&&pt&&t&&(pt.hasOnce=!0)}function Sl(e){return e.dynamicChildren=ur>0?pt||Cn:null,Ru(),ur>0&&pt&&pt.push(e),e}function Ci(e,t,n,r,o,s){return Sl(Ne(e,t,n,r,o,s,!0))}function Ks(e,t,n,r,o){return Sl(Se(e,t,n,r,o,!0))}function jr(e){return e?e.__v_isVNode===!0:!1}function Un(e,t){return e.type===t.type&&e.key===t.key}const _l=({key:e})=>e??null,Mr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Le(e)||He(e)||oe(e)?{i:ft,r:e,k:t,f:!!n}:e:null);function Ne(e,t=null,n=null,r=0,o=null,s=e===Nt?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&_l(t),ref:t&&Mr(t),scopeId:nl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ft};return a?(Gs(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=Le(n)?8:16),ur>0&&!i&&pt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&pt.push(c),c}const Se=Ou;function Ou(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===Qd)&&(e=Ln),jr(e)){const a=Pn(e,t,!0);return n&&Gs(a,n),ur>0&&!s&&pt&&(a.shapeFlag&6?pt[pt.indexOf(e)]=a:pt.push(a)),a.patchFlag=-2,a}if(Hu(e)&&(e=e.__vccOpts),t){t=Mu(t);let{class:a,style:c}=t;a&&!Le(a)&&(t.class=ro(a)),ke(c)&&(zs(c)&&!ee(c)&&(c=Xe({},c)),t.style=Ls(c))}const i=Le(e)?1:$l(e)?128:qd(e)?64:ke(e)?4:oe(e)?2:0;return Ne(e,t,n,r,o,i,s,!0)}function Mu(e){return e?zs(e)||pl(e)?Xe({},e):e:null}function Pn(e,t,n=!1,r=!1){const{props:o,ref:s,patchFlag:i,children:a,transition:c}=e,d=t?Nu(o||{},t):o,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&_l(d),ref:t&&t.ref?n&&s?ee(s)?s.concat(Mr(t)):[s,Mr(t)]:Mr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Nt?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pn(e.ssContent),ssFallback:e.ssFallback&&Pn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Us(l,c.clone(l)),l}function fn(e=" ",t=0){return Se(co,null,e,t)}function Lt(e){return e==null||typeof e=="boolean"?Se(Ln):ee(e)?Se(Nt,null,e.slice()):jr(e)?tn(e):Se(co,null,String(e))}function tn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pn(e)}function Gs(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(ee(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),Gs(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!pl(t)?t._ctx=ft:o===3&&ft&&(ft.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else oe(t)?(t={default:t,_ctx:ft},n=32):(t=String(t),r&64?(n=16,t=[fn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Nu(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=ro([t.class,r.class]));else if(o==="style")t.style=Ls([t.style,r.style]);else if(Jr(o)){const s=t[o],i=r[o];i&&s!==i&&!(ee(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=r[o])}return t}function Rt(e,t,n,r=null){It(e,t,7,[n,r])}const Lu=dl();let Pu=0;function Fu(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||Lu,s={uid:Pu++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ld(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gl(r,o),emitsOptions:kl(r,o),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=$u.bind(null,s),e.ce&&e.ce(s),s}let Ke=null,Wr,ss;{const e=no(),t=(n,r)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(r),s=>{o.length>1?o.forEach(i=>i(s)):o[0](s)}};Wr=t("__VUE_INSTANCE_SETTERS__",n=>Ke=n),ss=t("__VUE_SSR_SETTERS__",n=>fr=n)}const br=e=>{const t=Ke;return Wr(e),e.scope.on(),()=>{e.scope.off(),Wr(t)}},Ti=()=>{Ke&&Ke.scope.off(),Wr(null)};function Cl(e){return e.vnode.shapeFlag&4}let fr=!1;function Du(e,t=!1,n=!1){t&&ss(t);const{props:r,children:o}=e.vnode,s=Cl(e);du(e,r,s,t),hu(e,o,n||t);const i=s?Iu(e,t):void 0;return t&&ss(!1),i}function Iu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,nu);const{setup:r}=n;if(r){Vt();const o=e.setupContext=r.length>1?qu(e):null,s=br(e),i=mr(r,e,0,[e.props,o]),a=_a(i);if(Zt(),s(),(a||e.sp)&&!tr(e)&&sl(e),a){if(i.then(Ti,Ti),t)return i.then(c=>{Ai(e,c)}).catch(c=>{io(c,e,0)});e.asyncDep=i}else Ai(e,i)}else Tl(e)}function Ai(e,t,n){oe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ke(t)&&(e.setupState=Xa(t)),Tl(e)}function Tl(e,t,n){const r=e.type;e.render||(e.render=r.render||Pt);{const o=br(e);Vt();try{ru(e)}finally{Zt(),o()}}}const Bu={get(e,t){return Ze(e,"get",""),e[t]}};function qu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Bu),slots:e.slots,emit:e.emit,expose:t}}function uo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Xa(Td(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in nr)return nr[n](e)},has(t,n){return n in t||n in nr}})):e.proxy}function zu(e,t=!0){return oe(e)?e.displayName||e.name:e.name||t&&e.__name}function Hu(e){return oe(e)&&"__vccOpts"in e}const kt=(e,t)=>Nd(e,t,fr);function Al(e,t,n){const r=arguments.length;return r===2?ke(t)&&!ee(t)?jr(t)?Se(e,null,[t]):Se(e,t):Se(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&jr(n)&&(n=[n]),Se(e,t,n))}const Uu="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let is;const Ri=typeof window<"u"&&window.trustedTypes;if(Ri)try{is=Ri.createPolicy("vue",{createHTML:e=>e})}catch{}const Rl=is?e=>is.createHTML(e):e=>e,ju="http://www.w3.org/2000/svg",Wu="http://www.w3.org/1998/Math/MathML",Ht=typeof document<"u"?document:null,Oi=Ht&&Ht.createElement("template"),Vu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t==="svg"?Ht.createElementNS(ju,e):t==="mathml"?Ht.createElementNS(Wu,e):n?Ht.createElement(e,{is:n}):Ht.createElement(e);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>Ht.createTextNode(e),createComment:e=>Ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,s){const i=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{Oi.innerHTML=Rl(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=Oi.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Zu=Symbol("_vtc");function Ku(e,t,n){const r=e[Zu];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Vr=Symbol("_vod"),Ol=Symbol("_vsh"),Gu={beforeMount(e,{value:t},{transition:n}){e[Vr]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):jn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),jn(e,!0),r.enter(e)):r.leave(e,()=>{jn(e,!1)}):jn(e,t))},beforeUnmount(e,{value:t}){jn(e,t)}};function jn(e,t){e.style.display=t?e[Vr]:"none",e[Ol]=!t}const Xu=Symbol(""),Yu=/(^|;)\s*display\s*:/;function Ju(e,t,n){const r=e.style,o=Le(n);let s=!1;if(n&&!o){if(t)if(Le(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Nr(r,a,"")}else for(const i in t)n[i]==null&&Nr(r,i,"");for(const i in n)i==="display"&&(s=!0),Nr(r,i,n[i])}else if(o){if(t!==n){const i=r[Xu];i&&(n+=";"+i),r.cssText=n,s=Yu.test(n)}}else t&&e.removeAttribute("style");Vr in e&&(e[Vr]=s?r.display:"",e[Ol]&&(r.display="none"))}const Mi=/\s*!important$/;function Nr(e,t,n){if(ee(n))n.forEach(r=>Nr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Qu(e,t);Mi.test(n)?e.setProperty(xn(r),n.replace(Mi,""),"important"):e[r]=n}}const Ni=["Webkit","Moz","ms"],Bo={};function Qu(e,t){const n=Bo[t];if(n)return n;let r=xt(t);if(r!=="filter"&&r in e)return Bo[t]=r;r=to(r);for(let o=0;o<Ni.length;o++){const s=Ni[o]+r;if(s in e)return Bo[t]=s}return t}const Li="http://www.w3.org/1999/xlink";function Pi(e,t,n,r,o,s=ad(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Li,t.slice(6,t.length)):e.setAttributeNS(Li,t,n):n==null||s&&!Ra(n)?e.removeAttribute(t):e.setAttribute(t,s?"":sn(n)?String(n):n)}function Fi(e,t,n,r,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Rl(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Ra(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(o||t)}function $n(e,t,n,r){e.addEventListener(t,n,r)}function ef(e,t,n,r){e.removeEventListener(t,n,r)}const Di=Symbol("_vei");function tf(e,t,n,r,o=null){const s=e[Di]||(e[Di]={}),i=s[t];if(r&&i)i.value=r;else{const[a,c]=nf(t);if(r){const d=s[t]=sf(r,o);$n(e,a,d,c)}else i&&(ef(e,a,i,c),s[t]=void 0)}}const Ii=/(?:Once|Passive|Capture)$/;function nf(e){let t;if(Ii.test(e)){t={};let r;for(;r=e.match(Ii);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):xn(e.slice(2)),t]}let qo=0;const rf=Promise.resolve(),of=()=>qo||(rf.then(()=>qo=0),qo=Date.now());function sf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;It(af(r,n.value),t,5,[r])};return n.value=e,n.attached=of(),n}function af(e,t){if(ee(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const Bi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,lf=(e,t,n,r,o,s)=>{const i=o==="svg";t==="class"?Ku(e,r,i):t==="style"?Ju(e,n,r):Jr(t)?Os(t)||tf(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):cf(e,t,r,i))?(Fi(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Pi(e,t,r,i,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Le(r))?Fi(e,xt(t),r,s,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Pi(e,t,r,i))};function cf(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Bi(t)&&oe(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Bi(t)&&Le(n)?!1:t in e}const qi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ee(t)?n=>Rr(t,n):t};function df(e){e.target.composing=!0}function zi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const zo=Symbol("_assign"),uf={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e[zo]=qi(o);const s=r||o.props&&o.props.type==="number";$n(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;n&&(a=a.trim()),s&&(a=Xo(a)),e[zo](a)}),n&&$n(e,"change",()=>{e.value=e.value.trim()}),t||($n(e,"compositionstart",df),$n(e,"compositionend",zi),$n(e,"change",zi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:o,number:s}},i){if(e[zo]=qi(i),e.composing)return;const a=(s||e.type==="number")&&!/^0\d/.test(e.value)?Xo(e.value):e.value,c=t??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||o&&e.value.trim()===c)||(e.value=c))}},ff=Xe({patchProp:lf},Vu);let Hi;function pf(){return Hi||(Hi=mu(ff))}const hf=(...e)=>{const t=pf().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=mf(r);if(!o)return;const s=t._component;!oe(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=n(o,!1,gf(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function gf(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function mf(e){return Le(e)?document.querySelector(e):e}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Sn=typeof document<"u";function Ml(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function bf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Ml(e.default)}const pe=Object.assign;function Ho(e,t){const n={};for(const r in t){const o=t[r];n[r]=St(o)?o.map(e):e(o)}return n}const ir=()=>{},St=Array.isArray,Nl=/#/g,vf=/&/g,xf=/\//g,yf=/=/g,wf=/\?/g,Ll=/\+/g,Ef=/%5B/g,kf=/%5D/g,Pl=/%5E/g,$f=/%60/g,Fl=/%7B/g,Sf=/%7C/g,Dl=/%7D/g,_f=/%20/g;function Xs(e){return encodeURI(""+e).replace(Sf,"|").replace(Ef,"[").replace(kf,"]")}function Cf(e){return Xs(e).replace(Fl,"{").replace(Dl,"}").replace(Pl,"^")}function as(e){return Xs(e).replace(Ll,"%2B").replace(_f,"+").replace(Nl,"%23").replace(vf,"%26").replace($f,"`").replace(Fl,"{").replace(Dl,"}").replace(Pl,"^")}function Tf(e){return as(e).replace(yf,"%3D")}function Af(e){return Xs(e).replace(Nl,"%23").replace(wf,"%3F")}function Rf(e){return e==null?"":Af(e).replace(xf,"%2F")}function pr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Of=/\/$/,Mf=e=>e.replace(Of,"");function Uo(e,t,n="/"){let r,o={},s="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),o=e(s)),a>-1&&(r=r||t.slice(0,a),i=t.slice(a,t.length)),r=Ff(r??t,n),{fullPath:r+(s&&"?")+s+i,path:r,query:o,hash:pr(i)}}function Nf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ui(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Lf(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Fn(t.matched[r],n.matched[o])&&Il(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Fn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Il(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Pf(e[n],t[n]))return!1;return!0}function Pf(e,t){return St(e)?ji(e,t):St(t)?ji(t,e):e===t}function ji(e,t){return St(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Ff(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let s=n.length-1,i,a;for(i=0;i<r.length;i++)if(a=r[i],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i).join("/")}const Jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var hr;(function(e){e.pop="pop",e.push="push"})(hr||(hr={}));var ar;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ar||(ar={}));function Df(e){if(!e)if(Sn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Mf(e)}const If=/^[^#]+#/;function Bf(e,t){return e.replace(If,"#")+t}function qf(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const fo=()=>({left:window.scrollX,top:window.scrollY});function zf(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=qf(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Wi(e,t){return(history.state?history.state.position-t:-1)+e}const ls=new Map;function Hf(e,t){ls.set(e,t)}function Uf(e){const t=ls.get(e);return ls.delete(e),t}let jf=()=>location.protocol+"//"+location.host;function Bl(e,t){const{pathname:n,search:r,hash:o}=t,s=e.indexOf("#");if(s>-1){let a=o.includes(e.slice(s))?e.slice(s).length:1,c=o.slice(a);return c[0]!=="/"&&(c="/"+c),Ui(c,"")}return Ui(n,e)+r+o}function Wf(e,t,n,r){let o=[],s=[],i=null;const a=({state:f})=>{const h=Bl(e,location),p=n.value,b=t.value;let y=0;if(f){if(n.value=h,t.value=f,i&&i===p){i=null;return}y=b?f.position-b.position:0}else r(h);o.forEach(w=>{w(n.value,p,{delta:y,type:hr.pop,direction:y?y>0?ar.forward:ar.back:ar.unknown})})};function c(){i=n.value}function d(f){o.push(f);const h=()=>{const p=o.indexOf(f);p>-1&&o.splice(p,1)};return s.push(h),h}function l(){const{history:f}=window;f.state&&f.replaceState(pe({},f.state,{scroll:fo()}),"")}function u(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:d,destroy:u}}function Vi(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?fo():null}}function Vf(e){const{history:t,location:n}=window,r={value:Bl(e,n)},o={value:t.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,d,l){const u=e.indexOf("#"),f=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+c:jf()+e+c;try{t[l?"replaceState":"pushState"](d,"",f),o.value=d}catch(h){console.error(h),n[l?"replace":"assign"](f)}}function i(c,d){const l=pe({},t.state,Vi(o.value.back,c,o.value.forward,!0),d,{position:o.value.position});s(c,l,!0),r.value=c}function a(c,d){const l=pe({},o.value,t.state,{forward:c,scroll:fo()});s(l.current,l,!0);const u=pe({},Vi(r.value,c,null),{position:l.position+1},d);s(c,u,!1),r.value=c}return{location:r,state:o,push:a,replace:i}}function Zf(e){e=Df(e);const t=Vf(e),n=Wf(e,t.state,t.location,t.replace);function r(s,i=!0){i||n.pauseListeners(),history.go(s)}const o=pe({location:"",base:e,go:r,createHref:Bf.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Kf(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Zf(e)}function Gf(e){return typeof e=="string"||e&&typeof e=="object"}function ql(e){return typeof e=="string"||typeof e=="symbol"}const zl=Symbol("");var Zi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Zi||(Zi={}));function Dn(e,t){return pe(new Error,{type:e,[zl]:!0},t)}function zt(e,t){return e instanceof Error&&zl in e&&(t==null||!!(e.type&t))}const Ki="[^/]+?",Xf={sensitive:!1,strict:!1,start:!0,end:!0},Yf=/[.+*?^${}()[\]/\\]/g;function Jf(e,t){const n=pe({},Xf,t),r=[];let o=n.start?"^":"";const s=[];for(const d of e){const l=d.length?[]:[90];n.strict&&!d.length&&(o+="/");for(let u=0;u<d.length;u++){const f=d[u];let h=40+(n.sensitive?.25:0);if(f.type===0)u||(o+="/"),o+=f.value.replace(Yf,"\\$&"),h+=40;else if(f.type===1){const{value:p,repeatable:b,optional:y,regexp:w}=f;s.push({name:p,repeatable:b,optional:y});const E=w||Ki;if(E!==Ki){h+=10;try{new RegExp(`(${E})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${p}" (${E}): `+R.message)}}let A=b?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;u||(A=y&&d.length<2?`(?:/${A})`:"/"+A),y&&(A+="?"),o+=A,h+=20,y&&(h+=-8),b&&(h+=-20),E===".*"&&(h+=-50)}l.push(h)}r.push(l)}if(n.strict&&n.end){const d=r.length-1;r[d][r[d].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function a(d){const l=d.match(i),u={};if(!l)return null;for(let f=1;f<l.length;f++){const h=l[f]||"",p=s[f-1];u[p.name]=h&&p.repeatable?h.split("/"):h}return u}function c(d){let l="",u=!1;for(const f of e){(!u||!l.endsWith("/"))&&(l+="/"),u=!1;for(const h of f)if(h.type===0)l+=h.value;else if(h.type===1){const{value:p,repeatable:b,optional:y}=h,w=p in d?d[p]:"";if(St(w)&&!b)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const E=St(w)?w.join("/"):w;if(!E)if(y)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):u=!0);else throw new Error(`Missing required param "${p}"`);l+=E}}return l||"/"}return{re:i,score:r,keys:s,parse:a,stringify:c}}function Qf(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Hl(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const s=Qf(r[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-r.length)===1){if(Gi(r))return 1;if(Gi(o))return-1}return o.length-r.length}function Gi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ep={type:0,value:""},tp=/[a-zA-Z0-9_]/;function np(e){if(!e)return[[]];if(e==="/")return[[ep]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${d}": ${h}`)}let n=0,r=n;const o=[];let s;function i(){s&&o.push(s),s=[]}let a=0,c,d="",l="";function u(){d&&(n===0?s.push({type:0,value:d}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:d,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),d="")}function f(){d+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(d&&u(),i()):c===":"?(u(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:tp.test(c)?f():(u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${d}"`),u(),i(),o}function rp(e,t,n){const r=Jf(np(e.path),n),o=pe(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function op(e,t){const n=[],r=new Map;t=Qi({strict:!1,end:!0,sensitive:!1},t);function o(u){return r.get(u)}function s(u,f,h){const p=!h,b=Yi(u);b.aliasOf=h&&h.record;const y=Qi(t,u),w=[b];if("alias"in u){const R=typeof u.alias=="string"?[u.alias]:u.alias;for(const q of R)w.push(Yi(pe({},b,{components:h?h.record.components:b.components,path:q,aliasOf:h?h.record:b})))}let E,A;for(const R of w){const{path:q}=R;if(f&&q[0]!=="/"){const J=f.record.path,te=J[J.length-1]==="/"?"":"/";R.path=f.record.path+(q&&te+q)}if(E=rp(R,f,y),h?h.alias.push(E):(A=A||E,A!==E&&A.alias.push(E),p&&u.name&&!Ji(E)&&i(u.name)),Ul(E)&&c(E),b.children){const J=b.children;for(let te=0;te<J.length;te++)s(J[te],E,h&&h.children[te])}h=h||E}return A?()=>{i(A)}:ir}function i(u){if(ql(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(i),u.alias.forEach(i))}}function a(){return n}function c(u){const f=ap(u,n);n.splice(f,0,u),u.record.name&&!Ji(u)&&r.set(u.record.name,u)}function d(u,f){let h,p={},b,y;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw Dn(1,{location:u});y=h.record.name,p=pe(Xi(f.params,h.keys.filter(A=>!A.optional).concat(h.parent?h.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),u.params&&Xi(u.params,h.keys.map(A=>A.name))),b=h.stringify(p)}else if(u.path!=null)b=u.path,h=n.find(A=>A.re.test(b)),h&&(p=h.parse(b),y=h.record.name);else{if(h=f.name?r.get(f.name):n.find(A=>A.re.test(f.path)),!h)throw Dn(1,{location:u,currentLocation:f});y=h.record.name,p=pe({},f.params,u.params),b=h.stringify(p)}const w=[];let E=h;for(;E;)w.unshift(E.record),E=E.parent;return{name:y,path:b,params:p,matched:w,meta:ip(w)}}e.forEach(u=>s(u));function l(){n.length=0,r.clear()}return{addRoute:s,resolve:d,removeRoute:i,clearRoutes:l,getRoutes:a,getRecordMatcher:o}}function Xi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Yi(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:sp(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function sp(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ji(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ip(e){return e.reduce((t,n)=>pe(t,n.meta),{})}function Qi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ap(e,t){let n=0,r=t.length;for(;n!==r;){const s=n+r>>1;Hl(e,t[s])<0?r=s:n=s+1}const o=lp(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function lp(e){let t=e;for(;t=t.parent;)if(Ul(t)&&Hl(e,t)===0)return t}function Ul({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function cp(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const s=r[o].replace(Ll," "),i=s.indexOf("="),a=pr(i<0?s:s.slice(0,i)),c=i<0?null:pr(s.slice(i+1));if(a in t){let d=t[a];St(d)||(d=t[a]=[d]),d.push(c)}else t[a]=c}return t}function ea(e){let t="";for(let n in e){const r=e[n];if(n=Tf(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(St(r)?r.map(s=>s&&as(s)):[r&&as(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function dp(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=St(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const up=Symbol(""),ta=Symbol(""),po=Symbol(""),jl=Symbol(""),cs=Symbol("");function Wn(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function nn(e,t,n,r,o,s=i=>i()){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((a,c)=>{const d=f=>{f===!1?c(Dn(4,{from:n,to:t})):f instanceof Error?c(f):Gf(f)?c(Dn(2,{from:t,to:f})):(i&&r.enterCallbacks[o]===i&&typeof f=="function"&&i.push(f),a())},l=s(()=>e.call(r&&r.instances[o],t,n,d));let u=Promise.resolve(l);e.length<3&&(u=u.then(d)),u.catch(f=>c(f))})}function jo(e,t,n,r,o=s=>s()){const s=[];for(const i of e)for(const a in i.components){let c=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(Ml(c)){const l=(c.__vccOpts||c)[t];l&&s.push(nn(l,n,r,i,a,o))}else{let d=c();s.push(()=>d.then(l=>{if(!l)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const u=bf(l)?l.default:l;i.mods[a]=l,i.components[a]=u;const h=(u.__vccOpts||u)[t];return h&&nn(h,n,r,i,a,o)()}))}}return s}function na(e){const t=Dt(po),n=Dt(jl),r=kt(()=>{const c=Ft(e.to);return t.resolve(c)}),o=kt(()=>{const{matched:c}=r.value,{length:d}=c,l=c[d-1],u=n.matched;if(!l||!u.length)return-1;const f=u.findIndex(Fn.bind(null,l));if(f>-1)return f;const h=ra(c[d-2]);return d>1&&ra(l)===h&&u[u.length-1].path!==h?u.findIndex(Fn.bind(null,c[d-2])):f}),s=kt(()=>o.value>-1&&mp(n.params,r.value.params)),i=kt(()=>o.value>-1&&o.value===n.matched.length-1&&Il(n.params,r.value.params));function a(c={}){if(gp(c)){const d=t[Ft(e.replace)?"replace":"push"](Ft(e.to)).catch(ir);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:r,href:kt(()=>r.value.href),isActive:s,isExactActive:i,navigate:a}}function fp(e){return e.length===1?e[0]:e}const pp=ol({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:na,setup(e,{slots:t}){const n=so(na(e)),{options:r}=Dt(po),o=kt(()=>({[oa(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[oa(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&fp(t.default(n));return e.custom?s:Al("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),hp=pp;function gp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function mp(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!St(o)||o.length!==r.length||r.some((s,i)=>s!==o[i]))return!1}return!0}function ra(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const oa=(e,t,n)=>e??t??n,bp=ol({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Dt(cs),o=kt(()=>e.route||r.value),s=Dt(ta,0),i=kt(()=>{let d=Ft(s);const{matched:l}=o.value;let u;for(;(u=l[d])&&!u.components;)d++;return d}),a=kt(()=>o.value.matched[i.value]);Or(ta,kt(()=>i.value+1)),Or(up,a),Or(cs,o);const c=er();return rr(()=>[c.value,a.value,e.name],([d,l,u],[f,h,p])=>{l&&(l.instances[u]=d,h&&h!==l&&d&&d===f&&(l.leaveGuards.size||(l.leaveGuards=h.leaveGuards),l.updateGuards.size||(l.updateGuards=h.updateGuards))),d&&l&&(!h||!Fn(l,h)||!f)&&(l.enterCallbacks[u]||[]).forEach(b=>b(d))},{flush:"post"}),()=>{const d=o.value,l=e.name,u=a.value,f=u&&u.components[l];if(!f)return sa(n.default,{Component:f,route:d});const h=u.props[l],p=h?h===!0?d.params:typeof h=="function"?h(d):h:null,y=Al(f,pe({},p,t,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(u.instances[l]=null)},ref:c}));return sa(n.default,{Component:y,route:d})||y}}});function sa(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Wl=bp;function vp(e){const t=op(e.routes,e),n=e.parseQuery||cp,r=e.stringifyQuery||ea,o=e.history,s=Wn(),i=Wn(),a=Wn(),c=Ad(Jt);let d=Jt;Sn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Ho.bind(null,_=>""+_),u=Ho.bind(null,Rf),f=Ho.bind(null,pr);function h(_,z){let I,U;return ql(_)?(I=t.getRecordMatcher(_),U=z):U=_,t.addRoute(U,I)}function p(_){const z=t.getRecordMatcher(_);z&&t.removeRoute(z)}function b(){return t.getRoutes().map(_=>_.record)}function y(_){return!!t.getRecordMatcher(_)}function w(_,z){if(z=pe({},z||c.value),typeof _=="string"){const x=Uo(n,_,z.path),$=t.resolve({path:x.path},z),T=o.createHref(x.fullPath);return pe(x,$,{params:f($.params),hash:pr(x.hash),redirectedFrom:void 0,href:T})}let I;if(_.path!=null)I=pe({},_,{path:Uo(n,_.path,z.path).path});else{const x=pe({},_.params);for(const $ in x)x[$]==null&&delete x[$];I=pe({},_,{params:u(x)}),z.params=u(z.params)}const U=t.resolve(I,z),be=_.hash||"";U.params=l(f(U.params));const g=Nf(r,pe({},_,{hash:Cf(be),path:U.path})),m=o.createHref(g);return pe({fullPath:g,hash:be,query:r===ea?dp(_.query):_.query||{}},U,{redirectedFrom:void 0,href:m})}function E(_){return typeof _=="string"?Uo(n,_,c.value.path):pe({},_)}function A(_,z){if(d!==_)return Dn(8,{from:z,to:_})}function R(_){return te(_)}function q(_){return R(pe(E(_),{replace:!0}))}function J(_){const z=_.matched[_.matched.length-1];if(z&&z.redirect){const{redirect:I}=z;let U=typeof I=="function"?I(_):I;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=E(U):{path:U},U.params={}),pe({query:_.query,hash:_.hash,params:U.path!=null?{}:_.params},U)}}function te(_,z){const I=d=w(_),U=c.value,be=_.state,g=_.force,m=_.replace===!0,x=J(I);if(x)return te(pe(E(x),{state:typeof x=="object"?pe({},be,x.state):be,force:g,replace:m}),z||I);const $=I;$.redirectedFrom=z;let T;return!g&&Lf(r,U,I)&&(T=Dn(16,{to:$,from:U}),Be(U,U,!0,!1)),(T?Promise.resolve(T):Re($,U)).catch(C=>zt(C)?zt(C,2)?C:je(C):X(C,$,U)).then(C=>{if(C){if(zt(C,2))return te(pe({replace:m},E(C.to),{state:typeof C.to=="object"?pe({},be,C.to.state):be,force:g}),z||$)}else C=rt($,U,!0,m,be);return Ue($,U,C),C})}function me(_,z){const I=A(_,z);return I?Promise.reject(I):Promise.resolve()}function Ae(_){const z=Gt.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext(_):_()}function Re(_,z){let I;const[U,be,g]=xp(_,z);I=jo(U.reverse(),"beforeRouteLeave",_,z);for(const x of U)x.leaveGuards.forEach($=>{I.push(nn($,_,z))});const m=me.bind(null,_,z);return I.push(m),ot(I).then(()=>{I=[];for(const x of s.list())I.push(nn(x,_,z));return I.push(m),ot(I)}).then(()=>{I=jo(be,"beforeRouteUpdate",_,z);for(const x of be)x.updateGuards.forEach($=>{I.push(nn($,_,z))});return I.push(m),ot(I)}).then(()=>{I=[];for(const x of g)if(x.beforeEnter)if(St(x.beforeEnter))for(const $ of x.beforeEnter)I.push(nn($,_,z));else I.push(nn(x.beforeEnter,_,z));return I.push(m),ot(I)}).then(()=>(_.matched.forEach(x=>x.enterCallbacks={}),I=jo(g,"beforeRouteEnter",_,z,Ae),I.push(m),ot(I))).then(()=>{I=[];for(const x of i.list())I.push(nn(x,_,z));return I.push(m),ot(I)}).catch(x=>zt(x,8)?x:Promise.reject(x))}function Ue(_,z,I){a.list().forEach(U=>Ae(()=>U(_,z,I)))}function rt(_,z,I,U,be){const g=A(_,z);if(g)return g;const m=z===Jt,x=Sn?history.state:{};I&&(U||m?o.replace(_.fullPath,pe({scroll:m&&x&&x.scroll},be)):o.push(_.fullPath,be)),c.value=_,Be(_,z,I,m),je()}let Ie;function Ye(){Ie||(Ie=o.listen((_,z,I)=>{if(!yn.listening)return;const U=w(_),be=J(U);if(be){te(pe(be,{replace:!0,force:!0}),U).catch(ir);return}d=U;const g=c.value;Sn&&Hf(Wi(g.fullPath,I.delta),fo()),Re(U,g).catch(m=>zt(m,12)?m:zt(m,2)?(te(pe(E(m.to),{force:!0}),U).then(x=>{zt(x,20)&&!I.delta&&I.type===hr.pop&&o.go(-1,!1)}).catch(ir),Promise.reject()):(I.delta&&o.go(-I.delta,!1),X(m,U,g))).then(m=>{m=m||rt(U,g,!1),m&&(I.delta&&!zt(m,8)?o.go(-I.delta,!1):I.type===hr.pop&&zt(m,20)&&o.go(-1,!1)),Ue(U,g,m)}).catch(ir)}))}let ht=Wn(),$e=Wn(),de;function X(_,z,I){je(_);const U=$e.list();return U.length?U.forEach(be=>be(_,z,I)):console.error(_),Promise.reject(_)}function Fe(){return de&&c.value!==Jt?Promise.resolve():new Promise((_,z)=>{ht.add([_,z])})}function je(_){return de||(de=!_,Ye(),ht.list().forEach(([z,I])=>_?I(_):z()),ht.reset()),_}function Be(_,z,I,U){const{scrollBehavior:be}=e;if(!Sn||!be)return Promise.resolve();const g=!I&&Uf(Wi(_.fullPath,0))||(U||!I)&&history.state&&history.state.scroll||null;return Ja().then(()=>be(_,z,g)).then(m=>m&&zf(m)).catch(m=>X(m,_,z))}const Oe=_=>o.go(_);let yt;const Gt=new Set,yn={currentRoute:c,listening:!0,addRoute:h,removeRoute:p,clearRoutes:t.clearRoutes,hasRoute:y,getRoutes:b,resolve:w,options:e,push:R,replace:q,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:s.add,beforeResolve:i.add,afterEach:a.add,onError:$e.add,isReady:Fe,install(_){const z=this;_.component("RouterLink",hp),_.component("RouterView",Wl),_.config.globalProperties.$router=z,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Ft(c)}),Sn&&!yt&&c.value===Jt&&(yt=!0,R(o.location).catch(be=>{}));const I={};for(const be in Jt)Object.defineProperty(I,be,{get:()=>c.value[be],enumerable:!0});_.provide(po,z),_.provide(jl,Za(I)),_.provide(cs,c);const U=_.unmount;Gt.add(_),_.unmount=function(){Gt.delete(_),Gt.size<1&&(d=Jt,Ie&&Ie(),Ie=null,c.value=Jt,yt=!1,de=!1),U()}}};function ot(_){return _.reduce((z,I)=>z.then(()=>Ae(I)),Promise.resolve())}return yn}function xp(e,t){const n=[],r=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const a=t.matched[i];a&&(e.matched.find(d=>Fn(d,a))?r.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find(d=>Fn(d,c))||o.push(c))}return[n,r,o]}function yp(){return Dt(po)}const ia=[{name:"Welcome to XBlogs!",desc:"欢迎使用 Xblogs! 点击这个卡片上方的蓝字可以查看网站使用教程!",keywords:["教程","新手","XBlogs"],date:"2025-05-31",author:"Fexcode",routeurl:"/xblogs/blog/welcome",show:!0},{name:"Python隐藏特性: yield from",desc:"Python 3.3 引入了新的语法 yield from，可以用来简化生成器的编写。本文将介绍 yield from 的用法。",keywords:["Python","yield from","生成器","Python小技巧"],date:"2025-06-02",author:"Fexcode",routeurl:"/xblogs/blog/python-yield-from",show:!0}].reverse(),ho={CSSStyleSheet:!0,CSSContainer:CSS.supports("container-type","size")};try{new CSSStyleSheet}catch{ho.CSSStyleSheet=!1}const wp=(e,t)=>{for(const n of t){if(!ho.CSSStyleSheet){const o=document.createElement("style");o.textContent=n,e.insertBefore(o,e.firstChild);continue}const r=new CSSStyleSheet;r.replaceSync(n),e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]}},ae=e=>{const t={},n={};for(const r in e){let o=e[r];const s={key:r,sync:!0,types:[]};r.startsWith("$")&&(s.key=r.slice(1),s.sync=!1),Array.isArray(o)&&(s.types=o,o=s.types[0]),t[s.key]=o,n[s.key]={sync:s.sync,def:o,to:i=>{switch(typeof o){case"string":const a=String(i);return s.types.length>0?s.types.includes(a)?a:s.types[0]:a;case"number":const c=Number(i);return isNaN(c)?o:c;case"boolean":return typeof i=="boolean"?i:i==="true"}}}}return Object.defineProperty(t,"$meta",{value:n}),t},go=e=>e,Ep=`
:host{
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}
*{
  outline: none;
}
`,Z=e=>{var o;const t={observedAttributes:[],upperPropKeys:{},metaProps:((o=e.props)==null?void 0:o.$meta)??{},events:[]};for(const s in t.metaProps??{}){const i=s.toLowerCase();t.observedAttributes.push(i),t.upperPropKeys[i]=s}for(const s in e.events){const i=`on${s}`;t.observedAttributes.push(i),!(i in HTMLElement.prototype)&&t.events.push(i)}const n=new Map;class r extends HTMLElement{static define(i){customElements.define(i,this)}constructor(){var u;super();const i=this.attachShadow({mode:"open"});i.innerHTML=e.template??"",wp(i,[Ep,...e.style?Array.isArray(e.style)?e.style:[e.style]:[]]);const a={...e.props};let c;const d={};for(const f in a){const h=this[f];h!==void 0&&(d[f]=h),Object.defineProperty(this,f,{configurable:!0,get:()=>{var b;const p=c==null?void 0:c[f];return!p||typeof p=="function"||!p.get?a[f]:(b=p.get)==null?void 0:b.call(p,a[f])},set:p=>{var A;const b=t.metaProps[f],y=p===void 0?b.def:b.to(p);if(b.sync){const R=f.toLowerCase(),q=this.getAttribute(R),J=String(y);if(y===b.def&&q!==null)return this.removeAttribute(R);if(y!==b.def&&q!==J)return this.setAttribute(R,J)}if(y===this[f])return;const w=a[f];a[f]=y;const E=c==null?void 0:c[f];if(E)try{typeof E=="function"?E(y,w):(A=E.set)==null||A.call(E,y,w)}catch(R){throw a[f]=w,R}}})}const l={};for(const f of t.events){const h=f;typeof this[h]=="function"&&(l[f]=this[h]),Object.defineProperty(this,f,{configurable:!0,get:()=>l[f]??null,set:p=>l[f]=typeof p=="function"?p:void 0}),this.addEventListener(f.slice(2),p=>l[f]&&l[f].bind(this)(p))}c=(u=e.setup)==null?void 0:u.call(this,i);for(const f in(c==null?void 0:c.expose)??{})Object.defineProperty(this,f,{get:()=>{var h;return(h=c==null?void 0:c.expose)==null?void 0:h[f]}});for(const f in d)this[f]=d[f];this.connectedCallback=this.disconnectedCallback=this.adoptedCallback=this.attributeChangedCallback=void 0,n.set(this,c)}connectedCallback(){var i,a;(a=(i=n.get(this))==null?void 0:i.onMounted)==null||a.call(i)}disconnectedCallback(){var i,a;(a=(i=n.get(this))==null?void 0:i.onUnmounted)==null||a.call(i)}adoptedCallback(){var i,a;(a=(i=n.get(this))==null?void 0:i.onAdopted)==null||a.call(i)}attributeChangedCallback(i,a,c){if(t.events.includes(i))return this[i]=c?new Function("event",c):null;this[t.upperPropKeys[i]]=c??void 0}}et(r,"observedAttributes",t.observedAttributes);for(const s in e.methods)r[s]=e.methods[s];return r},kp="s-alert",$p=ae({type:["info","success","warning","error"]}),Sp=`
:host{
  display: inline-flex;
  padding: 8px 16px;
  align-items: center;
  line-height: 22px;
  font-size: .875rem;
  font-weight: 500;
  min-height: 48px;
  box-sizing: border-box;
  border-radius: 4px;
  color: var(--s-color-on-secondary-container, #354A53);
  background: var(--s-color-secondary-container, #CFE6F1);
}
:host([type=success]){
  color: var(--s-color-on-success-container, #002111);
  background: var(--s-color-success-container, #92f7bc);
}
:host([type=warning]){
  color: var(--s-color-on-warning-container, #221b00);
  background: var(--s-color-warning-container, #ffe169);
}
:host([type=error]){
  color: var(--s-color-on-error-container, #93000A);
  background: var(--s-color-error-container, #FFDAD6);
}
svg{
  width: 24px;
  height: 24px;
  fill: currentColor;
  margin-right: 8px;
  margin-left: -2px;
  box-sizing: border-box;
  flex-shrink: 0;
  display: none;
}
.text{
  flex-grow: 1;
  min-width: 0;
}
:host(:not([type])) .info,
:host([type=success]) .success,
:host([type=warning]) .warning,
:host([type=error]) .error{
  display: block;
}
::slotted(*){
  flex-shrink: 0;
}
::slotted(:is(svg[slot=start], s-icon[slot=start])){
  margin-right: 8px;
  margin-left: -2px;
}
::slotted(:is(svg[slot=end], s-icon[slot=end])){
  margin-right: -2px;
  margin-left: 8px;
}
::slotted(:is(svg, s-icon)){
  fill: currentColor;
  color: currentColor;
  width: 24px;
  height: 24px;
}
::slotted(:is(s-button[slot=end], s-icon-button[slot=end])){
  margin-left: 8px;
  margin-right: -8px;
  color: currentColor;
}
::slotted(s-button[slot=end]){
  height: 32px;
  padding: 0 12px;
  border-radius: 4px;
  font-size: .8125rem;
}
::slotted(s-icon-button[slot=end]){
  width: 32px;
  padding: 5px;
}
`,_p=`
<slot name="start">
  <svg viewBox="0 0 24 24" class="info">
    <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
  </svg>
  <svg viewBox="0 0 24 24" class="success">
    <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
  </svg>
  <svg viewBox="0 0 24 24" class="warning">
    <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
  </svg>
  <svg viewBox="0 0 24 24" class="error">
    <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
  </svg>
</slot>
<div class="text" part="text"><slot></slot></div>
<slot name="end"></slot>
`;class Cp extends Z({style:Sp,template:_p,props:$p}){}Cp.define(kp);const Tp="s-appbar",Ap=`
:host{
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 8px;
  box-sizing: border-box;
  container-name: s-appbar;
  container-type: inline-size;
  background: var(--s-color-surface-container, #ECEEF0);
}
::slotted([slot=navigation]){
  margin-left: 4px;
  flex-shrink: 0;
}
::slotted([slot=logo]){
  margin-left: 12px;
  height: 32px;
  color: var(--s-color-primary, #006782);
  fill: currentColor;
  flex-shrink: 0;
}
::slotted([slot=headline]){
  font-size: 1.5rem;
  font-weight: bold;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 12px;
  color: var(--s-color-primary, #006782);
}
.view{
  flex-grow: 1;
  min-width: 0;
  height: 100%;
  display: flex;
  align-items: center;
  height: 64px;
  max-height: 100%;
  justify-content: flex-end;
}
.view.s-laptop{
  height: 56px;
}
.view.s-tablet ::slotted(s-search[slot=search]){
  width: auto;
  flex-grow: 1;
}
::slotted([slot=action]){
  margin: 0 4px;
  flex-shrink: 0;
}
::slotted(s-search[slot=search]){
  flex-shrink: 0;
  margin: 0 4px 0 8px;
}
@container s-appbar (max-width: 1024px){
  .view{
    height: 56px;
  }
}
@container s-appbar (max-width: 768px){
  ::slotted(s-search[slot=search]){
    width: auto;
    flex-grow: 1;
  }
}
`,Rp=`
<slot name="start"></slot>
<slot name="navigation"></slot>
<slot name="logo"></slot>
<slot name="headline"></slot>
<div class="view" part="view">
  <slot></slot>
  <slot name="search"></slot>
</div>
<slot name="action"></slot>
<slot name="end"></slot>
`;class Op extends Z({style:Ap,template:Rp,setup(t){const n=t.querySelector(".view");ho.CSSContainer||new ResizeObserver(()=>{n.classList.toggle("s-laptop",this.offsetWidth<=1024),n.classList.toggle("s-tablet",this.offsetWidth<=768)}).observe(this)}}){}Op.define(Tp);const Mp="s-avatar",Np=ae({$src:""}),Lp=`
:host{
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  position: relative;
  font-size: 1rem;
  font-weight: 600;
  width: 40px;
  border-radius: 50%;
  color: var(--s-color-on-tertiary, #ffffff);
  background: var(--s-color-tertiary, #5C5B7E);
}
::slotted(:is(svg, s-icon)){
  color: currentColor;
  fill: currentColor;
  width: 24px;
}
::slotted([slot=badge]){
  position: absolute;
  right: 0;
  bottom: 0;
  box-shadow: 0 0 0 2px var(--s-color-surface, #F8F9FB);
  color: var(--s-color-on-success, #ffffff);
  background: var(--s-color-success, #006d43);
}
img{
  width: 100%;
  height: 100%;
  border-radius: inherit;
  position: absolute;
  inset: 0;
}
`,Pp=`
<slot></slot>
<slot name="badge"></slot>
`;class Fp extends Z({style:Lp,template:Pp,props:Np,setup(t){const n=document.createElement("img");return{src:r=>{n.src=r,n.onload=()=>{this.dispatchEvent(new Event("load")),t.insertBefore(n,t.children[0])},n.onerror=()=>{this.dispatchEvent(new ErrorEvent("error")),n.isConnected&&t.removeChild(n)}}}}}){}Fp.define(Mp);const Dp="s-badge",Ip=`
:host{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  font-size: .625rem;
  vertical-align: middle;
  box-sizing: border-box;
  background: var(--s-color-error, #BA1A1A);
  color: var(--s-color-on-error, #ffffff);
}
:host(:not(:empty)) .text{
  height: 16px;
  padding: 0 5px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background: inherit;
  color: inherit;
  box-shadow: inherit;
  border-radius: 8px;
}
`,Bp=`
<slot class="text" part="text"></slot>
`;class qp extends Z({style:Ip,template:Bp}){}qp.define(Dp);const _t=e=>{const t=e.trim().match(/^([\d\.]+)(s|ms)$/);if(!t)throw new Error;const n=Number(t[1]);return t[2]==="s"?n*1e3:n},zp="s-bottom-sheet",Hp=ae({showed:!1,disabledGesture:!1}),Up=go({show:CustomEvent,showed:Event,close:CustomEvent,closed:Event}),jp=`
:host{
  display: inline-block;
  vertical-align: middle;
}
dialog{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  padding: 0;
  max-width: none;
  max-height: none;
  outline: none;
  justify-content: center;
  align-items: flex-end;
  color: inherit;
  overflow: hidden;
}
dialog::backdrop{
  background: none;
}
dialog[open]{
  display: flex;
}
.scrim{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  backdrop-filter: saturate(180%) blur(2px);
}
.scrim::before{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  opacity: .75;
  background: var(--s-color-scrim, #000000);
}
dialog.show .scrim{
  opacity: 1;
}
.container{
  outline: none;
  position: relative;
  border-radius: 24px 24px 0 0;
  width: 100%;
  max-height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding-bottom: env(safe-area-inset-bottom);
  max-width: 425px;
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
  background: var(--s-color-surface-container-low, #F2F4F5);
}
.indicator{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  cursor: pointer;
  flex-shrink: 0;
}
.indicator::before{
  content: '';
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background: var(--s-color-outline, #70787D);
  opacity: .4;
}
::slotted([slot=text]){
  padding: 24px;
  line-height: 22px;
}
::slotted(:not([slot])){
  overscroll-behavior: none;
}
@media (max-width: 768px){
  .container{
    max-width: 768px;
  }
}
`,Wp=`
<slot name="trigger"></slot>
<dialog part="popup">
  <div class="scrim" part="scrim"></div>
  <div class="container" part="container">
    <div class="indicator" part="indicator"></div>
    <slot name="text"></slot>
    <slot id="view"></slot>
  </div>
</dialog>
`,Vp=e=>{let t=document.body;const n=document.body.firstElementChild;n&&n.tagName==="S-PAGE"&&(t=n);const r=new Vl,o=document.createElement("div");return o.slot="text",typeof e=="function"||e instanceof HTMLElement?e instanceof HTMLElement?r.appendChild(e):e(r):typeof e=="string"?(o.textContent=e,r.appendChild(o)):(e.root&&(t=e.root),e.disabledGesture&&(r.disabledGesture=e.disabledGesture),typeof e.view=="string"&&(o.textContent=e.view,r.appendChild(o)),e.view instanceof HTMLElement&&r.appendChild(e.view),typeof e.view=="function"&&e.view(r)),r.addEventListener("closed",()=>t.removeChild(r)),r.showed=!0,t.appendChild(r),r};class Vl extends Z({style:jp,template:Wp,props:Hp,events:Up,methods:{builder:Vp},setup(t){const n=t.querySelector("dialog"),r=t.querySelector(".container"),o=t.querySelector(".scrim"),s=t.querySelector(".indicator"),i=getComputedStyle(this);let a=null;const c=()=>{const h=i.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",p=i.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:h,duration:_t(p)}};t.querySelector("#view").onslotchange=h=>{a=h.target.assignedElements()[0]??null},t.querySelector("slot[name=trigger]").onclick=()=>{this.showed||!this.dispatchEvent(new CustomEvent("show",{cancelable:!0,detail:{source:"TRIGGER"}}))||(this.showed=!0)};const d=h=>{!this.showed||!this.dispatchEvent(new CustomEvent("close",{cancelable:!0,detail:{source:h}}))||(this.showed=!1)};o.onclick=()=>d("SCRIM");let l=null;r.addEventListener("touchmove",h=>{const p=h.target;if(this.disabledGesture)return;const b=h.touches[0];if(!l)return l={y:b.pageY,x:b.pageX,disabled:!1,top:0,h:r.offsetHeight,now:Date.now()};if(l.disabled)return;const y=b.pageY-l.y,w=b.pageX-l.x;if(l.top=Math.min(l.h,Math.max(0,y)),p!==s&&a&&a.scrollTop>0||Math.abs(y)<Math.abs(w))return l.disabled=!0;r.style.transform=`translateY(${l.top}px)`},{passive:!1}),r.ontouchend=()=>{if(!l||l.disabled)return l=null;const h=Date.now()-l.now>300?l.h/3:20;if(l.top>h){if(!this.dispatchEvent(new CustomEvent("close",{cancelable:!0,detail:{source:"GESTURE"}})))return;this.showed=!1}else r.animate({transform:[r.style.transform,"translateY(0)"]},c()),r.style.removeProperty("transform");l=null};const u=()=>{if(!this.isConnected||n.open)return;n.showModal(),n.classList.add("show");const h=c();o.animate({opacity:[0,1]},h),r.animate({transform:["translateY(100%)","translateY(0)"],opacity:[0,1]},h).finished.then(()=>this.dispatchEvent(new Event("showed")))},f=()=>{if(!this.isConnected||!n.open)return;n.classList.remove("show");const h=c(),p=r.style.transform;o.animate({opacity:[1,0]},h),r.animate({transform:[p===""?"translateY(0)":p,"translateY(100%)"],opacity:[1,0]},h).finished.then(()=>{n.close(),p&&r.style.removeProperty("transform"),this.dispatchEvent(new Event("closed"))})};return{onMounted:()=>this.showed&&!n.open&&u(),showed:h=>h?u():f()}}}){}Vl.define(zp);const ut={mobileS:matchMedia("(max-width: 320px)"),mobileM:matchMedia("(max-width: 375px)"),mobileL:matchMedia("(max-width: 425px)"),tablet:matchMedia("(max-width: 768px)"),laptop:matchMedia("(max-width: 1024px)"),laptopL:matchMedia("(max-width: 1440px)"),pointerCoarse:matchMedia("(pointer: coarse)"),pointerFine:matchMedia("(pointer: fine)")},Zp="s-ripple",Kp=ae({centered:!1,attached:!1}),Gp=`
:host{
  display: inline-block;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
}
:host([attached=true]),
.container,
.container::before,
.ripple{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: inherit;
}
.container{
  overflow: hidden;
}
.container::before{
  content: '';
  opacity: 0;
  background: var(--ripple-color, currentColor);
  transition: opacity var(--s-motion-duration-short4, 100ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
}
.container.hover::before{
  opacity: var(--ripple-hover-opacity, .12);
}
.ripple{
  opacity: 0;
  border-radius: 50%;
  background: currentColor;
  filter: blur(12px) opacity(var(--ripple-opacity, .18));
}
`,Xp=`
<slot></slot>
<div class="container" part="container">
  <div class="ripple"></div>
</div>
`;class Mn extends Z({style:Gp,template:Xp,props:Kp,setup(t){const n=t.querySelector(".container"),r=t.querySelector(".ripple"),o=getComputedStyle(this),s=()=>{const h=o.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",p=o.getPropertyValue("--s-motion-duration-long4")||"600ms",b=o.getPropertyValue("--s-motion-duration-short4")||"200ms";return{easing:h,duration:_t(p),shortDuration:_t(b)}},i=()=>ut.pointerFine.matches&&n.classList.add("hover"),a=()=>ut.pointerFine.matches&&n.classList.remove("hover"),c={parentNode:null,pressed:!1},d=h=>{const{offsetWidth:p,offsetHeight:b}=this;let y=Math.sqrt(p**2+b**2);const w={x:"50%",y:"50%"};if(!this.centered){const{left:me,top:Ae}=this.getBoundingClientRect(),Re=h.clientX-me,Ue=h.clientY-Ae,rt=b/2,Ie=p/2,Ye=(Math.abs(rt-Ue)+rt)*2,ht=(Math.abs(Ie-Re)+Ie)*2;y=Math.sqrt(Ye**2+ht**2),w.x=`${Re}px`,w.y=`${Ue}px`}let E=r,A=()=>{};c.pressed?(E=r.cloneNode(),n.appendChild(E),A=()=>E.remove()):(c.pressed=!0,A=()=>c.pressed=!1);const R=c.parentNode??this,q=s();R.setAttribute("pressed","");const J=E.animate({opacity:[1,1],width:[`${y}px`,`${y}px`],height:[`${y}px`,`${y}px`],transform:["translate(-50%, -50%) scale(0)","translate(-50%, -50%) scale(1)"],left:[w.x,w.x],top:[w.y,w.y]},{...q,fill:"forwards"});return()=>{R.removeAttribute("pressed");const me=Number(J.currentTime),Ae=q.duration-q.shortDuration,Re=me>Ae?q.shortDuration:q.duration-me;E.animate({opacity:[1,0]},{duration:Re,easing:q.easing,fill:"forwards"}).finished.then(A)}},l=async h=>{if(h.button!==0)return;const p={};if(h.pointerType==="mouse"){document.addEventListener("pointerup",d(h),{once:!0});return}let b;p.timer=setTimeout(()=>{b=d(h),document.removeEventListener("touchmove",y),p.upper&&b()},50),document.addEventListener("touchend",()=>{if(!b)return p.upper=!0;b()},{once:!0});const y=()=>clearTimeout(p.timer);document.addEventListener("touchmove",y,{once:!0})},u=h=>{h.addEventListener("mouseenter",i),h.addEventListener("mouseleave",a),h.addEventListener("wheel",a,{passive:!0}),h.addEventListener("pointerdown",l)},f=()=>{c.parentNode&&(c.parentNode.removeEventListener("mouseenter",i),c.parentNode.removeEventListener("mouseleave",a),c.parentNode.removeEventListener("wheel",a),c.parentNode.removeEventListener("pointerdown",l),c.parentNode=null)};return u(this),{onMounted:()=>{this.attached&&this.parentNode&&(c.parentNode=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode,u(c.parentNode))},onUnmounted:()=>this.attached&&f(),attached:h=>{if(!this.isConnected)return;if(!h)return f();const p=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;u(p)}}}}){}Mn.define(Zp);const Yp="s-button",Jp=ae({disabled:!1,type:["filled","elevated","filled-tonal","outlined","text"]}),Qp=`
:host{
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  display: inline-flex;
  vertical-align: middle;
  border-radius: 20px;
  padding: 0 24px;
  height: 40px;
  text-transform: capitalize;
  position: relative;
  cursor: pointer;
  font-size: .875rem;
  font-weight: 500;
  max-width: -moz-available;
  max-width: -webkit-fill-available;
  background: var(--s-color-primary, #006782);
  color: var(--s-color-on-primary, #ffffff);
  transition: box-shadow var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  overflow: hidden;
}
:host([disabled=true]){
  pointer-events: none !important;
  background: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent) !important;
}
:host([type=elevated]){
  background: var(--s-color-surface-container-low, #F2F4F5);
  color: var(--s-color-primary, #006782);
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
:host([type=elevated][disabled=true]){
  box-shadow: none !important;
}
:host([type=filled-tonal]){
  background: var(--s-color-secondary-container, #CFE6F1);
  color: var(--s-color-on-secondary-container, #354A53);
}
:host([type=outlined]){
  border: solid 1px var(--s-color-outline, #70787D);
  background: none;
  color: var(--s-color-primary, #006782);
}
:host([type=outlined][disabled=true]){
  background: none !important;
  border-color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
}
:host([type=text]){
  background: none;
  color: var(--s-color-primary, #006782);
  padding: 0 16px;
}
:host([type=text][disabled=true]){
  background: none !important;
}
::slotted(*){
  flex-shrink: 0;
}
::slotted(:is(svg, s-icon, s-circular-progress)){
  fill: currentColor;
  color: currentColor;
  width: 20px;
  height: 20px;
}
::slotted(:is(svg[slot=start], s-icon[slot=start])){
  margin-right: 4px;
  margin-left: -8px;
}
::slotted(:is(svg[slot=end], s-icon[slot=end])){
  margin-right: -8px;
  margin-left: 4px;
}
::slotted(s-circular-progress[slot=start]){
  margin-left: -8px;
  margin-right: 8px;
}
::slotted(s-circular-progress[slot=end]){
  margin-left: 8px;
  margin-right: -8px;
}
:host([type=text]) ::slotted(:is(s-icon[slot=start], svg[slot=start])){
  margin-left: -4px;
  margin-right: 4px;
}
:host([type=text]) ::slotted(:is(s-icon[slot=end], svg[slot=end])){
  margin-left: 4px;
  margin-right: -4px;
}
:host(:not([type])[pressed]){
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
:host([type=elevated][pressed]){
  box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
}
.text{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}
@media (pointer: fine){
  :host(:not([type]):hover){
    box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
  }
  :host([type=elevated]:hover){
    box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
  }
}
@supports not (color: color-mix(in srgb, black, white)){
  :host([disabled=true]){
    background: var(--s-color-surface-container-high, #E7E8EA) !important;
    color: var(--s-color-outline, #70787D) !important;
  }
  :host([type=outlined][disabled=true]){
    border-color: var(--s-color-surface-container-highest, #E1E3E4) !important;
  }
}
`,eh=`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
`;class th extends Z({style:Qp,template:eh,props:Jp}){}th.define(Yp);const nh="s-card",rh=ae({type:["elevated","filled","outlined"],clickable:!1}),oh=`
:host{
  display: inline-block;
  vertical-align: middle;
  border-radius: 12px;
  position: relative;
  font-size: .875rem;
  box-sizing: border-box;
  max-width: 280px;
  overflow: hidden;
  color: var(--s-color-on-surface, #191C1E);
  background: var(--s-color-surface-container-low, #F2F4F5);
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
:host([type=filled]){
  box-shadow: none;
  background: var(--s-color-surface-container-highest, #E1E3E4);
}
:host([type=outlined]){
  box-shadow: none;
  background: var(--s-color-surface, #F8F9FB);
  border: solid 1px var(--s-color-outline-variant, #C0C8CC);
}
:host([clickable=true]){
  cursor: pointer;
  transition: box-shadow var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
}
:host([clickable=true]) .ripple{
  display: block;
}
.action{
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 0 16px;
}
.ripple{
  display: none;
  border-radius: 0;
}
::slotted([slot=image]){
  display: block;
  max-height: 160px;
  min-height: 96px;
  width: 100%;
  object-fit: cover;
  background: var(--s-color-surface-container, #ECEEF0);
}
::slotted([slot=headline]){
  font-size: 1.375rem;
  line-height: 22px;
  margin: 12px 16px;
}
::slotted([slot=subhead]){
  font-size: 1rem;
  margin: -8px 16px 12px 16px;
}
::slotted([slot=text]){
  line-height: 22px;
  margin: 12px 16px;
  color: var(--s-color-on-surface-variant, #40484C);
}
::slotted(s-button[slot=action]){
  margin-bottom: 16px;
}
::slotted([slot=headline]+[slot=subhead]){
  background: red;
}
@media (pointer: fine){
  :host([clickable=true][type=filled]:hover),
  :host([clickable=true][type=outlined]:hover){
    box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
  }
  :host([clickable=true]:hover){
    box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
  }
}
`,sh=`
<slot name="start"></slot>
<slot name="image"></slot>
<slot name="headline"></slot>
<slot name="subhead"></slot>
<slot name="text"></slot>
<slot></slot>
<div class="action" part="action">
  <slot name="action"></slot>
</div>
<slot name="end"></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
`;class ih extends Z({style:oh,template:sh,props:rh,setup(t){const n=t.querySelector("slot[name=action]");n.onpointerdown=r=>r.stopPropagation()}}){}ih.define(nh);class vr{constructor(t){et(this,"list",[]);et(this,"select");et(this,"selectValue");et(this,"flag",!1);const{context:n}=t;n.addEventListener(`${n.tagName.toLocaleLowerCase()}:select`,r=>{var s,i;if(r.stopPropagation(),!(r.target instanceof t.class))return;let o;this.flag=!0,r.target.selected=!0,this.list.forEach(a=>{a!==r.target&&(a.selected&&(o=a),a.selected=!1)}),this.select=r.target,this.flag=!1,n.dispatchEvent(new Event("change")),(s=this.onUpdate)==null||s.call(this,o),(i=this.onSelect)==null||i.call(this)}),n.addEventListener(`${n.tagName.toLocaleLowerCase()}:update`,r=>{var s;if(r.stopPropagation(),this.flag||this.list.length===0||!(r.target instanceof t.class))return;this.flag=!0;let o;r.target.selected?(this.select=r.target,this.list.forEach(i=>{i!==r.target&&(i.selected&&(o=i),i.selected=!1)})):delete this.select,this.flag=!1,(s=this.onUpdate)==null||s.call(this,o)}),t.slot.addEventListener("slotchange",()=>{var r,o;this.flag=!0,delete this.select,this.list=t.slot.assignedElements().filter(s=>{if(s instanceof t.class){if(this.selectValue!==void 0)s.value===this.selectValue?(this.select=s,s.selected=!0):s.selected=!1;else{if(!this.select&&s.selected)return this.select=s,!0;this.select&&(s.selected=!1)}return!0}}),this.flag=!1,(r=this.onSlotChange)==null||r.call(this),(o=this.onUpdate)==null||o.call(this)})}get value(){var t;return((t=this.list[this.list.indexOf(this.select)])==null?void 0:t.value)??""}set value(t){var n;this.selectValue=t,this.list.length!==0&&(this.flag=!0,this.list.forEach(r=>{if(r.value===t){r.selected=!0,this.select=r;return}r.selected=!1}),(n=this.onUpdate)==null||n.call(this),this.flag=!1)}get selectedIndex(){return this.list.indexOf(this.select)}}const Zr="s-carousel",ah=ae({$value:"",$autoplay:!1,$duration:4e3}),lh=`
:host{
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  aspect-ratio: 2;
  -webkit-aspect-ratio: 2;
}
.container{
  display: flex;
  justify-content: flex-start;
  height: 100%;
  min-width: 100%;
  transition: transform var(--s-motion-duration-long4, 600ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
}
.track{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  padding: 12px 0;
}
.track .indicator{
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: white;
  opacity: .3;
  flex-shrink: 0;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
.track .indicator.checked{
  opacity: 1;
}
`,ch=`
<div class="container" part="container">
  <slot></slot>
</div>
<div class="track"></div>
`;class Zl extends Z({style:lh,template:ch,props:ah,setup(t){const n=t.querySelector(".container"),r=t.querySelector(".track"),o=t.querySelector("slot"),s=new vr({context:this,class:Kl,slot:o});let i=-1;s.onUpdate=()=>{r.childNodes.forEach(d=>d.classList.remove("checked")),n.style.transform=`translateX(${-s.selectedIndex*100}%)`,s.selectedIndex!==-1&&(r.childNodes[s.selectedIndex].classList.add("checked"),a())};const a=()=>{!this.autoplay||s.list.length===0||!this.isConnected||(c(),i=setTimeout(()=>{let d=s.selectedIndex+1;d>=s.list.length&&(d=0),s.list[d].selected=!0,this.dispatchEvent(new Event("change"))},this.duration))},c=()=>clearInterval(i);return s.onSlotChange=()=>{r.innerHTML="";const d=document.createDocumentFragment();s.list.forEach(l=>{const u=document.createElement("div");u.className="indicator",u.addEventListener("click",()=>l.dispatchEvent(new Event(`${Zr}:select`,{bubbles:!0}))),d.appendChild(u)}),r.appendChild(d)},n.onpointerdown=d=>{if(s.list.length<=1)return;c();const l=d.pageX,u=d.pageY,f=n.offsetWidth,h=s.list[s.selectedIndex-1],p=s.list[s.selectedIndex+1],b={now:0,left:0,next:void 0},y=A=>{const R=A instanceof TouchEvent?A.touches[0]:A,q=R.pageX-l,J=R.pageY-u;if(A instanceof TouchEvent&&Math.abs(q)<Math.abs(J)&&!b.next)return w();if(b.left=q,b.now===0&&(b.now=Date.now()),h&&(b.left=Math.min(b.left,f)),p&&(b.left=Math.max(b.left,f*-1)),(!h&&b.left>0||!p&&b.left<0)&&(b.left=b.left*.2),b.left<0&&p||b.left>0&&h){const te=Math.abs(b.left)/f*.05;s.select.style.transition="none",s.select.style.transform=`scale(${.05-te+.95})`,b.next=b.left<0?p:h,b.next.style.transition="none",b.next.style.transform=`scale(${te+.95})`}n.style.transition="none",n.style.pointerEvents="none",n.style.transform=`translateX(calc(${-s.selectedIndex*100}% + ${b.left}px))`,A.cancelable&&A.preventDefault()},w=()=>{var q,J,te;document.removeEventListener(E.up,w),document.removeEventListener(E.move,y),n.style.removeProperty("pointer-events"),n.style.removeProperty("transition"),s.select.style.removeProperty("transition"),s.select.style.removeProperty("transform"),(q=b.next)==null||q.style.removeProperty("transition"),(J=b.next)==null||J.style.removeProperty("transform");const A=s.selectedIndex;if(!(A===0&&b.left>0||A===s.list.length-1&&b.left<0)){const me=Date.now()-b.now>300?f/2:20;if(Math.abs(b.left)>me){(te=b.next)==null||te.dispatchEvent(new Event(`${Zr}:select`,{bubbles:!0}));return}}n.style.transform=`translateX(${-s.selectedIndex*100}%)`,a()},E={move:ut.pointerCoarse.matches?"touchmove":"pointermove",up:ut.pointerCoarse.matches?"touchend":"pointerup"};document.addEventListener(E.move,y,{passive:!1}),document.addEventListener(E.up,w)},{expose:{get options(){return s.list},get selectedIndex(){return s.selectedIndex},togglePrevious:()=>{const d=s.list[s.selectedIndex-1];d&&(d.selected=!0)},toggleNext:()=>{const d=s.list[s.selectedIndex+1];d&&(d.selected=!0)}},onMounted:a,onUnmounted:c,value:{get:()=>s.value,set:d=>{s.value=d,a()}},autoplay:a}}}){}const dh="s-carousel-item",uh=ae({selected:!1,$value:""}),fh=`
:host{
  user-drag: none;
  -webkit-user-drag: none;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: var(--s-color-surface-container-high, #E7E8EA);
  transform: scale(.95);
  transition: transform var(--s-motion-duration-long4, 600ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  background-repeat: round;
}
:host([selected=true]){
  transform: scale(1);
}
`,ph="<slot></slot>";class Kl extends Z({style:fh,template:ph,props:uh,setup(){return{selected:()=>{this.parentNode instanceof Zl&&this.dispatchEvent(new Event(`${Zr}:update`,{bubbles:!0}))}}}}){}Zl.define(Zr);Kl.define(dh);const hh="s-checkbox",gh=ae({disabled:!1,checked:!1,indeterminate:!1}),mh=`
:host{
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  position: relative;
  height: 40px;
  color: var(--s-color-on-surface-variant, #40484C);
}
:host([checked=true]){
  color: var(--s-color-primary, #006782);
}
:host([disabled=true]){
  pointer-events: none;
}
.container{
  position: relative;
  height: 100%;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
:host([disabled=true]) .container{
  color: var(--s-color-on-surface, #191C1E) !important;
  opacity: .38 !important;
}
.unchecked,
.checked,
.indeterminate{
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.checked,
.indeterminate{
  position: absolute;
  transform: scale(.5);
  opacity: 0;
  transition-property: transform, opacity;
  transition-timing-function: var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  transition-duration: var(--s-motion-duration-short4, 200ms);
}
:host([indeterminate=true]) .unchecked{
  opacity: 0;
}
:host([checked=true]:not([indeterminate=true])) .checked,
:host([indeterminate=true]) .indeterminate{
  opacity: 1;
  transform: scale(1);
}
.ripple{
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  height: 100%;
  width: auto;
  border-radius: 50%;
}
svg,
::slotted(:is([slot=checked], [slot=unchecked], [slot=indeterminate])){
  color: currentColor;
  fill: currentColor;
  width: 60%;
  height: 60%;
}
`,bh=`
<div class="container" part="container">
  <slot class="unchecked" name="unchecked">
    <svg viewBox="0 -960 960 960">
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"></path>
    </svg>
  </slot>
  <slot class="checked" name="checked">
    <svg viewBox="0 -960 960 960">
      <path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"></path>
    </svg>
  </slot>
  <slot class="indeterminate" name="indeterminate">
    <svg viewBox="0 -960 960 960">
      <path d="M280-440h400v-80H280v80Zm-80 320q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"></path>
    </svg>
  </slot>
</div>
<slot></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
`;class vh extends Z({style:mh,template:bh,props:gh,setup(){this.addEventListener("click",()=>{this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked,this.dispatchEvent(new Event("change"))})}}){}vh.define(hh);const xh="s-chip",yh=ae({type:["filled","outlined"],$value:"",checked:!1,disabled:!1,clickable:!1}),wh=`
:host{
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  padding: 0 16px;
  height: 32px;
  border-radius: 16px;
  box-sizing: border-box;
  font-size: .8125rem;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  background: var(--s-color-surface-container-high, #E7E8EA);
  color: var(--s-color-on-surface, #191C1E);
  transition-property: color, background-color, box-shadow;
  transition-timing-function: var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  transition-duration: var(--s-motion-duration-short4, 200ms);
}
:host([disabled=true]){
  pointer-events: none !important;
  border-color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent) !important;
  background: color-mix(in srgb, var(--s-color-surface-container-high, #E7E8EA) 38%, transparent) !important;
}
:host([checked=true]){
  border: none;
  background: var(--s-color-secondary-container, #CFE6F1);
  color: var(--s-color-primary, #006782);
}
:host([type=outlined]){
  background: none;
  border: solid 1px var(--s-color-outline-variant, #C0C8CC);
}
:host([type=outlined][checked=true]){
  border-color: var(--s-color-primary, #006782);
}
::slotted(:is(s-icon, svg)){
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  fill: currentColor;
  color: currentColor;
}
::slotted(:is(s-icon[slot=start], svg[slot=start])){
  margin-left: -8px;
  margin-right: 8px;
}
::slotted(:is(s-icon[slot=end], svg[slot=end])){
  margin-left: 8px;
  margin-right: -8px;
}
::slotted(s-avatar){
  width: 24px;
  height: 24px;
  font-size: .75rem;
}
::slotted(s-avatar[slot=start]){
  margin-left: -12px;
  margin-right: 8px;
}
::slotted(s-icon-button[slot=action]){
  margin: 0 -12px 0 8px;
  width: 24px;
  height: 24px;
  padding: 3px;
  color: currentColor;
}
.text{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}
:host(:not([clickable=true])) .ripple{
  display: none;
}
@supports not (color: color-mix()){
  :host([disabled=true]){
    background: var(--s-color-surface-container-high, #E7E8EA) !important;
    color: var(--s-color-outline, #70787D) !important;
    border-color: var(--s-color-surface-container-highest, #E1E3E4) !important;
  }
}
`,Eh=`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<slot name="action"></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
`;class kh extends Z({style:wh,template:Eh,props:yh,setup(t){const n=t.querySelector("slot[name=action]");n.onclick=r=>r.stopPropagation(),n.onpointerdown=r=>r.stopPropagation(),this.addEventListener("click",()=>{this.clickable&&(this.checked=!this.checked,this.dispatchEvent(new Event("change")))})}}){}kh.define(xh);const $h="s-circular-progress",Sh=ae({indeterminate:!1,animated:!1,$max:100,$value:0}),_h=`
:host{
  display: inline-block;
  vertical-align: middle;
  position: relative;
  width: 48px;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  color: var(--s-color-primary, #006782);
}
:host([animated=true]) .known .block{
  transition-duration: var(--s-motion-duration-medium4, 400ms);
  transition-timing-function: var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  transition-name: stroke-dashoffset, transform;
}
:host([indeterminate=true]) .known,
.unknown{
  display: none;
}
:host([indeterminate=true]) .unknown,
.known{
  display: block;
}
.container{
  width: 100%;
  height: 100%;
  border-radius: inherit;
  position: relative;
}
svg{
  height: inherit;
  width: inherit;
  stroke: currentColor;
}
circle{
  stroke-linecap: round;
  fill: none;
  stroke-dasharray: var(--dasharray);
}
.track{
  stroke: var(--s-color-secondary-container, #CFE6F1);
}
.unknown{
  animation: rotate 1568ms linear infinite;
}
@keyframes stroke{
  0% { stroke-dashoffset: var(--dasharray) }
  50% { stroke-dashoffset: calc(var(--dasharray) / 4) }
  100% { stroke-dashoffset: var(--dasharray) }
}
@keyframes stroke-rotate{
  0% { transform: rotate(0deg) }
  12.5% { transform: rotate(0deg) }
  25% {transform: rotate(270deg)}
  37.5% {transform: rotate(270deg)}
  50% {transform: rotate(540deg)}
  62.5% {transform: rotate(540deg)}
  75% {transform: rotate(810deg)}
  87.5% {transform: rotate(810deg)}
  100% { transform: rotate(1080deg) }
  100% { transform: rotate(1080deg) }
}
@keyframes rotate{
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}
`,st=48,pn=4,hn=(st-pn)*Math.PI,Ch=`
<div class="container known">
  <svg viewBox="0 0 48 48" style="transform: rotate(-90deg);--dasharray: ${hn}px;">
    <circle class="track block" cx="${st/2}" cy="${st/2}" r="${(st-pn)/2}" style="stroke-width: ${pn}px" />
    <circle class="indicator block" cx="${st/2}" cy="${st/2}" r="${(st-pn)/2}" style="stroke-dashoffset: ${hn}px;stroke-width: ${pn}px" />
  </svg>
</div>
<div class="container unknown">
  <svg viewBox="0 0 48 48" style="animation: stroke-rotate 5.2s ease-in-out infinite;--dasharray: ${hn}px;">
    <circle transform="rotate(-90, ${st/2}, ${st/2})" cx="${st/2}" cy="${st/2}" r=" ${(st-pn)/2}" style="animation: stroke 1.3s ease-in-out infinite;stroke-width: ${pn}px"></circle>
  </svg>
</div>
`;class Th extends Z({style:_h,template:Ch,props:Sh,setup(t){const n=t.querySelector(".known .track"),r=t.querySelector(".known .indicator"),o=()=>{const s=Math.min(this.value,this.max)/this.max*100,i=hn-hn*(s/100),a=s/100*360;n.style.strokeDashoffset=`${s===0?0:Math.min(hn+16-i,hn)}px`,n.setAttribute("transform",`rotate(${a+20}, ${st/2}, ${st/2})`),r.style.strokeDashoffset=`${i}px`};return{max:o,value:o}}}){}Th.define($h);const Kr=(e,t="yyyy-MM-dd")=>{typeof e=="string"&&(e=new Date(e));const n=e.getFullYear(),r=e.getMonth()+1,o=e.getDate();return t.replace("yyyy",n.toString()).replace("MM",r.toString().padStart(2,"0")).replace("dd",o.toString().padStart(2,"0"))};class Ah{constructor(t){et(this,"list");et(this,"locale",navigator.language);et(this,"updates",new Map);this.list=t}getItem(t){if(t=t||this.locale,t in this.list)return this.list[t];const[n]=t.split("-");return n in this.list?this.list[n]:this.list.zh}addItem(t,n){if(this.list[t])throw new Error(`Locale ${t} already exists`);this.list[t]=n}setLocale(t){this.locale=t??navigator.language,this.updates.forEach(n=>n())}}const Wt=new Ah({});Wt.list={zh:{display:e=>`${e.getFullYear()}年${e.getMonth()+1}月${e.getDate()}日 星期${Wt.list.zh.displayWeeks[e.getDay()]}`,displayMonth:e=>`${e.getFullYear()}年`,displayWeeks:["日","一","二","三","四","五","六"]},en:{display:e=>`${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()]}, Jan ${e.getDate()}`,displayMonth:e=>`${["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]} ${e.getFullYear()}`,displayWeeks:["S","M","T","W","T","F","S"]}};const Rh="s-date",Oh=ae({$value:"",$locale:"",$max:"2099-12-31",$min:"1900-01-01"}),Mh=`
:host{
  display: inline-block;
  vertical-align: middle;
  border-radius: 8px;
  font-size: .875rem;
  max-width: 360px;
  overflow: hidden;
  box-sizing: border-box;
  border: solid 1px var(--s-color-surface-variant, #DCE4E8);
  background: var(--s-color-surface-container-low, #F2F4F5);
  color: var(--s-color-on-surface, #191C1E);
}
.button,
.icon-button{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  box-sizing: border-box;
  font-size: .8125rem;
  color: var(--s-color-on-surface-variant, #40484C);
}
.icon-button{
  width: 36px;
  border-radius: 50%;
}
.button{
  border-radius: 18px;
  height: 36px;
  padding: 0 12px;
}
svg{
  width: 24px;
  fill: currentColor;
  box-sizing: border-box;
}
.header{
  padding: 24px 24px 16px 24px;
  font-size: 1.25rem;
  border-bottom: solid 1px var(--s-color-surface-variant, #DCE4E8);
  background: var(--s-color-surface-container, #ECEEF0);
}
.container{
  display: flex;
  flex-direction: column;
  position: relative;
}
.action{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
}
.action>.year>svg{
  margin: 0 -8px 0 2px;
  padding: 1px;
}
.action>.toggle{
  display: flex;
}
.years{
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  gap: 4px;
  column-gap: 6px;
  padding: 0 16px 16px 16px;
  margin-top: -12px;
  max-height: 280px;
  counter-reset: year-counter 1899;
}
.years>.item{
  counter-increment: year-counter;
  flex-grow: 1;
}
.years>.item::before{
  content: counter(year-counter);
}
.weeks{
  display: flex;
  padding: 0 16px;
  font-size: .8125rem;
  color: var(--s-color-outline, #70787D);
}
.weeks>.item,
.days>.item{
  width: calc(100% / 7);
  display: inline-flex;
  justify-content: center;
}
.days{
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
}
.days>.overflow~.item{
  display: none;
}
.days>.item>s-ripple{
  margin: 2px;
}
.days>.checked>s-ripple,
.years>.checked{
  pointer-events: none;
  background: var(--s-color-primary, #006782);
  color: var(--s-color-on-primary, #ffffff);
}
.container:not(.show-years) .years,
.show-years :is(.weeks, .days, .action>.toggle){
  display: none;
}
`,Nn={years:[],weeks:[],days:[]};for(let e=0;e<200;e++)e<7&&Nn.weeks.push('<div class="item"></div>'),e<31&&Nn.days.push(`<div class="item"><s-ripple class="icon-button">${e+1}</s-ripple></div>`),Nn.years.push('<s-ripple class="button item"></s-ripple>');const Nh=`
<div class="header" part="header">
  <slot name="headline"></slot>
  <span></span>
</div>
<div class="container" part="container">
  <div class="action">
    <s-ripple class="button year" slot="trigger">
      <span></span>
      <svg viewBox="0 -960 960 960">
        <path d="M480-360 280-560h400L480-360Z"></path>
      </svg>
    </s-ripple>
    <div class="toggle">
      <s-ripple class="icon-button prev" part="prev-button">
        <svg viewBox="0 -960 960 960">
          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"></path>
        </svg>
      </s-ripple>
      <s-ripple class="icon-button next" part="next-button">
        <svg viewBox="0 -960 960 960">
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"></path>
        </svg>
      </s-ripple>
    </div>
  </div>
  <s-scroll-view class="years">${Nn.years.join("")}</s-scroll-view>
  <div class="weeks">${Nn.weeks.join("")}</div>
  <div class="days">${Nn.days.join("")}</div>
</div>
`;class Lh{constructor(t,n,r){et(this,"yearSelect");et(this,"daySelect");et(this,"dayOverflow");et(this,"date");et(this,"min");et(this,"max");this.date=typeof t=="string"?new Date(t):t,this.min=new Date(n),this.max=new Date(r)}}const aa=(e,t)=>{const n=new Date(e,t+1,1);return n.setDate(n.getDate()-1),n.getDate()},Ph=(e,t)=>{Wt.addItem(e,t)},Fh=e=>{Wt.setLocale(e)};class Dh extends Z({style:Mh,template:Nh,props:Oh,methods:{addLocale:Ph,setLocale:Fh},setup(t){const n=t.querySelector(".container"),r=t.querySelector(".header>span"),o=t.querySelector(".action>.year"),s=t.querySelector(".action>.toggle>.prev"),i=t.querySelector(".action>.toggle>.next"),a=t.querySelector(".years"),c=t.querySelector(".weeks"),d=t.querySelector(".days"),l=new Lh(this.value||new Date,this.min,this.max),u=()=>{const w=Wt.getItem(this.locale).display;r.textContent=w(l.date);const E=Wt.getItem(this.locale).displayMonth;o.children[0].textContent=E(l.date)},f=()=>{const w=Wt.getItem(this.locale).displayWeeks;c.childNodes.forEach((E,A)=>E.textContent=w[A])},h=()=>{var A,R,q;const w=new Date(l.date.getFullYear(),l.date.getMonth(),1).getDay();d.children[0].setAttribute("style",`margin-left: calc((100% / 7) * ${w})`);const E=new Date(l.date.getFullYear(),l.date.getMonth()+1,0).getDate();(A=l.dayOverflow)==null||A.classList.remove("overflow"),l.dayOverflow=d.children[E-1],l.dayOverflow.classList.add("overflow"),(R=l.yearSelect)==null||R.classList.remove("checked"),l.yearSelect=a.children[l.date.getFullYear()-l.min.getFullYear()],l.yearSelect.classList.add("checked"),(q=l.daySelect)==null||q.classList.remove("checked"),l.daySelect=d.children[l.date.getDate()-1],l.daySelect.classList.add("checked"),n.style.removeProperty("height")},p=()=>{const w=l.max.getFullYear()-l.min.getFullYear();a.innerHTML="",a.style.counterReset=`year-counter ${l.min.getFullYear()-1}`;const E=document.createDocumentFragment();for(let A=0;A<=w;A++){const R=new Mn;R.classList.add("button","item"),E.appendChild(R)}a.appendChild(E),h()},b=(w,E,A)=>{this.value=Kr(new Date(w,E,A)),this.dispatchEvent(new Event("change"))};o.onclick=()=>{const w=n.offsetHeight;if(n.classList.toggle("show-years"),n.classList.contains("show-years")){n.style.height=`${w}px`,l.yearSelect&&a.scrollTo({top:l.yearSelect.offsetTop-a.offsetHeight/2+l.yearSelect.offsetHeight/2});return}},s.onclick=()=>{const w=aa(l.date.getFullYear(),l.date.getMonth()-1),E=Math.min(l.date.getDate(),w);b(l.date.getFullYear(),l.date.getMonth()-1,E)},i.onclick=()=>{const w=aa(l.date.getFullYear(),l.date.getMonth()+1),E=Math.min(l.date.getDate(),w);b(l.date.getFullYear(),l.date.getMonth()+1,E)},a.onclick=w=>{if(!(w.target instanceof Mn))return;n.classList.remove("show-years");const E=Array.from(a.children).indexOf(w.target)+l.min.getFullYear();b(E,l.date.getMonth(),l.date.getDate())},d.onclick=w=>{if(!(w.target instanceof Mn))return;const E=Array.from(d.children).indexOf(w.target.parentElement)+1;b(l.date.getFullYear(),l.date.getMonth(),E)};const y=()=>{u(),f()};return h(),y(),{onMounted:()=>Wt.updates.set(this,y),onUnmounted:()=>Wt.updates.delete(this),min:w=>{const E=new Date(w);if(isNaN(E.getTime())||E.getTime()>l.date.getTime())throw Error("invalid min date");l.min=E,p()},max:w=>{const E=new Date(w);if(isNaN(E.getTime())||E.getTime()<l.date.getTime())throw Error("invalid max date");l.max=E,p()},value:{get:()=>Kr(l.date),set:w=>{const E=new Date(w);if(isNaN(E.getTime())||E.getTime()<l.min.getTime()||E.getTime()>l.max.getTime())throw Error("invalid date");l.date=E,u(),h()}},locale:y}}}){}Dh.define(Rh);const Ih="s-date-picker",ds=ae({$value:"",$min:"",$max:"",$label:"",$positiveText:"确定",$negativeText:"取消",$format:"yyyy-MM-dd",$locale:""}),Bh=`
:host{
  display: inline-block;
  vertical-align: middle;
  font-size: .875rem;
  --date-picker-border-radius: 4px;
  --date-picker-border-color: var(--s-color-outline, #70787D);
  --date-picker-border-width: 1px;
  --date-picker-padding: 16px;
  --date-picker-height: 48px;
}
s-dialog{
  display: block;
}
.field{
  --field-border-radius: var(--date-picker-border-radius);
  --field-border-color: var(--date-picker-border-color);
  --field-border-width: var(--date-picker-border-width);
  --field-padding: var(--date-picker-padding);
  height: var(--date-picker-height);
  position: relative;
  cursor: pointer;
}
.view{
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
  padding: 0 var(--date-picker-padding);
}
svg{
  width: 24px;
  height: 24px;
  padding: 2px;
  box-sizing: border-box;
  flex-shrink: 0;
  margin-left: min(0px, calc((var(--date-picker-padding) * -1) + 12px));
  margin-right: max(0px, calc(var(--date-picker-padding) - 4px));
  fill: var(--s-color-on-surface-variant, #40484C);
}
.ripple{
  border-radius: var(--date-picker-border-radius);
}
.date{
  border: none;
  width: 360px;
  border-radius: 0;
}
.positive,
.negative{
  border-radius: 20px;
}
`,qh=`
<s-dialog part="dialog">
  <slot name="trigger" slot="trigger">
    <s-field class="field" fixed="false" part="field">
      <div class="label" part="label" slot="label"></div>
      <div class="view"></div>
      <svg viewBox="0 -960 960 960" slot="end">
        <path d="M320-400q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm160 0q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm160 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"></path>
      </svg>
      <s-ripple slot="custom" class="ripple" attached="true"></s-ripple>
    </s-field>
  </slot>
  <s-date class="date" part="date"></s-date>
  <s-ripple class="negative" slot="action" part="negative">${ds.negativeText}</s-ripple>
  <s-ripple class="positive" slot="action" part="positive">${ds.positiveText}</s-ripple>
</s-dialog>
`;class zh extends Z({style:Bh,template:qh,props:ds,setup(t){const n=t.querySelector("s-dialog"),r=t.querySelector("s-date"),o=t.querySelector(".negative"),s=t.querySelector(".positive"),i=t.querySelector("s-field"),a=t.querySelector(".label"),c=t.querySelector(".view"),d={date:""};return n.addEventListener("show",()=>{i.fixed=!0,i.focused=!0,d.date||(c.textContent=this.label,c.style.opacity="0")}),n.onclose=()=>{i.focused=!1,d.date||(i.fixed=!1)},s.onclick=()=>{this.value=r.value,c.style.removeProperty("opacity"),this.dispatchEvent(new Event("change"))},{value:{get:()=>d.date,set:l=>{if(d.date=l,l===""){r.value=Kr(new Date),i.fixed=!1,c.textContent="";return}i.fixed=!0,c.textContent=Kr(l,this.format),r.value=l}},locale:{get:()=>r.locale,set:l=>r.locale=l},min:{get:()=>r.min,set:l=>r.min=l},max:{get:()=>r.max,set:l=>r.max=l},label:l=>a.textContent=l,positiveText:l=>s.textContent=l,negativeText:l=>o.textContent=l}}}){}zh.define(Ih);const Hh="s-scroll-view",Uh=`
:host{
  display: block;
  overflow: auto;
}
@media (pointer: fine){
  :host::-webkit-scrollbar{
    background: transparent;
    width: 6px;
    height: 6px;
  }
  :host::-webkit-scrollbar-thumb{
    background: var(--s-color-outline-variant, #C0C8CC);
    border-radius: 3px;
  }
  @supports not selector(::-webkit-scrollbar){
    :host{
      scrollbar-color: var(--s-color-outline-variant, #C0C8CC) transparent;
    }
  }
}
`,jh="<slot></slot>";class Wh extends Z({style:Uh,template:jh}){}Wh.define(Hh);const Vh="s-dialog",Zh=ae({showed:!1,size:["standard","full"]}),Kh=go({show:CustomEvent,showed:Event,close:CustomEvent,closed:Event}),Gh=`
:host{
  display: inline-block;
  vertical-align: middle;
}
dialog{
  inset: 0;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  padding: 0;
  max-width: none;
  max-height: none;
  outline: none;
  color: inherit;
}
dialog::backdrop{
  background: none;
}
.wrapper{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  pointer-events: none;
}
.scrim{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  backdrop-filter: saturate(180%) blur(2px);
}
.scrim::before{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  opacity: .75;
  background: var(--s-color-scrim, #000000);
}
dialog.show .scrim{
  opacity: 1;
}
.container,
::slotted([slot=custom]){
  max-width: calc(100% - 48px);
  max-height: calc(100% - 48px);
  pointer-events: auto;
  position: relative;
  border-radius: 28px;
  display: flex;
  outline: none;
  flex-direction: column;
  overflow: hidden;
  transition-timing-function: ease-out;
  box-shadow: var(--s-elevation-level5, 0 10px 14px -6px rgba(0, 0, 0, .2), 0 22px 35px 3px rgba(0, 0, 0, .14), 0 8px 42px 7px rgba(0, 0, 0, .12));
  background: var(--s-color-surface-container-high, #E7E8EA);
}
:host([size=full]) .container{
  width: 100%;
  height: 100%;
  border-radius: 0;
  max-width: none;
  max-height: none;
}
:host([size=full]) ::slotted(:is([slot=text],:not([slot]))){
  max-width: 100%;
  width: auto;
}
::slotted([slot=headline]){
  padding: 24px 24px 0 24px;
  font-size: 1.5rem;
  line-height: 22px;
  font-weight: 600;
  color: var(--s-color-on-surface, #191C1E);
  flex-shrink: 0;
}
.text{
  user-select: text;
  -webkit-user-select: text;
  flex-grow: 1;
}
::slotted([slot=text]){
  margin: 16px 24px;
  max-width: calc(100% - 48px);
  line-height: 22px;
}
::slotted(:is(:not([slot]), [slot=text])){
  width: 375px;
}
::slotted(:not([slot])){
  max-width: 100%;
}
.action{
  display: flex;
  justify-content: flex-end;
  padding: 0 14px;
  flex-shrink: 0;
}
::slotted([slot=action]){
  min-width: 72px;
  margin: 16px 2px;
  display: inline-flex;
  align-items: center;
  padding: 0 24px;
  color: var(--s-color-primary, #006782);
  box-sizing: border-box;
  height: 40px;
  font-size: .875rem;
  cursor: pointer;
}
`,Xh=`
<slot name="trigger"></slot>
<dialog part="popup">
  <div class="scrim" part="scrim"></div>
  <slot name="custom" class="wrapper" part="wrapper">
    <div class="container" part="container">
      <slot name="headline"></slot>
      <s-scroll-view class="text" part="view">
        <slot></slot>
        <slot name="text"></slot>
      </s-scroll-view>
      <div class="action" part="action">
        <slot name="action"></slot>
      </div>
    </div>
  </slot>
</dialog>
`,Yh=e=>{let t=document.body;const n=new Gl,r=document.body.firstElementChild;if(r&&r.tagName==="S-PAGE"&&(t=r),typeof e=="string"){const o=document.createElement("div");o.slot="text",o.textContent=e,n.appendChild(o)}else{if(e.root&&(t=e.root),e.headline){const s=document.createElement("div");s.slot="headline",s.textContent=e.headline,n.appendChild(s)}if(e.text){const s=document.createElement("div");s.slot="text",s.textContent=e.text,n.appendChild(s)}e.view&&(typeof e.view=="function"?e.view(n):n.appendChild(e.view));const o=e.actions??[];for(const s of Array.isArray(o)?o:[o]){const i=document.createElement("s-button");i.slot="action",i.type="text",i.textContent=s.text,s.click&&(i.onclick=s.click),n.appendChild(i)}}return n.showed=!0,n.addEventListener("closed",()=>t.removeChild(n)),t.appendChild(n),n};class Gl extends Z({style:Gh,template:Xh,props:Zh,events:Kh,methods:{builder:Yh},setup(t){const n=t.querySelector("dialog"),r=t.querySelector(".scrim"),o=t.querySelector(".wrapper"),s=getComputedStyle(this),i=()=>{const l=s.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",u=s.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:l,duration:_t(u)}};t.querySelector("slot[name=trigger]").onclick=()=>{if(this.showed||!this.dispatchEvent(new CustomEvent("show",{cancelable:!0,detail:{source:"TRIGGER"}})))return console.log("拒绝");this.showed=!0};const a=l=>{!this.showed||!this.dispatchEvent(new CustomEvent("close",{cancelable:!0,detail:{source:l}}))||(this.showed=!1)};t.querySelector(".scrim").onclick=()=>a("SCRIM"),t.querySelector("slot[name=action]").onclick=()=>a("ACTION");const c=()=>{if(!this.isConnected||n.open)return;const l=i();n.showModal(),n.classList.add("show"),r.animate({opacity:[0,1]},l),o.animate({transform:["scale(.9)","scale(1)"],opacity:[0,1]},l).addEventListener("finish",()=>this.dispatchEvent(new Event("showed")))},d=()=>{if(!this.isConnected||!n.open)return;const l=i();r.animate({opacity:[1,0]},l),o.animate({transform:["scale(1)","scale(.9)"],opacity:[1,0]},l).addEventListener("finish",()=>{n.close(),n.classList.remove("show"),this.dispatchEvent(new Event("closed"))})};return{onMounted:()=>this.showed&&!n.open&&c(),showed:l=>l?c():d()}}}){}Gl.define(Vh);const Jh="s-divider",Qh=`
:host{
  display: flex;
  align-items: center;
  margin: 0 16px;
  gap: 8px;
  font-size: .75rem;
  color: var(--s-color-outline, #70787D);
 }
:host::before,
:host::after{
  content: '';
  flex-grow: 1;
  border-top: solid 1px var(--s-color-outline-variant, #C0C8CC);
}
:host(:empty){
  gap: 0;
}
`,eg="<slot></slot>";class tg extends Z({style:Qh,template:eg}){}tg.define(Jh);const ng="s-drawer",rg=`
:host{
  display: flex;
  height: 100%;
  overflow: hidden;
  position: relative;
  container-name: s-drawer;
  container-type: inline-size;
}
.start,
.end{
  flex-shrink: 0;
  height: 100%;
  display: none;
  overflow: hidden;
}
.start{
  order: -1;
}
.scrim{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  backdrop-filter: saturate(180%) blur(2px);
  pointer-events: none;
}
.scrim::before{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  opacity: .75;
  background: var(--s-color-scrim, #000000);
}
.view{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 0;
  height: 100%;
  position: relative;
}
::slotted(:is([slot=start], [slot=end])){
  width: 280px;
  border-width: 1px;
  height: 100%;
  box-sizing: border-box;
  pointer-events: auto;
  position: relative;
  background: var(--s-color-surface-container-low, #F2F4F5);
  border-color: var(--s-color-surface-variant, #DCE4E8);
}
::slotted([slot=start]){
  border-right-style: solid;
}
::slotted([slot=end]){
  border-left-style: solid;
}
::slotted(s-scroll-view:not([slot])){
  flex-grow: 1;
}
.start.show,
.end.show{
  display: block;
}
.scrim.s-laptop{
  display: block;
  z-index: 3;
}
.scrim.s-laptop.show-laptop{
  opacity: 1;
  pointer-events: auto;
}
.start.s-laptop,
.end.s-laptop{
  position: absolute;
  z-index: 3;
  max-width: 75%;
  display: none;
}
.end.s-laptop{
  left: auto;
  right: 0;
}
.start.s-laptop.show,
.end.s-laptop.show{
  display: none;
}
.start.s-laptop.show-laptop,
.end.s-laptop.show-laptop{
  display: block;
}
.s-laptop ::slotted(:is([slot=start], [slot=end])){
  border-left-style: none;
  border-right-style: none;
  box-shadow: var(--s-elevation-level-3, 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12));
}
@container s-drawer (max-width: 1024px){
  .scrim{
    display: block;
    z-index: 3;
  }
  .scrim.show-laptop{
    opacity: 1;
    pointer-events: auto;
  }
  .start,
  .end{
    position: absolute;
    z-index: 3;
    max-width: 75%;
    display: none;
  }
  .end{
    left: auto;
    right: 0;
  }
  .start.show,
  .end.show{
    display: none;
  }
  .start.show-laptop,
  .end.show-laptop{
    display: block;
  }
  ::slotted(:is([slot=start], [slot=end])){
    border-left-style: none;
    border-right-style: none;
    box-shadow: var(--s-elevation-level-3, 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12));
  }
}
`,og=`
<slot class="view" part="view"></slot>
<div class="scrim" part="scrim show"></div>
<slot name="start" class="start show" part="start"></slot>
<slot name="end" class="end show" part="end"></slot>
`;class sg extends Z({style:rg,template:og,setup(t){const n=t.querySelector(".scrim"),r={start:t.querySelector(".start"),end:t.querySelector(".end")},o=getComputedStyle(this),s=()=>{const f=o.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",h=o.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:f,duration:_t(h)}},i=(f="start")=>r[f],a=f=>f??this.offsetWidth<=1024?"show-laptop":"show",c=(f="start")=>({start:-1,end:1})[f],d=(f,h)=>{const p=i(f),b=a(h);if(p.classList.contains(b))return;const y=c(f),w=s();p.classList.add(b),n.classList.add(b);const E=this.offsetWidth<=1024?{transform:[`translateX(${p.offsetWidth*y}px)`,"translateX(0)"]}:{width:["0",p.offsetWidth+"px"]};this.offsetWidth<=1024&&n.animate({opacity:[0,1]},w),p.animate(E,w)},l=(f,h)=>{const p=i(f),b=a(h);if(!p.classList.contains(b))return;const y=c(f),w=s(),E={...this.offsetWidth<=1024?{transform:["translateX(0)",`translateX(${p.offsetWidth*y}px)`]}:{width:[p.offsetWidth+"px","0px"]}};p.style.display="block",p.animate(E,w).finished.then(()=>p.style.removeProperty("display")),this.offsetWidth<=1024&&n.animate({opacity:[1,0]},w),p.classList.remove(b),n.classList.remove(b)},u=(f,h)=>{const p=i(f),b=a(h);p.classList.contains(b)?l(f,h):d(f,h)};return n.addEventListener("click",()=>{l("start",!0),l("end",!0)}),ho.CSSContainer||new ResizeObserver(()=>{n.classList.toggle("s-laptop",this.offsetWidth<=1024),r.start.classList.toggle("s-laptop",this.offsetWidth<=1024),r.end.classList.toggle("s-laptop",this.offsetWidth<=1024)}).observe(this),{expose:{show:d,close:l,toggle:u}}}}){}sg.define(ng);const ig="s-empty",ag=`
:host{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 48px 16px;
  gap: 12px;
  font-size: .75rem;
  border-radius: 4px;
  box-sizing: border-box;
  color: var(--s-color-outline, #70787D);
}
.shadow{
  fill: var(--s-color-surface-container-high, #E7E8EA);
}
.box{
  fill: var(--s-color-surface-container-highest, #E1E3E4);
}
.border{
  stroke: var(--s-color-outline, #70787D);
}
::slotted(:is(svg, s-icon)){
  color: currentColor;
  fill: currentColor;
  width: 40px;
}
`,lg=`
<slot name="icon">
  <svg width="64" height="41" viewBox="0 0 64 41">
    <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
      <ellipse cx="32" cy="33" rx="32" ry="7" class="shadow"></ellipse>
      <g fill-rule="nonzero" class="border">
        <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
        <path class="box" d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"></path>
      </g>
    </g>
  </svg>
</slot>
<slot></slot>`;class cg extends Z({style:ag,template:lg}){}cg.define(ig);const dg="s-fab",ug=ae({hidden:!1,disabled:!1}),fg=`
:host{
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  min-height: 48px;
  font-size: .875rem;
  border-radius: 28px;
  font-weight: 500;
  white-space: nowrap;
  text-transform: capitalize;
  padding: 0 24px;
  transition-property: box-shadow, transform;
  transition-duration: var(--s-motion-duration-short4, 200ms);
  transition-timing-function: var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  box-shadow: var(--s-elevation-level3, 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12));
  background: var(--s-color-primary-container, #BAEAFF);
  color: var(--s-color-on-primary-container, #004D62);
}
:host([disabled=true]){
  pointer-events: none;
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
  background: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent) !important;
}
:host([hidden=true]){
  transform: scale(0);
  pointer-events: none;
}
::slotted(*){
  flex-shrink: 0;
}
::slotted(:is(svg, s-icon)){
  width: 24px;
  height: 24px;
  fill: currentColor;
  color: currentColor;
}
::slotted(:is(svg, s-icon):not([slot])){
  margin: 16px -8px;
}
::slotted(:is(svg[slot=start], s-icon[slot=start])){
  margin-left: -8px;
  margin-right: 8px;
}
::slotted(:is(svg[slot=end], s-icon[slot=end])){
  margin-left: 8px;
  margin-right: -8px;
}
:host([pressed]){
  box-shadow: var(--s-elevation-level4, 0 8px 10px -5px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12));
}
@media (pointer: fine){
  :host(:hover){
    box-shadow: var(--s-elevation-level4, 0 8px 10px -5px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12));
  }
}
@supports not (color: color-mix()){
  :host([disabled=true]){
    background: var(--s-color-surface-container-high, #E7E8EA) !important;
    color: var(--s-color-outline, #70787D) !important;
  }
}
`,pg=`
<slot name="start"></slot>
<slot></slot>
<slot name="end"></slot>
<s-ripple attached="true" part="ripple"></s-ripple>
`;class hg extends Z({style:fg,template:pg,props:ug}){}hg.define(dg);const gg="s-icon-button",mg=ae({disabled:!1,type:["standard","filled","filled-tonal","outlined"]}),bg=`
:host{
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  color: var(--s-color-on-surface-variant, #40484C);
  position: relative;
  box-sizing: border-box;
}
:host([disabled=true]){
  pointer-events: none !important;
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent) !important;
  background: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
}
:host([type=filled]){
  background: var(--s-color-primary, #006782);
  color: var(--s-color-on-primary, #ffffff);
}
:host([type=filled]) ::slotted([slot=badge]){
  box-shadow: 0 0 0 2px var(--s-color-surface, #F8F9FB);
}
:host([type=filled-tonal]){
  background: var(--s-color-secondary-container, #CFE6F1);
  color: var(--s-color-on-secondary-container, #354A53);
}
:host([type=outlined]){
  border: solid 1px var(--s-color-outline, #70787D)
}
:host([type=outlined][disabled=true]){
  background: none !important;
  border-color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
}
::slotted(:not([slot=badge])){
  color: inherit;
}
::slotted(svg){
  width: 24px;
  height: 24px;
  fill: currentColor;
}
::slotted([slot=badge]){
  position: absolute;
  right: 4px;
  top: 0;
  flex-shrink: 0;
}
@supports not (color: color-mix(in srgb, black, white)){
  :host([disabled=true]){
    background: var(--s-color-surface-container-high, #E7E8EA) !important;
    color: var(--s-color-outline, #70787D) !important;
  }
  :host([type=outlined][disabled=true]){
    border-color: var(--s-color-surface-container-highest, #E1E3E4) !important;
  }
}
`,vg=`
<slot name="start"></slot>
<slot></slot>
<slot name="end"></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
<slot name="badge"></slot>
`;class xg extends Z({style:bg,template:vg,props:mg}){}xg.define(gg);const Kn={none:"",home:"M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z",add:"M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z",search:"M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",menu:"M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z",arrow_back:"m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",arrow_forward:{name:"arrow_back",angle:180},arrow_upward:{name:"arrow_back",angle:90},arrow_downward:{name:"arrow_back",angle:-90},arrow_drop_up:"m280-400 200-200 200 200H280Z",arrow_drop_down:{name:"arrow_drop_up",angle:180},arrow_drop_left:{name:"arrow_drop_up",angle:-90},arrow_drop_right:{name:"arrow_drop_up",angle:90},more_vert:"M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z",more_horiz:{name:"more_vert",angle:90},close:"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",done:"M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z",chevron_up:"M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z",chevron_down:{name:"chevron_up",angle:180},chevron_left:{name:"chevron_up",angle:-90},chevron_right:{name:"chevron_up",angle:90},light_mode:"M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z",dark_mode:"M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z",star:"m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z",favorite:"m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"},yg="s-icon",wg=ae({name:Object.keys(Kn),$src:""}),Eg=`
:host{
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  width: 24px;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  fill: currentColor;
  box-sizing: border-box;
  color: var(--s-color-on-surface-variant, #40484C);
}
svg,
img{
  width: 100%;
  height: 100%;
}
::slotted(*){
  width: 100%;
  height: 100%;
}
`,kg="<slot></slot>";class $g extends Z({style:Eg,template:kg,props:wg,setup(t){const n=t.querySelector("slot"),r=document.createElement("img"),o=(s=Kn.none,i="")=>`<svg viewBox="0 -960 960 960"><path d="${s}" transform="${i}"></path></svg>`;return{name:s=>{const i=Kn[s];if(typeof i=="string")return n.innerHTML=o(i);const a=i.name;typeof Kn[a]=="string"&&(n.innerHTML=o(Kn[a],`rotate(${i.angle} 480 -480)`))},src:async()=>{try{const s=new URL(this.src,location.href);if(s.pathname.endsWith(".svg")){const a=await(await fetch(s.href)).text(),c=document.createElement("template");c.innerHTML=a;const d=c.content.childNodes[0];if(!(d instanceof SVGElement))throw new Error("Invalid SVG");n.innerHTML="",n.appendChild(d),this.dispatchEvent(new Event("load"))}else r.src=s.href,r.onload=()=>{n.innerHTML="",n.appendChild(r),this.dispatchEvent(new Event("load"))},r.onerror=()=>this.dispatchEvent(new ErrorEvent("error"))}catch{this.dispatchEvent(new ErrorEvent("error"))}}}}}){}$g.define(yg);const Sg="s-linear-progress",_g=ae({indeterminate:!1,animated:!1,$max:100,$value:0}),Cg=`
:host{
  display: block;
  height: 4px;
  color: var(--s-color-primary, #006782);
  border-radius: 2px;
  overflow: hidden;
}
:host([animated=true]) .known>.block{
  transition: transform var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
}
:host([indeterminate=true]) .known,
.unknown{
  display: none;
}
:host([indeterminate=true]) .unknown,
.known{
  display: flex;
}
.container{
  height: 100%;
  border-radius: inherit;
  position: relative;
}
.block{
  position: absolute;
  height: 100%;
  border-radius: inherit;
  width: 100%;
  left: 0;
  top: 0;
}
.track{
  background: var(--s-color-secondary-container, #CFE6F1);
}
.indicator{
  background: currentColor;
}
.indicator-dot{
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  background: currentColor;
  border-radius: inherit;
}
@keyframes unknown{
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(150%);
  }
}
.unknown{
  justify-content: flex-end;
  gap: 4px;
  animation: unknown 2s linear infinite;
}
.unknown .block{
  position: static;
  flex-grow: 1;
  width: 100%;
  flex-shrink: 0;
}
.unknown .indicator{
  width: 50%;
}
`,Tg=`
<div class="container known" part="container">
  <div class="track block" style="transform: translateX(0%)" part="track"></div>
  <div class="indicator-dot" part="indicator-dot"></div>
  <div class="indicator block" style="transform: translateX(-100%)" part="indicator"></div>
</div>
<div class="container unknown" part="container">
  <div class="track block" part="track"></div>
  <div class="indicator block" part="indicator"></div>
  <div class="track block" part="indicator"></div>
</div>
`;class Ag extends Z({style:Cg,template:Tg,props:_g,setup(t){const n=t.querySelector(".known>.track"),r=t.querySelector(".known>.indicator"),o=()=>{const s=Math.min(this.value,this.max)/this.max*100;n.style.transform=`translateX(calc(${s}% + ${s===0?0:4}px))`,r.style.transform=`translateX(${s-100}%)`};return{max:o,value:o}}}){}Ag.define(Sg);const Rg="s-menu",Og=`
:host{
  display: flex;
  flex-direction: column;
  font-size: .875rem;
  padding: 4px 0;
  background: var(--s-color-surface-container-low, #F2F4F5);
}
:host(:nth-of-type(n+2)){
  border-top: solid 1px var(--s-color-surface-variant, #DCE4E8);
}
::slotted([slot=label]){
  display: flex;
  align-items: center;
  height: 44px;
  margin: -4px 20px;
  font-size: .75rem;
  color: var(--s-color-on-surface-variant, #40484C);
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
}
`,Mg=`
<slot name="label"></slot>
<slot></slot>
`;class Ng extends Z({style:Og,template:Mg}){}const Lg="s-menu-item",Xl=ae({checked:!1,folded:!0}),Pg=`
:host{
  display: flex;
  flex-direction: column;
  margin: 4px 8px 4px 0;
  color: var(--s-color-on-surface, #191C1E);
}
.container{
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 0 24px 24px 0;
  padding: 0 20px;
  flex-shrink: 0;
}
:host([checked=true]) .container{
  background: var(--s-color-secondary-container, #CFE6F1);
  color: var(--s-color-on-secondary-container, #354A53);
}
.text{
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.toggle-icon{
  width: 24px;
  height: 24px;
  display: none;
  margin-right: -8px;
  margin-left: 12px;
  transform: rotate(-90deg);
  transition: transform var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  fill: var(--s-color-on-surface-variant, #40484C);
}
.show-menu .toggle-icon{
  display: block;
}
:host([folded=false]) .toggle-icon{
  transform: rotate(0deg);
}
.fold{
  flex-shrink: 0;
}
.show-menu+.fold{
  margin: 0 -8px 0 0;
}
.menu{
  display: block;
  padding-top: 8px;
}
::slotted(:is(svg, s-icon)){
  color: var(--s-color-on-surface-variant, #40484C);
  fill: currentColor;
  height: 24px;
  width: 24px;
}
:host([checked=true]) ::slotted(:is(svg, s-icon)){
  color: currentColor;
}
::slotted([slot]){
  flex-shrink: 0;
}
::slotted([slot=start]){
  margin-left: -4px;
  margin-right: 12px;
}
::slotted([slot=end]){
  margin-right: -8px;
  margin-left: 12px;
}
::slotted([slot=menu]){
  background: var(--s-color-surface-container-high, #E7E8EA);
}
`,Fg=`
<s-ripple class="container" part="container">
  <slot name="start"></slot>
  <div class="text" part="text">
    <slot></slot>
  </div>
  <slot name="end">
    <svg viewBox="0 -960 960 960" class="toggle-icon">
      <path d="M480-360 280-560h400L480-360Z"></path>
    </svg>
  </slot>
</s-ripple>
<s-fold class="fold" part="fold" folded="${Xl.folded}">
  <slot name="menu" class="menu"></slot>
</s-fold>
`;class Dg extends Z({style:Pg,template:Fg,props:Xl,setup(t){const n=t.querySelector(".container"),r=t.querySelector(".fold"),o=t.querySelector("slot[name=menu]");return r.onclick=s=>s.stopPropagation(),o.onslotchange=()=>n.classList[o.assignedElements().length>0?"add":"remove"]("show-menu"),n.onclick=()=>{n.classList.contains("show-menu")&&(this.folded=!this.folded)},{folded:s=>r.folded=s}}}){}Ng.define(Rg);Dg.define(Lg);const us="s-navigation",Ig=ae({mode:["bottom","rail"],$value:""}),Bg=`
:host{
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: var(--s-color-surface, #F8F9FB);
  box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
  position: relative;
  padding-bottom: env(safe-area-inset-bottom);
}
:host([mode=rail]){
  flex-direction: column;
  justify-content: flex-start;
  width: 80px;
  box-shadow: none;
  height: 100%;
  background: none;
  padding-bottom: 0;
}
::slotted(s-navigation-item){
  height: 64px;
}
:host([mode=rail]) ::slotted(s-navigation-item){
  height: 72px;
}
:host([mode=rail]) ::slotted(s-icon-button[slot=start]){
  width: 56px;
  height: 56px;
  margin: 16px 0 8px 0;
  border-radius: 12px;
}
:host([mode=rail]) ::slotted([slot=end]){
  flex-grow: 1;
}
`,qg=`
<slot name="start"></slot>
<slot id="slot"></slot>
<slot name="end"></slot>
`;class fs extends Z({style:Bg,template:qg,props:Ig,setup(t){const n=t.querySelector("#slot"),r=new vr({context:this,class:Yl,slot:n});return{expose:{get options(){return r.list},get selectedIndex(){return r.selectedIndex}},value:{get:()=>r.value,set:o=>r.value=o}}}}){}const zg="s-navigation-item",Hg=ae({selected:!1,$value:""}),Ug=`
:host{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  font-size: .75rem;
  font-weight: 500;
  box-sizing: border-box;
  width: 100%;
  max-width: 80px;
  text-transform: capitalize;
  transition: color var(--s-motion-duration-short4, 400ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  color: var(--s-color-on-surface, #191C1E);
}
:host([selected=true]){
  color: var(--s-color-primary, #006782);
}
.icon{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  width: 48px;
  border-radius: 14px;
  transition: background-color var(--s-motion-duration-short4, 400ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
}
:host([selected=true]) .icon{
  background: var(--s-color-secondary-container, #CFE6F1);
}
::slotted(*){
  flex-shrink: 0;
}
::slotted(svg){
  color: var(--s-color-on-surface-variant, #40484C);
  fill: currentColor;
  width: 24px;
  height: 24px;
}
:host([selected=true]) ::slotted(:is(svg, s-icon)){
  color: currentColor;
}
::slotted([slot=badge]){
  position: absolute;
  right: 4px;
  top: 0;
}
::slotted([slot=text]){
  margin-top: 4px;
}
`,jg=`
<s-ripple attached="true" class="icon" part="icon">
  <slot name="icon"></slot>
  <slot name="badge"></slot>
</s-ripple>
<slot name="text"></slot>
`;class Yl extends Z({style:Ug,template:jg,props:Hg,setup(){return this.addEventListener("click",()=>{this.selected||this.parentNode instanceof fs&&this.dispatchEvent(new Event(`${us}:select`,{bubbles:!0}))}),{selected:()=>{this.parentNode instanceof fs&&this.dispatchEvent(new Event(`${us}:update`,{bubbles:!0}))}}}}){}fs.define(us);Yl.define(zg);const Wg="s-field",Vg=ae({focused:!1,fixed:!0}),Zg=`
:host{
  display: inline-block;
  vertical-align: middle;
  font-size: .875rem;
  --field-padding: 16px;
  --field-padding-top: var(--field-padding);
  --field-padding-bottom: var(--field-padding);
  --field-padding-left: var(--field-padding);
  --field-padding-right: var(--field-padding);
  --field-border-radius: 4px;
  --field-border-width: 1px;
  --field-focused-border-width: 2px;
  --field-border-color: var(--s-color-outline, #70787D);
}
.container{
  display: flex;
  height: 100%;
  min-height: inherit;
}
.line{
  position: relative;
}
.line::before,
.line::after{
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-width: var(--field-border-width);
  border-color: var(--field-border-color);
  pointer-events: none;
}
.line::after{
  border-width: var(--field-focused-border-width);
  border-color: var(--s-color-primary, #006782);
  opacity: 0;
  transition: opacity .2s ease-out;
}
:host([focused=true]) .line::after{
  opacity: 1;
}
.start,
.end{
  display: flex;
  align-items: center;
  flex-shrink: 0;
  min-width: var(--field-border-radius);
}
.start::before,
.end::before,
.start::after,
.end::after{
  border-top-style: solid;
  border-bottom-style: solid;
}
.start::before,
.start::after{
  border-left-style: solid;
  border-top-left-radius: var(--field-border-radius);
  border-bottom-left-radius: var(--field-border-radius);
}
.end::before,
.end::after{
  border-right-style: solid;
  border-top-right-radius: var(--field-border-radius);
  border-bottom-right-radius: var(--field-border-radius);
  left: auto;
  right: 0;
}
.box{
  display: grid;
  grid-template-areas: "a" "a";
  flex-grow: 1;
}
.box::before,
.box::after{
  border-bottom-style: solid;
}
.top,
.view{
  height: 100%;
  display: flex;
  grid-area: a;
  position: relative;
  box-sizing: border-box;
  margin-left: calc(var(--field-border-radius) * -1);
  margin-right: calc(var(--field-border-radius) * -1);
}
.view{
  align-items: center;
}
.top{
  pointer-events: none;
}
.top>.left::before,
.top>.right::before,
.top>.left::after,
.top>.right::after{
  border-top-style: solid;
}
.top>.left{
  width: calc(var(--field-padding-left) - var(--field-border-radius) - 4px);
  margin-left: max(4px, var(--field-border-radius));
  margin-right: min(4px, calc(var(--field-padding-left) - var(--field-border-radius)));
  flex-shrink: 0;
}
:host([fixed=false]) .top>.left{
  width: calc(var(--field-padding-left) - var(--field-border-radius));
  margin-right: 0;
}
.top>.right{
  flex-grow: 1;
  width: calc(var(--field-padding-right) - var(--field-border-radius) - 4px);
  margin-left: min(4px, calc(var(--field-padding-right) - var(--field-border-radius)));
  margin-right: max(4px, var(--field-border-radius));
}
:host([fixed=false]) .top>.right{
  width: calc(var(--field-padding-left) - var(--field-border-radius));
  margin-left: 0;
}
.label{
  display: block;
  height: 100%;
  flex-shrink: 0;
}
.label>.line::before,
.label>.line::after,
:host([fixed=false]) .label::before,
:host([fixed=false]) .label::after{
  border-top-style: solid;
}
.label>.line::before,
.label>.line::after{
  transform: translateX(-50%);
  width: min(calc(var(--field-padding-right) - var(--field-border-radius)), 8px);
}
::slotted([slot=label]){
  display: flex;
  align-items: center;
  height: 100%;
  font-size: .75rem;
  align-items: center;
  transform: translateY(-50%);
  color: var(--field-border-color);
  transition: transform .2s ease-out, font-size .2s ease-out;
  box-sizing: border-box;
  position: relative;
}
:host([fixed=false]) ::slotted([slot=label]),
::slotted([slot=label]:empty){
  font-size: inherit;
  transform: translateY(0);
}
::slotted([slot=label]:empty)::before,
::slotted([slot=label]:empty)::after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-50%);
  width: min(calc(var(--field-padding-right) - var(--field-border-radius)), 8px);
  border-top: solid var(--field-border-width); var(--field-border-color);
}
::slotted([slot=label]:empty)::after{
  opacity: 0;
  border-width: var(--field-focused-border-width);
  transition: opacity .2s ease-out;
  border-color: var(--s-color-primary, #006782);
}
:host([focused=true]) ::slotted([slot=label]:empty)::after{
  opacity: 1;
}
:host([focused=true]) ::slotted([slot=label]){
  color: var(--s-color-primary, #006782);
}
::slotted(:not([slot])){
  padding-left: var(--field-padding-left);
  padding-right: var(--field-padding-right);
  padding-top: var(--field-padding-top);
  padding-bottom: var(--field-padding-bottom);
  display: flex;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
}
`,Kg=`
<div class="container" part="container">
  <div class="start line" part="start">
    <slot name="start"></slot>
  </div>
  <div class="box line" part="box">
    <slot class="view"></slot>
    <div class="top" part="top">
      <div class="line left"></div>
      <slot name="label" class="label line">
        <div class="line"></div>
      </slot>
      <div class="line right"></div>
    </div>
  </div>
  <div class="end line" part="end">
    <slot name="end"></slot>
  </div>
  <slot name="custom"></slot>
</div>
`;class Gg extends Z({style:Zg,template:Kg,props:Vg}){}Gg.define(Wg);const Xg="s-fold",Yg=ae({folded:!1}),Jg=`
:host{
  display: block;
}
.container{
  display: grid;
  grid-template-rows: 1fr;
  overflow: hidden;
  transition: grid-template-rows var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
}
:host([folded=true]) .container{
  grid-template-rows: 0fr;
}
.view{
  display: block;
  min-height: 0;
  overflow: hidden;
}
`,Qg=`
<slot name="trigger"></slot>
<div class="container" part="container">
  <slot class="view" part="view"></slot>
</div>
`;class e0 extends Z({style:Jg,template:Qg,props:Yg,setup(t){t.querySelector("slot[name=trigger]").onclick=()=>this.folded=!this.folded}}){}e0.define(Xg);const t0="s-page",n0=ae({theme:["light","auto","dark"]}),r0=`
:host{
  display: flow-root;
  height: 100%;
  font-family: Roboto, system-ui;
  color: var(--s-color-on-background);
  background: var(--s-color-background);
  --s-color-scrim: #000000;
  --s-color-primary: #006782;
  --s-color-on-primary: #ffffff;
  --s-color-primary-container: #BAEAFF;
  --s-color-on-primary-container: #004D62;
  --s-color-secondary: #4C616B;
  --s-color-on-secondary: #ffffff;
  --s-color-secondary-container: #CFE6F1;
  --s-color-on-secondary-container: #354A53;
  --s-color-tertiary: #5C5B7E;
  --s-color-on-tertiary: #ffffff;
  --s-color-tertiary-container: #E2DFFF;
  --s-color-on-tertiary-container: #444465;
  --s-color-error: #BA1A1A;
  --s-color-on-error: #ffffff;
  --s-color-error-container: #FFDAD6;
  --s-color-on-error-container: #93000A;
  --s-color-background: #F8F9FB;
  --s-color-on-background: #191C1E;
  --s-color-outline: #70787D;
  --s-color-outline-variant: #C0C8CC;
  --s-color-surface: #F8F9FB;
  --s-color-on-surface: #191C1E;
  --s-color-surface-variant: #DCE4E8;
  --s-color-on-surface-variant: #40484C;
  --s-color-inverse-surface: #2E3132;
  --s-color-inverse-on-surface: #EFF1F3;
  --s-color-inverse-primary: #60D4FE;
  --s-color-surface-container: #ECEEF0;
  --s-color-surface-container-high: #E7E8EA;
  --s-color-surface-container-highest: #E1E3E4;
  --s-color-surface-container-low: #F2F4F5;
  --s-color-surface-container-lowest: #FFFFFF;
  --s-color-success: #006d43;
  --s-color-on-success: #ffffff;
  --s-color-success-container: #92f7bc;
  --s-color-on-success-container: #002111;
  --s-color-warning: #6f5d00;
  --s-color-on-warning: #ffffff;
  --s-color-warning-container: #ffe169;
  --s-color-on-warning-container: #221b00;
  --s-color-dark-primary: #60D4FE;
  --s-color-dark-on-primary: #003545;
  --s-color-dark-primary-container: #004D62;
  --s-color-dark-on-primary-container: #BAEAFF;
  --s-color-dark-secondary: #B4CAD5;
  --s-color-dark-on-secondary: #1E333C;
  --s-color-dark-secondary-container: #354A53;
  --s-color-dark-on-secondary-container: #CFE6F1;
  --s-color-dark-tertiary: #C4C3EA;
  --s-color-dark-on-tertiary: #2D2D4D;
  --s-color-dark-tertiary-container: #444465;
  --s-color-dark-on-tertiary-container: #E2DFFF;
  --s-color-dark-error: #FFB4AB;
  --s-color-dark-on-error: #690005;
  --s-color-dark-error-container: #93000A;
  --s-color-dark-on-error-container: #FFDAD6;
  --s-color-dark-background: #111415;
  --s-color-dark-on-background: #E1E3E4;
  --s-color-dark-outline: #8A9296;
  --s-color-dark-outline-variant: #40484C;
  --s-color-dark-surface: #111415;
  --s-color-dark-on-surface: #E1E3E4;
  --s-color-dark-surface-variant: #40484C;
  --s-color-dark-on-surface-variant: #C0C8CC;
  --s-color-dark-inverse-surface: #E1E3E4;
  --s-color-dark-inverse-on-surface: #2E3132;
  --s-color-dark-inverse-primary: #006782;
  --s-color-dark-surface-container: #1D2022;
  --s-color-dark-surface-container-high: #272A2C;
  --s-color-dark-surface-container-highest: #323537;
  --s-color-dark-surface-container-low: #191C1E;
  --s-color-dark-surface-container-lowest: #0C0F10;
  --s-color-dark-success: #76daa1;
  --s-color-dark-on-success: #003920;
  --s-color-dark-success-container: #005231;
  --s-color-dark-on-success-container: #92f7bc;
  --s-color-dark-warning: #e2c54b;
  --s-color-dark-on-warning: #3a3000;
  --s-color-dark-warning-container: #544600;
  --s-color-dark-on-warning-container: #ffe169;
  --s-elevation-level1: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
  --s-elevation-level2: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
  --s-elevation-level3: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12);
  --s-elevation-level4: 0 8px 10px -5px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12);
  --s-elevation-level5: 0 10px 14px -6px rgba(0, 0, 0, .2), 0 22px 35px 3px rgba(0, 0, 0, .14), 0 8px 42px 7px rgba(0, 0, 0, .12);
  --s-motion-duration-Short1: 50ms;
  --s-motion-duration-short2: 100ms;
  --s-motion-duration-short3: 150ms;
  --s-motion-duration-short4: 200ms;
  --s-motion-duration-medium1: 250ms;
  --s-motion-duration-medium2: 300ms;
  --s-motion-duration-medium3: 350ms;
  --s-motion-duration-medium4: 400ms;
  --s-motion-duration-long1: 450ms;
  --s-motion-duration-long2: 500ms;
  --s-motion-duration-long3: 550ms;
  --s-motion-duration-long4: 600ms;
  --s-motion-duration-extra-long1: 700ms;
  --s-motion-duration-extra-long2: 800ms;
  --s-motion-duration-extra-long3: 900ms;
  --s-motion-duration-extra-long4: 1000ms;
  --s-motion-easing-emphasized: cubic-bezier(0.2, 0, 0, 1.0);
  --s-motion-easing-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1.0);
  --s-motion-easing-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);
  --s-motion-easing-standard: cubic-bezier(0.2, 0, 0, 1.0);
  --s-motion-easing-standard-decelerate: cubic-bezier(0, 0, 0, 1);
  --s-motion-easing-standard-accelerate: cubic-bezier(0.3, 0, 1, 1);
}
:host([dark]){
  --s-color-primary: var(--s-color-dark-primary) !important;
  --s-color-on-primary: var(--s-color-dark-on-primary) !important;
  --s-color-primary-container: var(--s-color-dark-primary-container) !important;
  --s-color-on-primary-container: var(--s-color-dark-on-primary-container) !important;
  --s-color-secondary: var(--s-color-dark-secondary) !important;
  --s-color-on-secondary: var(--s-color-dark-on-secondary) !important;
  --s-color-secondary-container: var(--s-color-dark-secondary-container) !important;
  --s-color-on-secondary-container: var(--s-color-dark-on-secondary-container) !important;
  --s-color-tertiary: var(--s-color-dark-tertiary) !important;
  --s-color-on-tertiary: var(--s-color-dark-on-tertiary) !important;
  --s-color-tertiary-container: var(--s-color-dark-tertiary-container) !important;
  --s-color-on-tertiary-container: var(--s-color-dark-on-tertiary-container) !important;
  --s-color-error: var(--s-color-dark-error) !important;
  --s-color-on-error: var(--s-color-dark-on-error) !important;
  --s-color-error-container: var(--s-color-dark-error-container) !important;
  --s-color-on-error-container: var(--s-color-dark-on-error-container) !important;
  --s-color-background: var(--s-color-dark-background) !important;
  --s-color-on-background: var(--s-color-dark-on-background) !important;
  --s-color-outline: var(--s-color-dark-outline) !important;
  --s-color-outline-variant: var(--s-color-dark-outline-variant) !important;
  --s-color-surface: var(--s-color-dark-surface) !important;
  --s-color-on-surface: var(--s-color-dark-on-surface) !important;
  --s-color-surface-variant: var(--s-color-dark-surface-variant) !important;
  --s-color-on-surface-variant: var(--s-color-dark-on-surface-variant) !important;
  --s-color-inverse-surface: var(--s-color-dark-inverse-surface) !important;
  --s-color-inverse-on-surface: var(--s-color-dark-inverse-on-surface) !important;
  --s-color-inverse-primary: var(--s-color-dark-inverse-primary) !important;
  --s-color-surface-container: var(--s-color-dark-surface-container) !important;
  --s-color-surface-container-high: var(--s-color-dark-surface-container-high) !important;
  --s-color-surface-container-highest: var(--s-color-dark-surface-container-highest) !important;
  --s-color-surface-container-low: var(--s-color-dark-surface-container-low) !important;
  --s-color-surface-container-lowest: var(--s-color-dark-surface-container-lowest) !important;
  --s-color-success: var(--s-color-dark-success) !important;
  --s-color-on-success: var(--s-color-dark-on-success) !important;
  --s-color-success-container: var(--s-color-dark-success-container) !important;
  --s-color-on-success-container: var(--s-color-dark-on-success-container) !important;
  --s-color-warning: var(--s-color-dark-warning) !important;
  --s-color-on-warning: var(--s-color-dark-on-warning) !important;
  --s-color-warning-container: var(--s-color-dark-warning-container) !important;
  --s-color-on-warning-container: var(--s-color-dark-on-warning-container) !important;
}
`,o0="<slot></slot>",ps=document.createElement("style");ps.textContent="::view-transition-old(root),::view-transition-new(root) { animation: none; mix-blend-mode: normal}";class s0 extends Z({style:r0,template:o0,props:n0,setup(){const t=getComputedStyle(this),n=matchMedia("(prefers-color-scheme: dark)"),r=()=>{const i=t.getPropertyValue("--s-motion-easing-standard-accelerate")||"cubic-bezier(0.3, 0, 1, 1)",a=t.getPropertyValue("--s-motion-duration-long4")||"600ms";return{easing:i,duration:_t(a)}},o=()=>this.theme==="auto"?n.matches:this.theme==="dark";return{expose:{toggle:(i,a)=>new Promise(c=>{if(this.theme===i)return;const d=n.matches,l=w=>w==="auto"?d?"dark":"light":w,u=l(this.theme),f=l(i);if(u===f||!document.startViewTransition)return this.theme=i,c();const h=innerWidth,p=innerHeight,b={clipPath:[`circle(0px at 50% ${p/2}px)`,`circle(${Math.sqrt(h**2+p**2)/2}px at 50% ${p/2}px)`]};if(a&&a.isConnected){const{left:w,top:E}=a.getBoundingClientRect(),A=w+a.offsetWidth/2,R=E+a.offsetHeight/2,q=Math.max(h-A,A),J=Math.max(p-R,R),te=Math.sqrt(q**2+J**2);b.clipPath[0]=`circle(0px at ${A}px ${R}px)`,b.clipPath[1]=`circle(${te}px at ${A}px ${R}px)`}const y=document.startViewTransition(()=>{this.theme=i,document.head.appendChild(ps)});y.ready.then(async()=>{const w=document.documentElement.animate(b,{...r(),pseudoElement:"::view-transition-new(root)"});c(w),await y.finished,ps.remove()})}),get isDark(){return o()}},theme:i=>{if(i==="light")return this.removeAttribute("dark");if(i==="dark")return this.setAttribute("dark","");const a=()=>{n.matches?this.setAttribute("dark",""):this.removeAttribute("dark"),this.dispatchEvent(new Event("change"))};n.onchange=a,a()}}}}){}s0.define(t0);const i0="s-pagination",a0=ae({$value:1,$total:20,$count:20,type:["standard","outlined"]}),l0=`
:host{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: .875rem;
  border-radius: 18px;
  gap: 4px;
  color: var(--s-color-on-surface, #191C1E);
}
:host([type=outlined]) :is(.icon-button, .button){
  border-width: 1px;
  border-color: var(--s-color-outline-variant, #C0C8CC);
  border-style: solid;
}
.container{
  display: flex;
  flex-wrap: wrap;
  gap: inherit;
  height: 100%;
  border-radius: inherit;
  justify-content: space-evenly;
}
.icon-button,
.button{
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 36px;
}
.icon-button{
  border-radius: inherit;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
}
.button{
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  padding: 0 8px;
  border-radius: inherit;
  box-sizing: border-box;
}
.checked{
  background: var(--s-color-secondary-container, #CFE6F1);
  color: var(--s-color-on-secondary-container, #354A53);
  border-color: var(--s-color-secondary, #4C616B) !important;
}
.disabled{
  pointer-events: none;
  opacity: .38;
}
.text{
  pointer-events: none;
  border: none !important;
}
svg{
  width: 24px;
  height: 24px;
  padding: 1px;
  box-sizing: border-box;
  fill: var(--s-color-on-surface-variant, #40484C);
}
`,c0=`
<s-ripple class="prev icon-button disabled" part="prev">
  <svg viewBox="0 -960 960 960">
    <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"></path>
  </svg>
</s-ripple>
<div class="container">
  <s-ripple class="button checked">1</s-ripple>
</div>
<s-ripple class="next icon-button disabled" part="next">
  <svg viewBox="0 -960 960 960">
    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"></path>
  </svg>
</s-ripple>
`;class d0 extends Z({style:l0,template:c0,props:a0,setup(t){const n=t.querySelector(".prev"),r=t.querySelector(".next"),o=t.querySelector(".container"),s=()=>this.dispatchEvent(new Event("change")),i=()=>{const c=Math.ceil(this.total/this.count);let d=Math.max(Math.min(c-7,Math.max(0,this.value-4)),0);if(o.childNodes.forEach(l=>{d++;const u=l;u.textContent=d.toString(),u.classList.toggle("checked",this.value===d),u.classList.remove("text")}),n.classList.toggle("disabled",this.value===1),r.classList.toggle("disabled",this.value===c),c>7){if(this.value>=5){o.childNodes.item(0).textContent="1";const l=o.childNodes.item(1);l.textContent="...",l.classList.add("text")}if(this.value<=c-4){o.childNodes.item(o.childNodes.length-1).textContent=c.toString();const l=o.childNodes.item(o.childNodes.length-2);l.textContent="...",l.classList.add("text")}}},a=()=>{const c=Math.ceil(this.total/this.count),d=Math.min(c,7),l=document.createDocumentFragment();for(let u=1;u<=d;u++){const f=new Mn;f.classList.add("button"),l.appendChild(f)}o.innerHTML="",o.appendChild(l),i()};return o.onclick=c=>{if(!(c.target instanceof Mn))return;const d=Number(c.target.textContent);d!==this.value&&(this.value=d,s())},n.onclick=()=>{const c=Math.max(this.value-1,1);c!==this.value&&(this.value=c,s())},r.onclick=()=>{const c=Math.min(this.value+1,Math.ceil(this.total/this.count));c!==this.value&&(this.value=c,s())},{total:a,value:i}}}){}d0.define(i0);const hs="s-picker",u0=ae({disabled:!1,$label:"",$value:""}),f0=`
:host{
  display: inline-block;
  vertical-align: middle;
  font-size: .875rem;
  --picker-border-radius: 4px;
  --picker-border-color: var(--s-color-outline, #70787D);
  --picker-border-width: 1px;
  --picker-padding: 16px;
  --picker-height: 48px;
}
:host([disabled=true]){
  pointer-events: none;
  opacity: .38;
}
.popup{
  display: block;
  cursor: pointer;
  position: relative;
}
.ripple{
  border-radius: var(--picker-border-radius);
}
.field{
  --field-border-radius: var(--picker-border-radius);
  --field-border-color: var(--picker-border-color);
  --field-border-width: var(--picker-border-width);
  --field-padding: var(--picker-padding);
  height: var(--picker-height);
  width: 100%;
  position: relative;
}
.view{
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
  padding: 0 var(--picker-padding);
}
svg{
  width: 24px;
  height: 24px;
  padding: 2px;
  box-sizing: border-box;
  flex-shrink: 0;
  margin-left: min(0px, calc((var(--picker-padding) * -1) + 4px));
  margin-right: max(0px, calc(var(--picker-padding) - 12px));
  fill: var(--s-color-on-surface-variant, #40484C);
}
.container{
  max-height: 408px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: .875rem;
  padding: 4px 0;
  gap: 4px;
}
`,p0=`
<s-popup class="popup">
  <slot name="trigger" slot="trigger">
    <s-field fixed="false" class="field" part="field">
      <div class="label" slot="label"></div>
      <div class="view"></div>
      <svg viewBox="0 -960 960 960" slot="end">
        <path d="M480-360 280-560h400L480-360Z"></path>
      </svg>
      <s-ripple slot="custom" class="ripple" attached="true"></s-ripple>
    </s-field>
  </slot>
  <s-scroll-view class="container" part="container">
    <slot id="slot"></slot>
  </s-scroll-view>
</s-popup>
`;class gs extends Z({style:f0,template:p0,props:u0,setup(t){const n=t.querySelector(".popup"),r=t.querySelector(".field"),o=t.querySelector(".label"),s=t.querySelector(".view"),i=t.querySelector("#slot"),a=t.querySelector(".container"),c=new vr({context:this,class:Jl,slot:i});return n.addEventListener("show",()=>{r.focused=!0,r.fixed=!0,c.select||(s.textContent=this.label,s.style.opacity="0"),a.style.minWidth=`${this.offsetWidth}px`,c.select&&a.scrollTo({top:c.select.offsetTop-a.offsetTop-(a.offsetHeight/2-c.select.offsetHeight/2)})}),n.onclose=()=>{r.focused=!1,!c.select&&(r.fixed=!1)},n.addEventListener("closed",()=>a.style.removeProperty("min-width")),c.onUpdate=()=>{if(!c.select){r.fixed=!1,s.textContent="";return}r.fixed=!0,s.style.removeProperty("opacity"),s.textContent=c.select.textContent},c.onSelect=()=>n.close(),{expose:{get options(){return c.list},get selectedIndex(){return c.selectedIndex},get show(){return n.show},get toggle(){return n.toggle},get close(){return n.close}},label:d=>o.textContent=d,value:{get:()=>c.value,set:d=>c.value=d}}}}){}const h0="s-picker-item",g0=ae({selected:!1,$value:""}),m0=`
:host{
  display: flex;
  align-items: center;
  height: 40px;
  margin: 0 4px;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  flex-shrink: 0;
  padding: 0 12px;
  color: var(--s-color-on-surface, #191C1E);
}
:host([selected=true]){
  background: var(--s-color-secondary-container, #CFE6F1);
  color: var(--s-color-on-secondary-container, #354A53);
}
.text{
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
::slotted(:is(svg, s-icon)){
  color: var(--s-color-on-surface-variant, #40484C);
  fill: currentColor;
  height: 24px;
  width: 24px;
}
:host([selected=true]) ::slotted(:is(svg, s-icon)){
  color: currentColor;
}
::slotted([slot]){
  flex-shrink: 0;
}
::slotted([slot=start]){
  margin-left: -4px;
  margin-right: 8px;
}
::slotted([slot=end]){
  margin-left: 8px;
  margin-right: -4px;
}
`,b0=`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple part="ripple" attached="true" ></s-ripple>
`;class Jl extends Z({style:m0,template:b0,props:g0,setup(){return this.addEventListener("click",()=>{this.selected||this.parentNode instanceof gs&&this.dispatchEvent(new Event(`${hs}:select`,{bubbles:!0}))}),{selected:()=>{this.parentNode instanceof gs&&this.dispatchEvent(new Event(`${hs}:update`,{bubbles:!0}))}}}}){}gs.define(hs);Jl.define(h0);const v0="s-popup",x0=ae({align:["center","left","right"]}),y0=go({show:Event,showed:Event,closed:Event}),w0=`
:host{
  display: inline-block;
  vertical-align: middle;
  text-align: left;
}
dialog{
  inset: 0;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  padding: 0;
  max-width: none;
  max-height: none;
  position: relative;
  overflow: hidden;
  color: inherit;
  outline: none;
}
dialog::backdrop{
  background: none;
}
.scrim{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.container{
  display: block;
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  width: fit-content;
  height: fit-content;
  outline: none;
}
::slotted(:not([slot])){
  border-radius: 4px;
  max-width: inherit;
  max-height: inherit;
  box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
  background: var(--s-color-surface-container, #ECEEF0);
}
`,E0=`
<slot name="trigger"></slot>
<dialog class="popup" part="popup">
  <div class="scrim" part="scrim"></div>
  <slot class="container" part="container"></slot>
</dialog>
`,k0=(e,t,n,r)=>{const o={top:0,left:0,origin:[]},s=r==="center",i=s?e.top+e.height:e.top,a=s?e.top-n:e.top-n+e.height;if(i+n<=innerHeight)o.top=i,o.origin[1]="top";else if(a>=0)o.top=a,o.origin[1]="bottom";else{const c=(innerHeight-n)/2;o.top=c,o.origin[1]=`${e.top+e.height/2-c}px`}if(s)o.left=e.left-(t-e.width)/2,o.origin[0]="center",o.left<0?(o.left=e.left,o.origin[0]=`${e.width/2}px`):o.left+t>innerWidth&&(o.left=e.left+e.width-t,o.origin[0]=`${t-e.width+e.width/2}px`);else{const c=u=>{o.left=e.left-t,o.origin[0]="right",o.left<0&&u&&u()},d=u=>{o.left=e.left+e.width,o.origin[0]="left",o.left+t>innerWidth&&u&&u()},l=()=>{const u=(innerWidth-t)/2;o.left=u,o.origin[0]=`${e.left+e.width/2-u}px`};r==="left"?c(()=>d(l)):d(()=>c(l))}return o};class $0 extends Z({style:w0,template:E0,props:x0,events:y0,setup(t){const n=t.querySelector("dialog"),r=t.querySelector(".container"),o=getComputedStyle(this),s=()=>{const d=o.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",l=o.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:d,duration:_t(l)}},i=d=>{var p;if(!this.isConnected||n.open)return;const l={top:0,left:0,origin:[]};if(n.showModal(),!this.dispatchEvent(new Event("show",{cancelable:!0})))return n.close();r.style.maxHeight=`${innerHeight}px`,r.style.maxWidth=`${innerWidth}px`;const u=r.offsetWidth,f=r.offsetHeight;if(!d||d instanceof HTMLElement){const y=(d??this).getBoundingClientRect(),w=k0(y,u,f,this.align);l.top=w.top,l.left=w.left,l.origin=w.origin}else l.top=d.y,l.left=d.x,l.origin=((p=d.origin)==null?void 0:p.split(" "))??["left","top"],d.x+u>innerWidth&&(l.left=d.x-u,l.origin[0]="right"),d.y+f>innerHeight&&(l.top=d.y-f,l.origin[1]="bottom");r.style.transformOrigin=l.origin.join(" "),r.style.top=`${l.top}px`,r.style.left=`${l.left}px`;const h=r.animate({transform:["scale(.9)","scale(1)"],opacity:[0,1]},s());this.setAttribute("showed",""),h.finished.then(()=>this.dispatchEvent(new Event("showed")))},a=()=>{if(!this.isConnected||!n.open||r.getAnimations().length>0||!this.dispatchEvent(new Event("close",{cancelable:!0})))return;const d=r.animate({transform:["scale(1)","scale(.9)"],opacity:[1,0]},s());this.removeAttribute("showed"),d.finished.then(()=>{n.close(),this.dispatchEvent(new Event("closed"))})},c=d=>n.open?a():i(d);return t.querySelector("slot[name=trigger]").addEventListener("click",()=>i()),t.querySelector(".scrim").addEventListener("pointerdown",a),{expose:{show:i,toggle:c,close:a},onMounted:()=>addEventListener("resize",a),onUnmounted:()=>removeEventListener("resize",a)}}}){}$0.define(v0);const Ys="s-popup-menu",S0=ae({group:["","start","end"]}),_0=`
:host{
  display: inline-block;
  vertical-align: middle;
  font-size: .875rem;
}
.popup{
  display: block;
}
.container{
  box-sizing: border-box;
  padding: 4px 0;
  max-width: 224px;
  min-height: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
::slotted(s-popup-menu[group=start]){
  border-top: solid 1px var(--s-color-outline-variant, #C0C8CC);
  margin-top: 4px;
  padding-top: 4px;
}
::slotted(s-popup-menu[group=end]){
  border-bottom: solid 1px var(--s-color-outline-variant, #C0C8CC);
  margin-bottom: 4px;
  padding-bottom: 4px;
}
`,C0=`
<s-popup class="popup">
  <slot slot="trigger" name="trigger"></slot>
  <s-scroll-view class="container" part="container">
    <slot></slot>
  </s-scroll-view>
</s-popup>
`;class Gr extends Z({style:_0,template:C0,props:S0,setup(t){const n=t.querySelector(".popup"),r=t.querySelector("slot[name=trigger]");return r.onclick=o=>{o.stopPropagation(),n.show()},this.addEventListener(`${Ys}:click`,o=>{o.stopPropagation(),n.close()}),n.onclose=o=>{const s=o.target;if(s.parentNode instanceof ShadowRoot){const i=s.parentNode.host;i.parentNode instanceof Gr&&i.parentNode.close()}},{onMounted:()=>{this.parentNode instanceof Gr&&n.setAttribute("align","right")},expose:{get show(){return n.show},get toggle(){return n.toggle},get close(){return n.close}}}}}){}const T0="s-popup-menu-item",A0=`
:host{
  display: flex;
  align-items: center;
  height: 40px;
  margin: 0 4px;
  padding: 0 12px;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  color: var(--s-color-on-surface, #191C1E);
}
.text{
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
::slotted(:is(svg, s-icon)){
  fill: currentColor;
  height: 24px;
  width: 24px;
  color: var(--s-color-on-surface-variant, #40484C);
}
::slotted([slot]){
  flex-shrink: 0;
}
::slotted([slot=start]){
  margin-left: -4px;
  margin-right: 8px;
}
::slotted([slot=end]){
  margin-left: 8px;
  margin-right: -6px;
}
`,R0=`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple attached="true"></s-ripple>
`;class O0 extends Z({style:A0,template:R0,setup(){this.addEventListener("click",()=>this.dispatchEvent(new Event(`${Ys}:click`,{bubbles:!0})))}}){}Gr.define(Ys);O0.define(T0);const M0="s-radio-button",N0=ae({disabled:!1,checked:!1,name:"",$value:""}),L0=`
:host{
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  cursor: pointer;
  position: relative;
  height: 40px;
  color: var(--s-color-on-surface-variant, #40484C);
}
:host([checked=true]){
  color: var(--s-color-primary, #006782);
}
:host([disabled=true]){
  pointer-events: none;
}
.container{
  position: relative;
  height: 100%;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
:host([disabled=true]) .container{
  color: var(--s-color-on-surface, #191C1E) !important;
  opacity: .38 !important;
}
.unchecked,
.checked{
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.checked{
  position: absolute;
  transform: scale(.5);
  opacity: 0;
  transition-property: transform, opacity;
  transition-timing-function: var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  transition-duration: var(--s-motion-duration-short4, 200ms);
}
:host([checked=true]:not([indeterminate=true])) .checked{
  opacity: 1;
  transform: scale(1);
}
.dot{
  width: 60%;
  height: 60%;
  transform: scale(0.4);
  background: currentColor;
  border-radius: 50%;
}
.ripple{
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  height: 100%;
  width: auto;
  border-radius: 50%;
}
svg,
::slotted(:is([slot=checked], [slot=unchecked])){
  color: currentColor;
  fill: currentColor;
  width: 60%;
  height: 60%;
}
`,P0=`
<div class="container" part="container">
  <slot class="unchecked" name="unchecked">
    <svg viewBox="0 -960 960 960">
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path>
    </svg>
  </slot>
  <slot class="checked" name="checked">
    <div class="dot"></div>
  </slot>
</div>
<slot></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
`;class F0 extends Z({style:L0,template:P0,props:N0,setup(){this.addEventListener("click",()=>{this.checked=!0,this.name&&document.querySelectorAll(`${this.tagName}[name='${this.name}']`).forEach(t=>{t!==this&&(t.checked=!1)}),this.dispatchEvent(new Event("change"))})}}){}F0.define(M0);const D0="s-rate",Gn=ae({readOnly:!1,$max:10,$min:0,$value:5,$step:1}),I0=`
:host{
  display: inline-flex;
  vertical-align: middle;
  overflow: hidden;
  position: relative;
  font-size: 24px;
  width: calc(1em * 5);
  height: 1em;
}
.track{
  width: 100%;
  display: flex;
}
.track svg,
::slotted([slot=track]){
  fill: var(--s-color-secondary-container, #CFE6F1);
  filter: drop-shadow(1em 0 0 var(--s-color-secondary-container, #CFE6F1)) drop-shadow(2em 0 0 var(--s-color-secondary-container, #CFE6F1)) drop-shadow(3em 0 0 var(--s-color-secondary-container, #CFE6F1));
}
.indicator{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 50%;
  overflow: hidden;
  display: flex;
}
.indicator svg,
::slotted([slot=indicator]){
  fill: var(--s-color-primary, #006782);
  filter: drop-shadow(1em 0 0 var(--s-color-primary, #006782)) drop-shadow(2em 0 0 var(--s-color-primary, #006782)) drop-shadow(3em 0 0 var(--s-color-primary, #006782)) drop-shadow(4em 0 0 var(--s-color-primary, #006782));
}
svg,
::slotted(*){
  height: 100%;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  flex-shrink: 0;
}
input{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0;
  margin: 0;
}
:host([readonly=true]) input{
  display: none;
}
`,B0=`
<slot name="track" class="track" part="track">
  <svg viewBox="0 -960 960 960">
    <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>
  </svg>
</slot>
<slot name="indicator" class="indicator" part="indicator">
  <svg viewBox="0 -960 960 960">
    <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
  </svg>
</slot>
<input
  type="range"
  max="${Gn.max}"
  min="${Gn.min}"
  step="${Gn.step}"
  value="${Gn.value}"
/>
`;class q0 extends Z({style:I0,template:B0,props:Gn,setup(t){const n=t.querySelector(".indicator"),r=t.querySelector("input"),o=()=>{const i=(Number(r.value)-this.min)*100/this.max-this.min;n.style.width=`${i}%`};return r.onchange=()=>this.dispatchEvent(new Event("change")),r.oninput=()=>{this.value=Number(r.value),this.dispatchEvent(new Event("input"))},{max:s=>{r.max=String(s),o()},min:s=>{r.min=String(s),o()},step:s=>{r.step=String(s),o()},value:s=>{r.value=String(s),o()}}}}){}q0.define(D0);const z0="s-search",H0=ae({$placeholder:"",disabled:!1,$value:"",$maxLength:-1,readOnly:!1}),U0=`
:host{
  display: inline-flex;
  vertical-align: middle;
  min-height: 40px;
  width: 220px;
  border-radius: 20px;
  font-size: .875rem;
  position: relative;
  background: var(--s-color-surface-container-low, #F2F4F5);
  color: var(--s-color-on-surface, #191C1E);
  --search-outline-width: 1px;
  --search-outline-color: var(--s-color-surface-variant, #DCE4E8);
}
.wrapper{
  display: grid;
  position: relative;
  border-radius: inherit;
  overflow: hidden;
  background: inherit;
  min-height: inherit;
  flex-grow: 1;
  width: 100%;
  box-shadow: 0 0 0 var(--search-outline-width) var(--search-outline-color);
}
:host(:focus-within) .wrapper{
  position: absolute;
}
.container{
  display: flex;
  align-items: center;
  position: relative;
  min-height: inherit;
}
input{
  border: none;
  padding: 0 16px;
  height: 100%;
  width: 0;
  flex-grow: 1;
  background: none;
  outline: none;
  font-size: inherit;
  color: inherit;
  box-sizing: border-box;
  line-height: 1;
  font-family: inherit;
  caret-color: var(--s-color-primary, #006782);
}
input::placeholder{
  color: var(--s-color-outline, #70787D);
}
input::selection{
  background: var(--s-color-primary, #006782);
  color: var(--s-color-on-primary, #ffffff);
}
::slotted([slot=dropdown]){
  position: absolute;
  pointer-events: none;
  left: 0;
  height: 0;
  opacity: 0;
  border-top: solid 1px var(--s-color-surface-variant, #DCE4E8);
  height: auto;
}
:host(:focus-within) ::slotted([slot=dropdown]){
  pointer-events: auto;
  position: relative;
  opacity: 1;
}
::slotted([slot]){
  flex-shrink: 0;
}
.clear{
  display: none;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
svg,
::slotted(svg){
  height: 24px;
  width: 24px;
  fill: var(--s-color-on-surface-variant, #40484C);
}
.icon,
::slotted(:is(s-icon[slot=start], svg[slot=start])){
  margin: 0 -8px 0 8px;
}
::slotted(:is(s-icon[slot=end], svg[slot=end])){
  margin: 0 8px 0 -8px;
}
::slotted(s-icon-button[slot=start]){
  margin-right: -16px;
}
.clear,
::slotted(s-icon-button[slot=end]){
  margin-left: -16px;
}
`,j0=`
<div class="wrapper" part="wrapper">
  <div class="container" part="container">
    <slot name="start">
      <svg viewBox="0 -960 960 960" class="icon">
        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path>
      </svg>
    </slot>
    <input type="text">
    <slot name="end">
      <s-ripple class="clear">
        <svg viewBox="0 -960 960 960">
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path>
        </svg>
      </s-ripple>
    </slot>
  </div>
  <slot name="dropdown"></slot>
</div>
`;class W0 extends Z({style:U0,template:j0,props:H0,setup(t){const n=t.querySelector("input"),r=t.querySelector(".clear"),o=t.querySelector("[name=dropdown]"),s=()=>r.style.display=n.value===""?"none":"flex";return o.onmousedown=i=>i.preventDefault(),n.onchange=()=>this.dispatchEvent(new Event("change")),r.onclick=()=>{n.value="",s(),this.dispatchEvent(new Event("input")),this.dispatchEvent(new Event("change"))},n.oninput=s,{expose:{get native(){return n}},value:{get:()=>n.value,set:i=>{n.value=i,s()}},placeholder:i=>n.placeholder=i,maxLength:i=>n.maxLength=i,readOnly:i=>n.readOnly=i}}}){}W0.define(z0);const ms="s-segmented-button",V0=ae({$value:"",mode:["auto","fixed"]}),Z0=`
:host{
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  border-radius: 20px;
  height: 40px;
  padding: 3px;
  overflow: hidden;
  box-sizing: border-box;
  border: solid 1px var(--s-color-surface-variant, #C0C8CC);
  background: var(--s-color-surface-container, #ECEEF0);
}
:host([mode=fixed]){
  display: flex;
}
:host([mode=fixed]) ::slotted(s-segmented-button-item){
  flex-basis: 100%;
}
`,K0="<slot></slot>";class bs extends Z({style:Z0,template:K0,props:V0,setup(t){const n=t.querySelector("slot"),r=new vr({context:this,class:Ql,slot:n}),o=getComputedStyle(this),s=()=>{const i=o.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",a=o.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:i,duration:_t(a)}};return r.onUpdate=i=>{if(!i||!r.select||!this.isConnected)return;const a=i.shadowRoot.querySelector(".indicator").getBoundingClientRect(),c=r.select.shadowRoot.querySelector(".indicator"),d=c.getBoundingClientRect(),l=a.left-d.left;c.style.transform=`translateX(${d.left>a.left?l:Math.abs(l)}px)`,c.style.width=`${a.width}px`,i.style.zIndex="1";const u=c.animate([{transform:"translateX(0)",width:`${d.width}px`}],s());u.onfinish=u.oncancel=u.onremove=()=>{c.style.removeProperty("transform"),c.style.removeProperty("width"),i.style.removeProperty("z-index")}},{expose:{get options(){return r.list},get selectedIndex(){return r.selectedIndex}},value:{get:()=>r.value,set:i=>r.value=i}}}}){}const G0="s-segmented-button-item",X0=ae({selected:!1,disabled:!1,selectable:!0,$value:""}),Y0=`
:host{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 64px;
  padding: 0 16px;
  text-transform: capitalize;
  cursor: pointer;
  font-weight: 500;
  font-size: .8125rem;
  position: relative;
  box-sizing: border-box;
  border-radius: 20px;
  transition: color var(--s-motion-duration-medium4, 400ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  color: var(--s-color-on-surface, #191C1E);
}
:host([selected=true]){
  color: var(--s-color-on-primary, #ffffff);
}
:host([disabled=true]){
  pointer-events: none;
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent);
}
.indicator{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: inherit;
  background: var(--s-color-primary, #006782);
}
:host([selected=true]) .indicator{
  opacity: 1;
}
::slotted([slot]){
  width: 18px;
  height: 18px;
  color: inherit;
  fill: currentColor;
  flex-shrink: 0;
  position: relative;
}
::slotted([slot=start]){
  margin-right: 4px;
}
::slotted([slot=end]){
  margin-right: 4px;
}
.text{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  position: relative;
}
@supports not (color: color-mix(in srgb, black, white)){
  :host([disabled=true]){
    opacity: .38;
    color: var(--s-color-on-surface, #191C1E);
  }
}
`,J0=`
<div class="indicator" part="indicator"></div>
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple attached="true" part="ripple"></s-ripple>
`;class Ql extends Z({style:Y0,template:J0,props:X0,setup(){return this.addEventListener("click",()=>{!(this.parentNode instanceof bs)||this.selected||this.selectable&&this.dispatchEvent(new Event(`${ms}:select`,{bubbles:!0}))}),{selected:()=>{this.parentNode instanceof bs&&this.dispatchEvent(new CustomEvent(`${ms}:update`,{bubbles:!0,detail:{}}))}}}}){}bs.define(ms);Ql.define(G0);const Q0="s-skeleton",em=`
:host{
  display: block;
  height: 16px;
  animation: skeleton var(--s-motion-duration-extra-long4, 1000ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0)) infinite;
  background: linear-gradient(90deg, var(--s-color-surface-container-high, #E7E8EA) 25%, var(--s-color-surface-container-highest, #E1E3E4) 37%, var(--s-color-surface-container-high, #E7E8EA) 63%);
  background-size: 400% 100%;
  border-radius: 8px;
}
@keyframes skeleton{
  0%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0 50%;
  }
}
`;class tm extends Z({style:em}){}tm.define(Q0);const nm="s-slider",_n=ae({disabled:!1,$labeled:!1,$max:100,$min:0,$step:1,$value:0}),rm=`
:host{
  display: block;
  color: var(--s-color-primary, #006782);
  height: 16px;
  cursor: pointer;
  position: relative;
}
:host([disabled=true]){
  pointer-events: none;
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent) !important;
}
.container{
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  pointer-events: none;
}
.track,
.indicator{
  height: 4px;
  border-radius: 2px;
  position: absolute;
  right: 0;
}
.track{
  background: var(--s-color-secondary-container, #CFE6F1);
  width: calc(100% - 20px);
}
:host([disabled=true]) .track{
  background: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
}
.indicator{
  left: 0;
  width: 0;
  background: currentColor;
}
.handle{
  position: relative;
  height: 16px;
  width: 16px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
}
.thumb{
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background: currentColor;
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
.thumb::before{
  content: '';
  position: absolute;
  left: -10px;
  top: -10px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: color-mix(in srgb, currentColor 20%, transparent);
  transform: scale(0);
  transition: transform var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
}
.active .thumb::before{
  transform: scale(1);
}
.label{
  position: absolute;
  bottom: 100%;
  margin-bottom: 12px;
  background: var(--s-color-inverse-surface, #2E3132);
  color: var(--s-color-inverse-on-surface, #EFF1F3);
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 0 6px;
  height: 24px;
  font-size: .75rem;
  transform: scale(0);
  transform-origin: center bottom;
  transition: transform var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  opacity: .85;
  z-index: 1;
  display: none;
}
.active .label{
  transform: scale(1);
}
:host([labeled=true]) .label{
  display: flex;
}
input{
  margin: 0;
  height: 100%;
  width: 100%;
  cursor: inherit;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}
@supports not (color: color-mix(in srgb, black, white)){
  :host([disabled=true]){
    color: var(--s-color-on-surface, #191C1E) !important;
  }
  :host([disabled=true]) .track{
    background: var(--s-color-surface-container-high, #E7E8EA) !important;
  }
  :host([disabled=true]) .thumb{
    opacity: .38;
  }
}
`,om=`
<div class="container" part="container">
  <div class="indicator" part="indicator"></div>
  <div class="track" part="track"></div>
  <div class="handle" part="handle">
    <div class="thumb" part="thumb"></div>
    <div class="label" part="label">${_n.value}</div>
  </div>
</div>
<input
  type="range"
  max="${_n.max}"
  min="${_n.min}"
  step="${_n.step}"
  value="${_n.value}"
/>
`;class sm extends Z({style:rm,template:om,props:_n,setup(t){const n=t.querySelector(".container"),r=t.querySelector(".indicator"),o=t.querySelector(".track"),s=t.querySelector(".handle"),i=t.querySelector(".label"),a=t.querySelector("input"),c=()=>{const d=Number(a.value),l=(d-this.min)*100/(this.max-this.min);s.style.left=`calc(${l}% - ${l*.16}px)`,r.style.width=`calc(${l}% - ${4+l*.16}px)`,o.style.width=`calc(${100-l}% - ${20-l*.16}px)`,i.textContent=String(d)};return a.onchange=()=>this.dispatchEvent(new Event("change")),a.oninput=()=>{this.value=Number(a.value),this.dispatchEvent(new Event("input"))},a.onmousedown=d=>d.button===0&&ut.pointerFine.matches&&n.classList.add("active"),a.onmouseup=()=>ut.pointerFine.matches&&n.classList.remove("active"),a.ontouchstart=()=>ut.pointerCoarse.matches&&n.classList.add("active"),a.ontouchend=()=>ut.pointerCoarse.matches&&n.classList.remove("active"),a.ontouchcancel=()=>ut.pointerCoarse.matches&&n.classList.remove("active"),{max:d=>{a.max=String(d),c()},min:d=>{a.min=String(d),c()},step:d=>{a.step=String(d),c()},value:d=>{a.value=String(d),c()}}}}){}sm.define(nm);const Lr=document.createElement("div");Lr.setAttribute("style","position: fixed;right: 0;bottom: 0;width: 100%;height: 100%;pointer-events: none");const ec=e=>{e.appendChild(Lr);const t=Lr.getBoundingClientRect();return e.removeChild(Lr),{left:t.left,top:t.top,width:t.width,height:t.height}},im="s-snackbar",am=ae({type:["none","info","success","warning","error"],align:["auto","top","bottom"],$duration:4e3}),lm=go({show:Event,showed:Event,closed:Event}),cm=`
:host{
  display: inline-block;
  vertical-align: middle;
}
.popup{
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  max-width: none;
  max-height: none;
  display: none;
  overflow: hidden;
  box-sizing: border-box;
  pointer-events: none;
  padding: 16px;
  justify-content: center;
  transition: transform var(--s-motion-duration-medium4, 400ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
}
.popup.show{
  display: flex;
}
.container{
  outline: none;
  align-self: flex-end;
  width: fit-content;
  display: flex;
  align-items: center;
  min-height: 48px;
  line-height: 22px;
  border-radius: 4px;
  padding: 6px 16px;
  font-size: .875rem;
  font-weight: 500;
  box-sizing: border-box;
  max-width: 320px;
  transition: box-shadow var(--s-motion-duration-medium4, 400ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  box-shadow: var(--s-elevation-level3, 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12));
  background: var(--s-color-inverse-surface, #2E3132);
  color: var(--s-color-inverse-on-surface, #EFF1F3);
}
.text{
  flex-grow: 1;
  min-width: 0;
  user-select: text;
  -webkit-user-select: text;
}
.icon{
  display: none;
}
:host([type=info]) .info,
:host([type=success]) .success,
:host([type=warning]) .warning,
:host([type=error]) .error{
  display: block;
}
:host([type=info]) .container{
  color: var(--s-color-on-secondary, #ffffff);
  background: var(--s-color-secondary, #4C616B);
}
:host([type=success]) .container{
  color: var(--s-color-on-success, #ffffff);
  background: var(--s-color-success, #006d43);
}
:host([type=warning]) .container{
  color: var(--s-color-on-warning, #ffffff);
  background: var(--s-color-warning, #6f5d00);
}
:host([type=error]) .container{
  color: var(--s-color-on-error, #ffffff);
  background: var(--s-color-error, #BA1A1A);
}
:host([type=info]) ::slotted([slot=action]),
:host([type=success]) ::slotted([slot=action]),
:host([type=warning]) ::slotted([slot=action]),
:host([type=error]) ::slotted([slot=action]){
  color: currentColor;
}
svg,
::slotted([slot=icon]){
  width: 24px;
  height: 24px;
  color: currentColor;
  fill: currentColor;
  margin-right: 12px;
  margin-left: -4px;
}
::slotted([slot=action]){
  font-size: inherit;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  padding: 0 12px;
  border-radius: 4px;
  margin-right: -8px;
  margin-left: 12px;
  cursor: pointer;
  height: 36px;
  font-size: .875rem;
  color: var(--s-color-inverse-primary, #60D4FE);
}
@media (max-width: 375px){
  .popup{
    padding: 8px;
  }
}
@media (pointer: fine){
  .container:hover{
    box-shadow: var(--s-elevation-level4, 0 8px 10px -5px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12));
  }
}
`,dm=`
<slot name="trigger"></slot>
<div class="popup" popover="manual" part="popup">
  <div class="container" part="container">
    <slot name="icon">
      <svg viewBox="0 0 24 24" class="icon info">
        <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
      </svg>
      <svg viewBox="0 0 24 24" class="icon success">
        <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
      </svg>
      <svg viewBox="0 0 24 24" class="icon warning">
        <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
      </svg>
      <svg viewBox="0 0 24 24" class="icon error">
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
      </svg>
    </slot>
    <div class="text" part="text">
      <slot></slot>
    </div>
    <slot name="action"></slot>
  </div>
</div>
`,um=e=>{let t=document.body;const n=new Js;n.style.display="block";const r=document.body.firstElementChild;if(r&&r.tagName==="S-PAGE"&&(t=r),typeof e=="string")n.textContent=e;else{if(e.root&&(t=e.root),e.align&&(n.align=e.align),e.icon&&(e.icon instanceof Element&&(e.icon.slot="icon",n.appendChild(e.icon)),typeof e.icon=="string"&&(n.innerHTML=e.icon)),n.append(e.text),e.type&&(n.type=e.type),e.action){const o=document.createElement("s-button");o.type="text",o.slot="action",typeof e.action=="string"?o.textContent=e.action:(o.textContent=e.action.text,o.addEventListener("click",e.action.click)),n.appendChild(o)}typeof e.duration=="number"&&(n.duration=e.duration)}return t.appendChild(n),n.addEventListener("closed",()=>t.removeChild(n)),n.show(),n},la={top:[],bottom:[]};class Js extends Z({style:cm,template:dm,props:am,events:lm,methods:{builder:um},setup(t){const n=t.querySelector(".popup"),r=t.querySelector(".container"),o=getComputedStyle(this),s=()=>{const l=o.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",u=o.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:l,duration:_t(u)}},i={timer:0,gap:8},a=()=>this.align==="auto"?ut.pointerCoarse.matches?"top":"bottom":this.align,c=()=>{if(!this.isConnected||n.classList.contains("show"))return;if(n.classList.add("show"),n.showPopover)n.showPopover();else{const b=ec(t);n.style.width=`${innerWidth}px`,n.style.height=`${innerHeight}px`,n.style.marginLeft=`${-b.left}px`,n.style.marginTop=`${-b.top}px`,n.style.zIndex="3"}const l=a();r.style.alignSelf={top:"flex-start",bottom:"flex-end"}[l];const u=la[l],f={top:1,bottom:-1}[l];let h=r.offsetHeight+i.gap;for(const b of u)b.style.transform=`translateY(${h*f}px)`,h+=b.firstElementChild.offsetHeight+i.gap;const p=r.animate({opacity:[0,1],transform:[`translateY(calc(${f*-100}% + 16px))`,""],pointerEvents:"auto"},{...s(),fill:"forwards"});this.dispatchEvent(new Event("show")),this.duration>0&&(i.timer=setTimeout(d,this.duration)),n.dataset.align=l,u.unshift(n),p.finished.then(()=>this.dispatchEvent(new Event("showed")))},d=()=>{if(!this.isConnected||!n.classList.contains("show"))return;clearTimeout(i.timer);const l=n.dataset.align,u=la[l],f={top:1,bottom:-1}[l],h=u.indexOf(n);for(let b=h+1;b<u.length;b++){const y=u[b],w=Math.abs(Number(y.style.transform.slice(11).slice(0,-3)));y.style.transform=`translateY(${(w-r.offsetHeight-i.gap)*f}px)`}const p=r.animate({opacity:[1,0],transform:`translateY(calc(${f*-100}% + 16px))`},s());this.dispatchEvent(new Event("close")),p.finished.then(()=>{n.hidePopover&&n.hidePopover(),n.removeAttribute("style"),n.classList.remove("show"),this.dispatchEvent(new Event("closed"))}),u.splice(h,1)};return r.onmouseenter=()=>clearTimeout(i.timer),r.onmouseleave=()=>n.classList.contains("show")&&this.duration>0&&(i.timer=setTimeout(d,this.duration)),t.querySelector("slot[name=trigger]").onclick=c,t.querySelector("slot[name=action]").onclick=d,{expose:{show:c,close:d}}}}){}Js.define(im);const fm="s-switch",pm=ae({disabled:!1,checked:!1}),hm=`
:host{
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: var(--s-color-primary, #006782);
  width: 52px;
  aspect-ratio: 1.625;
  -webkit-aspect-ratio: 1.625;
  border-radius: 16px;
}
:host([disabled=true]){
  pointer-events: none;
}
.track{
  width: 100%;
  height: 100%;
  border: solid 2px var(--s-color-outline, #70787D);
  box-sizing: border-box;
  border-radius: inherit;
}
:host([disabled=true]) .track{
  border-color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
}
:host([checked=true]) .track{
  border-width: 0;
  background: currentColor;
}
:host([disabled=true][checked=true]) .track{
  background: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
}
.ripple{
  height: 125%;
  width: auto;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  border-radius: 50%;
  inset: auto;
  transition: transform var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: var(--s-color-outline, #70787D);
  transform: translateX(-10%);
}
:host([checked=true]) .ripple{
  transform: translateX(40%);
  color: currentColor;
}
.thumb{
  background: var(--s-color-outline, #70787D);
  border-radius: 50%;
  width: 40%;
  height: 40%;
  transition: transform var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  position: relative;
}
:host([disabled=true]) .thumb{
  background: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent);
}
:host([checked=true]) .thumb{
  background: var(--s-color-on-primary, #ffffff);
  transform: scale(1.5);
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
:host([disabled=true][checked=true]) .thumb{
  background: var(--s-color-surface, #F8F9FB);
  box-shadow: none;
}
.icon{
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  color: currentColor;
}
::slotted([slot=icon]),
svg{
  color: currentColor;
  fill: currentColor;
  width: 70%;
  height: 70%;
}
:host([checked=true]) .icon{
  opacity: 1;
}
:host([checked=true][disabled=true]) .icon{
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent);
}
@supports not (color: color-mix(in srgb, black, white)){
  :host([disabled=true]) .track{
    border-color: var(--s-color-surface-container-highest, #E1E3E4) !important;
  }
  :host([disabled=true][checked=true]) .track{
    background: var(--s-color-surface-container-highest, #E1E3E4) !important;
  }
  :host([disabled=true]) .thumb{
    background: var(--s-color-surface-container-highest, #E1E3E4) !important;
  }
  :host([disabled=true][checked=true]) .thumb{
    background: var(--s-color-surface, #F8F9FB) !important;
  }
}
`,gm=`
<div class="track" part="track"></div>
<s-ripple attached="true" class="ripple" part="ripple">
  <div class="thumb" part="thumb">
    <slot name="icon" class="icon"></slot>
  </div>
</s-ripple>
`;class mm extends Z({style:hm,template:gm,props:pm,setup(){this.addEventListener("click",()=>{this.checked=!this.checked,this.dispatchEvent(new Event("change"))})}}){}mm.define(fm);const vs="s-tab",bm=ae({mode:["scrollable","fixed"],$value:""}),vm=`
:host{
  display: flex;
  justify-content: flex-start;
  position: relative;
  background: var(--s-color-surface, #F8F9FB);
  color: var(--s-color-on-surface-variant, #40484C);
}
:host::before{
  content: '';
  position: absolute;
  width: 100%;
  border-bottom: solid 1px var(--s-color-surface-variant, #DCE4E8);
  bottom: 0;
  left: 0;
}
.container{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  scrollbar-width: none;
  overflow-x: auto;
}
.container::-webkit-scrollbar{
  display: none;
}
:host([mode=fixed]) .container{
  overflow: hidden;
  width: 100%;
}
::slotted(s-tab-item){
  flex-shrink: 0;
  flex-basis: auto;
}
:host([mode=fixed]) ::slotted(s-tab-item){
  flex-basis: 100%;
  flex-shrink: 1;
}
`,xm=`
<div class="container" part="container">
  <slot></slot>
</div>
`;class xs extends Z({style:vm,template:xm,props:bm,setup(t){const n=t.querySelector("slot"),r=t.querySelector(".container"),o=new vr({context:this,class:tc,slot:n}),s=getComputedStyle(this),i=()=>{const a=s.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",c=s.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:a,duration:_t(c)}};return o.onUpdate=a=>{var h;if(o.select&&r.scrollWidth!==r.offsetWidth){const p=o.select.offsetLeft-r.offsetLeft-(r.offsetWidth/2-o.select.offsetWidth/2);r.scrollTo({left:p,behavior:"smooth"})}if(!a||!o.select||!this.isConnected)return;const c=a.shadowRoot.querySelector(".indicator").getBoundingClientRect(),d=(h=o.select.shadowRoot)==null?void 0:h.querySelector(".indicator"),l=d.getBoundingClientRect(),u=c.left-l.left;d.style.transform=`translateX(${l.left>c.left?u:Math.abs(u)}px)`,d.style.width=`${c.width}px`;const f=d.animate([{transform:"translateX(0)",width:`${l.width}px`}],i());f.onfinish=f.oncancel=f.onremove=()=>{d.style.removeProperty("transform"),d.style.removeProperty("width")}},{expose:{get options(){return o.list},get selectedIndex(){return o.selectedIndex}},value:{get:()=>o.value,set:a=>o.value=a}}}}){}const ym="s-tab-item",wm=ae({selected:!1,$value:""}),Em=`
:host{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  position: relative;
  cursor: pointer;
  font-size: .875rem;
  font-weight: 500;
  text-transform: capitalize;
  padding: 0 16px;
}
:host([selected=true]){
  color: var(--s-color-primary, #006782);
}
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  min-height: inherit;
}
.indicator{
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: var(--s-color-primary, #006782);
  border-radius: 1.5px 1.5px 0 0;
  opacity: 0;
}
:host([selected=true]) .indicator{
  opacity: 1;
}
.text{
  display: flex;
  align-items: center;
  line-height: 1;
}
::slotted([slot=icon]){
  width: 24px;
  height: 24px;
  color: currentColor;
  fill: currentColor;
  margin: 10px 0;
}
::slotted([slot=text]){
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 1;
}
.icon ::slotted([slot=text]){
  margin-top: -6px;
  height: 26px;
}
::slotted([slot=badge]){
  margin-left: 4px;
}
::slotted([slot=badge]:not(:empty)){
  width: auto;
}
.icon ::slotted([slot=badge]){
  position: absolute;
  right: 0;
  width: 8px;
  top: 12px;
  margin-left: 0;
}
`,km=`
<div class="container" part="container">
  <slot name="icon"></slot>
  <div class="text" part="text">
    <slot name="text"></slot>
    <slot name="badge"></slot>
  </div>
  <div class="indicator" part="indicator"></div>
</div>
<s-ripple attached="true" part="ripple"></s-ripple>
`;class tc extends Z({style:Em,template:km,props:wm,setup(t){const n=t.querySelector(".container");return t.querySelector("[name=icon]").addEventListener("slotchange",r=>{const s=r.target.assignedElements().length;n.classList[s>0?"add":"remove"]("icon")}),this.addEventListener("click",()=>{!(this.parentNode instanceof xs)||this.selected||this.dispatchEvent(new Event(`${vs}:select`,{bubbles:!0}))}),{selected:()=>{this.parentNode instanceof xs&&this.dispatchEvent(new Event(`${vs}:update`,{bubbles:!0}))}}}}){}xs.define(vs);tc.define(ym);const $m="s-table",Sm=`
:host{
  display: inline-block;
  font-size: .875rem;
  overflow: auto;
  border: solid 1px var(--s-color-outline-variant, #C0C8CC);
  border-radius: 4px;
  white-space: nowrap;
}
slot{
  display: table;
  border-collapse: collapse;
  min-width: 100%;
}
@media (pointer: fine){
  :host::-webkit-scrollbar{
    width: 6px;
    height: 6px;
    background: transparent;
  }
  :host::-webkit-scrollbar-thumb{
    background: var(--s-color-outline-variant, #C0C8CC);
    border-radius: 3px;
  }
  @supports not selector(::-webkit-scrollbar){
    :host{
      scrollbar-color: var(--s-color-outline-variant, #C0C8CC) transparent;
    }
  }
}
`,_m=`
<slot></slot>
`;class Cm extends Z({style:Sm,template:_m}){}const Tm="s-thead",Am=`
:host{
  display: table-header-group;
  font-weight: 600;
  position: sticky;
  top: 0;
  border-bottom: solid 1px var(--s-color-outline-variant, #C0C8CC);
  background: var(--s-color-surface-container, #ECEEF0);
  color: var(--s-color-on-surface-variant, #40484C);
}
`,Rm="<slot></slot>";class Om extends Z({style:Am,template:Rm}){}const Mm="s-tbody",Nm=`
:host{
  display: table-row-group;
  color: var(--s-color-on-surface, #191C1E);
}
::slotted(s-tr:not(:first-child)){
  border-top: solid 1px var(--s-color-outline-variant, #C0C8CC);
}
`,Lm="<slot></slot>";class Pm extends Z({style:Nm,template:Lm}){}const Fm="s-tr",Dm=`
:host{
  display: table-row;
}
`,Im="<slot></slot>";class Bm extends Z({style:Dm,template:Im}){}const qm="s-th",zm=`
:host{
  display: table-cell;
  padding: 12px 16px;
  text-transform: capitalize;
}
`,Hm="<slot></slot>";class Um extends Z({style:zm,template:Hm}){}const jm="s-td",Wm=`
:host{
  display: table-cell;
  user-select: text;
  padding: 12px 16px;
}
`,Vm="<slot></slot>";class Zm extends Z({style:Wm,template:Vm}){}Cm.define($m);Om.define(Tm);Pm.define(Mm);Bm.define(Fm);Um.define(qm);Zm.define(jm);const Km="s-text-field",Gm=ae({$label:"",$placeholder:"",disabled:!1,type:["text","number","password","multiline"],error:!1,$value:"",$maxLength:-1,readOnly:!1,multiLine:!1,countered:!1}),Xm=`
:host{
  display: inline-grid;
  vertical-align: middle;
  font-size: .875rem;
  min-height: 48px;
  width: 280px;
  color: var(--s-color-on-surface, #191C1E);
  --text-field-border-radius: 4px;
  --text-field-border-color: var(--s-color-outline, #70787D);
  --text-field-padding: 16px;
  --text-field-padding-top: var(--text-field-padding);
  --text-field-padding-bottom: var(--text-field-padding);
  --text-field-padding-left: var(--text-field-padding);
  --text-field-padding-right: var(--text-field-padding);
}
:host([disabled=true]){
  pointer-events: none;
  opacity: .38;
}
:host([type=multiline]){
  line-height: 24px;
  --text-field-padding-top: 12px;
  --text-field-padding-bottom: 12px;
}
.field{
  display: block;
  min-height: inherit;
  font-size: inherit;
  --field-border-radius: var(--text-field-border-radius);
  --field-border-color: var(--text-field-border-color);
  --field-padding: var(--text-field-padding);
  --field-padding-top: var(--text-field-padding-top);
  --field-padding-bottom: var(--text-field-padding-bottom);
  --field-padding-left: var(--text-field-padding-left);
  --field-padding-right: var(--text-field-padding-right);
}
:host([error=true]) .field{
  --s-color-primary: var(--s-color-error, #BA1A1A);
  --field-border-color: var(--s-color-error, #BA1A1A);
  --field-border-width: 2px;
}
:host([type=multiline]) .label{
  height: fit-content;
  padding-top: var(--text-field-padding-top);
  padding-bottom: var(--text-field-padding-bottom);
}
.view{
  flex-grow: 1;
  padding: 0;
  flex-direction: column;
  position: relative;
}
input,
textarea{
  border: none;
  height: 100%;
  width: 100%;
  padding-left: var(--field-padding-left);
  padding-right: var(--field-padding-right);
  background: none;
  outline: none;
  font-size: inherit;
  color: inherit;
  box-sizing: border-box;
  line-height: inherit;
  font-family: inherit;
  caret-color: var(--s-color-primary, #006782);
  display: block;
  -moz-appearance: textfield;
}
textarea{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  resize: none;
  scrollbar-width: none;
  display: none;
}
input::placeholder,
textarea::placeholder{
  color: var(--text-field-border-color);
}
input::selection,
textarea::selection{
  background: var(--s-color-primary, #006782);
  color: var(--s-color-on-primary, #ffffff);
}
:host([type=multiline]) input,
.text>.counter{
  display: none;
}
textarea,
.shadow{
  line-height: inherit;
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  box-sizing: border-box;
  padding-top: var(--text-field-padding-top);
  padding-bottom: var(--text-field-padding-bottom);
  padding-left: var(--text-field-padding-left);
  padding-right: var(--text-field-padding-right);
}
:host([type=multiline]) :is(textarea, .shadow),
:host([countered=true]) .counter{
  display: block;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
  -webkit-appearance: none;
}
input:is(::-ms-clear, ::-ms-reveal){
  display: none;
}
.shadow{
  pointer-events: none;
  display: none;
  opacity: 0;
  width: 100%;
  min-height: 100%;
}
.shadow::after{
  content: ' ';
}
.text{
  display: flex;
  align-items: flex-end;
  width: 100%;
  box-sizing: border-box;
  font-size: .75rem;
  color: var(--text-field-border-color);
}
:host([error=true]) .text{
  color: var(--s-color-error, #BA1A1A);
}
.text>slot[name=text]{
  display: block;
  flex-grow: 1;
}
.text>.counter,
::slotted([slot=text]){
  margin-top: 8px;
}
.toggle{
  flex-direction: column;
}
.toggle,
.toggle>s-ripple{
  display: flex;
  justify-content: center;
  align-items: center;
}
.toggle svg{
  pointer-events: none;
}
.toggle>s-ripple{
  display: none;
}
.toggle>.up,
.toggle>.down{
  height: 16px;
  width: 24px;
  border-radius: 4px;
  margin-right: 8px;
  margin-left: -4px;
}
.toggle>.visibility{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 4px 0 -4px;
}
.toggle>.visibility>svg{
  display: none;
}
:host([type=number]) .toggle>:is(.up, .down),
:host([type=password]) :is(.toggle>.visibility, .toggle:not(.show-password)>.visibility>.on, .toggle.show-password>.visibility>.off){
  display: flex;
}
svg,
::slotted(svg){
  fill: var(--s-color-on-surface-variant, #40484C);
  height: 24px;
  width: 24px;
  flex-shrink: 0;
}
::slotted(s-icon-button[slot=start]){
  margin-left: 4px;
  margin-right: calc(var(--text-field-border-radius) - var(--text-field-padding-left) + 4px);
}
::slotted(s-icon-button[slot=end]){
  margin-right: 4px;
  margin-left: calc(var(--text-field-border-radius) - var(--text-field-padding-right) + 4px);
}
::slotted(:is(s-icon[slot=start], svg[slot=start])){
  margin-left: 12px;
  margin-right: calc(var(--text-field-border-radius) - var(--text-field-padding-left) + 8px);
}
::slotted(:is(s-icon[slot=end], svg[slot=end])){
  margin-right: 12px;
  margin-left: calc(var(--text-field-border-radius) - var(--text-field-padding-right) + 8px);
}
`,Ym=`
<s-field class="field" fixed="false">
  <div slot="label" class="label"></div>
  <div class="view">
    <div class="shadow"></div>
    <input type="text" part="input">
    <textarea part="textarea"></textarea>
  </div>
  <slot slot="start" name="start"></slot>
  <slot slot="end" name="end">
    <div class="toggle" part="toggle">
      <s-ripple class="up">
        <svg viewBox="0 -960 960 960">
          <path d="m280-400 200-200 200 200H280Z"></path>
        </svg>
      </s-ripple>
      <s-ripple class="down">
        <svg viewBox="0 -960 960 960">
          <path d="M480-360 280-560h400L480-360Z"></path>
        </svg>
      </s-ripple>
      <s-ripple class="visibility">
        <svg viewBox="0 -960 960 960" class="on">
          <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path>
        </svg>
        <svg viewBox="0 -960 960 960" class="off">
          <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"></path>
        </svg>
      </s-ripple>
    </div>
  </slot>
</s-field>
<div class="text" part="text">
  <slot name="text"></slot>
  <div class="counter" part="counter"></div>
</div>
`;class Jm extends Z({style:Xm,template:Ym,props:Gm,setup(t){const n=t.querySelector(".field"),r=t.querySelector(".label"),o=t.querySelector(".shadow"),s=t.querySelector(".counter"),i=t.querySelector(".toggle"),a={input:t.querySelector("input"),textarea:t.querySelector("textarea")},c=()=>this.type==="multiline"?a.textarea:a.input,d=()=>{this.countered&&(s.textContent=`${c().value.length}/${this.maxLength}`)},l=()=>this.dispatchEvent(new Event("change")),u=()=>{n.fixed=!0,n.focused=!0},f=()=>{n.focused=!1,c().value===""&&!this.error&&(n.fixed=!1)};a.input.oninput=d,a.input.onfocus=u,a.input.onblur=f,a.input.onchange=l,a.textarea.onfocus=u,a.textarea.onblur=f,a.textarea.onchange=l,a.textarea.oninput=()=>{o.textContent=a.textarea.value,d()};const h=p=>{this.value=`${parseInt(this.value||"0")+p}`,this.dispatchEvent(new Event("input")),this.dispatchEvent(new Event("change"))};return t.querySelector(".up").onclick=()=>h(1),t.querySelector(".down").onclick=()=>h(-1),t.querySelector(".visibility").onclick=()=>{a.input.type=i.classList.contains("show-password")?"password":"text",i.classList.toggle("show-password")},{expose:{get native(){return c()}},label:p=>r.textContent=p,type:(p,b)=>{a.input.type=p==="password"?i.classList.contains("show-password")?"text":"password":p,p==="multiline"&&(a.textarea.value=a.input.value,o.textContent=a.input.value),b==="multiline"&&(a.input.value=a.textarea.value)},error:p=>{if(p)return n.fixed=!0;c().value===""&&(n.fixed=!1)},value:{get:()=>c().value,set:p=>{a.input.value=p,a.textarea.value=p,o.textContent=p,d(),this.error||(n.fixed=p!=="")}},placeholder:p=>{a.input.placeholder=p,a.textarea.placeholder=p},readOnly:p=>{a.input.readOnly=p,a.textarea.readOnly=p},disabled:p=>{a.input.disabled=p,a.textarea.disabled=p},maxLength:p=>{a.input.maxLength=p,a.textarea.maxLength=p,d()},multiLine:p=>this.type=p?"multiline":"text",countered:d}}}){}Jm.define(Km);const Qm="s-tooltip",eb=ae({align:["top","bottom","left","right"],disabled:!1}),tb=`
:host{
  display: inline-flex;
  vertical-align: middle;
  text-align: left;
}
.popup{
  position: fixed;
  display: none;
  inset: 0;
  margin: 0;
  width: fit-content;
  height: fit-content;
  background: none;
  border: none;
  outline: none;
  max-width: none;
  max-height: none;
  font-size: .875rem;
  font-weight: 400;
  padding: 6px 8px;
  border-radius: 4px;
  white-space: nowrap;
  filter: opacity(.88);
  background: var(--s-color-inverse-surface, #2E3132);
  color: var(--s-color-inverse-on-surface, #EFF1F3);
}
::slotted(img){
  display: block;
  border-radius: 4px;
  margin: 2px 0;
  max-width: 280px;
}
`,nb=`
<slot name="trigger" part="trigger"></slot>
<div class="popup" popover="manual" part="popup">
  <slot></slot>
</div>
`;class rb extends Z({style:tb,template:nb,props:eb,setup(t){const n=t.querySelector("slot[name=trigger]"),r=t.querySelector(".popup"),o=getComputedStyle(this);let s=!1;const i=()=>{const l=o.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",u=o.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:l,duration:_t(u)}},a=()=>{if(!this.isConnected||this.disabled)return;if(r.style.display="block",s=!0,r.showPopover)r.showPopover();else{const y=ec(t);r.style.marginLeft=`${-y.left}px`,r.style.marginTop=`${-y.top}px`,r.style.zIndex="3"}const l=this.getBoundingClientRect(),u=4,f=r.offsetWidth,h=r.offsetHeight,p={top:0,left:0},b={middle(y){p.left=l.left-(f-l.width)/2;const w=()=>(p.top=l.top+l.height+u,p.top+h>innerHeight),E=()=>(p.top=l.top-h-u,p.top<0);p.left<0&&(p.left=l.left),p.left+f>innerWidth&&(p.left=l.left+l.width-f),y==="top"&&E()&&w(),y==="bottom"&&w()&&E()},left(){return p.left=l.left-f-u,p.top=l.top-(h-l.height)/2,p.left<0},right(){return p.left=l.left+l.width+u,p.top=l.top-(h-l.height)/2,p.left+f>innerWidth}};switch(this.align){case"bottom":case"top":b.middle(this.align);break;case"left":b.left()&&b.right();break;case"right":b.right()&&b.left();break}r.style.top=`${p.top}px`,r.style.left=`${p.left}px`,r.animate({opacity:[0,1]},i())};let c=0;const d=()=>{clearTimeout(c),s=!1,r.animate({opacity:[1,0]},i()).finished.then(()=>{s||(r.hidePopover&&r.hidePopover(),r.style.removeProperty("display"))})};n.addEventListener("touchstart",()=>{ut.pointerFine.matches||(clearTimeout(c),c=setTimeout(()=>a(),600))},{passive:!0}),n.ontouchend=()=>{clearTimeout(c),d()},n.onmouseenter=()=>ut.pointerFine.matches&&a(),n.onmouseleave=()=>ut.pointerFine.matches&&d()}}){}rb.define(Qm);function nc(e,t){return function(){return e.apply(t,arguments)}}const{toString:ob}=Object.prototype,{getPrototypeOf:Qs}=Object,{iterator:mo,toStringTag:rc}=Symbol,bo=(e=>t=>{const n=ob.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ct=e=>(e=e.toLowerCase(),t=>bo(t)===e),vo=e=>t=>typeof t===e,{isArray:In}=Array,gr=vo("undefined");function sb(e){return e!==null&&!gr(e)&&e.constructor!==null&&!gr(e.constructor)&&at(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const oc=Ct("ArrayBuffer");function ib(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&oc(e.buffer),t}const ab=vo("string"),at=vo("function"),sc=vo("number"),xo=e=>e!==null&&typeof e=="object",lb=e=>e===!0||e===!1,Pr=e=>{if(bo(e)!=="object")return!1;const t=Qs(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(rc in e)&&!(mo in e)},cb=Ct("Date"),db=Ct("File"),ub=Ct("Blob"),fb=Ct("FileList"),pb=e=>xo(e)&&at(e.pipe),hb=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||at(e.append)&&((t=bo(e))==="formdata"||t==="object"&&at(e.toString)&&e.toString()==="[object FormData]"))},gb=Ct("URLSearchParams"),[mb,bb,vb,xb]=["ReadableStream","Request","Response","Headers"].map(Ct),yb=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function xr(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),In(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let a;for(r=0;r<i;r++)a=s[r],t.call(null,e[a],a,e)}}function ic(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const gn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ac=e=>!gr(e)&&e!==gn;function ys(){const{caseless:e}=ac(this)&&this||{},t={},n=(r,o)=>{const s=e&&ic(t,o)||o;Pr(t[s])&&Pr(r)?t[s]=ys(t[s],r):Pr(r)?t[s]=ys({},r):In(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&xr(arguments[r],n);return t}const wb=(e,t,n,{allOwnKeys:r}={})=>(xr(t,(o,s)=>{n&&at(o)?e[s]=nc(o,n):e[s]=o},{allOwnKeys:r}),e),Eb=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),kb=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},$b=(e,t,n,r)=>{let o,s,i;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=n!==!1&&Qs(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Sb=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},_b=e=>{if(!e)return null;if(In(e))return e;let t=e.length;if(!sc(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Cb=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Qs(Uint8Array)),Tb=(e,t)=>{const r=(e&&e[mo]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},Ab=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Rb=Ct("HTMLFormElement"),Ob=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),ca=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Mb=Ct("RegExp"),lc=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};xr(n,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(r[s]=i||o)}),Object.defineProperties(e,r)},Nb=e=>{lc(e,(t,n)=>{if(at(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(at(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Lb=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return In(e)?r(e):r(String(e).split(t)),n},Pb=()=>{},Fb=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Db(e){return!!(e&&at(e.append)&&e[rc]==="FormData"&&e[mo])}const Ib=e=>{const t=new Array(10),n=(r,o)=>{if(xo(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=In(r)?[]:{};return xr(r,(i,a)=>{const c=n(i,o+1);!gr(c)&&(s[a]=c)}),t[o]=void 0,s}}return r};return n(e,0)},Bb=Ct("AsyncFunction"),qb=e=>e&&(xo(e)||at(e))&&at(e.then)&&at(e.catch),cc=((e,t)=>e?setImmediate:t?((n,r)=>(gn.addEventListener("message",({source:o,data:s})=>{o===gn&&s===n&&r.length&&r.shift()()},!1),o=>{r.push(o),gn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",at(gn.postMessage)),zb=typeof queueMicrotask<"u"?queueMicrotask.bind(gn):typeof process<"u"&&process.nextTick||cc,Hb=e=>e!=null&&at(e[mo]),k={isArray:In,isArrayBuffer:oc,isBuffer:sb,isFormData:hb,isArrayBufferView:ib,isString:ab,isNumber:sc,isBoolean:lb,isObject:xo,isPlainObject:Pr,isReadableStream:mb,isRequest:bb,isResponse:vb,isHeaders:xb,isUndefined:gr,isDate:cb,isFile:db,isBlob:ub,isRegExp:Mb,isFunction:at,isStream:pb,isURLSearchParams:gb,isTypedArray:Cb,isFileList:fb,forEach:xr,merge:ys,extend:wb,trim:yb,stripBOM:Eb,inherits:kb,toFlatObject:$b,kindOf:bo,kindOfTest:Ct,endsWith:Sb,toArray:_b,forEachEntry:Tb,matchAll:Ab,isHTMLForm:Rb,hasOwnProperty:ca,hasOwnProp:ca,reduceDescriptors:lc,freezeMethods:Nb,toObjectSet:Lb,toCamelCase:Ob,noop:Pb,toFiniteNumber:Fb,findKey:ic,global:gn,isContextDefined:ac,isSpecCompliantForm:Db,toJSONObject:Ib,isAsyncFn:Bb,isThenable:qb,setImmediate:cc,asap:zb,isIterable:Hb};function se(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}k.inherits(se,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}});const dc=se.prototype,uc={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{uc[e]={value:e}});Object.defineProperties(se,uc);Object.defineProperty(dc,"isAxiosError",{value:!0});se.from=(e,t,n,r,o,s)=>{const i=Object.create(dc);return k.toFlatObject(e,i,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),se.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const Ub=null;function ws(e){return k.isPlainObject(e)||k.isArray(e)}function fc(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function da(e,t,n){return e?e.concat(t).map(function(o,s){return o=fc(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function jb(e){return k.isArray(e)&&!e.some(ws)}const Wb=k.toFlatObject(k,{},null,function(t){return/^is[A-Z]/.test(t)});function yo(e,t,n){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,y){return!k.isUndefined(y[b])});const r=n.metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(t);if(!k.isFunction(o))throw new TypeError("visitor must be a function");function d(p){if(p===null)return"";if(k.isDate(p))return p.toISOString();if(!c&&k.isBlob(p))throw new se("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(p)||k.isTypedArray(p)?c&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function l(p,b,y){let w=p;if(p&&!y&&typeof p=="object"){if(k.endsWith(b,"{}"))b=r?b:b.slice(0,-2),p=JSON.stringify(p);else if(k.isArray(p)&&jb(p)||(k.isFileList(p)||k.endsWith(b,"[]"))&&(w=k.toArray(p)))return b=fc(b),w.forEach(function(A,R){!(k.isUndefined(A)||A===null)&&t.append(i===!0?da([b],R,s):i===null?b:b+"[]",d(A))}),!1}return ws(p)?!0:(t.append(da(y,b,s),d(p)),!1)}const u=[],f=Object.assign(Wb,{defaultVisitor:l,convertValue:d,isVisitable:ws});function h(p,b){if(!k.isUndefined(p)){if(u.indexOf(p)!==-1)throw Error("Circular reference detected in "+b.join("."));u.push(p),k.forEach(p,function(w,E){(!(k.isUndefined(w)||w===null)&&o.call(t,w,k.isString(E)?E.trim():E,b,f))===!0&&h(w,b?b.concat(E):[E])}),u.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return h(e),t}function ua(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ei(e,t){this._pairs=[],e&&yo(e,this,t)}const pc=ei.prototype;pc.append=function(t,n){this._pairs.push([t,n])};pc.toString=function(t){const n=t?function(r){return t.call(this,r,ua)}:ua;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Vb(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function hc(e,t,n){if(!t)return e;const r=n&&n.encode||Vb;k.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let s;if(o?s=o(t,n):s=k.isURLSearchParams(t)?t.toString():new ei(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class fa{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){k.forEach(this.handlers,function(r){r!==null&&t(r)})}}const gc={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Zb=typeof URLSearchParams<"u"?URLSearchParams:ei,Kb=typeof FormData<"u"?FormData:null,Gb=typeof Blob<"u"?Blob:null,Xb={isBrowser:!0,classes:{URLSearchParams:Zb,FormData:Kb,Blob:Gb},protocols:["http","https","file","blob","url","data"]},ti=typeof window<"u"&&typeof document<"u",Es=typeof navigator=="object"&&navigator||void 0,Yb=ti&&(!Es||["ReactNative","NativeScript","NS"].indexOf(Es.product)<0),Jb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Qb=ti&&window.location.href||"http://localhost",ev=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ti,hasStandardBrowserEnv:Yb,hasStandardBrowserWebWorkerEnv:Jb,navigator:Es,origin:Qb},Symbol.toStringTag,{value:"Module"})),Ge={...ev,...Xb};function tv(e,t){return yo(e,new Ge.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return Ge.isNode&&k.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function nv(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function rv(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function mc(e){function t(n,r,o,s){let i=n[s++];if(i==="__proto__")return!0;const a=Number.isFinite(+i),c=s>=n.length;return i=!i&&k.isArray(o)?o.length:i,c?(k.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!a):((!o[i]||!k.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&k.isArray(o[i])&&(o[i]=rv(o[i])),!a)}if(k.isFormData(e)&&k.isFunction(e.entries)){const n={};return k.forEachEntry(e,(r,o)=>{t(nv(r),o,n,0)}),n}return null}function ov(e,t,n){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const yr={transitional:gc,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=k.isObject(t);if(s&&k.isHTMLForm(t)&&(t=new FormData(t)),k.isFormData(t))return o?JSON.stringify(mc(t)):t;if(k.isArrayBuffer(t)||k.isBuffer(t)||k.isStream(t)||k.isFile(t)||k.isBlob(t)||k.isReadableStream(t))return t;if(k.isArrayBufferView(t))return t.buffer;if(k.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return tv(t,this.formSerializer).toString();if((a=k.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return yo(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),ov(t)):t}],transformResponse:[function(t){const n=this.transitional||yr.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(k.isResponse(t)||k.isReadableStream(t))return t;if(t&&k.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(i)throw a.name==="SyntaxError"?se.from(a,se.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ge.classes.FormData,Blob:Ge.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{yr.headers[e]={}});const sv=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),iv=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&sv[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},pa=Symbol("internals");function Vn(e){return e&&String(e).trim().toLowerCase()}function Fr(e){return e===!1||e==null?e:k.isArray(e)?e.map(Fr):String(e)}function av(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const lv=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Wo(e,t,n,r,o){if(k.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!k.isString(t)){if(k.isString(r))return t.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(t)}}function cv(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function dv(e,t){const n=k.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}let lt=class{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(a,c,d){const l=Vn(c);if(!l)throw new Error("header name must be a non-empty string");const u=k.findKey(o,l);(!u||o[u]===void 0||d===!0||d===void 0&&o[u]!==!1)&&(o[u||c]=Fr(a))}const i=(a,c)=>k.forEach(a,(d,l)=>s(d,l,c));if(k.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(k.isString(t)&&(t=t.trim())&&!lv(t))i(iv(t),n);else if(k.isObject(t)&&k.isIterable(t)){let a={},c,d;for(const l of t){if(!k.isArray(l))throw TypeError("Object iterator must return a key-value pair");a[d=l[0]]=(c=a[d])?k.isArray(c)?[...c,l[1]]:[c,l[1]]:l[1]}i(a,n)}else t!=null&&s(n,t,r);return this}get(t,n){if(t=Vn(t),t){const r=k.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return av(o);if(k.isFunction(n))return n.call(this,o,r);if(k.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Vn(t),t){const r=k.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Wo(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=Vn(i),i){const a=k.findKey(r,i);a&&(!n||Wo(r,r[a],a,n))&&(delete r[a],o=!0)}}return k.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||Wo(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return k.forEach(this,(o,s)=>{const i=k.findKey(r,s);if(i){n[i]=Fr(o),delete n[s];return}const a=t?cv(s):String(s).trim();a!==s&&delete n[s],n[a]=Fr(o),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return k.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&k.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[pa]=this[pa]={accessors:{}}).accessors,o=this.prototype;function s(i){const a=Vn(i);r[a]||(dv(o,i),r[a]=!0)}return k.isArray(t)?t.forEach(s):s(t),this}};lt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(lt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});k.freezeMethods(lt);function Vo(e,t){const n=this||yr,r=t||n,o=lt.from(r.headers);let s=r.data;return k.forEach(e,function(a){s=a.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function bc(e){return!!(e&&e.__CANCEL__)}function Bn(e,t,n){se.call(this,e??"canceled",se.ERR_CANCELED,t,n),this.name="CanceledError"}k.inherits(Bn,se,{__CANCEL__:!0});function vc(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new se("Request failed with status code "+n.status,[se.ERR_BAD_REQUEST,se.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function uv(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function fv(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(c){const d=Date.now(),l=r[s];i||(i=d),n[o]=c,r[o]=d;let u=s,f=0;for(;u!==o;)f+=n[u++],u=u%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),d-i<t)return;const h=l&&d-l;return h?Math.round(f*1e3/h):void 0}}function pv(e,t){let n=0,r=1e3/t,o,s;const i=(d,l=Date.now())=>{n=l,o=null,s&&(clearTimeout(s),s=null),e.apply(null,d)};return[(...d)=>{const l=Date.now(),u=l-n;u>=r?i(d,l):(o=d,s||(s=setTimeout(()=>{s=null,i(o)},r-u)))},()=>o&&i(o)]}const Xr=(e,t,n=3)=>{let r=0;const o=fv(50,250);return pv(s=>{const i=s.loaded,a=s.lengthComputable?s.total:void 0,c=i-r,d=o(c),l=i<=a;r=i;const u={loaded:i,total:a,progress:a?i/a:void 0,bytes:c,rate:d||void 0,estimated:d&&a&&l?(a-i)/d:void 0,event:s,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(u)},n)},ha=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},ga=e=>(...t)=>k.asap(()=>e(...t)),hv=Ge.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Ge.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Ge.origin),Ge.navigator&&/(msie|trident)/i.test(Ge.navigator.userAgent)):()=>!0,gv=Ge.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];k.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),k.isString(r)&&i.push("path="+r),k.isString(o)&&i.push("domain="+o),s===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function mv(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function bv(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function xc(e,t,n){let r=!mv(t);return e&&(r||n==!1)?bv(e,t):t}const ma=e=>e instanceof lt?{...e}:e;function vn(e,t){t=t||{};const n={};function r(d,l,u,f){return k.isPlainObject(d)&&k.isPlainObject(l)?k.merge.call({caseless:f},d,l):k.isPlainObject(l)?k.merge({},l):k.isArray(l)?l.slice():l}function o(d,l,u,f){if(k.isUndefined(l)){if(!k.isUndefined(d))return r(void 0,d,u,f)}else return r(d,l,u,f)}function s(d,l){if(!k.isUndefined(l))return r(void 0,l)}function i(d,l){if(k.isUndefined(l)){if(!k.isUndefined(d))return r(void 0,d)}else return r(void 0,l)}function a(d,l,u){if(u in t)return r(d,l);if(u in e)return r(void 0,d)}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(d,l,u)=>o(ma(d),ma(l),u,!0)};return k.forEach(Object.keys(Object.assign({},e,t)),function(l){const u=c[l]||o,f=u(e[l],t[l],l);k.isUndefined(f)&&u!==a||(n[l]=f)}),n}const yc=e=>{const t=vn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:s,headers:i,auth:a}=t;t.headers=i=lt.from(i),t.url=hc(xc(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&i.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(k.isFormData(n)){if(Ge.hasStandardBrowserEnv||Ge.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((c=i.getContentType())!==!1){const[d,...l]=c?c.split(";").map(u=>u.trim()).filter(Boolean):[];i.setContentType([d||"multipart/form-data",...l].join("; "))}}if(Ge.hasStandardBrowserEnv&&(r&&k.isFunction(r)&&(r=r(t)),r||r!==!1&&hv(t.url))){const d=o&&s&&gv.read(s);d&&i.set(o,d)}return t},vv=typeof XMLHttpRequest<"u",xv=vv&&function(e){return new Promise(function(n,r){const o=yc(e);let s=o.data;const i=lt.from(o.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:d}=o,l,u,f,h,p;function b(){h&&h(),p&&p(),o.cancelToken&&o.cancelToken.unsubscribe(l),o.signal&&o.signal.removeEventListener("abort",l)}let y=new XMLHttpRequest;y.open(o.method.toUpperCase(),o.url,!0),y.timeout=o.timeout;function w(){if(!y)return;const A=lt.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),q={data:!a||a==="text"||a==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:A,config:e,request:y};vc(function(te){n(te),b()},function(te){r(te),b()},q),y=null}"onloadend"in y?y.onloadend=w:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(w)},y.onabort=function(){y&&(r(new se("Request aborted",se.ECONNABORTED,e,y)),y=null)},y.onerror=function(){r(new se("Network Error",se.ERR_NETWORK,e,y)),y=null},y.ontimeout=function(){let R=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const q=o.transitional||gc;o.timeoutErrorMessage&&(R=o.timeoutErrorMessage),r(new se(R,q.clarifyTimeoutError?se.ETIMEDOUT:se.ECONNABORTED,e,y)),y=null},s===void 0&&i.setContentType(null),"setRequestHeader"in y&&k.forEach(i.toJSON(),function(R,q){y.setRequestHeader(q,R)}),k.isUndefined(o.withCredentials)||(y.withCredentials=!!o.withCredentials),a&&a!=="json"&&(y.responseType=o.responseType),d&&([f,p]=Xr(d,!0),y.addEventListener("progress",f)),c&&y.upload&&([u,h]=Xr(c),y.upload.addEventListener("progress",u),y.upload.addEventListener("loadend",h)),(o.cancelToken||o.signal)&&(l=A=>{y&&(r(!A||A.type?new Bn(null,e,y):A),y.abort(),y=null)},o.cancelToken&&o.cancelToken.subscribe(l),o.signal&&(o.signal.aborted?l():o.signal.addEventListener("abort",l)));const E=uv(o.url);if(E&&Ge.protocols.indexOf(E)===-1){r(new se("Unsupported protocol "+E+":",se.ERR_BAD_REQUEST,e));return}y.send(s||null)})},yv=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const s=function(d){if(!o){o=!0,a();const l=d instanceof Error?d:this.reason;r.abort(l instanceof se?l:new Bn(l instanceof Error?l.message:l))}};let i=t&&setTimeout(()=>{i=null,s(new se(`timeout ${t} of ms exceeded`,se.ETIMEDOUT))},t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(s):d.removeEventListener("abort",s)}),e=null)};e.forEach(d=>d.addEventListener("abort",s));const{signal:c}=r;return c.unsubscribe=()=>k.asap(a),c}},wv=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},Ev=async function*(e,t){for await(const n of kv(e))yield*wv(n,t)},kv=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},ba=(e,t,n,r)=>{const o=Ev(e,t);let s=0,i,a=c=>{i||(i=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:d,value:l}=await o.next();if(d){a(),c.close();return}let u=l.byteLength;if(n){let f=s+=u;n(f)}c.enqueue(new Uint8Array(l))}catch(d){throw a(d),d}},cancel(c){return a(c),o.return()}},{highWaterMark:2})},wo=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",wc=wo&&typeof ReadableStream=="function",$v=wo&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Ec=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Sv=wc&&Ec(()=>{let e=!1;const t=new Request(Ge.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),va=64*1024,ks=wc&&Ec(()=>k.isReadableStream(new Response("").body)),Yr={stream:ks&&(e=>e.body)};wo&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Yr[t]&&(Yr[t]=k.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new se(`Response type '${t}' is not supported`,se.ERR_NOT_SUPPORT,r)})})})(new Response);const _v=async e=>{if(e==null)return 0;if(k.isBlob(e))return e.size;if(k.isSpecCompliantForm(e))return(await new Request(Ge.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(k.isArrayBufferView(e)||k.isArrayBuffer(e))return e.byteLength;if(k.isURLSearchParams(e)&&(e=e+""),k.isString(e))return(await $v(e)).byteLength},Cv=async(e,t)=>{const n=k.toFiniteNumber(e.getContentLength());return n??_v(t)},Tv=wo&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:s,timeout:i,onDownloadProgress:a,onUploadProgress:c,responseType:d,headers:l,withCredentials:u="same-origin",fetchOptions:f}=yc(e);d=d?(d+"").toLowerCase():"text";let h=yv([o,s&&s.toAbortSignal()],i),p;const b=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let y;try{if(c&&Sv&&n!=="get"&&n!=="head"&&(y=await Cv(l,r))!==0){let q=new Request(t,{method:"POST",body:r,duplex:"half"}),J;if(k.isFormData(r)&&(J=q.headers.get("content-type"))&&l.setContentType(J),q.body){const[te,me]=ha(y,Xr(ga(c)));r=ba(q.body,va,te,me)}}k.isString(u)||(u=u?"include":"omit");const w="credentials"in Request.prototype;p=new Request(t,{...f,signal:h,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",credentials:w?u:void 0});let E=await fetch(p);const A=ks&&(d==="stream"||d==="response");if(ks&&(a||A&&b)){const q={};["status","statusText","headers"].forEach(Ae=>{q[Ae]=E[Ae]});const J=k.toFiniteNumber(E.headers.get("content-length")),[te,me]=a&&ha(J,Xr(ga(a),!0))||[];E=new Response(ba(E.body,va,te,()=>{me&&me(),b&&b()}),q)}d=d||"text";let R=await Yr[k.findKey(Yr,d)||"text"](E,e);return!A&&b&&b(),await new Promise((q,J)=>{vc(q,J,{data:R,headers:lt.from(E.headers),status:E.status,statusText:E.statusText,config:e,request:p})})}catch(w){throw b&&b(),w&&w.name==="TypeError"&&/Load failed|fetch/i.test(w.message)?Object.assign(new se("Network Error",se.ERR_NETWORK,e,p),{cause:w.cause||w}):se.from(w,w&&w.code,e,p)}}),$s={http:Ub,xhr:xv,fetch:Tv};k.forEach($s,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const xa=e=>`- ${e}`,Av=e=>k.isFunction(e)||e===null||e===!1,kc={getAdapter:e=>{e=k.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){n=e[s];let i;if(r=n,!Av(n)&&(r=$s[(i=String(n)).toLowerCase()],r===void 0))throw new se(`Unknown adapter '${i}'`);if(r)break;o[i||"#"+s]=r}if(!r){const s=Object.entries(o).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let i=t?s.length>1?`since :
`+s.map(xa).join(`
`):" "+xa(s[0]):"as no adapter specified";throw new se("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:$s};function Zo(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Bn(null,e)}function ya(e){return Zo(e),e.headers=lt.from(e.headers),e.data=Vo.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),kc.getAdapter(e.adapter||yr.adapter)(e).then(function(r){return Zo(e),r.data=Vo.call(e,e.transformResponse,r),r.headers=lt.from(r.headers),r},function(r){return bc(r)||(Zo(e),r&&r.response&&(r.response.data=Vo.call(e,e.transformResponse,r.response),r.response.headers=lt.from(r.response.headers))),Promise.reject(r)})}const $c="1.9.0",Eo={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Eo[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const wa={};Eo.transitional=function(t,n,r){function o(s,i){return"[Axios v"+$c+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,a)=>{if(t===!1)throw new se(o(i," has been removed"+(n?" in "+n:"")),se.ERR_DEPRECATED);return n&&!wa[i]&&(wa[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,a):!0}};Eo.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Rv(e,t,n){if(typeof e!="object")throw new se("options must be an object",se.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const a=e[s],c=a===void 0||i(a,s,e);if(c!==!0)throw new se("option "+s+" must be "+c,se.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new se("Unknown option "+s,se.ERR_BAD_OPTION)}}const Dr={assertOptions:Rv,validators:Eo},Ot=Dr.validators;let bn=class{constructor(t){this.defaults=t||{},this.interceptors={request:new fa,response:new fa}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const s=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=vn(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&Dr.assertOptions(r,{silentJSONParsing:Ot.transitional(Ot.boolean),forcedJSONParsing:Ot.transitional(Ot.boolean),clarifyTimeoutError:Ot.transitional(Ot.boolean)},!1),o!=null&&(k.isFunction(o)?n.paramsSerializer={serialize:o}:Dr.assertOptions(o,{encode:Ot.function,serialize:Ot.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Dr.assertOptions(n,{baseUrl:Ot.spelling("baseURL"),withXsrfToken:Ot.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=s&&k.merge(s.common,s[n.method]);s&&k.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),n.headers=lt.concat(i,s);const a=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const d=[];this.interceptors.response.forEach(function(b){d.push(b.fulfilled,b.rejected)});let l,u=0,f;if(!c){const p=[ya.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,d),f=p.length,l=Promise.resolve(n);u<f;)l=l.then(p[u++],p[u++]);return l}f=a.length;let h=n;for(u=0;u<f;){const p=a[u++],b=a[u++];try{h=p(h)}catch(y){b.call(this,y);break}}try{l=ya.call(this,h)}catch(p){return Promise.reject(p)}for(u=0,f=d.length;u<f;)l=l.then(d[u++],d[u++]);return l}getUri(t){t=vn(this.defaults,t);const n=xc(t.baseURL,t.url,t.allowAbsoluteUrls);return hc(n,t.params,t.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(t){bn.prototype[t]=function(n,r){return this.request(vn(r||{},{method:t,url:n,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,a){return this.request(vn(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}bn.prototype[t]=n(),bn.prototype[t+"Form"]=n(!0)});let Ov=class Sc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(a=>{r.subscribe(a),s=a}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,a){r.reason||(r.reason=new Bn(s,i,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Sc(function(o){t=o}),cancel:t}}};function Mv(e){return function(n){return e.apply(null,n)}}function Nv(e){return k.isObject(e)&&e.isAxiosError===!0}const Ss={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ss).forEach(([e,t])=>{Ss[t]=e});function _c(e){const t=new bn(e),n=nc(bn.prototype.request,t);return k.extend(n,bn.prototype,t,{allOwnKeys:!0}),k.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return _c(vn(e,o))},n}const _e=_c(yr);_e.Axios=bn;_e.CanceledError=Bn;_e.CancelToken=Ov;_e.isCancel=bc;_e.VERSION=$c;_e.toFormData=yo;_e.AxiosError=se;_e.Cancel=_e.CanceledError;_e.all=function(t){return Promise.all(t)};_e.spread=Mv;_e.isAxiosError=Nv;_e.mergeConfig=vn;_e.AxiosHeaders=lt;_e.formToJSON=e=>mc(k.isHTMLForm(e)?new FormData(e):e);_e.getAdapter=kc.getAdapter;_e.HttpStatusCode=Ss;_e.default=_e;const{Axios:$x,AxiosError:Sx,CanceledError:_x,isCancel:Cx,CancelToken:Tx,VERSION:Ax,all:Rx,Cancel:Ox,isAxiosError:Mx,spread:Nx,toFormData:Lx,AxiosHeaders:Px,HttpStatusCode:Fx,formToJSON:Dx,getAdapter:Ix,mergeConfig:Bx}=_e,Lv="https://xnors.pythonanywhere.com/get_visit_count",Pv=async()=>{console.log("Getting visit count from server...");try{const t=(await _e.get(Lv)).data,n=Date.now();return localStorage.setItem("visitCount",t),localStorage.setItem("timestamp",n),t}catch(e){return console.error("Error fetching visit count:",e),null}},Fv=()=>{const e=localStorage.getItem("visitCount"),t=localStorage.getItem("timestamp");return e&&t&&Date.now()-Number(t)<6e4?(console.log("Using cached visit count"),e):null},Dv=async()=>{const e=Fv();if(e)return e;{const t=await Pv();if(t!==null)return t}},Iv=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},Bv={class:"appbar"},qv={style:{display:"flex","flex-direction":"row","align-items":"center"}},zv={class:"appber-left"},Hv={slot:"text"},Uv="https://xnors.pythonanywhere.com/new_visit",jv={__name:"App",setup(e){const t=()=>{_e.get(Uv).then(i=>{console.log(i.data),i.data!="ok"&&console.log("error",i.data)}).catch(i=>{console.log(i)})};let n=er("");rr(n,i=>{console.log(i),o(i)});const r=er(ia);function o(i){let a="",c="";i.includes(":")?(a=i.split(":")[0],c=i.split(":")[1]):i.includes("：")?(a=i.split("：")[0],c=i.split(":")[1]):(console.log("No author specified"),c=i);let d=c.split(" ");r.value=ia.filter(l=>d.some(u=>l.author.toLowerCase().includes(a.toLowerCase())&&(l.name.toLowerCase().includes(u.toLowerCase())||l.desc.toLowerCase().includes(u.toLowerCase())||l.keywords.some(f=>f.toLowerCase().includes(u.toLowerCase()))))).map(l=>{let u=d.filter(f=>l.author.toLowerCase().includes(a.toLowerCase())&&(l.name.toLowerCase().includes(f.toLowerCase())||l.desc.toLowerCase().includes(f.toLowerCase())||l.keywords.some(h=>h.toLowerCase().includes(f.toLowerCase())))).length;return{...l,matchCount:u}}).sort((l,u)=>u.matchCount-l.matchCount),console.log(r.value)}let s=er("(获取中...)");return js(async()=>{t();try{s.value=await Dv()}catch(i){console.error("Failed to get visit count:",i),s.value="(获取失败!)"}}),(i,a)=>{const c=en("s-icon"),d=en("s-icon-button"),l=en("router-link"),u=en("s-button"),f=en("s-dialog"),h=en("s-page");return sr(),Ks(h,{theme:"dark",style:{"min-height":"100%",width:"100%"}},{default:Et(()=>[Ne("div",Bv,[Ne("div",qv,[Se(l,{to:"/xblogs"},{default:Et(()=>[Se(d,null,{default:Et(()=>[Se(c,{name:"home"})]),_:1})]),_:1}),a[1]||(a[1]=Ne("div",{class:"headline"},"XBlogs",-1))]),Ne("div",zv,[rl(Ne("input",{placeholder:"搜索博客",class:"search","onUpdate:modelValue":a[0]||(a[0]=p=>He(n)?n.value=p:n=p)},null,512),[[uf,Ft(n)]]),Se(f,{class:"dialog-box"},{default:Et(()=>[Se(d,{slot:"trigger"},{default:Et(()=>[Se(c,null,{default:Et(()=>a[2]||(a[2]=[Ne("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"128",height:"128",viewBox:"0 0 64 64"},[Ne("path",{d:"M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 41.941 41.941 50 32 50 C 22.059 50 14 41.941 14 32 C 14 22.059 22.059 14 32 14 z M 32 21 C 30.343 21 29 22.343 29 24 C 29 25.657 30.343 27 32 27 C 33.657 27 35 25.657 35 24 C 35 22.343 33.657 21 32 21 z M 32 30 C 30.895 30 30 30.896 30 32 L 30 42 C 30 43.104 30.895 44 32 44 C 33.105 44 34 43.104 34 42 L 34 32 C 34 30.896 33.105 30 32 30 z"})],-1)])),_:1,__:[2]})]),_:1}),a[13]||(a[13]=Ne("div",{slot:"headline"},"Title",-1)),Ne("div",Hv,[a[3]||(a[3]=fn(" 本网站由 ")),a[4]||(a[4]=Ne("a",{href:"https://xnors.github.io"},"XnorsCode/异或工作室",-1)),a[5]||(a[5]=fn(" 开发, 仅用于技术交流, 严禁随意转载, 转载请联系我们! ")),a[6]||(a[6]=Ne("br",null,null,-1)),a[7]||(a[7]=fn(" 邮箱: ")),a[8]||(a[8]=Ne("a",{href:"mailto:xnors-studio@outlook.com"},"xnors-studio@outlook.com",-1)),a[9]||(a[9]=Ne("br",null,null,-1)),a[10]||(a[10]=Ne("br",null,null,-1)),fn(" 当前总访问次数: "+Yn(Ft(s)),1)]),Se(u,{slot:"action",type:"text"},{default:Et(()=>a[11]||(a[11]=[fn("取消")])),_:1,__:[11]}),Se(u,{slot:"action",type:"text"},{default:Et(()=>a[12]||(a[12]=[fn("确定")])),_:1,__:[12]})]),_:1,__:[13]})])]),Ne("main",null,[Se(Ft(Wl),{blogs:r.value},null,8,["blogs"])])]),_:1})}}},Wv=Iv(jv,[["__scopeId","data-v-f523f56b"]]),Vv="modulepreload",Zv=function(e,t){return new URL(e,t).href},Ea={},Ko=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){let i=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));o=i(n.map(l=>{if(l=Zv(l,r),l in Ea)return;Ea[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!r)for(let b=a.length-1;b>=0;b--){const y=a[b];if(y.href===l&&(!u||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":Vv,u||(p.as="script"),p.crossOrigin="",p.href=l,d&&p.setAttribute("nonce",d),document.head.appendChild(p),u)return new Promise((b,y)=>{p.addEventListener("load",b),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return o.then(i=>{for(const a of i||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},Kv={id:"title"},Gv={id:"desc"},Xv={id:"date"},Yv={__name:"Blog",props:{name:{type:String,required:!0},desc:{type:String,required:!0},date:{type:String,required:!0},author:{type:String,required:!1},routeurl:{type:String,required:!0}},setup(e){const t=yp(),n=er(null),r=()=>{n.value&&n.value.close()};return js(()=>{t.afterEach(r)}),Ws(()=>{t.afterEach(r)}),(o,s)=>{const i=en("router-link"),a=en("s-ripple");return sr(),Ks(a,{class:"blog",onClick:s[0]||(s[0]=c=>n.value=Ft(Js).builder("加载中..."))},{default:Et(()=>[Se(i,{to:e.routeurl,id:"gotoBlog"},{default:Et(()=>[Ne("h2",Kv,Yn(e.name),1),Ne("p",Gv,Yn(e.desc),1),Ne("p",Xv,Yn(e.date),1)]),_:1},8,["to"])]),_:1})}}},Jv={class:"content"},Qv={__name:"Home",props:{blogs:{type:Array,required:!0}},setup(e){return(t,n)=>(sr(),Ci("div",Jv,[(sr(!0),Ci(Nt,null,tu(e.blogs,r=>rl((sr(),Ks(Yv,{key:r.name,class:ro(r.name),name:r.name,desc:r.desc,date:r.date,routeurl:r.routeurl},null,8,["class","name","desc","date","routeurl"])),[[Gu,r.show]])),128))]))}},ex=[{path:"/xblogs",name:"xblogs",component:Qv,props:!0},{path:"/xblogs/blog/welcome",name:"Welcome",component:()=>Ko(()=>import("./Welcome-CFqr40Sn.js"),__vite__mapDeps([0,1,2]),import.meta.url)},{path:"/xblogs/blog/python-yield-from",name:"PythonYieldFrom",component:()=>Ko(()=>import("./PythonYieldFrom-CGYpYb9P.js"),__vite__mapDeps([3,1,4]),import.meta.url)},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>Ko(()=>import("./NotFound-JoeyuI-f.js"),__vite__mapDeps([5,6]),import.meta.url)}],tx=vp({history:Kf(),routes:ex});function nx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Go,ka;function rx(){if(ka)return Go;ka=1;function e(v){return v instanceof Map?v.clear=v.delete=v.set=function(){throw new Error("map is read-only")}:v instanceof Set&&(v.add=v.clear=v.delete=function(){throw new Error("set is read-only")}),Object.freeze(v),Object.getOwnPropertyNames(v).forEach(S=>{const P=v[S],ne=typeof P;(ne==="object"||ne==="function")&&!Object.isFrozen(P)&&e(P)}),v}class t{constructor(S){S.data===void 0&&(S.data={}),this.data=S.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function n(v){return v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(v,...S){const P=Object.create(null);for(const ne in v)P[ne]=v[ne];return S.forEach(function(ne){for(const Ce in ne)P[Ce]=ne[Ce]}),P}const o="</span>",s=v=>!!v.scope,i=(v,{prefix:S})=>{if(v.startsWith("language:"))return v.replace("language:","language-");if(v.includes(".")){const P=v.split(".");return[`${S}${P.shift()}`,...P.map((ne,Ce)=>`${ne}${"_".repeat(Ce+1)}`)].join(" ")}return`${S}${v}`};class a{constructor(S,P){this.buffer="",this.classPrefix=P.classPrefix,S.walk(this)}addText(S){this.buffer+=n(S)}openNode(S){if(!s(S))return;const P=i(S.scope,{prefix:this.classPrefix});this.span(P)}closeNode(S){s(S)&&(this.buffer+=o)}value(){return this.buffer}span(S){this.buffer+=`<span class="${S}">`}}const c=(v={})=>{const S={children:[]};return Object.assign(S,v),S};class d{constructor(){this.rootNode=c(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(S){this.top.children.push(S)}openNode(S){const P=c({scope:S});this.add(P),this.stack.push(P)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(S){return this.constructor._walk(S,this.rootNode)}static _walk(S,P){return typeof P=="string"?S.addText(P):P.children&&(S.openNode(P),P.children.forEach(ne=>this._walk(S,ne)),S.closeNode(P)),S}static _collapse(S){typeof S!="string"&&S.children&&(S.children.every(P=>typeof P=="string")?S.children=[S.children.join("")]:S.children.forEach(P=>{d._collapse(P)}))}}class l extends d{constructor(S){super(),this.options=S}addText(S){S!==""&&this.add(S)}startScope(S){this.openNode(S)}endScope(){this.closeNode()}__addSublanguage(S,P){const ne=S.root;P&&(ne.scope=`language:${P}`),this.add(ne)}toHTML(){return new a(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function u(v){return v?typeof v=="string"?v:v.source:null}function f(v){return b("(?=",v,")")}function h(v){return b("(?:",v,")*")}function p(v){return b("(?:",v,")?")}function b(...v){return v.map(P=>u(P)).join("")}function y(v){const S=v[v.length-1];return typeof S=="object"&&S.constructor===Object?(v.splice(v.length-1,1),S):{}}function w(...v){return"("+(y(v).capture?"":"?:")+v.map(ne=>u(ne)).join("|")+")"}function E(v){return new RegExp(v.toString()+"|").exec("").length-1}function A(v,S){const P=v&&v.exec(S);return P&&P.index===0}const R=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function q(v,{joinWith:S}){let P=0;return v.map(ne=>{P+=1;const Ce=P;let Te=u(ne),W="";for(;Te.length>0;){const H=R.exec(Te);if(!H){W+=Te;break}W+=Te.substring(0,H.index),Te=Te.substring(H.index+H[0].length),H[0][0]==="\\"&&H[1]?W+="\\"+String(Number(H[1])+Ce):(W+=H[0],H[0]==="("&&P++)}return W}).map(ne=>`(${ne})`).join(S)}const J=/\b\B/,te="[a-zA-Z]\\w*",me="[a-zA-Z_]\\w*",Ae="\\b\\d+(\\.\\d+)?",Re="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Ue="\\b(0b[01]+)",rt="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Ie=(v={})=>{const S=/^#![ ]*\//;return v.binary&&(v.begin=b(S,/.*\b/,v.binary,/\b.*/)),r({scope:"meta",begin:S,end:/$/,relevance:0,"on:begin":(P,ne)=>{P.index!==0&&ne.ignoreMatch()}},v)},Ye={begin:"\\\\[\\s\\S]",relevance:0},ht={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Ye]},$e={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Ye]},de={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},X=function(v,S,P={}){const ne=r({scope:"comment",begin:v,end:S,contains:[]},P);ne.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const Ce=w("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return ne.contains.push({begin:b(/[ ]+/,"(",Ce,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),ne},Fe=X("//","$"),je=X("/\\*","\\*/"),Be=X("#","$"),Oe={scope:"number",begin:Ae,relevance:0},yt={scope:"number",begin:Re,relevance:0},Gt={scope:"number",begin:Ue,relevance:0},yn={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Ye,{begin:/\[/,end:/\]/,relevance:0,contains:[Ye]}]},ot={scope:"title",begin:te,relevance:0},_={scope:"title",begin:me,relevance:0},z={begin:"\\.\\s*"+me,relevance:0};var U=Object.freeze({__proto__:null,APOS_STRING_MODE:ht,BACKSLASH_ESCAPE:Ye,BINARY_NUMBER_MODE:Gt,BINARY_NUMBER_RE:Ue,COMMENT:X,C_BLOCK_COMMENT_MODE:je,C_LINE_COMMENT_MODE:Fe,C_NUMBER_MODE:yt,C_NUMBER_RE:Re,END_SAME_AS_BEGIN:function(v){return Object.assign(v,{"on:begin":(S,P)=>{P.data._beginMatch=S[1]},"on:end":(S,P)=>{P.data._beginMatch!==S[1]&&P.ignoreMatch()}})},HASH_COMMENT_MODE:Be,IDENT_RE:te,MATCH_NOTHING_RE:J,METHOD_GUARD:z,NUMBER_MODE:Oe,NUMBER_RE:Ae,PHRASAL_WORDS_MODE:de,QUOTE_STRING_MODE:$e,REGEXP_MODE:yn,RE_STARTERS_RE:rt,SHEBANG:Ie,TITLE_MODE:ot,UNDERSCORE_IDENT_RE:me,UNDERSCORE_TITLE_MODE:_});function be(v,S){v.input[v.index-1]==="."&&S.ignoreMatch()}function g(v,S){v.className!==void 0&&(v.scope=v.className,delete v.className)}function m(v,S){S&&v.beginKeywords&&(v.begin="\\b("+v.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",v.__beforeBegin=be,v.keywords=v.keywords||v.beginKeywords,delete v.beginKeywords,v.relevance===void 0&&(v.relevance=0))}function x(v,S){Array.isArray(v.illegal)&&(v.illegal=w(...v.illegal))}function $(v,S){if(v.match){if(v.begin||v.end)throw new Error("begin & end are not supported with match");v.begin=v.match,delete v.match}}function T(v,S){v.relevance===void 0&&(v.relevance=1)}const C=(v,S)=>{if(!v.beforeMatch)return;if(v.starts)throw new Error("beforeMatch cannot be used with starts");const P=Object.assign({},v);Object.keys(v).forEach(ne=>{delete v[ne]}),v.keywords=P.keywords,v.begin=b(P.beforeMatch,f(P.begin)),v.starts={relevance:0,contains:[Object.assign(P,{endsParent:!0})]},v.relevance=0,delete P.beforeMatch},F=["of","and","for","in","not","or","if","then","parent","list","value"],L="keyword";function N(v,S,P=L){const ne=Object.create(null);return typeof v=="string"?Ce(P,v.split(" ")):Array.isArray(v)?Ce(P,v):Object.keys(v).forEach(function(Te){Object.assign(ne,N(v[Te],S,Te))}),ne;function Ce(Te,W){S&&(W=W.map(H=>H.toLowerCase())),W.forEach(function(H){const Q=H.split("|");ne[Q[0]]=[Te,O(Q[0],Q[1])]})}}function O(v,S){return S?Number(S):K(v)?0:1}function K(v){return F.includes(v.toLowerCase())}const D={},j=v=>{console.error(v)},Y=(v,...S)=>{console.log(`WARN: ${v}`,...S)},ie=(v,S)=>{D[`${v}/${S}`]||(console.log(`Deprecated as of ${v}. ${S}`),D[`${v}/${S}`]=!0)},fe=new Error;function ue(v,S,{key:P}){let ne=0;const Ce=v[P],Te={},W={};for(let H=1;H<=S.length;H++)W[H+ne]=Ce[H],Te[H+ne]=!0,ne+=E(S[H-1]);v[P]=W,v[P]._emit=Te,v[P]._multi=!0}function Je(v){if(Array.isArray(v.begin)){if(v.skip||v.excludeBegin||v.returnBegin)throw j("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),fe;if(typeof v.beginScope!="object"||v.beginScope===null)throw j("beginScope must be object"),fe;ue(v,v.begin,{key:"beginScope"}),v.begin=q(v.begin,{joinWith:""})}}function We(v){if(Array.isArray(v.end)){if(v.skip||v.excludeEnd||v.returnEnd)throw j("skip, excludeEnd, returnEnd not compatible with endScope: {}"),fe;if(typeof v.endScope!="object"||v.endScope===null)throw j("endScope must be object"),fe;ue(v,v.end,{key:"endScope"}),v.end=q(v.end,{joinWith:""})}}function gt(v){v.scope&&typeof v.scope=="object"&&v.scope!==null&&(v.beginScope=v.scope,delete v.scope)}function mt(v){gt(v),typeof v.beginScope=="string"&&(v.beginScope={_wrap:v.beginScope}),typeof v.endScope=="string"&&(v.endScope={_wrap:v.endScope}),Je(v),We(v)}function an(v){function S(W,H){return new RegExp(u(W),"m"+(v.case_insensitive?"i":"")+(v.unicodeRegex?"u":"")+(H?"g":""))}class P{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(H,Q){Q.position=this.position++,this.matchIndexes[this.matchAt]=Q,this.regexes.push([Q,H]),this.matchAt+=E(H)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const H=this.regexes.map(Q=>Q[1]);this.matcherRe=S(q(H,{joinWith:"|"}),!0),this.lastIndex=0}exec(H){this.matcherRe.lastIndex=this.lastIndex;const Q=this.matcherRe.exec(H);if(!Q)return null;const De=Q.findIndex((zn,So)=>So>0&&zn!==void 0),Me=this.matchIndexes[De];return Q.splice(0,De),Object.assign(Q,Me)}}class ne{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(H){if(this.multiRegexes[H])return this.multiRegexes[H];const Q=new P;return this.rules.slice(H).forEach(([De,Me])=>Q.addRule(De,Me)),Q.compile(),this.multiRegexes[H]=Q,Q}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(H,Q){this.rules.push([H,Q]),Q.type==="begin"&&this.count++}exec(H){const Q=this.getMatcher(this.regexIndex);Q.lastIndex=this.lastIndex;let De=Q.exec(H);if(this.resumingScanAtSamePosition()&&!(De&&De.index===this.lastIndex)){const Me=this.getMatcher(0);Me.lastIndex=this.lastIndex+1,De=Me.exec(H)}return De&&(this.regexIndex+=De.position+1,this.regexIndex===this.count&&this.considerAll()),De}}function Ce(W){const H=new ne;return W.contains.forEach(Q=>H.addRule(Q.begin,{rule:Q,type:"begin"})),W.terminatorEnd&&H.addRule(W.terminatorEnd,{type:"end"}),W.illegal&&H.addRule(W.illegal,{type:"illegal"}),H}function Te(W,H){const Q=W;if(W.isCompiled)return Q;[g,$,mt,C].forEach(Me=>Me(W,H)),v.compilerExtensions.forEach(Me=>Me(W,H)),W.__beforeBegin=null,[m,x,T].forEach(Me=>Me(W,H)),W.isCompiled=!0;let De=null;return typeof W.keywords=="object"&&W.keywords.$pattern&&(W.keywords=Object.assign({},W.keywords),De=W.keywords.$pattern,delete W.keywords.$pattern),De=De||/\w+/,W.keywords&&(W.keywords=N(W.keywords,v.case_insensitive)),Q.keywordPatternRe=S(De,!0),H&&(W.begin||(W.begin=/\B|\b/),Q.beginRe=S(Q.begin),!W.end&&!W.endsWithParent&&(W.end=/\B|\b/),W.end&&(Q.endRe=S(Q.end)),Q.terminatorEnd=u(Q.end)||"",W.endsWithParent&&H.terminatorEnd&&(Q.terminatorEnd+=(W.end?"|":"")+H.terminatorEnd)),W.illegal&&(Q.illegalRe=S(W.illegal)),W.contains||(W.contains=[]),W.contains=[].concat(...W.contains.map(function(Me){return Qe(Me==="self"?W:Me)})),W.contains.forEach(function(Me){Te(Me,Q)}),W.starts&&Te(W.starts,H),Q.matcher=Ce(Q),Q}if(v.compilerExtensions||(v.compilerExtensions=[]),v.contains&&v.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return v.classNameAliases=r(v.classNameAliases||{}),Te(v)}function qn(v){return v?v.endsWithParent||qn(v.starts):!1}function Qe(v){return v.variants&&!v.cachedVariants&&(v.cachedVariants=v.variants.map(function(S){return r(v,{variants:null},S)})),v.cachedVariants?v.cachedVariants:qn(v)?r(v,{starts:v.starts?r(v.starts):null}):Object.isFrozen(v)?r(v):v}var bt="11.11.1";class wr extends Error{constructor(S,P){super(S),this.name="HTMLInjectionError",this.html=P}}const $o=n,ni=r,ri=Symbol("nomatch"),Rc=7,oi=function(v){const S=Object.create(null),P=Object.create(null),ne=[];let Ce=!0;const Te="Could not find the language '{}', did you forget to load/include a language module?",W={disableAutodetect:!0,name:"Plain text",contains:[]};let H={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:l};function Q(M){return H.noHighlightRe.test(M)}function De(M){let G=M.className+" ";G+=M.parentNode?M.parentNode.className:"";const ce=H.languageDetectRe.exec(G);if(ce){const ye=Xt(ce[1]);return ye||(Y(Te.replace("{}",ce[1])),Y("Falling back to no-highlight mode for this block.",M)),ye?ce[1]:"no-highlight"}return G.split(/\s+/).find(ye=>Q(ye)||Xt(ye))}function Me(M,G,ce){let ye="",Pe="";typeof G=="object"?(ye=M,ce=G.ignoreIllegals,Pe=G.language):(ie("10.7.0","highlight(lang, code, ...args) has been deprecated."),ie("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Pe=M,ye=G),ce===void 0&&(ce=!0);const wt={code:ye,language:Pe};kr("before:highlight",wt);const Yt=wt.result?wt.result:zn(wt.language,wt.code,ce);return Yt.code=wt.code,kr("after:highlight",Yt),Yt}function zn(M,G,ce,ye){const Pe=Object.create(null);function wt(B,V){return B.keywords[V]}function Yt(){if(!re.keywords){qe.addText(we);return}let B=0;re.keywordPatternRe.lastIndex=0;let V=re.keywordPatternRe.exec(we),le="";for(;V;){le+=we.substring(B,V.index);const ve=At.case_insensitive?V[0].toLowerCase():V[0],Ve=wt(re,ve);if(Ve){const[Bt,Zc]=Ve;if(qe.addText(le),le="",Pe[ve]=(Pe[ve]||0)+1,Pe[ve]<=Rc&&(_r+=Zc),Bt.startsWith("_"))le+=V[0];else{const Kc=At.classNameAliases[Bt]||Bt;Tt(V[0],Kc)}}else le+=V[0];B=re.keywordPatternRe.lastIndex,V=re.keywordPatternRe.exec(we)}le+=we.substring(B),qe.addText(le)}function $r(){if(we==="")return;let B=null;if(typeof re.subLanguage=="string"){if(!S[re.subLanguage]){qe.addText(we);return}B=zn(re.subLanguage,we,!0,fi[re.subLanguage]),fi[re.subLanguage]=B._top}else B=_o(we,re.subLanguage.length?re.subLanguage:null);re.relevance>0&&(_r+=B.relevance),qe.__addSublanguage(B._emitter,B.language)}function ct(){re.subLanguage!=null?$r():Yt(),we=""}function Tt(B,V){B!==""&&(qe.startScope(V),qe.addText(B),qe.endScope())}function li(B,V){let le=1;const ve=V.length-1;for(;le<=ve;){if(!B._emit[le]){le++;continue}const Ve=At.classNameAliases[B[le]]||B[le],Bt=V[le];Ve?Tt(Bt,Ve):(we=Bt,Yt(),we=""),le++}}function ci(B,V){return B.scope&&typeof B.scope=="string"&&qe.openNode(At.classNameAliases[B.scope]||B.scope),B.beginScope&&(B.beginScope._wrap?(Tt(we,At.classNameAliases[B.beginScope._wrap]||B.beginScope._wrap),we=""):B.beginScope._multi&&(li(B.beginScope,V),we="")),re=Object.create(B,{parent:{value:re}}),re}function di(B,V,le){let ve=A(B.endRe,le);if(ve){if(B["on:end"]){const Ve=new t(B);B["on:end"](V,Ve),Ve.isMatchIgnored&&(ve=!1)}if(ve){for(;B.endsParent&&B.parent;)B=B.parent;return B}}if(B.endsWithParent)return di(B.parent,V,le)}function Hc(B){return re.matcher.regexIndex===0?(we+=B[0],1):(Ro=!0,0)}function Uc(B){const V=B[0],le=B.rule,ve=new t(le),Ve=[le.__beforeBegin,le["on:begin"]];for(const Bt of Ve)if(Bt&&(Bt(B,ve),ve.isMatchIgnored))return Hc(V);return le.skip?we+=V:(le.excludeBegin&&(we+=V),ct(),!le.returnBegin&&!le.excludeBegin&&(we=V)),ci(le,B),le.returnBegin?0:V.length}function jc(B){const V=B[0],le=G.substring(B.index),ve=di(re,B,le);if(!ve)return ri;const Ve=re;re.endScope&&re.endScope._wrap?(ct(),Tt(V,re.endScope._wrap)):re.endScope&&re.endScope._multi?(ct(),li(re.endScope,B)):Ve.skip?we+=V:(Ve.returnEnd||Ve.excludeEnd||(we+=V),ct(),Ve.excludeEnd&&(we=V));do re.scope&&qe.closeNode(),!re.skip&&!re.subLanguage&&(_r+=re.relevance),re=re.parent;while(re!==ve.parent);return ve.starts&&ci(ve.starts,B),Ve.returnEnd?0:V.length}function Wc(){const B=[];for(let V=re;V!==At;V=V.parent)V.scope&&B.unshift(V.scope);B.forEach(V=>qe.openNode(V))}let Sr={};function ui(B,V){const le=V&&V[0];if(we+=B,le==null)return ct(),0;if(Sr.type==="begin"&&V.type==="end"&&Sr.index===V.index&&le===""){if(we+=G.slice(V.index,V.index+1),!Ce){const ve=new Error(`0 width match regex (${M})`);throw ve.languageName=M,ve.badRule=Sr.rule,ve}return 1}if(Sr=V,V.type==="begin")return Uc(V);if(V.type==="illegal"&&!ce){const ve=new Error('Illegal lexeme "'+le+'" for mode "'+(re.scope||"<unnamed>")+'"');throw ve.mode=re,ve}else if(V.type==="end"){const ve=jc(V);if(ve!==ri)return ve}if(V.type==="illegal"&&le==="")return we+=`
`,1;if(Ao>1e5&&Ao>V.index*3)throw new Error("potential infinite loop, way more iterations than matches");return we+=le,le.length}const At=Xt(M);if(!At)throw j(Te.replace("{}",M)),new Error('Unknown language: "'+M+'"');const Vc=an(At);let To="",re=ye||Vc;const fi={},qe=new H.__emitter(H);Wc();let we="",_r=0,ln=0,Ao=0,Ro=!1;try{if(At.__emitTokens)At.__emitTokens(G,qe);else{for(re.matcher.considerAll();;){Ao++,Ro?Ro=!1:re.matcher.considerAll(),re.matcher.lastIndex=ln;const B=re.matcher.exec(G);if(!B)break;const V=G.substring(ln,B.index),le=ui(V,B);ln=B.index+le}ui(G.substring(ln))}return qe.finalize(),To=qe.toHTML(),{language:M,value:To,relevance:_r,illegal:!1,_emitter:qe,_top:re}}catch(B){if(B.message&&B.message.includes("Illegal"))return{language:M,value:$o(G),illegal:!0,relevance:0,_illegalBy:{message:B.message,index:ln,context:G.slice(ln-100,ln+100),mode:B.mode,resultSoFar:To},_emitter:qe};if(Ce)return{language:M,value:$o(G),illegal:!1,relevance:0,errorRaised:B,_emitter:qe,_top:re};throw B}}function So(M){const G={value:$o(M),illegal:!1,relevance:0,_top:W,_emitter:new H.__emitter(H)};return G._emitter.addText(M),G}function _o(M,G){G=G||H.languages||Object.keys(S);const ce=So(M),ye=G.filter(Xt).filter(ai).map(ct=>zn(ct,M,!1));ye.unshift(ce);const Pe=ye.sort((ct,Tt)=>{if(ct.relevance!==Tt.relevance)return Tt.relevance-ct.relevance;if(ct.language&&Tt.language){if(Xt(ct.language).supersetOf===Tt.language)return 1;if(Xt(Tt.language).supersetOf===ct.language)return-1}return 0}),[wt,Yt]=Pe,$r=wt;return $r.secondBest=Yt,$r}function Oc(M,G,ce){const ye=G&&P[G]||ce;M.classList.add("hljs"),M.classList.add(`language-${ye}`)}function Co(M){let G=null;const ce=De(M);if(Q(ce))return;if(kr("before:highlightElement",{el:M,language:ce}),M.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",M);return}if(M.children.length>0&&(H.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(M)),H.throwUnescapedHTML))throw new wr("One of your code blocks includes unescaped HTML.",M.innerHTML);G=M;const ye=G.textContent,Pe=ce?Me(ye,{language:ce,ignoreIllegals:!0}):_o(ye);M.innerHTML=Pe.value,M.dataset.highlighted="yes",Oc(M,ce,Pe.language),M.result={language:Pe.language,re:Pe.relevance,relevance:Pe.relevance},Pe.secondBest&&(M.secondBest={language:Pe.secondBest.language,relevance:Pe.secondBest.relevance}),kr("after:highlightElement",{el:M,result:Pe,text:ye})}function Mc(M){H=ni(H,M)}const Nc=()=>{Er(),ie("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Lc(){Er(),ie("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let si=!1;function Er(){function M(){Er()}if(document.readyState==="loading"){si||window.addEventListener("DOMContentLoaded",M,!1),si=!0;return}document.querySelectorAll(H.cssSelector).forEach(Co)}function Pc(M,G){let ce=null;try{ce=G(v)}catch(ye){if(j("Language definition for '{}' could not be registered.".replace("{}",M)),Ce)j(ye);else throw ye;ce=W}ce.name||(ce.name=M),S[M]=ce,ce.rawDefinition=G.bind(null,v),ce.aliases&&ii(ce.aliases,{languageName:M})}function Fc(M){delete S[M];for(const G of Object.keys(P))P[G]===M&&delete P[G]}function Dc(){return Object.keys(S)}function Xt(M){return M=(M||"").toLowerCase(),S[M]||S[P[M]]}function ii(M,{languageName:G}){typeof M=="string"&&(M=[M]),M.forEach(ce=>{P[ce.toLowerCase()]=G})}function ai(M){const G=Xt(M);return G&&!G.disableAutodetect}function Ic(M){M["before:highlightBlock"]&&!M["before:highlightElement"]&&(M["before:highlightElement"]=G=>{M["before:highlightBlock"](Object.assign({block:G.el},G))}),M["after:highlightBlock"]&&!M["after:highlightElement"]&&(M["after:highlightElement"]=G=>{M["after:highlightBlock"](Object.assign({block:G.el},G))})}function Bc(M){Ic(M),ne.push(M)}function qc(M){const G=ne.indexOf(M);G!==-1&&ne.splice(G,1)}function kr(M,G){const ce=M;ne.forEach(function(ye){ye[ce]&&ye[ce](G)})}function zc(M){return ie("10.7.0","highlightBlock will be removed entirely in v12.0"),ie("10.7.0","Please use highlightElement now."),Co(M)}Object.assign(v,{highlight:Me,highlightAuto:_o,highlightAll:Er,highlightElement:Co,highlightBlock:zc,configure:Mc,initHighlighting:Nc,initHighlightingOnLoad:Lc,registerLanguage:Pc,unregisterLanguage:Fc,listLanguages:Dc,getLanguage:Xt,registerAliases:ii,autoDetection:ai,inherit:ni,addPlugin:Bc,removePlugin:qc}),v.debugMode=function(){Ce=!1},v.safeMode=function(){Ce=!0},v.versionString=bt,v.regex={concat:b,lookahead:f,either:w,optional:p,anyNumberOfTimes:h};for(const M in U)typeof U[M]=="object"&&e(U[M]);return Object.assign(v,U),v},wn=oi({});return wn.newInstance=()=>oi({}),Go=wn,wn.HighlightJS=wn,wn.default=wn,Go}var ox=rx();const ko=nx(ox),$a="[A-Za-z$_][0-9A-Za-z$_]*",sx=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],ix=["true","false","null","undefined","NaN","Infinity"],Cc=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Tc=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Ac=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],ax=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],lx=[].concat(Ac,Cc,Tc);function cx(e){const t=e.regex,n=(X,{after:Fe})=>{const je="</"+X[0].slice(1);return X.input.indexOf(je,Fe)!==-1},r=$a,o={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(X,Fe)=>{const je=X[0].length+X.index,Be=X.input[je];if(Be==="<"||Be===","){Fe.ignoreMatch();return}Be===">"&&(n(X,{after:je})||Fe.ignoreMatch());let Oe;const yt=X.input.substring(je);if(Oe=yt.match(/^\s*=/)){Fe.ignoreMatch();return}if((Oe=yt.match(/^\s+extends\s+/))&&Oe.index===0){Fe.ignoreMatch();return}}},a={$pattern:$a,keyword:sx,literal:ix,built_in:lx,"variable.language":ax},c="[0-9](_?[0-9])*",d=`\\.(${c})`,l="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",u={className:"number",variants:[{begin:`(\\b(${l})((${d})|\\.)?|(${d}))[eE][+-]?(${c})\\b`},{begin:`\\b(${l})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},f={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},h={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:"xml"}},p={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:"css"}},b={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:"graphql"}},y={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,f]},E={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:r+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},A=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,h,p,b,y,{match:/\$\d+/},u];f.contains=A.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(A)});const R=[].concat(E,f.contains),q=R.concat([{begin:/(\s*)\(/,end:/\)/,keywords:a,contains:["self"].concat(R)}]),J={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:q},te={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,t.concat(r,"(",t.concat(/\./,r),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,r],scope:{1:"keyword",3:"title.class"}}]},me={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Cc,...Tc]}},Ae={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Re={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[J],illegal:/%/},Ue={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function rt(X){return t.concat("(?!",X.join("|"),")")}const Ie={match:t.concat(/\b/,rt([...Ac,"super","import"].map(X=>`${X}\\s*\\(`)),r,t.lookahead(/\s*\(/)),className:"title.function",relevance:0},Ye={begin:t.concat(/\./,t.lookahead(t.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ht={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},J]},$e="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",de={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead($e)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[J]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:q,CLASS_REFERENCE:me},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),Ae,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,h,p,b,y,E,{match:/\$\d+/},u,me,{scope:"attr",match:r+t.lookahead(":"),relevance:0},de,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[E,e.REGEXP_MODE,{className:"function",begin:$e,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:q}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:o.begin,end:o.end},{match:s},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},Re,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[J,e.inherit(e.TITLE_MODE,{begin:r,className:"title.function"})]},{match:/\.\.\./,relevance:0},Ye,{match:"\\$"+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[J]},Ie,Ue,te,ht,{match:/\$[(.]/}]}}function _s(){_s.warned||(_s.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/javascript" instead of "highlight.js/lib/languages/javascript.js"'))}_s();function dx(e){const t=e.regex,n=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),r=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],a={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:r,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},c={className:"meta",begin:/^(>>>|\.\.\.) /},d={className:"subst",begin:/\{/,end:/\}/,keywords:a,illegal:/#/},l={begin:/\{\{/,relevance:0},u={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,c],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,c],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,c,l,d]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,c,l,d]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,l,d]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,l,d]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},f="[0-9](_?[0-9])*",h=`(\\b(${f}))?\\.(${f})|\\b(${f})\\.`,p=`\\b|${r.join("|")}`,b={className:"number",relevance:0,variants:[{begin:`(\\b(${f})|(${h}))[eE][+-]?(${f})[jJ]?(?=${p})`},{begin:`(${h})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${p})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${p})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${p})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${p})`},{begin:`\\b(${f})[jJ](?=${p})`}]},y={className:"comment",begin:t.lookahead(/# type:/),end:/$/,keywords:a,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},w={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:["self",c,b,u,e.HASH_COMMENT_MODE]}]};return d.contains=[u,b,c],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:a,illegal:/(<\/|\?)|=>/,contains:[c,b,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},u,y,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,n],scope:{1:"keyword",3:"title.function"},contains:[w]},{variants:[{match:[/\bclass/,/\s+/,n,/\s*/,/\(\s*/,n,/\s*\)/]},{match:[/\bclass/,/\s+/,n]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[b,w,u]}]}}function Cs(){Cs.warned||(Cs.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/python" instead of "highlight.js/lib/languages/python.js"'))}Cs();const ux=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),fx=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],px=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],hx=[...fx,...px],gx=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),mx=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),bx=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),vx=["accent-color","align-content","align-items","align-self","alignment-baseline","all","anchor-name","animation","animation-composition","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-range","animation-range-end","animation-range-start","animation-timeline","animation-timing-function","appearance","aspect-ratio","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-end-end-radius","border-end-start-radius","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-align","box-decoration-break","box-direction","box-flex","box-flex-group","box-lines","box-ordinal-group","box-orient","box-pack","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","contain-intrinsic-block-size","contain-intrinsic-height","contain-intrinsic-inline-size","contain-intrinsic-size","contain-intrinsic-width","container","container-name","container-type","content","content-visibility","counter-increment","counter-reset","counter-set","cue","cue-after","cue-before","cursor","cx","cy","direction","display","dominant-baseline","empty-cells","enable-background","field-sizing","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flood-color","flood-opacity","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-palette","font-size","font-size-adjust","font-smooth","font-smoothing","font-stretch","font-style","font-synthesis","font-synthesis-position","font-synthesis-small-caps","font-synthesis-style","font-synthesis-weight","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-emoji","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","forced-color-adjust","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphenate-character","hyphenate-limit-chars","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","initial-letter","initial-letter-align","inline-size","inset","inset-area","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","kerning","left","letter-spacing","lighting-color","line-break","line-height","line-height-step","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","margin-trim","marker","marker-end","marker-mid","marker-start","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","masonry-auto-flow","math-depth","math-shift","math-style","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-anchor","overflow-block","overflow-clip-margin","overflow-inline","overflow-wrap","overflow-x","overflow-y","overlay","overscroll-behavior","overscroll-behavior-block","overscroll-behavior-inline","overscroll-behavior-x","overscroll-behavior-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","paint-order","pause","pause-after","pause-before","perspective","perspective-origin","place-content","place-items","place-self","pointer-events","position","position-anchor","position-visibility","print-color-adjust","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","ruby-align","ruby-position","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scroll-timeline","scroll-timeline-axis","scroll-timeline-name","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","speak","speak-as","src","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","table-layout","text-align","text-align-all","text-align-last","text-anchor","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-size-adjust","text-transform","text-underline-offset","text-underline-position","text-wrap","text-wrap-mode","text-wrap-style","timeline-scope","top","touch-action","transform","transform-box","transform-origin","transform-style","transition","transition-behavior","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-modify","user-select","vector-effect","vertical-align","view-timeline","view-timeline-axis","view-timeline-inset","view-timeline-name","view-transition-name","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","white-space-collapse","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index","zoom"].sort().reverse();function xx(e){const t=e.regex,n=ux(e),r={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},o="and or not only",s=/@-?\w[\w]*(-\w+)*/,i="[a-zA-Z-][a-zA-Z0-9_-]*",a=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[n.BLOCK_COMMENT,r,n.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+i,relevance:0},n.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+mx.join("|")+")"},{begin:":(:)?("+bx.join("|")+")"}]},n.CSS_VARIABLE,{className:"attribute",begin:"\\b("+vx.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[n.BLOCK_COMMENT,n.HEXCOLOR,n.IMPORTANT,n.CSS_NUMBER_MODE,...a,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...a,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},n.FUNCTION_DISPATCH]},{begin:t.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:s},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:o,attribute:gx.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...a,n.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+hx.join("|")+")\\b"}]}}function Ts(){Ts.warned||(Ts.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/css" instead of "highlight.js/lib/languages/css.js"'))}Ts();function yx(e){const t=e.regex,n=t.concat(/[\p{L}_]/u,t.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),r=/[\p{L}0-9._:-]+/u,o={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},s={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=e.inherit(s,{begin:/\(/,end:/\)/}),a=e.inherit(e.APOS_STRING_MODE,{className:"string"}),c=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),d={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:r,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[o]},{begin:/'/,end:/'/,contains:[o]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[s,c,a,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[s,i,c,a]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},o,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[d],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[d],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:t.concat(/</,t.lookahead(t.concat(n,t.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:d}]},{className:"tag",begin:t.concat(/<\//,t.lookahead(t.concat(n,/>/))),contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}function As(){As.warned||(As.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/xml" instead of "highlight.js/lib/languages/xml.js"'))}As();ko.registerLanguage("javascript",cx);ko.registerLanguage("python",dx);ko.registerLanguage("css",xx);ko.registerLanguage("html",yx);hf(Wv).use(tx).mount("#app");export{ko as H,Iv as _,Ne as a,sr as b,Ci as c,Se as d,en as e,fn as f,Dv as i,Ja as n,js as o,er as r,Ft as u,Et as w};
