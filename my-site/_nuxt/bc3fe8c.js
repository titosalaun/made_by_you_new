(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{264:function(t,e,r){"use strict";var o=r(6),n=r(54),l=r(265),d=r(184),c=r(5),v=1..toFixed,f=Math.floor,h=function(t,e,r){return 0===e?r:e%2==1?h(t,e-1,r*t):h(t*t,e/2,r)},m=function(data,t,e){for(var r=-1,o=e;++r<6;)o+=t*data[r],data[r]=o%1e7,o=f(o/1e7)},_=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=f(r/t),r=r%t*1e7},w=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+d.call("0",7-e.length)+e}return s};o({target:"Number",proto:!0,forced:v&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){v.call({})}))},{toFixed:function(t){var e,r,o,c,v=l(this),f=n(t),data=[0,0,0,0,0,0],x="",A="0";if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(v!=v)return"NaN";if(v<=-1e21||v>=1e21)return String(v);if(v<0&&(x="-",v=-v),v>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(v*h(2,69,1))-69)<0?v*h(2,-e,1):v/h(2,e,1),r*=4503599627370496,(e=52-e)>0){for(m(data,0,r),o=f;o>=7;)m(data,1e7,0),o-=7;for(m(data,h(10,o,1),0),o=e-1;o>=23;)_(data,1<<23),o-=23;_(data,1<<o),m(data,1,1),_(data,2),A=w(data)}else m(data,0,r),m(data,1<<-e,0),A=w(data)+d.call("0",f);return A=f>0?x+((c=A.length)<=f?"0."+d.call("0",f-c)+A:A.slice(0,c-f)+"."+A.slice(c-f)):x+A}})},265:function(t,e){var r=1..valueOf;t.exports=function(t){return r.call(t)}},428:function(t,e,r){"use strict";r.r(e);r(26),r(19),r(20),r(37),r(25),r(38);var o=r(11),n=(r(263),r(9),r(62),r(264),r(47),r(53),r(27)),l=r(63),d=r.n(l),c=r(266);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={name:"edit-media",layout:"edit",middleware:"auth",components:{draggable:r.n(c).a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)(["isAuthenticated","loggedInUser"])),created:function(){},mounted:function(){this.getAviss()},data:function(){return{url_server:this.$store.state.url_server,flexIsFile:"",source:this.avis_source,id_parent:this.avis_id_parent,id_avis:0,isNew_avis:!1,aviss:[],avis:"",isShowLoadingAvis:!0,isShowNoResultAvis:!1,titre:"",texte:"",editorOption:{theme:"snow",modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],["link","code"],["source"]]}}}},props:{avis_source:String,avis_id_parent:Number},methods:{getAviss:function(){var t=this;this.isShowNoResultAvis=!1,d.a.get(this.url_server+"/getAviss?id_interview="+this.id_parent).then((function(e){t.isShowLoadingAvis=!1,t.aviss=e.data.liste,0==t.aviss.length&&(t.isShowNoResultAvis=!0)})).catch((function(t){displayErreur("avis loading error")}))},getAvis:function(){var t=this;d.a.get(this.url_server+"/getAvis?id_avis="+this.id_avis).then((function(e){t.avis=e.data.liste,void 0!==t.avis.titre?(t.titre=t.avis.titre,t.texte=t.avis.texte):t.texte=""})).catch((function(e){t.texte="",t.id_avis=0,displayErreur("avis loading error")}))},delAvis:function(){var t=this;d.a.get(this.url_server+"/delAvis?id_avis="+this.id_avis).then((function(e){t.displayAvis(),t.getAviss()})).catch((function(e){t.id_avis=0,displayErreur("avis deleting error")}))},submitAvisForm:function(){var t=this;clearRequiredModal2(),this.hideErreur(),this.isNew_avis=!1,0==this.id_avis&&(this.isNew_avis=!0);var data={id_avis:this.id_avis,id_interview:this.id_parent,titre:this.titre,texte:this.texte,isNew:this.isNew_avis},e=document.querySelectorAll(".modalZone2 .required_field");[].forEach.call(e,(function(t){""==t.value&&t.classList.add("required")})),""==this.titre&&document.getElementById("titre_avis").classList.add("required"),checkRequiredModal2()?displayErreur("Les champs en rouges sont requis"):(disabledActionsModal2(),d.a.post(this.url_server+"/addAvis",data).then((function(e){t.id_avis=e.data.id_avis,t.isShowNoResultAvis=!1,t.displayAvis(),t.aviss=new Array,t.getAviss()})).catch((function(t){enabledActionsModal2(),displayErreur("Error adding avis : "+t)})))},isNumber:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},displayAvis:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=document.querySelectorAll("#defaultModalAvis")[0];e.classList.contains("hidden")?(e.classList.remove("hidden"),e.focus(),this.id_avis=t,0!=this.id_avis?this.getAvis():(this.titre="",this.texte="",this.id_avis=0)):(this.id_avis=0,this.titre="",this.texte="",e.classList.add("hidden"),this.initForm())},hideErreur:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){hideErreur()})),initForm:function(t){void 0!==t?t.target.classList.contains("required")&&t.target.classList.remove("required"):clearRequiredModal2(),enabledActionsModal2(),hideErreur()},onEndPosition:function(){var data={id_avis:this.id_avis,list:this.aviss};d.a.post(this.url_server+"/updateAvisPosition",data).then((function(t){})).catch((function(t){return displayErreur("error updating avis")}))},formatResume:function(t,e){return(parseFloat(e).toFixed(2)-parseFloat(t).toFixed(2)).toFixed(2).toString().replace(".",":")}}},h=f,m=r(10),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"form-bloc form-bloc-list"},[r("div",{staticClass:"col w-full"},[r("div",{staticClass:"col-content"},[r("label",{staticClass:"mb-3 border-b border-mainColor cursor-pointer",attrs:{for:"AddFile",id:"LAddFile"},on:{click:function(e){t.displayAvis(0),t.hideErreur()}}},[r("div",{staticClass:"pb-2"},[t._v("Question / réponse")]),t._v(" "),r("div",{staticClass:"flex-1 text-right flex justify-end add highlight"},[r("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"}})])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowLoadingAvis,expression:"isShowLoadingAvis"}],staticClass:"loading"},[t._v("Chargement...")]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowNoResultAvis,expression:"isShowNoResultAvis"}],staticClass:"loading"},[t._v("aucun avis.")]),t._v(" "),r("draggable",{attrs:{list:t.aviss,tag:"div"},on:{end:t.onEndPosition}},t._l(t.aviss,(function(e,o){return r("div",{staticClass:"relative cursor-pointer"},[r("div",{staticClass:"w-full mb-3 flex items-start justify-between hover:text-activeColor",on:{click:function(r){t.displayAvis(e.id_avis),t.hideErreur()}}},[r("div",[t._v(t._s(e.titre))])])])})),0)],1)])]),t._v(" "),r("div",{staticClass:"modalZone2 hidden overflow-y-auto overflow-x-hidden bg-mainBg/50 flex fixed right-0 left-0 top-4 z-50 justify-center items-center md:h-full md:inset-0",attrs:{id:"defaultModalAvis",tabindex:"1"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.displayAvis(0)}}},[r("div",{staticClass:"relative px-6 w-full max-w-2xl h-full md:h-auto"},[r("div",{staticClass:"relative bg-mainBg p-6 border border-activeColor"},[r("div",{staticClass:"flex justify-between items-start border-b border-mainColor"},[r("h1",[t._v("Avis")]),t._v(" "),r("div",{staticClass:"bg-transparent ml-auto inline-flex items-center highlight",attrs:{"data-modal-toggle":"defaultModalAvis"}},[r("svg",{staticClass:"big cursor-pointer",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.displayAvis()}}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),t._v(" "),r("div",[r("div",{staticClass:"form-container w-full border-0 p-0"},[r("form",{attrs:{method:"post",autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.submitAvisForm.apply(null,arguments)}}},[r("div",{staticClass:"form-bloc mt-9"},[r("div",{staticClass:"col w-full"},[r("div",{staticClass:"col-content"},[r("label",{attrs:{for:"titre",id:"Ltitre"}},[t._v("Question")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.titre,expression:"titre"}],attrs:{type:"text",name:"titre",id:"titre_avis"},domProps:{value:t.titre},on:{focus:t.initForm,input:function(e){e.target.composing||(t.titre=e.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"form-bloc mt-9"},[r("div",{staticClass:"col w-full"},[r("div",{staticClass:"col-content"},[r("label",{attrs:{for:"texte",id:"Ltexte"}},[t._v("Réponse")]),t._v(" "),r("div",[r("quill-editor",{ref:"editor",attrs:{options:t.editorOption},model:{value:t.texte,callback:function(e){t.texte=e},expression:"texte"}})],1)])])]),t._v(" "),r("div",{staticClass:"form-action"},[r("div",[r("button",{attrs:{type:"button"},on:{click:function(e){return t.displayAvis()}}},[t._v("Annuler")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.id_avis,expression:"id_avis != 0"}]},[r("button",{staticClass:"bt-delete",attrs:{type:"button"},on:{click:function(e){return t.delAvis()}}},[t._v("Supprimer")])]),t._v(" "),t._m(0)])])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("button",{attrs:{type:"submit"}},[t._v("Enregistrer")])])}],!1,null,null,null);e.default=component.exports}}]);