(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c07c27c"],{24788:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a="999"},"5ffc":function(e,t,r){"use strict";r("ff46")},"89df":function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"f",(function(){return s})),r.d(t,"e",(function(){return i})),r.d(t,"b",(function(){return d})),r.d(t,"a",(function(){return c}));r("ac1f"),r("841c"),r("159b"),r("d81d"),r("99af");var a=r("bd0f"),n=function(e){return-1!=e.search(/iPhone/)||-1!=e.search(/iPad/)||-1!=e.search(/iPod/)||-1!=e.search(/Android/)},o=function(e){for(var t=new Array,r=e,a="",n=0;n<r.length;n++)r.charCodeAt(n)>65248&&r.charCodeAt(n)<65375?t[n]=r.charCodeAt(n)-65248:t[n]=r.charCodeAt(n),a+=String.fromCharCode(t[n]);return a},s=function(e){var t={sort:[],map:{}};return e.forEach((function(e){var r=e.area,a=e.region,n=e.code,o=e.address,s=e.hour_weekday,i=e.hour_holiday;t.map[r]||(t.sort.push(r),t.map[r]={sort:[],map:[]}),t.map[r].map[a]||(t.map[r].sort.push(a),t.map[r].map[a]=[]),t.map[r].map[a].push({code:n,address:o,hour_weekday:s,hour_holiday:i})})),t},i=function(e){var t={sort:[],map:{}};return e.forEach((function(e){var r=e.area,a=e.region,n=e.code,o=e.address,s=e.hour_weekday,i=e.hour_holiday;t.map[r]||(t.sort.push(r),t.map[r]={sort:[],map:[]}),t.map[r].map[a]||(t.map[r].sort.push(a),t.map[r].map[a]=[]),t.map[r].map[a].push({code:n,address:o,hour_weekday:s,hour_holiday:i})})),t},d=function(e,t){if(!document.getElementById(e)){var r=document.createElement("script");r.id=e,r.src=t,r.async=!0,document.body.appendChild(r)}},c=function(e){return"".concat(window.location.origin).concat(window.location.pathname).concat(a["r"],"/").concat(e)}},"945d":function(e,t,r){"use strict";r("b312")},a106:function(e,t,r){},b312:function(e,t,r){},c337:function(e,t,r){"use strict";r("a106")},ce4a:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ValidationObserver",[r("ValidationProvider",{attrs:{name:"postal",rules:e.rules("zipCode"),slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.failed;return[r("div",{staticClass:"form-group cros-float-left clearfix"},[r("label",{staticClass:"cros-float-left form-control-static cros-label"},[e._v(e._s(e.$t("fields.postal"))+" ")]),r("input",{attrs:{name:"zipCode",type:"hidden"}}),r("div",{staticClass:"cros-float-left"},[r("button",{attrs:{type:"button"},on:{click:e.onSearchButtonClick}},[e._v(" "+e._s(e.$t("common.search"))+" ")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:a,expression:"failed"}],staticClass:"danger-alert"},[e._v(" "+e._s(e.$t("validations.zipCode",{length:e.postalCodeLength}))+" ")])])]}}])}),r("ValidationProvider",{attrs:{name:"address",rules:e.rules("addr"),slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.failed;return[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.addr1,expression:"addr1"}],class:["form-control",{"is-invalid":a}],attrs:{type:"text",maxlength:e.addressMaxLength,minlength:e.addressMinLength,placeholder:e.$t("address.placeholder")},domProps:{value:e.addr1},on:{input:function(t){t.target.composing||(e.addr1=t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:a,expression:"failed"}],staticClass:"danger-alert"},[e._v(" "+e._s(e.$t("validations.address"))+" ")])])]}}])}),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.addr2,expression:"addr2"}],staticClass:"form-control",attrs:{type:"text",maxlength:e.addressMaxLength,placeholder:e.$t("address.placeholder2")},domProps:{value:e.addr2},on:{input:function(t){t.target.composing||(e.addr2=t.target.value)}}})]),r("input",{attrs:{type:"hidden",name:"pref"},domProps:{value:e.pref}}),r("input",{attrs:{type:"hidden",name:"addr"},domProps:{value:e.address}}),e.popupShow?r("ZipSearch",{on:{close:e.onSearcherPopupClose}}):e._e()],1)},n=[],o=r("1da1"),s=(r("96cf"),r("a15b"),r("99af"),r("7bb1")),i=r("89df"),d=r("24788"),c=r("5213"),u=r("b047"),l=r.n(u),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"zip-search-popup"},[r("div",{staticClass:"zip-search-popup-container"},[r("div",{staticClass:"zip-search-popup-remove-button",on:{click:e.onClose}}),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.$t("common.placeholder.postalSearch"),disabled:e.fetching},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}})]),r("div",e._l(e.items,(function(e){var t=e.code,a=e.road,n=e.addr;return r("ZipSearchCard",{key:t+"_"+n,attrs:{code:t,road:a,addr:n}})})),1),e.fetching?r("div",{staticClass:"cros-text-center"},[r("ClipLoader",{attrs:{loading:!0,color:"#0066FF",size:"32px"}})],1):e._e(),e.failed?r("div",{staticClass:"cros-text-center cros-total-error"},[e._v(" 發生錯誤，請稍後再嘗試 ")]):e._e()])])},h=[],f=(r("d81d"),r("ac1f"),r("841c"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"zip-search-card"},[r("p",{staticClass:"zip-search-card-code"},[e._v(e._s(e.code))]),r("p",[r("span",{staticClass:"zip-search-code-label"},[e._v(e._s(e.$t("address.roadAddr")))]),e._v(e._s(e.road)+" ")]),r("p",[r("span",{staticClass:"zip-search-code-label"},[e._v(e._s(e.$t("address.jibunAddr")))]),e._v(e._s(e.addr)+" ")])])}),m=[],v={name:"ZipSearchCard",props:["code","road","addr"]},g=v,C=(r("5ffc"),r("2877")),b=Object(C["a"])(g,f,m,!1,null,null,null),w=b.exports,_=r("5530"),y=r("bc3a"),x=r.n(y),S=r("bd0f"),k=function(){var e=x.a.create({baseURL:S["l"],headers:{"Access-Control-Allow-Origin":"*"}});return{post:function(t){return e.post("",{params:Object(_["a"])({currentPage:1,countPerPage:10,resultType:"json",confmKey:S["m"]},t)})}}},P=k,$=r("da7a"),z={name:"ZipSearch",components:{ZipSearchCard:w,ClipLoader:$["a"]},data:function(){return{value:null,fetching:!1,items:[],failed:!1}},methods:{onClose:function(){this.$emit("close")},searcyBySearch:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n,o,s,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.fetching=!0,t.failed=!1,r.prev=2,a=P(),r.next=6,a.post({keyword:e});case 6:if(n=r.sent,o=n.results.common,s=o.errorCode,i=o.errorMessage,"0"===s){r.next=11;break}return console.error(i),r.abrupt("return");case 11:t.items=n.results.juso.map((function(e){var t=e.zipNo,r=e.roadAddrPart1,a=e.jibunAddr;return{code:t,road:r,addr:a}})),r.next=18;break;case 14:r.prev=14,r.t0=r["catch"](2),console.error(r.t0),t.failed=!0;case 18:return r.prev=18,t.fetching=!1,r.finish(18);case 21:case"end":return r.stop()}}),r,null,[[2,14,18,21]])})))()},search:l()((function(e){this.searcyBySearch(e)}),500)},watch:{value:function(e){this.search(e)}}},j=z,A=(r("945d"),Object(C["a"])(j,p,h,!1,null,null,null)),O=A.exports,L={name:"VAddressZipSearcher",inheritAttrs:!1,components:{ZipSearch:O,ValidationProvider:s["b"],ValidationObserver:s["a"]},data:function(){return{addr1:"",addr2:"",popupShow:!1}},computed:{postalCode:{get:function(){return this.$store.state.inputForm.postalCode},set:function(e){this.$store.commit("inputForm/update",{name:"postalCode",value:e})}},address:function(){var e=[this.addr1].concat(this.addr2.length>0?[this.addr2]:[]).join(" ");return 0===e.length?"":Object(i["c"])(e)},postalCodeLength:function(){return this.rules("zipCode").length},pref:function(){return d["a"]},addressMaxLength:function(){return this.rules("addr").max},addressMinLength:function(){return this.rules("addr").min}},methods:{rules:function(e){return this.$store.getters["inputForm/getFieldRules"](e)},handlePostalCodeChanged:l()(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,a,n,o,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=Object(c["b"])(),e.prev=1,e.next=4,r.get({country:c["a"].sg,postalCode:t});case 4:a=e.sent,n=a.data.items,n.length>0?(o=n[0].address,s=o.houseNumber,i=o.street,this.addr1=[s,i].join(" ")):this.addr1="",e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),500),onSearchButtonClick:function(){this.popupShow=!this.popupShow},onSearcherPopupClose:function(){this.popupShow=!1}}},E=L,N=Object(C["a"])(E,a,n,!1,null,null,null);t["default"]=N.exports},da7a:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner"},[r("div",{staticClass:"v-clip",style:e.spinnerStyle})])},n=[],o={name:"ClipLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"35px"},radius:{type:String,default:"100%"}},computed:{spinnerStyle:function(){return{height:this.size,width:this.size,borderWidth:"2px",borderStyle:"solid",borderColor:this.color+" "+this.color+" transparent",borderRadius:this.radius,background:"transparent"}}}},s=o,i=(r("c337"),r("2877")),d=Object(i["a"])(s,a,n,!1,null,null,null);t["a"]=d.exports},ff46:function(e,t,r){}}]);