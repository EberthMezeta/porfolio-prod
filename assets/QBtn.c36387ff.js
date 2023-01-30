import{c as l,h as v,g as X,r as Q,d as Y,s as Z,u as R,a0 as p,f as ee,v as D,$ as te,L as ne}from"./index.cf279eb1.js";import{i as N,c as G,j as ae,u as ue,e as le,Q as V,b as re,R as ie}from"./vm.df7b61b8.js";const se={size:{type:[Number,String],default:"1em"},color:String};function oe(e){return{cSize:l(()=>e.size in N?`${N[e.size]}px`:e.size),classes:l(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var ce=G({name:"QSpinner",props:{...se,thickness:{type:Number,default:5}},setup(e){const{cSize:a,classes:o}=oe(e);return()=>v("svg",{class:o.value+" q-spinner-mat",width:a.value,height:a.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});const J={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},de=Object.keys(J),ve={align:{type:String,validator:e=>de.includes(e)}};function fe(e){return l(()=>{const a=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${J[a]}`})}function H(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function W(e,a){return(e.aliasOf||e)===(a.aliasOf||a)}function ge(e,a){for(const o in a){const u=a[o],c=e[o];if(typeof u=="string"){if(u!==c)return!1}else if(Array.isArray(c)===!1||c.length!==u.length||u.some((x,C)=>x!==c[C]))return!1}return!0}function F(e,a){return Array.isArray(a)===!0?e.length===a.length&&e.every((o,u)=>o===a[u]):e.length===1&&e[0]===a}function be(e,a){return Array.isArray(e)===!0?F(e,a):Array.isArray(a)===!0?F(a,e):e===a}function he(e,a){if(Object.keys(e).length!==Object.keys(a).length)return!1;for(const o in e)if(be(e[o],a[o])===!1)return!1;return!0}const me={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function ye({fallbackTag:e,useDisableForRouterLinkProps:a=!0}={}){const o=X(),{props:u,proxy:c,emit:x}=o,C=ae(o),q=l(()=>u.disable!==!0&&u.href!==void 0),T=a===!0?l(()=>C===!0&&u.disable!==!0&&q.value!==!0&&u.to!==void 0&&u.to!==null&&u.to!==""):l(()=>C===!0&&q.value!==!0&&u.to!==void 0&&u.to!==null&&u.to!==""),m=l(()=>T.value===!0?j(u.to):null),d=l(()=>m.value!==null),B=l(()=>q.value===!0||d.value===!0),n=l(()=>u.type==="a"||B.value===!0?"a":u.tag||e||"div"),P=l(()=>q.value===!0?{href:u.href,target:u.target}:d.value===!0?{href:m.value.href,target:u.target}:{}),f=l(()=>{if(d.value===!1)return-1;const{matched:i}=m.value,{length:g}=i,y=i[g-1];if(y===void 0)return-1;const S=c.$route.matched;if(S.length===0)return-1;const E=S.findIndex(W.bind(null,y));if(E>-1)return E;const _=H(i[g-2]);return g>1&&H(y)===_&&S[S.length-1].path!==_?S.findIndex(W.bind(null,i[g-2])):E}),L=l(()=>d.value===!0&&f.value!==-1&&ge(c.$route.params,m.value.params)),r=l(()=>L.value===!0&&f.value===c.$route.matched.length-1&&he(c.$route.params,m.value.params)),h=l(()=>d.value===!0?r.value===!0?` ${u.exactActiveClass} ${u.activeClass}`:u.exact===!0?"":L.value===!0?` ${u.activeClass}`:"":"");function j(i){try{return c.$router.resolve(i)}catch{}return null}function z(i,{returnRouterError:g,to:y=u.to,replace:S=u.replace}={}){if(u.disable===!0)return i.preventDefault(),Promise.resolve(!1);if(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey||i.button!==void 0&&i.button!==0||u.target==="_blank")return Promise.resolve(!1);i.preventDefault();const E=c.$router[S===!0?"replace":"push"](y);return g===!0?E:E.then(()=>{}).catch(()=>{})}function I(i){if(d.value===!0){const g=y=>z(i,y);x("click",i,g),i.defaultPrevented!==!0&&g()}else x("click",i)}return{hasRouterLink:d,hasHrefLink:q,hasLink:B,linkTag:n,resolvedLink:m,linkIsActive:L,linkIsExactActive:r,linkClass:h,linkAttrs:P,getLink:j,navigateToRouterLink:z,navigateOnClick:I}}const U={none:0,xs:4,sm:8,md:16,lg:24,xl:32},ke={xs:8,sm:10,md:14,lg:20,xl:24},xe=["button","submit","reset"],qe=/[^\s]\/[^\s]/,Le=["flat","outline","push","unelevated"],Se=(e,a)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":a,Ce={...ue,...me,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Le.reduce((e,a)=>(e[a]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...ve.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Ee(e){const a=le(e,ke),o=fe(e),{hasRouterLink:u,hasLink:c,linkTag:x,linkAttrs:C,navigateOnClick:q}=ye({fallbackTag:"button"}),T=l(()=>{const r=e.fab===!1&&e.fabMini===!1?a.value:{};return e.padding!==void 0?Object.assign({},r,{padding:e.padding.split(/\s+/).map(h=>h in U?U[h]+"px":h).join(" "),minWidth:"0",minHeight:"0"}):r}),m=l(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),d=l(()=>e.disable!==!0&&e.loading!==!0),B=l(()=>d.value===!0?e.tabindex||0:-1),n=l(()=>Se(e,"standard")),P=l(()=>{const r={tabindex:B.value};return c.value===!0?Object.assign(r,C.value):xe.includes(e.type)===!0&&(r.type=e.type),x.value==="a"?(e.disable===!0?r["aria-disabled"]="true":r.href===void 0&&(r.role="button"),u.value!==!0&&qe.test(e.type)===!0&&(r.type=e.type)):e.disable===!0&&(r.disabled="",r["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(r,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),r}),f=l(()=>{let r;e.color!==void 0?e.flat===!0||e.outline===!0?r=`text-${e.textColor||e.color}`:r=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(r=`text-${e.textColor}`);const h=e.round===!0?"round":`rectangle${m.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${n.value} q-btn--${h}`+(r!==void 0?" "+r:"")+(d.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),L=l(()=>o.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:f,style:T,innerClasses:L,attributes:P,hasLink:c,linkTag:x,navigateOnClick:q,isActionable:d}}const{passiveCapture:b}=ee;let $=null,w=null,A=null;var Re=G({name:"QBtn",props:{...Ce,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:a,emit:o}){const{proxy:u}=X(),{classes:c,style:x,innerClasses:C,attributes:q,hasLink:T,linkTag:m,navigateOnClick:d,isActionable:B}=Ee(e),n=Q(null),P=Q(null);let f=null,L,r=null;const h=l(()=>e.label!==void 0&&e.label!==null&&e.label!==""),j=l(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:T.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),z=l(()=>({center:e.round})),I=l(()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}}),i=l(()=>{if(e.loading===!0)return{onMousedown:M,onTouchstart:M,onClick:M,onKeydown:M,onKeyup:M};if(B.value===!0){const t={onClick:y,onKeydown:S,onMousedown:_};if(u.$q.platform.has.touch===!0){const s=e.onTouchstart!==void 0?"":"Passive";t[`onTouchstart${s}`]=E}return t}return{onClick:R}}),g=l(()=>({ref:n,class:"q-btn q-btn-item non-selectable no-outline "+c.value,style:x.value,...q.value,...i.value}));function y(t){if(n.value!==null){if(t!==void 0){if(t.defaultPrevented===!0)return;const s=document.activeElement;if(e.type==="submit"&&s!==document.body&&n.value.contains(s)===!1&&s.contains(n.value)===!1){n.value.focus();const K=()=>{document.removeEventListener("keydown",R,!0),document.removeEventListener("keyup",K,b),n.value!==null&&n.value.removeEventListener("blur",K,b)};document.addEventListener("keydown",R,!0),document.addEventListener("keyup",K,b),n.value.addEventListener("blur",K,b)}}d(t)}}function S(t){n.value!==null&&(o("keydown",t),D(t,[13,32])===!0&&w!==n.value&&(w!==null&&O(),t.defaultPrevented!==!0&&(n.value.focus(),w=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("keyup",k,!0),n.value.addEventListener("blur",k,b)),R(t)))}function E(t){n.value!==null&&(o("touchstart",t),t.defaultPrevented!==!0&&($!==n.value&&($!==null&&O(),$=n.value,f=t.target,f.addEventListener("touchcancel",k,b),f.addEventListener("touchend",k,b)),L=!0,r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,L=!1},200)))}function _(t){n.value!==null&&(t.qSkipRipple=L===!0,o("mousedown",t),t.defaultPrevented!==!0&&A!==n.value&&(A!==null&&O(),A=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("mouseup",k,b)))}function k(t){if(n.value!==null&&!(t!==void 0&&t.type==="blur"&&document.activeElement===n.value)){if(t!==void 0&&t.type==="keyup"){if(w===n.value&&D(t,[13,32])===!0){const s=new MouseEvent("click",t);s.qKeyEvent=!0,t.defaultPrevented===!0&&te(s),t.cancelBubble===!0&&ne(s),n.value.dispatchEvent(s),R(t),t.qKeyEvent=!0}o("keyup",t)}O()}}function O(t){const s=P.value;t!==!0&&($===n.value||A===n.value)&&s!==null&&s!==document.activeElement&&(s.setAttribute("tabindex",-1),s.focus()),$===n.value&&(f!==null&&(f.removeEventListener("touchcancel",k,b),f.removeEventListener("touchend",k,b)),$=f=null),A===n.value&&(document.removeEventListener("mouseup",k,b),A=null),w===n.value&&(document.removeEventListener("keyup",k,!0),n.value!==null&&n.value.removeEventListener("blur",k,b),w=null),n.value!==null&&n.value.classList.remove("q-btn--active")}function M(t){R(t),t.qSkipRipple=!0}return Y(()=>{O(!0)}),Object.assign(u,{click:y}),()=>{let t=[];e.icon!==void 0&&t.push(v(V,{name:e.icon,left:e.stack===!1&&h.value===!0,role:"img","aria-hidden":"true"})),h.value===!0&&t.push(v("span",{class:"block"},[e.label])),t=re(a.default,t),e.iconRight!==void 0&&e.round===!1&&t.push(v(V,{name:e.iconRight,right:e.stack===!1&&h.value===!0,role:"img","aria-hidden":"true"}));const s=[v("span",{class:"q-focus-helper",ref:P})];return e.loading===!0&&e.percentage!==void 0&&s.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:I.value})])),s.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+C.value},t)),e.loading!==null&&s.push(v(p,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},a.loading!==void 0?a.loading():[v(ce)])]:null)),Z(v(m.value,g.value,s),[[ie,j.value,void 0,z.value]])}}});export{Re as Q,ce as a};
