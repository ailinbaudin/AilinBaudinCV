import{r as p,a as m,b as r,c as v,d as e,t as C,n as S,s as A,e as c,C as U,k as j,x as T,l as I,j as B,B as z,o as N,H as q,I as O}from"./index-a0301d80.js";const F={class:"text-900 font-semibold text-lg mt-5 mb-3 border-bottom-1 surface-border py-3"},G={class:"list-none p-0 m-0"},H={class:"flex align-items-center flex-1"},J={class:"flex flex-1 gap-3 flex-column sm:flex-row sm:justify-content-between"},K={class:"flex align-items-center"},P={key:0,class:"flex align-items-center font-semibold mr-3"},Q=e("i",{class:"pi pi-comment mr-2"},null,-1),R={key:1,class:"flex align-items-center font-semibold mr-3"},W=e("i",{class:"pi pi-paperclip mr-2"},null,-1),X={key:2,class:"flex align-items-center font-semibold white-space-nowrap"},Y=e("i",{class:"pi pi-clock mr-2"},null,-1),Z={class:"flex align-items-center sm:justify-content-end"},ee={class:"mr-3"},L={__name:"List",props:{title:{type:String,required:!0},taskList:{type:Array,required:!0}},emits:["checkbox:change","delete:task","open:edit:dialog"],setup(D,{emit:k}){const i=k,_=p(null),a=p(null),d=p([{label:"Edit",icon:"pi pi-pencil",command:()=>g()},{label:"Delete",icon:"pi pi-trash",command:()=>$()}]),g=()=>{i("open:edit:dialog",a.value)},$=()=>{i("delete:task",a.value)},f=t=>new Date(t).toTimeString().split(":").slice(0,2).join(":"),w=t=>{i("checkbox:change",t)},u=(t,b,h)=>{a.value=h,_.value[b].toggle(t)};return(t,b)=>{const h=m("Checkbox"),x=m("Avatar"),l=m("AvatarGroup"),o=m("Button"),s=m("Menu");return r(),v(S,null,[e("div",F,C(D.title),1),e("ul",G,[(r(!0),v(S,null,A(D.taskList,(n,V)=>{var E,M;return r(),v("li",{key:n,class:"flex flex-column gap-3 md:flex-row md:align-items-center p-2 border-bottom-1 surface-border"},[e("div",H,[c(h,{binary:"",onChange:y=>w(n),modelValue:n.completed,"onUpdate:modelValue":y=>n.completed=y,inputId:(E=n.id)==null?void 0:E.toString()},null,8,["onChange","modelValue","onUpdate:modelValue","inputId"]),e("label",{class:U(["font-medium white-space-nowrap text-overflow-ellipsis overflow-hidden ml-2",{"line-through":n.completed}]),style:{"max-width":"500px"}},C(n.name),3)]),e("div",J,[e("div",K,[n.comments?(r(),v("span",P,[Q,j(C(n.comments),1)])):T("",!0),n.attachments?(r(),v("span",R,[W,j(C(n.attachments),1)])):T("",!0),n.startDate?(r(),v("span",X,[Y,j(C(f(n.startDate)),1)])):T("",!0)]),e("div",Z,[e("div",ee,[((M=n.members)==null?void 0:M.length)>0?(r(),I(l,{key:0},{default:B(()=>[(r(!0),v(S,null,A(n.members.slice(0,4),y=>(r(),I(x,{key:y,image:"/demo/images/avatar/"+y.image,size:"large",shape:"circle"},null,8,["image"]))),128)),n&&n.members&&n.members.length>4?(r(),I(x,{key:0,label:`+${n.members.length-4}`,shape:"circle",size:"large",class:"bg-blue-500",style:z({color:"#212121",border:"2px solid var(--surface-border)"})},null,8,["label","style"])):T("",!0)]),_:2},1024)):T("",!0)]),c(o,{type:"button",icon:"pi pi-ellipsis-v",class:"z-3 ml-auto sm:ml-0",text:"",rounded:"",onClick:y=>u(y,V,n)},null,8,["onClick"]),c(s,{ref_for:!0,ref_key:"menu",ref:_,popup:"",model:d.value,class:"w-8rem"},null,8,["model"])])])])}),128))])],64)}}},te={class:"p-4"},se={class:"grid p-fluid formgrid"},le={class:"col-12 field"},oe=e("label",{for:"name",class:"text-900 font-semibold"},"Task Name",-1),ne={class:"col-12 field"},ae=e("label",{for:"description",class:"text-900 font-semibold"},"Description",-1),ie={class:"col-6 field"},ce=e("label",{for:"start",class:"text-900 font-semibold"},"Start Date",-1),de={class:"col-6 field"},re=e("label",{for:"end",class:"text-900 font-semibold"},"Due Date",-1),me={class:"col-12 field"},ue=e("label",{for:"members",class:"text-900 font-semibold"},"Add Team Member",-1),pe={class:"flex align-items-center"},ve=["src","alt"],_e={class:"text-900 font-medium"},fe={class:"flex align-items-center"},be=["src","alt"],ge={class:"text-900 font-medium"},he={class:"col-12 flex justify-content-end mt-4"},xe={__name:"CreateTaskDialog",props:{selectedTask:{type:Object,default:null}},emits:["close","save"],setup(D,{emit:k}){const i=k,_=D,a=p({}),d=p([]);N(()=>{_.selectedTask&&(a.value=_.selectedTask)});const g=async()=>{const u=await fetch("/demo/data/members.json"),{data:t}=await u.json();return t},$=()=>{i("close",a.value)},f=()=>{i("save",a.value)},w=async u=>{const t=await g();if(!u.query)return[];d.value=t.filter(b=>b.name.toLowerCase().indexOf(u.query.toLowerCase())===0)};return(u,t)=>{const b=m("InputText"),h=m("Editor"),x=m("Calendar"),l=m("AutoComplete"),o=m("Button");return r(),v("div",te,[e("div",se,[e("div",le,[oe,c(b,{id:"name",type:"text",placeholder:"Title",modelValue:a.value.name,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value.name=s)},null,8,["modelValue"])]),e("div",ne,[ae,c(h,{modelValue:a.value.description,"onUpdate:modelValue":t[1]||(t[1]=s=>a.value.description=s),pt:{root:{style:{height:"150px"},class:"mb-6"}}},null,8,["modelValue"])]),e("div",ie,[ce,c(x,{dateFormat:"yy-mm-dd","show-time":!1,inputId:"start",placeholder:"Start Date",modelValue:a.value.startDate,"onUpdate:modelValue":t[2]||(t[2]=s=>a.value.startDate=s)},null,8,["modelValue"])]),e("div",de,[re,c(x,{dateFormat:"yy-mm-dd","show-time":!1,inputId:"end",placeholder:"End Date",modelValue:a.value.endDate,"onUpdate:modelValue":t[3]||(t[3]=s=>a.value.endDate=s)},null,8,["modelValue"])]),e("div",me,[ue,c(l,{inputId:"members",modelValue:a.value.members,"onUpdate:modelValue":t[4]||(t[4]=s=>a.value.members=s),suggestions:d.value,field:"name",multiple:"",onComplete:t[5]||(t[5]=s=>w(s)),inputStyle:{height:"2.5rem"}},{chip:B(({value:s})=>[e("div",pe,[e("img",{src:"/demo/images/avatar/"+s.image,alt:s.name,class:"h-2rem w-2rem mr-2"},null,8,ve),e("span",_e,C(s.name),1)])]),item:B(({item:s})=>[e("div",fe,[e("img",{src:"/demo/images/avatar/"+s.image,alt:s.name,class:"h-2rem w-2rem mr-2"},null,8,be),e("span",ge,C(s.name),1)])]),_:1},8,["modelValue","suggestions"])]),e("div",he,[c(o,{class:"w-8rem mr-3",outlined:"",icon:"pi pi-times",label:"Cancel",onClick:t[6]||(t[6]=s=>$())}),c(o,{class:"w-8rem",icon:"pi pi-check",label:"Save",onClick:t[7]||(t[7]=s=>f())})])])])}}},ye={class:"card"},Ce={class:"flex justify-content-between align-items-center mb-5"},ke=e("span",{class:"text-900 text-xl font-semibold"},"Task List",-1),De={__name:"Index",setup(D){const k=q(),i=p([]),_=p([]),a=p([]),d=p({visible:!1,task:null}),g=p(null);O(async()=>{i.value=await $(),f(i.value)});const $=async()=>{const l=await fetch("/demo/data/tasks.json"),{data:o}=await l.json();return o},f=l=>{_.value=l.filter(o=>o.completed!==!0),a.value=l.filter(o=>o.completed)},w=l=>{i.value.find(o=>o.id===l.id).completed=l.completed,f(i.value)},u=l=>{i.value=i.value.filter(o=>o.id!==l.id),f(i.value)},t=l=>{d.value.visible=!0,d.value.header="Edit Task",g.value=l},b=()=>{d.value.visible=!0,d.value.header="Create Task",g.value=null},h=()=>{d.value.visible=!1},x=l=>{l?(i.value=i.value.filter(o=>o.id!==l.id),i.value.push(l),k.add({severity:"success",summary:"Edited",detail:`Task "${l.name}" edited successfully.`,life:3e3})):(i.value.push(l),k.add({severity:"success",summary:"Success",detail:`Task "${l.name}" created successfully.`,life:3e3})),f(i.value),d.value.visible=!1};return(l,o)=>{const s=m("Button"),n=m("Dialog");return r(),v(S,null,[e("div",ye,[e("div",Ce,[ke,c(s,{class:"font-semibold",outlined:"",icon:"pi pi-plus",label:"Create Task",onClick:o[0]||(o[0]=V=>b())})]),c(L,{"task-list":_.value,title:"ToDo","onCheckbox:change":w,"onDelete:task":u,"onOpen:edit:dialog":t},null,8,["task-list"]),c(L,{"task-list":a.value,title:"Completed","onCheckbox:change":w,"onDelete:task":u,"onOpen:edit:dialog":t},null,8,["task-list"])]),c(n,{header:d.value.header||"",visible:d.value.visible,"onUpdate:visible":o[2]||(o[2]=V=>d.value.visible=V),modal:"",class:"mx-3 sm:mx-0 sm:w-full md:w-8 lg:w-6",contentClass:"border-round-bottom border-top-1 surface-border p-0"},{default:B(()=>[c(xe,{"selected-task":g.value,onClose:o[1]||(o[1]=V=>h()),onSave:x},null,8,["selected-task"])]),_:1},8,["header","visible"])],64)}}};export{De as default};