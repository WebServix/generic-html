import{v as X,r as F,e as q,x as rt,y as K,z as at,u as i,A as ot,B as Y,C as it,t as w,o as u,f as _,l as o,k as p,F as O,i as A,m as $,c as k,p as L,s as N,q as I,D as ct,a as Z,E as lt,G as ut,h as E,H as R,j as U,I as W,_ as G,J as tt,K as dt,L as _t,M as ht,N as J,T as pt,O as ft,P as yt,b as gt}from"./entry.cc8c0ba7.js";const mt=()=>null;function bt(...n){var m,M,P,j,C,S,x;const a=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(a);let[s,t,e={}]=n;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=(m=e.server)!=null?m:!0,e.default=(M=e.default)!=null?M:mt,e.lazy=(P=e.lazy)!=null?P:!1,e.immediate=(j=e.immediate)!=null?j:!0;const r=X(),l=()=>r.isHydrating?r.payload.data[s]:r.static.data[s],d=()=>l()!==void 0;r._asyncData[s]||(r._asyncData[s]={data:F((x=(S=l())!=null?S:(C=e.default)==null?void 0:C.call(e))!=null?x:null),pending:F(!d()),error:F(r.payload._errors[s]?q(r.payload._errors[s]):null)});const c={...r._asyncData[s]};c.refresh=c.execute=(g={})=>{if(r._asyncDataPromises[s]){if(g.dedupe===!1)return r._asyncDataPromises[s];r._asyncDataPromises[s].cancelled=!0}if(g._initial&&d())return l();c.pending.value=!0;const v=new Promise((h,T)=>{try{h(t(r))}catch(z){T(z)}}).then(h=>{if(v.cancelled)return r._asyncDataPromises[s];e.transform&&(h=e.transform(h)),e.pick&&(h=vt(h,e.pick)),c.data.value=h,c.error.value=null}).catch(h=>{var T,z;if(v.cancelled)return r._asyncDataPromises[s];c.error.value=h,c.data.value=i((z=(T=e.default)==null?void 0:T.call(e))!=null?z:null)}).finally(()=>{v.cancelled||(c.pending.value=!1,r.payload.data[s]=c.data.value,c.error.value&&(r.payload._errors[s]=q(c.error.value)),delete r._asyncDataPromises[s])});return r._asyncDataPromises[s]=v,r._asyncDataPromises[s]};const f=()=>c.refresh({_initial:!0}),y=e.server!==!1&&r.payload.serverRendered;{const g=ot();if(g&&!g._nuxtOnBeforeMountCbs){g._nuxtOnBeforeMountCbs=[];const h=g._nuxtOnBeforeMountCbs;g&&(rt(()=>{h.forEach(T=>{T()}),h.splice(0,h.length)}),K(()=>h.splice(0,h.length)))}y&&r.isHydrating&&d()?c.pending.value=!1:g&&(r.payload.serverRendered&&r.isHydrating||e.lazy)&&e.immediate?g._nuxtOnBeforeMountCbs.push(f):e.immediate&&f(),e.watch&&at(e.watch,()=>c.refresh());const v=r.hook("app:data:refresh",h=>{if(!h||h.includes(s))return c.refresh()});g&&K(v)}const b=Promise.resolve(r._asyncDataPromises[s]).then(()=>c);return Object.assign(b,c),b}function vt(n,a){const s={};for(const t of a)s[t]=n[t];return s}const xt={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function kt(n,a={}){a={...xt,...a};const s=et(a);return s.dispatch(n),s.toString()}function et(n){const a=[];let s=[];const t=e=>{a.push(e)};return{toString(){return a.join("")},getContext(){return s},dispatch(e){return n.replacer&&(e=n.replacer(e)),this["_"+(e===null?"null":typeof e)](e)},_object(e){const r=/\[object (.*)]/i,l=Object.prototype.toString.call(e),d=r.exec(l),c=d?d[1].toLowerCase():"unknown:["+l.toLowerCase()+"]";let f=null;if((f=s.indexOf(e))>=0)return this.dispatch("[CIRCULAR:"+f+"]");if(s.push(e),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(c!=="object"&&c!=="function"&&c!=="asyncfunction")if(this["_"+c])this["_"+c](e);else{if(n.ignoreUnknown)return t("["+c+"]");throw new Error('Unknown object type "'+c+'"')}else{let y=Object.keys(e);n.unorderedObjects&&(y=y.sort()),n.respectType!==!1&&!Q(e)&&y.splice(0,0,"prototype","__proto__","letructor"),n.excludeKeys&&(y=y.filter(function(b){return!n.excludeKeys(b)})),t("object:"+y.length+":");for(const b of y)this.dispatch(b),t(":"),n.excludeValues||this.dispatch(e[b]),t(",")}},_array(e,r){if(r=typeof r<"u"?r:n.unorderedArrays!==!1,t("array:"+e.length+":"),!r||e.length<=1){for(const c of e)this.dispatch(c);return}const l=[],d=e.map(c=>{const f=et(n);return f.dispatch(c),l.push(f.getContext()),f.toString()});return s=[...s,...l],d.sort(),this._array(d,!1)},_date(e){return t("date:"+e.toJSON())},_symbol(e){return t("symbol:"+e.toString())},_error(e){return t("error:"+e.toString())},_boolean(e){return t("bool:"+e.toString())},_string(e){t("string:"+e.length+":"),t(e.toString())},_function(e){t("fn:"),Q(e)?this.dispatch("[native]"):this.dispatch(e.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),n.respectFunctionProperties&&this._object(e)},_number(e){return t("number:"+e.toString())},_xml(e){return t("xml:"+e.toString())},_null(){return t("Null")},_undefined(){return t("Undefined")},_regexp(e){return t("regex:"+e.toString())},_uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url(e){return t("url:"+e.toString())},_map(e){t("map:");const r=[...e];return this._array(r,n.unorderedSets!==!1)},_set(e){t("set:");const r=[...e];return this._array(r,n.unorderedSets!==!1)},_file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob(){if(n.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return t("domwindow")},_bigint(e){return t("bigint:"+e.toString())},_process(){return t("process")},_timer(){return t("timer")},_pipe(){return t("pipe")},_tcp(){return t("tcp")},_udp(){return t("udp")},_tty(){return t("tty")},_statwatcher(){return t("statwatcher")},_securecontext(){return t("securecontext")},_connection(){return t("connection")},_zlib(){return t("zlib")},_context(){return t("context")},_nodescript(){return t("nodescript")},_httpparser(){return t("httpparser")},_dataview(){return t("dataview")},_signal(){return t("signal")},_fsevent(){return t("fsevent")},_tlswrap(){return t("tlswrap")}}}function Q(n){return typeof n!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(n))!=null}class D{constructor(a,s){a=this.words=a||[],this.sigBytes=s!==void 0?s:a.length*4}toString(a){return(a||wt).stringify(this)}concat(a){if(this.clamp(),this.sigBytes%4)for(let s=0;s<a.sigBytes;s++){const t=a.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=t<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<a.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=a.words[s>>>2];return this.sigBytes+=a.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new D([...this.words])}}const wt={stringify(n){const a=[];for(let s=0;s<n.sigBytes;s++){const t=n.words[s>>>2]>>>24-s%4*8&255;a.push((t>>>4).toString(16),(t&15).toString(16))}return a.join("")}},$t={stringify(n){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let t=0;t<n.sigBytes;t+=3){const e=n.words[t>>>2]>>>24-t%4*8&255,r=n.words[t+1>>>2]>>>24-(t+1)%4*8&255,l=n.words[t+2>>>2]>>>24-(t+2)%4*8&255,d=e<<16|r<<8|l;for(let c=0;c<4&&t*8+c*6<n.sigBytes*8;c++)s.push(a.charAt(d>>>6*(3-c)&63))}return s.join("")}},Lt={parse(n){const a=n.length,s=[];for(let t=0;t<a;t++)s[t>>>2]|=(n.charCodeAt(t)&255)<<24-t%4*8;return new D(s,a)}},Bt={parse(n){return Lt.parse(unescape(encodeURIComponent(n)))}};class Tt{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new D,this._nDataBytes=0}_append(a){typeof a=="string"&&(a=Bt.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes}_doProcessBlock(a,s){}_process(a){let s,t=this._data.sigBytes/(this.blockSize*4);a?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,r=Math.min(e*4,this._data.sigBytes);if(e){for(let l=0;l<e;l+=this.blockSize)this._doProcessBlock(this._data.words,l);s=this._data.words.splice(0,e),this._data.sigBytes-=r}return new D(s,r)}}class Ct extends Tt{update(a){return this._append(a),this._process(),this}finalize(a){a&&this._append(a)}}const St=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Ht=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],H=[];class Mt extends Ct{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new D([...St])}_doProcessBlock(a,s){const t=this._hash.words;let e=t[0],r=t[1],l=t[2],d=t[3],c=t[4],f=t[5],y=t[6],b=t[7];for(let m=0;m<64;m++){if(m<16)H[m]=a[s+m]|0;else{const g=H[m-15],v=(g<<25|g>>>7)^(g<<14|g>>>18)^g>>>3,h=H[m-2],T=(h<<15|h>>>17)^(h<<13|h>>>19)^h>>>10;H[m]=v+H[m-7]+T+H[m-16]}const M=c&f^~c&y,P=e&r^e&l^r&l,j=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),C=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),S=b+C+M+Ht[m]+H[m],x=j+P;b=y,y=f,f=c,c=d+S|0,d=l,l=r,r=e,e=S+x|0}t[0]=t[0]+e|0,t[1]=t[1]+r|0,t[2]=t[2]+l|0,t[3]=t[3]+d|0,t[4]=t[4]+c|0,t[5]=t[5]+f|0,t[6]=t[6]+y|0,t[7]=t[7]+b|0}finalize(a){super.finalize(a);const s=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(t+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Pt(n){return new Mt().finalize(n).toString($t)}function jt(n,a={}){const s=typeof n=="string"?n:kt(n,a);return Pt(s).slice(0,10)}function Dt(n,a,s){const[t={},e]=typeof a=="string"?[{},a]:[a,s],r=t.key||jt([e,i(t.baseURL),typeof n=="string"?n:"",i(t.params)]);if(!r||typeof r!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+r);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const l=r===e?"$f"+r:r,d=Y(()=>{let v=n;return typeof v=="function"&&(v=v()),i(v)}),{server:c,lazy:f,default:y,transform:b,pick:m,watch:M,immediate:P,...j}=t,C=it({...j,cache:typeof t.cache=="boolean"?void 0:t.cache}),S={server:c,lazy:f,default:y,transform:b,pick:m,immediate:P,watch:[C,d,...M||[]]};let x;return bt(l,()=>{var v;return(v=x==null?void 0:x.abort)==null||v.call(x),x=typeof AbortController<"u"?new AbortController:{},$fetch(d.value,{signal:x.signal,...C})},S)}const Ot={class:"nav-wrapper"},At={class:"nav-content"},zt={class:"left"},Nt={key:0,href:"#"},Rt=["src"],Et={key:0,class:"btn"},Ft=o("i",{class:"bx bx-chevron-down"},null,-1),Ut={class:"right"},It=["href"],Vt={key:0,class:"logo-squared"},qt=["src"],Kt=o("button",{class:"mobile-menu-icon","data-bs-toggle":"modal","data-bs-target":"#mobile-menu"},[o("i",{class:"bx bx-menu-alt-right"})],-1),Wt={__name:"Navbar",props:{navList:Array,generalConfig:Object},setup(n){const a=n,{navList:s,logo:t}=w(a);return(e,r)=>{const l=I;return u(),_("nav",Ot,[o("ul",At,[o("div",zt,[o("li",null,[n.generalConfig.logo_long&&n.generalConfig.logo_long.data?(u(),_("a",Nt,[o("img",{src:n.generalConfig.logo_long.data.attributes.url,alt:"logo",style:{"max-height":"50px"}},null,8,Rt)])):p("",!0)]),(u(!0),_(O,null,A(i(s),d=>(u(),_("li",null,[d.child?(u(),_("button",Et,[o("div",null,$(d.related.title),1),Ft])):(u(),k(l,{key:1,to:e.localePath(d.path+d.related.url),class:"menu-link"},{default:L(()=>[N($(d.title),1)]),_:2},1032,["to"]))]))),256))]),o("div",Ut,[o("li",null,[o("a",{href:n.generalConfig.button_link,class:"btn btn-secondary",id:"nav-cta"},$(n.generalConfig.button_text),9,It)])]),n.generalConfig.logo_squared&&n.generalConfig.logo_squared.data?(u(),_("div",Vt,[o("img",{src:n.generalConfig.logo_squared.data.attributes.url,alt:"logo-squared"},null,8,qt)])):p("",!0),Kt])])}}};function B(n={}){const a=n.i18n||ct(X().$i18n),s=Z(),t=lt();return ut({router:t,route:s,i18n:a})}const Gt=["id"],Jt={class:"page-header-content"},Qt={class:"hero-wrapper"},Xt={class:"hero-content centered"},Yt={key:0,class:"profile-img"},Zt=["src"],te={class:"hero-title"},ee=["id","innerHTML"],se=["innerHTML"],ne={class:"hero-cta"},re=["href","innerHTML"],ms={__name:"Header",props:{data:Object,index:Number,navList:Array,generalConfig:Object},setup(n){const a=n;B();const{data:s,navList:t,generalConfig:e}=w(a);return(r,l)=>{var c,f,y,b;const d=Wt;return u(),_("header",{id:"page-header",class:"pic-bg",style:R({background:`linear-gradient(2.25deg, #143544 1.86%, rgba(255, 255, 255, 0) 138.17%), url(${(f=(c=i(s).photo)==null?void 0:c.data)==null?void 0:f.attributes.url}) `})},[o("div",{class:"page-header-wrapper",id:"content"+n.index},[o("div",Jt,[E(d,{navList:i(t),generalConfig:i(e)},null,8,["navList","generalConfig"]),o("div",Qt,[o("div",Xt,[i(s).profilePicture?(u(),_("div",Yt,[o("img",{src:(b=(y=i(s).profilePicture)==null?void 0:y.data)==null?void 0:b.attributes.url,alt:""},null,8,Zt)])):p("",!0),o("div",te,[o("h1",null,[o("span",{id:"content_"+n.index+"_title_string",innerHTML:i(s).title},null,8,ee)]),o("h4",null,[o("span",{innerHTML:i(s).subtitle},null,8,se)])]),o("div",ne,[o("a",{href:i(s).buttonLink,class:"btn btn-primary",innerHTML:i(s).buttonText},null,8,re)])])])])],8,Gt)],4)}}},ae={key:0,class:"section-block2"},oe={key:1,class:"section-block2"},ie={class:"video"},ce=["src"],le={class:"section-block1"},ue={key:0,class:"chip-basic"},de=["innerHTML"],_e={key:1,class:"section-title"},he=["innerHTML"],pe=["innerHTML"],fe={class:"section-block1"},ye={key:0,class:"chip-basic"},ge=["innerHTML"],me={key:1,class:"section-title"},be=["innerHTML"],ve=["innerHTML"],xe={key:0,class:"section-block2"},ke={key:1,class:"section-block2"},we={class:"video"},$e=["src"],st={__name:"Paragraph",props:{data:Object,animated:Boolean,position:String},setup(n){const a=n,s=B(),{data:t,position:e}=w(a);return(r,l)=>{const d=I;return u(),_(O,null,[i(t).position=="right"?(u(),_("div",{key:0,class:U(["section-content",i(t).position])},[i(t).img&&i(t).img.data?(u(),_("div",ae,[i(t).img.data?(u(),_("div",{key:0,class:"img",style:R({background:`url(${i(t).img.data.attributes.url}) `})},null,4)):p("",!0)])):p("",!0),i(t).video_link?(u(),_("div",oe,[o("div",ie,[o("iframe",{src:i(t).video_link,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,ce)])])):p("",!0),o("div",le,[i(t).name?(u(),_("div",ue,[o("span",{innerHTML:i(t).name},null,8,de)])):p("",!0),i(t).title?(u(),_("h2",_e,[o("span",{innerHTML:i(t).title},null,8,he)])):p("",!0),i(t).text?(u(),_("div",{key:2,innerHTML:i(t).text},null,8,pe)):p("",!0),i(t).link?(u(),k(d,{key:3,to:i(s)(i(t).link.link),class:"btn btn-primary"},{default:L(()=>[N($(i(t).link.text),1)]),_:1},8,["to"])):p("",!0)])],2)):p("",!0),i(t).position=="left"||i(t).position=="centered"?(u(),_("div",{key:1,class:U(["section-content",i(t).position])},[o("div",fe,[i(t).name?(u(),_("div",ye,[o("span",{innerHTML:i(t).name},null,8,ge)])):p("",!0),i(t).title?(u(),_("h2",me,[o("span",{innerHTML:i(t).title},null,8,be)])):p("",!0),i(t).text?(u(),_("div",{key:2,innerHTML:i(t).text},null,8,ve)):p("",!0),i(t).link?(u(),k(d,{key:3,to:i(s)(i(t).link.link),class:"btn btn-primary"},{default:L(()=>[N($(i(t).link.text),1)]),_:1},8,["to"])):p("",!0)]),i(t).img&&i(t).img.data?(u(),_("div",xe,[i(t).img.data?(u(),_("div",{key:0,class:"img",style:R({background:`url(${i(t).img.data.attributes.url}) `})},null,4)):p("",!0)])):p("",!0),i(t).video_link?(u(),_("div",ke,[o("div",we,[o("iframe",{src:i(t).video_link,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,$e)])])):p("",!0)],2)):p("",!0)],64)}}},Le={class:"grid-cards"},Be={class:"card-body"},Te={class:"card-title"},Ce=["innerHTML"],Se={class:"card-text"},He=["innerHTML"],Me=["href"],Pe=["innerHTML"],je={__name:"Cards_theme",props:{data:Object},setup(n){const a=n;B();const{data:s}=w(a);return(t,e)=>(u(),_("div",Le,[(u(!0),_(O,null,A(i(s).card,r=>(u(),_("div",{class:"card primary-bg card-icon-text centered animate__animated animate__fadeInDown",key:r.id},[o("div",Be,[o("i",{class:U("bx "+r.icon_name)},null,2),o("h5",Te,[o("span",{innerHTML:r.title},null,8,Ce)]),o("p",Se,[o("span",{innerHTML:r.text},null,8,He)]),r.button?(u(),_("a",{key:0,class:"btn btn-primary-outline",href:r.linkButton},[o("span",{innerHTML:r.button},null,8,Pe)],8,Me)):p("",!0)])]))),128))]))}},De={class:"grid-cards"},Oe={class:"card-body"},Ae={class:"card-title"},ze=["innerHTML"],Ne=["innerHTML"],Re=["innerHTML"],Ee=o("hr",null,null,-1),Fe=["href"],Ue=["innerHTML"],Ie={__name:"Cards_publication",props:{data:Object},setup(n){const a=n;B();const{data:s}=w(a);return(t,e)=>(u(),_("div",De,[(u(!0),_(O,null,A(i(s).card,r=>(u(),_("div",{class:"card left card-icon-text",key:r.id},[o("div",Oe,[o("h5",Ae,[o("span",{innerHTML:r.title},null,8,ze)]),o("p",{class:"card-text",innerHTML:r.subtitle},null,8,Ne),o("p",{class:"text-muted",innerHTML:r.text},null,8,Re),Ee,o("a",{href:r.linkButton},[o("span",{innerHTML:r.button},null,8,Ue)],8,Fe)])]))),128))]))}},Ve={class:"card card-text"},qe={class:"card-body"},Ke={class:"card-title"},We=["innerHTML"],Ge={class:"card-text"},Je=["innerHTML"],Qe={__name:"Cards_slider_small",props:{data:Object},setup(n){const a=n;B();const{data:s}=w(a);return(t,e)=>{const r=W("SwiperSlide"),l=W("Swiper");return u(),k(l,{"slides-per-view":5,"space-between":30},{default:L(()=>[(u(!0),_(O,null,A(i(s).card,d=>(u(),k(r,{key:d.id},{default:L(()=>[o("div",Ve,[o("div",qe,[o("h5",Ke,[o("span",{innerHTML:d.title},null,8,We)]),o("p",Ge,[o("span",{innerHTML:d.text},null,8,Je)])])])]),_:2},1024))),128))]),_:1})}}},nt={sectionwrapper:()=>G(()=>import("./sectionwrapper.e56a4733.js"),["./sectionwrapper.e56a4733.js","./entry.cc8c0ba7.js","./entry.f64a7e08.css"],import.meta.url).then(n=>n.default||n),sectionwrapperwithbg:()=>G(()=>import("./sectionwrapperwithbg.8b167f4c.js"),["./sectionwrapperwithbg.8b167f4c.js","./entry.cc8c0ba7.js","./entry.f64a7e08.css"],import.meta.url).then(n=>n.default||n)},Xe=tt({props:{name:String},async setup(n,a){const s=await nt[n.name]().then(t=>t.default||t);return()=>dt(s,{},a.slots)}}),V=tt({props:{name:{type:[String,Boolean,Object],default:null}},setup(n,a){const s=ft("_route"),t=s===Z()?_t():s,e=Y(()=>{var r,l;return(l=(r=i(n.name))!=null?r:t.meta.layout)!=null?l:"default"});return()=>{var d;const r=e.value&&e.value in nt,l=(d=t.meta.layoutTransition)!=null?d:ht;return J(pt,r&&l,{default:()=>J(Xe,r&&{key:e.value,name:e.value,hasTransition:void 0},a.slots).default()}).default()}}}),bs={__name:"Cards",props:{data:Object},setup(n){const a=n;B();const{data:s}=w(a);return(t,e)=>{const r=st,l=je,d=Ie,c=Qe,f=V;return u(),k(f,{name:i(s).section.background==!0?"sectionwrapperwithbg":"sectionwrapper"},{default:L(()=>[E(r,{data:i(s).section},null,8,["data"]),o("div",null,[i(s).type=="theme"?(u(),k(l,{key:0,data:i(s)},null,8,["data"])):p("",!0),i(s).type=="publication"?(u(),k(d,{key:1,data:i(s)},null,8,["data"])):p("",!0),i(s).type=="slider_small"?(u(),k(c,{key:2,data:i(s)},null,8,["data"])):p("",!0)])]),_:1},8,["name"])}}},vs={__name:"Section",props:{data:Object},setup(n){const a=n;B();const{data:s}=w(a);return(t,e)=>{const r=st,l=V;return u(),k(l,{name:"sectionwrapper"},{default:L(()=>[E(r,{data:i(s)},null,8,["data"])]),_:1})}}},Ye={class:"divider primary-bg"},Ze={class:"divider-wrapper"},ts={class:"divider-content animate__animated animate__pulse animate__repeat__4"},es=["src"],xs={__name:"Divider",props:{type:String,position:String,generalConfig:Object},setup(n){return w(n),(s,t)=>(u(),_("div",Ye,[o("div",Ze,[o("div",ts,[o("img",{src:n.generalConfig.logo_squared.data.attributes.url,alt:"",style:{width:"36px",height:"36px"}},null,8,es)])])]))}},ss={class:"container footer"},ns={class:"py-5"},rs={class:"row mx-auto"},as={class:"col-md-5 offset-md-1 mb-3 d-flex flex-column justify-content-center"},os={class:"logo"},is=["src"],cs={class:"col-6 col-md-2 mb-3"},ls=yt('<div class="d-flex flex-column flex-sm-row justify-content-between align-items-center py-4 my-4 border-top"><p>\xA9 2022 Giotto templating, Inc. All rights reserved.</p><ul class="list-unstyled d-flex icons"><li class="ms-3"><a class="link-dark" href="#"><i class="bx bxl-facebook"></i></a></li><li class="ms-3"><a class="link-dark" href="#"><i class="bx bxl-instagram"></i></a></li><li class="ms-3"><a class="link-dark" href="#"><i class="bx bxl-twitter"></i></a></li></ul></div>',1),ks={__name:"Footer",props:{navList:Array,generalConfig:Object},setup(n){const a=n,s=B();return w(a),(t,e)=>{const r=I;return u(),_("div",ss,[o("footer",ns,[o("div",rs,[o("div",as,[o("div",os,[o("img",{src:n.generalConfig.logo_long.data.attributes.url,alt:"logo",style:{"max-height":"50px"}},null,8,is)])]),(u(!0),_(O,null,A(n.navList,l=>(u(),_("div",cs,[o("h5",null,[E(r,{to:i(s)(l.path+l.related.url),class:"menu-link"},{default:L(()=>[N($(l.title),1)]),_:2},1032,["to"])])]))),256))]),ls])])}}},us={class:"banner-wrapper"},ds={class:"banner-content"},_s={class:"left"},hs={class:"newsletter"},ps={action:"submit"},fs=o("input",{type:"email",placeholder:"Enter email here"},null,-1),ys={class:"btn btn-primary",type:"submit"},ws={__name:"Newsletter",props:{data:Object},setup(n){const a=n;B();const{data:s}=w(a);return(t,e)=>{const r=V;return u(),k(r,{name:"sectionwrapper"},{default:L(()=>{var l,d;return[o("div",{class:"banner banner-email",style:R({background:`linear-gradient(90deg, rgba(31, 53, 85, 0.525) 0%, #48494a 100%), url(${(d=(l=i(s).background_photo)==null?void 0:l.data)==null?void 0:d.attributes.url}) `})},[o("div",us,[o("div",ds,[o("div",_s,[o("h3",null,$(i(s).title),1),o("p",null,$(i(s).subtitle),1),o("div",hs,[o("form",ps,[fs,o("button",ys,$(i(s).button_text),1)])])])])])],4)]}),_:1})}}},$s=async(n,a,s)=>{const t=gt(),e={headers:{"accept-encoding":"*",Authorization:"Bearer "+t.strapi_bearer}};let r=t.STRAPI_URL+"/"+n;a&&(r+="/"+a),s!=!1&&(s!=null?r+=s:r+="?populate=deep");const{data:l,error:d}=await Dt(r,{method:"get",headers:e.headers},"$P0PANHoaiQ");return l};export{ms as _,xs as a,ks as b,bs as c,vs as d,ws as e,$s as s};
