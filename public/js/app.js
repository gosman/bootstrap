/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@recogito/annotorious/dist/annotorious.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/@recogito/annotorious/dist/annotorious.min.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var PS=Object.defineProperty,DS=Object.defineProperties;var TS=Object.getOwnPropertyDescriptors;var Pr=Object.getOwnPropertySymbols;var Xc=Object.prototype.hasOwnProperty,Kc=Object.prototype.propertyIsEnumerable;var Oi=(j,H,A)=>H in j?PS(j,H,{enumerable:!0,configurable:!0,writable:!0,value:A}):j[H]=A,N=(j,H)=>{for(var A in H||(H={}))Xc.call(H,A)&&Oi(j,A,H[A]);if(Pr)for(var A of Pr(H))Kc.call(H,A)&&Oi(j,A,H[A]);return j},$e=(j,H)=>DS(j,TS(H));var xi=(j,H)=>{var A={};for(var we in j)Xc.call(j,we)&&H.indexOf(we)<0&&(A[we]=j[we]);if(j!=null&&Pr)for(var we of Pr(j))H.indexOf(we)<0&&Kc.call(j,we)&&(A[we]=j[we]);return A};var h=(j,H,A)=>(Oi(j,typeof H!="symbol"?H+"":H,A),A);(function(j,H){ true?H(exports):0})(this,function(j){"use strict";var H,A,we,$i,Vt,Pi,Di,Ti,dn={},Mi=[],Jc=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Ue(t,e){for(var n in e)t[n]=e[n];return t}function Fi(t){var e=t.parentNode;e&&e.removeChild(t)}function Z(t,e,n){var r,o,i,a={};for(i in e)i=="key"?r=e[i]:i=="ref"?o=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?H.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)a[i]===void 0&&(a[i]=t.defaultProps[i]);return Ht(t,a,r,o,null)}function Ht(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o==null?++we:o};return o==null&&A.vnode!=null&&A.vnode(i),i}function pn(){return{current:null}}function ye(t){return t.children}function Q(t,e){this.props=t,this.context=e}function vt(t,e){if(e==null)return t.__?vt(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?vt(t):null}function ki(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return ki(t)}}function Dr(t){(!t.__d&&(t.__d=!0)&&Vt.push(t)&&!hn.__r++||Di!==A.debounceRendering)&&((Di=A.debounceRendering)||Pi)(hn)}function hn(){for(var t;hn.__r=Vt.length;)t=Vt.sort(function(e,n){return e.__v.__b-n.__v.__b}),Vt=[],t.some(function(e){var n,r,o,i,a,s;e.__d&&(a=(i=(n=e).__v).__e,(s=n.__P)&&(r=[],(o=Ue({},i)).__v=i.__v+1,Tr(s,i,o,n.__n,s.ownerSVGElement!==void 0,i.__h!=null?[a]:null,r,a==null?vt(i):a,i.__h),Hi(r,i),i.__e!=a&&ki(i)))})}function Ii(t,e,n,r,o,i,a,s,u,c){var l,f,d,p,m,b,v,S=r&&r.__k||Mi,C=S.length;for(n.__k=[],l=0;l<e.length;l++)if((p=n.__k[l]=(p=e[l])==null||typeof p=="boolean"?null:typeof p=="string"||typeof p=="number"||typeof p=="bigint"?Ht(null,p,null,null,p):Array.isArray(p)?Ht(ye,{children:p},null,null,null):p.__b>0?Ht(p.type,p.props,p.key,null,p.__v):p)!=null){if(p.__=n,p.__b=n.__b+1,(d=S[l])===null||d&&p.key==d.key&&p.type===d.type)S[l]=void 0;else for(f=0;f<C;f++){if((d=S[f])&&p.key==d.key&&p.type===d.type){S[f]=void 0;break}d=null}Tr(t,p,d=d||dn,o,i,a,s,u,c),m=p.__e,(f=p.ref)&&d.ref!=f&&(v||(v=[]),d.ref&&v.push(d.ref,null,p),v.push(f,p.__c||m,p)),m!=null?(b==null&&(b=m),typeof p.type=="function"&&p.__k===d.__k?p.__d=u=Ri(p,u,t):u=Ni(t,p,d,S,m,u),typeof n.type=="function"&&(n.__d=u)):u&&d.__e==u&&u.parentNode!=t&&(u=vt(d))}for(n.__e=b,l=C;l--;)S[l]!=null&&(typeof n.type=="function"&&S[l].__e!=null&&S[l].__e==n.__d&&(n.__d=vt(r,l+1)),zi(S[l],S[l]));if(v)for(l=0;l<v.length;l++)Ui(v[l],v[++l],v[++l])}function Ri(t,e,n){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,e=typeof r.type=="function"?Ri(r,e,n):Ni(n,r,r,o,r.__e,e));return e}function De(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){De(n,e)}):e.push(t)),e}function Ni(t,e,n,r,o,i){var a,s,u;if(e.__d!==void 0)a=e.__d,e.__d=void 0;else if(n==null||o!=i||o.parentNode==null)e:if(i==null||i.parentNode!==t)t.appendChild(o),a=null;else{for(s=i,u=0;(s=s.nextSibling)&&u<r.length;u+=2)if(s==o)break e;t.insertBefore(o,i),a=i}return a!==void 0?a:o.nextSibling}function Zc(t,e,n,r,o){var i;for(i in n)i==="children"||i==="key"||i in e||mn(t,i,null,n[i],r);for(i in e)o&&typeof e[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===e[i]||mn(t,i,e[i],n[i],r)}function Li(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||Jc.test(e)?n:n+"px"}function mn(t,e,n,r,o){var i;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||Li(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||Li(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?Vi:Bi,i):t.removeEventListener(e,i?Vi:Bi,i);else if(e!=="dangerouslySetInnerHTML"){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function Bi(t){this.l[t.type+!1](A.event?A.event(t):t)}function Vi(t){this.l[t.type+!0](A.event?A.event(t):t)}function Tr(t,e,n,r,o,i,a,s,u){var c,l,f,d,p,m,b,v,S,C,P,k=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(u=n.__h,s=e.__e=n.__e,e.__h=null,i=[s]),(c=A.__b)&&c(e);try{e:if(typeof k=="function"){if(v=e.props,S=(c=k.contextType)&&r[c.__c],C=c?S?S.props.value:c.__:r,n.__c?b=(l=e.__c=n.__c).__=l.__E:("prototype"in k&&k.prototype.render?e.__c=l=new k(v,C):(e.__c=l=new Q(v,C),l.constructor=k,l.render=ef),S&&S.sub(l),l.props=v,l.state||(l.state={}),l.context=C,l.__n=r,f=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),k.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=Ue({},l.__s)),Ue(l.__s,k.getDerivedStateFromProps(v,l.__s))),d=l.props,p=l.state,f)k.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(k.getDerivedStateFromProps==null&&v!==d&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(v,C),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(v,l.__s,C)===!1||e.__v===n.__v){l.props=v,l.state=l.__s,e.__v!==n.__v&&(l.__d=!1),l.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(x){x&&(x.__=e)}),l.__h.length&&a.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(v,l.__s,C),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(d,p,m)})}l.context=C,l.props=v,l.state=l.__s,(c=A.__r)&&c(e),l.__d=!1,l.__v=e,l.__P=t,c=l.render(l.props,l.state,l.context),l.state=l.__s,l.getChildContext!=null&&(r=Ue(Ue({},r),l.getChildContext())),f||l.getSnapshotBeforeUpdate==null||(m=l.getSnapshotBeforeUpdate(d,p)),P=c!=null&&c.type===ye&&c.key==null?c.props.children:c,Ii(t,Array.isArray(P)?P:[P],e,n,r,o,i,a,s,u),l.base=e.__e,e.__h=null,l.__h.length&&a.push(l),b&&(l.__E=l.__=null),l.__e=!1}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Qc(n.__e,e,n,r,o,i,a,u);(c=A.diffed)&&c(e)}catch(x){e.__v=null,(u||i!=null)&&(e.__e=s,e.__h=!!u,i[i.indexOf(s)]=null),A.__e(x,e,n)}}function Hi(t,e){A.__c&&A.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){A.__e(r,n.__v)}})}function Qc(t,e,n,r,o,i,a,s){var u,c,l,f=n.props,d=e.props,p=e.type,m=0;if(p==="svg"&&(o=!0),i!=null){for(;m<i.length;m++)if((u=i[m])&&"setAttribute"in u==!!p&&(p?u.localName===p:u.nodeType===3)){t=u,i[m]=null;break}}if(t==null){if(p===null)return document.createTextNode(d);t=o?document.createElementNS("http://www.w3.org/2000/svg",p):document.createElement(p,d.is&&d),i=null,s=!1}if(p===null)f===d||s&&t.data===d||(t.data=d);else{if(i=i&&H.call(t.childNodes),c=(f=n.props||dn).dangerouslySetInnerHTML,l=d.dangerouslySetInnerHTML,!s){if(i!=null)for(f={},m=0;m<t.attributes.length;m++)f[t.attributes[m].name]=t.attributes[m].value;(l||c)&&(l&&(c&&l.__html==c.__html||l.__html===t.innerHTML)||(t.innerHTML=l&&l.__html||""))}if(Zc(t,d,f,o,s),l)e.__k=[];else if(m=e.props.children,Ii(t,Array.isArray(m)?m:[m],e,n,r,o&&p!=="foreignObject",i,a,i?i[0]:n.__k&&vt(n,0),s),i!=null)for(m=i.length;m--;)i[m]!=null&&Fi(i[m]);s||("value"in d&&(m=d.value)!==void 0&&(m!==f.value||m!==t.value||p==="progress"&&!m)&&mn(t,"value",m,f.value,!1),"checked"in d&&(m=d.checked)!==void 0&&m!==t.checked&&mn(t,"checked",m,f.checked,!1))}return t}function Ui(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){A.__e(r,n)}}function zi(t,e,n){var r,o;if(A.unmount&&A.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Ui(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){A.__e(i,e)}r.base=r.__P=null}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&zi(r[o],e,typeof t.type!="function");n||t.__e==null||Fi(t.__e),t.__e=t.__d=void 0}function ef(t,e,n){return this.constructor(t,n)}function gt(t,e,n){var r,o,i;A.__&&A.__(t,e),o=(r=typeof n=="function")?null:n&&n.__k||e.__k,i=[],Tr(e,t=(!r&&n||e).__k=Z(ye,null,[t]),o||dn,dn,e.ownerSVGElement!==void 0,!r&&n?[n]:o?null:e.firstChild?H.call(e.childNodes):null,i,!r&&n?n:o?o.__e:e.firstChild,r),Hi(i,t)}function Mr(t,e){gt(t,e,Mr)}function ji(t,e,n){var r,o,i,a=Ue({},t.props);for(i in e)i=="key"?r=e[i]:i=="ref"?o=e[i]:a[i]=e[i];return arguments.length>2&&(a.children=arguments.length>3?H.call(arguments,2):n),Ht(t.type,a,r||t.key,o||t.ref,null)}function yt(t,e){var n={__c:e="__cC"+Ti++,__:t,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,i;return this.getChildContext||(o=[],(i={})[e]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(a){this.props.value!==a.value&&o.some(Dr)},this.sub=function(a){o.push(a);var s=a.componentWillUnmount;a.componentWillUnmount=function(){o.splice(o.indexOf(a),1),s&&s.call(a)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}H=Mi.slice,A={__e:function(t,e){for(var n,r,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(t)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t),o=n.__d),o)return n.__E=n}catch(i){t=i}throw t}},we=0,$i=function(t){return t!=null&&t.constructor===void 0},Q.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Ue({},this.state),typeof t=="function"&&(t=t(Ue({},n),this.props)),t&&Ue(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),Dr(this))},Q.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Dr(this))},Q.prototype.render=ye,Vt=[],Pi=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,hn.__r=0,Ti=0;var tf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",render:gt,hydrate:Mr,createElement:Z,h:Z,Fragment:ye,createRef:pn,get isValidElement(){return $i},Component:Q,cloneElement:ji,createContext:yt,toChildArray:De,get options(){return A}}),nt,ie,Wi,bt=0,Fr=[],Gi=A.__b,qi=A.__r,Yi=A.diffed,Xi=A.__c,Ki=A.unmount;function St(t,e){A.__h&&A.__h(ie,t,bt||e),bt=0;var n=ie.__H||(ie.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function ze(t){return bt=1,kr(ea,t)}function kr(t,e,n){var r=St(nt++,2);return r.t=t,r.__c||(r.__=[n?n(e):ea(void 0,e),function(o){var i=r.t(r.__[0],o);r.__[0]!==i&&(r.__=[i,r.__[1]],r.__c.setState({}))}],r.__c=ie),r.__}function rt(t,e){var n=St(nt++,3);!A.__s&&Nr(n.__H,e)&&(n.__=t,n.__H=e,ie.__H.__h.push(n))}function Ir(t,e){var n=St(nt++,4);!A.__s&&Nr(n.__H,e)&&(n.__=t,n.__H=e,ie.__h.push(n))}function Te(t){return bt=5,je(function(){return{current:t}},[])}function Ji(t,e,n){bt=6,Ir(function(){typeof t=="function"?t(e()):t&&(t.current=e())},n==null?n:n.concat(t))}function je(t,e){var n=St(nt++,7);return Nr(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function Me(t,e){return bt=8,je(function(){return t},e)}function Ut(t){var e=ie.context[t.__c],n=St(nt++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(ie)),e.props.value):t.__}function Zi(t,e){A.useDebugValue&&A.useDebugValue(e?e(t):t)}function nf(t){var e=St(nt++,10),n=ze();return e.__=t,ie.componentDidCatch||(ie.componentDidCatch=function(r){e.__&&e.__(r),n[1](r)}),[n[0],function(){n[1](void 0)}]}function rf(){var t;for(Fr.sort(function(e,n){return e.__v.__b-n.__v.__b});t=Fr.pop();)if(t.__P)try{t.__H.__h.forEach(vn),t.__H.__h.forEach(Rr),t.__H.__h=[]}catch(e){t.__H.__h=[],A.__e(e,t.__v)}}A.__b=function(t){ie=null,Gi&&Gi(t)},A.__r=function(t){qi&&qi(t),nt=0;var e=(ie=t.__c).__H;e&&(e.__h.forEach(vn),e.__h.forEach(Rr),e.__h=[])},A.diffed=function(t){Yi&&Yi(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(Fr.push(e)!==1&&Wi===A.requestAnimationFrame||((Wi=A.requestAnimationFrame)||function(n){var r,o=function(){clearTimeout(i),Qi&&cancelAnimationFrame(r),setTimeout(n)},i=setTimeout(o,100);Qi&&(r=requestAnimationFrame(o))})(rf)),ie=null},A.__c=function(t,e){e.some(function(n){try{n.__h.forEach(vn),n.__h=n.__h.filter(function(r){return!r.__||Rr(r)})}catch(r){e.some(function(o){o.__h&&(o.__h=[])}),e=[],A.__e(r,n.__v)}}),Xi&&Xi(t,e)},A.unmount=function(t){Ki&&Ki(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{vn(r)}catch(o){e=o}}),e&&A.__e(e,n.__v))};var Qi=typeof requestAnimationFrame=="function";function vn(t){var e=ie,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),ie=e}function Rr(t){var e=ie;t.__c=t.__(),ie=e}function Nr(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function ea(t,e){return typeof e=="function"?e(t):e}function ta(t,e){for(var n in e)t[n]=e[n];return t}function Lr(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function zt(t){this.props=t}function na(t,e){function n(o){var i=this.props.ref,a=i==o.ref;return!a&&i&&(i.call?i(null):i.current=null),e?!e(this.props,o)||!a:Lr(this.props,o)}function r(o){return this.shouldComponentUpdate=n,Z(t,o)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(zt.prototype=new Q).isPureReactComponent=!0,zt.prototype.shouldComponentUpdate=function(t,e){return Lr(this.props,t)||Lr(this.state,e)};var ra=A.__b;A.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),ra&&ra(t)};var of=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Br(t){function e(n,r){var o=ta({},n);return delete o.ref,t(o,(r=n.ref||r)&&(typeof r!="object"||"current"in r)?r:null)}return e.$$typeof=of,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var oa=function(t,e){return t==null?null:De(De(t).map(e))},ia={map:oa,forEach:oa,count:function(t){return t?De(t).length:0},only:function(t){var e=De(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:De},af=A.__e;A.__e=function(t,e,n){if(t.then){for(var r,o=e;o=o.__;)if((r=o.__c)&&r.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),r.__c(t,e)}af(t,e,n)};var aa=A.unmount;function jt(){this.__u=0,this.t=null,this.__b=null}function sa(t){var e=t.__.__c;return e&&e.__e&&e.__e(t)}function ua(t){var e,n,r;function o(i){if(e||(e=t()).then(function(a){n=a.default||a},function(a){r=a}),r)throw r;if(!n)throw e;return Z(n,i)}return o.displayName="Lazy",o.__f=!0,o}function _t(){this.u=null,this.o=null}A.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),aa&&aa(t)},(jt.prototype=new Q).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=sa(r.__v),i=!1,a=function(){i||(i=!0,n.__R=null,o?o(s):s())};n.__R=a;var s=function(){if(!--r.__u){if(r.state.__e){var c=r.state.__e;r.__v.__k[0]=function f(d,p,m){return d&&(d.__v=null,d.__k=d.__k&&d.__k.map(function(b){return f(b,p,m)}),d.__c&&d.__c.__P===p&&(d.__e&&m.insertBefore(d.__e,d.__d),d.__c.__e=!0,d.__c.__P=m)),d}(c,c.__c.__P,c.__c.__O)}var l;for(r.setState({__e:r.__b=null});l=r.t.pop();)l.forceUpdate()}},u=e.__h===!0;r.__u++||u||r.setState({__e:r.__b=r.__v.__k[0]}),t.then(a,a)},jt.prototype.componentWillUnmount=function(){this.t=[]},jt.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function i(a,s,u){return a&&(a.__c&&a.__c.__H&&(a.__c.__H.__.forEach(function(c){typeof c.__c=="function"&&c.__c()}),a.__c.__H=null),(a=ta({},a)).__c!=null&&(a.__c.__P===u&&(a.__c.__P=s),a.__c=null),a.__k=a.__k&&a.__k.map(function(c){return i(c,s,u)})),a}(this.__b,n,r.__O=r.__P)}this.__b=null}var o=e.__e&&Z(ye,null,t.fallback);return o&&(o.__h=null),[Z(ye,null,e.__e?null:t.children),o]};var la=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function sf(t){return this.getChildContext=function(){return t.context},t.children}function uf(t){var e=this,n=t.i;e.componentWillUnmount=function(){gt(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),t.__v?(e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),gt(Z(sf,{context:e.context},t.__v),e.l)):e.l&&e.componentWillUnmount()}function Vr(t,e){return Z(uf,{__v:t,i:e})}(_t.prototype=new Q).__e=function(t){var e=this,n=sa(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),la(e,t,r)):o()};n?n(i):i()}},_t.prototype.render=function(t){this.u=null,this.o=new Map;var e=De(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},_t.prototype.componentDidUpdate=_t.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){la(t,n,e)})};var ca=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,lf=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,cf=typeof document!="undefined",ff=function(t){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(t)};function fa(t,e,n){return e.__k==null&&(e.textContent=""),gt(t,e),typeof n=="function"&&n(),t?t.__c:null}function da(t,e,n){return Mr(t,e),typeof n=="function"&&n(),t?t.__c:null}Q.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(Q.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var pa=A.event;function df(){}function pf(){return this.cancelBubble}function hf(){return this.defaultPrevented}A.event=function(t){return pa&&(t=pa(t)),t.persist=df,t.isPropagationStopped=pf,t.isDefaultPrevented=hf,t.nativeEvent=t};var ha,ma={configurable:!0,get:function(){return this.class}},va=A.vnode;A.vnode=function(t){var e=t.type,n=t.props,r=n;if(typeof e=="string"){var o=e.indexOf("-")===-1;for(var i in r={},n){var a=n[i];cf&&i==="children"&&e==="noscript"||i==="value"&&"defaultValue"in n&&a==null||(i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&a===!0?a="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+e)&&!ff(n.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(i)?i=i.toLowerCase():o&&lf.test(i)?i=i.replace(/[A-Z0-9]/,"-$&").toLowerCase():a===null&&(a=void 0),r[i]=a)}e=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=De(n.children).forEach(function(s){s.props.selected=r.value.indexOf(s.props.value)!=-1})),e=="select"&&r.defaultValue!=null&&(r.value=De(n.children).forEach(function(s){s.props.selected=r.multiple?r.defaultValue.indexOf(s.props.value)!=-1:r.defaultValue==s.props.value})),t.props=r,n.class!=n.className&&(ma.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",ma))}t.$$typeof=ca,va&&va(t)};var ga=A.__r;A.__r=function(t){ga&&ga(t),ha=t.__c};var ya={ReactCurrentDispatcher:{current:{readContext:function(t){return ha.__n[t.__c].props.value}}}},mf="17.0.2";function ba(t){return Z.bind(null,t)}function Hr(t){return!!t&&t.$$typeof===ca}function Sa(t){return Hr(t)?ji.apply(null,arguments):t}function _a(t){return!!t.__k&&(gt(null,t),!0)}function Ea(t){return t&&(t.base||t.nodeType===1&&t)||null}var Ca=function(t,e){return t(e)},Aa=function(t,e){return t(e)},vf=ye,g={useState:ze,useReducer:kr,useEffect:rt,useLayoutEffect:Ir,useRef:Te,useImperativeHandle:Ji,useMemo:je,useCallback:Me,useContext:Ut,useDebugValue:Zi,version:"17.0.2",Children:ia,render:fa,hydrate:da,unmountComponentAtNode:_a,createPortal:Vr,createElement:Z,createContext:yt,createFactory:ba,cloneElement:Sa,createRef:pn,Fragment:ye,isValidElement:Hr,findDOMNode:Ea,Component:Q,PureComponent:zt,memo:na,forwardRef:Br,flushSync:Aa,unstable_batchedUpdates:Ca,StrictMode:ye,Suspense:jt,SuspenseList:_t,lazy:ua,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ya},gf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:g,version:mf,Children:ia,render:fa,hydrate:da,unmountComponentAtNode:_a,createPortal:Vr,createFactory:ba,cloneElement:Sa,isValidElement:Hr,findDOMNode:Ea,PureComponent:zt,memo:na,forwardRef:Br,flushSync:Aa,unstable_batchedUpdates:Ca,StrictMode:vf,Suspense:jt,SuspenseList:_t,lazy:ua,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ya,createElement:Z,createContext:yt,createRef:pn,Fragment:ye,Component:Q,useState:ze,useReducer:kr,useEffect:rt,useLayoutEffect:Ir,useRef:Te,useImperativeHandle:Ji,useMemo:je,useCallback:Me,useContext:Ut,useDebugValue:Zi,useErrorBoundary:nf}),ot=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof __webpack_require__.g!="undefined"?__webpack_require__.g:typeof self!="undefined"?self:{};function yf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function gn(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}),e}var Ur={exports:{}};function zr(){}zr.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;for(r;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},Ur.exports=zr,Ur.exports.TinyEmitter=zr;var yn=Ur.exports;const B="http://www.w3.org/2000/svg",jr=t=>{const e=t.getAttribute("class");return e?new Set(e.split(" ")):new Set},Et=(t,e)=>{const n=jr(t);n.add(e),t.setAttribute("class",Array.from(n).join(" "))},bf=(t,e)=>{const n=jr(t);n.delete(e),n.size===0?t.removeAttribute("class"):t.setAttribute("class",Array.from(n).join(" "))},wa=(t,e)=>jr(t).has(e),bn=(t,e)=>{const n=t.selector("FragmentSelector");if(n==null?void 0:n.conformsTo.startsWith("http://www.w3.org/TR/media-frags")){const{value:r}=n,o=r.includes(":")?r.substring(r.indexOf("=")+1,r.indexOf(":")):"pixel",i=r.includes(":")?r.substring(r.indexOf(":")+1):r.substring(r.indexOf("=")+1);let[a,s,u,c]=i.split(",").map(parseFloat);return o.toLowerCase()==="percent"&&(a=a*e.naturalWidth/100,s=s*e.naturalHeight/100,u=u*e.naturalWidth/100,c=c*e.naturalHeight/100),{x:a,y:s,w:u,h:c}}},Sf=(t,e,n,r,o)=>({source:o==null?void 0:o.src,selector:{type:"FragmentSelector",conformsTo:"http://www.w3.org/TR/media-frags/",value:`xywh=pixel:${t},${e},${n},${r}`}}),_f=(t,e,n,r,o)=>{const i=t/o.naturalWidth*100,a=e/o.naturalHeight*100,s=n/o.naturalWidth*100,u=r/o.naturalHeight*100;return{source:o.src,selector:{type:"FragmentSelector",conformsTo:"http://www.w3.org/TR/media-frags/",value:`xywh=percent:${i},${a},${s},${u}`}}},Wr=(t,e,n,r,o,i)=>(i==null?void 0:i.toLowerCase())==="percent"?_f(t,e,n,r,o):Sf(t,e,n,r,o),Sn=(t,e,n,r,o)=>{t.setAttribute("x",e),t.setAttribute("y",n),t.setAttribute("width",r),t.setAttribute("height",o)},_n=(t,e,n)=>{t.setAttribute("cx",e),t.setAttribute("cy",n),t.setAttribute("r",7)},Oa=(t,e,n,r,o)=>{const i=document.createElementNS(B,"path");i.setAttribute("fill-rule","evenodd");const{naturalWidth:a,naturalHeight:s}=t;return i.setAttribute("d",`M0 0 h${a} v${s} h-${a} z M${e} ${n} h${r} v${o} h-${r} z`),i},Gr=(t,e,n,r,o,i)=>{const{naturalWidth:a,naturalHeight:s}=e;t.setAttribute("d",`M0 0 h${a} v${s} h-${a} z M${n} ${r} h${o} v${i} h-${o} z`)},qr=(t,e,n,r)=>{const{x:o,y:i,w:a,h:s}=t.type==="Annotation"||t.type==="Selection"?bn(t,e):{x:t,y:e,w:n,h:r},u=document.createElementNS(B,"g");if(a===0&&s===0){Et(u,"a9s-point"),Et(u,"a9s-non-scaling"),u.setAttribute("transform-origin",`${o} ${i}`);const c=document.createElementNS(B,"circle"),l=document.createElementNS(B,"circle");l.setAttribute("class","a9s-inner"),_n(l,o,i),c.setAttribute("class","a9s-outer"),_n(c,o,i),u.appendChild(c),u.appendChild(l)}else{const c=document.createElementNS(B,"rect"),l=document.createElementNS(B,"rect");l.setAttribute("class","a9s-inner"),Sn(l,o,i,a,s),c.setAttribute("class","a9s-outer"),Sn(c,o,i,a,s),u.appendChild(c),u.appendChild(l)}return u},xa=t=>{const e=t.querySelector(".a9s-outer");if(e.nodeName==="rect"){const n=parseFloat(e.getAttribute("x")),r=parseFloat(e.getAttribute("y")),o=parseFloat(e.getAttribute("width")),i=parseFloat(e.getAttribute("height"));return{x:n,y:r,w:o,h:i}}else{const n=parseFloat(e.getAttribute("cx")),r=parseFloat(e.getAttribute("cy"));return{x:n,y:r,w:0,h:0}}},Yr=(t,e,n,r,o)=>{const i=t.querySelector(".a9s-inner"),a=t.querySelector(".a9s-outer");a.nodeName==="rect"?(Sn(i,e,n,r,o),Sn(a,e,n,r,o)):(_n(i,e,n),_n(a,e,n))},Ef=(t,e)=>{const{w:n,h:r}=bn(t,e);return n*r},En=t=>{let e=0,n=t.length-1;for(let r=0;r<t.length;r++)e+=(t[n][0]+t[r][0])*(t[n][1]-t[r][1]),n=r;return Math.abs(.5*e)},Cf=(t,e)=>{const n=t[0],r=t[1];let o=!1;for(let i=0,a=e.length-1;i<e.length;a=i++){const s=e[i][0],u=e[i][1],c=e[a][0],l=e[a][1];u>r!=l>r&&n<(c-s)*(r-u)/(l-u)+s&&(o=!o)}return o},Af=(t,e)=>{for(let n of t)if(!Cf(n,e))return!1;return!0},wf=t=>{const e=t.getAttribute("d").split(/(?=M|m|L|l|H|h|V|v|Z|z)/g).map(o=>o.trim()),n=[];let r=[];for(let o of e){const i=o.substring(0,1);if(i.toLowerCase()==="z")n.push([...r]),r=[];else{const a=o.substring(1).split(" ").map(l=>parseFloat(l.trim())),s=i===i.toUpperCase(),u=s?a[0]:a[0]+r[r.length-1][0],c=s?a[1]:a[1]+r[r.length-1][1];r.push([u,c])}}return r.length>0&&n.push([...r]),n},Of=t=>{const r=new XMLSerializer().serializeToString(t.documentElement).replace("<svg>",`<svg xmlns="${B}">`);return new DOMParser().parseFromString(r,"image/svg+xml").documentElement},$a=t=>{const e=r=>{Array.from(r.attributes).forEach(o=>{o.name.startsWith("on")&&r.removeAttribute(o.name)})},n=t.getElementsByTagName("script");return Array.from(n).reverse().forEach(r=>r.parentNode.removeChild(r)),e(t),Array.from(t.querySelectorAll("*")).forEach(e),t},Xr=t=>{const e=t.selector("SvgSelector");if(e){const n=new DOMParser,{value:r}=e,o=n.parseFromString(r,"image/svg+xml"),i=o.lookupPrefix(B),a=o.lookupNamespaceURI(null);return i||a?$a(o).firstChild:$a(Of(o)).firstChild}},Pa=t=>{const e=Xr(t),n=document.createElementNS(B,"g"),r=e.cloneNode(!0);r.setAttribute("class","a9s-inner");const o=e.cloneNode(!0);return o.setAttribute("class","a9s-outer"),n.appendChild(o),n.appendChild(r),n},Kr=(t,e)=>{const n=t.querySelector(".a9s-inner").cloneNode(!0);n.removeAttribute("class"),n.removeAttribute("xmlns");let r=n.outerHTML||new XMLSerializer().serializeToString(n);return r=r.replace(` xmlns="${B}"`,""),{source:e==null?void 0:e.src,selector:{type:"SvgSelector",value:`<svg>${r}</svg>`}}},xf=t=>{const e=Xr(t),n=e.nodeName.toLowerCase();if(n==="polygon")return $f(e);if(n==="circle")return Pf(e);if(n==="ellipse")return Df(e);if(n=="path")return Tf(e);throw`Unsupported SVG shape type: ${n}`},$f=t=>{const e=t.getAttribute("points").trim().split(" ").map(n=>n.split(",").map(r=>parseFloat(r.trim())));return En(e)},Pf=t=>{const e=t.getAttribute("r");return e*e*Math.PI},Df=t=>{const e=t.getAttribute("rx"),n=t.getAttribute("ry");return e*n*Math.PI},Tf=t=>{const e=wf(t);if(e.length==1)return En(e[0]);{const n=o=>e.find(i=>{if(o!==i)return Af(o,i)});let r=0;for(let o of e)n(o)?r-=En(o):r+=En(o);return r}},Mf={FragmentSelector:qr,SvgSelector:Pa},Ff={FragmentSelector:Ef,SvgSelector:xf},Da=t=>{const e=t.targets[0];if(e)return Array.isArray(e.selector)?e.selector[0]:e.selector},kf=(t,e)=>Mf[Da(t).type](t,e),Cn=(t,e)=>Ff[Da(t).type](t,e);var An={exports:{}},Ta={},Ct=gn(gf),Wt={exports:{}},If="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Rf=If,Nf=Rf;function Ma(){}function Fa(){}Fa.resetWarningCache=Ma;var Lf=function(){function t(r,o,i,a,s,u){if(u!==Nf){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Fa,resetWarningCache:Ma};return n.PropTypes=n,n};Wt.exports=Lf();function ka(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=ka(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Bf(){for(var t=0,e,n,r="";t<arguments.length;)(e=arguments[t++])&&(n=ka(e))&&(r&&(r+=" "),r+=n);return r}var Vf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Bf}),Hf=gn(Vf),X={},Fe={};Object.defineProperty(Fe,"__esModule",{value:!0}),Fe.findInArray=Uf,Fe.isFunction=zf,Fe.isNum=jf,Fe.int=Wf,Fe.dontSetMe=Gf;function Uf(t,e){for(var n=0,r=t.length;n<r;n++)if(e.apply(e,[t[n],n,t]))return t[n]}function zf(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Function]"}function jf(t){return typeof t=="number"&&!isNaN(t)}function Wf(t){return parseInt(t,10)}function Gf(t,e,n){if(t[e])return new Error("Invalid prop ".concat(e," passed to ").concat(n," - do not set this, set it on the child."))}var it={};Object.defineProperty(it,"__esModule",{value:!0}),it.getPrefix=Ia,it.browserPrefixToKey=Ra,it.browserPrefixToStyle=qf,it.default=void 0;var Jr=["Moz","Webkit","O","ms"];function Ia(){var t,e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window=="undefined")return"";var r=(t=window.document)===null||t===void 0||(e=t.documentElement)===null||e===void 0?void 0:e.style;if(!r||n in r)return"";for(var o=0;o<Jr.length;o++)if(Ra(n,Jr[o])in r)return Jr[o];return""}function Ra(t,e){return e?"".concat(e).concat(Yf(t)):t}function qf(t,e){return e?"-".concat(e.toLowerCase(),"-").concat(t):t}function Yf(t){for(var e="",n=!0,r=0;r<t.length;r++)n?(e+=t[r].toUpperCase(),n=!1):t[r]==="-"?n=!0:e+=t[r];return e}var Xf=Ia();it.default=Xf;function wn(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?wn=function(n){return typeof n}:wn=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},wn(t)}Object.defineProperty(X,"__esModule",{value:!0}),X.matchesSelector=Ua,X.matchesSelectorAndParentsTo=Jf,X.addEvent=Zf,X.removeEvent=Qf,X.outerHeight=ed,X.outerWidth=td,X.innerHeight=nd,X.innerWidth=rd,X.offsetXYFromParent=od,X.createCSSTransform=id,X.createSVGTransform=ad,X.getTranslation=Zr,X.getTouch=sd,X.getTouchIdentifier=ud,X.addUserSelectStyles=ld,X.removeUserSelectStyles=cd,X.addClassName=za,X.removeClassName=ja;var be=Fe,Na=Kf(it);function La(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(La=function(o){return o?n:e})(t)}function Kf(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||wn(t)!=="object"&&typeof t!="function")return{default:t};var n=La(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(i!=="default"&&Object.prototype.hasOwnProperty.call(t,i)){var a=o?Object.getOwnPropertyDescriptor(t,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=t[i]}return r.default=t,n&&n.set(t,r),r}function Ba(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function Va(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ba(Object(n),!0).forEach(function(r){Ha(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ba(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ha(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var On="";function Ua(t,e){return On||(On=(0,be.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,be.isFunction)(t[n])})),(0,be.isFunction)(t[On])?t[On](e):!1}function Jf(t,e,n){var r=t;do{if(Ua(r,e))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function Zf(t,e,n,r){if(!!t){var o=Va({capture:!0},r);t.addEventListener?t.addEventListener(e,n,o):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n}}function Qf(t,e,n,r){if(!!t){var o=Va({capture:!0},r);t.removeEventListener?t.removeEventListener(e,n,o):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null}}function ed(t){var e=t.clientHeight,n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,be.int)(n.borderTopWidth),e+=(0,be.int)(n.borderBottomWidth),e}function td(t){var e=t.clientWidth,n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,be.int)(n.borderLeftWidth),e+=(0,be.int)(n.borderRightWidth),e}function nd(t){var e=t.clientHeight,n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,be.int)(n.paddingTop),e-=(0,be.int)(n.paddingBottom),e}function rd(t){var e=t.clientWidth,n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,be.int)(n.paddingLeft),e-=(0,be.int)(n.paddingRight),e}function od(t,e,n){var r=e===e.ownerDocument.body,o=r?{left:0,top:0}:e.getBoundingClientRect(),i=(t.clientX+e.scrollLeft-o.left)/n,a=(t.clientY+e.scrollTop-o.top)/n;return{x:i,y:a}}function id(t,e){var n=Zr(t,e,"px");return Ha({},(0,Na.browserPrefixToKey)("transform",Na.default),n)}function ad(t,e){var n=Zr(t,e,"");return n}function Zr(t,e,n){var r=t.x,o=t.y,i="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(e){var a="".concat(typeof e.x=="string"?e.x:e.x+n),s="".concat(typeof e.y=="string"?e.y:e.y+n);i="translate(".concat(a,", ").concat(s,")")+i}return i}function sd(t,e){return t.targetTouches&&(0,be.findInArray)(t.targetTouches,function(n){return e===n.identifier})||t.changedTouches&&(0,be.findInArray)(t.changedTouches,function(n){return e===n.identifier})}function ud(t){if(t.targetTouches&&t.targetTouches[0])return t.targetTouches[0].identifier;if(t.changedTouches&&t.changedTouches[0])return t.changedTouches[0].identifier}function ld(t){if(!!t){var e=t.getElementById("react-draggable-style-el");e||(e=t.createElement("style"),e.type="text/css",e.id="react-draggable-style-el",e.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,e.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,t.getElementsByTagName("head")[0].appendChild(e)),t.body&&za(t.body,"react-draggable-transparent-selection")}}function cd(t){if(!!t)try{if(t.body&&ja(t.body,"react-draggable-transparent-selection"),t.selection)t.selection.empty();else{var e=(t.defaultView||window).getSelection();e&&e.type!=="Caret"&&e.removeAllRanges()}}catch{}}function za(t,e){t.classList?t.classList.add(e):t.className.match(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)")))||(t.className+=" ".concat(e))}function ja(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)"),"g"),"")}var ke={};Object.defineProperty(ke,"__esModule",{value:!0}),ke.getBoundPosition=fd,ke.snapToGrid=dd,ke.canDragX=pd,ke.canDragY=hd,ke.getControlPosition=md,ke.createCoreData=vd,ke.createDraggableData=gd;var Se=Fe,At=X;function fd(t,e,n){if(!t.props.bounds)return[e,n];var r=t.props.bounds;r=typeof r=="string"?r:yd(r);var o=Qr(t);if(typeof r=="string"){var i=o.ownerDocument,a=i.defaultView,s;if(r==="parent"?s=o.parentNode:s=i.querySelector(r),!(s instanceof a.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');var u=s,c=a.getComputedStyle(o),l=a.getComputedStyle(u);r={left:-o.offsetLeft+(0,Se.int)(l.paddingLeft)+(0,Se.int)(c.marginLeft),top:-o.offsetTop+(0,Se.int)(l.paddingTop)+(0,Se.int)(c.marginTop),right:(0,At.innerWidth)(u)-(0,At.outerWidth)(o)-o.offsetLeft+(0,Se.int)(l.paddingRight)-(0,Se.int)(c.marginRight),bottom:(0,At.innerHeight)(u)-(0,At.outerHeight)(o)-o.offsetTop+(0,Se.int)(l.paddingBottom)-(0,Se.int)(c.marginBottom)}}return(0,Se.isNum)(r.right)&&(e=Math.min(e,r.right)),(0,Se.isNum)(r.bottom)&&(n=Math.min(n,r.bottom)),(0,Se.isNum)(r.left)&&(e=Math.max(e,r.left)),(0,Se.isNum)(r.top)&&(n=Math.max(n,r.top)),[e,n]}function dd(t,e,n){var r=Math.round(e/t[0])*t[0],o=Math.round(n/t[1])*t[1];return[r,o]}function pd(t){return t.props.axis==="both"||t.props.axis==="x"}function hd(t){return t.props.axis==="both"||t.props.axis==="y"}function md(t,e,n){var r=typeof e=="number"?(0,At.getTouch)(t,e):null;if(typeof e=="number"&&!r)return null;var o=Qr(n),i=n.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,At.offsetXYFromParent)(r||t,i,n.props.scale)}function vd(t,e,n){var r=t.state,o=!(0,Se.isNum)(r.lastX),i=Qr(t);return o?{node:i,deltaX:0,deltaY:0,lastX:e,lastY:n,x:e,y:n}:{node:i,deltaX:e-r.lastX,deltaY:n-r.lastY,lastX:r.lastX,lastY:r.lastY,x:e,y:n}}function gd(t,e){var n=t.props.scale;return{node:e.node,x:t.state.x+e.deltaX/n,y:t.state.y+e.deltaY/n,deltaX:e.deltaX/n,deltaY:e.deltaY/n,lastX:t.state.x,lastY:t.state.y}}function yd(t){return{left:t.left,top:t.top,right:t.right,bottom:t.bottom}}function Qr(t){var e=t.findDOMNode();if(!e)throw new Error("<DraggableCore>: Unmounted during event!");return e}var xn={},$n={};Object.defineProperty($n,"__esModule",{value:!0}),$n.default=bd;function bd(){}function Gt(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Gt=function(n){return typeof n}:Gt=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Gt(t)}Object.defineProperty(xn,"__esModule",{value:!0}),xn.default=void 0;var eo=_d(Ct),_e=no(Wt.exports),Sd=no(Ct),ue=X,at=ke,to=Fe,qt=no($n);function no(t){return t&&t.__esModule?t:{default:t}}function Wa(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(Wa=function(o){return o?n:e})(t)}function _d(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||Gt(t)!=="object"&&typeof t!="function")return{default:t};var n=Wa(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(i!=="default"&&Object.prototype.hasOwnProperty.call(t,i)){var a=o?Object.getOwnPropertyDescriptor(t,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=t[i]}return r.default=t,n&&n.set(t,r),r}function Ed(t,e){return Od(t)||wd(t,e)||Ad(t,e)||Cd()}function Cd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ad(t,e){if(!!t){if(typeof t=="string")return Ga(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ga(t,e)}}function Ga(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function wd(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],o=!0,i=!1,a,s;try{for(n=n.call(t);!(o=(a=n.next()).done)&&(r.push(a.value),!(e&&r.length===e));o=!0);}catch(u){i=!0,s=u}finally{try{!o&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Od(t){if(Array.isArray(t))return t}function xd(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function qa(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function $d(t,e,n){return e&&qa(t.prototype,e),n&&qa(t,n),t}function Pd(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ro(t,e)}function ro(t,e){return ro=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},ro(t,e)}function Dd(t){var e=Md();return function(){var r=Pn(t),o;if(e){var i=Pn(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return Td(this,o)}}function Td(t,e){if(e&&(Gt(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return le(t)}function le(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Md(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Pn(t){return Pn=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Pn(t)}function Oe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Pe={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}},Xe=Pe.mouse,Dn=function(t){Pd(n,t);var e=Dd(n);function n(){var r;xd(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=e.call.apply(e,[this].concat(i)),Oe(le(r),"state",{dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null}),Oe(le(r),"mounted",!1),Oe(le(r),"handleDragStart",function(s){if(r.props.onMouseDown(s),!r.props.allowAnyClick&&typeof s.button=="number"&&s.button!==0)return!1;var u=r.findDOMNode();if(!u||!u.ownerDocument||!u.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");var c=u.ownerDocument;if(!(r.props.disabled||!(s.target instanceof c.defaultView.Node)||r.props.handle&&!(0,ue.matchesSelectorAndParentsTo)(s.target,r.props.handle,u)||r.props.cancel&&(0,ue.matchesSelectorAndParentsTo)(s.target,r.props.cancel,u))){s.type==="touchstart"&&s.preventDefault();var l=(0,ue.getTouchIdentifier)(s);r.setState({touchIdentifier:l});var f=(0,at.getControlPosition)(s,l,le(r));if(f!=null){var d=f.x,p=f.y,m=(0,at.createCoreData)(le(r),d,p);(0,qt.default)("DraggableCore: handleDragStart: %j",m),(0,qt.default)("calling",r.props.onStart);var b=r.props.onStart(s,m);b===!1||r.mounted===!1||(r.props.enableUserSelectHack&&(0,ue.addUserSelectStyles)(c),r.setState({dragging:!0,lastX:d,lastY:p}),(0,ue.addEvent)(c,Xe.move,r.handleDrag),(0,ue.addEvent)(c,Xe.stop,r.handleDragStop))}}}),Oe(le(r),"handleDrag",function(s){var u=(0,at.getControlPosition)(s,r.state.touchIdentifier,le(r));if(u!=null){var c=u.x,l=u.y;if(Array.isArray(r.props.grid)){var f=c-r.state.lastX,d=l-r.state.lastY,p=(0,at.snapToGrid)(r.props.grid,f,d),m=Ed(p,2);if(f=m[0],d=m[1],!f&&!d)return;c=r.state.lastX+f,l=r.state.lastY+d}var b=(0,at.createCoreData)(le(r),c,l);(0,qt.default)("DraggableCore: handleDrag: %j",b);var v=r.props.onDrag(s,b);if(v===!1||r.mounted===!1){try{r.handleDragStop(new MouseEvent("mouseup"))}catch{var S=document.createEvent("MouseEvents");S.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),r.handleDragStop(S)}return}r.setState({lastX:c,lastY:l})}}),Oe(le(r),"handleDragStop",function(s){if(!!r.state.dragging){var u=(0,at.getControlPosition)(s,r.state.touchIdentifier,le(r));if(u!=null){var c=u.x,l=u.y,f=(0,at.createCoreData)(le(r),c,l),d=r.props.onStop(s,f);if(d===!1||r.mounted===!1)return!1;var p=r.findDOMNode();p&&r.props.enableUserSelectHack&&(0,ue.removeUserSelectStyles)(p.ownerDocument),(0,qt.default)("DraggableCore: handleDragStop: %j",f),r.setState({dragging:!1,lastX:NaN,lastY:NaN}),p&&((0,qt.default)("DraggableCore: Removing handlers"),(0,ue.removeEvent)(p.ownerDocument,Xe.move,r.handleDrag),(0,ue.removeEvent)(p.ownerDocument,Xe.stop,r.handleDragStop))}}}),Oe(le(r),"onMouseDown",function(s){return Xe=Pe.mouse,r.handleDragStart(s)}),Oe(le(r),"onMouseUp",function(s){return Xe=Pe.mouse,r.handleDragStop(s)}),Oe(le(r),"onTouchStart",function(s){return Xe=Pe.touch,r.handleDragStart(s)}),Oe(le(r),"onTouchEnd",function(s){return Xe=Pe.touch,r.handleDragStop(s)}),r}return $d(n,[{key:"componentDidMount",value:function(){this.mounted=!0;var o=this.findDOMNode();o&&(0,ue.addEvent)(o,Pe.touch.start,this.onTouchStart,{passive:!1})}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var o=this.findDOMNode();if(o){var i=o.ownerDocument;(0,ue.removeEvent)(i,Pe.mouse.move,this.handleDrag),(0,ue.removeEvent)(i,Pe.touch.move,this.handleDrag),(0,ue.removeEvent)(i,Pe.mouse.stop,this.handleDragStop),(0,ue.removeEvent)(i,Pe.touch.stop,this.handleDragStop),(0,ue.removeEvent)(o,Pe.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,ue.removeUserSelectStyles)(i)}}},{key:"findDOMNode",value:function(){var o,i,a;return(o=(i=this.props)===null||i===void 0||(a=i.nodeRef)===null||a===void 0?void 0:a.current)!==null&&o!==void 0?o:Sd.default.findDOMNode(this)}},{key:"render",value:function(){return eo.cloneElement(eo.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}]),n}(eo.Component);xn.default=Dn,Oe(Dn,"displayName","DraggableCore"),Oe(Dn,"propTypes",{allowAnyClick:_e.default.bool,disabled:_e.default.bool,enableUserSelectHack:_e.default.bool,offsetParent:function(e,n){if(e[n]&&e[n].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:_e.default.arrayOf(_e.default.number),handle:_e.default.string,cancel:_e.default.string,nodeRef:_e.default.object,onStart:_e.default.func,onDrag:_e.default.func,onStop:_e.default.func,onMouseDown:_e.default.func,scale:_e.default.number,className:to.dontSetMe,style:to.dontSetMe,transform:to.dontSetMe}),Oe(Dn,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1}),function(t){function e(y){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(E){return typeof E}:e=function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},e(y)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return c.default}}),t.default=void 0;var n=m(Ct),r=d(Wt.exports),o=d(Ct),i=d(Hf),a=X,s=ke,u=Fe,c=d(xn),l=d($n),f=["axis","bounds","children","defaultPosition","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","position","positionOffset","scale"];function d(y){return y&&y.__esModule?y:{default:y}}function p(y){if(typeof WeakMap!="function")return null;var _=new WeakMap,E=new WeakMap;return(p=function(O){return O?E:_})(y)}function m(y,_){if(!_&&y&&y.__esModule)return y;if(y===null||e(y)!=="object"&&typeof y!="function")return{default:y};var E=p(_);if(E&&E.has(y))return E.get(y);var w={},O=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in y)if(D!=="default"&&Object.prototype.hasOwnProperty.call(y,D)){var I=O?Object.getOwnPropertyDescriptor(y,D):null;I&&(I.get||I.set)?Object.defineProperty(w,D,I):w[D]=y[D]}return w.default=y,E&&E.set(y,w),w}function b(){return b=Object.assign||function(y){for(var _=1;_<arguments.length;_++){var E=arguments[_];for(var w in E)Object.prototype.hasOwnProperty.call(E,w)&&(y[w]=E[w])}return y},b.apply(this,arguments)}function v(y,_){if(y==null)return{};var E=S(y,_),w,O;if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(y);for(O=0;O<D.length;O++)w=D[O],!(_.indexOf(w)>=0)&&(!Object.prototype.propertyIsEnumerable.call(y,w)||(E[w]=y[w]))}return E}function S(y,_){if(y==null)return{};var E={},w=Object.keys(y),O,D;for(D=0;D<w.length;D++)O=w[D],!(_.indexOf(O)>=0)&&(E[O]=y[O]);return E}function C(y,_){var E=Object.keys(y);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(y);_&&(w=w.filter(function(O){return Object.getOwnPropertyDescriptor(y,O).enumerable})),E.push.apply(E,w)}return E}function P(y){for(var _=1;_<arguments.length;_++){var E=arguments[_]!=null?arguments[_]:{};_%2?C(Object(E),!0).forEach(function(w){xe(y,w,E[w])}):Object.getOwnPropertyDescriptors?Object.defineProperties(y,Object.getOwnPropertyDescriptors(E)):C(Object(E)).forEach(function(w){Object.defineProperty(y,w,Object.getOwnPropertyDescriptor(E,w))})}return y}function k(y,_){return z(y)||J(y,_)||F(y,_)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F(y,_){if(!!y){if(typeof y=="string")return $(y,_);var E=Object.prototype.toString.call(y).slice(8,-1);if(E==="Object"&&y.constructor&&(E=y.constructor.name),E==="Map"||E==="Set")return Array.from(y);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return $(y,_)}}function $(y,_){(_==null||_>y.length)&&(_=y.length);for(var E=0,w=new Array(_);E<_;E++)w[E]=y[E];return w}function J(y,_){var E=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(E!=null){var w=[],O=!0,D=!1,I,G;try{for(E=E.call(y);!(O=(I=E.next()).done)&&(w.push(I.value),!(_&&w.length===_));O=!0);}catch(W){D=!0,G=W}finally{try{!O&&E.return!=null&&E.return()}finally{if(D)throw G}}return w}}function z(y){if(Array.isArray(y))return y}function de(y,_){if(!(y instanceof _))throw new TypeError("Cannot call a class as a function")}function Y(y,_){for(var E=0;E<_.length;E++){var w=_[E];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(y,w.key,w)}}function q(y,_,E){return _&&Y(y.prototype,_),E&&Y(y,E),y}function K(y,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");y.prototype=Object.create(_&&_.prototype,{constructor:{value:y,writable:!0,configurable:!0}}),_&&pe(y,_)}function pe(y,_){return pe=Object.setPrototypeOf||function(w,O){return w.__proto__=O,w},pe(y,_)}function Be(y){var _=cn();return function(){var w=Ve(y),O;if(_){var D=Ve(this).constructor;O=Reflect.construct(w,arguments,D)}else O=w.apply(this,arguments);return me(this,O)}}function me(y,_){if(_&&(e(_)==="object"||typeof _=="function"))return _;if(_!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return oe(y)}function oe(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}function cn(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ve(y){return Ve=Object.setPrototypeOf?Object.getPrototypeOf:function(E){return E.__proto__||Object.getPrototypeOf(E)},Ve(y)}function xe(y,_,E){return _ in y?Object.defineProperty(y,_,{value:E,enumerable:!0,configurable:!0,writable:!0}):y[_]=E,y}var mt=function(y){K(E,y);var _=Be(E);function E(w){var O;return de(this,E),O=_.call(this,w),xe(oe(O),"onDragStart",function(D,I){(0,l.default)("Draggable: onDragStart: %j",I);var G=O.props.onStart(D,(0,s.createDraggableData)(oe(O),I));if(G===!1)return!1;O.setState({dragging:!0,dragged:!0})}),xe(oe(O),"onDrag",function(D,I){if(!O.state.dragging)return!1;(0,l.default)("Draggable: onDrag: %j",I);var G=(0,s.createDraggableData)(oe(O),I),W={x:G.x,y:G.y};if(O.props.bounds){var et=W.x,Ye=W.y;W.x+=O.state.slackX,W.y+=O.state.slackY;var tt=(0,s.getBoundPosition)(oe(O),W.x,W.y),He=k(tt,2),fn=He[0],xr=He[1];W.x=fn,W.y=xr,W.slackX=O.state.slackX+(et-W.x),W.slackY=O.state.slackY+(Ye-W.y),G.x=W.x,G.y=W.y,G.deltaX=W.x-O.state.x,G.deltaY=W.y-O.state.y}var $r=O.props.onDrag(D,G);if($r===!1)return!1;O.setState(W)}),xe(oe(O),"onDragStop",function(D,I){if(!O.state.dragging)return!1;var G=O.props.onStop(D,(0,s.createDraggableData)(oe(O),I));if(G===!1)return!1;(0,l.default)("Draggable: onDragStop: %j",I);var W={dragging:!1,slackX:0,slackY:0},et=Boolean(O.props.position);if(et){var Ye=O.props.position,tt=Ye.x,He=Ye.y;W.x=tt,W.y=He}O.setState(W)}),O.state={dragging:!1,dragged:!1,x:w.position?w.position.x:w.defaultPosition.x,y:w.position?w.position.y:w.defaultPosition.y,prevPropsPosition:P({},w.position),slackX:0,slackY:0,isElementSVG:!1},w.position&&!(w.onDrag||w.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."),O}return q(E,[{key:"componentDidMount",value:function(){typeof window.SVGElement!="undefined"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"findDOMNode",value:function(){var O,D,I;return(O=(D=this.props)===null||D===void 0||(I=D.nodeRef)===null||I===void 0?void 0:I.current)!==null&&O!==void 0?O:o.default.findDOMNode(this)}},{key:"render",value:function(){var O,D=this.props;D.axis,D.bounds;var I=D.children,G=D.defaultPosition,W=D.defaultClassName,et=D.defaultClassNameDragging,Ye=D.defaultClassNameDragged,tt=D.position,He=D.positionOffset;D.scale;var fn=v(D,f),xr={},$r=null,xS=Boolean(tt),Gc=!xS||this.state.dragging,qc=tt||G,Yc={x:(0,s.canDragX)(this)&&Gc?this.state.x:qc.x,y:(0,s.canDragY)(this)&&Gc?this.state.y:qc.y};this.state.isElementSVG?$r=(0,a.createSVGTransform)(Yc,He):xr=(0,a.createCSSTransform)(Yc,He);var $S=(0,i.default)(I.props.className||"",W,(O={},xe(O,et,this.state.dragging),xe(O,Ye,this.state.dragged),O));return n.createElement(c.default,b({},fn,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),n.cloneElement(n.Children.only(I),{className:$S,style:P(P({},I.props.style),xr),transform:$r}))}}],[{key:"getDerivedStateFromProps",value:function(O,D){var I=O.position,G=D.prevPropsPosition;return I&&(!G||I.x!==G.x||I.y!==G.y)?((0,l.default)("Draggable: getDerivedStateFromProps %j",{position:I,prevPropsPosition:G}),{x:I.x,y:I.y,prevPropsPosition:P({},I)}):null}}]),E}(n.Component);t.default=mt,xe(mt,"displayName","Draggable"),xe(mt,"propTypes",P(P({},c.default.propTypes),{},{axis:r.default.oneOf(["both","x","y","none"]),bounds:r.default.oneOfType([r.default.shape({left:r.default.number,right:r.default.number,top:r.default.number,bottom:r.default.number}),r.default.string,r.default.oneOf([!1])]),defaultClassName:r.default.string,defaultClassNameDragging:r.default.string,defaultClassNameDragged:r.default.string,defaultPosition:r.default.shape({x:r.default.number,y:r.default.number}),positionOffset:r.default.shape({x:r.default.oneOfType([r.default.number,r.default.string]),y:r.default.oneOfType([r.default.number,r.default.string])}),position:r.default.shape({x:r.default.number,y:r.default.number}),className:u.dontSetMe,style:u.dontSetMe,transform:u.dontSetMe})),xe(mt,"defaultProps",P(P({},c.default.defaultProps),{},{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1}))}(Ta);var Ya=Ta,Xa=Ya.default,Fd=Ya.DraggableCore;An.exports=Xa,An.exports.default=Xa,An.exports.DraggableCore=Fd;var kd=An.exports,Id=["second","minute","hour","day","week","month","year"];function Rd(t,e){if(e===0)return["just now","right now"];var n=Id[Math.floor(e/2)];return t>1&&(n+="s"),[t+" "+n+" ago","in "+t+" "+n]}var Nd=["\u79D2","\u5206\u949F","\u5C0F\u65F6","\u5929","\u5468","\u4E2A\u6708","\u5E74"];function Ld(t,e){if(e===0)return["\u521A\u521A","\u7247\u523B\u540E"];var n=Nd[~~(e/2)];return[t+" "+n+"\u524D",t+" "+n+"\u540E"]}var oo={},te=function(t,e){oo[t]=e},Ka=function(t){return oo[t]||oo.en_US},st=[60,60,24,7,365/7/12,12];function Ja(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}function Za(t,e){var n=t<0?1:0;t=Math.abs(t);for(var r=t,o=0;t>=st[o]&&o<st.length;o++)t/=st[o];return t=Math.floor(t),o*=2,t>(o===0?9:1)&&(o+=1),e(t,o,r)[n].replace("%s",t.toString())}function Qa(t,e){var n=e?Ja(e):new Date;return(+n-+Ja(t))/1e3}function Bd(t){for(var e=1,n=0,r=Math.abs(t);t>=st[n]&&n<st.length;n++)t/=st[n],e*=st[n];return r=r%e,r=r?e-r:e,Math.ceil(r)}var Vd=function(t,e,n){var r=Qa(t,n&&n.relativeDate);return Za(r,Ka(e))},es="timeago-id";function Hd(t){return t.getAttribute("datetime")}function Ud(t,e){t.setAttribute(es,e)}function ts(t){return parseInt(t.getAttribute(es))}var io={},ao=function(t){clearTimeout(t),delete io[t]};function ns(t,e,n,r){ao(ts(t));var o=r.relativeDate,i=r.minInterval,a=Qa(e,o);t.innerText=Za(a,n);var s=setTimeout(function(){ns(t,e,n,r)},Math.min(Math.max(Bd(a),i||1)*1e3,2147483647));io[s]=0,Ud(t,s)}function rs(t){t?ao(ts(t)):Object.keys(io).forEach(ao)}function zd(t,e,n){var r=t.length?t:[t];return r.forEach(function(o){ns(o,Hd(o),Ka(e),n||{})}),r}te("en_US",Rd),te("zh_CN",Ld);var jd=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)o.hasOwnProperty(i)&&(r[i]=o[i])},t(e,n)};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),so=globalThis&&globalThis.__assign||function(){return so=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},so.apply(this,arguments)},Wd=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n},Gd=function(t){return""+(t instanceof Date?t.getTime():t)},qd=function(t){jd(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.dom=null,n}return e.prototype.componentDidMount=function(){this.renderTimeAgo()},e.prototype.componentDidUpdate=function(){this.renderTimeAgo()},e.prototype.renderTimeAgo=function(){var n=this.props,r=n.live,o=n.datetime,i=n.locale,a=n.opts;rs(this.dom),r!==!1&&(this.dom.setAttribute("datetime",Gd(o)),zd(this.dom,i,a))},e.prototype.componentWillUnmount=function(){rs(this.dom)},e.prototype.render=function(){var n=this,r=this.props,o=r.datetime;r.live;var i=r.locale,a=r.opts,s=Wd(r,["datetime","live","locale","opts"]);return Z("time",so({ref:function(u){n.dom=u}},s),Vd(o,i,a))},e.defaultProps={live:!0,className:""},e}(zt);function Yd(t,e){const n=r=>{t.current&&!t.current.contains(event.target)&&e()};rt(()=>(document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)))}var os=Object.prototype.toString,is=function(e){var n=os.call(e),r=n==="[object Arguments]";return r||(r=n!=="[object Array]"&&e!==null&&typeof e=="object"&&typeof e.length=="number"&&e.length>=0&&os.call(e.callee)==="[object Function]"),r},as;if(!Object.keys){var Tn=Object.prototype.hasOwnProperty,ss=Object.prototype.toString,Xd=is,us=Object.prototype.propertyIsEnumerable,Kd=!us.call({toString:null},"toString"),Jd=us.call(function(){},"prototype"),Mn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],uo=function(t){var e=t.constructor;return e&&e.prototype===t},Zd={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},Qd=function(){if(typeof window=="undefined")return!1;for(var t in window)try{if(!Zd["$"+t]&&Tn.call(window,t)&&window[t]!==null&&typeof window[t]=="object")try{uo(window[t])}catch{return!0}}catch{return!0}return!1}(),ep=function(t){if(typeof window=="undefined"||!Qd)return uo(t);try{return uo(t)}catch{return!1}};as=function(e){var n=e!==null&&typeof e=="object",r=ss.call(e)==="[object Function]",o=Xd(e),i=n&&ss.call(e)==="[object String]",a=[];if(!n&&!r&&!o)throw new TypeError("Object.keys called on a non-object");var s=Jd&&r;if(i&&e.length>0&&!Tn.call(e,0))for(var u=0;u<e.length;++u)a.push(String(u));if(o&&e.length>0)for(var c=0;c<e.length;++c)a.push(String(c));else for(var l in e)!(s&&l==="prototype")&&Tn.call(e,l)&&a.push(String(l));if(Kd)for(var f=ep(e),d=0;d<Mn.length;++d)!(f&&Mn[d]==="constructor")&&Tn.call(e,Mn[d])&&a.push(Mn[d]);return a}}var tp=as,np=Array.prototype.slice,rp=is,ls=Object.keys,Fn=ls?function(e){return ls(e)}:tp,cs=Object.keys;Fn.shim=function(){if(Object.keys){var e=function(){var n=Object.keys(arguments);return n&&n.length===arguments.length}(1,2);e||(Object.keys=function(r){return rp(r)?cs(np.call(r)):cs(r)})}else Object.keys=Fn;return Object.keys||Fn};var op=Fn,ip=op,ap=typeof Symbol=="function"&&typeof Symbol("foo")=="symbol",sp=Object.prototype.toString,up=Array.prototype.concat,lo=Object.defineProperty,lp=function(t){return typeof t=="function"&&sp.call(t)==="[object Function]"},cp=function(){var t={};try{lo(t,"x",{enumerable:!1,value:t});for(var e in t)return!1;return t.x===t}catch{return!1}},fs=lo&&cp(),fp=function(t,e,n,r){e in t&&(!lp(r)||!r())||(fs?lo(t,e,{configurable:!0,enumerable:!1,value:n,writable:!0}):t[e]=n)},ds=function(t,e){var n=arguments.length>2?arguments[2]:{},r=ip(e);ap&&(r=up.call(r,Object.getOwnPropertySymbols(e)));for(var o=0;o<r.length;o+=1)fp(t,r[o],e[r[o]],n[r[o]])};ds.supportsDescriptors=!!fs;var wt=ds,Ot={exports:{}},dp="Function.prototype.bind called on incompatible ",co=Array.prototype.slice,pp=Object.prototype.toString,hp="[object Function]",mp=function(e){var n=this;if(typeof n!="function"||pp.call(n)!==hp)throw new TypeError(dp+n);for(var r=co.call(arguments,1),o,i=function(){if(this instanceof o){var l=n.apply(this,r.concat(co.call(arguments)));return Object(l)===l?l:this}else return n.apply(e,r.concat(co.call(arguments)))},a=Math.max(0,n.length-r.length),s=[],u=0;u<a;u++)s.push("$"+u);if(o=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(i),n.prototype){var c=function(){};c.prototype=n.prototype,o.prototype=new c,c.prototype=null}return o},vp=mp,fo=Function.prototype.bind||vp,ps=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},n=Symbol("test"),r=Object(n);if(typeof n=="string"||Object.prototype.toString.call(n)!=="[object Symbol]"||Object.prototype.toString.call(r)!=="[object Symbol]")return!1;var o=42;e[n]=o;for(n in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var i=Object.getOwnPropertySymbols(e);if(i.length!==1||i[0]!==n||!Object.prototype.propertyIsEnumerable.call(e,n))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var a=Object.getOwnPropertyDescriptor(e,n);if(a.value!==o||a.enumerable!==!0)return!1}return!0},hs=typeof Symbol!="undefined"&&Symbol,gp=ps,ms=function(){return typeof hs!="function"||typeof Symbol!="function"||typeof hs("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:gp()},yp=fo,vs=yp.call(Function.call,Object.prototype.hasOwnProperty),R,Yt=SyntaxError,gs=Function,xt=TypeError,po=function(t){try{return gs('"use strict"; return ('+t+").constructor;")()}catch{}},ut=Object.getOwnPropertyDescriptor;if(ut)try{ut({},"")}catch{ut=null}var ho=function(){throw new xt},bp=ut?function(){try{return arguments.callee,ho}catch{try{return ut(arguments,"callee").get}catch{return ho}}}():ho,$t=ms(),Ke=Object.getPrototypeOf||function(t){return t.__proto__},Pt={},Sp=typeof Uint8Array=="undefined"?R:Ke(Uint8Array),Dt={"%AggregateError%":typeof AggregateError=="undefined"?R:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer=="undefined"?R:ArrayBuffer,"%ArrayIteratorPrototype%":$t?Ke([][Symbol.iterator]()):R,"%AsyncFromSyncIteratorPrototype%":R,"%AsyncFunction%":Pt,"%AsyncGenerator%":Pt,"%AsyncGeneratorFunction%":Pt,"%AsyncIteratorPrototype%":Pt,"%Atomics%":typeof Atomics=="undefined"?R:Atomics,"%BigInt%":typeof BigInt=="undefined"?R:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView=="undefined"?R:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array=="undefined"?R:Float32Array,"%Float64Array%":typeof Float64Array=="undefined"?R:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry=="undefined"?R:FinalizationRegistry,"%Function%":gs,"%GeneratorFunction%":Pt,"%Int8Array%":typeof Int8Array=="undefined"?R:Int8Array,"%Int16Array%":typeof Int16Array=="undefined"?R:Int16Array,"%Int32Array%":typeof Int32Array=="undefined"?R:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":$t?Ke(Ke([][Symbol.iterator]())):R,"%JSON%":typeof JSON=="object"?JSON:R,"%Map%":typeof Map=="undefined"?R:Map,"%MapIteratorPrototype%":typeof Map=="undefined"||!$t?R:Ke(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise=="undefined"?R:Promise,"%Proxy%":typeof Proxy=="undefined"?R:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect=="undefined"?R:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set=="undefined"?R:Set,"%SetIteratorPrototype%":typeof Set=="undefined"||!$t?R:Ke(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer=="undefined"?R:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":$t?Ke(""[Symbol.iterator]()):R,"%Symbol%":$t?Symbol:R,"%SyntaxError%":Yt,"%ThrowTypeError%":bp,"%TypedArray%":Sp,"%TypeError%":xt,"%Uint8Array%":typeof Uint8Array=="undefined"?R:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray=="undefined"?R:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array=="undefined"?R:Uint16Array,"%Uint32Array%":typeof Uint32Array=="undefined"?R:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap=="undefined"?R:WeakMap,"%WeakRef%":typeof WeakRef=="undefined"?R:WeakRef,"%WeakSet%":typeof WeakSet=="undefined"?R:WeakSet},_p=function t(e){var n;if(e==="%AsyncFunction%")n=po("async function () {}");else if(e==="%GeneratorFunction%")n=po("function* () {}");else if(e==="%AsyncGeneratorFunction%")n=po("async function* () {}");else if(e==="%AsyncGenerator%"){var r=t("%AsyncGeneratorFunction%");r&&(n=r.prototype)}else if(e==="%AsyncIteratorPrototype%"){var o=t("%AsyncGenerator%");o&&(n=Ke(o.prototype))}return Dt[e]=n,n},ys={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},kn=fo,In=vs,Ep=kn.call(Function.call,Array.prototype.concat),Cp=kn.call(Function.apply,Array.prototype.splice),bs=kn.call(Function.call,String.prototype.replace),Rn=kn.call(Function.call,String.prototype.slice),Ap=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,wp=/\\(\\)?/g,Op=function(e){var n=Rn(e,0,1),r=Rn(e,-1);if(n==="%"&&r!=="%")throw new Yt("invalid intrinsic syntax, expected closing `%`");if(r==="%"&&n!=="%")throw new Yt("invalid intrinsic syntax, expected opening `%`");var o=[];return bs(e,Ap,function(i,a,s,u){o[o.length]=s?bs(u,wp,"$1"):a||i}),o},xp=function(e,n){var r=e,o;if(In(ys,r)&&(o=ys[r],r="%"+o[0]+"%"),In(Dt,r)){var i=Dt[r];if(i===Pt&&(i=_p(r)),typeof i=="undefined"&&!n)throw new xt("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:o,name:r,value:i}}throw new Yt("intrinsic "+e+" does not exist!")},he=function(e,n){if(typeof e!="string"||e.length===0)throw new xt("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof n!="boolean")throw new xt('"allowMissing" argument must be a boolean');var r=Op(e),o=r.length>0?r[0]:"",i=xp("%"+o+"%",n),a=i.name,s=i.value,u=!1,c=i.alias;c&&(o=c[0],Cp(r,Ep([0,1],c)));for(var l=1,f=!0;l<r.length;l+=1){var d=r[l],p=Rn(d,0,1),m=Rn(d,-1);if((p==='"'||p==="'"||p==="`"||m==='"'||m==="'"||m==="`")&&p!==m)throw new Yt("property names with quotes must have matching quotes");if((d==="constructor"||!f)&&(u=!0),o+="."+d,a="%"+o+"%",In(Dt,a))s=Dt[a];else if(s!=null){if(!(d in s)){if(!n)throw new xt("base intrinsic for "+e+" exists, but the property is not available.");return}if(ut&&l+1>=r.length){var b=ut(s,d);f=!!b,f&&"get"in b&&!("originalValue"in b.get)?s=b.get:s=s[d]}else f=In(s,d),s=s[d];f&&!u&&(Dt[a]=s)}}return s};(function(t){var e=fo,n=he,r=n("%Function.prototype.apply%"),o=n("%Function.prototype.call%"),i=n("%Reflect.apply%",!0)||e.call(o,r),a=n("%Object.getOwnPropertyDescriptor%",!0),s=n("%Object.defineProperty%",!0),u=n("%Math.max%");if(s)try{s({},"a",{value:1})}catch{s=null}t.exports=function(f){var d=i(e,o,arguments);if(a&&s){var p=a(d,"length");p.configurable&&s(d,"length",{value:1+u(0,f.length-(arguments.length-1))})}return d};var c=function(){return i(e,r,arguments)};s?s(t.exports,"apply",{value:c}):t.exports.apply=c})(Ot);var Ss=he,_s=Ot.exports,$p=_s(Ss("String.prototype.indexOf")),lt=function(e,n){var r=Ss(e,!!n);return typeof r=="function"&&$p(e,".prototype.")>-1?_s(r):r},Pp=he,Dp=Pp("%TypeError%"),Tp=function(e,n){if(e==null)throw new Dp(n||"Cannot call method on "+e);return e},Nn=Tp,Mp=he,Es=Mp("%Array%"),Fp=!Es.isArray&&lt("Object.prototype.toString"),kp=Es.isArray||function(e){return Fp(e)==="[object Array]"},Cs=he,Ip=lt,Rp=Cs("%TypeError%"),Np=kp,Lp=Cs("%Reflect.apply%",!0)||Ip("%Function.prototype.apply%"),Bp=function(e,n){var r=arguments.length>2?arguments[2]:[];if(!Np(r))throw new Rp("Assertion failed: optional `argumentsList`, if provided, must be a List");return Lp(e,n,r)},Vp={},Hp=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Vp}),Up=gn(Hp),mo=typeof Map=="function"&&Map.prototype,vo=Object.getOwnPropertyDescriptor&&mo?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,Ln=mo&&vo&&typeof vo.get=="function"?vo.get:null,zp=mo&&Map.prototype.forEach,go=typeof Set=="function"&&Set.prototype,yo=Object.getOwnPropertyDescriptor&&go?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,Bn=go&&yo&&typeof yo.get=="function"?yo.get:null,jp=go&&Set.prototype.forEach,Wp=typeof WeakMap=="function"&&WeakMap.prototype,Xt=Wp?WeakMap.prototype.has:null,Gp=typeof WeakSet=="function"&&WeakSet.prototype,Kt=Gp?WeakSet.prototype.has:null,qp=typeof WeakRef=="function"&&WeakRef.prototype,As=qp?WeakRef.prototype.deref:null,Yp=Boolean.prototype.valueOf,Xp=Object.prototype.toString,Kp=Function.prototype.toString,Jp=String.prototype.match,bo=String.prototype.slice,Je=String.prototype.replace,Zp=String.prototype.toUpperCase,ws=String.prototype.toLowerCase,Os=RegExp.prototype.test,xs=Array.prototype.concat,Ie=Array.prototype.join,Qp=Array.prototype.slice,$s=Math.floor,So=typeof BigInt=="function"?BigInt.prototype.valueOf:null,_o=Object.getOwnPropertySymbols,Eo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,Tt=typeof Symbol=="function"&&typeof Symbol.iterator=="object",ce=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===Tt?"object":"symbol")?Symbol.toStringTag:null,Ps=Object.prototype.propertyIsEnumerable,Ds=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(t){return t.__proto__}:null);function Ts(t,e){if(t===1/0||t===-1/0||t!==t||t&&t>-1e3&&t<1e3||Os.call(/e/,e))return e;var n=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof t=="number"){var r=t<0?-$s(-t):$s(t);if(r!==t){var o=String(r),i=bo.call(e,o.length+1);return Je.call(o,n,"$&_")+"."+Je.call(Je.call(i,/([0-9]{3})/g,"$&_"),/_$/,"")}}return Je.call(e,n,"$&_")}var Co=Up.custom,Ao=Co&&Fs(Co)?Co:null,eh=function t(e,n,r,o){var i=n||{};if(Ze(i,"quoteStyle")&&i.quoteStyle!=="single"&&i.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(Ze(i,"maxStringLength")&&(typeof i.maxStringLength=="number"?i.maxStringLength<0&&i.maxStringLength!==1/0:i.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var a=Ze(i,"customInspect")?i.customInspect:!0;if(typeof a!="boolean"&&a!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(Ze(i,"indent")&&i.indent!==null&&i.indent!=="	"&&!(parseInt(i.indent,10)===i.indent&&i.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(Ze(i,"numericSeparator")&&typeof i.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var s=i.numericSeparator;if(typeof e=="undefined")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return Is(e,i);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var u=String(e);return s?Ts(e,u):u}if(typeof e=="bigint"){var c=String(e)+"n";return s?Ts(e,c):c}var l=typeof i.depth=="undefined"?5:i.depth;if(typeof r=="undefined"&&(r=0),r>=l&&l>0&&typeof e=="object")return wo(e)?"[Array]":"[Object]";var f=bh(i,r);if(typeof o=="undefined")o=[];else if(ks(o,e)>=0)return"[Circular]";function d(K,pe,Be){if(pe&&(o=Qp.call(o),o.push(pe)),Be){var me={depth:i.depth};return Ze(i,"quoteStyle")&&(me.quoteStyle=i.quoteStyle),t(K,me,r+1,o)}return t(K,i,r+1,o)}if(typeof e=="function"){var p=ch(e),m=Vn(e,d);return"[Function"+(p?": "+p:" (anonymous)")+"]"+(m.length>0?" { "+Ie.call(m,", ")+" }":"")}if(Fs(e)){var b=Tt?Je.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):Eo.call(e);return typeof e=="object"&&!Tt?Jt(b):b}if(vh(e)){for(var v="<"+ws.call(String(e.nodeName)),S=e.attributes||[],C=0;C<S.length;C++)v+=" "+S[C].name+"="+Ms(th(S[C].value),"double",i);return v+=">",e.childNodes&&e.childNodes.length&&(v+="..."),v+="</"+ws.call(String(e.nodeName))+">",v}if(wo(e)){if(e.length===0)return"[]";var P=Vn(e,d);return f&&!yh(P)?"["+xo(P,f)+"]":"[ "+Ie.call(P,", ")+" ]"}if(oh(e)){var k=Vn(e,d);return"cause"in e&&!Ps.call(e,"cause")?"{ ["+String(e)+"] "+Ie.call(xs.call("[cause]: "+d(e.cause),k),", ")+" }":k.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+Ie.call(k,", ")+" }"}if(typeof e=="object"&&a){if(Ao&&typeof e[Ao]=="function")return e[Ao]();if(a!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(fh(e)){var x=[];return zp.call(e,function(K,pe){x.push(d(pe,e,!0)+" => "+d(K,e))}),Rs("Map",Ln.call(e),x,f)}if(hh(e)){var F=[];return jp.call(e,function(K){F.push(d(K,e))}),Rs("Set",Bn.call(e),F,f)}if(dh(e))return Oo("WeakMap");if(mh(e))return Oo("WeakSet");if(ph(e))return Oo("WeakRef");if(ah(e))return Jt(d(Number(e)));if(uh(e))return Jt(d(So.call(e)));if(sh(e))return Jt(Yp.call(e));if(ih(e))return Jt(d(String(e)));if(!nh(e)&&!rh(e)){var $=Vn(e,d),J=Ds?Ds(e)===Object.prototype:e instanceof Object||e.constructor===Object,z=e instanceof Object?"":"null prototype",de=!J&&ce&&Object(e)===e&&ce in e?bo.call(Qe(e),8,-1):z?"Object":"",Y=J||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",q=Y+(de||z?"["+Ie.call(xs.call([],de||[],z||[]),": ")+"] ":"");return $.length===0?q+"{}":f?q+"{"+xo($,f)+"}":q+"{ "+Ie.call($,", ")+" }"}return String(e)};function Ms(t,e,n){var r=(n.quoteStyle||e)==="double"?'"':"'";return r+t+r}function th(t){return Je.call(String(t),/"/g,"&quot;")}function wo(t){return Qe(t)==="[object Array]"&&(!ce||!(typeof t=="object"&&ce in t))}function nh(t){return Qe(t)==="[object Date]"&&(!ce||!(typeof t=="object"&&ce in t))}function rh(t){return Qe(t)==="[object RegExp]"&&(!ce||!(typeof t=="object"&&ce in t))}function oh(t){return Qe(t)==="[object Error]"&&(!ce||!(typeof t=="object"&&ce in t))}function ih(t){return Qe(t)==="[object String]"&&(!ce||!(typeof t=="object"&&ce in t))}function ah(t){return Qe(t)==="[object Number]"&&(!ce||!(typeof t=="object"&&ce in t))}function sh(t){return Qe(t)==="[object Boolean]"&&(!ce||!(typeof t=="object"&&ce in t))}function Fs(t){if(Tt)return t&&typeof t=="object"&&t instanceof Symbol;if(typeof t=="symbol")return!0;if(!t||typeof t!="object"||!Eo)return!1;try{return Eo.call(t),!0}catch{}return!1}function uh(t){if(!t||typeof t!="object"||!So)return!1;try{return So.call(t),!0}catch{}return!1}var lh=Object.prototype.hasOwnProperty||function(t){return t in this};function Ze(t,e){return lh.call(t,e)}function Qe(t){return Xp.call(t)}function ch(t){if(t.name)return t.name;var e=Jp.call(Kp.call(t),/^function\s*([\w$]+)/);return e?e[1]:null}function ks(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1}function fh(t){if(!Ln||!t||typeof t!="object")return!1;try{Ln.call(t);try{Bn.call(t)}catch{return!0}return t instanceof Map}catch{}return!1}function dh(t){if(!Xt||!t||typeof t!="object")return!1;try{Xt.call(t,Xt);try{Kt.call(t,Kt)}catch{return!0}return t instanceof WeakMap}catch{}return!1}function ph(t){if(!As||!t||typeof t!="object")return!1;try{return As.call(t),!0}catch{}return!1}function hh(t){if(!Bn||!t||typeof t!="object")return!1;try{Bn.call(t);try{Ln.call(t)}catch{return!0}return t instanceof Set}catch{}return!1}function mh(t){if(!Kt||!t||typeof t!="object")return!1;try{Kt.call(t,Kt);try{Xt.call(t,Xt)}catch{return!0}return t instanceof WeakSet}catch{}return!1}function vh(t){return!t||typeof t!="object"?!1:typeof HTMLElement!="undefined"&&t instanceof HTMLElement?!0:typeof t.nodeName=="string"&&typeof t.getAttribute=="function"}function Is(t,e){if(t.length>e.maxStringLength){var n=t.length-e.maxStringLength,r="... "+n+" more character"+(n>1?"s":"");return Is(bo.call(t,0,e.maxStringLength),e)+r}var o=Je.call(Je.call(t,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,gh);return Ms(o,"single",e)}function gh(t){var e=t.charCodeAt(0),n={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return n?"\\"+n:"\\x"+(e<16?"0":"")+Zp.call(e.toString(16))}function Jt(t){return"Object("+t+")"}function Oo(t){return t+" { ? }"}function Rs(t,e,n,r){var o=r?xo(n,r):Ie.call(n,", ");return t+" ("+e+") {"+o+"}"}function yh(t){for(var e=0;e<t.length;e++)if(ks(t[e],`
`)>=0)return!1;return!0}function bh(t,e){var n;if(t.indent==="	")n="	";else if(typeof t.indent=="number"&&t.indent>0)n=Ie.call(Array(t.indent+1)," ");else return null;return{base:n,prev:Ie.call(Array(e+1),n)}}function xo(t,e){if(t.length===0)return"";var n=`
`+e.prev+e.base;return n+Ie.call(t,","+n)+`
`+e.prev}function Vn(t,e){var n=wo(t),r=[];if(n){r.length=t.length;for(var o=0;o<t.length;o++)r[o]=Ze(t,o)?e(t[o],t):""}var i=typeof _o=="function"?_o(t):[],a;if(Tt){a={};for(var s=0;s<i.length;s++)a["$"+i[s]]=i[s]}for(var u in t)!Ze(t,u)||n&&String(Number(u))===u&&u<t.length||Tt&&a["$"+u]instanceof Symbol||(Os.call(/[^\w$]/,u)?r.push(e(u,t)+": "+e(t[u],t)):r.push(u+": "+e(t[u],t)));if(typeof _o=="function")for(var c=0;c<i.length;c++)Ps.call(t,i[c])&&r.push("["+e(i[c])+"]: "+e(t[i[c]],t));return r}var Ns=function(e){return typeof e=="string"||typeof e=="symbol"},Sh=function(e){if(e===null)return"Null";if(typeof e=="undefined")return"Undefined";if(typeof e=="function"||typeof e=="object")return"Object";if(typeof e=="number")return"Number";if(typeof e=="boolean")return"Boolean";if(typeof e=="string")return"String"},_h=Sh,$o=function(e){return typeof e=="symbol"?"Symbol":typeof e=="bigint"?"BigInt":_h(e)},Eh=he,Ls=Eh("%TypeError%"),Ch=eh,Ah=Ns,wh=$o,Bs=function(e,n){if(wh(e)!=="Object")throw new Ls("Assertion failed: Type(O) is not Object");if(!Ah(n))throw new Ls("Assertion failed: IsPropertyKey(P) is not true, got "+Ch(n));return e[n]},Oh=he,Vs=Oh("%TypeError%"),xh=Ns,$h=$o,Ph=function(e,n){if($h(e)!=="Object")throw new Vs("Assertion failed: `O` must be an Object");if(!xh(n))throw new Vs("Assertion failed: `P` must be a Property Key");return n in e},Hs=Function.prototype.toString,Mt=typeof Reflect=="object"&&Reflect!==null&&Reflect.apply,Po,Hn;if(typeof Mt=="function"&&typeof Object.defineProperty=="function")try{Po=Object.defineProperty({},"length",{get:function(){throw Hn}}),Hn={},Mt(function(){throw 42},null,Po)}catch(t){t!==Hn&&(Mt=null)}else Mt=null;var Dh=/^\s*class\b/,Do=function(e){try{var n=Hs.call(e);return Dh.test(n)}catch{return!1}},Th=function(e){try{return Do(e)?!1:(Hs.call(e),!0)}catch{return!1}},Mh=Object.prototype.toString,Fh="[object Function]",kh="[object GeneratorFunction]",Ih=typeof Symbol=="function"&&!!Symbol.toStringTag,Us=typeof document=="object"&&typeof document.all=="undefined"&&document.all!==void 0?document.all:{},To=Mt?function(e){if(e===Us)return!0;if(!e||typeof e!="function"&&typeof e!="object")return!1;if(typeof e=="function"&&!e.prototype)return!0;try{Mt(e,null,Po)}catch(n){if(n!==Hn)return!1}return!Do(e)}:function(e){if(e===Us)return!0;if(!e||typeof e!="function"&&typeof e!="object")return!1;if(typeof e=="function"&&!e.prototype)return!0;if(Ih)return Th(e);if(Do(e))return!1;var n=Mh.call(e);return n===Fh||n===kh},Rh=To,zs=he,Nh=zs("%Math%"),Lh=zs("%Number%"),Bh=Lh.MAX_SAFE_INTEGER||Nh.pow(2,53)-1,Vh=he,Hh=Vh("%Math.abs%"),Uh=function(e){return Hh(e)},zh=Math.floor,jh=function(e){return zh(e)},js=function(e){return e===null||typeof e!="function"&&typeof e!="object"},Wh=Object.prototype.toString,Ws=js,Gh=To,Gs={"[[DefaultValue]]":function(t){var e;if(arguments.length>1?e=arguments[1]:e=Wh.call(t)==="[object Date]"?String:Number,e===String||e===Number){var n=e===String?["toString","valueOf"]:["valueOf","toString"],r,o;for(o=0;o<n.length;++o)if(Gh(t[n[o]])&&(r=t[n[o]](),Ws(r)))return r;throw new TypeError("No default value")}throw new TypeError("invalid [[DefaultValue]] hint supplied")}},qh=function(e){return Ws(e)?e:arguments.length>1?Gs["[[DefaultValue]]"](e,arguments[1]):Gs["[[DefaultValue]]"](e)},Yh=qh,Xh=Yh,Kh=function(e){var n=Xh(e,Number);if(typeof n!="string")return+n;var r=n.replace(/^[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+|[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+$/g,"");return/^0[ob]|^[+-]0x/.test(r)?NaN:+r},Jh=Number.isNaN||function(e){return e!==e},Zh=Number.isNaN||function(t){return t!==t},Qh=Number.isFinite||function(t){return typeof t=="number"&&!Zh(t)&&t!==1/0&&t!==-1/0},em=function(e){return e>=0?1:-1},tm=Uh,nm=jh,rm=Kh,om=Jh,im=Qh,am=em,sm=function(e){var n=rm(e);return om(n)?0:n===0||!im(n)?n:am(n)*nm(tm(n))},um=he,lm=um("RegExp.prototype.test"),cm=Ot.exports,fm=function(e){return cm(lm,e)},dm=function(e){return e===null||typeof e!="function"&&typeof e!="object"},pm=ps,qs=function(){return pm()&&!!Symbol.toStringTag},hm=Date.prototype.getDay,mm=function(e){try{return hm.call(e),!0}catch{return!1}},vm=Object.prototype.toString,gm="[object Date]",ym=qs(),bm=function(e){return typeof e!="object"||e===null?!1:ym?mm(e):vm.call(e)===gm},Mo={exports:{}},Sm=Object.prototype.toString,_m=ms();if(_m){var Em=Symbol.prototype.toString,Cm=/^Symbol\(.*\)$/,Am=function(e){return typeof e.valueOf()!="symbol"?!1:Cm.test(Em.call(e))};Mo.exports=function(e){if(typeof e=="symbol")return!0;if(Sm.call(e)!=="[object Symbol]")return!1;try{return Am(e)}catch{return!1}}}else Mo.exports=function(e){return!1};var wm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol",Fo=js,Ys=To,Om=bm,Xs=Mo.exports,xm=function(e,n){if(typeof e=="undefined"||e===null)throw new TypeError("Cannot call method on "+e);if(typeof n!="string"||n!=="number"&&n!=="string")throw new TypeError('hint must be "string" or "number"');var r=n==="string"?["toString","valueOf"]:["valueOf","toString"],o,i,a;for(a=0;a<r.length;++a)if(o=e[r[a]],Ys(o)&&(i=o.call(e),Fo(i)))return i;throw new TypeError("No default value")},$m=function(e,n){var r=e[n];if(r!==null&&typeof r!="undefined"){if(!Ys(r))throw new TypeError(r+" returned for property "+n+" of object "+e+" is not a function");return r}},Pm=function(e){if(Fo(e))return e;var n="default";arguments.length>1&&(arguments[1]===String?n="string":arguments[1]===Number&&(n="number"));var r;if(wm&&(Symbol.toPrimitive?r=$m(e,Symbol.toPrimitive):Xs(e)&&(r=Symbol.prototype.valueOf)),typeof r!="undefined"){var o=r.call(e,n);if(Fo(o))return o;throw new TypeError("unable to convert exotic object to primitive")}return n==="default"&&(Om(e)||Xs(e))&&(n="string"),xm(e,n==="default"?"number":n)},Ks=Pm,Dm=function(e){return arguments.length>1?Ks(e,arguments[1]):Ks(e)},Un=he,Js=Un("%TypeError%"),Zs=Un("%Number%"),Tm=Un("%RegExp%"),Qs=Un("%parseInt%"),eu=lt,zn=fm,Mm=dm,tu=eu("String.prototype.slice"),Fm=zn(/^0b[01]+$/i),km=zn(/^0o[0-7]+$/i),Im=zn(/^[-+]0x[0-9a-f]+$/i),Rm=["\x85","\u200B","\uFFFE"].join(""),Nm=new Tm("["+Rm+"]","g"),Lm=zn(Nm),nu=[`	
\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003`,"\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028","\u2029\uFEFF"].join(""),Bm=new RegExp("(^["+nu+"]+)|(["+nu+"]+$)","g"),Vm=eu("String.prototype.replace"),Hm=function(t){return Vm(t,Bm,"")},Um=Dm,zm=function t(e){var n=Mm(e)?e:Um(e,Zs);if(typeof n=="symbol")throw new Js("Cannot convert a Symbol value to a number");if(typeof n=="bigint")throw new Js("Conversion from 'BigInt' to 'number' is not allowed.");if(typeof n=="string"){if(Fm(n))return t(Qs(tu(n,2),2));if(km(n))return t(Qs(tu(n,2),8));if(Lm(n)||Im(n))return NaN;var r=Hm(n);if(r!==n)return t(r)}return Zs(n)},jm=sm,Wm=zm,Gm=function(e){var n=Wm(e);return n!==0&&(n=jm(n)),n===0?0:n},ru=Bh,qm=Gm,Ym=function(e){var n=qm(e);return n<=0?0:n>ru?ru:n},Xm=he,Km=Xm("%TypeError%"),Jm=Bs,Zm=Ym,Qm=$o,ev=function(e){if(Qm(e)!=="Object")throw new Km("Assertion failed: `obj` must be an Object");return Zm(Jm(e,"length"))},tv=he,nv=tv("%Object%"),rv=Nn,ov=function(e){return rv(e),nv(e)},ou=he,iv=ou("%String%"),av=ou("%TypeError%"),iu=function(e){if(typeof e=="symbol")throw new av("Cannot convert a Symbol value to a string");return iv(e)},sv=String.prototype.valueOf,uv=function(e){try{return sv.call(e),!0}catch{return!1}},lv=Object.prototype.toString,cv="[object String]",fv=qs(),dv=function(e){return typeof e=="string"?!0:typeof e!="object"?!1:fv?uv(e):lv.call(e)===cv},pv=he,hv=lt,mv=pv("%TypeError%"),vv=Bp,gv=Bs,yv=Ph,bv=Rh,Sv=ev,_v=ov,Ev=iu,Cv=dv,Av=hv("String.prototype.split"),au=Object("a"),wv=au[0]!=="a"||!(0 in au),su=function(e){var n=_v(this),r=wv&&Cv(this)?Av(this,""):n,o=Sv(r);if(!bv(e))throw new mv("Array.prototype.forEach callback must be a function");var i;arguments.length>1&&(i=arguments[1]);for(var a=0;a<o;){var s=Ev(a),u=yv(r,s);if(u){var c=gv(r,s);vv(e,i,[c,a,r])}a+=1}},Ov=function(e){var n=!0,r=!0,o=!1;if(typeof e=="function"){try{e.call("f",function(i,a,s){typeof s!="object"&&(n=!1)}),e.call([null],function(){"use strict";r=typeof this=="string"},"x")}catch{o=!0}return!o&&n&&r}return!1},xv=Ov,$v=su,uu=function(){var e=Array.prototype.forEach;return xv(e)?e:$v},Pv=wt,Dv=uu,Tv=function(){var e=Dv();return Pv(Array.prototype,{forEach:e},{forEach:function(){return Array.prototype.forEach!==e}}),e},Mv=wt,Fv=Ot.exports,kv=lt,Iv=Nn,Rv=su,lu=uu,Nv=lu(),Lv=Tv,Bv=kv("Array.prototype.slice"),Vv=Fv.apply(Nv),cu=function(e,n){return Iv(e),Vv(e,Bv(arguments,1))};Mv(cu,{getPolyfill:lu,implementation:Rv,shim:Lv});var Hv=cu,Uv=Nn,fu=lt,zv=fu("Object.prototype.propertyIsEnumerable"),jv=fu("Array.prototype.push"),du=function(e){var n=Uv(e),r=[];for(var o in n)zv(n,o)&&jv(r,[o,n[o]]);return r},Wv=du,pu=function(){return typeof Object.entries=="function"?Object.entries:Wv},Gv=pu,qv=wt,Yv=function(){var e=Gv();return qv(Object,{entries:e},{entries:function(){return Object.entries!==e}}),e},Xv=wt,Kv=Ot.exports,Jv=du,hu=pu,Zv=Yv,mu=Kv(hu(),Object);Xv(mu,{getPolyfill:hu,implementation:Jv,shim:Zv});var Qv=mu,eg=Nn,tg=iu,ng=lt,vu=ng("String.prototype.replace"),rg=/^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,og=/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/,gu=function(){var e=tg(eg(this));return vu(vu(e,rg,""),og,"")},ig=gu,yu="\u200B",bu=function(){return String.prototype.trim&&yu.trim()===yu?String.prototype.trim:ig},ag=wt,sg=bu,ug=function(){var e=sg();return ag(String.prototype,{trim:e},{trim:function(){return String.prototype.trim!==e}}),e},lg=Ot.exports,cg=wt,fg=gu,Su=bu,dg=ug,_u=lg(Su());cg(_u,{getPolyfill:Su,implementation:fg,shim:dg});var pg=_u,jn=Hv,ko=Qv,Eu=vs,hg=pg,mg=function(e){},vg=String.prototype.replace,Cu=String.prototype.split,Wn="||||",Io=function(t){var e=t%100,n=e%10;return e!==11&&n===1?0:2<=n&&n<=4&&!(e>=12&&e<=14)?1:2},Au={pluralTypes:{arabic:function(t){if(t<3)return t;var e=t%100;return e>=3&&e<=10?3:e>=11?4:5},bosnian_serbian:Io,chinese:function(){return 0},croatian:Io,french:function(t){return t>=2?1:0},german:function(t){return t!==1?1:0},russian:Io,lithuanian:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&t%10<=9&&(t%100<11||t%100>19)?1:2},czech:function(t){return t===1?0:t>=2&&t<=4?1:2},polish:function(t){if(t===1)return 0;var e=t%10;return 2<=e&&e<=4&&(t%100<10||t%100>=20)?1:2},icelandic:function(t){return t%10!=1||t%100==11?1:0},slovenian:function(t){var e=t%100;return e===1?0:e===2?1:e===3||e===4?2:3}},pluralTypeToLanguages:{arabic:["ar"],bosnian_serbian:["bs-Latn-BA","bs-Cyrl-BA","srl-RS","sr-RS"],chinese:["id","id-ID","ja","ko","ko-KR","lo","ms","th","th-TH","zh"],croatian:["hr","hr-HR"],german:["fa","da","de","en","es","fi","el","he","hi-IN","hu","hu-HU","it","nl","no","pt","sv","tr"],french:["fr","tl","pt-br"],russian:["ru","ru-RU"],lithuanian:["lt"],czech:["cs","cs-CZ","sk"],polish:["pl"],icelandic:["is"],slovenian:["sl-SL"]}};function gg(t){var e={};return jn(ko(t),function(n){var r=n[0],o=n[1];jn(o,function(i){e[i]=r})}),e}function yg(t,e){var n=gg(t.pluralTypeToLanguages);return n[e]||n[Cu.call(e,/-/,1)[0]]||n.en}function bg(t,e,n){return t.pluralTypes[e](n)}function Sg(){var t={};return function(e,n){var r=t[n];return r&&!e.pluralTypes[r]&&(r=null,t[n]=r),r||(r=yg(e,n),r&&(t[n]=r)),r}}function wu(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function _g(t){var e=t&&t.prefix||"%{",n=t&&t.suffix||"}";if(e===Wn||n===Wn)throw new RangeError('"'+Wn+'" token is reserved for pluralization');return new RegExp(wu(e)+"(.*?)"+wu(n),"g")}var Eg=Sg(),Cg=/%\{(.*?)\}/g;function Ro(t,e,n,r,o){if(typeof t!="string")throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");if(e==null)return t;var i=t,a=r||Cg,s=typeof e=="number"?{smart_count:e}:e;if(s.smart_count!=null&&t){var u=o||Au,c=Cu.call(t,Wn),l=n||"en",f=Eg(u,l),d=bg(u,f,s.smart_count);i=hg(c[d]||c[0])}return i=vg.call(i,a,function(p,m){return!Eu(s,m)||s[m]==null?p:s[m]}),i}function We(t){var e=t||{};this.phrases={},this.extend(e.phrases||{}),this.currentLocale=e.locale||"en";var n=e.allowMissing?Ro:null;this.onMissingKey=typeof e.onMissingKey=="function"?e.onMissingKey:n,this.warn=e.warn||mg,this.tokenRegex=_g(e.interpolation),this.pluralRules=e.pluralRules||Au}We.prototype.locale=function(t){return t&&(this.currentLocale=t),this.currentLocale},We.prototype.extend=function(t,e){jn(ko(t||{}),function(n){var r=n[0],o=n[1],i=e?e+"."+r:r;typeof o=="object"?this.extend(o,i):this.phrases[i]=o},this)},We.prototype.unset=function(t,e){typeof t=="string"?delete this.phrases[t]:jn(ko(t||{}),function(n){var r=n[0],o=n[1],i=e?e+"."+r:r;typeof o=="object"?this.unset(o,i):delete this.phrases[i]},this)},We.prototype.clear=function(){this.phrases={}},We.prototype.replace=function(t){this.clear(),this.extend(t)},We.prototype.t=function(t,e){var n,r,o=e==null?{}:e;if(typeof this.phrases[t]=="string")n=this.phrases[t];else if(typeof o._=="string")n=o._;else if(this.onMissingKey){var i=this.onMissingKey;r=i(t,o,this.currentLocale,this.tokenRegex,this.pluralRules)}else this.warn('Missing translation for key: "'+t+'"'),r=t;return typeof n=="string"&&(r=Ro(n,o,this.currentLocale,this.tokenRegex,this.pluralRules)),r},We.prototype.has=function(t){return Eu(this.phrases,t)},We.transformPhrase=function(e,n,r){return Ro(e,n,r)};var Ag=We,wg={"Add a comment...":"\u0625\u0636\u0627\u0641\u0629 \u062A\u0639\u0644\u064A\u0642","Add a reply...":"\u0625\u0636\u0627\u0641\u0629 \u0631\u062F","Add tag...":"\u0625\u0636\u0627\u0641\u0629 \u0639\u0644\u0627\u0645\u0629",Cancel:"\u0625\u0644\u063A\u0627\u0621",Close:"\u0625\u063A\u0644\u0627\u0642",Edit:"Edit",Delete:"Delete",Ok:"\u062A\u0645"},Og={"Add a comment...":"Napsat koment\xE1\u0159...","Add a reply...":"Odpov\u011Bd\u011Bt...","Add tag...":"P\u0159idat \u0161t\xEDtek...",Cancel:"Zru\u0161it",Close:"Zav\u0159\xEDt",Edit:"Upravit",Delete:"Smazat",Ok:"Ok"},xg={"Add a comment...":"Kommentar schreiben...","Add a reply...":"Antwort schreiben...","Add tag...":"Tag...",Cancel:"Abbrechen",Close:"Schliessen",Edit:"Bearbeiten",Delete:"L\xF6schen",Ok:"Ok"},$g={"Add a comment...":"\u03A3\u03C7\u03BF\u03BB\u03AF\u03B1\u03C3\u03B5...","Add a reply...":"\u0391\u03C0\u03AC\u03BD\u03C4\u03B7\u03C3\u03B5...","Add tag...":"\u03A0\u03C1\u03CC\u03C3\u03B8\u03B5\u03C3\u03B5 tag...",Cancel:"\u0386\u03BA\u03C5\u03C1\u03BF",Close:"\u039A\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF",Edit:"\u0395\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1",Delete:"\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE",Ok:"Ok"},Pg={"Add a comment...":"Agregar un comentario...","Add a reply...":"Agregar una respuesta...","Add tag...":"Etiquetar...",Cancel:"Cancelar",Close:"Cerrar",Edit:"Editar",Delete:"Eliminar",Ok:"Ok"},Dg={"Add a comment...":"Lis\xE4\xE4 kommentti","Add a reply...":"Lis\xE4\xE4 vastaus","Add tag...":"Lis\xE4\xE4 tunniste",Cancel:"Peruuta",Close:"Sulje",Edit:"Muokkaa",Delete:"Poista",Ok:"Ok"},Tg={"Add a comment...":"Ajouter un commentaire...","Add a reply...":"Ajouter une r\xE9ponse...","Add tag...":"Ajouter une \xE9tiquette...",Cancel:"Annuler",Close:"Fermer",Edit:"\xC9diter",Delete:"Supprimer",Ok:"Ok"},Mg={"Add a comment...":"Engadir un comentario...","Add a reply...":"Engadir unha resposta...","Add tag...":"Etiquetar...",Cancel:"Cancelar",Close:"Pechar",Edit:"Edit",Delete:"Delete",Ok:"Ok"},Fg={"Add a comment...":"\u091F\u093F\u092A\u094D\u092A\u0923\u0940 \u091C\u094B\u0921\u093C\u0947\u0902","Add a reply...":"\u091C\u0935\u093E\u092C \u0926\u0947\u0902","Add tag...":"\u091F\u0948\u0917 \u0932\u0917\u093E\u090F\u0901",Cancel:"\u0930\u0926\u094D\u0926 \u0915\u0930\u0947\u0902",Close:"\u092C\u0902\u0926 \u0915\u0930\u0947\u0902",Edit:"\u0938\u0902\u092A\u093E\u0926\u093F\u0924 \u0915\u0930\u0947\u0902",Delete:"\u0939\u091F\u093E\u090F\u0901",Ok:"\u0920\u0940\u0915 \u0939\u0948"},kg={"Add a comment...":"Commenta...","Add a reply...":"Rispondi...","Add tag...":"Aggiungi tag...",Cancel:"Annulla",Close:"Chiudi",Edit:"Edit",Delete:"Delete",Ok:"Ok"},Ig={"Add a comment...":"\uB313\uAE00 \uCD94\uAC00","Add a reply...":"\uB2F5\uAE00 \uCD94\uAC00","Add tag...":"\uD0DC\uADF8 \uCD94\uAC00",Cancel:"\uCDE8\uC18C",Close:"\uB2EB\uAE30",Edit:"\uC218\uC815",Delete:"\uC0AD\uC81C",Ok:"\uD655\uC778"},Rg={"Add a comment...":"Commentaar toevoegen...","Add a reply...":"Antwoord toevoegen...","Add tag...":"Tag toevoegen...",Cancel:"Afbreken",Close:"Sluiten",Edit:"Bewerken",Delete:"Verwijderen",Ok:"Ok"},Ng={"Add a comment...":"Adicionar um coment\xE1rio...","Add a reply...":"Adicionar uma resposta...","Add tag...":"Etiquetar...",Cancel:"Cancelar",Close:"Fechar",Edit:"Editar",Delete:"Apagar",Ok:"Ok"},Lg={"Add a comment...":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439...","Add a reply...":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442...","Add tag...":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u044D\u0433...",Cancel:"\u041E\u0442\u043C\u0435\u043D\u0430",Close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",Edit:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",Delete:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",Ok:"\u041E\u043A"},Bg={"Add a comment...":"Skriv en kommentar...","Add a reply...":"Skriv ett svar...","Add tag...":"Tagg...",Cancel:"Cancel",Close:"St\xE4ng",Edit:"Edit",Delete:"Delete",Ok:"Ok"},Vg={"Add a comment...":"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E2D\u0E21\u0E40\u0E21\u0E19\u0E15\u0E4C...","Add a reply...":"\u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A...","Add tag...":"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E17\u0E47\u0E01...",Cancel:"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",Close:"\u0E1B\u0E34\u0E14",Edit:"\u0E41\u0E01\u0E49\u0E44\u0E02",Delete:"\u0E25\u0E1A",Ok:"\u0E15\u0E01\u0E25\u0E07"},Hg={"Add a comment...":"Yorum ekle...","Add a reply...":"Cevap ekle...","Add tag...":"Tag Ekle...",Cancel:"\u0130ptal",Close:"Kapat",Edit:"D\xFCzenle",Delete:"Sil",Ok:"Tamam"},Ug={"Add a comment...":"\u062A\u0628\u0635\u0631\u06C1 \u06A9\u0631\u06CC\u06BA","Add a reply...":"\u062C\u0648\u0627\u0628 \u062F\u06CC\u06BA","Add tag...":"\u0679\u06CC\u06AF \u0644\u06AF\u0627\u0626\u06CC\u06BA",Cancel:"\u0645\u0646\u0633\u0648\u062E \u06A9\u0631\u06CC\u06BA",Close:"\u0628\u0646\u062F \u06A9\u0631\u06CC\u06BA",Edit:"\u062A\u0631\u0645\u06CC\u0645 \u06A9\u0631\u06CC\u06BA",Delete:"\u06C1\u0679\u0627\u0626\u06CC\u06BA",Ok:"\u0679\u06BE\u06CC\u06A9 \u06C1\u06D2"},Ou={};Object.defineProperty(Ou,"__esModule",{value:!0});var No=[["\u062B\u0627\u0646\u064A\u0629","\u062B\u0627\u0646\u064A\u062A\u064A\u0646","%s \u062B\u0648\u0627\u0646","%s \u062B\u0627\u0646\u064A\u0629"],["\u062F\u0642\u064A\u0642\u0629","\u062F\u0642\u064A\u0642\u062A\u064A\u0646","%s \u062F\u0642\u0627\u0626\u0642","%s \u062F\u0642\u064A\u0642\u0629"],["\u0633\u0627\u0639\u0629","\u0633\u0627\u0639\u062A\u064A\u0646","%s \u0633\u0627\u0639\u0627\u062A","%s \u0633\u0627\u0639\u0629"],["\u064A\u0648\u0645","\u064A\u0648\u0645\u064A\u0646","%s \u0623\u064A\u0627\u0645","%s \u064A\u0648\u0645\u0627\u064B"],["\u0623\u0633\u0628\u0648\u0639","\u0623\u0633\u0628\u0648\u0639\u064A\u0646","%s \u0623\u0633\u0627\u0628\u064A\u0639","%s \u0623\u0633\u0628\u0648\u0639\u0627\u064B"],["\u0634\u0647\u0631","\u0634\u0647\u0631\u064A\u0646","%s \u0623\u0634\u0647\u0631","%s \u0634\u0647\u0631\u0627\u064B"],["\u0639\u0627\u0645","\u0639\u0627\u0645\u064A\u0646","%s \u0623\u0639\u0648\u0627\u0645","%s \u0639\u0627\u0645\u0627\u064B"]];function zg(t,e){return e<3?No[t][e-1]:e>=3&&e<=10?No[t][2]:No[t][3]}function jg(t,e){if(e===0)return["\u0645\u0646\u0630 \u0644\u062D\u0638\u0627\u062A","\u0628\u0639\u062F \u0644\u062D\u0638\u0627\u062A"];var n=zg(Math.floor(e/2),t);return["\u0645\u0646\u0630 "+n,"\u0628\u0639\u062F "+n]}var Wg=Ou.default=jg,xu={};Object.defineProperty(xu,"__esModule",{value:!0});function Gg(t,e){var n=0,r=e==1||e==3||e==5||e==7||e==9||e==11||e==13;return r&&t>=5&&(n=1),[[["pr\xE1v\u011B te\u010F","pr\xE1v\u011B te\u010F"]],[["p\u0159ed %s vte\u0159inami","za %s vte\u0159iny"],["p\u0159ed %s vte\u0159inami","za %s vte\u0159in"]],[["p\u0159ed minutou","za minutu"]],[["p\u0159ed %s minutami","za %s minuty"],["p\u0159ed %s minutami","za %s minut"]],[["p\u0159ed hodinou","za hodinu"]],[["p\u0159ed %s hodinami","za %s hodiny"],["p\u0159ed %s hodinami","za %s hodin"]],[["v\u010Dera","z\xEDtra"]],[["p\u0159ed %s dny","za %s dny"],["p\u0159ed %s dny","za %s dn\u016F"]],[["minul\xFD t\xFDden","p\u0159\xED\u0161t\xED t\xFDden"]],[["p\u0159ed %s t\xFDdny","za %s t\xFDdny"],["p\u0159ed %s t\xFDdny","za %s t\xFDdn\u016F"]],[["minul\xFD m\u011Bs\xEDc","p\u0159\xEDst\xED m\u011Bs\xEDc"]],[["p\u0159ed %s m\u011Bs\xEDci","za %s m\u011Bs\xEDce"],["p\u0159ed %s m\u011Bs\xEDci","za %s m\u011Bs\xEDc\u016F"]],[["p\u0159ed rokem","p\u0159\xEDst\xED rok"]],[["p\u0159ed %s lety","za %s roky"],["p\u0159ed %s lety","za %s let"]]][e][n]}var qg=xu.default=Gg,$u={};Object.defineProperty($u,"__esModule",{value:!0});function Yg(t,e){return[["gerade eben","vor einer Weile"],["vor %s Sekunden","in %s Sekunden"],["vor 1 Minute","in 1 Minute"],["vor %s Minuten","in %s Minuten"],["vor 1 Stunde","in 1 Stunde"],["vor %s Stunden","in %s Stunden"],["vor 1 Tag","in 1 Tag"],["vor %s Tagen","in %s Tagen"],["vor 1 Woche","in 1 Woche"],["vor %s Wochen","in %s Wochen"],["vor 1 Monat","in 1 Monat"],["vor %s Monaten","in %s Monaten"],["vor 1 Jahr","in 1 Jahr"],["vor %s Jahren","in %s Jahren"]][e]}var Xg=$u.default=Yg,Pu={};Object.defineProperty(Pu,"__esModule",{value:!0});function Kg(t,e){return[["\u03BC\u03CC\u03BB\u03B9\u03C2 \u03C4\u03CE\u03C1\u03B1","\u03C3\u03B5 \u03BB\u03AF\u03B3\u03BF"],["%s \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1 \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 %s \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1"],["1 \u03BB\u03B5\u03C0\u03C4\u03CC \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 1 \u03BB\u03B5\u03C0\u03C4\u03CC"],["%s \u03BB\u03B5\u03C0\u03C4\u03AC \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 %s \u03BB\u03B5\u03C0\u03C4\u03AC"],["1 \u03CE\u03C1\u03B1 \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 1 \u03CE\u03C1\u03B1"],["%s \u03CE\u03C1\u03B5\u03C2 \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 %s \u03CE\u03C1\u03B5\u03C2"],["1 \u03BC\u03AD\u03C1\u03B1 \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 1 \u03BC\u03AD\u03C1\u03B1"],["%s \u03BC\u03AD\u03C1\u03B5\u03C2 \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 %s \u03BC\u03AD\u03C1\u03B5\u03C2"],["1 \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1 \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 1 \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1"],["%s \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B5\u03C2 \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 %s \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B5\u03C2"],["1 \u03BC\u03AE\u03BD\u03B1 \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 1 \u03BC\u03AE\u03BD\u03B1"],["%s \u03BC\u03AE\u03BD\u03B5\u03C2 \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 %s \u03BC\u03AE\u03BD\u03B5\u03C2"],["1 \u03C7\u03C1\u03CC\u03BD\u03BF \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 1 \u03C7\u03C1\u03CC\u03BD\u03BF"],["%s \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1 \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 %s \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1"]][e]}var Jg=Pu.default=Kg,Du={};Object.defineProperty(Du,"__esModule",{value:!0});function Zg(t,e){return[["justo ahora","en un rato"],["hace %s segundos","en %s segundos"],["hace 1 minuto","en 1 minuto"],["hace %s minutos","en %s minutos"],["hace 1 hora","en 1 hora"],["hace %s horas","en %s horas"],["hace 1 d\xEDa","en 1 d\xEDa"],["hace %s d\xEDas","en %s d\xEDas"],["hace 1 semana","en 1 semana"],["hace %s semanas","en %s semanas"],["hace 1 mes","en 1 mes"],["hace %s meses","en %s meses"],["hace 1 a\xF1o","en 1 a\xF1o"],["hace %s a\xF1os","en %s a\xF1os"]][e]}var Qg=Du.default=Zg,Tu={};Object.defineProperty(Tu,"__esModule",{value:!0});function ey(t,e){return[["juuri \xE4sken","juuri nyt"],["%s sekuntia sitten","%s sekunnin p\xE4\xE4st\xE4"],["minuutti sitten","minuutin p\xE4\xE4st\xE4"],["%s minuuttia sitten","%s minuutin p\xE4\xE4st\xE4"],["tunti sitten","tunnin p\xE4\xE4st\xE4"],["%s tuntia sitten","%s tunnin p\xE4\xE4st\xE4"],["p\xE4iv\xE4 sitten","p\xE4iv\xE4n p\xE4\xE4st\xE4"],["%s p\xE4iv\xE4\xE4 sitten","%s p\xE4iv\xE4n p\xE4\xE4st\xE4"],["viikko sitten","viikon p\xE4\xE4st\xE4"],["%s viikkoa sitten","%s viikon p\xE4\xE4st\xE4"],["kuukausi sitten","kuukauden p\xE4\xE4st\xE4"],["%s kuukautta sitten","%s kuukauden p\xE4\xE4st\xE4"],["vuosi sitten","vuoden p\xE4\xE4st\xE4"],["%s vuotta sitten","%s vuoden p\xE4\xE4st\xE4"]][e]}var ty=Tu.default=ey,Mu={};Object.defineProperty(Mu,"__esModule",{value:!0});function ny(t,e){return[["\xE0 l'instant","dans un instant"],["il y a %s secondes","dans %s secondes"],["il y a 1 minute","dans 1 minute"],["il y a %s minutes","dans %s minutes"],["il y a 1 heure","dans 1 heure"],["il y a %s heures","dans %s heures"],["il y a 1 jour","dans 1 jour"],["il y a %s jours","dans %s jours"],["il y a 1 semaine","dans 1 semaine"],["il y a %s semaines","dans %s semaines"],["il y a 1 mois","dans 1 mois"],["il y a %s mois","dans %s mois"],["il y a 1 an","dans 1 an"],["il y a %s ans","dans %s ans"]][e]}var ry=Mu.default=ny,Fu={};Object.defineProperty(Fu,"__esModule",{value:!0});function oy(t,e){return[["xusto agora","daqu\xED a un pouco"],["hai %s segundos","en %s segundos"],["hai 1 minuto","nun minuto"],["hai %s minutos","en %s minutos"],["hai 1 hora","nunha hora"],["hai %s horas","en %s horas"],["hai 1 d\xEDa","nun d\xEDa"],["hai %s d\xEDas","en %s d\xEDas"],["hai 1 semana","nunha semana"],["hai %s semanas","en %s semanas"],["hai 1 mes","nun mes"],["hai %s meses","en %s meses"],["hai 1 ano","nun ano"],["hai %s anos","en %s anos"]][e]}var iy=Fu.default=oy,ku={};Object.defineProperty(ku,"__esModule",{value:!0});function ay(t,e){return[["\u0905\u092D\u0940","\u0915\u0941\u091B \u0938\u092E\u092F"],["%s \u0938\u0947\u0915\u0902\u0921 \u092A\u0939\u0932\u0947","%s \u0938\u0947\u0915\u0902\u0921 \u092E\u0947\u0902"],["1 \u092E\u093F\u0928\u091F \u092A\u0939\u0932\u0947","1 \u092E\u093F\u0928\u091F \u092E\u0947\u0902"],["%s \u092E\u093F\u0928\u091F \u092A\u0939\u0932\u0947","%s \u092E\u093F\u0928\u091F \u092E\u0947\u0902"],["1 \u0918\u0902\u091F\u0947 \u092A\u0939\u0932\u0947","1 \u0918\u0902\u091F\u0947 \u092E\u0947\u0902"],["%s \u0918\u0902\u091F\u0947 \u092A\u0939\u0932\u0947","%s \u0918\u0902\u091F\u0947 \u092E\u0947\u0902"],["1 \u0926\u093F\u0928 \u092A\u0939\u0932\u0947","1 \u0926\u093F\u0928 \u092E\u0947\u0902"],["%s \u0926\u093F\u0928 \u092A\u0939\u0932\u0947","%s \u0926\u093F\u0928\u094B\u0902 \u092E\u0947\u0902"],["1 \u0938\u092A\u094D\u0924\u093E\u0939 \u092A\u0939\u0932\u0947","1 \u0938\u092A\u094D\u0924\u093E\u0939 \u092E\u0947\u0902"],["%s \u0939\u092B\u094D\u0924\u0947 \u092A\u0939\u0932\u0947","%s \u0939\u092B\u094D\u0924\u094B\u0902 \u092E\u0947\u0902"],["1 \u092E\u0939\u0940\u0928\u0947 \u092A\u0939\u0932\u0947","1 \u092E\u0939\u0940\u0928\u0947 \u092E\u0947\u0902"],["%s \u092E\u0939\u0940\u0928\u0947 \u092A\u0939\u0932\u0947","%s \u092E\u0939\u0940\u0928\u094B\u0902 \u092E\u0947\u0902"],["1 \u0938\u093E\u0932 \u092A\u0939\u0932\u0947","1 \u0938\u093E\u0932 \u092E\u0947\u0902"],["%s \u0938\u093E\u0932 \u092A\u0939\u0932\u0947","%s \u0938\u093E\u0932 \u092E\u0947\u0902"]][e]}var sy=ku.default=ay,Iu={};Object.defineProperty(Iu,"__esModule",{value:!0});function uy(t,e){return[["poco fa","fra poco"],["%s secondi fa","fra %s secondi"],["un minuto fa","fra un minuto"],["%s minuti fa","fra %s minuti"],["un'ora fa","fra un'ora"],["%s ore fa","fra %s ore"],["un giorno fa","fra un giorno"],["%s giorni fa","fra %s giorni"],["una settimana fa","fra una settimana"],["%s settimane fa","fra %s settimane"],["un mese fa","fra un mese"],["%s mesi fa","fra %s mesi"],["un anno fa","fra un anno"],["%s anni fa","fra %s anni"]][e]}var ly=Iu.default=uy,Ru={};Object.defineProperty(Ru,"__esModule",{value:!0});function cy(t,e){return[["\uBC29\uAE08","\uACE7"],["%s\uCD08 \uC804","%s\uCD08 \uD6C4"],["1\uBD84 \uC804","1\uBD84 \uD6C4"],["%s\uBD84 \uC804","%s\uBD84 \uD6C4"],["1\uC2DC\uAC04 \uC804","1\uC2DC\uAC04 \uD6C4"],["%s\uC2DC\uAC04 \uC804","%s\uC2DC\uAC04 \uD6C4"],["1\uC77C \uC804","1\uC77C \uD6C4"],["%s\uC77C \uC804","%s\uC77C \uD6C4"],["1\uC8FC\uC77C \uC804","1\uC8FC\uC77C \uD6C4"],["%s\uC8FC\uC77C \uC804","%s\uC8FC\uC77C \uD6C4"],["1\uAC1C\uC6D4 \uC804","1\uAC1C\uC6D4 \uD6C4"],["%s\uAC1C\uC6D4 \uC804","%s\uAC1C\uC6D4 \uD6C4"],["1\uB144 \uC804","1\uB144 \uD6C4"],["%s\uB144 \uC804","%s\uB144 \uD6C4"]][e]}var fy=Ru.default=cy,Nu={};Object.defineProperty(Nu,"__esModule",{value:!0});function dy(t,e){return[["recent","binnenkort"],["%s seconden geleden","binnen %s seconden"],["1 minuut geleden","binnen 1 minuut"],["%s minuten geleden","binnen %s minuten"],["1 uur geleden","binnen 1 uur"],["%s uur geleden","binnen %s uur"],["1 dag geleden","binnen 1 dag"],["%s dagen geleden","binnen %s dagen"],["1 week geleden","binnen 1 week"],["%s weken geleden","binnen %s weken"],["1 maand geleden","binnen 1 maand"],["%s maanden geleden","binnen %s maanden"],["1 jaar geleden","binnen 1 jaar"],["%s jaar geleden","binnen %s jaar"]][e]}var py=Nu.default=dy,Lu={};Object.defineProperty(Lu,"__esModule",{value:!0});function hy(t,e){return[["agora mesmo","agora"],["h\xE1 %s segundos","em %s segundos"],["h\xE1 um minuto","em um minuto"],["h\xE1 %s minutos","em %s minutos"],["h\xE1 uma hora","em uma hora"],["h\xE1 %s horas","em %s horas"],["h\xE1 um dia","em um dia"],["h\xE1 %s dias","em %s dias"],["h\xE1 uma semana","em uma semana"],["h\xE1 %s semanas","em %s semanas"],["h\xE1 um m\xEAs","em um m\xEAs"],["h\xE1 %s meses","em %s meses"],["h\xE1 um ano","em um ano"],["h\xE1 %s anos","em %s anos"]][e]}var my=Lu.default=hy,Bu={};Object.defineProperty(Bu,"__esModule",{value:!0});function ct(t,e,n,r,o){var i=o%10,a=r;return o===1?a=t:i===1&&o>20?a=e:i>1&&i<5&&(o>20||o<10)&&(a=n),a}var Vu=ct.bind(null,"\u0441\u0435\u043A\u0443\u043D\u0434\u0443","%s \u0441\u0435\u043A\u0443\u043D\u0434\u0443","%s \u0441\u0435\u043A\u0443\u043D\u0434\u044B","%s \u0441\u0435\u043A\u0443\u043D\u0434"),Hu=ct.bind(null,"\u043C\u0438\u043D\u0443\u0442\u0443","%s \u043C\u0438\u043D\u0443\u0442\u0443","%s \u043C\u0438\u043D\u0443\u0442\u044B","%s \u043C\u0438\u043D\u0443\u0442"),Uu=ct.bind(null,"\u0447\u0430\u0441","%s \u0447\u0430\u0441","%s \u0447\u0430\u0441\u0430","%s \u0447\u0430\u0441\u043E\u0432"),zu=ct.bind(null,"\u0434\u0435\u043D\u044C","%s \u0434\u0435\u043D\u044C","%s \u0434\u043D\u044F","%s \u0434\u043D\u0435\u0439"),ju=ct.bind(null,"\u043D\u0435\u0434\u0435\u043B\u044E","%s \u043D\u0435\u0434\u0435\u043B\u044E","%s \u043D\u0435\u0434\u0435\u043B\u0438","%s \u043D\u0435\u0434\u0435\u043B\u044C"),Wu=ct.bind(null,"\u043C\u0435\u0441\u044F\u0446","%s \u043C\u0435\u0441\u044F\u0446","%s \u043C\u0435\u0441\u044F\u0446\u0430","%s \u043C\u0435\u0441\u044F\u0446\u0435\u0432"),Gu=ct.bind(null,"\u0433\u043E\u0434","%s \u0433\u043E\u0434","%s \u0433\u043E\u0434\u0430","%s \u043B\u0435\u0442");function vy(t,e){switch(e){case 0:return["\u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E","\u0447\u0435\u0440\u0435\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434"];case 1:return[Vu(t)+" \u043D\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+Vu(t)];case 2:case 3:return[Hu(t)+" \u043D\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+Hu(t)];case 4:case 5:return[Uu(t)+" \u043D\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+Uu(t)];case 6:return["\u0432\u0447\u0435\u0440\u0430","\u0437\u0430\u0432\u0442\u0440\u0430"];case 7:return[zu(t)+" \u043D\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+zu(t)];case 8:case 9:return[ju(t)+" \u043D\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+ju(t)];case 10:case 11:return[Wu(t)+" \u043D\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+Wu(t)];case 12:case 13:return[Gu(t)+" \u043D\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+Gu(t)];default:return["",""]}}var gy=Bu.default=vy,qu={};Object.defineProperty(qu,"__esModule",{value:!0});function yy(t,e){return[["just nu","om en stund"],["%s sekunder sedan","om %s sekunder"],["1 minut sedan","om 1 minut"],["%s minuter sedan","om %s minuter"],["1 timme sedan","om 1 timme"],["%s timmar sedan","om %s timmar"],["1 dag sedan","om 1 dag"],["%s dagar sedan","om %s dagar"],["1 vecka sedan","om 1 vecka"],["%s veckor sedan","om %s veckor"],["1 m\xE5nad sedan","om 1 m\xE5nad"],["%s m\xE5nader sedan","om %s m\xE5nader"],["1 \xE5r sedan","om 1 \xE5r"],["%s \xE5r sedan","om %s \xE5r"]][e]}var by=qu.default=yy,Yu={};Object.defineProperty(Yu,"__esModule",{value:!0});function Sy(t,e){return[["\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2A\u0E31\u0E01\u0E04\u0E23\u0E39\u0E48\u0E19\u0E35\u0E49","\u0E2D\u0E35\u0E01\u0E2A\u0E31\u0E01\u0E04\u0E23\u0E39\u0E48"],["%s \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 %s \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35"],["1 \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 1 \u0E19\u0E32\u0E17\u0E35"],["%s \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 %s \u0E19\u0E32\u0E17\u0E35"],["1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07"],["%s \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 %s \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07"],["1 \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 1 \u0E27\u0E31\u0E19"],["%s \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 %s \u0E27\u0E31\u0E19"],["1 \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 1 \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C"],["%s \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 %s \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C"],["1 \u0E40\u0E14\u0E37\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 1 \u0E40\u0E14\u0E37\u0E2D\u0E19"],["%s \u0E40\u0E14\u0E37\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 %s \u0E40\u0E14\u0E37\u0E2D\u0E19"],["1 \u0E1B\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 1 \u0E1B\u0E35"],["%s \u0E1B\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 %s \u0E1B\u0E35"]][e]}var _y=Yu.default=Sy,Xu={};Object.defineProperty(Xu,"__esModule",{value:!0});function Ey(t,e){return[["az \xF6nce","\u015Fimdi"],["%s saniye \xF6nce","%s saniye i\xE7inde"],["1 dakika \xF6nce","1 dakika i\xE7inde"],["%s dakika \xF6nce","%s dakika i\xE7inde"],["1 saat \xF6nce","1 saat i\xE7inde"],["%s saat \xF6nce","%s saat i\xE7inde"],["1 g\xFCn \xF6nce","1 g\xFCn i\xE7inde"],["%s g\xFCn \xF6nce","%s g\xFCn i\xE7inde"],["1 hafta \xF6nce","1 hafta i\xE7inde"],["%s hafta \xF6nce","%s hafta i\xE7inde"],["1 ay \xF6nce","1 ay i\xE7inde"],["%s ay \xF6nce","%s ay i\xE7inde"],["1 y\u0131l \xF6nce","1 y\u0131l i\xE7inde"],["%s y\u0131l \xF6nce","%s y\u0131l i\xE7inde"]][e]}var Cy=Xu.default=Ey;const Zt={ar:wg,cs:Og,de:xg,el:$g,es:Pg,fi:Dg,fr:Tg,gl:Mg,hi:Fg,it:kg,ko:Ig,nl:Rg,pt:Ng,ru:Lg,sv:Bg,th:Vg,tr:Hg,ur:Ug},ft=new Ag({allowMissing:!0});ft.init=(t,e)=>{ft.clear(),t&&(ft.locale(t),ft.extend(Zt[t])),e&&ft.extend(e)},te("ar",Wg),te("cs",qg),te("de",Xg),te("el",Jg),te("es",Qg),te("fi",ty),te("fr",ry),te("gl",iy),te("hi",sy),te("it",ly),te("ko",fy),te("nl",py),te("pt",my),te("ru",gy),te("sv",by),te("th",_y),te("tr",Cy),ft.registerMessages=(t,e)=>{Zt[t]?Zt[t]=N(N({},Zt[t]),e):Zt[t]=e};var Ee=ft,Ay=t=>{const e=Te();return Yd(e,()=>t.onClickOutside()),g.createElement("ul",{ref:e,className:"r6o-comment-dropdown-menu"},g.createElement("li",{onClick:t.onEdit},Ee.t("Edit")),g.createElement("li",{onClick:t.onDelete},Ee.t("Delete")))},Ku={},Lo={},Bo={exports:{}};/*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/(function(t,e){(function(n,r){r(t,e)})(ot,function(n,r){var o=typeof Map=="function"?new Map:function(){var l=[],f=[];return{has:function(p){return l.indexOf(p)>-1},get:function(p){return f[l.indexOf(p)]},set:function(p,m){l.indexOf(p)===-1&&(l.push(p),f.push(m))},delete:function(p){var m=l.indexOf(p);m>-1&&(l.splice(m,1),f.splice(m,1))}}}(),i=function(f){return new Event(f,{bubbles:!0})};try{new Event("test")}catch{i=function(d){var p=document.createEvent("Event");return p.initEvent(d,!0,!1),p}}function a(l){if(!l||!l.nodeName||l.nodeName!=="TEXTAREA"||o.has(l))return;var f=null,d=null,p=null;function m(){var x=window.getComputedStyle(l,null);x.resize==="vertical"?l.style.resize="none":x.resize==="both"&&(l.style.resize="horizontal"),x.boxSizing==="content-box"?f=-(parseFloat(x.paddingTop)+parseFloat(x.paddingBottom)):f=parseFloat(x.borderTopWidth)+parseFloat(x.borderBottomWidth),isNaN(f)&&(f=0),C()}function b(x){{var F=l.style.width;l.style.width="0px",l.offsetWidth,l.style.width=F}l.style.overflowY=x}function v(x){for(var F=[];x&&x.parentNode&&x.parentNode instanceof Element;)x.parentNode.scrollTop&&F.push({node:x.parentNode,scrollTop:x.parentNode.scrollTop}),x=x.parentNode;return F}function S(){if(l.scrollHeight!==0){var x=v(l),F=document.documentElement&&document.documentElement.scrollTop;l.style.height="",l.style.height=l.scrollHeight+f+"px",d=l.clientWidth,x.forEach(function($){$.node.scrollTop=$.scrollTop}),F&&(document.documentElement.scrollTop=F)}}function C(){S();var x=Math.round(parseFloat(l.style.height)),F=window.getComputedStyle(l,null),$=F.boxSizing==="content-box"?Math.round(parseFloat(F.height)):l.offsetHeight;if($<x?F.overflowY==="hidden"&&(b("scroll"),S(),$=F.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(l,null).height)):l.offsetHeight):F.overflowY!=="hidden"&&(b("hidden"),S(),$=F.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(l,null).height)):l.offsetHeight),p!==$){p=$;var J=i("autosize:resized");try{l.dispatchEvent(J)}catch{}}}var P=function(){l.clientWidth!==d&&C()},k=function(x){window.removeEventListener("resize",P,!1),l.removeEventListener("input",C,!1),l.removeEventListener("keyup",C,!1),l.removeEventListener("autosize:destroy",k,!1),l.removeEventListener("autosize:update",C,!1),Object.keys(x).forEach(function(F){l.style[F]=x[F]}),o.delete(l)}.bind(l,{height:l.style.height,resize:l.style.resize,overflowY:l.style.overflowY,overflowX:l.style.overflowX,wordWrap:l.style.wordWrap});l.addEventListener("autosize:destroy",k,!1),"onpropertychange"in l&&"oninput"in l&&l.addEventListener("keyup",C,!1),window.addEventListener("resize",P,!1),l.addEventListener("input",C,!1),l.addEventListener("autosize:update",C,!1),l.style.overflowX="hidden",l.style.wordWrap="break-word",o.set(l,{destroy:k,update:C}),m()}function s(l){var f=o.get(l);f&&f.destroy()}function u(l){var f=o.get(l);f&&f.update()}var c=null;typeof window=="undefined"||typeof window.getComputedStyle!="function"?(c=function(f){return f},c.destroy=function(l){return l},c.update=function(l){return l}):(c=function(f,d){return f&&Array.prototype.forEach.call(f.length?f:[f],function(p){return a(p)}),f},c.destroy=function(l){return l&&Array.prototype.forEach.call(l.length?l:[l],s),l},c.update=function(l){return l&&Array.prototype.forEach.call(l.length?l:[l],u),l}),r.default=c,n.exports=r.default})})(Bo,Bo.exports);var wy=function(t,e,n){return n=window.getComputedStyle,(n?n(t):t.currentStyle)[e.replace(/-(\w)/gi,function(r,o){return o.toUpperCase()})]},Oy=wy,Vo=Oy;function xy(t){var e=Vo(t,"line-height"),n=parseFloat(e,10);if(e===n+""){var r=t.style.lineHeight;t.style.lineHeight=e+"em",e=Vo(t,"line-height"),n=parseFloat(e,10),r?t.style.lineHeight=r:delete t.style.lineHeight}if(e.indexOf("pt")!==-1?(n*=4,n/=3):e.indexOf("mm")!==-1?(n*=96,n/=25.4):e.indexOf("cm")!==-1?(n*=96,n/=2.54):e.indexOf("in")!==-1?n*=96:e.indexOf("pc")!==-1&&(n*=16),n=Math.round(n),e==="normal"){var o=t.nodeName,i=document.createElement(o);i.innerHTML="&nbsp;",o.toUpperCase()==="TEXTAREA"&&i.setAttribute("rows","1");var a=Vo(t,"font-size");i.style.fontSize=a,i.style.padding="0px",i.style.border="0px";var s=document.body;s.appendChild(i);var u=i.offsetHeight;n=u,s.removeChild(i)}return n}var $y=xy,Py=ot&&ot.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Ho=ot&&ot.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},Dy=ot&&ot.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]]);return n};Lo.__esModule=!0;var Gn=Ct,Qt=Wt.exports,qn=Bo.exports,Ty=$y,My=Ty,Ju="autosize:resized",Fy=function(t){Py(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.state={lineHeight:null},n.textarea=null,n.onResize=function(r){n.props.onResize&&n.props.onResize(r)},n.updateLineHeight=function(){n.textarea&&n.setState({lineHeight:My(n.textarea)})},n.onChange=function(r){var o=n.props.onChange;n.currentValue=r.currentTarget.value,o&&o(r)},n}return e.prototype.componentDidMount=function(){var n=this,r=this.props,o=r.maxRows,i=r.async;typeof o=="number"&&this.updateLineHeight(),typeof o=="number"||i?setTimeout(function(){return n.textarea&&qn(n.textarea)}):this.textarea&&qn(this.textarea),this.textarea&&this.textarea.addEventListener(Ju,this.onResize)},e.prototype.componentWillUnmount=function(){this.textarea&&(this.textarea.removeEventListener(Ju,this.onResize),qn.destroy(this.textarea))},e.prototype.render=function(){var n=this,r=this,o=r.props;o.onResize;var i=o.maxRows;o.onChange;var a=o.style;o.innerRef;var s=o.children,u=Dy(o,["onResize","maxRows","onChange","style","innerRef","children"]),c=r.state.lineHeight,l=i&&c?c*i:null;return Gn.createElement("textarea",Ho({},u,{onChange:this.onChange,style:l?Ho({},a,{maxHeight:l}):a,ref:function(f){n.textarea=f,typeof n.props.innerRef=="function"?n.props.innerRef(f):n.props.innerRef&&(n.props.innerRef.current=f)}}),s)},e.prototype.componentDidUpdate=function(){this.textarea&&qn.update(this.textarea)},e.defaultProps={rows:1,async:!1},e.propTypes={rows:Qt.number,maxRows:Qt.number,onResize:Qt.func,innerRef:Qt.any,async:Qt.bool},e}(Gn.Component);Lo.TextareaAutosize=Gn.forwardRef(function(t,e){return Gn.createElement(Fy,Ho({},t,{innerRef:e}))}),function(t){t.__esModule=!0;var e=Lo;t.default=e.TextareaAutosize}(Ku);var ky=yf(Ku);class Zu extends Q{constructor(e){super(e);h(this,"onKeyDown",e=>{e.which===13&&e.ctrlKey&&this.props.onSaveAndClose()});this.element=pn()}componentDidMount(){this.props.focus&&this.element.current&&this.element.current.focus({preventScroll:!0})}render(){return g.createElement(ky,{ref:this.element,className:"r6o-editable-text",value:this.props.content,placeholder:this.props.placeholder||Ee.t("Add a comment..."),disabled:!this.props.editable,onChange:this.props.onChange,onKeyDown:this.onKeyDown})}}function T(){return T=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},T.apply(this,arguments)}function Iy(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function Ry(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Ny=function(){function t(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(Ry(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Iy(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),fe="-ms-",Yn="-moz-",L="-webkit-",Qu="comm",Uo="rule",zo="decl",Ly="@import",el="@keyframes",By=Math.abs,Xn=String.fromCharCode,Vy=Object.assign;function Hy(t,e){return(((e<<2^ve(t,0))<<2^ve(t,1))<<2^ve(t,2))<<2^ve(t,3)}function tl(t){return t.trim()}function Uy(t,e){return(t=e.exec(t))?t[0]:t}function V(t,e,n){return t.replace(e,n)}function jo(t,e){return t.indexOf(e)}function ve(t,e){return t.charCodeAt(e)|0}function en(t,e,n){return t.slice(e,n)}function Re(t){return t.length}function Wo(t){return t.length}function Kn(t,e){return e.push(t),t}function zy(t,e){return t.map(e).join("")}var Jn=1,Ft=1,nl=0,ge=0,ee=0,kt="";function Zn(t,e,n,r,o,i,a){return{value:t,root:e,parent:n,type:r,props:o,children:i,line:Jn,column:Ft,length:a,return:""}}function tn(t,e){return Vy(Zn("",null,null,"",null,null,0),t,{length:-t.length},e)}function jy(){return ee}function Wy(){return ee=ge>0?ve(kt,--ge):0,Ft--,ee===10&&(Ft=1,Jn--),ee}function Ce(){return ee=ge<nl?ve(kt,ge++):0,Ft++,ee===10&&(Ft=1,Jn++),ee}function Ne(){return ve(kt,ge)}function Qn(){return ge}function nn(t,e){return en(kt,t,e)}function rn(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rl(t){return Jn=Ft=1,nl=Re(kt=t),ge=0,[]}function ol(t){return kt="",t}function er(t){return tl(nn(ge-1,Go(t===91?t+2:t===40?t+1:t)))}function Gy(t){for(;(ee=Ne())&&ee<33;)Ce();return rn(t)>2||rn(ee)>3?"":" "}function qy(t,e){for(;--e&&Ce()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return nn(t,Qn()+(e<6&&Ne()==32&&Ce()==32))}function Go(t){for(;Ce();)switch(ee){case t:return ge;case 34:case 39:t!==34&&t!==39&&Go(ee);break;case 40:t===41&&Go(t);break;case 92:Ce();break}return ge}function Yy(t,e){for(;Ce()&&t+ee!==47+10;)if(t+ee===42+42&&Ne()===47)break;return"/*"+nn(e,ge-1)+"*"+Xn(t===47?t:Ce())}function Xy(t){for(;!rn(Ne());)Ce();return nn(t,ge)}function Ky(t){return ol(tr("",null,null,null,[""],t=rl(t),0,[0],t))}function tr(t,e,n,r,o,i,a,s,u){for(var c=0,l=0,f=a,d=0,p=0,m=0,b=1,v=1,S=1,C=0,P="",k=o,x=i,F=r,$=P;v;)switch(m=C,C=Ce()){case 40:if(m!=108&&$.charCodeAt(f-1)==58){jo($+=V(er(C),"&","&\f"),"&\f")!=-1&&(S=-1);break}case 34:case 39:case 91:$+=er(C);break;case 9:case 10:case 13:case 32:$+=Gy(m);break;case 92:$+=qy(Qn()-1,7);continue;case 47:switch(Ne()){case 42:case 47:Kn(Jy(Yy(Ce(),Qn()),e,n),u);break;default:$+="/"}break;case 123*b:s[c++]=Re($)*S;case 125*b:case 59:case 0:switch(C){case 0:case 125:v=0;case 59+l:p>0&&Re($)-f&&Kn(p>32?al($+";",r,n,f-1):al(V($," ","")+";",r,n,f-2),u);break;case 59:$+=";";default:if(Kn(F=il($,e,n,c,l,o,s,P,k=[],x=[],f),i),C===123)if(l===0)tr($,e,F,F,k,i,f,s,x);else switch(d){case 100:case 109:case 115:tr(t,F,F,r&&Kn(il(t,F,F,0,0,o,s,P,o,k=[],f),x),o,x,f,s,r?k:x);break;default:tr($,F,F,F,[""],x,0,s,x)}}c=l=p=0,b=S=1,P=$="",f=a;break;case 58:f=1+Re($),p=m;default:if(b<1){if(C==123)--b;else if(C==125&&b++==0&&Wy()==125)continue}switch($+=Xn(C),C*b){case 38:S=l>0?1:($+="\f",-1);break;case 44:s[c++]=(Re($)-1)*S,S=1;break;case 64:Ne()===45&&($+=er(Ce())),d=Ne(),l=f=Re(P=$+=Xy(Qn())),C++;break;case 45:m===45&&Re($)==2&&(b=0)}}return i}function il(t,e,n,r,o,i,a,s,u,c,l){for(var f=o-1,d=o===0?i:[""],p=Wo(d),m=0,b=0,v=0;m<r;++m)for(var S=0,C=en(t,f+1,f=By(b=a[m])),P=t;S<p;++S)(P=tl(b>0?d[S]+" "+C:V(C,/&\f/g,d[S])))&&(u[v++]=P);return Zn(t,e,n,o===0?Uo:s,u,c,l)}function Jy(t,e,n){return Zn(t,e,n,Qu,Xn(jy()),en(t,2,-2),0)}function al(t,e,n,r){return Zn(t,e,n,zo,en(t,0,r),en(t,r+1,-1),r)}function sl(t,e){switch(Hy(t,e)){case 5103:return L+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return L+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return L+t+Yn+t+fe+t+t;case 6828:case 4268:return L+t+fe+t+t;case 6165:return L+t+fe+"flex-"+t+t;case 5187:return L+t+V(t,/(\w+).+(:[^]+)/,L+"box-$1$2"+fe+"flex-$1$2")+t;case 5443:return L+t+fe+"flex-item-"+V(t,/flex-|-self/,"")+t;case 4675:return L+t+fe+"flex-line-pack"+V(t,/align-content|flex-|-self/,"")+t;case 5548:return L+t+fe+V(t,"shrink","negative")+t;case 5292:return L+t+fe+V(t,"basis","preferred-size")+t;case 6060:return L+"box-"+V(t,"-grow","")+L+t+fe+V(t,"grow","positive")+t;case 4554:return L+V(t,/([^-])(transform)/g,"$1"+L+"$2")+t;case 6187:return V(V(V(t,/(zoom-|grab)/,L+"$1"),/(image-set)/,L+"$1"),t,"")+t;case 5495:case 3959:return V(t,/(image-set\([^]*)/,L+"$1$`$1");case 4968:return V(V(t,/(.+:)(flex-)?(.*)/,L+"box-pack:$3"+fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+L+t+t;case 4095:case 3583:case 4068:case 2532:return V(t,/(.+)-inline(.+)/,L+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Re(t)-1-e>6)switch(ve(t,e+1)){case 109:if(ve(t,e+4)!==45)break;case 102:return V(t,/(.+:)(.+)-([^]+)/,"$1"+L+"$2-$3$1"+Yn+(ve(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~jo(t,"stretch")?sl(V(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(ve(t,e+1)!==115)break;case 6444:switch(ve(t,Re(t)-3-(~jo(t,"!important")&&10))){case 107:return V(t,":",":"+L)+t;case 101:return V(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+L+(ve(t,14)===45?"inline-":"")+"box$3$1"+L+"$2$3$1"+fe+"$2box$3")+t}break;case 5936:switch(ve(t,e+11)){case 114:return L+t+fe+V(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return L+t+fe+V(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return L+t+fe+V(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return L+t+fe+t+t}return t}function It(t,e){for(var n="",r=Wo(t),o=0;o<r;o++)n+=e(t[o],o,t,e)||"";return n}function Zy(t,e,n,r){switch(t.type){case Ly:case zo:return t.return=t.return||t.value;case Qu:return"";case el:return t.return=t.value+"{"+It(t.children,r)+"}";case Uo:t.value=t.props.join(",")}return Re(n=It(t.children,r))?t.return=t.value+"{"+n+"}":""}function Qy(t){var e=Wo(t);return function(n,r,o,i){for(var a="",s=0;s<e;s++)a+=t[s](n,r,o,i)||"";return a}}function e0(t){return function(e){e.root||(e=e.return)&&t(e)}}function t0(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case zo:t.return=sl(t.value,t.length);break;case el:return It([tn(t,{value:V(t.value,"@","@"+L)})],r);case Uo:if(t.length)return zy(t.props,function(o){switch(Uy(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return It([tn(t,{props:[V(o,/:(read-\w+)/,":"+Yn+"$1")]})],r);case"::placeholder":return It([tn(t,{props:[V(o,/:(plac\w+)/,":"+L+"input-$1")]}),tn(t,{props:[V(o,/:(plac\w+)/,":"+Yn+"$1")]}),tn(t,{props:[V(o,/:(plac\w+)/,fe+"input-$1")]})],r)}return""})}}function n0(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var r0=function(e,n,r){for(var o=0,i=0;o=i,i=Ne(),o===38&&i===12&&(n[r]=1),!rn(i);)Ce();return nn(e,ge)},o0=function(e,n){var r=-1,o=44;do switch(rn(o)){case 0:o===38&&Ne()===12&&(n[r]=1),e[r]+=r0(ge-1,n,r);break;case 2:e[r]+=er(o);break;case 4:if(o===44){e[++r]=Ne()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=Xn(o)}while(o=Ce());return e},i0=function(e,n){return ol(o0(rl(e),n))},ul=new WeakMap,a0=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,o=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!ul.get(r))&&!o){ul.set(e,!0);for(var i=[],a=i0(n,i),s=r.props,u=0,c=0;u<a.length;u++)for(var l=0;l<s.length;l++,c++)e.props[c]=i[u]?a[u].replace(/&\f/g,s[l]):s[l]+" "+a[u]}}},s0=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}},u0=[t0],l0=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(b){var v=b.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(b),b.setAttribute("data-s",""))})}var o=e.stylisPlugins||u0,i={},a,s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(b){for(var v=b.getAttribute("data-emotion").split(" "),S=1;S<v.length;S++)i[v[S]]=!0;s.push(b)});var u,c=[a0,s0];{var l,f=[Zy,e0(function(b){l.insert(b)})],d=Qy(c.concat(o,f)),p=function(v){return It(Ky(v),d)};u=function(v,S,C,P){l=C,p(v?v+"{"+S.styles+"}":S.styles),P&&(m.inserted[S.name]=!0)}}var m={key:n,sheet:new Ny({key:n,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:u};return m.sheet.hydrate(s),m},ll={exports:{}},U={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re=typeof Symbol=="function"&&Symbol.for,qo=re?Symbol.for("react.element"):60103,Yo=re?Symbol.for("react.portal"):60106,nr=re?Symbol.for("react.fragment"):60107,rr=re?Symbol.for("react.strict_mode"):60108,or=re?Symbol.for("react.profiler"):60114,ir=re?Symbol.for("react.provider"):60109,ar=re?Symbol.for("react.context"):60110,Xo=re?Symbol.for("react.async_mode"):60111,sr=re?Symbol.for("react.concurrent_mode"):60111,ur=re?Symbol.for("react.forward_ref"):60112,lr=re?Symbol.for("react.suspense"):60113,c0=re?Symbol.for("react.suspense_list"):60120,cr=re?Symbol.for("react.memo"):60115,fr=re?Symbol.for("react.lazy"):60116,f0=re?Symbol.for("react.block"):60121,d0=re?Symbol.for("react.fundamental"):60117,p0=re?Symbol.for("react.responder"):60118,h0=re?Symbol.for("react.scope"):60119;function Ae(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case qo:switch(t=t.type,t){case Xo:case sr:case nr:case or:case rr:case lr:return t;default:switch(t=t&&t.$$typeof,t){case ar:case ur:case fr:case cr:case ir:return t;default:return e}}case Yo:return e}}}function cl(t){return Ae(t)===sr}U.AsyncMode=Xo,U.ConcurrentMode=sr,U.ContextConsumer=ar,U.ContextProvider=ir,U.Element=qo,U.ForwardRef=ur,U.Fragment=nr,U.Lazy=fr,U.Memo=cr,U.Portal=Yo,U.Profiler=or,U.StrictMode=rr,U.Suspense=lr,U.isAsyncMode=function(t){return cl(t)||Ae(t)===Xo},U.isConcurrentMode=cl,U.isContextConsumer=function(t){return Ae(t)===ar},U.isContextProvider=function(t){return Ae(t)===ir},U.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===qo},U.isForwardRef=function(t){return Ae(t)===ur},U.isFragment=function(t){return Ae(t)===nr},U.isLazy=function(t){return Ae(t)===fr},U.isMemo=function(t){return Ae(t)===cr},U.isPortal=function(t){return Ae(t)===Yo},U.isProfiler=function(t){return Ae(t)===or},U.isStrictMode=function(t){return Ae(t)===rr},U.isSuspense=function(t){return Ae(t)===lr},U.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===nr||t===sr||t===or||t===rr||t===lr||t===c0||typeof t=="object"&&t!==null&&(t.$$typeof===fr||t.$$typeof===cr||t.$$typeof===ir||t.$$typeof===ar||t.$$typeof===ur||t.$$typeof===d0||t.$$typeof===p0||t.$$typeof===h0||t.$$typeof===f0)},U.typeOf=Ae,ll.exports=U;var fl=ll.exports,m0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},v0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dl={};dl[fl.ForwardRef]=m0,dl[fl.Memo]=v0;var g0=!0;function pl(t,e,n){var r="";return n.split(" ").forEach(function(o){t[o]!==void 0?e.push(t[o]+";"):r+=o+" "}),r}var hl=function(e,n,r){var o=e.key+"-"+n.name;if((r===!1||g0===!1)&&e.registered[o]===void 0&&(e.registered[o]=n.styles),e.inserted[n.name]===void 0){var i=n;do e.insert(n===i?"."+o:"",i,e.sheet,!0),i=i.next;while(i!==void 0)}};function y0(t){for(var e=0,n,r=0,o=t.length;o>=4;++r,o-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(o){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var b0={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},S0=/[A-Z]|^ms/g,_0=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ml=function(e){return e.charCodeAt(1)===45},vl=function(e){return e!=null&&typeof e!="boolean"},Ko=n0(function(t){return ml(t)?t:t.replace(S0,"-$&").toLowerCase()}),gl=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(_0,function(r,o,i){return Le={name:o,styles:i,next:Le},o})}return b0[e]!==1&&!ml(e)&&typeof n=="number"&&n!==0?n+"px":n};function on(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Le={name:n.name,styles:n.styles,next:Le},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Le={name:r.name,styles:r.styles,next:Le},r=r.next;var o=n.styles+";";return o}return E0(t,e,n)}case"function":{if(t!==void 0){var i=Le,a=n(t);return Le=i,on(t,e,a)}break}}if(e==null)return n;var s=e[n];return s!==void 0?s:n}function E0(t,e,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=on(t,e,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")e!=null&&e[a]!==void 0?r+=i+"{"+e[a]+"}":vl(a)&&(r+=Ko(i)+":"+gl(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(e==null||e[a[0]]===void 0))for(var s=0;s<a.length;s++)vl(a[s])&&(r+=Ko(i)+":"+gl(i,a[s])+";");else{var u=on(t,e,a);switch(i){case"animation":case"animationName":{r+=Ko(i)+":"+u+";";break}default:r+=i+"{"+u+"}"}}}return r}var yl=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Le,Jo=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var o=!0,i="";Le=void 0;var a=e[0];a==null||a.raw===void 0?(o=!1,i+=on(r,n,a)):i+=a[0];for(var s=1;s<e.length;s++)i+=on(r,n,e[s]),o&&(i+=a[s]);yl.lastIndex=0;for(var u="",c;(c=yl.exec(i))!==null;)u+="-"+c[1];var l=y0(i)+u;return{name:l,styles:i,next:Le}},Zo={}.hasOwnProperty,bl=yt(typeof HTMLElement!="undefined"?l0({key:"css"}):null);bl.Provider;var Sl=function(e){return Br(function(n,r){var o=Ut(bl);return e(n,o,r)})},_l=yt({}),Qo="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",C0=function(e,n){var r={};for(var o in n)Zo.call(n,o)&&(r[o]=n[o]);return r[Qo]=e,r},A0=function(){return null},w0=Sl(function(t,e,n){var r=t.css;typeof r=="string"&&e.registered[r]!==void 0&&(r=e.registered[r]);var o=t[Qo],i=[r],a="";typeof t.className=="string"?a=pl(e.registered,i,t.className):t.className!=null&&(a=t.className+" ");var s=Jo(i,void 0,Ut(_l));hl(e,s,typeof o=="string"),a+=e.key+"-"+s.name;var u={};for(var c in t)Zo.call(t,c)&&c!=="css"&&c!==Qo&&(u[c]=t[c]);u.ref=n,u.className=a;var l=Z(o,u),f=Z(A0,null);return Z(ye,null,f,l)}),M=function(e,n){var r=arguments;if(n==null||!Zo.call(n,"css"))return Z.apply(void 0,r);var o=r.length,i=new Array(o);i[0]=w0,i[1]=C0(e,n);for(var a=2;a<o;a++)i[a]=r[a];return Z.apply(null,i)};function ei(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Jo(e)}var O0=function(){var e=ei.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},x0=function t(e){for(var n=e.length,r=0,o="";r<n;r++){var i=e[r];if(i!=null){var a=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))a=t(i);else{a="";for(var s in i)i[s]&&s&&(a&&(a+=" "),a+=s)}break}default:a=i}a&&(o&&(o+=" "),o+=a)}}return o};function $0(t,e,n){var r=[],o=pl(t,r,n);return r.length<2?n:o+e(r)}var P0=function(){return null},D0=Sl(function(t,e){var n=!1,r=function(){for(var c=arguments.length,l=new Array(c),f=0;f<c;f++)l[f]=arguments[f];var d=Jo(l,e.registered);return hl(e,d,!1),e.key+"-"+d.name},o=function(){for(var c=arguments.length,l=new Array(c),f=0;f<c;f++)l[f]=arguments[f];return $0(e.registered,r,x0(l))},i={css:r,cx:o,theme:Ut(_l)},a=t.children(i);n=!0;var s=Z(P0,null);return Z(ye,null,s,a)});function T0(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function ti(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,i;for(i=0;i<r.length;i++)o=r[i],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function Rt(t,e){if(t==null)return{};var n=ti(t,e),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function ni(t){return ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ni(t)}var El={};Object.defineProperty(El,"__esModule",{value:!0});var ri=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cl=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Al=Ct,an=wl(Al),M0=Wt.exports,ne=wl(M0);function wl(t){return t&&t.__esModule?t:{default:t}}function F0(t,e){var n={};for(var r in t)e.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(t,r)||(n[r]=t[r]);return n}function k0(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function I0(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function R0(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Ol={position:"absolute",top:0,left:0,visibility:"hidden",height:0,overflow:"scroll",whiteSpace:"pre"},N0=["extraWidth","injectStyles","inputClassName","inputRef","inputStyle","minWidth","onAutosize","placeholderIsMinWidth"],L0=function(e){return N0.forEach(function(n){return delete e[n]}),e},xl=function(e,n){n.style.fontSize=e.fontSize,n.style.fontFamily=e.fontFamily,n.style.fontWeight=e.fontWeight,n.style.fontStyle=e.fontStyle,n.style.letterSpacing=e.letterSpacing,n.style.textTransform=e.textTransform},$l=typeof window!="undefined"&&window.navigator?/MSIE |Trident\/|Edge\//.test(window.navigator.userAgent):!1,Pl=function(){return $l?"_"+Math.random().toString(36).substr(2,12):void 0},oi=function(t){R0(e,t),Cl(e,null,[{key:"getDerivedStateFromProps",value:function(r,o){var i=r.id;return i!==o.prevId?{inputId:i||Pl(),prevId:i}:null}}]);function e(n){k0(this,e);var r=I0(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return r.inputRef=function(o){r.input=o,typeof r.props.inputRef=="function"&&r.props.inputRef(o)},r.placeHolderSizerRef=function(o){r.placeHolderSizer=o},r.sizerRef=function(o){r.sizer=o},r.state={inputWidth:n.minWidth,inputId:n.id||Pl(),prevId:n.id},r}return Cl(e,[{key:"componentDidMount",value:function(){this.mounted=!0,this.copyInputStyles(),this.updateInputWidth()}},{key:"componentDidUpdate",value:function(r,o){o.inputWidth!==this.state.inputWidth&&typeof this.props.onAutosize=="function"&&this.props.onAutosize(this.state.inputWidth),this.updateInputWidth()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"copyInputStyles",value:function(){if(!(!this.mounted||!window.getComputedStyle)){var r=this.input&&window.getComputedStyle(this.input);!r||(xl(r,this.sizer),this.placeHolderSizer&&xl(r,this.placeHolderSizer))}}},{key:"updateInputWidth",value:function(){if(!(!this.mounted||!this.sizer||typeof this.sizer.scrollWidth=="undefined")){var r=void 0;this.props.placeholder&&(!this.props.value||this.props.value&&this.props.placeholderIsMinWidth)?r=Math.max(this.sizer.scrollWidth,this.placeHolderSizer.scrollWidth)+2:r=this.sizer.scrollWidth+2;var o=this.props.type==="number"&&this.props.extraWidth===void 0?16:parseInt(this.props.extraWidth)||0;r+=o,r<this.props.minWidth&&(r=this.props.minWidth),r!==this.state.inputWidth&&this.setState({inputWidth:r})}}},{key:"getInput",value:function(){return this.input}},{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"select",value:function(){this.input.select()}},{key:"renderStyles",value:function(){var r=this.props.injectStyles;return $l&&r?an.default.createElement("style",{dangerouslySetInnerHTML:{__html:"input#"+this.state.inputId+"::-ms-clear {display: none;}"}}):null}},{key:"render",value:function(){var r=[this.props.defaultValue,this.props.value,""].reduce(function(s,u){return s!=null?s:u}),o=ri({},this.props.style);o.display||(o.display="inline-block");var i=ri({boxSizing:"content-box",width:this.state.inputWidth+"px"},this.props.inputStyle),a=F0(this.props,[]);return L0(a),a.className=this.props.inputClassName,a.id=this.state.inputId,a.style=i,an.default.createElement("div",{className:this.props.className,style:o},this.renderStyles(),an.default.createElement("input",ri({},a,{ref:this.inputRef})),an.default.createElement("div",{ref:this.sizerRef,style:Ol},r),this.props.placeholder?an.default.createElement("div",{ref:this.placeHolderSizerRef,style:Ol},this.props.placeholder):null)}}]),e}(Al.Component);oi.propTypes={className:ne.default.string,defaultValue:ne.default.any,extraWidth:ne.default.oneOfType([ne.default.number,ne.default.string]),id:ne.default.string,injectStyles:ne.default.bool,inputClassName:ne.default.string,inputRef:ne.default.func,inputStyle:ne.default.object,minWidth:ne.default.oneOfType([ne.default.number,ne.default.string]),onAutosize:ne.default.func,onChange:ne.default.func,placeholder:ne.default.string,placeholderIsMinWidth:ne.default.bool,style:ne.default.object,value:ne.default.any},oi.defaultProps={minWidth:1,injectStyles:!0};var B0=El.default=oi;function dr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Dl(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function pr(t,e,n){return e&&Dl(t.prototype,e),n&&Dl(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function hr(t,e){return hr=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},hr(t,e)}function mr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(t,"prototype",{value:Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),writable:!1}),e&&hr(t,e)}function Ge(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function V0(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Tl(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function ae(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Tl(Object(n),!0).forEach(function(r){V0(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Tl(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function vr(t){return vr=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},vr(t)}function H0(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function U0(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function z0(t,e){return e&&(typeof e=="object"||typeof e=="function")?e:U0(t)}function gr(t){var e=H0();return function(){var r=vr(t),o;if(e){var i=vr(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return z0(this,o)}}var yr=function(){};function j0(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function W0(t,e,n){var r=[n];if(e&&t)for(var o in e)e.hasOwnProperty(o)&&e[o]&&r.push("".concat(j0(t,o)));return r.filter(function(i){return i}).map(function(i){return String(i).trim()}).join(" ")}var Ml=function(e){return Array.isArray(e)?e.filter(Boolean):ni(e)==="object"&&e!==null?[e]:[]},Fl=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var n=Rt(e,["className","clearValue","cx","getStyles","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"]);return ae({},n)};function ii(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function kl(t){return ii(t)?window.pageYOffset:t.scrollTop}function br(t,e){if(ii(t)){window.scrollTo(0,e);return}t.scrollTop=e}function G0(t){var e=getComputedStyle(t),n=e.position==="absolute",r=/(auto|scroll)/,o=document.documentElement;if(e.position==="fixed")return o;for(var i=t;i=i.parentElement;)if(e=getComputedStyle(i),!(n&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return i;return o}function q0(t,e,n,r){return n*((t=t/r-1)*t*t+1)+e}function Sr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:yr,o=kl(t),i=e-o,a=10,s=0;function u(){s+=a;var c=q0(s,o,i,n);br(t,c),s<n?window.requestAnimationFrame(u):r(t)}u()}function Y0(t,e){var n=t.getBoundingClientRect(),r=e.getBoundingClientRect(),o=e.offsetHeight/3;r.bottom+o>n.bottom?br(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+o,t.scrollHeight)):r.top-o<n.top&&br(t,Math.max(e.offsetTop-o,0))}function X0(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Il(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function K0(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Rl=!1,J0={get passive(){return Rl=!0}},_r=typeof window!="undefined"?window:{};_r.addEventListener&&_r.removeEventListener&&(_r.addEventListener("p",yr,J0),_r.removeEventListener("p",yr,!1));var Z0=Rl;function Q0(t){var e=t.maxHeight,n=t.menuEl,r=t.minHeight,o=t.placement,i=t.shouldScroll,a=t.isFixedPosition,s=t.theme,u=s.spacing,c=G0(n),l={placement:"bottom",maxHeight:e};if(!n||!n.offsetParent)return l;var f=c.getBoundingClientRect(),d=f.height,p=n.getBoundingClientRect(),m=p.bottom,b=p.height,v=p.top,S=n.offsetParent.getBoundingClientRect(),C=S.top,P=window.innerHeight,k=kl(c),x=parseInt(getComputedStyle(n).marginBottom,10),F=parseInt(getComputedStyle(n).marginTop,10),$=C-F,J=P-v,z=$+k,de=d-k-v,Y=m-P+k+x,q=k+v-F,K=160;switch(o){case"auto":case"bottom":if(J>=b)return{placement:"bottom",maxHeight:e};if(de>=b&&!a)return i&&Sr(c,Y,K),{placement:"bottom",maxHeight:e};if(!a&&de>=r||a&&J>=r){i&&Sr(c,Y,K);var pe=a?J-x:de-x;return{placement:"bottom",maxHeight:pe}}if(o==="auto"||a){var Be=e,me=a?$:z;return me>=r&&(Be=Math.min(me-x-u.controlHeight,e)),{placement:"top",maxHeight:Be}}if(o==="bottom")return i&&br(c,Y),{placement:"bottom",maxHeight:e};break;case"top":if($>=b)return{placement:"top",maxHeight:e};if(z>=b&&!a)return i&&Sr(c,q,K),{placement:"top",maxHeight:e};if(!a&&z>=r||a&&$>=r){var oe=e;return(!a&&z>=r||a&&$>=r)&&(oe=a?$-F:z-F),i&&Sr(c,q,K),{placement:"top",maxHeight:oe}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(o,'".'))}return l}function eb(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var ai=function(e){return e==="auto"?"bottom":e},tb=function(e){var n,r=e.placement,o=e.theme,i=o.borderRadius,a=o.spacing,s=o.colors;return n={label:"menu"},Ge(n,eb(r),"100%"),Ge(n,"backgroundColor",s.neutral0),Ge(n,"borderRadius",i),Ge(n,"boxShadow","0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"),Ge(n,"marginBottom",a.menuGutter),Ge(n,"marginTop",a.menuGutter),Ge(n,"position","absolute"),Ge(n,"width","100%"),Ge(n,"zIndex",1),n},Nl=yt({getPortalPlacement:null}),Ll=function(t){mr(n,t);var e=gr(n);function n(){var r;dr(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=e.call.apply(e,[this].concat(i)),r.state={maxHeight:r.props.maxMenuHeight,placement:null},r.getPlacement=function(s){var u=r.props,c=u.minMenuHeight,l=u.maxMenuHeight,f=u.menuPlacement,d=u.menuPosition,p=u.menuShouldScrollIntoView,m=u.theme;if(!!s){var b=d==="fixed",v=p&&!b,S=Q0({maxHeight:l,menuEl:s,minHeight:c,placement:f,shouldScroll:v,isFixedPosition:b,theme:m}),C=r.context.getPortalPlacement;C&&C(S),r.setState(S)}},r.getUpdatedProps=function(){var s=r.props.menuPlacement,u=r.state.placement||ai(s);return ae(ae({},r.props),{},{placement:u,maxHeight:r.state.maxHeight})},r}return pr(n,[{key:"render",value:function(){var o=this.props.children;return o({ref:this.getPlacement,placerProps:this.getUpdatedProps()})}}]),n}(Q);Ll.contextType=Nl;var nb=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.innerRef,s=e.innerProps;return M("div",T({css:i("menu",e),className:o({menu:!0},r),ref:a},s),n)},rb=function(e){var n=e.maxHeight,r=e.theme.spacing.baseUnit;return{maxHeight:n,overflowY:"auto",paddingBottom:r,paddingTop:r,position:"relative",WebkitOverflowScrolling:"touch"}},ob=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.innerProps,s=e.innerRef,u=e.isMulti;return M("div",T({css:i("menuList",e),className:o({"menu-list":!0,"menu-list--is-multi":u},r),ref:s},a),n)},Bl=function(e){var n=e.theme,r=n.spacing.baseUnit,o=n.colors;return{color:o.neutral40,padding:"".concat(r*2,"px ").concat(r*3,"px"),textAlign:"center"}},ib=Bl,ab=Bl,Vl=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.innerProps;return M("div",T({css:i("noOptionsMessage",e),className:o({"menu-notice":!0,"menu-notice--no-options":!0},r)},a),n)};Vl.defaultProps={children:"No options"};var Hl=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.innerProps;return M("div",T({css:i("loadingMessage",e),className:o({"menu-notice":!0,"menu-notice--loading":!0},r)},a),n)};Hl.defaultProps={children:"Loading..."};var sb=function(e){var n=e.rect,r=e.offset,o=e.position;return{left:n.left,position:o,top:r,width:n.width,zIndex:1}},ub=function(t){mr(n,t);var e=gr(n);function n(){var r;dr(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=e.call.apply(e,[this].concat(i)),r.state={placement:null},r.getPortalPlacement=function(s){var u=s.placement,c=ai(r.props.menuPlacement);u!==c&&r.setState({placement:u})},r}return pr(n,[{key:"render",value:function(){var o=this.props,i=o.appendTo,a=o.children,s=o.className,u=o.controlElement,c=o.cx,l=o.innerProps,f=o.menuPlacement,d=o.menuPosition,p=o.getStyles,m=d==="fixed";if(!i&&!m||!u)return null;var b=this.state.placement||ai(f),v=X0(u),S=m?0:window.pageYOffset,C=v[b]+S,P={offset:C,position:d,rect:v},k=M("div",T({css:p("menuPortal",P),className:c({"menu-portal":!0},s)},l),a);return M(Nl.Provider,{value:{getPortalPlacement:this.getPortalPlacement}},i?Vr(k,i):k)}}]),n}(Q),lb=function(e){var n=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":null,pointerEvents:n?"none":null,position:"relative"}},cb=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.innerProps,s=e.isDisabled,u=e.isRtl;return M("div",T({css:i("container",e),className:o({"--is-disabled":s,"--is-rtl":u},r)},a),n)},fb=function(e){var n=e.theme.spacing;return{alignItems:"center",display:"flex",flex:1,flexWrap:"wrap",padding:"".concat(n.baseUnit/2,"px ").concat(n.baseUnit*2,"px"),WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"}},db=function(e){var n=e.children,r=e.className,o=e.cx,i=e.innerProps,a=e.isMulti,s=e.getStyles,u=e.hasValue;return M("div",T({css:s("valueContainer",e),className:o({"value-container":!0,"value-container--is-multi":a,"value-container--has-value":u},r)},i),n)},pb=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},hb=function(e){var n=e.children,r=e.className,o=e.cx,i=e.innerProps,a=e.getStyles;return M("div",T({css:a("indicatorsContainer",e),className:o({indicators:!0},r)},i),n)},Ul,mb={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},zl=function(e){var n=e.size,r=Rt(e,["size"]);return M("svg",T({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:mb},r))},si=function(e){return M(zl,T({size:20},e),M("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},jl=function(e){return M(zl,T({size:20},e),M("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Wl=function(e){var n=e.isFocused,r=e.theme,o=r.spacing.baseUnit,i=r.colors;return{label:"indicatorContainer",color:n?i.neutral60:i.neutral20,display:"flex",padding:o*2,transition:"color 150ms",":hover":{color:n?i.neutral80:i.neutral40}}},vb=Wl,gb=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.innerProps;return M("div",T({css:i("dropdownIndicator",e),className:o({indicator:!0,"dropdown-indicator":!0},r)},a),n||M(jl,null))},yb=Wl,bb=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.innerProps;return M("div",T({css:i("clearIndicator",e),className:o({indicator:!0,"clear-indicator":!0},r)},a),n||M(si,null))},Sb=function(e){var n=e.isDisabled,r=e.theme,o=r.spacing.baseUnit,i=r.colors;return{label:"indicatorSeparator",alignSelf:"stretch",backgroundColor:n?i.neutral10:i.neutral20,marginBottom:o*2,marginTop:o*2,width:1}},_b=function(e){var n=e.className,r=e.cx,o=e.getStyles,i=e.innerProps;return M("span",T({},i,{css:o("indicatorSeparator",e),className:r({"indicator-separator":!0},n)}))},Eb=O0(Ul||(Ul=T0([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Cb=function(e){var n=e.isFocused,r=e.size,o=e.theme,i=o.colors,a=o.spacing.baseUnit;return{label:"loadingIndicator",color:n?i.neutral60:i.neutral20,display:"flex",padding:a*2,transition:"color 150ms",alignSelf:"center",fontSize:r,lineHeight:1,marginRight:r,textAlign:"center",verticalAlign:"middle"}},ui=function(e){var n=e.delay,r=e.offset;return M("span",{css:ei({animation:"".concat(Eb," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":null,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Gl=function(e){var n=e.className,r=e.cx,o=e.getStyles,i=e.innerProps,a=e.isRtl;return M("div",T({css:o("loadingIndicator",e),className:r({indicator:!0,"loading-indicator":!0},n)},i),M(ui,{delay:0,offset:a}),M(ui,{delay:160,offset:!0}),M(ui,{delay:320,offset:!a}))};Gl.defaultProps={size:4};var Ab=function(e){var n=e.isDisabled,r=e.isFocused,o=e.theme,i=o.colors,a=o.borderRadius,s=o.spacing;return{label:"control",alignItems:"center",backgroundColor:n?i.neutral5:i.neutral0,borderColor:n?i.neutral10:r?i.primary:i.neutral20,borderRadius:a,borderStyle:"solid",borderWidth:1,boxShadow:r?"0 0 0 1px ".concat(i.primary):null,cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms","&:hover":{borderColor:r?i.primary:i.neutral30}}},wb=function(e){var n=e.children,r=e.cx,o=e.getStyles,i=e.className,a=e.isDisabled,s=e.isFocused,u=e.innerRef,c=e.innerProps,l=e.menuIsOpen;return M("div",T({ref:u,css:o("control",e),className:r({control:!0,"control--is-disabled":a,"control--is-focused":s,"control--menu-is-open":l},i)},c),n)},Ob=function(e){var n=e.theme.spacing;return{paddingBottom:n.baseUnit*2,paddingTop:n.baseUnit*2}},xb=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.Heading,s=e.headingProps,u=e.innerProps,c=e.label,l=e.theme,f=e.selectProps;return M("div",T({css:i("group",e),className:o({group:!0},r)},u),M(a,T({},s,{selectProps:f,theme:l,getStyles:i,cx:o}),c),M("div",null,n))},$b=function(e){var n=e.theme.spacing;return{label:"group",color:"#999",cursor:"default",display:"block",fontSize:"75%",fontWeight:"500",marginBottom:"0.25em",paddingLeft:n.baseUnit*3,paddingRight:n.baseUnit*3,textTransform:"uppercase"}},Pb=function(e){var n=e.getStyles,r=e.cx,o=e.className,i=Fl(e);i.data;var a=Rt(i,["data"]);return M("div",T({css:n("groupHeading",e),className:r({"group-heading":!0},o)},a))},Db=function(e){var n=e.isDisabled,r=e.theme,o=r.spacing,i=r.colors;return{margin:o.baseUnit/2,paddingBottom:o.baseUnit/2,paddingTop:o.baseUnit/2,visibility:n?"hidden":"visible",color:i.neutral80}},Tb=function(e){return{label:"input",background:0,border:0,fontSize:"inherit",opacity:e?0:1,outline:0,padding:0,color:"inherit"}},Mb=function(e){var n=e.className,r=e.cx,o=e.getStyles,i=Fl(e),a=i.innerRef,s=i.isDisabled,u=i.isHidden,c=Rt(i,["innerRef","isDisabled","isHidden"]);return M("div",{css:o("input",e)},M(B0,T({className:r({input:!0},n),inputRef:a,inputStyle:Tb(u),disabled:s},c)))},Fb=function(e){var n=e.theme,r=n.spacing,o=n.borderRadius,i=n.colors;return{label:"multiValue",backgroundColor:i.neutral10,borderRadius:o/2,display:"flex",margin:r.baseUnit/2,minWidth:0}},kb=function(e){var n=e.theme,r=n.borderRadius,o=n.colors,i=e.cropWithEllipsis;return{borderRadius:r/2,color:o.neutral80,fontSize:"85%",overflow:"hidden",padding:3,paddingLeft:6,textOverflow:i?"ellipsis":null,whiteSpace:"nowrap"}},Ib=function(e){var n=e.theme,r=n.spacing,o=n.borderRadius,i=n.colors,a=e.isFocused;return{alignItems:"center",borderRadius:o/2,backgroundColor:a&&i.dangerLight,display:"flex",paddingLeft:r.baseUnit,paddingRight:r.baseUnit,":hover":{backgroundColor:i.dangerLight,color:i.danger}}},ql=function(e){var n=e.children,r=e.innerProps;return M("div",r,n)},Rb=ql,Nb=ql;function Lb(t){var e=t.children,n=t.innerProps;return M("div",n,e||M(si,{size:14}))}var Yl=function(e){var n=e.children,r=e.className,o=e.components,i=e.cx,a=e.data,s=e.getStyles,u=e.innerProps,c=e.isDisabled,l=e.removeProps,f=e.selectProps,d=o.Container,p=o.Label,m=o.Remove;return M(D0,null,function(b){var v=b.css,S=b.cx;return M(d,{data:a,innerProps:ae({className:S(v(s("multiValue",e)),i({"multi-value":!0,"multi-value--is-disabled":c},r))},u),selectProps:f},M(p,{data:a,innerProps:{className:S(v(s("multiValueLabel",e)),i({"multi-value__label":!0},r))},selectProps:f},n),M(m,{data:a,innerProps:ae({className:S(v(s("multiValueRemove",e)),i({"multi-value__remove":!0},r))},l),selectProps:f}))})};Yl.defaultProps={cropWithEllipsis:!0};var Bb=function(e){var n=e.isDisabled,r=e.isFocused,o=e.isSelected,i=e.theme,a=i.spacing,s=i.colors;return{label:"option",backgroundColor:o?s.primary:r?s.primary25:"transparent",color:n?s.neutral20:o?s.neutral0:"inherit",cursor:"default",display:"block",fontSize:"inherit",padding:"".concat(a.baseUnit*2,"px ").concat(a.baseUnit*3,"px"),width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",":active":{backgroundColor:!n&&(o?s.primary:s.primary50)}}},Vb=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.isDisabled,s=e.isFocused,u=e.isSelected,c=e.innerRef,l=e.innerProps;return M("div",T({css:i("option",e),className:o({option:!0,"option--is-disabled":a,"option--is-focused":s,"option--is-selected":u},r),ref:c},l),n)},Hb=function(e){var n=e.theme,r=n.spacing,o=n.colors;return{label:"placeholder",color:o.neutral50,marginLeft:r.baseUnit/2,marginRight:r.baseUnit/2,position:"absolute",top:"50%",transform:"translateY(-50%)"}},Ub=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.innerProps;return M("div",T({css:i("placeholder",e),className:o({placeholder:!0},r)},a),n)},zb=function(e){var n=e.isDisabled,r=e.theme,o=r.spacing,i=r.colors;return{label:"singleValue",color:n?i.neutral40:i.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2,maxWidth:"calc(100% - ".concat(o.baseUnit*2,"px)"),overflow:"hidden",position:"absolute",textOverflow:"ellipsis",whiteSpace:"nowrap",top:"50%",transform:"translateY(-50%)"}},jb=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.isDisabled,s=e.innerProps;return M("div",T({css:i("singleValue",e),className:o({"single-value":!0,"single-value--is-disabled":a},r)},s),n)},Wb={ClearIndicator:bb,Control:wb,DropdownIndicator:gb,DownChevron:jl,CrossIcon:si,Group:xb,GroupHeading:Pb,IndicatorsContainer:hb,IndicatorSeparator:_b,Input:Mb,LoadingIndicator:Gl,Menu:nb,MenuList:ob,MenuPortal:ub,LoadingMessage:Hl,NoOptionsMessage:Vl,MultiValue:Yl,MultiValueContainer:Rb,MultiValueLabel:Nb,MultiValueRemove:Lb,Option:Vb,Placeholder:Ub,SelectContainer:cb,SingleValue:jb,ValueContainer:db},Gb=function(e){return ae(ae({},Wb),e.components)};function li(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function qb(t){if(Array.isArray(t))return li(t)}function Yb(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Xb(t,e){if(!!t){if(typeof t=="string")return li(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return li(t,e)}}function Kb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xl(t){return qb(t)||Yb(t)||Xb(t)||Kb()}var Kl=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Jb(t,e){return!!(t===e||Kl(t)&&Kl(e))}function Zb(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!Jb(t[n],e[n]))return!1;return!0}function Qb(t,e){e===void 0&&(e=Zb);var n,r=[],o,i=!1;function a(){for(var s=[],u=0;u<arguments.length;u++)s[u]=arguments[u];return i&&n===this&&e(s,r)||(o=t.apply(this,s),i=!0,n=this,r=s),o}return a}for(var e1={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},t1=function(e){return M("span",T({css:e1},e))},n1={guidance:function(e){var n=e.isSearchable,r=e.isMulti,o=e.isDisabled,i=e.tabSelectsValue,a=e.context;switch(a){case"menu":return"Use Up and Down to choose options".concat(o?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(e["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var n=e.action,r=e.label,o=r===void 0?"":r,i=e.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(o,", deselected.");case"select-option":return i?"option ".concat(o," is disabled. Select another option."):"option ".concat(o,", selected.");default:return""}},onFocus:function(e){var n=e.context,r=e.focused,o=r===void 0?{}:r,i=e.options,a=e.label,s=a===void 0?"":a,u=e.selectValue,c=e.isDisabled,l=e.isSelected,f=function(b,v){return b&&b.length?"".concat(b.indexOf(v)+1," of ").concat(b.length):""};if(n==="value"&&u)return"value ".concat(s," focused, ").concat(f(u,o),".");if(n==="menu"){var d=c?" disabled":"",p="".concat(l?"selected":"focused").concat(d);return"option ".concat(s," ").concat(p,", ").concat(f(i,o),".")}return""},onFilter:function(e){var n=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},r1=function(e){var n=e.ariaSelection,r=e.focusedOption,o=e.focusedValue,i=e.focusableOptions,a=e.isFocused,s=e.selectValue,u=e.selectProps,c=u.ariaLiveMessages,l=u.getOptionLabel,f=u.inputValue,d=u.isMulti,p=u.isOptionDisabled,m=u.isSearchable,b=u.menuIsOpen,v=u.options,S=u.screenReaderStatus,C=u.tabSelectsValue,P=u["aria-label"],k=u["aria-live"],x=je(function(){return ae(ae({},n1),c||{})},[c]),F=je(function(){var Y="";if(n&&x.onChange){var q=n.option,K=n.removedValue,pe=n.value,Be=function(Ve){return Array.isArray(Ve)?null:Ve},me=K||q||Be(pe),oe=ae({isDisabled:me&&p(me),label:me?l(me):""},n);Y=x.onChange(oe)}return Y},[n,p,l,x]),$=je(function(){var Y="",q=r||o,K=!!(r&&s&&s.includes(r));if(q&&x.onFocus){var pe={focused:q,label:l(q),isDisabled:p(q),isSelected:K,options:v,context:q===r?"menu":"value",selectValue:s};Y=x.onFocus(pe)}return Y},[r,o,l,p,x,v,s]),J=je(function(){var Y="";if(b&&v.length&&x.onFilter){var q=S({count:i.length});Y=x.onFilter({inputValue:f,resultsMessage:q})}return Y},[i,f,b,x,v,S]),z=je(function(){var Y="";if(x.guidance){var q=o?"value":b?"menu":"input";Y=x.guidance({"aria-label":P,context:q,isDisabled:r&&p(r),isMulti:d,isSearchable:m,tabSelectsValue:C})}return Y},[P,r,o,d,p,m,b,x,C]),de="".concat($," ").concat(J," ").concat(z);return M(t1,{"aria-live":k,"aria-atomic":"false","aria-relevant":"additions text"},a&&M(g.Fragment,null,M("span",{id:"aria-selection"},F),M("span",{id:"aria-context"},de)))},ci=[{base:"A",letters:"A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"},{base:"AA",letters:"\uA732"},{base:"AE",letters:"\xC6\u01FC\u01E2"},{base:"AO",letters:"\uA734"},{base:"AU",letters:"\uA736"},{base:"AV",letters:"\uA738\uA73A"},{base:"AY",letters:"\uA73C"},{base:"B",letters:"B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"},{base:"C",letters:"C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"},{base:"D",letters:"D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"},{base:"DZ",letters:"\u01F1\u01C4"},{base:"Dz",letters:"\u01F2\u01C5"},{base:"E",letters:"E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"},{base:"F",letters:"F\u24BB\uFF26\u1E1E\u0191\uA77B"},{base:"G",letters:"G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"},{base:"H",letters:"H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"},{base:"I",letters:"I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"},{base:"J",letters:"J\u24BF\uFF2A\u0134\u0248"},{base:"K",letters:"K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"},{base:"L",letters:"L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"},{base:"LJ",letters:"\u01C7"},{base:"Lj",letters:"\u01C8"},{base:"M",letters:"M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"},{base:"N",letters:"N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"},{base:"NJ",letters:"\u01CA"},{base:"Nj",letters:"\u01CB"},{base:"O",letters:"O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"},{base:"OI",letters:"\u01A2"},{base:"OO",letters:"\uA74E"},{base:"OU",letters:"\u0222"},{base:"P",letters:"P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"},{base:"Q",letters:"Q\u24C6\uFF31\uA756\uA758\u024A"},{base:"R",letters:"R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"},{base:"S",letters:"S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"},{base:"T",letters:"T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"},{base:"TZ",letters:"\uA728"},{base:"U",letters:"U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"},{base:"V",letters:"V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"},{base:"VY",letters:"\uA760"},{base:"W",letters:"W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"},{base:"X",letters:"X\u24CD\uFF38\u1E8A\u1E8C"},{base:"Y",letters:"Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"},{base:"Z",letters:"Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"},{base:"a",letters:"a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"},{base:"aa",letters:"\uA733"},{base:"ae",letters:"\xE6\u01FD\u01E3"},{base:"ao",letters:"\uA735"},{base:"au",letters:"\uA737"},{base:"av",letters:"\uA739\uA73B"},{base:"ay",letters:"\uA73D"},{base:"b",letters:"b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"},{base:"c",letters:"c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"},{base:"d",letters:"d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"},{base:"dz",letters:"\u01F3\u01C6"},{base:"e",letters:"e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"},{base:"f",letters:"f\u24D5\uFF46\u1E1F\u0192\uA77C"},{base:"g",letters:"g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"},{base:"h",letters:"h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"},{base:"hv",letters:"\u0195"},{base:"i",letters:"i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"},{base:"j",letters:"j\u24D9\uFF4A\u0135\u01F0\u0249"},{base:"k",letters:"k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"},{base:"l",letters:"l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"},{base:"lj",letters:"\u01C9"},{base:"m",letters:"m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"},{base:"n",letters:"n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"},{base:"nj",letters:"\u01CC"},{base:"o",letters:"o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"},{base:"oi",letters:"\u01A3"},{base:"ou",letters:"\u0223"},{base:"oo",letters:"\uA74F"},{base:"p",letters:"p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"},{base:"q",letters:"q\u24E0\uFF51\u024B\uA757\uA759"},{base:"r",letters:"r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"},{base:"s",letters:"s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"},{base:"t",letters:"t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"},{base:"tz",letters:"\uA729"},{base:"u",letters:"u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"},{base:"v",letters:"v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"},{base:"vy",letters:"\uA761"},{base:"w",letters:"w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"},{base:"x",letters:"x\u24E7\uFF58\u1E8B\u1E8D"},{base:"y",letters:"y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"},{base:"z",letters:"z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"}],o1=new RegExp("["+ci.map(function(t){return t.letters}).join("")+"]","g"),Jl={},fi=0;fi<ci.length;fi++)for(var di=ci[fi],pi=0;pi<di.letters.length;pi++)Jl[di.letters[pi]]=di.base;var Zl=function(e){return e.replace(o1,function(n){return Jl[n]})},i1=Qb(Zl),Ql=function(e){return e.replace(/^\s+|\s+$/g,"")},a1=function(e){return"".concat(e.label," ").concat(e.value)},s1=function(e){return function(n,r){var o=ae({ignoreCase:!0,ignoreAccents:!0,stringify:a1,trim:!0,matchFrom:"any"},e),i=o.ignoreCase,a=o.ignoreAccents,s=o.stringify,u=o.trim,c=o.matchFrom,l=u?Ql(r):r,f=u?Ql(s(n)):s(n);return i&&(l=l.toLowerCase(),f=f.toLowerCase()),a&&(l=i1(l),f=Zl(f)),c==="start"?f.substr(0,l.length)===l:f.indexOf(l)>-1}};function u1(t){t.in,t.out,t.onExited,t.appear,t.enter,t.exit;var e=t.innerRef;t.emotion;var n=Rt(t,["in","out","onExited","appear","enter","exit","innerRef","emotion"]);return M("input",T({ref:e},n,{css:ei({label:"dummyInput",background:0,border:0,fontSize:"inherit",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(0)"},"","")}))}var l1=function(e){e.preventDefault(),e.stopPropagation()};function c1(t){var e=t.isEnabled,n=t.onBottomArrive,r=t.onBottomLeave,o=t.onTopArrive,i=t.onTopLeave,a=Te(!1),s=Te(!1),u=Te(0),c=Te(null),l=Me(function(v,S){if(c.current!==null){var C=c.current,P=C.scrollTop,k=C.scrollHeight,x=C.clientHeight,F=c.current,$=S>0,J=k-x-P,z=!1;J>S&&a.current&&(r&&r(v),a.current=!1),$&&s.current&&(i&&i(v),s.current=!1),$&&S>J?(n&&!a.current&&n(v),F.scrollTop=k,z=!0,a.current=!0):!$&&-S>P&&(o&&!s.current&&o(v),F.scrollTop=0,z=!0,s.current=!0),z&&l1(v)}},[]),f=Me(function(v){l(v,v.deltaY)},[l]),d=Me(function(v){u.current=v.changedTouches[0].clientY},[]),p=Me(function(v){var S=u.current-v.changedTouches[0].clientY;l(v,S)},[l]),m=Me(function(v){if(!!v){var S=Z0?{passive:!1}:!1;typeof v.addEventListener=="function"&&v.addEventListener("wheel",f,S),typeof v.addEventListener=="function"&&v.addEventListener("touchstart",d,S),typeof v.addEventListener=="function"&&v.addEventListener("touchmove",p,S)}},[p,d,f]),b=Me(function(v){!v||(typeof v.removeEventListener=="function"&&v.removeEventListener("wheel",f,!1),typeof v.removeEventListener=="function"&&v.removeEventListener("touchstart",d,!1),typeof v.removeEventListener=="function"&&v.removeEventListener("touchmove",p,!1))},[p,d,f]);return rt(function(){if(!!e){var v=c.current;return m(v),function(){b(v)}}},[e,m,b]),function(v){c.current=v}}var ec=["boxSizing","height","overflow","paddingRight","position"],tc={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function nc(t){t.preventDefault()}function rc(t){t.stopPropagation()}function oc(){var t=this.scrollTop,e=this.scrollHeight,n=t+this.offsetHeight;t===0?this.scrollTop=1:n===e&&(this.scrollTop=t-1)}function ic(){return"ontouchstart"in window||navigator.maxTouchPoints}var ac=!!(typeof window!="undefined"&&window.document&&window.document.createElement),sn=0,Nt={capture:!1,passive:!1};function f1(t){var e=t.isEnabled,n=t.accountForScrollbars,r=n===void 0?!0:n,o=Te({}),i=Te(null),a=Me(function(u){if(!!ac){var c=document.body,l=c&&c.style;if(r&&ec.forEach(function(m){var b=l&&l[m];o.current[m]=b}),r&&sn<1){var f=parseInt(o.current.paddingRight,10)||0,d=document.body?document.body.clientWidth:0,p=window.innerWidth-d+f||0;Object.keys(tc).forEach(function(m){var b=tc[m];l&&(l[m]=b)}),l&&(l.paddingRight="".concat(p,"px"))}c&&ic()&&(c.addEventListener("touchmove",nc,Nt),u&&(u.addEventListener("touchstart",oc,Nt),u.addEventListener("touchmove",rc,Nt))),sn+=1}},[]),s=Me(function(u){if(!!ac){var c=document.body,l=c&&c.style;sn=Math.max(sn-1,0),r&&sn<1&&ec.forEach(function(f){var d=o.current[f];l&&(l[f]=d)}),c&&ic()&&(c.removeEventListener("touchmove",nc,Nt),u&&(u.removeEventListener("touchstart",oc,Nt),u.removeEventListener("touchmove",rc,Nt)))}},[]);return rt(function(){if(!!e){var u=i.current;return a(u),function(){s(u)}}},[e,a,s]),function(u){i.current=u}}var d1=function(){return document.activeElement&&document.activeElement.blur()},p1={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function h1(t){var e=t.children,n=t.lockEnabled,r=t.captureEnabled,o=r===void 0?!0:r,i=t.onBottomArrive,a=t.onBottomLeave,s=t.onTopArrive,u=t.onTopLeave,c=c1({isEnabled:o,onBottomArrive:i,onBottomLeave:a,onTopArrive:s,onTopLeave:u}),l=f1({isEnabled:n}),f=function(p){c(p),l(p)};return M(g.Fragment,null,n&&M("div",{onClick:d1,css:p1}),e(f))}var m1=function(e){return e.label},v1=function(e){return e.label},g1=function(e){return e.value},y1=function(e){return!!e.isDisabled},b1={clearIndicator:yb,container:lb,control:Ab,dropdownIndicator:vb,group:Ob,groupHeading:$b,indicatorsContainer:pb,indicatorSeparator:Sb,input:Db,loadingIndicator:Cb,loadingMessage:ab,menu:tb,menuList:rb,menuPortal:sb,multiValue:Fb,multiValueLabel:kb,multiValueRemove:Ib,noOptionsMessage:ib,option:Bb,placeholder:Hb,singleValue:zb,valueContainer:fb},S1={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},_1=4,sc=4,E1=38,C1=sc*2,A1={baseUnit:sc,controlHeight:E1,menuGutter:C1},hi={borderRadius:_1,colors:S1,spacing:A1},w1={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Il(),captureMenuScroll:!Il(),closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:s1(),formatGroupLabel:m1,getOptionLabel:v1,getOptionValue:g1,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:y1,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!K0(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var n=e.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:"0",tabSelectsValue:!0};function uc(t,e,n,r){var o=pc(t,e,n),i=hc(t,e,n),a=dc(t,e),s=Er(t,e);return{type:"option",data:e,isDisabled:o,isSelected:i,label:a,value:s,index:r}}function lc(t,e){return t.options.map(function(n,r){if(n.options){var o=n.options.map(function(a,s){return uc(t,a,e,s)}).filter(function(a){return fc(t,a)});return o.length>0?{type:"group",data:n,options:o,index:r}:void 0}var i=uc(t,n,e,r);return fc(t,i)?i:void 0}).filter(function(n){return!!n})}function cc(t){return t.reduce(function(e,n){return n.type==="group"?e.push.apply(e,Xl(n.options.map(function(r){return r.data}))):e.push(n.data),e},[])}function O1(t,e){return cc(lc(t,e))}function fc(t,e){var n=t.inputValue,r=n===void 0?"":n,o=e.data,i=e.isSelected,a=e.label,s=e.value;return(!vc(t)||!i)&&mc(t,{label:a,value:s,data:o},r)}function x1(t,e){var n=t.focusedValue,r=t.selectValue,o=r.indexOf(n);if(o>-1){var i=e.indexOf(n);if(i>-1)return n;if(o<e.length)return e[o]}return null}function $1(t,e){var n=t.focusedOption;return n&&e.indexOf(n)>-1?n:e[0]}var dc=function(e,n){return e.getOptionLabel(n)},Er=function(e,n){return e.getOptionValue(n)};function pc(t,e,n){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,n):!1}function hc(t,e,n){if(n.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,n);var r=Er(t,e);return n.some(function(o){return Er(t,o)===r})}function mc(t,e,n){return t.filterOption?t.filterOption(e,n):!0}var vc=function(e){var n=e.hideSelectedOptions,r=e.isMulti;return n===void 0?r:n},P1=1,gc=function(t){mr(n,t);var e=gr(n);function n(r){var o;return dr(this,n),o=e.call(this,r),o.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},o.blockOptionHover=!1,o.isComposing=!1,o.commonProps=void 0,o.initialTouchX=0,o.initialTouchY=0,o.instancePrefix="",o.openAfterFocus=!1,o.scrollToFocusedOptionOnUpdate=!1,o.userIsDragging=void 0,o.controlRef=null,o.getControlRef=function(i){o.controlRef=i},o.focusedOptionRef=null,o.getFocusedOptionRef=function(i){o.focusedOptionRef=i},o.menuListRef=null,o.getMenuListRef=function(i){o.menuListRef=i},o.inputRef=null,o.getInputRef=function(i){o.inputRef=i},o.focus=o.focusInput,o.blur=o.blurInput,o.onChange=function(i,a){var s=o.props,u=s.onChange,c=s.name;a.name=c,o.ariaOnChange(i,a),u(i,a)},o.setValue=function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"set-value",s=arguments.length>2?arguments[2]:void 0,u=o.props,c=u.closeMenuOnSelect,l=u.isMulti;o.onInputChange("",{action:"set-value"}),c&&(o.setState({inputIsHiddenAfterUpdate:!l}),o.onMenuClose()),o.setState({clearFocusValueOnUpdate:!0}),o.onChange(i,{action:a,option:s})},o.selectOption=function(i){var a=o.props,s=a.blurInputOnSelect,u=a.isMulti,c=a.name,l=o.state.selectValue,f=u&&o.isOptionSelected(i,l),d=o.isOptionDisabled(i,l);if(f){var p=o.getOptionValue(i);o.setValue(l.filter(function(m){return o.getOptionValue(m)!==p}),"deselect-option",i)}else if(!d)u?o.setValue([].concat(Xl(l),[i]),"select-option",i):o.setValue(i,"select-option");else{o.ariaOnChange(i,{action:"select-option",name:c});return}s&&o.blurInput()},o.removeValue=function(i){var a=o.props.isMulti,s=o.state.selectValue,u=o.getOptionValue(i),c=s.filter(function(f){return o.getOptionValue(f)!==u}),l=a?c:c[0]||null;o.onChange(l,{action:"remove-value",removedValue:i}),o.focusInput()},o.clearValue=function(){var i=o.state.selectValue;o.onChange(o.props.isMulti?[]:null,{action:"clear",removedValues:i})},o.popValue=function(){var i=o.props.isMulti,a=o.state.selectValue,s=a[a.length-1],u=a.slice(0,a.length-1),c=i?u:u[0]||null;o.onChange(c,{action:"pop-value",removedValue:s})},o.getValue=function(){return o.state.selectValue},o.cx=function(){for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return W0.apply(void 0,[o.props.classNamePrefix].concat(a))},o.getOptionLabel=function(i){return dc(o.props,i)},o.getOptionValue=function(i){return Er(o.props,i)},o.getStyles=function(i,a){var s=b1[i](a);s.boxSizing="border-box";var u=o.props.styles[i];return u?u(s,a):s},o.getElementId=function(i){return"".concat(o.instancePrefix,"-").concat(i)},o.getComponents=function(){return Gb(o.props)},o.buildCategorizedOptions=function(){return lc(o.props,o.state.selectValue)},o.getCategorizedOptions=function(){return o.props.menuIsOpen?o.buildCategorizedOptions():[]},o.buildFocusableOptions=function(){return cc(o.buildCategorizedOptions())},o.getFocusableOptions=function(){return o.props.menuIsOpen?o.buildFocusableOptions():[]},o.ariaOnChange=function(i,a){o.setState({ariaSelection:ae({value:i},a)})},o.onMenuMouseDown=function(i){i.button===0&&(i.stopPropagation(),i.preventDefault(),o.focusInput())},o.onMenuMouseMove=function(i){o.blockOptionHover=!1},o.onControlMouseDown=function(i){var a=o.props.openMenuOnClick;o.state.isFocused?o.props.menuIsOpen?i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&o.onMenuClose():a&&o.openMenu("first"):(a&&(o.openAfterFocus=!0),o.focusInput()),i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&i.preventDefault()},o.onDropdownIndicatorMouseDown=function(i){if(!(i&&i.type==="mousedown"&&i.button!==0)&&!o.props.isDisabled){var a=o.props,s=a.isMulti,u=a.menuIsOpen;o.focusInput(),u?(o.setState({inputIsHiddenAfterUpdate:!s}),o.onMenuClose()):o.openMenu("first"),i.preventDefault(),i.stopPropagation()}},o.onClearIndicatorMouseDown=function(i){i&&i.type==="mousedown"&&i.button!==0||(o.clearValue(),i.stopPropagation(),o.openAfterFocus=!1,i.type==="touchend"?o.focusInput():setTimeout(function(){return o.focusInput()}))},o.onScroll=function(i){typeof o.props.closeMenuOnScroll=="boolean"?i.target instanceof HTMLElement&&ii(i.target)&&o.props.onMenuClose():typeof o.props.closeMenuOnScroll=="function"&&o.props.closeMenuOnScroll(i)&&o.props.onMenuClose()},o.onCompositionStart=function(){o.isComposing=!0},o.onCompositionEnd=function(){o.isComposing=!1},o.onTouchStart=function(i){var a=i.touches,s=a&&a.item(0);!s||(o.initialTouchX=s.clientX,o.initialTouchY=s.clientY,o.userIsDragging=!1)},o.onTouchMove=function(i){var a=i.touches,s=a&&a.item(0);if(!!s){var u=Math.abs(s.clientX-o.initialTouchX),c=Math.abs(s.clientY-o.initialTouchY),l=5;o.userIsDragging=u>l||c>l}},o.onTouchEnd=function(i){o.userIsDragging||(o.controlRef&&!o.controlRef.contains(i.target)&&o.menuListRef&&!o.menuListRef.contains(i.target)&&o.blurInput(),o.initialTouchX=0,o.initialTouchY=0)},o.onControlTouchEnd=function(i){o.userIsDragging||o.onControlMouseDown(i)},o.onClearIndicatorTouchEnd=function(i){o.userIsDragging||o.onClearIndicatorMouseDown(i)},o.onDropdownIndicatorTouchEnd=function(i){o.userIsDragging||o.onDropdownIndicatorMouseDown(i)},o.handleInputChange=function(i){var a=i.currentTarget.value;o.setState({inputIsHiddenAfterUpdate:!1}),o.onInputChange(a,{action:"input-change"}),o.props.menuIsOpen||o.onMenuOpen()},o.onInputFocus=function(i){o.props.onFocus&&o.props.onFocus(i),o.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(o.openAfterFocus||o.props.openMenuOnFocus)&&o.openMenu("first"),o.openAfterFocus=!1},o.onInputBlur=function(i){if(o.menuListRef&&o.menuListRef.contains(document.activeElement)){o.inputRef.focus();return}o.props.onBlur&&o.props.onBlur(i),o.onInputChange("",{action:"input-blur"}),o.onMenuClose(),o.setState({focusedValue:null,isFocused:!1})},o.onOptionHover=function(i){o.blockOptionHover||o.state.focusedOption===i||o.setState({focusedOption:i})},o.shouldHideSelectedOptions=function(){return vc(o.props)},o.onKeyDown=function(i){var a=o.props,s=a.isMulti,u=a.backspaceRemovesValue,c=a.escapeClearsValue,l=a.inputValue,f=a.isClearable,d=a.isDisabled,p=a.menuIsOpen,m=a.onKeyDown,b=a.tabSelectsValue,v=a.openMenuOnFocus,S=o.state,C=S.focusedOption,P=S.focusedValue,k=S.selectValue;if(!d&&!(typeof m=="function"&&(m(i),i.defaultPrevented))){switch(o.blockOptionHover=!0,i.key){case"ArrowLeft":if(!s||l)return;o.focusValue("previous");break;case"ArrowRight":if(!s||l)return;o.focusValue("next");break;case"Delete":case"Backspace":if(l)return;if(P)o.removeValue(P);else{if(!u)return;s?o.popValue():f&&o.clearValue()}break;case"Tab":if(o.isComposing||i.shiftKey||!p||!b||!C||v&&o.isOptionSelected(C,k))return;o.selectOption(C);break;case"Enter":if(i.keyCode===229)break;if(p){if(!C||o.isComposing)return;o.selectOption(C);break}return;case"Escape":p?(o.setState({inputIsHiddenAfterUpdate:!1}),o.onInputChange("",{action:"menu-close"}),o.onMenuClose()):f&&c&&o.clearValue();break;case" ":if(l)return;if(!p){o.openMenu("first");break}if(!C)return;o.selectOption(C);break;case"ArrowUp":p?o.focusOption("up"):o.openMenu("last");break;case"ArrowDown":p?o.focusOption("down"):o.openMenu("first");break;case"PageUp":if(!p)return;o.focusOption("pageup");break;case"PageDown":if(!p)return;o.focusOption("pagedown");break;case"Home":if(!p)return;o.focusOption("first");break;case"End":if(!p)return;o.focusOption("last");break;default:return}i.preventDefault()}},o.instancePrefix="react-select-"+(o.props.instanceId||++P1),o.state.selectValue=Ml(r.value),o}return pr(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput()}},{key:"componentDidUpdate",value:function(o){var i=this.props,a=i.isDisabled,s=i.menuIsOpen,u=this.state.isFocused;(u&&!a&&o.isDisabled||u&&s&&!o.menuIsOpen)&&this.focusInput(),u&&a&&!o.isDisabled&&this.setState({isFocused:!1},this.onMenuClose),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Y0(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close"}),this.props.onMenuClose()}},{key:"onInputChange",value:function(o,i){this.props.onInputChange(o,i)}},{key:"focusInput",value:function(){!this.inputRef||this.inputRef.focus()}},{key:"blurInput",value:function(){!this.inputRef||this.inputRef.blur()}},{key:"openMenu",value:function(o){var i=this,a=this.state,s=a.selectValue,u=a.isFocused,c=this.buildFocusableOptions(),l=o==="first"?0:c.length-1;if(!this.props.isMulti){var f=c.indexOf(s[0]);f>-1&&(l=f)}this.scrollToFocusedOptionOnUpdate=!(u&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[l]},function(){return i.onMenuOpen()})}},{key:"focusValue",value:function(o){var i=this.state,a=i.selectValue,s=i.focusedValue;if(!!this.props.isMulti){this.setState({focusedOption:null});var u=a.indexOf(s);s||(u=-1);var c=a.length-1,l=-1;if(!!a.length){switch(o){case"previous":u===0?l=0:u===-1?l=c:l=u-1;break;case"next":u>-1&&u<c&&(l=u+1);break}this.setState({inputIsHidden:l!==-1,focusedValue:a[l]})}}}},{key:"focusOption",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",i=this.props.pageSize,a=this.state.focusedOption,s=this.getFocusableOptions();if(!!s.length){var u=0,c=s.indexOf(a);a||(c=-1),o==="up"?u=c>0?c-1:s.length-1:o==="down"?u=(c+1)%s.length:o==="pageup"?(u=c-i,u<0&&(u=0)):o==="pagedown"?(u=c+i,u>s.length-1&&(u=s.length-1)):o==="last"&&(u=s.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:s[u],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(hi):ae(ae({},hi),this.props.theme):hi}},{key:"getCommonProps",value:function(){var o=this.clearValue,i=this.cx,a=this.getStyles,s=this.getValue,u=this.selectOption,c=this.setValue,l=this.props,f=l.isMulti,d=l.isRtl,p=l.options,m=this.hasValue();return{clearValue:o,cx:i,getStyles:a,getValue:s,hasValue:m,isMulti:f,isRtl:d,options:p,selectOption:u,selectProps:l,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var o=this.state.selectValue;return o.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var o=this.props,i=o.isClearable,a=o.isMulti;return i===void 0?a:i}},{key:"isOptionDisabled",value:function(o,i){return pc(this.props,o,i)}},{key:"isOptionSelected",value:function(o,i){return hc(this.props,o,i)}},{key:"filterOption",value:function(o,i){return mc(this.props,o,i)}},{key:"formatOptionLabel",value:function(o,i){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,s=this.state.selectValue;return this.props.formatOptionLabel(o,{context:i,inputValue:a,selectValue:s})}else return this.getOptionLabel(o)}},{key:"formatGroupLabel",value:function(o){return this.props.formatGroupLabel(o)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var o=this.props,i=o.isDisabled,a=o.isSearchable,s=o.inputId,u=o.inputValue,c=o.tabIndex,l=o.form,f=this.getComponents(),d=f.Input,p=this.state.inputIsHidden,m=this.commonProps,b=s||this.getElementId("input"),v={"aria-autocomplete":"list","aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"]};return a?g.createElement(d,T({},m,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:b,innerRef:this.getInputRef,isDisabled:i,isHidden:p,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:l,type:"text",value:u},v)):g.createElement(u1,T({id:b,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:yr,onFocus:this.onInputFocus,readOnly:!0,disabled:i,tabIndex:c,form:l,value:""},v))}},{key:"renderPlaceholderOrValue",value:function(){var o=this,i=this.getComponents(),a=i.MultiValue,s=i.MultiValueContainer,u=i.MultiValueLabel,c=i.MultiValueRemove,l=i.SingleValue,f=i.Placeholder,d=this.commonProps,p=this.props,m=p.controlShouldRenderValue,b=p.isDisabled,v=p.isMulti,S=p.inputValue,C=p.placeholder,P=this.state,k=P.selectValue,x=P.focusedValue,F=P.isFocused;if(!this.hasValue()||!m)return S?null:g.createElement(f,T({},d,{key:"placeholder",isDisabled:b,isFocused:F}),C);if(v){var $=k.map(function(z,de){var Y=z===x;return g.createElement(a,T({},d,{components:{Container:s,Label:u,Remove:c},isFocused:Y,isDisabled:b,key:"".concat(o.getOptionValue(z)).concat(de),index:de,removeProps:{onClick:function(){return o.removeValue(z)},onTouchEnd:function(){return o.removeValue(z)},onMouseDown:function(K){K.preventDefault(),K.stopPropagation()}},data:z}),o.formatOptionLabel(z,"value"))});return $}if(S)return null;var J=k[0];return g.createElement(l,T({},d,{data:J,isDisabled:b}),this.formatOptionLabel(J,"value"))}},{key:"renderClearIndicator",value:function(){var o=this.getComponents(),i=o.ClearIndicator,a=this.commonProps,s=this.props,u=s.isDisabled,c=s.isLoading,l=this.state.isFocused;if(!this.isClearable()||!i||u||!this.hasValue()||c)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return g.createElement(i,T({},a,{innerProps:f,isFocused:l}))}},{key:"renderLoadingIndicator",value:function(){var o=this.getComponents(),i=o.LoadingIndicator,a=this.commonProps,s=this.props,u=s.isDisabled,c=s.isLoading,l=this.state.isFocused;if(!i||!c)return null;var f={"aria-hidden":"true"};return g.createElement(i,T({},a,{innerProps:f,isDisabled:u,isFocused:l}))}},{key:"renderIndicatorSeparator",value:function(){var o=this.getComponents(),i=o.DropdownIndicator,a=o.IndicatorSeparator;if(!i||!a)return null;var s=this.commonProps,u=this.props.isDisabled,c=this.state.isFocused;return g.createElement(a,T({},s,{isDisabled:u,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var o=this.getComponents(),i=o.DropdownIndicator;if(!i)return null;var a=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return g.createElement(i,T({},a,{innerProps:c,isDisabled:s,isFocused:u}))}},{key:"renderMenu",value:function(){var o=this,i=this.getComponents(),a=i.Group,s=i.GroupHeading,u=i.Menu,c=i.MenuList,l=i.MenuPortal,f=i.LoadingMessage,d=i.NoOptionsMessage,p=i.Option,m=this.commonProps,b=this.state.focusedOption,v=this.props,S=v.captureMenuScroll,C=v.inputValue,P=v.isLoading,k=v.loadingMessage,x=v.minMenuHeight,F=v.maxMenuHeight,$=v.menuIsOpen,J=v.menuPlacement,z=v.menuPosition,de=v.menuPortalTarget,Y=v.menuShouldBlockScroll,q=v.menuShouldScrollIntoView,K=v.noOptionsMessage,pe=v.onMenuScrollToTop,Be=v.onMenuScrollToBottom;if(!$)return null;var me=function(_,E){var w=_.type,O=_.data,D=_.isDisabled,I=_.isSelected,G=_.label,W=_.value,et=b===O,Ye=D?void 0:function(){return o.onOptionHover(O)},tt=D?void 0:function(){return o.selectOption(O)},He="".concat(o.getElementId("option"),"-").concat(E),fn={id:He,onClick:tt,onMouseMove:Ye,onMouseOver:Ye,tabIndex:-1};return g.createElement(p,T({},m,{innerProps:fn,data:O,isDisabled:D,isSelected:I,key:He,label:G,type:w,value:W,isFocused:et,innerRef:et?o.getFocusedOptionRef:void 0}),o.formatOptionLabel(_.data,"menu"))},oe;if(this.hasOptions())oe=this.getCategorizedOptions().map(function(y){if(y.type==="group"){var _=y.data,E=y.options,w=y.index,O="".concat(o.getElementId("group"),"-").concat(w),D="".concat(O,"-heading");return g.createElement(a,T({},m,{key:O,data:_,options:E,Heading:s,headingProps:{id:D,data:y.data},label:o.formatGroupLabel(y.data)}),y.options.map(function(I){return me(I,"".concat(w,"-").concat(I.index))}))}else if(y.type==="option")return me(y,"".concat(y.index))});else if(P){var cn=k({inputValue:C});if(cn===null)return null;oe=g.createElement(f,m,cn)}else{var Ve=K({inputValue:C});if(Ve===null)return null;oe=g.createElement(d,m,Ve)}var xe={minMenuHeight:x,maxMenuHeight:F,menuPlacement:J,menuPosition:z,menuShouldScrollIntoView:q},mt=g.createElement(Ll,T({},m,xe),function(y){var _=y.ref,E=y.placerProps,w=E.placement,O=E.maxHeight;return g.createElement(u,T({},m,xe,{innerRef:_,innerProps:{onMouseDown:o.onMenuMouseDown,onMouseMove:o.onMenuMouseMove},isLoading:P,placement:w}),g.createElement(h1,{captureEnabled:S,onTopArrive:pe,onBottomArrive:Be,lockEnabled:Y},function(D){return g.createElement(c,T({},m,{innerRef:function(G){o.getMenuListRef(G),D(G)},isLoading:P,maxHeight:O,focusedOption:b}),oe)}))});return de||z==="fixed"?g.createElement(l,T({},m,{appendTo:de,controlElement:this.controlRef,menuPlacement:J,menuPosition:z}),mt):mt}},{key:"renderFormField",value:function(){var o=this,i=this.props,a=i.delimiter,s=i.isDisabled,u=i.isMulti,c=i.name,l=this.state.selectValue;if(!(!c||s))if(u)if(a){var f=l.map(function(m){return o.getOptionValue(m)}).join(a);return g.createElement("input",{name:c,type:"hidden",value:f})}else{var d=l.length>0?l.map(function(m,b){return g.createElement("input",{key:"i-".concat(b),name:c,type:"hidden",value:o.getOptionValue(m)})}):g.createElement("input",{name:c,type:"hidden"});return g.createElement("div",null,d)}else{var p=l[0]?this.getOptionValue(l[0]):"";return g.createElement("input",{name:c,type:"hidden",value:p})}}},{key:"renderLiveRegion",value:function(){var o=this.commonProps,i=this.state,a=i.ariaSelection,s=i.focusedOption,u=i.focusedValue,c=i.isFocused,l=i.selectValue,f=this.getFocusableOptions();return g.createElement(r1,T({},o,{ariaSelection:a,focusedOption:s,focusedValue:u,isFocused:c,selectValue:l,focusableOptions:f}))}},{key:"render",value:function(){var o=this.getComponents(),i=o.Control,a=o.IndicatorsContainer,s=o.SelectContainer,u=o.ValueContainer,c=this.props,l=c.className,f=c.id,d=c.isDisabled,p=c.menuIsOpen,m=this.state.isFocused,b=this.commonProps=this.getCommonProps();return g.createElement(s,T({},b,{className:l,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:d,isFocused:m}),this.renderLiveRegion(),g.createElement(i,T({},b,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:d,isFocused:m,menuIsOpen:p}),g.createElement(u,T({},b,{isDisabled:d}),this.renderPlaceholderOrValue(),this.renderInput()),g.createElement(a,T({},b,{isDisabled:d}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(o,i){var a=i.prevProps,s=i.clearFocusValueOnUpdate,u=i.inputIsHiddenAfterUpdate,c=o.options,l=o.value,f=o.menuIsOpen,d=o.inputValue,p={};if(a&&(l!==a.value||c!==a.options||f!==a.menuIsOpen||d!==a.inputValue)){var m=Ml(l),b=f?O1(o,m):[],v=s?x1(i,m):null,S=$1(i,b);p={selectValue:m,focusedOption:S,focusedValue:v,clearFocusValueOnUpdate:!1}}var C=u!=null&&o!==a?{inputIsHidden:u,inputIsHiddenAfterUpdate:void 0}:{};return ae(ae(ae({},p),C),{},{prevProps:o})}}]),n}(Q);gc.defaultProps=w1;var D1={defaultInputValue:"",defaultMenuIsOpen:!1,defaultValue:null},T1=function(e){var n,r;return r=n=function(o){mr(a,o);var i=gr(a);function a(){var s;dr(this,a);for(var u=arguments.length,c=new Array(u),l=0;l<u;l++)c[l]=arguments[l];return s=i.call.apply(i,[this].concat(c)),s.select=void 0,s.state={inputValue:s.props.inputValue!==void 0?s.props.inputValue:s.props.defaultInputValue,menuIsOpen:s.props.menuIsOpen!==void 0?s.props.menuIsOpen:s.props.defaultMenuIsOpen,value:s.props.value!==void 0?s.props.value:s.props.defaultValue},s.onChange=function(f,d){s.callProp("onChange",f,d),s.setState({value:f})},s.onInputChange=function(f,d){var p=s.callProp("onInputChange",f,d);s.setState({inputValue:p!==void 0?p:f})},s.onMenuOpen=function(){s.callProp("onMenuOpen"),s.setState({menuIsOpen:!0})},s.onMenuClose=function(){s.callProp("onMenuClose"),s.setState({menuIsOpen:!1})},s}return pr(a,[{key:"focus",value:function(){this.select.focus()}},{key:"blur",value:function(){this.select.blur()}},{key:"getProp",value:function(u){return this.props[u]!==void 0?this.props[u]:this.state[u]}},{key:"callProp",value:function(u){if(typeof this.props[u]=="function"){for(var c,l=arguments.length,f=new Array(l>1?l-1:0),d=1;d<l;d++)f[d-1]=arguments[d];return(c=this.props)[u].apply(c,f)}}},{key:"render",value:function(){var u=this,c=this.props;c.defaultInputValue,c.defaultMenuIsOpen,c.defaultValue;var l=Rt(c,["defaultInputValue","defaultMenuIsOpen","defaultValue"]);return g.createElement(e,T({},l,{ref:function(d){u.select=d},inputValue:this.getProp("inputValue"),menuIsOpen:this.getProp("menuIsOpen"),onChange:this.onChange,onInputChange:this.onInputChange,onMenuClose:this.onMenuClose,onMenuOpen:this.onMenuOpen,value:this.getProp("value")}))}}]),a}(Q),n.defaultProps=D1,r},M1=T1(gc),F1=M1;const mi=[{value:"assessing",label:"Assessing"},{value:"bookmarking",label:"Bookmarking"},{value:"classifying",label:"Classifying"},{value:"commenting",label:"Commenting"},{value:"describing",label:"Describing"},{value:"editing",label:"Editing"},{value:"highlighting",label:"Highlighting"},{value:"identifying",label:"Identifying"},{value:"linking",label:"Linking"},{value:"moderating",label:"Moderating"},{value:"questioning",label:"Questioning"},{value:"replying",label:"Replying"},{value:"supplementing",label:"Transcription"}];var yc=t=>{const e=t.content?mi.find(n=>n.value===t.content):null;return g.createElement("div",{className:"r6o-purposedropdown"},g.createElement(F1,{value:e,onChange:t.onChange,options:mi,isDisabled:!t.editable}))};const k1=t=>g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 940",width:t.width},g.createElement("metadata",null,"IcoFont Icons"),g.createElement("title",null,"simple-down"),g.createElement("glyph",{glyphName:"simple-down",unicode:"\uEAB2",horizAdvX:"1000"}),g.createElement("path",{fill:"currentColor",d:"M200 392.6l300 300 300-300-85.10000000000002-85.10000000000002-214.89999999999998 214.79999999999995-214.89999999999998-214.89999999999998-85.10000000000002 85.20000000000005z"})),I1=t=>g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"180 150 700 800",width:t.width},g.createElement("metadata",null,"IcoFont Icons"),g.createElement("title",null,"close"),g.createElement("glyph",{glyphName:"close",unicode:"\uEEE4",horizAdvX:"1000"}),g.createElement("path",{fill:"currentColor",d:"M709.8 206.6c-64.39999999999998 65.50000000000003-128.89999999999998 131.20000000000002-194.19999999999993 197.6-8.600000000000023 8.699999999999989-22.400000000000034 8.800000000000011-31 0-65-66-129.70000000000005-131.8-194.5-197.6-8.600000000000023-8.699999999999989-22.400000000000034-8.599999999999994-30.900000000000034 0.09999999999999432-15.699999999999989 16.200000000000017-31.099999999999994 32.30000000000001-47.099999999999994 48.80000000000001-8.5 8.800000000000011-8.299999999999983 23 0.20000000000001705 31.69999999999999 63.099999999999966 64.19999999999999 127.89999999999998 130.10000000000002 193.59999999999997 197 8.600000000000023 8.699999999999989 8.5 22.80000000000001 0 31.599999999999966-65.19999999999999 66.40000000000009-130.2 132.5-194.7 198.10000000000002-8.5 8.700000000000045-8.5 22.800000000000068 0.20000000000001705 31.399999999999977l47.79999999999998 47.90000000000009c8.600000000000023 8.599999999999909 22.600000000000023 8.599999999999909 31.100000000000023-0.10000000000002274l194.2-197.30000000000007c8.600000000000023-8.699999999999932 22.399999999999977-8.699999999999932 31 0 64.70000000000005 65.80000000000007 129.20000000000005 131.4000000000001 194.20000000000005 197.5 8.599999999999909 8.700000000000045 22.5 8.800000000000068 31 0.10000000000002274 16-16.199999999999932 31.699999999999932-32.19999999999993 47.59999999999991-48.299999999999955 8.600000000000023-8.700000000000045 8.600000000000023-22.899999999999977 0.10000000000002274-31.600000000000023-63.799999999999955-65-128.5-130.89999999999998-194.19999999999993-197.79999999999995-8.600000000000023-8.700000000000045-8.600000000000023-22.900000000000034 0-31.600000000000023 65.19999999999993-66.40000000000003 130.0999999999999-132.5 194.5-198.20000000000005 8.599999999999909-8.699999999999989 8.5-22.799999999999955-0.10000000000002274-31.49999999999997l-47.80000000000007-48.099999999999994c-8.5-8.5-22.399999999999977-8.400000000000006-31 0.29999999999998295z"})),R1=t=>g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:t.width},g.createElement("path",{fill:"currentColor",d:"M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"}));var N1=t=>{const[e,n]=ze(!1),[r,o]=ze(!1),i=f=>{n(!0),o(!1)},a=f=>{t.onDelete(t.body),o(!1)},s=f=>t.onUpdate(t.body,$e(N({},t.body),{value:f.target.value})),u=f=>t.onUpdate(t.body,$e(N({},t.body),{purpose:f.value})),c=t.body.modified||t.body.created,l=t.body.creator&&g.createElement("div",{className:"r6o-lastmodified"},g.createElement("span",{className:"r6o-lastmodified-by"},t.body.creator.name||t.body.creator.id),t.body.created&&g.createElement("span",{className:"r6o-lastmodified-at"},g.createElement(qd,{datetime:t.env.toClientTime(c),locale:Ee.locale()})));return t.readOnly?g.createElement("div",{className:"r6o-widget comment"},g.createElement("div",{className:"r6o-readonly-comment"},t.body.value),l):g.createElement("div",{className:e?"r6o-widget comment editable":"r6o-widget comment"},g.createElement(Zu,{editable:e,content:t.body.value,onChange:s,onSaveAndClose:t.onSaveAndClose}),!e&&l,t.purposeSelector&&g.createElement(yc,{editable:e,content:t.body.purpose,onChange:u,onSaveAndClose:t.onSaveAndClose}),g.createElement("div",{className:r?"r6o-icon r6o-arrow-down r6o-menu-open":"r6o-icon r6o-arrow-down",onClick:()=>o(!r)},g.createElement(k1,{width:12})),r&&g.createElement(Ay,{onEdit:i,onDelete:a,onClickOutside:()=>o(!1)}))};const L1=mi.map(t=>t.value),bc=(t,e)=>{const n=e?L1.indexOf(t.purpose)>-1:t.purpose=="commenting"||t.purpose=="replying";return t.type==="TextualBody"&&(!t.hasOwnProperty("purpose")||n)},Sc=(t,e)=>{var n,r;if(e.editable===!0)return!1;if(e.editable===!1)return!0;if(e.editable==="MINE_ONLY"){const o=(n=t.creator)==null?void 0:n.id;return((r=e.env.user)==null?void 0:r.id)!==o}return e.readOnly},B1=(t,e)=>t||{type:"TextualBody",value:"",purpose:e?"replying":"commenting",draft:!0},_c=t=>{const e=t.annotation?t.annotation.bodies.filter(a=>bc(a,t.purposeSelector)):[],n=B1(e.find(a=>a.draft==!0),e.length>1),r=e.filter(a=>a!=n),o=a=>{const s=n.value,u=a.target.value;s.length===0&&u.length>0?t.onAppendBody($e(N({},n),{value:u})):s.length>0&&u.length===0?t.onRemoveBody(n):t.onUpdateBody(n,$e(N({},n),{value:u}))},i=a=>t.onUpdateBody(n,$e(N({},n),{purpose:a.value}));return g.createElement(g.Fragment,null,r.map((a,s)=>g.createElement(N1,{key:s,env:t.env,purposeSelector:t.purposeSelector,readOnly:Sc(a,t),body:a,onUpdate:t.onUpdateBody,onDelete:t.onRemoveBody,onSaveAndClose:t.onSaveAndClose})),!t.readOnly&&t.annotation&&g.createElement("div",{className:"r6o-widget comment editable"},g.createElement(Zu,{focus:t.focus,content:n.value,editable:!0,placeholder:r.length>0?Ee.t("Add a reply..."):Ee.t("Add a comment..."),onChange:o,onSaveAndClose:()=>t.onSaveAndClose()}),t.purposeSelector&&n.value.length>0&&g.createElement(yc,{editable:!0,content:n.purpose,onChange:i,onSaveAndClose:()=>t.onSaveAndClose()})))};_c.disableDelete=(t,e)=>t.bodies.filter(r=>bc(r,e.purposeSelector)).some(r=>Sc(r,e));var Ec=_c;function Cc(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,hr(t,e)}function V1(t,e){return t.classList?!!e&&t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function H1(t,e){t.classList?t.classList.add(e):V1(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function Ac(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function U1(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=Ac(t.className,e):t.setAttribute("class",Ac(t.className&&t.className.baseVal||"",e))}var wc={disabled:!1},Oc=g.createContext(null),un="unmounted",dt="exited",pt="entering",Lt="entered",vi="exiting",qe=function(t){Cc(e,t);function e(r,o){var i;i=t.call(this,r,o)||this;var a=o,s=a&&!a.isMounting?r.enter:r.appear,u;return i.appearStatus=null,r.in?s?(u=dt,i.appearStatus=pt):u=Lt:r.unmountOnExit||r.mountOnEnter?u=un:u=dt,i.state={status:u},i.nextCallback=null,i}e.getDerivedStateFromProps=function(o,i){var a=o.in;return a&&i.status===un?{status:dt}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var a=this.state.status;this.props.in?a!==pt&&a!==Lt&&(i=pt):(a===pt||a===Lt)&&(i=vi)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,a,s;return i=a=s=o,o!=null&&typeof o!="number"&&(i=o.exit,a=o.enter,s=o.appear!==void 0?o.appear:a),{exit:i,enter:a,appear:s}},n.updateStatus=function(o,i){o===void 0&&(o=!1),i!==null?(this.cancelNextCallback(),i===pt?this.performEnter(o):this.performExit()):this.props.unmountOnExit&&this.state.status===dt&&this.setState({status:un})},n.performEnter=function(o){var i=this,a=this.props.enter,s=this.context?this.context.isMounting:o,u=this.props.nodeRef?[s]:[g.findDOMNode(this),s],c=u[0],l=u[1],f=this.getTimeouts(),d=s?f.appear:f.enter;if(!o&&!a||wc.disabled){this.safeSetState({status:Lt},function(){i.props.onEntered(c)});return}this.props.onEnter(c,l),this.safeSetState({status:pt},function(){i.props.onEntering(c,l),i.onTransitionEnd(d,function(){i.safeSetState({status:Lt},function(){i.props.onEntered(c,l)})})})},n.performExit=function(){var o=this,i=this.props.exit,a=this.getTimeouts(),s=this.props.nodeRef?void 0:g.findDOMNode(this);if(!i||wc.disabled){this.safeSetState({status:dt},function(){o.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:vi},function(){o.props.onExiting(s),o.onTransitionEnd(a.exit,function(){o.safeSetState({status:dt},function(){o.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,a=!0;return this.nextCallback=function(s){a&&(a=!1,i.nextCallback=null,o(s))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this),s=o==null&&!this.props.addEndListener;if(!a||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],c=u[0],l=u[1];this.props.addEndListener(c,l)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===un)return null;var i=this.props,a=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=ti(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return g.createElement(Oc.Provider,{value:null},typeof a=="function"?a(o,s):g.cloneElement(g.Children.only(a),s))},e}(g.Component);qe.contextType=Oc,qe.propTypes={};function Bt(){}qe.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Bt,onEntering:Bt,onEntered:Bt,onExit:Bt,onExiting:Bt,onExited:Bt},qe.UNMOUNTED=un,qe.EXITED=dt,qe.ENTERING=pt,qe.ENTERED=Lt,qe.EXITING=vi;var z1=qe,j1=function(e,n){return e&&n&&n.split(" ").forEach(function(r){return H1(e,r)})},gi=function(e,n){return e&&n&&n.split(" ").forEach(function(r){return U1(e,r)})},yi=function(t){Cc(e,t);function e(){for(var r,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=t.call.apply(t,[this].concat(i))||this,r.appliedClasses={appear:{},enter:{},exit:{}},r.onEnter=function(s,u){var c=r.resolveArguments(s,u),l=c[0],f=c[1];r.removeClasses(l,"exit"),r.addClass(l,f?"appear":"enter","base"),r.props.onEnter&&r.props.onEnter(s,u)},r.onEntering=function(s,u){var c=r.resolveArguments(s,u),l=c[0],f=c[1],d=f?"appear":"enter";r.addClass(l,d,"active"),r.props.onEntering&&r.props.onEntering(s,u)},r.onEntered=function(s,u){var c=r.resolveArguments(s,u),l=c[0],f=c[1],d=f?"appear":"enter";r.removeClasses(l,d),r.addClass(l,d,"done"),r.props.onEntered&&r.props.onEntered(s,u)},r.onExit=function(s){var u=r.resolveArguments(s),c=u[0];r.removeClasses(c,"appear"),r.removeClasses(c,"enter"),r.addClass(c,"exit","base"),r.props.onExit&&r.props.onExit(s)},r.onExiting=function(s){var u=r.resolveArguments(s),c=u[0];r.addClass(c,"exit","active"),r.props.onExiting&&r.props.onExiting(s)},r.onExited=function(s){var u=r.resolveArguments(s),c=u[0];r.removeClasses(c,"exit"),r.addClass(c,"exit","done"),r.props.onExited&&r.props.onExited(s)},r.resolveArguments=function(s,u){return r.props.nodeRef?[r.props.nodeRef.current,s]:[s,u]},r.getClassNames=function(s){var u=r.props.classNames,c=typeof u=="string",l=c&&u?u+"-":"",f=c?""+l+s:u[s],d=c?f+"-active":u[s+"Active"],p=c?f+"-done":u[s+"Done"];return{baseClassName:f,activeClassName:d,doneClassName:p}},r}var n=e.prototype;return n.addClass=function(o,i,a){var s=this.getClassNames(i)[a+"ClassName"],u=this.getClassNames("enter"),c=u.doneClassName;i==="appear"&&a==="done"&&c&&(s+=" "+c),a==="active"&&o&&o.scrollTop,s&&(this.appliedClasses[i][a]=s,j1(o,s))},n.removeClasses=function(o,i){var a=this.appliedClasses[i],s=a.base,u=a.active,c=a.done;this.appliedClasses[i]={},s&&gi(o,s),u&&gi(o,u),c&&gi(o,c)},n.render=function(){var o=this.props;o.classNames;var i=ti(o,["classNames"]);return g.createElement(z1,T({},i,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(g.Component);yi.defaultProps={classNames:""},yi.propTypes={};var W1=yi;const G1=(t,e)=>e.filter(n=>(n.label?n.label:n).toLowerCase().startsWith(t.toLowerCase())),q1=(t,e)=>e(t);var Y1=t=>{const e=Te(),[n,r]=ze(t.initialValue||""),[o,i]=ze([]),[a,s]=ze(null);rt(()=>{t.focus&&e.current.querySelector("input").focus({preventScroll:!0})},[]),rt(()=>{t.onChange&&t.onChange(n)},[n]);const u=d=>{if(typeof t.vocabulary=="function"){const p=q1(d,t.vocabulary);p.then?p.then(i):i(p)}else{const p=G1(d,t.vocabulary);i(p)}},c=()=>{if(a!==null)t.onSubmit(o[a]);else{const d=n.trim();if(d){const p=Array.isArray(t.vocabulary)?t.vocabulary.find(m=>(m.label||m).toLowerCase()===d.toLowerCase()):null;p?t.onSubmit(p):t.onSubmit(d)}}r(""),i([]),s(null)},l=d=>{if(d.which===13)c();else if(d.which===27)t.onCancel&&t.onCancel();else if(o.length>0){if(d.which===38)if(a===null)s(0);else{const p=Math.max(0,a-1);s(p)}else if(d.which===40)if(a===null)s(0);else{const p=Math.min(o.length-1,a+1);s(p)}}else d.which===40&&Array.isArray(t.vocabulary)&&i(t.vocabulary)},f=d=>{const{value:p}=d.target;r(p),s(null),p?u(p):i([])};return g.createElement("div",{ref:e,className:"r6o-autocomplete"},g.createElement("div",null,g.createElement("input",{onKeyDown:l,onChange:f,value:n,placeholder:t.placeholder})),g.createElement("ul",null,o.length>0&&o.map((d,p)=>g.createElement("li",{key:`${d.label?d.label:d}${p}`,onClick:c,onMouseEnter:()=>s(p),style:a===p?{backgroundColor:"#bde4ff"}:{}},d.label?d.label:d))))};const X1=t=>t||{type:"TextualBody",value:"",purpose:"tagging",draft:!0};var xc=t=>{const e=t.annotation?t.annotation.bodies.filter(f=>f.purpose==="tagging"):[],n=X1(e.slice().reverse().find(f=>f.draft)),r=e.filter(f=>f!=n),[o,i]=ze(!1),a=f=>d=>{i(o===f?!1:f)},s=f=>{const d=n.value.trim(),p=f.trim();d.length===0&&p.length>0?t.onAppendBody($e(N({},n),{value:p})):d.length>0&&p.length===0?t.onRemoveBody(n):t.onUpdateBody(n,$e(N({},n),{value:p}))},u=f=>d=>{d.stopPropagation(),t.onRemoveBody(f)},c=f=>{const d=f.uri?{type:"SpecificResource",purpose:"tagging",source:{id:f.uri,label:f.label}}:{type:"TextualBody",purpose:"tagging",value:f.label||f};n.value.trim().length===0?t.onAppendBody(d):t.onUpdateBody(n,d)},l=f=>f.value||f.source.label;return g.createElement("div",{className:"r6o-widget r6o-tag"},r.length>0&&g.createElement("ul",{className:"r6o-taglist"},r.map(f=>g.createElement("li",{key:l(f),onClick:a(f)},g.createElement("span",{className:"r6o-label"},l(f)),!t.readOnly&&g.createElement(W1,{in:o===f,timeout:200,classNames:"r6o-delete"},g.createElement("span",{className:"r6o-delete-wrapper",onClick:u(f)},g.createElement("span",{className:"r6o-delete"},g.createElement(I1,{width:12}))))))),!t.readOnly&&g.createElement(Y1,{focus:t.focus,placeholder:Ee.t("Add tag..."),vocabulary:t.vocabulary||[],onChange:s,onSubmit:c}))};class $c extends Q{constructor(e){super(e);this.element=g.createRef()}renderWidget(e){const n=this.props.widget($e(N({annotation:e.annotation,readOnly:e.readOnly},e.config),{onAppendBody:(r,o)=>e.onAppendBody(r,o),onUpdateBody:(r,o,i)=>e.onUpdateBody(r,o,i),onUpsertBody:(r,o,i)=>e.onUpsertBody(r,o,i),onRemoveBody:(r,o)=>e.onRemoveBody(r,o),onBatchModify:(r,o)=>e.onBatchModify(r,o),onSetProperty:(r,o)=>e.onSetProperty(r,o),onSaveAndClose:()=>e.onSaveAndClose()}));for(;this.element.current.firstChild;)this.element.current.removeChild(this.element.current.lastChild);this.element.current.appendChild(n)}componentDidMount(){this.renderWidget(this.props)}componentWillReceiveProps(e){this.element.current&&this.props.annotation!==e.annotation&&this.renderWidget(e)}render(){return g.createElement("div",{ref:this.element,className:"widget"})}}window.React=g,window.ReactDOM=g;const K1={COMMENT:Ec,TAG:xc},J1=[g.createElement(Ec,null),g.createElement(xc,null)],Z1=t=>{const e=r=>{var o;return typeof r=="function"&&!!((o=r.prototype)==null?void 0:o.isReactComponent)},n=r=>typeof r=="function"&&(String(r).match(/return .+\(['|"].+['|"],\s*\{/g)||String(r).match(/return .+preact_compat/)||String(r).match(/return .+\.createElement/g));return e(t)||n(t)},Q1=t=>{const e=(r,o,i)=>{if(typeof r=="string"||r instanceof String)return g.createElement(K1[r],o);if((i==null?void 0:i.toLowerCase())==="react")return g.createElement(r,o);if((i==null?void 0:i.toLowerCase())==="plainjs")return g.createElement($c,{widget:r,config:o});if(Z1(r))return g.createElement(r,o);if(typeof r=="function"||r instanceof Function)return g.createElement($c,{widget:r,config:o});throw`${r} is not a valid plugin`};if(t.widget){const n=t,{widget:r,force:o}=n,i=xi(n,["widget","force"]);return e(r,i,o)}else return e(t)},Pc=14;var Dc=(t,e,n,r)=>{const o=t.getBoundingClientRect();e.className="r6o-editor r6o-arrow-top r6o-arrow-left";const{left:i,top:a,right:s,bottom:u}=n.getBoundingClientRect();if(e.style.top=`${u-o.top+Pc}px`,e.style.left=`${i-o.left}px`,r){const c=e.children[1].getBoundingClientRect();if(c.right>window.innerWidth&&(e.classList.remove("r6o-arrow-left"),e.classList.add("r6o-arrow-right"),e.style.left=`${s-c.width-o.left}px`),c.bottom>window.innerHeight){e.classList.remove("r6o-arrow-top"),e.classList.add("r6o-arrow-bottom");const f=e.children[1].getBoundingClientRect().height;e.style.top=`${a-o.top-f-Pc}px`}const l=e.children[1].getBoundingClientRect();if(l.top<0){e.classList.add("pushed","down"),e.style.top=`${-o.top}px`;const f=u-o.top;l.height-o.top>f&&e.classList.remove("r6o-arrow-bottom")}l.left<0&&(e.classList.add("pushed","right"),e.style.left=`${-o.left}px`),requestAnimationFrame(()=>e.style.opacity=1)}};const Tc=t=>{const{top:e,left:n,width:r,height:o}=t.getBoundingClientRect();return`${e}, ${n}, ${r}, ${o}`};class eS extends Q{constructor(e){super(e);h(this,"initResizeObserver",()=>{const e=this.props.autoPosition===void 0?!0:this.props.autoPosition;if(window==null?void 0:window.ResizeObserver){const n=new ResizeObserver(()=>{this.state.dragged||Dc(this.props.wrapperEl,this.element.current,this.props.selectedElement,e)});return n.observe(this.props.wrapperEl),()=>n.disconnect()}else this.state.dragged||Dc(this.props.wrapperEl,this.element.current,this.props.selectedElement,e)});h(this,"creationMeta",e=>{const n={},{user:r}=this.props.env;return r&&(n.creator={},r.id&&(n.creator.id=r.id),r.displayName&&(n.creator.name=r.displayName),n[e.created?"modified":"created"]=this.props.env.getCurrentTimeAdjusted()),n});h(this,"getCurrentAnnotation",()=>this.state.currentAnnotation.clone());h(this,"updateCurrentAnnotation",(e,n)=>this.setState({currentAnnotation:this.state.currentAnnotation.clone(e)},()=>{n&&this.onOk()}));h(this,"onAppendBody",(e,n)=>this.updateCurrentAnnotation({body:[...this.state.currentAnnotation.bodies,N(N({},e),this.creationMeta(e))]},n));h(this,"onUpdateBody",(e,n,r)=>this.updateCurrentAnnotation({body:this.state.currentAnnotation.bodies.map(o=>o===e?N(N({},n),this.creationMeta(n)):o)},r));h(this,"onRemoveBody",(e,n)=>this.updateCurrentAnnotation({body:this.state.currentAnnotation.bodies.filter(r=>r!==e)},n));h(this,"onUpsertBody",(e,n,r)=>{if(e==null&&n!=null)this.onAppendBody(n,r);else if(e!=null&&n!=null)this.onUpdateBody(e,n,r);else if(e!=null&&n==null){const o=this.state.currentAnnotation.bodies.find(i=>i.purpose===e.purpose);o?this.onUpdateBody(o,e,r):this.onAppendBody(e,r)}});h(this,"onBatchModify",(e,n)=>{const r=e.filter(u=>u.action==="upsert"&&u.body).map(u=>({previous:this.state.currentAnnotation.bodies.find(c=>c.purpose===u.body.purpose),updated:N(N({},u.body),this.creationMeta(u.body))})),o=e.filter(u=>u.action==="remove").map(u=>u.body),i=[...e.filter(u=>u.action==="append"||u.action==="upsert"&&u.updated&&!u.previous).map(u=>N(N({},u.body),this.creationMeta(u.body))),...r.filter(u=>!u.previous).map(u=>u.updated)],a=[...e.filter(u=>u.action==="update"||u.action==="upsert"&&u.updated&&u.previous).map(u=>({previous:u.previous,updated:N(N({},u.updated),this.creationMeta(u.updated))})),...r.filter(u=>u.previous)],s=[...this.state.currentAnnotation.bodies.filter(u=>!o.includes(u)).map(u=>{const c=a.find(l=>l.previous===u);return c?c.updated:u}),...i];this.updateCurrentAnnotation({body:s},n)});h(this,"onSetProperty",(e,n)=>{if(["@context","id","type","body","target"].includes(e))throw new Exception(`Cannot set ${e} - not allowed`);if(n)this.updateCurrentAnnotation({[e]:n});else{const o=this.currentAnnotation.clone();delete o[e],this.setState({currentAnnotation:o})}});h(this,"onCancel",()=>this.props.onCancel(this.props.annotation));h(this,"onOk",()=>{const e=r=>r.clone({body:r.bodies.map(a=>{var s=a,{draft:o}=s,i=xi(s,["draft"]);return i})}),{currentAnnotation:n}=this.state;n.bodies.length===0&&!this.props.allowEmpty?n.isSelection?this.onCancel():this.props.onAnnotationDeleted(this.props.annotation):n.isSelection?this.props.onAnnotationCreated(e(n).toAnnotation()):this.props.onAnnotationUpdated(e(n),this.props.annotation)});h(this,"onDelete",()=>this.props.onAnnotationDeleted(this.props.annotation));this.element=g.createRef(),this.state={currentAnnotation:e.annotation,dragged:!1,selectionBounds:Tc(e.selectedElement)}}componentWillReceiveProps(e){var o;const{selectionBounds:n}=this.state,r=Tc(e.selectedElement);((o=this.props.annotation)==null?void 0:o.isEqual(e.annotation))?this.setState({selectionBounds:r}):this.setState({currentAnnotation:e.annotation,selectionBounds:r}),this.props.modifiedTarget!=e.modifiedTarget&&this.state.currentAnnotation&&this.updateCurrentAnnotation({target:this.props.modifiedTarget}),n!=r&&this.element.current&&(this.removeObserver&&this.removeObserver(),this.removeObserver=this.initResizeObserver())}componentDidMount(){this.removeObserver=this.initResizeObserver(),new MutationObserver(()=>{this.element.current&&(this.removeObserver&&this.removeObserver(),this.removeObserver=this.initResizeObserver())}).observe(this.element.current,{childList:!0,subtree:!0})}componentWillUnmount(){this.removeObserver&&this.removeObserver()}render(){const{currentAnnotation:e}=this.state,n=this.props.widgets?this.props.widgets.map(Q1):J1,r=i=>i.type.disableDelete?i.type.disableDelete(e,$e(N({},i.props),{readOnly:this.props.readOnly,env:this.props.env})):!1,o=e&&(e.bodies.length>0||this.props.allowEmpty)&&!this.props.readOnly&&!e.isSelection&&!n.some(r);return g.createElement(kd,{disabled:!this.props.detachable,handle:".r6o-draggable",cancel:".r6o-btn, .r6o-btn *",onDrag:()=>this.setState({dragged:!0})},g.createElement("div",{ref:this.element,className:this.state.dragged?"r6o-editor dragged":"r6o-editor"},g.createElement("div",{className:"r6o-arrow"}),g.createElement("div",{className:"r6o-editor-inner"},n.map((i,a)=>g.cloneElement(i,{key:`${a}`,focus:a===0,annotation:e,readOnly:this.props.readOnly,env:this.props.env,onAppendBody:this.onAppendBody,onUpdateBody:this.onUpdateBody,onRemoveBody:this.onRemoveBody,onUpsertBody:this.onUpsertBody,onBatchModify:this.onBatchModify,onSetProperty:this.onSetProperty,onSaveAndClose:this.onOk})),this.props.readOnly?g.createElement("div",{className:"r6o-footer"},g.createElement("button",{className:"r6o-btn",onClick:this.onCancel},Ee.t("Close"))):g.createElement("div",{className:this.props.detachable?"r6o-footer r6o-draggable":"r6o-footer"},o&&g.createElement("button",{className:"r6o-btn left delete-annotation",title:Ee.t("Delete"),onClick:this.onDelete},g.createElement(R1,{width:12})),g.createElement("button",{className:"r6o-btn outline",onClick:this.onCancel},Ee.t("Cancel")),g.createElement("button",{className:"r6o-btn ",onClick:this.onOk},Ee.t("Ok"))))))}}var Cr,tS=new Uint8Array(16);function nS(){if(!Cr&&(Cr=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Cr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Cr(tS)}var rS=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function oS(t){return typeof t=="string"&&rS.test(t)}for(var se=[],bi=0;bi<256;++bi)se.push((bi+256).toString(16).substr(1));function iS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(se[t[e+0]]+se[t[e+1]]+se[t[e+2]]+se[t[e+3]]+"-"+se[t[e+4]]+se[t[e+5]]+"-"+se[t[e+6]]+se[t[e+7]]+"-"+se[t[e+8]]+se[t[e+9]]+"-"+se[t[e+10]]+se[t[e+11]]+se[t[e+12]]+se[t[e+13]]+se[t[e+14]]+se[t[e+15]]).toLowerCase();if(!oS(n))throw TypeError("Stringified UUID is invalid");return n}function Mc(t,e,n){t=t||{};var r=t.random||(t.rng||nS)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return iS(r)}var aS=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var r,o,i;if(Array.isArray(e)){if(r=e.length,r!=n.length)return!1;for(o=r;o--!=0;)if(!t(e[o],n[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(i=Object.keys(e),r=i.length,r!==Object.keys(n).length)return!1;for(o=r;o--!=0;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;o--!=0;){var a=i[o];if(!t(e[a],n[a]))return!1}return!0}return e!==e&&n!==n},Fc=aS;const Or=class{constructor(e,n){h(this,"clone",(e,n)=>new Or(N(N({},this.underlying),e),N(N({},this.opts),n)));h(this,"selector",e=>{const{target:n}=this.underlying;if(n.selector)return(Array.isArray(n.selector)?n.selector:[n.selector]).find(o=>o.type===e)});this.underlying=e,this.opts=n}isEqual(e){return(e==null?void 0:e.type)!=="Annotation"?!1:this.underlying===e.underlying?!0:!this.underlying.id||!e.underlying.id?!1:Fc(this.underlying,e.underlying)}get readOnly(){var e;return(e=this.opts)==null?void 0:e.readOnly}get id(){return this.underlying.id}get type(){return this.underlying.type}get motivation(){return this.underlying.motivation}get body(){return this.underlying.body}get target(){return this.underlying.target}get bodies(){return Array.isArray(this.underlying.body)?this.underlying.body:[this.underlying.body]}set bodies(e){this.underlying.body=e}get targets(){return Array.isArray(this.underlying.target)?this.underlying.target:[this.underlying.target]}get quote(){var e;return(e=this.selector("TextQuoteSelector"))==null?void 0:e.exact}get start(){var e;return(e=this.selector("TextPositionSelector"))==null?void 0:e.start}get end(){var e;return(e=this.selector("TextPositionSelector"))==null?void 0:e.end}};let ht=Or;h(ht,"create",e=>{const n={"@context":"http://www.w3.org/ns/anno.jsonld",type:"Annotation",id:`#${Mc()}`,body:[]};return new Or(N(N({},n),e))});class ln{constructor(e,n){h(this,"clone",e=>{const n=new ln;return n.underlying=JSON.parse(JSON.stringify(this.underlying)),e&&(n.underlying=N(N({},n.underlying),e)),n});h(this,"selector",e=>{const{target:n}=this.underlying;if(n.selector)return(Array.isArray(n.selector)?n.selector:[n.selector]).find(o=>o.type===e)});h(this,"toAnnotation",()=>{const e=Object.assign({},this.underlying,{"@context":"http://www.w3.org/ns/anno.jsonld",type:"Annotation",id:`#${Mc()}`});return new ht(e)});this.underlying={type:"Selection",body:n||[],target:e}}get type(){return this.underlying.type}get body(){return this.underlying.body}get target(){return this.underlying.target}get targets(){return Array.isArray(this.underlying.target)?this.underlying.target:[this.underlying.target]}isEqual(e){return e?Fc(this.underlying,e.underlying):!1}get bodies(){return Array.isArray(this.underlying.body)?this.underlying.body:[this.underlying.body]}get quote(){return this.selector("TextQuoteSelector").exact}get isSelection(){return!0}}let Si=0;var sS=()=>({setServerTime:t=>{const e=Date.now();Si=t-e},getCurrentTimeAdjusted:()=>new Date(Date.now()+Si).toISOString(),toClientTime:t=>Date.parse(t)-Si});const uS=(t,e)=>{if(t){const n=t==="auto"?window.navigator.userLanguage||window.navigator.language:t;try{Ee.init(n.split("-")[0].toLowerCase(),e)}catch{console.warn(`Unsupported locale '${n}'. Falling back to default en.`)}}else Ee.init(null,e)};class lS{constructor(e,n,r,o,i){h(this,"dragTo",(e,n)=>{this.group.style.display=null,this.opposite=[e,n];const{x:r,y:o,w:i,h:a}=this.bbox;Gr(this.mask,this.env.image,r,o,i,a),Yr(this.rect,r,o,i,a)});h(this,"getBoundingClientRect",()=>this.rect.getBoundingClientRect());h(this,"toSelection",()=>{const{x:e,y:n,w:r,h:o}=this.bbox;return new ln(Wr(e,n,r,o,this.env.image,this.config.fragmentUnit))});h(this,"destroy",()=>{this.group.parentNode.removeChild(this.group),this.mask=null,this.rect=null,this.group=null});this.anchor=[e,n],this.opposite=[e,n],this.config=o,this.env=i,this.group=document.createElementNS(B,"g"),this.mask=Oa(i.image,e,n,2,2),this.mask.setAttribute("class","a9s-selection-mask"),this.rect=qr(e,n,2,2),this.rect.setAttribute("class","a9s-selection"),this.group.style.pointerEvents="none",this.group.style.display="none",this.group.appendChild(this.mask),this.group.appendChild(this.rect),r.appendChild(this.group)}get bbox(){const e=this.opposite[0]-this.anchor[0],n=this.opposite[1]-this.anchor[1];return{x:e>0?this.anchor[0]:this.opposite[0],y:n>0?this.anchor[1]:this.opposite[1],w:Math.max(1,Math.abs(e)),h:Math.max(1,Math.abs(n))}}get element(){return this.rect}}const cS={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"},kc=()=>"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,fS=t=>{let e=null;const n=(o,i)=>new MouseEvent(o,{screenX:i.screenX,screenY:i.screenY,clientX:i.clientX,clientY:i.clientY,pageX:i.pageX,pageY:i.pageY,bubbles:!0}),r=o=>{const i=o.changedTouches[0],a=n(cS[o.type],i);i.target.dispatchEvent(a),o.preventDefault(),(o.type==="touchstart"||o.type==="touchmove")&&(e&&clearTimeout(e),e=setTimeout(()=>{const s=n("dblclick",i);i.target.dispatchEvent(s)},800)),o.type==="touchend"&&e&&clearTimeout(e)};t.addEventListener("touchstart",r,!0),t.addEventListener("touchmove",r,!0),t.addEventListener("touchend",r,!0),t.addEventListener("touchcancel",r,!0)},Ar="An implementation is missing",dS=kc();class Ic extends yn{constructor(e,n,r){super();h(this,"enableResponsive",()=>{window.ResizeObserver&&(this.resizeObserver=new ResizeObserver(()=>{const e=this.svg.getBoundingClientRect(),{width:n,height:r}=this.svg.viewBox.baseVal;this.scale=Math.max(n/e.width,r/e.height),this.onScaleChanged&&this.onScaleChanged(this.scale)}),this.resizeObserver.observe(this.svg.parentNode))});h(this,"getSVGPoint",e=>{const n=this.svg.createSVGPoint();if(dS){const r=this.svg.getBoundingClientRect(),o=e.clientX-r.x,i=e.clientY-r.y,{left:a,top:s}=this.svg.getBoundingClientRect();return n.x=o+a,n.y=i+s,n.matrixTransform(this.g.getScreenCTM().inverse())}else return n.x=e.offsetX,n.y=e.offsetY,n.matrixTransform(this.g.getCTM().inverse())});h(this,"drawHandle",(e,n)=>{const r=document.createElementNS(B,"g");r.setAttribute("class","a9s-handle");const o=document.createElementNS(B,"g"),i=c=>{const l=document.createElementNS(B,"circle");return l.setAttribute("cx",e),l.setAttribute("cy",n),l.setAttribute("r",c),l},a=this.config.handleRadius||6,s=i(a);s.setAttribute("class","a9s-handle-inner");const u=i(a+1);return u.setAttribute("class","a9s-handle-outer"),o.appendChild(u),o.appendChild(s),r.appendChild(o),r});h(this,"setHandleXY",(e,n,r)=>{const o=e.querySelector(".a9s-handle-inner");o.setAttribute("cx",n),o.setAttribute("cy",r);const i=e.querySelector(".a9s-handle-outer");i.setAttribute("cx",n),i.setAttribute("cy",r)});h(this,"getHandleXY",e=>{const n=e.querySelector(".a9s-handle-outer");return{x:parseFloat(n.getAttribute("cx")),y:parseFloat(n.getAttribute("cy"))}});h(this,"scaleHandle",e=>{const n=e.querySelector(".a9s-handle-inner"),r=e.querySelector(".a9s-handle-outer"),o=this.scale*(this.config.handleRadius||6);n.setAttribute("r",o),r.setAttribute("r",o)});this.svg=e.closest("svg"),this.g=e,this.config=n,this.env=r,this.scale=1;const{image:o}=r;(o instanceof Element||o instanceof HTMLDocument)&&this.enableResponsive()}destroy(){this.resizeObserver&&this.resizeObserver.disconnect(),this.resizeObserver=null}}class _i extends Ic{constructor(e,n,r){super(e,n,r);h(this,"attachListeners",({mouseMove:e,mouseUp:n,dblClick:r})=>{e&&(this.mouseMove=o=>{const{x:i,y:a}=this.getSVGPoint(o);this.started||(this.emit("startSelection",{x:i,y:a}),this.started=!0),e(i,a,o)},this.svg.addEventListener("mousemove",this.mouseMove)),n&&(this.mouseUp=o=>{if(o.button!==0)return;const{x:i,y:a}=this.getSVGPoint(o);n(i,a,o)},document.addEventListener("mouseup",this.mouseUp)),r&&(this.dblClick=o=>{const{x:i,y:a}=this.getSVGPoint(o);r(i,a,o)},document.addEventListener("dblclick",this.dblClick))});h(this,"detachListeners",()=>{this.mouseMove&&this.svg.removeEventListener("mousemove",this.mouseMove),this.mouseUp&&document.removeEventListener("mouseup",this.mouseUp),this.dblClick&&document.removeEventListener("dblclick",this.dblClick)});h(this,"start",(e,n)=>{const{x:r,y:o}=this.getSVGPoint(e);this.startDrawing(r,o,n,e)});h(this,"startDrawing",e=>{throw new Error(Ar)});h(this,"createEditableShape",(e,n)=>{throw new Error(Ar)});this.started=!1}get isDrawing(){throw new Error(Ar)}}_i.supports=t=>{throw new Error(Ar)};const Rc="An implementation is missing";class Nc extends Ic{constructor(e,n,r,o){super(n,r,o);h(this,"updateState",e=>{throw new Error(Rc)});this.annotation=e}get element(){throw new Error(Rc)}}const pS=/firefox/i.test(navigator.userAgent),Lc=(t,e,n,r,o)=>{t.setAttribute("width",r),t.setAttribute("height",o),pS?(t.setAttribute("x",0),t.setAttribute("y",0),t.setAttribute("transform",`translate(${e}, ${n})`)):(t.setAttribute("x",e),t.setAttribute("y",n))},hS=(t,e)=>{const{x:n,y:r,width:o,height:i}=e.getBBox(),a=document.createElementNS(B,"svg");a.setAttribute("class","a9s-formatter-el"),Lc(a,n,r,o,i);const s=document.createElementNS(B,"g");s.appendChild(t),a.appendChild(s),e.append(a)},Ei=(t,e,n)=>{if(!n)return t;const r=n.reduce((s,u)=>{const c=u(e);if(!c)return s;if(typeof c=="string"||c instanceof String)s.className=s.className?`${s.className} ${c}`:c;else if(c.nodeType===Node.ELEMENT_NODE)s.elements=s.elements?[...s.elements,c]:[c];else{const{className:l,style:f,element:d}=c;l&&(s.className=s.className?`${s.className} ${l}`:l),f&&(s.style=s.style?`${s.style} ${f}`:f),d&&(s.elements=s.elements?[...s.elements,d]:[d])}for(const l in c)c.hasOwnProperty(l)&&l.startsWith("data-")&&(s[l]=c[l]);return s},{}),{className:o,style:i,elements:a}=r;if(o&&Et(t,o),i){const s=t.querySelector(".a9s-outer"),u=t.querySelector(".a9s-inner");s&&u?(s.setAttribute("style","display:none"),u.setAttribute("style",i)):t.setAttribute("style",i)}a&&a.forEach(s=>hS(s,t));for(const s in r)r.hasOwnProperty(s)&&s.startsWith("data-")&&t.setAttribute(s,r[s])},Ci=(t,e,n,r,o)=>{const i=t.querySelector(".a9s-formatter-el");i&&Lc(i,e,n,r,o)};class mS extends Nc{constructor(e,n,r,o){super(e,n,r,o);h(this,"onScaleChanged",()=>this.handles.map(this.scaleHandle));h(this,"setSize",(e,n,r,o)=>{Yr(this.rectangle,e,n,r,o),Gr(this.mask,this.env.image,e,n,r,o),Ci(this.elementGroup,e,n,r,o);const[i,a,s,u]=this.handles;this.setHandleXY(i,e,n),this.setHandleXY(a,e+r,n),this.setHandleXY(s,e+r,n+o),this.setHandleXY(u,e,n+o)});h(this,"stretchCorners",(e,n,r)=>{const o=this.getHandleXY(n),i=r.x-o.x,a=r.y-o.y,s=i>0?o.x:r.x,u=a>0?o.y:r.y,c=Math.abs(i),l=Math.abs(a);Yr(this.rectangle,s,u,c,l),Gr(this.mask,this.env.image,s,u,c,l),Ci(this.elementGroup,s,u,c,l),this.setHandleXY(this.handles[e],r.x,r.y);const f=this.handles[(e+3)%4];this.setHandleXY(f,o.x,r.y);const d=this.handles[(e+5)%4];return this.setHandleXY(d,r.x,o.y),{x:s,y:u,w:c,h:l}});h(this,"onGrab",e=>n=>{if(n.button!==0)return;this.grabbedElem=e;const r=this.getSVGPoint(n),{x:o,y:i}=xa(this.rectangle);this.mouseOffset={x:r.x-o,y:r.y-i}});h(this,"onMouseMove",e=>{if(e.button!==0)return;const n=(r,o)=>r<0?0:r>o?o:r;if(this.grabbedElem){const r=this.getSVGPoint(e);if(this.grabbedElem===this.rectangle){const{w:o,h:i}=xa(this.rectangle),{naturalWidth:a,naturalHeight:s}=this.env.image,u=n(r.x-this.mouseOffset.x,a-o),c=n(r.y-this.mouseOffset.y,s-i);this.setSize(u,c,o,i),this.emit("update",Wr(u,c,o,i,this.env.image,this.config.fragmentUnit))}else{const o=this.handles.indexOf(this.grabbedElem),i=o<2?this.handles[o+2]:this.handles[o-2],{x:a,y:s,w:u,h:c}=this.stretchCorners(o,i,r);this.emit("update",Wr(a,s,u,c,this.env.image,this.config.fragmentUnit))}}});h(this,"onMouseUp",e=>{this.grabbedElem=null,this.mouseOffset=null});h(this,"updateState",e=>{const{x:n,y:r,w:o,h:i}=bn(e,this.env.image);this.setSize(n,r,o,i)});this.svg.addEventListener("mousemove",this.onMouseMove),this.svg.addEventListener("mouseup",this.onMouseUp);const{x:i,y:a,w:s,h:u}=bn(e,o.image);this.containerGroup=document.createElementNS(B,"g"),this.mask=Oa(o.image,i,a,s,u),this.mask.setAttribute("class","a9s-selection-mask"),this.containerGroup.appendChild(this.mask),this.elementGroup=document.createElementNS(B,"g"),this.elementGroup.setAttribute("class","a9s-annotation editable selected"),this.elementGroup.setAttribute("data-id",e.id),this.rectangle=qr(i,a,s,u),this.rectangle.querySelector(".a9s-inner").addEventListener("mousedown",this.onGrab(this.rectangle)),this.elementGroup.appendChild(this.rectangle),this.handles=[[i,a],[i+s,a],[i+s,a+u],[i,a+u]].map(c=>{const[l,f]=c,d=this.drawHandle(l,f);return d.addEventListener("mousedown",this.onGrab(d)),this.elementGroup.appendChild(d),d}),this.containerGroup.appendChild(this.elementGroup),n.appendChild(this.containerGroup),Ei(this.rectangle,e,r.formatters),this.grabbedElem=null,this.mouseOffset=null}get element(){return this.elementGroup}destroy(){this.containerGroup.parentNode.removeChild(this.containerGroup),super.destroy()}}class wr extends _i{constructor(e,n,r){super(e,n,r);h(this,"startDrawing",(e,n)=>{this.attachListeners({mouseMove:this.onMouseMove,mouseUp:this.onMouseUp}),this.rubberband=new lS(e,n,this.g,this.config,this.env)});h(this,"stop",()=>{this.rubberband&&(this.rubberband.destroy(),this.rubberband=null)});h(this,"onMouseMove",(e,n)=>this.rubberband.dragTo(e,n));h(this,"onMouseUp",()=>{this.detachListeners(),this.started=!1;const{width:e,height:n}=this.rubberband.getBoundingClientRect(),r=this.config.minSelectionWidth||4,o=this.config.minSelectionHeight||4;if(e>=r&&n>=o){const{element:i}=this.rubberband;i.annotation=this.rubberband.toSelection(),this.emit("complete",i)}else this.emit("cancel");this.stop()});h(this,"createEditableShape",(e,n)=>new mS(e,this.g,$e(N({},this.config),{formatters:n}),this.env));this.rubberband=null}get isDrawing(){return this.rubberband!=null}}wr.identifier="rect",wr.supports=t=>{const e=t.selector("FragmentSelector");return e==null?void 0:e.conformsTo.startsWith("http://www.w3.org/TR/media-frags")};class Bc{constructor(e,n){h(this,"redraw",()=>{this.mask.setAttribute("d",`M0 0 h${this.w} v${this.h} h-${this.w} z M${this.polygon.getAttribute("points")} z`)});h(this,"destroy",()=>this.mask.parentNode.removeChild(this.mask));this.w=e.naturalWidth,this.h=e.naturalHeight,this.polygon=n,this.mask=document.createElementNS(B,"path"),this.mask.setAttribute("fill-rule","evenodd"),this.mask.setAttribute("class","a9s-selection-mask"),this.mask.setAttribute("d",`M0 0 h${this.w} v${this.h} h-${this.w} z M${this.polygon.getAttribute("points")} z`)}get element(){return this.mask}}class vS{constructor(e,n,r){h(this,"setPoints",e=>{const n=e.map(r=>`${r[0]},${r[1]}`).join(" ");this.outer.setAttribute("points",n),this.inner.setAttribute("points",n)});h(this,"getBoundingClientRect",()=>this.outer.getBoundingClientRect());h(this,"dragTo",e=>{this.group.style.display=null,this.mousepos=e;const n=[...this.points,e];this.setPoints(n),this.mask.redraw()});h(this,"addPoint",()=>{const[e,n]=this.mousepos,r=this.points[this.points.length-1];Math.pow(e-r[0],2)+Math.pow(n-r[1],2)>4&&(this.points=[...this.points,this.mousepos],this.setPoints(this.points),this.mask.redraw())});h(this,"destroy",()=>{this.group.parentNode.removeChild(this.group),this.polygon=null,this.group=null});h(this,"toSelection",()=>new ln(Kr(this.group,this.env.image)));this.points=[e],this.env=r,this.mousepos=e,this.group=document.createElementNS(B,"g"),this.polygon=document.createElementNS(B,"g"),this.polygon.setAttribute("class","a9s-selection"),this.outer=document.createElementNS(B,"polygon"),this.outer.setAttribute("class","a9s-outer"),this.inner=document.createElementNS(B,"polygon"),this.inner.setAttribute("class","a9s-inner"),this.setPoints(this.points),this.mask=new Bc(r.image,this.inner),this.polygon.appendChild(this.outer),this.polygon.appendChild(this.inner),this.group.style.display="none",this.group.appendChild(this.mask.element),this.group.appendChild(this.polygon),n.appendChild(this.group)}get element(){return this.polygon}}const Ai=t=>{const e=t.querySelector(".a9s-inner").points,n=[];for(let r=0;r<e.numberOfItems;r++)n.push(e.getItem(r));return n},gS=t=>t.querySelector(".a9s-inner").getBBox();class yS extends Nc{constructor(e,n,r,o){super(e,n,r,o);h(this,"onScaleChanged",()=>this.handles.map(this.scaleHandle));h(this,"setPoints",e=>{const n=l=>Math.round(10*l)/10,r=e.map(l=>`${n(l.x)},${n(l.y)}`).join(" ");this.shape.querySelector(".a9s-inner").setAttribute("points",r);const i=this.shape.querySelector(".a9s-outer");i.setAttribute("points",r),this.mask.redraw();const{x:a,y:s,width:u,height:c}=i.getBBox();Ci(this.elementGroup,a,s,u,c)});h(this,"onGrab",e=>n=>{n.button===0&&(this.grabbedElem=e,this.grabbedAt=this.getSVGPoint(n))});h(this,"onMouseMove",e=>{const n=(r,o,i)=>r+o<0?-r:r+o>i?i-r:o;if(this.grabbedElem){const r=this.getSVGPoint(e);if(this.grabbedElem===this.shape){const{x:o,y:i,width:a,height:s}=gS(this.shape),{naturalWidth:u,naturalHeight:c}=this.env.image,l=n(o,r.x-this.grabbedAt.x,u-a),f=n(i,r.y-this.grabbedAt.y,c-s),d=Ai(this.shape).map(p=>({x:p.x+l,y:p.y+f}));this.grabbedAt=r,this.setPoints(d),d.forEach((p,m)=>this.setHandleXY(this.handles[m],p.x,p.y)),this.emit("update",Kr(this.shape,this.env.image))}else{const o=this.handles.indexOf(this.grabbedElem),i=Ai(this.shape).map((a,s)=>s===o?r:a);this.setPoints(i),this.setHandleXY(this.handles[o],r.x,r.y),this.emit("update",Kr(this.shape,this.env.image))}}});h(this,"onMouseUp",e=>{this.grabbedElem=null,this.grabbedAt=null});h(this,"updateState",e=>{const n=Xr(e).getAttribute("points").split(" ").map(r=>{const[o,i]=r.split(",").map(a=>parseFloat(a.trim()));return{x:o,y:i}});this.setPoints(n),n.forEach((r,o)=>this.setHandleXY(this.handles[o],r.x,r.y))});h(this,"destroy",()=>{this.containerGroup.parentNode.removeChild(this.containerGroup),super.destroy()});this.svg.addEventListener("mousemove",this.onMouseMove),this.svg.addEventListener("mouseup",this.onMouseUp),this.containerGroup=document.createElementNS(B,"g"),this.shape=Pa(e),this.shape.querySelector(".a9s-inner").addEventListener("mousedown",this.onGrab(this.shape)),this.mask=new Bc(o.image,this.shape.querySelector(".a9s-inner")),this.containerGroup.appendChild(this.mask.element),this.elementGroup=document.createElementNS(B,"g"),this.elementGroup.setAttribute("class","a9s-annotation editable selected"),this.elementGroup.setAttribute("data-id",e.id),this.elementGroup.appendChild(this.shape),this.handles=Ai(this.shape).map(i=>{const a=this.drawHandle(i.x,i.y);return a.addEventListener("mousedown",this.onGrab(a)),this.elementGroup.appendChild(a),a}),this.containerGroup.appendChild(this.elementGroup),n.appendChild(this.containerGroup),Ei(this.shape,e,r.formatters),this.grabbedElem=null,this.grabbedAt=null}get element(){return this.elementGroup}}class wi extends _i{constructor(e,n,r){super(e,n,r);h(this,"startDrawing",(e,n,r)=>{this._isDrawing=!0,this._startOnSingleClick=r,this.attachListeners({mouseMove:this.onMouseMove,mouseUp:this.onMouseUp,dblClick:this.onDblClick}),this.rubberband=new vS([e,n],this.g,this.env)});h(this,"stop",()=>{this.detachListeners(),this._isDrawing=!1,this.rubberband&&(this.rubberband.destroy(),this.rubberband=null)});h(this,"onMouseMove",(e,n)=>this.rubberband.dragTo([e,n]));h(this,"onMouseUp",()=>{const{width:e,height:n}=this.rubberband.getBoundingClientRect(),r=this.config.minSelectionWidth||4,o=this.config.minSelectionHeight||4;e>=r||n>=o?this.rubberband.addPoint():this._startOnSingleClick||(this.emit("cancel"),this.stop())});h(this,"onDblClick",()=>{this._isDrawing=!1;const e=this.rubberband.element;e.annotation=this.rubberband.toSelection(),this.emit("complete",e),this.stop()});h(this,"createEditableShape",(e,n)=>new yS(e,this.g,$e(N({},this.config),{formatters:n}),this.env));this._isDrawing=!1,this._startOnSingleClick=!1}get isDrawing(){return this._isDrawing}}wi.identifier="polygon",wi.supports=t=>{var n;const e=t.selector("SvgSelector");if(e)return(n=e.value)==null?void 0:n.match(/^<svg.*<polygon/g)};class bS extends yn{constructor(e,n,r){super();h(this,"listTools",()=>this._registered.map(e=>e.identifier));h(this,"registerTool",e=>{const n=e.identifier;this.listTools().includes(n)&&this.unregisterTool(n),this._registered.unshift(e)});h(this,"unregisterTool",e=>this._registered=this._registered.filter(n=>n.identifier!==e));h(this,"setCurrent",e=>{const n=typeof e=="string"||e instanceof String?this._registered.find(r=>r.identifier===e):e;this._current=new n(this._g,this._config,this._env),this._current.on("startSelection",r=>this.emit("startSelection",r)),this._current.on("complete",r=>this.emit("complete",r)),this._current.on("cancel",r=>this.emit("cancel",r))});h(this,"forAnnotation",e=>{var a;const[n,...r]=e.targets,o=(a=n.renderedVia)==null?void 0:a.name,i=o?this._registered.find(s=>s.identifier===o):this._registered.find(s=>s.supports(e));return i?new i(this._g,this._config,this._env):null});this._g=e,this._config=n,this._env=r,this._registered=[wr,wi],this.setCurrent(wr)}get current(){return this._current}}class SS{constructor(e,n,r){this.svg=e.closest("svg"),this.g=document.createElementNS(B,"g"),this.g.setAttribute("class","a9s-crosshair");const o=document.createElementNS(B,"line"),i=document.createElementNS(B,"line");this.g.appendChild(o),this.g.appendChild(i),e.appendChild(this.g);const a=s=>{const u=this.svg.getBoundingClientRect(),c=s.clientX-u.x,l=s.clientY-u.y,f=this.svg.createSVGPoint(),{left:d,top:p}=this.svg.getBoundingClientRect();return f.x=c+d,f.y=l+p,f.matrixTransform(e.getScreenCTM().inverse())};this.svg.addEventListener("mousemove",s=>{const{x:u,y:c}=a(s);o.setAttribute("x1",0),o.setAttribute("y1",c),o.setAttribute("x2",n),o.setAttribute("y2",c),i.setAttribute("x1",u),i.setAttribute("y1",0),i.setAttribute("x2",u),i.setAttribute("y2",r)})}}const Vc=(t,e)=>{const n=wa(e,"a9s-annotation")?e:e.querySelector("a9s-annotation"),r=t.naturalWidth/t.width,o=t.naturalHeight/t.height,i=t.getBoundingClientRect(),a=n.getBoundingClientRect(),s=a.x-i.x,u=a.y-i.y,{width:c,height:l}=a,f=document.createElement("CANVAS"),d=f.getContext("2d");return f.width=c*r,f.height=l*o,d.drawImage(t,s*r,u*o,c*r,l*o,0,0,c*r,l*o),{snippet:f,transform:p=>{const m=s*r+p[0],b=u*o+p[1];return[m,b]}}},Hc=kc();class _S extends yn{constructor(e){super();h(this,"_attachMouseListeners",(e,n)=>{e.addEventListener("mouseenter",()=>{var r,o;((o=(r=this.tools)==null?void 0:r.current)==null?void 0:o.isDrawing)||(this.currentHover!==e&&this.emit("mouseEnterAnnotation",n,e),this.currentHover=e)}),e.addEventListener("mouseleave",()=>{var r,o;((o=(r=this.tools)==null?void 0:r.current)==null?void 0:o.isDrawing)||(this.emit("mouseLeaveAnnotation",n,e),this.currentHover=null)}),Hc&&(e.addEventListener("touchstart",r=>{r.stopPropagation(),this.currentHover=e}),e.addEventListener("touchend",r=>{const{clientX:o,clientY:i}=r.changedTouches[0],a=document.elementFromPoint(o,i);r.stopPropagation(),e.contains(a)&&(this.currentHover=e,this.selectCurrentHover())}))});h(this,"_lazy",e=>{this.imageEl.naturalWidth?e():this.imageEl.addEventListener("load",()=>e())});h(this,"_onMouseDown",e=>{var n,r;e.button===0&&(this.readOnly||this.selectedShape||this.tools.current.isDrawing?!((r=(n=this.tools)==null?void 0:n.current)==null?void 0:r.isDrawing)&&this.selectedShape!==this.currentHover&&this.selectCurrentHover():this.tools.current.start(e,this.drawOnSingleClick&&!this.currentHover))});h(this,"_refreshNonScalingAnnotations",()=>{const e=this.getCurrentScale();e!==1/0&&Array.from(this.svg.querySelectorAll(".a9s-non-scaling")).forEach(n=>{n.setAttribute("transform",`scale(${e})`)})});h(this,"_scaleFormatterElements",e=>{const n=this.getCurrentScale();if(n!==1/0)if(e){const r=e.querySelector(".a9s-formatter-el");r&&r.firstChild.setAttribute("transform",`scale(${n})`)}else Array.from(this.g.querySelectorAll(".a9s-formatter-el")).forEach(o=>o.firstChild.setAttribute("transform",`scale(${n})`))});h(this,"addAnnotation",e=>{const n=kf(e,this.imageEl);return Et(n,"a9s-annotation"),n.setAttribute("data-id",e.id),n.annotation=e,this._attachMouseListeners(n,e),this.g.appendChild(n),Ei(n,e,this.formatters),this._scaleFormatterElements(n),n});h(this,"addDrawingTool",e=>{var n;return(n=this.tools)==null?void 0:n.registerTool(e)});h(this,"addOrUpdateAnnotation",(e,n)=>{this.selectedShape&&(this.selectedShape.annotation.isEqual(e)||this.selectedShape.annotation.isEqual(n))&&(this.deselect(),this.emit("select",{})),n&&this.removeAnnotation(n),this.removeAnnotation(e);const r=this.addAnnotation(e);wa(r,"a9s-non-scaling")&&r.setAttribute("transform",`scale(${this.getCurrentScale()})`),this.redraw()});h(this,"deselect",e=>{var n;if(this.selectedShape){(n=this.tools)==null||n.current.stop();const{annotation:r}=this.selectedShape;this.selectedShape.destroy?(this.selectedShape.destroy(),this.selectedShape=null,r.isSelection||(this.addAnnotation(r),e||this.redraw())):(bf(this.selectedShape,"selected"),this.selectedShape=null)}});h(this,"destroy",()=>{this.deselect(),this.currentHover=null,this.svg.parentNode.removeChild(this.svg)});h(this,"findShape",e=>{const n=(e==null?void 0:e.id)?e.id:e;return this.g.querySelector(`.a9s-annotation[data-id="${n}"]`)});h(this,"getAnnotations",()=>Array.from(this.g.querySelectorAll(".a9s-annotation")).map(n=>n.annotation));h(this,"getCurrentScale",()=>{const e=this.svg.getBoundingClientRect(),{width:n,height:r}=this.svg.viewBox.baseVal;return Math.max(n/e.width,r/e.height)});h(this,"getSelectedImageSnippet",()=>{if(this.selectedShape){const e=this.selectedShape.element||this.selectedShape;return Vc(this.imageEl,e)}});h(this,"init",e=>{this.deselect(),this.currentHover=null,Array.from(this.g.querySelectorAll(".a9s-annotation")).forEach(r=>this.g.removeChild(r)),this._lazy(()=>{e.sort((r,o)=>Cn(o,this.imageEl)-Cn(r,this.imageEl)),e.forEach(this.addAnnotation)}),this._refreshNonScalingAnnotations()});h(this,"listDrawingTools",()=>{var e;return(e=this.tools)==null?void 0:e.listTools()});h(this,"overrideId",(e,n)=>{const r=this.findShape(e);r.setAttribute("data-id",n);const{annotation:o}=r,i=o.clone({id:n});return r.annotation=i,i});h(this,"redraw",()=>{const e=Array.from(this.g.querySelectorAll(".a9s-annotation:not(.selected)")),n=e.map(r=>r.annotation);n.sort((r,o)=>Cn(o,this.imageEl)-Cn(r,this.imageEl)),e.forEach(r=>this.g.removeChild(r)),n.forEach(this.addAnnotation)});h(this,"removeAnnotation",e=>{var o,i,a;const n=e.type?e.id:e;((o=this.selectedShape)==null?void 0:o.annotation.id)===n&&this.deselect();const r=this.findShape(e);r&&(((i=this.selectedShape)==null?void 0:i.annotation)===r.annotation&&this.deselect(),((a=this.currentHover)==null?void 0:a.annotation)===r.annotation&&(this.currentHover=null),r.parentNode.removeChild(r))});h(this,"removeDrawingTool",e=>{var n;return(n=this.tools)==null?void 0:n.unregisterTool(e)});h(this,"selectAnnotation",(e,n)=>{this.selectedShape&&this.deselect();const r=this.findShape(e);if(r){this.selectShape(r,n);const o=this.selectedShape.element?this.selectedShape.element:this.selectedShape;return{annotation:r.annotation,element:o}}else this.deselect()});h(this,"selectCurrentHover",()=>{this.currentHover?this.disableSelect?this.emit("clickAnnotation",this.currentHover.annotation,this.currentHover):this.selectShape(this.currentHover):(this.deselect(),this.emit("select",{skipEvent:!0}))});h(this,"selectShape",(e,n)=>{var i;if(!n&&!e.annotation.isSelection&&this.emit("clickAnnotation",e.annotation,e),((i=this.selectedShape)==null?void 0:i.annotation)===e.annotation)return;this.selectedShape&&this.selectedShape.annotation!==e.annotation&&this.deselect(!0);const{annotation:r}=e;if(this.readOnly||r.readOnly)Et(e,"selected"),this.selectedShape=e,n||this.emit("select",{annotation:r,element:e,skipEvent:n});else{const a=this.tools.forAnnotation(r);a?(e.parentNode.removeChild(e),this.selectedShape=a.createEditableShape(r,this.formatters),this.selectedShape.element.annotation=r,this._scaleFormatterElements(this.selectedShape.element),this.selectedShape.on("update",s=>{this.selectedShape&&this.emit("updateTarget",this.selectedShape.element,s)}),setTimeout(()=>{this.selectedShape&&this._attachMouseListeners(this.selectedShape.element,r),n||(this.currentHover=this.selectedShape.element)},1)):this.selectedShape=e,n||this.emit("select",{annotation:r,element:this.selectedShape.element||this.selectedShape})}});h(this,"setDrawingTool",e=>{var n;this.tools&&((n=this.tools.current)==null||n.stop(),this.tools.setCurrent(e))});h(this,"setVisible",e=>{e?this.svg.style.display=null:(this.deselect(),this.svg.style.display="none")});h(this,"stopDrawing",()=>{var e,n;(n=(e=this.tools)==null?void 0:e.current)==null||n.stop()});const{wrapperEl:n,config:r,env:o}=e;this.imageEl=o.image,this.readOnly=r.readOnly,r.formatter?this.formatters=[r.formatter]:r.formatters&&(this.formatters=Array.isArray(r.formatters)?r.formatters:[r.formatters]),this.disableSelect=r.disableSelect,this.drawOnSingleClick=r.drawOnSingleClick,this.svg=document.createElementNS(B,"svg"),Hc?(this.svg.setAttribute("class","a9s-annotationlayer touch"),fS(this.svg),this.svg.addEventListener("touchstart",()=>{this.currentHover=null,this.selectCurrentHover()})):this.svg.setAttribute("class","a9s-annotationlayer");const{naturalWidth:i,naturalHeight:a}=this.imageEl;if(!i&&!a){const{width:s,height:u}=this.imageEl;this.svg.setAttribute("viewBox",`0 0 ${s} ${u}`),this.imageEl.nodeName.toLowerCase()!=="img"&&(this.imageEl.naturalWidth=s,this.imageEl.naturalHeight=u),this.imageEl.addEventListener("load",()=>{this.emit("load",this.imageEl.src),this.svg.setAttribute("viewBox",`0 0 ${this.imageEl.naturalWidth} ${this.imageEl.naturalHeight}`)})}else this.svg.setAttribute("viewBox",`0 0 ${i} ${a}`);this.g=document.createElementNS(B,"g"),this.svg.appendChild(this.g),n.appendChild(this.svg),r.crosshair&&(this.crosshair=new SS(this.g,i,a),Et(this.svg,"no-cursor")),this.selectedShape=null,this.tools=new bS(this.g,r,o),this.tools.on("startSelection",s=>this.emit("startSelection",s)),this.tools.on("cancel",this.selectCurrentHover),this.tools.on("complete",this.selectShape),this.svg.addEventListener("mousedown",this._onMouseDown),this.currentHover=null,window.ResizeObserver&&(this.resizeObserver=new ResizeObserver(()=>{this._refreshNonScalingAnnotations(),this._scaleFormatterElements()}),this.resizeObserver.observe(this.svg.parentNode))}}var SE="",ES=gn(tf),Uc,zc=ES,CS=0;function AS(t,e,n,r,o){var i,a,s={};for(a in e)a=="ref"?i=e[a]:s[a]=e[a];var u={type:t,props:s,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--CS,__source:r,__self:o};if(typeof t=="function"&&(i=t.defaultProps))for(a in i)s[a]===void 0&&(s[a]=i[a]);return zc.options.vnode&&zc.options.vnode(u),u}Uc=AS;const jc=Uc;class wS extends Q{constructor(e){super(e);h(this,"clearState",e=>this.setState({selectedAnnotation:null,selectedDOMElement:null,modifiedTarget:null,beforeHeadlessModify:null},e));h(this,"forwardEvent",(e,n)=>{this.annotationLayer.on(e,(r,o)=>{this.props[n](r.clone(),o)})});h(this,"onKeyUp",e=>{if(e.which===27){this.annotationLayer.stopDrawing();const{selectedAnnotation:n}=this.state;n&&(this.cancelSelected(),this.props.onCancelSelected(n))}else if(e.which===46){const{selectedAnnotation:n}=this.state;n&&(n.isSelection?this.onCancelAnnotation(n):this.onDeleteAnnotation(n))}});h(this,"handleStartSelect",e=>this.props.onSelectionStarted(e));h(this,"handleSelect",(e,n)=>{this.state.editorDisabled?this.onHeadlessSelect(e,n):this.onNormalSelect(e,n)});h(this,"onNormalSelect",(e,n)=>{const{annotation:r,element:o}=e;if(r){const i=s=>{this.setState({selectedAnnotation:r,selectedDOMElement:o,modifiedTarget:null,beforeHeadlessModify:null},()=>{n||(r.isSelection?this.props.onSelectionCreated(r.clone()):this.props.onAnnotationSelected(r.clone(),o)),s&&s()})},{selectedAnnotation:a}=this.state;a&&!a.isEqual(r)?this.clearState(()=>{this.props.onCancelSelected(a.clone()),i(()=>this.props.onChangeSelected(r.clone(),a.clone()))}):i()}else{const{selectedAnnotation:i}=this.state;i?this.clearState(()=>{this.props.onCancelSelected(i)}):this.clearState()}});h(this,"onHeadlessSelect",(e,n)=>{this.saveSelected().then(()=>{this.onNormalSelect(e,n);const{annotation:r}=e;if(r&&!r.isSelection){const o=this.annotationLayer.selectAnnotation(e.annotation,!0);this.setState({selectedDOMElement:o.element})}})});h(this,"handleUpdateTarget",(e,n)=>{this.setState({selectedDOMElement:e,modifiedTarget:n});const r=JSON.parse(JSON.stringify(n));this.props.onSelectionTargetChanged(r)});h(this,"overrideAnnotationId",e=>n=>{const{id:r}=e;this.state.selectedAnnotation?this.clearState(()=>{this.annotationLayer.overrideId(r,n)}):this.annotationLayer.overrideId(r,n)});h(this,"onCreateOrUpdateAnnotation",(e,n)=>(r,o)=>{let i=r.isSelection?r.toAnnotation():r;i=this.state.modifiedTarget?i.clone({target:this.state.modifiedTarget}):i.clone(),this.clearState(()=>{this.annotationLayer.deselect(),this.annotationLayer.addOrUpdateAnnotation(i,o),o?this.props[e](i,o.clone()):this.props[e](i,this.overrideAnnotationId(i)),n&&n()})});h(this,"onDeleteAnnotation",e=>{this.clearState(),this.annotationLayer.removeAnnotation(e),this.props.onAnnotationDeleted(e)});h(this,"onCancelAnnotation",(e,n)=>{this.annotationLayer.deselect(),this.props.onCancelSelected(e),this.clearState(n)});h(this,"addAnnotation",e=>this.annotationLayer.addOrUpdateAnnotation(e.clone()));h(this,"addDrawingTool",e=>this.annotationLayer.addDrawingTool(e));h(this,"cancelSelected",()=>new Promise(e=>{this.annotationLayer.deselect(),this.state.selectedAnnotation?this.clearState(e):e()}));h(this,"getAnnotationById",e=>{var n;return(n=this.annotationLayer.findShape(e))==null?void 0:n.annotation});h(this,"getAnnotations",()=>this.annotationLayer.getAnnotations().map(e=>e.clone()));h(this,"getImageSnippetById",e=>{const n=this.annotationLayer.findShape(e);if(n)return Vc(this.props.env.image,n)});h(this,"getSelected",()=>{var e;if(this.state.selectedAnnotation)return this.state.editorDisabled?this.state.selectedAnnotation:(e=this._editor.current)==null?void 0:e.getCurrentAnnotation()});h(this,"getSelectedImageSnippet",()=>this.annotationLayer.getSelectedImageSnippet());h(this,"listDrawingTools",()=>this.annotationLayer.listDrawingTools());h(this,"removeAnnotation",e=>this.annotationLayer.removeAnnotation(e));h(this,"removeDrawingTool",e=>this.annotationLayer.removeDrawingTool(e));h(this,"saveSelected",()=>new Promise(e=>{const n=this.state.selectedAnnotation;if(n)if(this._editor.current)this._editor.current.onOk(),e();else if(n.isSelection)n.bodies.length>0||this.props.config.allowEmpty?this.onCreateOrUpdateAnnotation("onAnnotationCreated",e)(n):(this.annotationLayer.deselect(),e());else{const{beforeHeadlessModify:r,modifiedTarget:o}=this.state;r?this.onCreateOrUpdateAnnotation("onAnnotationUpdated",e)(n,r):o?this.onCreateOrUpdateAnnotation("onAnnotationUpdated",e)(n,n):this.onCancelAnnotation(n,e)}else e()}));h(this,"selectAnnotation",e=>{const n=this.annotationLayer.selectAnnotation(e,!0);if(n)return this.handleSelect(n,!0),n.annotation.clone();this.clearState()});h(this,"setAnnotations",e=>this.annotationLayer.init(e.map(n=>n.clone())));h(this,"setDrawingTool",e=>this.annotationLayer.setDrawingTool(e));h(this,"setVisible",e=>{this.annotationLayer.setVisible(e),e||this.clearState()});h(this,"updateSelected",(e,n)=>new Promise(r=>{this.state.selectedAnnotation&&(n?this.state.selectedAnnotation.isSelection?this.onCreateOrUpdateAnnotation("onAnnotationCreated",r)(e):this.onCreateOrUpdateAnnotation("onAnnotationUpdated",r)(e,this.state.selectedAnnotation):this.setState({selectedAnnotation:e,beforeHeadlessModify:this.state.beforeHeadlessModify||this.state.selectedAnnotation},r))}));this.state={selectedAnnotation:null,selectedDOMElement:null,modifiedTarget:null,readOnly:this.props.config.readOnly,editorDisabled:this.props.config.disableEditor,widgets:this.props.config.widgets,beforeHeadlessModify:null},this._editor=g.createRef()}componentDidMount(){this.annotationLayer=new _S(this.props),this.annotationLayer.on("load",this.props.onLoad),this.annotationLayer.on("startSelection",this.handleStartSelect),this.annotationLayer.on("select",this.handleSelect),this.annotationLayer.on("updateTarget",this.handleUpdateTarget),this.forwardEvent("clickAnnotation","onClickAnnotation"),this.forwardEvent("mouseEnterAnnotation","onMouseEnterAnnotation"),this.forwardEvent("mouseLeaveAnnotation","onMouseLeaveAnnotation"),document.addEventListener("keyup",this.onKeyUp)}componentWillUnmount(){this.annotationLayer.destroy(),document.removeEventListener("keyup",this.onKeyUp)}get disableEditor(){return this.state.editorDisabled}set disableEditor(e){this.setState({editorDisabled:e})}get disableSelect(){return this.annotationLayer.disableSelect}set disableSelect(e){this.annotationLayer.disableSelect=e}get formatters(){return this.annotationLayer.formatters}set formatters(e){this.annotationLayer.formatters=e,this.annotationLayer.redraw()}get readOnly(){return this.state.readOnly}set readOnly(e){this.annotationLayer.readOnly=e,this.setState({readOnly:e})}get widgets(){return this.state.widgets}set widgets(e){this.setState({widgets:e})}render(){var r;const e=this.state.selectedAnnotation&&!this.state.editorDisabled,n=this.state.readOnly||((r=this.state.selectedAnnotation)==null?void 0:r.readOnly);return e&&jc(eS,{ref:this._editor,detachable:!0,wrapperEl:this.props.wrapperEl,annotation:this.state.selectedAnnotation,modifiedTarget:this.state.modifiedTarget,selectedElement:this.state.selectedDOMElement,readOnly:n,allowEmpty:this.props.config.allowEmpty,widgets:this.state.widgets,env:this.props.env,onAnnotationCreated:this.onCreateOrUpdateAnnotation("onAnnotationCreated"),onAnnotationUpdated:this.onCreateOrUpdateAnnotation("onAnnotationUpdated"),onAnnotationDeleted:this.onDeleteAnnotation,onCancel:this.onCancelAnnotation})}}var _E="";class Wc{constructor(e){h(this,"handleAnnotationCreated",(e,n)=>this._emitter.emit("createAnnotation",e.underlying,n));h(this,"handleAnnotationDeleted",e=>this._emitter.emit("deleteAnnotation",e.underlying));h(this,"handleAnnotationSelected",(e,n)=>this._emitter.emit("selectAnnotation",e.underlying,n));h(this,"handleAnnotationUpdated",(e,n)=>this._emitter.emit("updateAnnotation",e.underlying,n.underlying));h(this,"handleCancelSelected",e=>this._emitter.emit("cancelSelected",e.underlying));h(this,"handleChangeSelected",(e,n)=>this._emitter.emit("changeSelected",e.underlying,n.underlying));h(this,"handleClickAnnotation",(e,n)=>this._emitter.emit("clickAnnotation",e.underlying,n));h(this,"handleLoad",e=>this._emitter.emit("load",e));h(this,"handleSelectionCreated",e=>this._emitter.emit("createSelection",e.underlying));h(this,"handleSelectionStarted",e=>this._emitter.emit("startSelection",e));h(this,"handleSelectionTargetChanged",e=>this._emitter.emit("changeSelectionTarget",e));h(this,"handleMouseEnterAnnotation",(e,n)=>this._emitter.emit("mouseEnterAnnotation",e.underlying,n));h(this,"handleMouseLeaveAnnotation",(e,n)=>this._emitter.emit("mouseLeaveAnnotation",e.underlying,n));h(this,"_wrap",e=>(e==null?void 0:e.type)==="Annotation"?new ht(e):e);h(this,"addAnnotation",(e,n)=>this._app.current.addAnnotation(new ht(e,{readOnly:n})));h(this,"addDrawingTool",e=>this._app.current.addDrawingTool(e));h(this,"cancelSelected",()=>this._app.current.cancelSelected());h(this,"clearAnnotations",()=>this.setAnnotations([]));h(this,"clearAuthInfo",()=>this._env.user=null);h(this,"destroy",()=>{g.unmountComponentAtNode(this._appContainerEl),this._element.parentNode.insertBefore(this._env.image,this._element),this._element.parentNode.removeChild(this._element)});h(this,"getAnnotationById",e=>{const n=this._app.current.getAnnotationById(e);return n==null?void 0:n.underlying});h(this,"getAnnotations",()=>this._app.current.getAnnotations().map(n=>n.underlying));h(this,"getImageSnippetById",e=>this._app.current.getImageSnippetById(e));h(this,"getSelected",()=>{const e=this._app.current.getSelected();return e==null?void 0:e.underlying});h(this,"getSelectedImageSnippet",()=>this._app.current.getSelectedImageSnippet());h(this,"listDrawingTools",()=>this._app.current.listDrawingTools());h(this,"loadAnnotations",e=>fetch(e).then(n=>n.json()).then(n=>(this.setAnnotations(n),n)));h(this,"off",(e,n)=>this._emitter.off(e,n));h(this,"on",(e,n)=>this._emitter.on(e,n));h(this,"once",(e,n)=>this._emitter.once(e,n));h(this,"removeAnnotation",e=>this._app.current.removeAnnotation(this._wrap(e)));h(this,"removeDrawingTool",e=>this._app.current.removeDrawingTool(e));h(this,"saveSelected",()=>this._app.current.saveSelected());h(this,"selectAnnotation",e=>{const n=this._app.current.selectAnnotation(this._wrap(e));return n==null?void 0:n.underlying});h(this,"setAnnotations",e=>{const r=(e||[]).map(o=>new ht(o));this._app.current.setAnnotations(r)});h(this,"setAuthInfo",e=>this._env.user=e);h(this,"setDrawingTool",e=>this._app.current.setDrawingTool(e));h(this,"setServerTime",e=>this._env.setServerTime(e));h(this,"setVisible",e=>this._app.current.setVisible(e));h(this,"updateSelected",(e,n)=>{let r=null;e.type==="Annotation"?r=new ht(e):e.type==="Selection"&&(r=new ln(e.target,e.body)),r&&this._app.current.updateSelected(r,n)});this._app=g.createRef(),this._emitter=new yn,e.disableEditor=e.disableEditor||e.headless;const n=e.image.nodeType?e.image:document.getElementById(e.image);n.style.display="block",this._env=sS(),this._env.image=n,uS(e.locale,e.messages),this._element=document.createElement("DIV"),this._element.style.position="relative",this._element.style.display="inline-block",n.parentNode.insertBefore(this._element,n),this._element.appendChild(n),this._appContainerEl=document.createElement("DIV"),this._element.appendChild(this._appContainerEl),g.render(jc(wS,{ref:this._app,env:this._env,wrapperEl:this._element,config:e,onSelectionStarted:this.handleSelectionStarted,onSelectionCreated:this.handleSelectionCreated,onSelectionTargetChanged:this.handleSelectionTargetChanged,onAnnotationCreated:this.handleAnnotationCreated,onAnnotationSelected:this.handleAnnotationSelected,onAnnotationUpdated:this.handleAnnotationUpdated,onAnnotationDeleted:this.handleAnnotationDeleted,onCancelSelected:this.handleCancelSelected,onChangeSelected:this.handleChangeSelected,onClickAnnotation:this.handleClickAnnotation,onLoad:this.handleLoad,onMouseEnterAnnotation:this.handleMouseEnterAnnotation,onMouseLeaveAnnotation:this.handleMouseLeaveAnnotation}),this._appContainerEl)}get disableEditor(){return this._app.current.disableEditor}set disableEditor(e){this._app.current.disableEditor=e}get disableSelect(){return this._app.current.disableSelect}set disableSelect(e){this._app.current.disableSelect=e}get formatters(){return this._app.current.formatters||[]}set formatters(e){if(e){const n=Array.isArray(e)?e:[e];this._app.current.formatters=n}else this._app.current.formatters=null}get readOnly(){return this._app.current.readOnly}set readOnly(e){this._app.current.readOnly=e}get widgets(){return this._app.current.widgets}set widgets(e){this._app.current.widgets=e}}const OS=t=>new Wc(t);j.Annotorious=Wc,j.init=OS,Object.defineProperty(j,"__esModule",{value:!0}),j[Symbol.toStringTag]="Module"});
//# sourceMappingURL=annotorious.umd.js.map


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

var sweetAlert = Swal.mixin({
  position: 'top',
  allowOutsideClick: false,
  allowEscapeKey: false,
  confirmButtonColor: '#666',
  cancelButtonColor: '#d33'
});
$(document).ready(function () {
  //Form Submitted
  $("form").on('submit', function () {
    $(this).find('button').prop('disabled', 'true').html('Submitting');
  }); //Delete Button Clicked

  $(".delete-button").on('click', function () {
    var title = $(this).data("title");
    var formId = $(this).data("form-id");

    if ($(this).data("administrator-count")) {
      var administratorCount = $(this).data("administrator-count");
      var roleId = $(this).data("role-id");

      if (administratorCount == 1 && roleId == 1) {
        sweetAlert.fire({
          title: 'Cannot Delete User',
          text: "At Least 1 Administrator Must Exist",
          icon: 'warning'
        });
        return false;
      }
    }

    sweetAlert.fire({
      title: title,
      text: "Are You Sure?",
      icon: 'warning',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#666',
      showCancelButton: true,
      confirmButtonText: 'Delete'
    }).then(function (result) {
      if (result.isConfirmed) {
        $(formId).submit();
      }
    });
  }); //Open Profile Dropdown

  $(".profile-open").on('click', function () {
    $(".profile-dropdown").slideToggle("slow");
  }); // //Open/Close Mobile Menu Modal

  $("#closeMobileSidebarModal").on('click', function () {
    $("#mobileSidebarModal").animate({
      width: 'hide'
    }, 500);
  });
  $("#openMobileSidebarModal").on('click', function () {
    $("#mobileSidebarModal").animate({
      width: 'show'
    }, 500);
  }); //Diagram Annotation

  if ($('#diagram').length) {
    var anno = Annotorious.init({
      image: 'diagram'
    });
  }
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

window.$ = window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
window.Annotorious = __webpack_require__(/*! @recogito/annotorious */ "./node_modules/@recogito/annotorious/dist/annotorious.min.js");
window.Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js"); //jquery ui components installed,  example component below
//import 'jquery-ui/ui/widgets/datepicker.js';

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur as it's already being fired
		// in leverageNative.
		_default: function() {
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./resources/sass/jquery.scss":
/*!************************************!*\
  !*** ./resources/sass/jquery.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v11.4.8
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';

  const consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  const uniqueArray = arr => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param {string} str
   * @returns {string}
   */

  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
  /**
   * @param {NodeList | HTMLCollection | NamedNodeMap} nodeList
   * @returns {array}
   */

  const toArray = nodeList => Array.prototype.slice.call(nodeList);
  /**
   * Standardize console warnings
   * @param {string | array} message
   */

  const warn = message => {
    console.warn("".concat(consolePrefix, " ").concat(typeof message === 'object' ? message.join(' ') : message));
  };
  /**
   * Standardize console errors
   * @param {string} message
   */

  const error = message => {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  const previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param {string} message
   */

  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  const warnAboutDeprecation = (deprecatedParam, useInstead) => {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;
  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';
  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  const isPromise = arg => arg && Promise.resolve(arg) === arg;

  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  const deprecatedParams = {};
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {string} paramName
   */

  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {string} paramName
   */

  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {string} paramName
   */

  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };

  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  const checkIfParamIsDeprecated = param => {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  const showWarningsForParams = params => {
    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    for (const param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };

  const swalPrefix = 'swal2-';
  const prefix = items => {
    const result = {};

    for (const i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  const swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  const iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */

  const getContainer = () => document.body.querySelector(".".concat(swalClasses.container));
  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  const elementByClass = className => {
    return elementBySelector(".".concat(className));
  };

  const getPopup = () => elementByClass(swalClasses.popup);
  const getIcon = () => elementByClass(swalClasses.icon);
  const getTitle = () => elementByClass(swalClasses.title);
  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);
  const getImage = () => elementByClass(swalClasses.image);
  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);
  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);
  const getConfirmButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  const getDenyButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  const getInputLabel = () => elementByClass(swalClasses['input-label']);
  const getLoader = () => elementBySelector(".".concat(swalClasses.loader));
  const getCancelButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  const getActions = () => elementByClass(swalClasses.actions);
  const getFooter = () => elementByClass(swalClasses.footer);
  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);
  const getCloseButton = () => elementByClass(swalClasses.close); // https://github.com/jkup/focusable/blob/master/index.js

  const focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  const getFocusableElements = () => {
    const focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort((a, b) => {
      const tabindexA = parseInt(a.getAttribute('tabindex'));
      const tabindexB = parseInt(b.getAttribute('tabindex'));

      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }

      return 0;
    });
    const otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(el => el.getAttribute('tabindex') !== '-1');
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el => isVisible(el));
  };
  const isModal = () => {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };
  const isToast = () => {
    return getPopup() && hasClass(getPopup(), swalClasses.toast);
  };
  const isLoading = () => {
    return getPopup().hasAttribute('data-loading');
  };

  const states = {
    previousBodyPadding: null
  };
  /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */

  const setInnerHtml = (elem, html) => {
    elem.textContent = '';

    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(child => {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(child => {
        elem.appendChild(child);
      });
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */

  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }

    const classList = className.split(/\s+/);

    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  const removeCustomClasses = (elem, params) => {
    toArray(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };

  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(typeof params.customClass[className], "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  /**
   * @param {HTMLElement} popup
   * @param {string} inputType
   * @returns {HTMLInputElement | null}
   */

  const getInput = (popup, inputType) => {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses[inputType]));

      case 'checkbox':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.checkbox, " input"));

      case 'radio':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.range, " input"));

      default:
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.input));
    }
  };
  /**
   * @param {HTMLInputElement} input
   */

  const focusInput = input => {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[]} classList
   * @param {boolean} condition
   */

  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(className => {
      if (Array.isArray(target)) {
        target.forEach(elem => {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[]} classList
   */

  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[]} classList
   */

  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };
  /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | null}
   */

  const getDirectChildByClass = (elem, className) => {
    const childNodes = toArray(elem.childNodes);

    for (let i = 0; i < childNodes.length; i++) {
      if (hasClass(childNodes[i], className)) {
        return childNodes[i];
      }
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */

  const applyNumericalStyle = (elem, property, value) => {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} display
   */

  const show = function (elem) {
    let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.display = display;
  };
  /**
   * @param {HTMLElement} elem
   */

  const hide = elem => {
    elem.style.display = 'none';
  };
  const setStyle = (parent, selector, property, value) => {
    const el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  const toggle = (elem, condition, display) => {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  const isVisible = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  const allButtonsAreHidden = () => !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight); // borrowed from https://stackoverflow.com/a/46352119

  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  const animateTimerProgressBar = function (timer) {
    let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(() => {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  /**
   * Detect Node env
   *
   * @returns {boolean}
   */
  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

  const RESTORE_FOCUS_TIMEOUT = 100;

  const globalState = {};

  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }

      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  const sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses['html-container'], "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n   <div class=\"").concat(swalClasses.icon, "\"></div>\n   <img class=\"").concat(swalClasses.image, "\" />\n   <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n   <div class=\"").concat(swalClasses['html-container'], "\" id=\"").concat(swalClasses['html-container'], "\"></div>\n   <input class=\"").concat(swalClasses.input, "\" />\n   <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n   <div class=\"").concat(swalClasses.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(swalClasses.select, "\"></select>\n   <div class=\"").concat(swalClasses.radio, "\"></div>\n   <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n     <input type=\"checkbox\" />\n     <span class=\"").concat(swalClasses.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n   <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  const resetOldContainer = () => {
    const oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  const resetValidationMessage = () => {
    globalState.currentInstance.resetValidationMessage();
  };

  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getDirectChildByClass(popup, swalClasses.input);
    const file = getDirectChildByClass(popup, swalClasses.file);
    const range = popup.querySelector(".".concat(swalClasses.range, " input"));
    const rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
    const select = getDirectChildByClass(popup, swalClasses.select);
    const checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
    const textarea = getDirectChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = () => {
      resetValidationMessage();
      rangeOutput.value = range.value;
    };

    range.onchange = () => {
      resetValidationMessage();
      range.nextSibling.value = range.value;
    };
  };

  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;

  const setupAccessibility = params => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    const container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */

  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    } // Object
    else if (typeof param === 'object') {
      handleObject(param, target);
    } // Plain string
    else if (param) {
      setInnerHtml(target, param);
    }
  };
  /**
   * @param {object} param
   * @param {HTMLElement} target
   */

  const handleObject = (param, target) => {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param);
    } // For other objects use their string representation
    else {
      setInnerHtml(target, param.toString());
    }
  };

  const handleJqueryElem = (target, elem) => {
    target.textContent = '';

    if (0 in elem) {
      for (let i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  const animationEndEvent = (() => {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    const testEl = document.createElement('div');
    const transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      // Chrome, Safari and Opera
      animation: 'animationend' // Standard syntax

    };

    for (const i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  })();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render all the buttons

    renderButtons(actions, loader, params); // Loader

    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };

  function renderButtons(actions, loader, params) {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton(); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }

  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      const growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  const renderContainer = (instance, params) => {
    const container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container');
  };

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    awaitingPromise: new WeakMap(),
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  const inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  const renderInput = (instance, params) => {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(inputType => {
      const inputClass = swalClasses[inputType];
      const inputContainer = getDirectChildByClass(popup, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  const showInput = params => {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    const inputContainer = getInputContainer(params.input);
    const input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(() => {
      focusInput(input);
    });
  };

  const removeAttributes = input => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;

      if (!['type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };

  const setAttributes = (inputType, inputAttributes) => {
    const input = getInput(getPopup(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  const setCustomClass = params => {
    const inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      addClass(label, params.customClass.inputLabel);
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  const getInputContainer = inputType => {
    const inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getDirectChildByClass(getPopup(), inputClass);
  };

  const renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(typeof params.inputValue, "\""));
    }

    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    setInputLabel(rangeInput, range, params);
    return range;
  };

  renderInputType.select = (select, params) => {
    select.textContent = '';

    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };

  renderInputType.radio = radio => {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = (checkboxContainer, params) => {
    /** @type {HTMLInputElement} */
    const checkbox = getInput(getPopup(), 'checkbox');
    checkbox.value = '1';
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = (textarea, params) => {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight); // https://github.com/sweetalert2/sweetalert2/issues/2291


    setTimeout(() => {
      // https://github.com/sweetalert2/sweetalert2/issues/1699
      if ('MutationObserver' in window) {
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

        const textareaResizeHandler = () => {
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);

          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = "".concat(textareaWidth, "px");
          } else {
            getPopup().style.width = null;
          }
        };

        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    } // Content as plain text
    else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    } // No content
    else {
      hide(htmlContainer);
    }

    renderInput(instance, params);
  };

  const renderFooter = (instance, params) => {
    const footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }

    if (!params.icon && !params.iconHtml) {
      return hide(icon);
    }

    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
      return hide(icon);
    }

    show(icon); // Custom or default content

    setContent(icon, params);
    applyStyles(icon, params); // Animate icon

    addClass(icon, params.showClass.icon);
  };

  const applyStyles = (icon, params) => {
    for (const iconType in iconTypes) {
      if (params.icon !== iconType) {
        removeClass(icon, iconTypes[iconType]);
      }
    }

    addClass(icon, iconTypes[params.icon]); // Icon color

    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgroundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  const adjustSuccessIconBackgroundColor = () => {
    const popup = getPopup();
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  const successIconHtml = "\n  <div class=\"swal2-success-circular-line-left\"></div>\n  <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n  <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n  <div class=\"swal2-success-circular-line-right\"></div>\n";
  const errorIconHtml = "\n  <span class=\"swal2-x-mark\">\n    <span class=\"swal2-x-mark-line-left\"></span>\n    <span class=\"swal2-x-mark-line-right\"></span>\n  </span>\n";

  const setContent = (icon, params) => {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, successIconHtml);
    } else if (params.icon === 'error') {
      setInnerHtml(icon, errorIconHtml);
    } else {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };

  const iconContent = content => "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");

  const renderImage = (instance, params) => {
    const image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';

    if (params.currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === params.currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  const renderTitle = (instance, params) => {
    const title = getTitle();
    toggle(title, params.title || params.titleText, 'block');

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup(); // Width
    // https://github.com/sweetalert2/sweetalert2/issues/2170

    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      popup.insertBefore(getLoader(), getIcon());
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    } // Padding


    applyNumericalStyle(popup, 'padding', params.padding); // Color

    if (params.color) {
      popup.style.color = params.color;
    } // Background


    if (params.background) {
      popup.style.background = params.background;
    }

    hide(getValidationMessage()); // Classes

    addClasses(popup, params);
  };

  const addClasses = (popup, params) => {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    }
  };

  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(el => {
      if (el === getContainer() || el.contains(getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  const unsetAriaHidden = () => {
    const bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  const getTemplateParams = params => {
    const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }
    /** @type {DocumentFragment} */


    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */

  const getSwalParams = templateContent => {
    const result = {};
    toArray(templateContent.querySelectorAll('swal-param')).forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = param.getAttribute('name');
      const value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
        result[paramName] = false;
      }

      if (typeof defaultParams[paramName] === 'object') {
        result[paramName] = JSON.parse(value);
      }
    });
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const getSwalButtons = templateContent => {
    const result = {};
    toArray(templateContent.querySelectorAll('swal-button')).forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const getSwalImage = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const getSwalIcon = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const getSwalInput = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }

    const inputOptions = templateContent.querySelectorAll('swal-input-option');

    if (inputOptions.length) {
      result.inputOptions = {};
      toArray(inputOptions).forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   */


  const getSwalStringParams = (templateContent, paramNames) => {
    const result = {};

    for (const i in paramNames) {
      const paramName = paramNames[i];
      /** @type {HTMLElement} */

      const tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const showWarningsForElements = templateContent => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    toArray(templateContent.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();

      if (allowedElements.indexOf(tagName) === -1) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };
  /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */


  const showWarningsForAttributes = (el, allowedAttributes) => {
    toArray(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  var defaultInputValidators = {
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(key => {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }

    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  class Timer {
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }

      return this.remaining;
    }

    stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date().getTime() - this.started.getTime();
      }

      return this.remaining;
    }

    increase(n) {
      const running = this.running;

      if (running) {
        this.stop();
      }

      this.remaining += n;

      if (running) {
        this.start();
      }

      return this.remaining;
    }

    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }

      return this.remaining;
    }

    isRunning() {
      return this.running;
    }

  }

  const fixScrollbar = () => {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  const undoScrollbar = () => {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  const iOSfix = () => {
    const iOS = // @ts-ignore
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups();
    }
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1948
   */

  const addBottomPaddingForTallPopups = () => {
    const ua = navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

    if (iOSSafari) {
      const bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */


  const lockBodyScroll = () => {
    const container = getContainer();
    let preventTouchMove;

    container.ontouchstart = e => {
      preventTouchMove = shouldPreventTouchMove(e);
    };

    container.ontouchmove = e => {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();

    if (isStylus(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    target.tagName !== 'TEXTAREA' && // #2266
    !(isScrollable(getHtmlContainer()) && // #1944
    getHtmlContainer().contains(target))) {
      return true;
    }

    return false;
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */


  const isStylus = event => {
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */


  const isZoom = event => {
    return event.touches && event.touches.length > 1;
  };

  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  const SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */

  const openPopup = params => {
    const container = getContainer();
    const popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }

    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }

    removeClass(container, swalClasses['no-transition']);
  };

  const swalOpenAnimationFinished = event => {
    const popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    const container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  const setScrollingVisibility = (container, popup) => {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(() => {
      container.scrollTop = 0;
    });
  };

  const addClasses$1 = (container, popup, params) => {
    addClass(container, params.showClass.backdrop); // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup, 'grid');
    setTimeout(() => {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */

  const showLoading = buttonToReplace => {
    let popup = getPopup();

    if (!popup) {
      new Swal(); // eslint-disable-line no-new
    }

    popup = getPopup();
    const loader = getLoader();

    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }

    show(loader);
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();

    if (!buttonToReplace && isVisible(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }

    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
  };

  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };
  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  const getCheckboxValue = input => input.checked ? 1 : 0;

  const getRadioValue = input => input.checked ? input.value : null;

  const getFileValue = input => input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

  const handleInputOptions = (instance, params) => {
    const popup = getPopup();

    const processInputOptions = inputOptions => populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof params.inputOptions));
    }
  };

  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  const populateInputOptions = {
    select: (popup, inputOptions, params) => {
      const select = getDirectChildByClass(popup, swalClasses.select);

      const renderOption = (parent, optionLabel, optionValue) => {
        const option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };

      inputOptions.forEach(inputOption => {
        const optionValue = inputOption[0];
        const optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          const optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: (popup, inputOptions, params) => {
      const radio = getDirectChildByClass(popup, swalClasses.radio);
      inputOptions.forEach(inputOption => {
        const radioValue = inputOption[0];
        const radioLabel = inputOption[1];
        const radioInput = document.createElement('input');
        const radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }

        const label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      const radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  const formatInputOptions = inputOptions => {
    const result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(key => {
        let valueFormatted = inputOptions[key];

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  const isSelected = (optionValue, inputValue) => {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */

  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);

    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  const showRelatedButton = domCache => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  /**
   * Gets the input DOM node, this method works with input parameter.
   * @returns {HTMLElement | null}
   */

  function getInput$1(instance) {
    const innerParams = privateProps.innerParams.get(instance || this);
    const domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.popup, innerParams.input);
  }

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  const isVisible$1 = () => {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  const clickConfirm = () => getConfirmButton() && getConfirmButton().click();
  /*
   * Global function to click 'Deny' button
   */

  const clickDeny = () => getDenyButton() && getDenyButton().click();
  /*
   * Global function to click 'Cancel' button
   */

  const clickCancel = () => getCancelButton() && getCancelButton().click();

  const removeKeydownHandler = globalState => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
  };
  const addKeydownHandler = (instance, globalState, innerParams, dismissWith) => {
    removeKeydownHandler(globalState);

    if (!innerParams.toast) {
      globalState.keydownHandler = e => keydownHandler(instance, e, dismissWith);

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  const setFocus = (innerParams, index, increment) => {
    const focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

  const keydownHandler = (instance, e, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Ignore keydown during IME composition
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    // https://github.com/sweetalert2/sweetalert2/issues/720
    // https://github.com/sweetalert2/sweetalert2/issues/2406


    if (e.isComposing || e.keyCode === 229) {
      return;
    }

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams);
    } // TAB
    else if (e.key === 'Tab') {
      handleTab(e, innerParams);
    } // ARROWS - switch focus between buttons
    else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(e.key)) {
      handleArrows(e.key);
    } // ESC
    else if (e.key === 'Escape') {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  const handleEnter = (instance, e, innerParams) => {
    // https://github.com/sweetalert2/sweetalert2/issues/2386
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  const handleTab = (e, innerParams) => {
    const targetElement = e.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;

    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    } // Cycle to the next button


    if (!e.shiftKey) {
      setFocus(innerParams, btnIndex, 1);
    } // Cycle to the prev button
    else {
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  const handleArrows = key => {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();

    if (![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
      return;
    }

    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    let buttonToFocus = document.activeElement;

    for (let i = 0; i < getActions().children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];

      if (!buttonToFocus) {
        return;
      }

      if (isVisible(buttonToFocus) && buttonToFocus instanceof HTMLButtonElement) {
        break;
      }
    }

    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };

  const handleEsc = (e, innerParams, dismissWith) => {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      removeKeydownHandler(globalState);
    }

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); // workaround for #2088
    // for some reason removing the container in Safari will scroll the document to bottom

    if (isSafari) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    const didClose = triggerClosePopup(this);

    if (this.isAwaitingPromise()) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }
  function isAwaitingPromise() {
    return !!privateProps.awaitingPromise.get(this);
  }

  const triggerClosePopup = instance => {
    const popup = getPopup();

    if (!popup) {
      return false;
    }

    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }

    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };

  function rejectPromise(error) {
    const rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);

    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }
  const handleAwaitingPromise = instance => {
    if (instance.isAwaitingPromise()) {
      privateProps.awaitingPromise.delete(instance); // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335

      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };

  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  const handlePopupAnimation = (instance, popup, innerParams) => {
    const container = getContainer(); // If animation is supported, animate

    const animationIsSupported = animationEndEvent && hasCssAnimation(popup);

    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      const radiosContainer = input.parentNode.parentNode;
      const radios = radiosContainer.querySelectorAll('input');

      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    const input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    const domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    const input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    const domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  /**
   * Updates popup parameters.
   */

  function update(params) {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    const validUpdatableParams = filterValidParams(params);
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  const filterValidParams = params => {
    const validUpdatableParams = {};
    Object.keys(params).forEach(param => {
      if (isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
      }
    });
    return validUpdatableParams;
  };

  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335

      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }

    disposeSwal(this);
  }

  const disposeSwal = instance => {
    disposeWeakMaps(instance); // Unset this.params so GC will dispose it (#1569)

    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset currentInstance

    delete globalState.currentInstance;
  };

  const disposeWeakMaps = instance => {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    if (instance.isAwaitingPromise()) {
      unsetWeakMaps(privateProps, instance);
      privateProps.awaitingPromise.set(instance, true);
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
    }
  };

  const unsetWeakMaps = (obj, instance) => {
    for (const i in obj) {
      obj[i].delete(instance);
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    isAwaitingPromise: isAwaitingPromise,
    rejectPromise: rejectPromise,
    handleAwaitingPromise: handleAwaitingPromise,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    update: update,
    _destroy: _destroy
  });

  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };
  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };
  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  const handleConfirmOrDenyWithInput = (instance, type
  /* 'confirm' | 'deny' */
  ) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams.input) {
      return error("The \"input\" parameter is needed to be set when using returnInputValueOn".concat(capitalizeFirstLetter(type)));
    }

    const inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };

  const handleInputValidator = (instance, inputValue, type
  /* 'confirm' | 'deny' */
  ) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };

  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }

    if (innerParams.preDeny) {
      privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received

      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          instance.closePopup({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      }).catch(error$$1 => rejectWith(instance || undefined, error$$1));
    } else {
      instance.closePopup({
        isDenied: true,
        value
      });
    }
  };

  const succeedWith = (instance, value) => {
    instance.closePopup({
      isConfirmed: true,
      value
    });
  };

  const rejectWith = (instance, error$$1) => {
    instance.rejectPromise(error$$1);
  };

  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received

      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      }).catch(error$$1 => rejectWith(instance || undefined, error$$1));
    } else {
      succeedWith(instance, value);
    }
  };

  const handlePopupClick = (instance, domCache, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  const handleToastClick = (instance, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      const innerParams = privateProps.innerParams.get(instance);

      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };
  /**
   * @param {*} innerParams
   * @returns {boolean}
   */


  const isAnyButtonShown = innerParams => {
    return innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton;
  };

  let ignoreOutsideClick = false;

  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = () => {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleModalClick = (instance, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      const innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;

  const isElement = elem => elem instanceof Element || isJqueryElement(elem);

  const argsToParams = args => {
    const params = {};

    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(typeof arg));
        }
      });
    }

    return params;
  };

  function fire() {
    const Swal = this; // eslint-disable-line @typescript-eslint/no-this-alias

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Swal(...args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }

    }

    return MixinSwal;
  }

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  const increaseTimer = n => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  const isTimerRunning = () => {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  let bodyClickListenerAdded = false;
  const clickHandlers = {};
  function bindClickHandler() {
    let attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  const bodyClickListener = event => {
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning,
    bindClickHandler: bindClickHandler
  });

  let currentInstance;

  class SweetAlert {
    constructor() {
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }

      currentInstance = this; // @ts-ignore

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      const outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      }); // @ts-ignore

      const promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    }

    _main(userParams) {
      let mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      showWarningsForParams(Object.assign({}, mixinParams, userParams));

      if (globalState.currentInstance) {
        globalState.currentInstance._destroy();

        if (isModal()) {
          unsetAriaHidden();
        }
      }

      globalState.currentInstance = this;
      const innerParams = prepareParams(userParams, mixinParams);
      setParameters(innerParams);
      Object.freeze(innerParams); // clear the previous timer

      if (globalState.timeout) {
        globalState.timeout.stop();
        delete globalState.timeout;
      } // clear the restore focus timeout


      clearTimeout(globalState.restoreFocusTimeout);
      const domCache = populateDomCache(this);
      render(this, innerParams);
      privateProps.innerParams.set(this, innerParams);
      return swalPromise(this, domCache, innerParams);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    then(onFulfilled) {
      const promise = privateProps.promise.get(this);
      return promise.then(onFulfilled);
    }

    finally(onFinally) {
      const promise = privateProps.promise.get(this);
      return promise.finally(onFinally);
    }

  }

  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise((resolve, reject) => {
      // functions to handle all closings/dismissals
      const dismissWith = dismiss => {
        instance.closePopup({
          isDismissed: true,
          dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);

      domCache.confirmButton.onclick = () => handleConfirmButtonClick(instance);

      domCache.denyButton.onclick = () => handleDenyButtonClick(instance);

      domCache.cancelButton.onclick = () => handleCancelButtonClick(instance, dismissWith);

      domCache.closeButton.onclick = () => dismissWith(DismissReason.close);

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };

  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131

    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    return params;
  };

  const populateDomCache = instance => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  const setupTimer = (globalState$$1, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(() => {
          if (globalState$$1.timeout && globalState$$1.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };

  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  const blurActiveElement = () => {
    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  }; // Assign instance methods from src/instanceMethods/*.js to prototype


  Object.assign(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor

  Object.assign(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility

  Object.keys(instanceMethods).forEach(key => {
    SweetAlert[key] = function () {
      if (currentInstance) {
        return currentInstance[key](...arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.4.8';

  const Swal = SweetAlert; // @ts-ignore

  Swal.default = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/jquery": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/jquery","css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["css/jquery","css/app"], () => (__webpack_require__("./resources/sass/jquery.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/jquery","css/app"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;