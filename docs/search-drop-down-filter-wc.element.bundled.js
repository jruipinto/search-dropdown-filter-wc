/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t,i,s,e;const o=globalThis.trustedTypes,n=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,r=`lit$${(Math.random()+"").slice(9)}$`,l="?"+r,h=`<${l}>`,d=document,a=(t="")=>d.createComment(t),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,p=/-->/g,f=/>/g,b=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,m=/'/g,y=/"/g,w=/^(?:script|style|textarea)$/i,g=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),S=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),$=new WeakMap,k=d.createTreeWalker(d,129,null,!1),C=(t,i)=>{const s=t.length-1,e=[];let o,l=2===i?"<svg>":"",d=v;for(let i=0;i<s;i++){const s=t[i];let n,a,c=-1,u=0;for(;u<s.length&&(d.lastIndex=u,a=d.exec(s),null!==a);)u=d.lastIndex,d===v?"!--"===a[1]?d=p:void 0!==a[1]?d=f:void 0!==a[2]?(w.test(a[2])&&(o=RegExp("</"+a[2],"g")),d=b):void 0!==a[3]&&(d=b):d===b?">"===a[0]?(d=null!=o?o:v,c=-1):void 0===a[1]?c=-2:(c=d.lastIndex-a[2].length,n=a[1],d=void 0===a[3]?b:'"'===a[3]?y:m):d===y||d===m?d=b:d===p||d===f?d=v:(d=b,o=void 0);const g=d===b&&t[i+1].startsWith("/>")?" ":"";l+=d===v?s+h:c>=0?(e.push(n),s.slice(0,c)+"$lit$"+s.slice(c)+r+g):s+r+(-2===c?(e.push(void 0),i):g)}const a=l+(t[s]||"<?>")+(2===i?"</svg>":"");return[void 0!==n?n.createHTML(a):a,e]};class O{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let n=0,h=0;const d=t.length-1,c=this.parts,[u,v]=C(t,i);if(this.el=O.createElement(u,s),k.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=k.nextNode())&&c.length<d;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(r)){const s=v[h++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(r),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?A:"?"===i[1]?E:"@"===i[1]?I:z})}else c.push({type:6,index:n})}for(const i of t)e.removeAttribute(i)}if(w.test(e.tagName)){const t=e.textContent.split(r),i=t.length-1;if(i>0){e.textContent=o?o.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],a()),k.nextNode(),c.push({type:2,index:++n});e.append(t[i],a())}}}else if(8===e.nodeType)if(e.data===l)c.push({type:2,index:n});else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)c.push({type:7,index:n}),t+=r.length-1}n++}}static createElement(t,i){const s=d.createElement("template");return s.innerHTML=t,s}}function j(t,i,s=t,e){var o,n,r,l;if(i===S)return i;let h=void 0!==e?null===(o=s.Σi)||void 0===o?void 0:o[e]:s.Σo;const d=c(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==d&&(null===(n=null==h?void 0:h.O)||void 0===n||n.call(h,!1),void 0===d?h=void 0:(h=new d(t),h.T(t,s,e)),void 0!==e?(null!==(r=(l=s).Σi)&&void 0!==r?r:l.Σi=[])[e]=h:s.Σo=h),void 0!==h&&(i=j(t,h.S(t,i.values),h,e)),i}class M{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i}u(t){var i;const{el:{content:s},parts:e}=this.D,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:d).importNode(s,!0);k.currentNode=o;let n=k.nextNode(),r=0,l=0,h=e[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new T(n,n.nextSibling,this,t):1===h.type?i=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(i=new L(n,this,t)),this.l.push(i),h=e[++l]}r!==(null==h?void 0:h.index)&&(n=k.nextNode(),r++)}return o}v(t){let i=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,i),i+=s.strings.length-2):s.I(t[i])),i++}}class T{constructor(t,i,s,e){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=s,this.options=e}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=j(this,t,i),c(t)?t===x||null==t||""===t?(this.H!==x&&this.R(),this.H=x):t!==this.H&&t!==S&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var i;return u(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(d.createTextNode(t)),this.H=t}_(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this.C(t):(void 0===e.el&&(e.el=O.createElement(e.h,this.options)),e);if((null===(i=this.H)||void 0===i?void 0:i.D)===o)this.H.v(s);else{const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this.H=t}}C(t){let i=$.get(t.strings);return void 0===i&&$.set(t.strings,i=new O(t)),i}g(t){u(this.H)||(this.H=[],this.R());const i=this.H;let s,e=0;for(const o of t)e===i.length?i.push(s=new T(this.k(a()),this.k(a()),this,this.options)):s=i[e],s.I(o),e++;e<i.length&&(this.R(s&&s.B.nextSibling,e),i.length=e)}R(t=this.A.nextSibling,i){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i}}}class z{constructor(t,i,s,e,o){this.type=1,this.H=x,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill(x),this.strings=s):this.H=x}get tagName(){return this.element.tagName}I(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=j(this,t,i,0),n=!c(t)||t!==this.H&&t!==S,n&&(this.H=t);else{const e=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=j(this,e[s+r],i,r),l===S&&(l=this.H[r]),n||(n=!c(l)||l!==this.H[r]),l===x?t=x:t!==x&&(t+=(null!=l?l:"")+o[r+1]),this.H[r]=l}n&&!e&&this.W(t)}W(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class A extends z{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===x?void 0:t}}class E extends z{constructor(){super(...arguments),this.type=4}W(t){t&&t!==x?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class I extends z{constructor(){super(...arguments),this.type=5}I(t,i=this){var s;if((t=null!==(s=j(this,t,i,0))&&void 0!==s?s:x)===S)return;const e=this.H,o=t===x&&e!==x||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==x&&(e===x||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var i,s;"function"==typeof this.H?this.H.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=s}I(t){j(this,t)}}null===(i=(t=globalThis).litHtmlPlatformSupport)||void 0===i||i.call(t,O,T),(null!==(s=(e=globalThis).litHtmlVersions)&&void 0!==s?s:e.litHtmlVersions=[]).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const U=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B=Symbol();class N{constructor(t,i){if(i!==B)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return U&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const R=new Map,D=(t,...i)=>{const s=i.reduce(((i,s,e)=>i+(t=>{if(t instanceof N)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[e+1]),t[0]);let e=R.get(s);return void 0===e&&R.set(s,e=new N(s,B)),e},_=U?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new N(t+"",B))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var P,H,W,q;const J={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},K=(t,i)=>i!==t&&(i==i||t==t),V={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:K};class Z extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this.Πp(s,i);void 0!==e&&(this.Πm.set(e,s),t.push(e))})),t}static createProperty(t,i=V){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const o=this[t];this[i]=e,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||V}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(_(t))}else void 0!==t&&i.push(_(t));return i}static Πp(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{U?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((i=>{const s=document.createElement("style");s.textContent=i.cssText,t.appendChild(s)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,i,s){this.K(t,s)}Πj(t,i,s=V){var e,o;const n=this.constructor.Πp(t,s);if(void 0!==n&&!0===s.reflect){const r=(null!==(o=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==o?o:J.toAttribute)(i,s.type);this.Πh=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this.Πh=null}}K(t,i){var s,e,o;const n=this.constructor,r=n.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=n.getPropertyOptions(r),l=t.converter,h=null!==(o=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==o?o:J.fromAttribute;this.Πh=r,this[r]=h(i,t.type),this.Πh=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||K)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const s=this.L;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this.Π$()}catch(t){throw i=!1,this.Π$(),t}i&&this.E(s)}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var F,G,Q,X,Y,tt;Z.finalized=!0,Z.shadowRootOptions={mode:"open"},null===(H=(P=globalThis).reactiveElementPlatformSupport)||void 0===H||H.call(P,{ReactiveElement:Z}),(null!==(W=(q=globalThis).reactiveElementVersions)&&void 0!==W?W:q.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(F=(tt=globalThis).litElementVersions)&&void 0!==F?F:tt.litElementVersions=[]).push("3.0.0-rc.1");class it extends Z{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();super.update(t),this.Φt=((t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new T(i.insertBefore(a(),t),t,void 0,s)}return r.I(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return S}}it.finalized=!0,it._$litElement$=!0,null===(Q=(G=globalThis).litElementHydrateSupport)||void 0===Q||Q.call(G,{LitElement:it}),null===(Y=(X=globalThis).litElementPlatformSupport)||void 0===Y||Y.call(X,{LitElement:it});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){window.customElements.define(t,i)}}})(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,et=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};function ot(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):et(t,i)}var nt=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};let rt=class extends it{constructor(){super(...arguments),this.items=[]}dropdownItemTemplate(t,i){return g`
      <div class="item">
        <input
          type="radio"
          id="item${i}"
          name="search-item"
          .value=${t}
        />
        <label for="item${i}">${t}</label>
      </div>
    `}render(){return g`
      <div class="item-list">
        ${this.items.map(this.dropdownItemTemplate)}
      </div>
    `}};rt.styles=D`
    * {
      box-sizing: border-box;
    }
    :host {
      display: block;
    }
    .item-list {
      display: flex;
      flex-direction: column;
    }
    .item {
      display: block;
      position: relative;
    }
    .item input[type='radio'] {
      display: none;
    }
    .item label {
      display: inline-block;
      font-family: sans-serif;
      background-color: #ddd;
      padding: 0.5em 1em;
      width: 100%;
      border: solid 1px gray;
    }
    .item input[type='radio']:checked + label {
      background-color: #bbb;
    }
  `,nt([ot({type:Array})],rt.prototype,"items",void 0),rt=nt([st("app-dropdown-item-list")],rt);var lt=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};let ht=class extends it{render(){return g`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        />
      </svg>
    `}};ht.styles=D`
    :host {
      display: block;
    }
  `,ht=lt([st("app-magnifier-icon")],ht);var dt=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};let at=class extends it{render(){return g`
      <app-magnifier-icon></app-magnifier-icon>
      <input
        type="search"
        @input=${t=>{const i=new CustomEvent("searchinput",{detail:{value:t.target.value}});this.dispatchEvent(i)}}
      />
    `}};at.styles=D`
    :host {
      display: block;
      position: relative;
    }
    input[type='search'] {
      width: 100%;
      padding: 0.5em 1em;
      padding-left: 2.5em;
    }
    app-magnifier-icon {
      position: absolute;
      top: 0.2em;
      left: 0.2em;
    }
  `,at=dt([st("app-search-input")],at);var ct=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};let ut=class extends it{render(){return g`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M7 10l5 5 5-5H7z" />
      </svg>
    `}};ut.styles=D`
    :host {
      display: block;
    }
  `,ut=ct([st("app-dropdown-icon")],ut);var vt=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};let pt=class extends it{constructor(){super(...arguments),this.inp=""}render(){return g`
      <button>dropdown</button>
      <app-dropdown-icon></app-dropdown-icon>
    `}};pt.styles=D`
    :host {
      display: block;
      border: solid 1px gray;
      position: relative;
    }
    button {
      text-transform: uppercase;
      width: 100%;
      border: 0;
      background-color: gray;
      padding: 0.5em 1em;
    }
    button:hover {
      filter: brightness(1.2);
    }
    app-dropdown-icon {
      position: absolute;
      top: 0.2em;
      right: 0.2em;
    }
  `,vt([ot()],pt.prototype,"inp",void 0),pt=vt([st("app-dropdown-button")],pt);
/**
 * @license
 * SPDX-License-Identifier: MIT
 */
var ft=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};let bt=class extends it{constructor(){super(...arguments),this.search=!0,this.dropdown=!0,this.datalist=["one","two","three"],this.filteredDatalist=[],this.isItemListOpen=!1}render(){return g`
      ${this.getDropdownButton(this.dropdown,this.search)}
      ${this.getSearchInput(this.search)}
      ${this.getDropdownItemList(this.isItemListOpen)}
    `}toogleDropdownItemList(){this.isItemListOpen=!this.isItemListOpen,this.filteredDatalist=this.datalist}filterDropdownItemList({detail:t}){const i=t.value;this.isItemListOpen=!(!this.dropdown||!this.search),this.filteredDatalist=this.datalist.filter((t=>t.includes(i)))}getDropdownItemList(t){return t?g`
        <app-dropdown-item-list
          .items=${this.filteredDatalist}
        ></app-dropdown-item-list>
      `:""}getDropdownButton(t,i){return t&&!i?g`
        <app-dropdown-button
          @click=${this.toogleDropdownItemList}
        ></app-dropdown-button>
      `:""}getSearchInput(t){return t?g`
        <app-search-input
          @searchinput=${this.filterDropdownItemList}
        ></app-search-input>
      `:""}};bt.styles=D`
    :host {
      display: block;
    }
  `,ft([ot({type:Boolean})],bt.prototype,"search",void 0),ft([ot({type:Boolean})],bt.prototype,"dropdown",void 0),ft([ot({type:Array})],bt.prototype,"datalist",void 0),ft([ot({type:Array})],bt.prototype,"filteredDatalist",void 0),ft([ot({type:Boolean})],bt.prototype,"isItemListOpen",void 0),bt=ft([st("search-drop-down-filter-wc")],bt);export{bt as SearchDropdownFilter};
