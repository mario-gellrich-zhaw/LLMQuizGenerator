import{_ as J}from"./index-DrS5hx25.js";import{a as be,f as we,b as ke,c as qe,V as T}from"./VTextField-CD_pis4z.js";import{m as Ce,a as Ie,V as Z,f as Se}from"./forwardRefs-pvvoiOgf.js";import{p as Ue,a4 as ae,j as Qe,ab as xe,q as Ee,c as F,as as ee,v as x,w as oe,z as Pe,at as Fe,A as e,B,F as E,D as $e,au as je,H as r,I as h,J as l,L as $,S as k,M as V,Q as L,K as q,R as j,P as g,o as Ae}from"./index-CcPHgkhE.js";import{V as De}from"./VChip-BbhIzyQq.js";import{V as I,a as z}from"./VRow-LmMTb7Ah.js";import{V as G,h as C,i as M,j as Re}from"./VGrid-BCVseRUq.js";import{V as Te}from"./VContainer-COs0_WKm.js";import{_ as se}from"./CodeHighlight-CL30LvmT.js";import{u as ne}from"./useQuestionsStore-C-PLweqc.js";import{V as Be,a as Le,b as Ne,c as Oe}from"./VExpansionPanels-_0Wys9H0.js";import{u as ie}from"./useQuizzesStore-CZy2_rcH.js";import{V as Me,c as te,a as O,b as le}from"./VList-glc88tzn.js";import{V as Je}from"./VDialog-DD-mjBOV.js";import{V as He,b as Ge,c as Ke}from"./VCard-M_cdjlUO.js";import{V as ue}from"./VAlert-B_BOz_DT.js";import"./lazy-DIt8_obv.js";import"./VOverlay-DRREc7f8.js";import"./scopeId-Dxwv5boC.js";const We=Ue({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:t=>typeof t=="boolean"||[1e3,1024].includes(Number(t))},...Ce({prependIcon:"$file"}),modelValue:{type:[Array,Object],default:t=>t.multiple?[]:null,validator:t=>ae(t).every(o=>o!=null&&typeof o=="object")},...be({clearable:!0})},"VFileInput"),Xe=Qe()({name:"VFileInput",inheritAttrs:!1,props:We(),emits:{"click:control":t=>!0,"mousedown:control":t=>!0,"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,o){let{attrs:y,emit:v,slots:s}=o;const{t:f}=xe(),m=Ee(t,"modelValue",t.modelValue,i=>ae(i),i=>!t.multiple&&Array.isArray(i)?i[0]:i),{isFocused:p,focus:n,blur:S}=Ie(t),b=F(()=>typeof t.showSize!="boolean"?t.showSize:void 0),u=F(()=>(m.value??[]).reduce((i,_)=>{let{size:A=0}=_;return i+A},0)),a=F(()=>ee(u.value,b.value)),c=F(()=>(m.value??[]).map(i=>{const{name:_="",size:A=0}=i;return t.showSize?`${_} (${ee(A,b.value)})`:_})),w=F(()=>{var _;const i=((_=m.value)==null?void 0:_.length)??0;return t.showSize?f(t.counterSizeString,i,a.value):f(t.counterString,i)}),d=x(),P=x(),U=x(),re=F(()=>p.value||t.active),K=F(()=>["plain","underlined"].includes(t.variant));function H(){var i;U.value!==document.activeElement&&((i=U.value)==null||i.focus()),p.value||n()}function de(i){var _;(_=U.value)==null||_.click()}function ce(i){v("mousedown:control",i)}function me(i){var _;(_=U.value)==null||_.click(),v("click:control",i)}function fe(i){i.stopPropagation(),H(),$e(()=>{m.value=[],je(t["onClick:clear"],i)})}return oe(m,i=>{(!Array.isArray(i)||!i.length)&&U.value&&(U.value.value="")}),Pe(()=>{const i=!!(s.counter||t.counter),_=!!(i||s.details),[A,pe]=Fe(y),{modelValue:_t,...ge}=Z.filterProps(t),ve=we(t);return e(Z,B({ref:d,modelValue:m.value,"onUpdate:modelValue":D=>m.value=D,class:["v-file-input",{"v-file-input--chips":!!t.chips,"v-file-input--hide":t.hideInput,"v-input--plain-underlined":K.value},t.class],style:t.style,"onClick:prepend":de},A,ge,{centerAffix:!K.value,focused:p.value}),{...s,default:D=>{let{id:N,isDisabled:R,isDirty:W,isReadonly:X,isValid:_e}=D;return e(ke,B({ref:P,"prepend-icon":t.prependIcon,onMousedown:ce,onClick:me,"onClick:clear":fe,"onClick:prependInner":t["onClick:prependInner"],"onClick:appendInner":t["onClick:appendInner"]},ve,{id:N.value,active:re.value||W.value,dirty:W.value||t.dirty,disabled:R.value,focused:p.value,error:_e.value===!1}),{...s,default:ye=>{var Y;let{props:{class:ze,...he}}=ye;return e(E,null,[e("input",B({ref:U,type:"file",readonly:X.value,disabled:R.value,multiple:t.multiple,name:t.name,onClick:Q=>{Q.stopPropagation(),X.value&&Q.preventDefault(),H()},onChange:Q=>{if(!Q.target)return;const Ve=Q.target;m.value=[...Ve.files??[]]},onFocus:H,onBlur:S},he,pe),null),e("div",{class:ze},[!!((Y=m.value)!=null&&Y.length)&&!t.hideInput&&(s.selection?s.selection({fileNames:c.value,totalBytes:u.value,totalBytesReadable:a.value}):t.chips?c.value.map(Q=>e(De,{key:Q,size:"small",text:Q},null)):c.value.join(", "))])])}})},details:_?D=>{var N,R;return e(E,null,[(N=s.details)==null?void 0:N.call(s,D),i&&e(E,null,[e("span",null,null),e(qe,{active:!!((R=m.value)!=null&&R.length),value:w.value,disabled:t.disabled},s.counter)])])}:void 0})}),Se({},d,P,U)}}),Ye={props:{existingImageUrl:{type:String,default:""}},data(){return{file:null,previewUrl:this.existingImageUrl||""}},methods:{onFileChange(t){const o=t.target.files[0];o?(this.file=o,this.previewUrl=URL.createObjectURL(o),console.log(URL.createObjectURL(o)),this.$emit("image-changed",o,this.previewUrl)):this.previewUrl=this.existingImageUrl}}};function Ze(t,o,y,v,s,f){return r(),h(Te,null,{default:l(()=>[e(Xe,{modelValue:s.file,"onUpdate:modelValue":o[0]||(o[0]=m=>s.file=m),label:"Upload Image",accept:"image/*","prepend-icon":"mdi-upload",outlined:"",onChange:f.onFileChange},null,8,["modelValue","onChange"]),s.previewUrl?(r(),h(I,{key:0},{default:l(()=>[e(z,{cols:"12"},{default:l(()=>[e(G,{src:s.previewUrl,alt:"Image Preview","max-height":"300"},null,8,["src"])]),_:1})]),_:1})):$("",!0)]),_:1})}const et=J(Ye,[["render",Ze],["__scopeId","data-v-2031e260"]]),tt={class:"mb-3"},lt={class:"mb-3"},at={key:0},ot={__name:"EditQuestions",setup(t){const o=ne(),y=()=>{o.questions.push({question:"",topic:"",options:[{option:""},{option:""},{option:""},{option:""},{option:""}],answer:"",code:null})},v=async(p,n,S)=>{console.log(`Deleting image at URL: ${p}`);try{const b=await fetch("/deleteImage",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:p,question_id:n})});if(b.ok){const u=await b.json();console.log("Image deleted successfully:",u),m(S)}else{const u=await b.json();console.error("Failed to delete image:",u)}}catch(b){console.error("An error occurred while deleting the image:",b)}},s=p=>{o.deleteQuestion(p)},f=(p,n)=>{o.questions[p].image_file=n},m=p=>{o.questions[p].image_url=null,o.questions[p].image_file=null};return(p,n)=>{const S=se,b=et;return r(),h(Oe,{class:"mb-6"},{default:l(()=>[e(I,{class:"w-100"},{default:l(()=>[e(z,{cols:"12",class:"w-100"},{default:l(()=>[e(T,{variant:"outlined",clearable:"",modelValue:k(o).title,"onUpdate:modelValue":n[0]||(n[0]=u=>k(o).title=u)},null,8,["modelValue"])]),_:1})]),_:1}),(r(!0),V(E,null,L(k(o).questions,(u,a)=>(r(),h(I,{key:a,class:"mt-2 w-100"},{default:l(()=>[e(z,{cols:"11"},{default:l(()=>[e(Be,{"bg-color":"grey-darken-3"},{default:l(()=>[e(Le,{"expand-icon":"mdi-menu-down",color:"grey-darken-3"},{default:l(()=>[q(j(u.question),1)]),_:2},1024),e(Ne,null,{default:l(()=>[g("p",tt,[n[1]||(n[1]=g("strong",null,"Question:",-1)),e(T,{modelValue:k(o).questions[a].question,"onUpdate:modelValue":c=>k(o).questions[a].question=c,clearable:""},null,8,["modelValue","onUpdate:modelValue"])]),g("p",lt,[n[2]||(n[2]=g("strong",null,"Topic:",-1)),q(" "+j(u.topic),1)]),n[5]||(n[5]=g("p",{class:"mb-3"},[g("strong",null,"Options:")],-1)),(r(!0),V(E,null,L(u.options,(c,w)=>(r(),h(T,{key:w,modelValue:k(o).questions[a].options[w].option,"onUpdate:modelValue":d=>k(o).questions[a].options[w].option=d,variant:"outlined",clearable:"",class:"w-100"},null,8,["modelValue","onUpdate:modelValue"]))),128)),n[6]||(n[6]=g("p",{class:"mb-3"},[g("strong",null,"Answer:")],-1)),e(T,{modelValue:k(o).questions[a].answer,"onUpdate:modelValue":c=>k(o).questions[a].answer=c,variant:"outlined",clearable:"",class:"w-100"},null,8,["modelValue","onUpdate:modelValue"]),u.code?(r(),V("div",at,[n[3]||(n[3]=g("p",{class:"mb-3"},[g("strong",null,"Code:")],-1)),e(T,{modelValue:k(o).questions[a].code,"onUpdate:modelValue":c=>k(o).questions[a].code=c,variant:"outlined",clearable:"",class:"w-100"},null,8,["modelValue","onUpdate:modelValue"]),e(S,{code:u.code},null,8,["code"])])):$("",!0),n[7]||(n[7]=g("p",{class:"mb-3"},[g("strong",null,"Image:")],-1)),u.image_url?(r(),h(I,{key:1},{default:l(()=>[e(z,{cols:"12",class:"w-100"},{default:l(()=>[e(G,{src:""+u.image_url,"max-height":"400",width:"100%"},null,8,["src"])]),_:2},1024),e(z,{class:"d-flex justify-start align-end"},{default:l(()=>[e(C,{color:"red-lighten-2",class:"w-10",onClick:c=>v(u.image_url,u.question_id,a)},{default:l(()=>n[4]||(n[4]=[q("Delete Image")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)):(r(),h(b,{key:2,existingImageUrl:u.imageUrl,onImageChanged:c=>f(a,c)},null,8,["existingImageUrl","onImageChanged"]))]),_:2},1024)]),_:2},1024)]),_:2},1024),e(z,{cols:"1",class:"d-flex align-top justify-center mt-1"},{default:l(()=>[e(C,{color:"red-lighten-2",class:"w-50",onClick:c=>s(a)},{default:l(()=>[e(M,{icon:"mdi-delete",color:"white"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),e(I,null,{default:l(()=>[e(z,{class:"d-flex justify-end mt-4"},{default:l(()=>[e(C,{color:"secondary",onClick:y},{default:l(()=>n[8]||(n[8]=[q("Add Question")])),_:1})]),_:1})]),_:1})]),_:1})}}},st=J(ot,[["__scopeId","data-v-3d16ab3a"]]),nt={key:0,class:"text-overline text-secondary text-small published"},it={key:1,class:"text-overline text-uppercase text-grey published"},ut={class:"mt-2"},rt={class:"title ml-0 mt-2"},dt={class:"answer"},ct={key:0},mt={__name:"Quiz",props:{quiz:Object},setup(t){const o=t,y=x(null),v=x(!1),s=ie(),f=ne(),m=()=>{v.value=!0,f.setQuiz({title:o.quiz.title,questions:JSON.parse(JSON.stringify(o.quiz.questions))})},p=()=>{v.value=!1,setTimeout(()=>{f.clearQuiz(),y.value=null},300)},n=async()=>{const u={title:f.title,questions:JSON.parse(JSON.stringify(f.questions)),quiz_id:o.quiz.quiz_id,published:o.quiz.published};try{if(!(await fetch(`/updateQuiz/${o.quiz.quiz_id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)})).ok)throw new Error("Failed to update quiz in the database");s.updateQuiz(o.quiz.quiz_id,u),y.value=null,f.questions.forEach(c=>{if(c.image_file){const w=new FormData;w.append("image_file",c.image_file),w.append("question_id",c.question_id),fetch("/savePicture",{method:"POST",body:w}).then(d=>d.json()).then(d=>{d.image_url?s.updateQuestionImageURL(o.quiz.quiz_id,c.question_id,d.image_url):console.error("No image_url returned for question:",c.question_id)}).catch(d=>{console.error("Error uploading image for question:",c.question_id,d)})}}),v.value=!1,f.clearQuiz()}catch(a){console.error("Error updating quiz in the database:",a),y.value=a.message}},S=async u=>{try{const a=await fetch(`/updateQuizStatus/${u}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({published:!s.getQuizById(u).published})});if(!a.ok)throw new Error("Failed to update quiz status");const c=await a.json();console.log("Quiz status updated:",c),s.togglePublishedStatus(u)}catch(a){console.error("Error updating quiz status:",a)}},b=async()=>{if(confirm("Are you sure you want to delete this quiz?"))try{if(!(await fetch(`/deleteQuiz/${o.quiz.quiz_id}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})).ok)throw new Error("Failed to delete quiz from the database");s.removeQuiz(o.quiz.quiz_id),p()}catch(a){console.error("Error deleting quiz:",a),y.value=a.message}};return(u,a)=>{const c=se,w=st;return r(),h(I,{class:"d-flex"},{default:l(()=>[e(z,{cols:"12",class:"d-flex mt-0 pb-0"},{default:l(()=>[t.quiz.published?(r(),V("p",nt," published ")):(r(),V("p",it," unpublished "))]),_:1}),e(z,{cols:"10 pl-0 pt-0"},{default:l(()=>[e(Me,null,{default:l(()=>[e(te,null,{activator:l(({props:d})=>[e(O,B(d,{title:`Quiz: ${t.quiz.title}`,class:"title"}),null,16,["title"])]),default:l(()=>[(r(!0),V(E,null,L(t.quiz.questions,d=>(r(),h(te,{key:d.id,class:"divider"},{activator:l(({props:P})=>[e(O,B({ref_for:!0},P,{title:d.question}),null,16,["title"])]),default:l(()=>[e(O,{title:"Options"},{default:l(()=>[e(le,{class:"border-opacity-50 mt-2"}),g("ul",ut,[(r(!0),V(E,null,L(d.options,P=>(r(),V("li",{key:P.option_id,class:"pl-0 ml-4 list-item"},j(P.option),1))),128))]),e(le,{class:"border-opacity-50 mt-2",color:"secondary"}),g("p",rt,[a[3]||(a[3]=q(" Answer: ")),g("span",dt,j(d.answer),1)]),d.code?(r(),V("div",ct,[a[4]||(a[4]=g("p",{class:"ml-0 mt-2"},"Code:",-1)),e(c,{code:d.code},null,8,["code"])])):$("",!0)]),_:2},1024),d.image_url?(r(),h(O,{key:0,class:"mb-2"},{default:l(()=>[a[5]||(a[5]=g("h3",{class:"mb-2"},"Image:",-1)),e(I,null,{default:l(()=>[e(z,{cols:"12",class:"w-100"},{default:l(()=>[e(G,{src:""+d.image_url,"max-height":"400",width:"100%"},null,8,["src"])]),_:2},1024)]),_:2},1024)]),_:2},1024)):$("",!0)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),e(z,{class:"align-top d-flex pt-0 mt-2",cols:"2"},{default:l(()=>[e(C,{class:"ml-0 mr-2",size:"large",color:"secondary",onClick:m},{default:l(()=>[e(M,{icon:"mdi-pencil"})]),_:1}),t.quiz.published?(r(),h(C,{key:1,color:"red-lighten-3",size:"large",onClick:a[1]||(a[1]=d=>S(t.quiz.quiz_id))},{default:l(()=>[e(M,{icon:"mdi-share",class:"invert-vertical"})]),_:1})):(r(),h(C,{key:0,class:"",size:"large",color:"primary",onClick:a[0]||(a[0]=d=>S(t.quiz.quiz_id))},{default:l(()=>[e(M,{icon:"mdi-share"})]),_:1}))]),_:1}),e(Je,{modelValue:v.value,"onUpdate:modelValue":a[2]||(a[2]=d=>v.value=d),persistent:"",class:"w-75"},{default:l(()=>[e(He,{title:`Edit Quiz: ${t.quiz.title}`},{default:l(()=>[e(Ge,null,{default:l(()=>[e(w,{quiz:t.quiz},null,8,["quiz"]),e(I,null,{default:l(()=>[y.value?(r(),h(ue,{key:0,type:"error",class:"ma-3"},{default:l(()=>[q(j(y.value),1)]),_:1})):$("",!0)]),_:1})]),_:1}),e(Ke,{class:"pr-6 pb-5"},{default:l(()=>[e(I,null,{default:l(()=>[e(z,{cols:"8",class:"d-flex align-start pl-6"},{default:l(()=>[e(C,{variant:"elevated",color:"grey-darken-3",class:"w-33",onClick:b},{default:l(()=>a[6]||(a[6]=[q("Delete Quiz")])),_:1})]),_:1}),e(z,{cols:"2",class:"d-flex align-center"},{default:l(()=>[e(C,{onClick:p,variant:"elevated",color:"grey-darken-3",class:"w-100"},{default:l(()=>a[7]||(a[7]=[q("Cancel")])),_:1})]),_:1}),e(z,{cols:"2",class:"d-flex align-center"},{default:l(()=>[e(C,{onClick:n,variant:"elevated",color:"primary",class:"w-100"},{default:l(()=>a[8]||(a[8]=[q("Save")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"])]),_:1})}}},ft=J(mt,[["__scopeId","data-v-f3112c7c"]]),pt={key:0,class:"d-flex justify-center align-center loader"},gt={key:1,class:"d-flex justify-center align-center"},vt={__name:"quizzes",setup(t){const o=ie(),y=x(o.quizzes),v=x(!1),s=x("");return Ae(async()=>{if(o.quizzes.length===0){v.value=!0,s.value="";try{const f=await fetch("/getAllQuizzes",{method:"GET",headers:{"Content-Type":"application/json"}});if(f.ok){const m=await f.json();o.setQuizzes(m),y.value=m}else{const m=await f.json();s.value="Failed to load quizzes: "+m.error}}catch(f){s.value="Error fetching quizzes: "+f.message}finally{v.value=!1}}}),oe(()=>o.quizzes,f=>{y.value=f}),(f,m)=>{const p=ft;return r(),V("div",null,[m[0]||(m[0]=g("h1",{class:"mb-3"},"Quizzes",-1)),v.value?(r(),V("div",pt,[e(Re,{color:"blue-lighten-3",indeterminate:"",size:56})])):$("",!0),!v.value&&s.value?(r(),V("div",gt,[e(ue,{type:"error"},{default:l(()=>[q(j(s.value),1)]),_:1})])):(r(!0),V(E,{key:2},L(y.value,n=>(r(),h(p,{key:n.id,quiz:n,class:""},null,8,["quiz"]))),128))])}}},At=J(vt,[["__scopeId","data-v-e3ec6b14"]]);export{At as default};
