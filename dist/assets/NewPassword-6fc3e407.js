import{r as d,q as v,u as w,E as h,a as u,b as p,c as m,d as e,e as s,n as x,R as y}from"./index-a0301d80.js";const g={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1600 800",class:"fixed left-0 top-0 min-h-screen min-w-screen",preserveAspectRatio:"none"},b=["fill"],C=["fill"],V=["fill"],k=["fill"],z=["fill"],M={class:"px-5 min-h-screen flex justify-content-center align-items-center"},B={class:"border-1 surface-border surface-card border-round py-7 px-4 md:px-7 z-1"},P=e("div",{class:"mb-4"},[e("div",{class:"text-900 text-xl font-bold mb-2"},"New Password"),e("span",{class:"text-600 font-medium"},"Enter your new password")],-1),H={class:"flex flex-column"},N={class:"p-input-icon-left w-full mb-4"},R=e("i",{class:"pi pi-lock z-2"},null,-1),S={class:"p-input-icon-left w-full mb-4"},E=e("i",{class:"pi pi-lock z-2"},null,-1),L={class:"flex flex-wrap gap-2 justify-content-between"},A={__name:"NewPassword",setup(j){const o=d(null),n=d(null),f=v(),{layoutConfig:_}=w(),l=h(()=>_.colorScheme.value!=="light"),r=()=>{f.push({name:"e-commerce"})};return(U,a)=>{const c=u("Password"),i=u("Button");return p(),m(x,null,[(p(),m("svg",g,[e("rect",{fill:l.value?"var(--primary-900)":"var(--primary-500)",width:"1600",height:"800"},null,8,b),e("path",{fill:l.value?"var(--primary-800)":"var(--primary-400)",d:`M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2
        478.4 581z`},null,8,C),e("path",{fill:l.value?"var(--primary-700)":"var(--primary-300)",d:"M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z"},null,8,V),e("path",{fill:l.value?"var(--primary-600)":"var(--primary-200)",d:"M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z"},null,8,k),e("path",{fill:l.value?"var(--primary-500)":"var(--primary-100)",d:"M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z"},null,8,z)])),e("div",M,[e("div",B,[P,e("div",H,[e("span",N,[R,s(c,{id:"password1",placeholder:"Password",modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=t=>o.value=t),class:"w-full",inputStyle:{paddingLeft:"2.5rem"},inputClass:"w-full md:w-25rem",toggleMask:""},null,8,["modelValue"])]),e("span",S,[E,s(c,{id:"password2",placeholder:"Repeat Password",modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=t=>n.value=t),class:"w-full",inputStyle:{paddingLeft:"2.5rem"},inputClass:"w-full md:w-25rem",toggleMask:"",feedback:!1},null,8,["modelValue"])]),e("div",L,[s(i,{label:"Cancel",class:"flex-auto",outlined:"",onClick:r}),s(i,{label:"Submit",class:"flex-auto",onClick:r})])])])]),s(y,{simple:""})],64)}}};export{A as default};