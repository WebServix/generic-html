import{s as B,_ as F,a as H,b as A,c as N,d as T,e as K}from"./sendRequest.03264b1d.js";import{j as m,k as G,l as J,a as p,b as t,u as s,R as W,S as h,U as g,V as O,e as d,i as f,f as L,s as Q,F as k,r as U,o as l,c as b}from"./entry.f18f1398.js";import{u as X}from"./composables.3bc1ec76.js";const Y=t("div",{class:"name"},"Welcome Arnaud",-1),Z={class:"create"},P=["onSubmit"],tt=t("label",{for:"name"},"Name Website",-1),et=t("label",{for:"url"},"URL",-1),nt=t("label",{for:"template"},"Template",-1),st=t("option",{value:"pizzeria"},"Pizzeria",-1),ot=t("option",{value:"psy"},"Psy",-1),at=t("option",{value:"research"},"Research",-1),lt=[st,ot,at],it=t("button",{type:"submit"},"Create Website",-1),rt=["onSubmit"],ut=t("label",{for:"name"},"Name Website",-1),dt=t("label",{for:"name"},"URL",-1),ct=t("button",{type:"submit"},"Create Website",-1),pt={class:"f"},_t=t("br",null,null,-1),mt=t("br",null,null,-1),ft=t("br",null,null,-1),bt=t("br",null,null,-1),vt=t("br",null,null,-1),ht=t("br",null,null,-1),gt=t("br",null,null,-1),yt=t("br",null,null,-1),xt=t("div",{id:"status"},null,-1),kt=["href"],Ct={style:{display:"flex",width:"80%",margin:"auto"}},wt={style:{flex:"1","margin-right":"20px"}},St={style:{"box-shadow":"1px 1px 15px","margin-top":"10px"}},jt={__name:"generate",setup($t){m({});const v=m({}),a=m({}),C=m({}),y=m([]);G(),J();let x=null;const i=m({name:"",url:"",template:""});X({script:[{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",integrity:"sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4",crossorigin:"anonymous"}],link:[{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",rel:"stylesheet",type:"text/css",integrity:"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",crossorigin:"anonymous"},{href:"https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",rel:"stylesheet",type:"text/css"},{href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",rel:"stylesheet",type:"text/css"},{href:"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css",rel:"stylesheet",type:"text/css"}]});async function w(){var n=await $fetch("/api/createWebsite",{method:"post",body:{name:i.value.name,url:i.value.url,template:i.value.template}});console.log(n.data),x=n.data,a.value=n.data.attributes,a.value.hosting_info=n.data.hosting_info,a.value.id=n.data.id,n.data&&n.data.attributes&&(v.value=n.data.attributes.pages.data)}function S(){var n='<img src="https://api.netlify.com/api/v1/badges/'+a.value.hosting_info.site_id+'/deploy-status">';document.getElementById("status").innerHTML=n}async function V(){console.log("website_id"+a.value.id),await $fetch("/api/deploy",{method:"post",body:{website_id:a.value.id}}),S(),setInterval(S,5e3)}async function j(){var n=document.querySelectorAll("*[id]");for(const e of n)e.id.search("content_")==0&&(e.contentEditable=!0)}async function E(){var n=document.querySelectorAll("*[id]");for(const _ of n)if(_.id.search("content_")==0){var e=_.id.split("_"),u=parseInt(e[1]),c=e[2];v.value[0].attributes.content[u][c]=_.innerHTML}await $fetch("/api/updateContentWebsite",{method:"post",body:v.value[0]})}async function $(n){await $fetch("/api/updateCSS",{method:"post",body:{CSS:n,id:x.id}}),a.value.css=n}async function M(){console.log("RETRIEVE");var n=await $fetch("/api/getWebsite",{method:"post",body:{id:1}});a.value=n.data.attributes;const e=await B("navigation/render/"+a.value.navigationId,null,!1);y.value=R(e.value),x=n.data,v.value=n.data.attributes.pages.data}function R(n){var e=[];for(const c of n)if(c.parent==null)e.push(c);else{var u=e.findIndex(_=>_.id==c.parent.id);console.log(u),e[u].child=e[u].child==null?[]:e[u].child,e[u].child.push(c)}return e}return(n,e)=>{const u=F,c=N,_=T,I=H,q=A,D=K;return l(),p(k,null,[Y,t("div",Z,[s(C).step2!=!0?(l(),p("form",{key:0,onSubmit:W(w,["prevent"])},[t("fieldset",null,[t("ul",null,[t("li",null,[tt,h(t("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=o=>s(i).name=o),required:""},null,512),[[g,s(i).name]])]),t("li",null,[et,h(t("input",{type:"text",id:"url","onUpdate:modelValue":e[1]||(e[1]=o=>s(i).url=o),required:""},null,512),[[g,s(i).url]])]),t("li",null,[nt,h(t("select",{"onUpdate:modelValue":e[2]||(e[2]=o=>s(i).template=o)},lt,512),[[O,s(i).template]])])])]),it],40,P)):d("",!0),s(C).step2==!0?(l(),p("form",{key:1,onSubmit:W(w,["prevent"])},[t("fieldset",null,[t("ul",null,[t("li",null,[ut,h(t("input",{type:"text",id:"name","onUpdate:modelValue":e[3]||(e[3]=o=>s(i).name=o),required:""},null,512),[[g,s(i).name]])]),t("li",null,[dt,h(t("input",{type:"text",id:"name","onUpdate:modelValue":e[4]||(e[4]=o=>s(i).url=o),required:""},null,512),[[g,s(i).url]])])])]),ct],40,rt)):d("",!0)]),t("div",pt,[t("button",{onClick:e[5]||(e[5]=o=>$("brutalist"))},"Use Brutalist"),_t,t("button",{onClick:e[6]||(e[6]=o=>$("default"))},"Use Default"),mt,f(),ft,t("button",{onClick:e[7]||(e[7]=o=>M())},"Retrieve Website"),f(),bt,f(),vt,t("button",{onClick:e[8]||(e[8]=o=>j())},"Edit Mode"),f(),ht,t("button",{onClick:e[9]||(e[9]=o=>E())},"Save Edit"),f(),gt,f(),yt,t("button",{onClick:e[10]||(e[10]=o=>V())},"Deploy"),xt,s(a)&&s(a).hosting_info?(l(),p("a",{key:0,href:s(a).hosting_info.url,target:"_blank"},L(s(a).hosting_info.url),9,kt)):d("",!0),t("div",{class:Q(["",s(a).css])},[t("div",Ct,[(l(!0),p(k,null,U(s(v),(o,Wt)=>(l(),p("div",wt,[t("div",null,"Page: "+L(o.attributes.url),1),t("div",St,[(l(!0),p(k,null,U(o.attributes.content,(r,z)=>(l(),p("div",null,[r.__component=="page-structure.header"?(l(),b(u,{key:0,index:z,data:r,navList:s(y),generalConfig:s(a)},null,8,["index","data","navList","generalConfig"])):d("",!0),r.__component=="page-structure.cards"?(l(),b(c,{key:1,data:r},null,8,["data"])):d("",!0),r.__component=="page-structure.section"?(l(),b(_,{key:2,data:r},null,8,["data"])):d("",!0),r.__component=="page-structure.divider"?(l(),b(I,{key:3,generalConfig:s(a)},null,8,["generalConfig"])):d("",!0),r.__component=="page-structure.footer"?(l(),b(q,{key:4,navList:s(y),generalConfig:s(a)},null,8,["navList","generalConfig"])):d("",!0),r.__component=="page-structure.newsletter"?(l(),b(D,{key:5,data:r},null,8,["data"])):d("",!0)]))),256))])]))),256))])],2)])],64)}}};export{jt as default};
