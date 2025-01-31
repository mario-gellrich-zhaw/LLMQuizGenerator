import{a as c,V as _}from"./VRow-WqU_nezu.js";import{V as x,a as C,b as V}from"./VCard-BhgO34Qz.js";import{h as y,i as h}from"./VGrid-4eGltkY4.js";import{H as n,M as p,A as o,J as a,F as v,Q as w,I as f,K as d,R as k,v as g,o as T,P as A}from"./index-DvVwanpW.js";const U={__name:"AddAdmins",props:{users:{type:Array,required:!0}},emits:["updatedUser"],setup(m,{emit:l}){const i=l,r=async(e,t)=>{try{const s=await fetch("/update_user_role",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e,role:t})});if(s.ok)console.log(`User role updated to ${t===1?"Teacher":"Student"}`),i("updatedUser",{userid:e,role:t});else{const u=await s.json();console.error("Failed to update role:",u.error)}}catch(s){console.error("Error updating role:",s)}};return(e,t)=>(n(),p("div",null,[o(_,{class:"w-100 d-flex"},{default:a(()=>[(n(!0),p(v,null,w(m.users,s=>(n(),f(c,{cols:"3",class:"d-flex w-100",key:s.id},{default:a(()=>[o(x,{class:"w-100 pa-1",variant:"elevated"},{default:a(()=>[o(C,{class:"mt-2"},{default:a(()=>[d(k(s.role===1?"Teacher":"Student"),1)]),_:2},1024),o(V,null,{default:a(()=>[o(_,null,{default:a(()=>[o(c,{cols:"10",class:"d-flex"},{default:a(()=>[d(k(s.username),1)]),_:2},1024),o(c,{cols:"2",class:"d-flex justify-end"},{default:a(()=>[s.role===1?(n(),f(y,{key:0,color:"red-lighten-2",onClick:u=>r(s.id,2)},{default:a(()=>[o(h,null,{default:a(()=>t[0]||(t[0]=[d("mdi-arrow-down")])),_:1})]),_:2},1032,["onClick"])):(n(),f(y,{key:1,color:"primary",onClick:u=>r(s.id,1)},{default:a(()=>[o(h,null,{default:a(()=>t[1]||(t[1]=[d("mdi-arrow-up")])),_:1})]),_:2},1032,["onClick"]))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]))}},E={__name:"admin",setup(m){const l=g([]),i=r=>{const e=l.value.findIndex(t=>t.id===r.userid);e!==-1&&(l.value[e].role=r.role)};return T(async()=>{try{const r=await fetch("/get_all_users",{method:"GET",headers:{"Content-Type":"application/json"}});if(r.ok){const e=await r.json();l.value=e.users}else{const e=await r.json();console.error("Failed to load users:",e.error)}}catch(r){console.error("Error fetching users:",r)}}),(r,e)=>{const t=U;return n(),p("div",null,[e[0]||(e[0]=A("h1",{class:"mb-3"},"Change Admins",-1)),o(t,{users:l.value,onUpdatedUser:i},null,8,["users"])])}}};export{E as default};
