"use strict";(self.webpackChunkskyweb=self.webpackChunkskyweb||[]).push([[250],{77420:function(e,t,l){l.d(t,{fJ:function(){return C},xE:function(){return L}});var n=l(20641),o=l(53751),i=l(81094),s=l(72636);const a=(0,i.j)({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function r(e,t,l){return(0,s.RW)()({name:e,props:a({mode:l,origin:t}),setup(t,l){let{slots:i}=l;const s={onBeforeEnter(e){t.origin&&(e.style.transformOrigin=t.origin)},onLeave(e){if(t.leaveAbsolute){const{offsetTop:t,offsetLeft:l,offsetWidth:n,offsetHeight:o}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${t}px`,e.style.left=`${l}px`,e.style.width=`${n}px`,e.style.height=`${o}px`}t.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(t.leaveAbsolute&&e?._transitionInitialStyles){const{position:t,top:l,left:n,width:o,height:i}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=l||"",e.style.left=n||"",e.style.width=o||"",e.style.height=i||""}}};return()=>{const l=t.group?o.F:o.eB;return(0,n.h)(l,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:s},i.default)}}})}function u(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return(0,s.RW)()({name:e,props:{mode:{type:String,default:l},disabled:Boolean,group:Boolean},setup(l,i){let{slots:s}=i;const a=l.group?o.F:o.eB;return()=>(0,n.h)(a,{name:l.disabled?"":e,css:!l.disabled,...l.disabled?{}:t},s.default)}})}var c=l(90033);function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"width":"height",l=(0,c.PT)(`offset-${t}`);return{onBeforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[t]:e.style[t]}},onEnter(n){const o=n._initialStyle;n.style.setProperty("transition","none","important"),n.style.overflow="hidden";const i=`${n[l]}px`;n.style[t]="0",n.offsetHeight,n.style.transition=o.transition,e&&n._parent&&n._parent.classList.add(e),requestAnimationFrame((()=>{n.style[t]=i}))},onAfterEnter:o,onEnterCancelled:o,onLeave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[t]:e.style[t]},e.style.overflow="hidden",e.style[t]=`${e[l]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[t]="0"))},onAfterLeave:n,onLeaveCancelled:n};function n(t){e&&t._parent&&t._parent.classList.remove(e),o(t)}function o(e){const l=e._initialStyle[t];e.style.overflow=e._initialStyle.overflow,null!=l&&(e.style[t]=l),delete e._initialStyle}}r("fab-transition","center center","out-in"),r("dialog-bottom-transition"),r("dialog-top-transition");const d=r("fade-transition");r("scale-transition"),r("scroll-x-transition"),r("scroll-x-reverse-transition"),r("scroll-y-transition"),r("scroll-y-reverse-transition"),r("slide-x-transition"),r("slide-x-reverse-transition"),r("slide-y-transition"),r("slide-y-reverse-transition"),u("expand-transition",v()),u("expand-x-transition",v("",!0));var f=l(26861),p=l(95851),y=l(81828),h=l(45063),g=l(36839),m=l(83212),b=l(43048),w=l(52336),x=l(21070),S=l(50953);function E(e,t){const l=e?"scrollWidth":"scrollHeight";return t?.[l]||0}function _(e,t,l){if(!l)return 0;const{scrollLeft:n,offsetWidth:o,scrollWidth:i}=l;return e?t?i-o+n:n:l.scrollTop}function W(e,t){const l=e?"offsetWidth":"offsetHeight";return t?.[l]||0}function k(e,t){const l=e?"offsetLeft":"offsetTop";return t?.[l]||0}var A=l(50162),F=l(94717),I=l(14675);const L=Symbol.for("vuetify:v-slide-group"),B=(0,i.j)({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:L},nextIcon:{type:m.TX,default:"$next"},prevIcon:{type:m.TX,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>"boolean"==typeof e||["always","desktop","mobile"].includes(e)},...(0,p.u)(),...(0,y.hx)({mobile:null}),...(0,x.X)(),...(0,g.gL)({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),C=(0,s.RW)()({name:"VSlideGroup",props:B(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:l}=t;const{isRtl:o}=(0,b.IA)(),{displayClasses:i,mobile:s}=(0,y._F)(e),a=(0,g.dB)(e,e.symbol),r=(0,S.IJ)(!1),u=(0,S.IJ)(0),c=(0,S.IJ)(0),v=(0,S.IJ)(0),p=(0,n.EW)((()=>"horizontal"===e.direction)),{resizeRef:m,contentRect:x}=(0,w.w)(),{resizeRef:L,contentRect:B}=(0,w.w)(),C=(0,h.pP)(),R=(0,n.EW)((()=>({container:m.el,duration:200,easing:"easeOutQuart"}))),H=(0,n.EW)((()=>a.selected.value.length?a.items.value.findIndex((e=>e.id===a.selected.value[0])):-1)),T=(0,n.EW)((()=>a.selected.value.length?a.items.value.findIndex((e=>e.id===a.selected.value[a.selected.value.length-1])):-1));if(A.ZK){let t=-1;(0,n.wB)((()=>[a.selected.value,x.value,B.value,p.value]),(()=>{cancelAnimationFrame(t),t=requestAnimationFrame((()=>{if(x.value&&B.value){const e=p.value?"width":"height";c.value=x.value[e],v.value=B.value[e],r.value=c.value+1<v.value}if(H.value>=0&&L.el){$(L.el.children[T.value],e.centerActive)}}))}))}const z=(0,S.IJ)(!1);function $(e,t){let l=0;l=t?function(e){let{selectedElement:t,containerElement:l,isHorizontal:n}=e;const o=W(n,l);return k(n,t)-o/2+W(n,t)/2}({containerElement:m.el,isHorizontal:p.value,selectedElement:e}):function(e){let{selectedElement:t,containerElement:l,isRtl:n,isHorizontal:o}=e;const i=W(o,l),s=_(o,n,l),a=W(o,t),r=k(o,t),u=.4*a;return s>r?r-u:s+i<r+a?r-i+a+u:s}({containerElement:m.el,isHorizontal:p.value,isRtl:o.value,selectedElement:e}),M(l)}function M(e){if(!A.ZK||!m.el)return;const t=W(p.value,m.el),l=_(p.value,o.value,m.el);if(!(E(p.value,m.el)<=t||Math.abs(e-l)<16)){if(p.value&&o.value&&m.el){const{scrollWidth:t,offsetWidth:l}=m.el;e=t-l-e}p.value?C.horizontal(e,R.value):C(e,R.value)}}function O(e){const{scrollTop:t,scrollLeft:l}=e.target;u.value=p.value?l:t}function J(e){if(z.value=!0,r.value&&L.el)for(const t of e.composedPath())for(const e of L.el.children)if(e===t)return void $(e)}function P(e){z.value=!1}let q=!1;function V(e){q||z.value||e.relatedTarget&&L.el?.contains(e.relatedTarget)||K(),q=!1}function X(){q=!0}function G(e){function t(t){e.preventDefault(),K(t)}L.el&&(p.value?"ArrowRight"===e.key?t(o.value?"prev":"next"):"ArrowLeft"===e.key&&t(o.value?"next":"prev"):"ArrowDown"===e.key?t("next"):"ArrowUp"===e.key&&t("prev"),"Home"===e.key?t("first"):"End"===e.key&&t("last"))}function K(e){if(!L.el)return;let t;if(e)if("next"===e){if(t=L.el.querySelector(":focus")?.nextElementSibling,!t)return K("first")}else if("prev"===e){if(t=L.el.querySelector(":focus")?.previousElementSibling,!t)return K("last")}else"first"===e?t=L.el.firstElementChild:"last"===e&&(t=L.el.lastElementChild);else{t=(0,F.OW)(L.el)[0]}t&&t.focus({preventScroll:!0})}function j(e){const t=p.value&&o.value?-1:1,l=("prev"===e?-t:t)*c.value;let n=u.value+l;if(p.value&&o.value&&m.el){const{scrollWidth:e,offsetWidth:t}=m.el;n+=e-t}M(n)}const D=(0,n.EW)((()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected}))),N=(0,n.EW)((()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!s.value;case!0:return r.value||Math.abs(u.value)>0;case"mobile":return s.value||r.value||Math.abs(u.value)>0;default:return!s.value&&(r.value||Math.abs(u.value)>0)}})),U=(0,n.EW)((()=>Math.abs(u.value)>1)),Z=(0,n.EW)((()=>{if(!m.value)return!1;const e=E(p.value,m.el),t=function(e,t){const l=e?"clientWidth":"clientHeight";return t?.[l]||0}(p.value,m.el);return e-t-Math.abs(u.value)>1}));return(0,I.C)((()=>(0,n.bF)(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!p.value,"v-slide-group--has-affixes":N.value,"v-slide-group--is-overflowing":r.value},i.value,e.class],style:e.style,tabindex:z.value||a.selected.value.length?-1:0,onFocus:V},{default:()=>[N.value&&(0,n.bF)("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!U.value}],onMousedown:X,onClick:()=>U.value&&j("prev")},[l.prev?.(D.value)??(0,n.bF)(d,null,{default:()=>[(0,n.bF)(f.w,{icon:o.value?e.nextIcon:e.prevIcon},null)]})]),(0,n.bF)("div",{key:"container",ref:m,class:"v-slide-group__container",onScroll:O},[(0,n.bF)("div",{ref:L,class:"v-slide-group__content",onFocusin:J,onFocusout:P,onKeydown:G},[l.default?.(D.value)])]),N.value&&(0,n.bF)("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!Z.value}],onMousedown:X,onClick:()=>Z.value&&j("next")},[l.next?.(D.value)??(0,n.bF)(d,null,{default:()=>[(0,n.bF)(f.w,{icon:o.value?e.prevIcon:e.nextIcon},null)]})])]}))),{selected:a.selected,scrollTo:j,scrollOffset:u,focus:K,hasPrev:U,hasNext:Z}}})},94250:function(e,t,l){l.d(t,{U:function(){return i}});var n=l(36839),o=l(77420);const i=(0,l(72636).RW)()({name:"VSlideGroupItem",props:(0,n.TX)(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:l}=t;const i=(0,n.aO)(e,o.xE);return()=>l.default?.({isSelected:i.isSelected.value,select:i.select,toggle:i.toggle,selectedClass:i.selectedClass.value})}})}}]);