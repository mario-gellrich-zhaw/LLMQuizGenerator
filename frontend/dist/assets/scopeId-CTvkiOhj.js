import{p as c,aO as d,ao as y}from"./index-DvVwanpW.js";const p=c({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function f(o,e){let n=()=>{};function t(r){n==null||n();const s=Number(r?o.openDelay:o.closeDelay);return new Promise(l=>{n=d(s,()=>{e==null||e(r),l(r)})})}function u(){return t(!0)}function a(){return t(!1)}return{clearDelay:n,runOpenDelay:u,runCloseDelay:a}}function D(){const e=y("useScopeId").vnode.scopeId;return{scopeId:e?{[e]:""}:void 0}}export{f as a,p as m,D as u};
