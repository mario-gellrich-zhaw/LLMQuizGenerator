import{j as c,aS as g,T as p,Y as h,p as _,aT as S}from"./index-DvVwanpW.js";const T=(s,l)=>{const i=s.__vccOpts||s;for(const[e,a]of l)i[e]=a;return i},b=_({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function o(s,l,i){return c()({name:s,props:b({mode:i,origin:l}),setup(e,a){let{slots:r}=a;const t={onBeforeEnter(n){e.origin&&(n.style.transformOrigin=e.origin)},onLeave(n){if(e.leaveAbsolute){const{offsetTop:d,offsetLeft:f,offsetWidth:y,offsetHeight:u}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${d}px`,n.style.left=`${f}px`,n.style.width=`${y}px`,n.style.height=`${u}px`}e.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(e.leaveAbsolute&&(n!=null&&n._transitionInitialStyles)){const{position:d,top:f,left:y,width:u,height:x}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=d||"",n.style.top=f||"",n.style.left=y||"",n.style.width=u||"",n.style.height=x||""}}};return()=>{const n=e.group?g:p;return h(n,{name:e.disabled?"":s,css:!e.disabled,...e.group?void 0:{mode:e.mode},...e.disabled?{}:t},r.default)}}})}function m(s,l){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return c()({name:s,props:{mode:{type:String,default:i},disabled:Boolean,group:Boolean},setup(e,a){let{slots:r}=a;const t=e.group?g:p;return()=>h(t,{name:e.disabled?"":s,css:!e.disabled,...e.disabled?{}:l},r.default)}})}function v(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const i=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",e=S(`offset-${i}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[i]:t.style[i]}},onEnter(t){const n=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const d=`${t[e]}px`;t.style[i]="0",t.offsetHeight,t.style.transition=n.transition,s&&t._parent&&t._parent.classList.add(s),requestAnimationFrame(()=>{t.style[i]=d})},onAfterEnter:r,onEnterCancelled:r,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[i]:t.style[i]},t.style.overflow="hidden",t.style[i]=`${t[e]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[i]="0")},onAfterLeave:a,onLeaveCancelled:a};function a(t){s&&t._parent&&t._parent.classList.remove(s),r(t)}function r(t){const n=t._initialStyle[i];t.style.overflow=t._initialStyle.overflow,n!=null&&(t.style[i]=n),delete t._initialStyle}}o("fab-transition","center center","out-in");o("dialog-bottom-transition");o("dialog-top-transition");const L=o("fade-transition");o("scale-transition");o("scroll-x-transition");o("scroll-x-reverse-transition");o("scroll-y-transition");o("scroll-y-reverse-transition");o("slide-x-transition");o("slide-x-reverse-transition");const A=o("slide-y-transition");o("slide-y-reverse-transition");const B=m("expand-transition",v()),E=m("expand-x-transition",v("",!0));export{L as V,T as _,E as a,B as b,A as c};
