import{s as B,_ as H,a as A,b as F,c as N,d as T,e as K}from"./sendRequest.5fa3a0f7.js";import{u as G,a as J,w as W,v as g,k as O}from"./entry.c52df9c7.js";import{u as Q}from"./composables.2aba9a08.js";import{D as _,a7 as p,ac as t,H as s,ai as h,aa as d,ae as f,ad as L,a9 as X,U as k,a8 as U,$ as l,a0 as b}from"./_plugin-vue_export-helper.2fc013a1.js";const Y=t("div",{class:"name"},"Welcome Arnaud",-1),Z={class:"create"},P=["onSubmit"],tt=t("label",{for:"name"},"Name Website",-1),et=t("label",{for:"url"},"URL",-1),nt=t("label",{for:"template"},"Template",-1),st=t("option",{value:"pizzeria"},"Pizzeria",-1),at=t("option",{value:"psy"},"Psy",-1),ot=t("option",{value:"research"},"Research",-1),lt=[st,at,ot],it=t("button",{type:"submit"},"Create Website",-1),rt=["onSubmit"],ut=t("label",{for:"name"},"Name Website",-1),dt=t("label",{for:"name"},"URL",-1),ct=t("button",{type:"submit"},"Create Website",-1),pt={class:"f"},mt=t("br",null,null,-1),_t=t("br",null,null,-1),ft=t("br",null,null,-1),bt=t("br",null,null,-1),vt=t("br",null,null,-1),ht=t("br",null,null,-1),gt=t("br",null,null,-1),yt=t("br",null,null,-1),xt=t("div",{id:"status"},null,-1),kt=["href"],Ct={style:{display:"flex",width:"80%",margin:"auto"}},wt={style:{flex:"1","margin-right":"20px"}},$t={style:{"box-shadow":"1px 1px 15px","margin-top":"10px"}},Vt={__name:"generate",setup(St){_({});const v=_({}),o=_({}),C=_({}),y=_([]);G(),J();let x=null;const i=_({name:"",url:"",template:""});Q({script:[{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",integrity:"sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4",crossorigin:"anonymous"}],link:[{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",rel:"stylesheet",type:"text/css",integrity:"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",crossorigin:"anonymous"},{href:"https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",rel:"stylesheet",type:"text/css"},{href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",rel:"stylesheet",type:"text/css"},{href:"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css",rel:"stylesheet",type:"text/css"}]});async function w(){var n=await $fetch("/api/createWebsite",{method:"post",body:{name:i.value.name,url:i.value.url,template:i.value.template}});console.log(n.data),x=n.data,o.value=n.data.attributes,o.value.hosting_info=n.data.hosting_info,o.value.id=n.data.id,n.data&&n.data.attributes&&(v.value=n.data.attributes.pages.data),$(),setInterval($,5e3)}function $(){var n='<img src="https://api.netlify.com/api/v1/badges/'+o.value.hosting_info.site_id+'/deploy-status">';document.getElementById("status").innerHTML=n}async function E(){await $fetch("/api/deploy",{method:"post",body:{website_id:o.id}})}async function M(){var n=document.querySelectorAll("*[id]");for(const e of n)e.id.search("content_")==0&&(e.contentEditable=!0)}async function V(){var n=document.querySelectorAll("*[id]");for(const m of n)if(m.id.search("content_")==0){var e=m.id.split("_"),u=parseInt(e[1]),c=e[2];v.value[0].attributes.content[u][c]=m.innerHTML}await $fetch("/api/updateContentWebsite",{method:"post",body:v.value[0]})}async function S(n){await $fetch("/api/updateCSS",{method:"post",body:{CSS:n,id:x.id}}),o.value.css=n}async function j(){console.log("RETRIEVE");var n=await $fetch("/api/getWebsite",{method:"post",body:{id:1}});o.value=n.data.attributes;const e=await B("navigation/render/"+o.value.navigationId,null,!1);y.value=D(e.value),x=n.data,v.value=n.data.attributes.pages.data}function D(n){var e=[];for(const c of n)if(c.parent==null)e.push(c);else{var u=e.findIndex(m=>m.id==c.parent.id);console.log(u),e[u].child=e[u].child==null?[]:e[u].child,e[u].child.push(c)}return e}return(n,e)=>{const u=H,c=N,m=T,I=A,R=F,q=K;return l(),p(k,null,[Y,t("div",Z,[s(C).step2!=!0?(l(),p("form",{key:0,onSubmit:W(w,["prevent"])},[t("fieldset",null,[t("ul",null,[t("li",null,[tt,h(t("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=a=>s(i).name=a),required:""},null,512),[[g,s(i).name]])]),t("li",null,[et,h(t("input",{type:"text",id:"url","onUpdate:modelValue":e[1]||(e[1]=a=>s(i).url=a),required:""},null,512),[[g,s(i).url]])]),t("li",null,[nt,h(t("select",{"onUpdate:modelValue":e[2]||(e[2]=a=>s(i).template=a)},lt,512),[[O,s(i).template]])])])]),it],40,P)):d("",!0),s(C).step2==!0?(l(),p("form",{key:1,onSubmit:W(w,["prevent"])},[t("fieldset",null,[t("ul",null,[t("li",null,[ut,h(t("input",{type:"text",id:"name","onUpdate:modelValue":e[3]||(e[3]=a=>s(i).name=a),required:""},null,512),[[g,s(i).name]])]),t("li",null,[dt,h(t("input",{type:"text",id:"name","onUpdate:modelValue":e[4]||(e[4]=a=>s(i).url=a),required:""},null,512),[[g,s(i).url]])])])]),ct],40,rt)):d("",!0)]),t("div",pt,[t("button",{onClick:e[5]||(e[5]=a=>S("brutalist"))},"Use Brutalist"),mt,t("button",{onClick:e[6]||(e[6]=a=>S("default"))},"Use Default"),_t,f(),ft,t("button",{onClick:e[7]||(e[7]=a=>j())},"Retrieve Website"),f(),bt,f(),vt,t("button",{onClick:e[8]||(e[8]=a=>M())},"Edit Mode"),f(),ht,t("button",{onClick:e[9]||(e[9]=a=>V())},"Save Edit"),f(),gt,f(),yt,t("button",{onClick:e[10]||(e[10]=a=>E())},"Deploy"),xt,s(o)&&s(o).hosting_info?(l(),p("a",{key:0,href:s(o).hosting_info.url,target:"_blank"},L(s(o).hosting_info.url),9,kt)):d("",!0),t("div",{class:X(["",s(o).css])},[t("div",Ct,[(l(!0),p(k,null,U(s(v),(a,Wt)=>(l(),p("div",wt,[t("div",null,"Page: "+L(a.attributes.url),1),t("div",$t,[(l(!0),p(k,null,U(a.attributes.content,(r,z)=>(l(),p("div",null,[r.__component=="page-structure.header"?(l(),b(u,{key:0,index:z,data:r,navList:s(y),generalConfig:s(o)},null,8,["index","data","navList","generalConfig"])):d("",!0),r.__component=="page-structure.cards"?(l(),b(c,{key:1,data:r},null,8,["data"])):d("",!0),r.__component=="page-structure.section"?(l(),b(m,{key:2,data:r},null,8,["data"])):d("",!0),r.__component=="page-structure.divider"?(l(),b(I,{key:3,generalConfig:s(o)},null,8,["generalConfig"])):d("",!0),r.__component=="page-structure.footer"?(l(),b(R,{key:4,navList:s(y),generalConfig:s(o)},null,8,["navList","generalConfig"])):d("",!0),r.__component=="page-structure.newsletter"?(l(),b(q,{key:5,data:r},null,8,["data"])):d("",!0)]))),256))])]))),256))])],2)])],64)}}};export{Vt as default};
