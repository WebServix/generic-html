import{_ as A}from"./MobileMenuModal.665c008f.js";import{s as H,_ as I,a as K,b as R,c as z,d as D,e as U}from"./sendRequest.b9fb09a0.js";import{r as _,a as V,b as W,w as x,e as q,f,h as G,u as s,F as J,i as Q,j as X,o as a,c as u,k as m}from"./entry.cc8c0ba7.js";import{u as Y}from"./composables.c967bd4b.js";const at={__name:"index",async setup(Z){var y,C,k,w,L,O,j;let n,p;const h=_([]),d=_([]),E=V();console.log("OOONNNN");const S=W(),r=_({});var b=E.params.url.split("_"),v=([n,p]=x(()=>$fetch("/api/getWebsite",{method:"post",body:{id:b[0]}})),n=await n,p(),n);r.value=v.data.attributes;const e=v.data.attributes.pages.data.filter(c=>c.attributes.url==b[1])[0];if(e){const c=([n,p]=x(()=>H("navigation/render/"+r.value.navigationId,null,!1)),n=await n,p(),n);d.value=F(c.value),h.value=e.attributes.content,Y({title:(y=e.attributes.SEO)==null?void 0:y.google_title,meta:[{name:"description",content:(C=e.attributes.SEO)==null?void 0:C.google_description},{name:"og:title",content:(k=e.attributes.SEO)==null?void 0:k.google_title},{name:"og:type",content:"website"},{name:"og:url",content:S.BASE_URL},{name:"og:image",content:((w=e.attributes.SEO)==null?void 0:w.image)&&((L=e.attributes.SEO)==null?void 0:L.image.data)?(O=e.attributes.SEO)==null?void 0:O.image.data.attributes.url:""},{name:"og:description",content:(j=e.attributes.SEO)==null?void 0:j.google_description},{name:"twitter:card",content:"summary_large_image"}],script:[{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",integrity:"sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4",crossorigin:"anonymous"}],link:[{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",rel:"stylesheet",type:"text/css",integrity:"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",crossorigin:"anonymous"},{href:"https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",rel:"stylesheet",type:"text/css"},{href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",rel:"stylesheet",type:"text/css"},{href:"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css",rel:"stylesheet",type:"text/css"}]})}else throw q({statusCode:404,statusMessage:"Page Not Found"});function F(c){var o=[];for(const l of c)if(l.parent==null)o.push(l);else{var i=o.findIndex(g=>g.id==l.parent.id);console.log(i),o[i].child=o[i].child==null?[]:o[i].child,o[i].child.push(l)}return o}return(c,o)=>{const i=A,l=I,g=z,M=D,N=K,$=R,B=U;return a(),f("div",{class:X(["",s(r).css])},[G(i,{generalConfig:s(r),navList:s(d)},null,8,["generalConfig","navList"]),(a(!0),f(J,null,Q(s(h),(t,T)=>(a(),f("div",null,[t.__component=="page-structure.header"?(a(),u(l,{key:0,data:t,navList:s(d),generalConfig:s(r)},null,8,["data","navList","generalConfig"])):m("",!0),t.__component=="page-structure.cards"?(a(),u(g,{key:1,data:t},null,8,["data"])):m("",!0),t.__component=="page-structure.section"?(a(),u(M,{key:2,data:t},null,8,["data"])):m("",!0),t.__component=="page-structure.divider"?(a(),u(N,{key:3,generalConfig:s(r)},null,8,["generalConfig"])):m("",!0),t.__component=="page-structure.footer"?(a(),u($,{key:4,navList:s(d),generalConfig:s(r)},null,8,["navList","generalConfig"])):m("",!0),t.__component=="page-structure.newsletter"?(a(),u(B,{key:5,data:t},null,8,["data"])):m("",!0)]))),256))],2)}}};export{at as default};
