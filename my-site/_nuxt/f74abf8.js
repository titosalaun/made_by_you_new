(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{427:function(t,n,e){"use strict";e.r(n);var o={data:function(){return{initLang:!1,isEn:!1}},mounted:function(){null==this.$auth.$storage.getLocalStorage("isEn")&&this.$auth.$storage.setLocalStorage("isEn",!0),this.isEn=this.$auth.$storage.getLocalStorage("isEn"),this.updateLang(0),this.initLang=!0},methods:{updateLang:function(t){1==t&&(this.isEn?this.isEn=!1:this.isEn=!0),this.$auth.$storage.setLocalStorage("isEn",this.isEn),this.$emit("isEnglish",this.isEn)}}},r=e(10),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",[e("div",[e("div",[e("nuxt-link",{attrs:{to:"/"}},[t._v("Simple Editions")])],1),t._v(" "),e("div",[e("nuxt-link",{attrs:{to:"/books"}},[t._v("Books")])],1)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.initLang,expression:"initLang"}],staticClass:"lang cursor-pointer",on:{click:function(n){return t.updateLang(1)}}},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.isEn,expression:"!isEn"}]},[t._v("FR")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.isEn,expression:"isEn"}]},[t._v("EN")])])])}),[],!1,null,null,null);n.default=component.exports}}]);