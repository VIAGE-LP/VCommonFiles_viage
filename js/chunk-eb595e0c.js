(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb595e0c"],{"0cb2":function(t,e,r){var i=r("7b0b"),s=Math.floor,o="".replace,n=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,a=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,d,c,u){var l=r+t.length,h=d.length,p=a;return void 0!==c&&(c=i(c),p=n),o.call(u,p,(function(i,o){var n;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(l);case"<":n=c[o.slice(1,-1)];break;default:var a=+o;if(0===a)return i;if(a>h){var u=s(a/10);return 0===u?i:u<=h?void 0===d[u-1]?o.charAt(1):d[u-1]+o.charAt(1):i}n=d[a-1]}return void 0===n?"":n}))}},5319:function(t,e,r){"use strict";var i=r("d784"),s=r("825a"),o=r("50c4"),n=r("a691"),a=r("1d80"),d=r("8aa5"),c=r("0cb2"),u=r("14c3"),l=Math.max,h=Math.min,p=function(t){return void 0===t?t:String(t)};i("replace",2,(function(t,e,r,i){var f=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=i.REPLACE_KEEPS_$0,m=f?"$":"$0";return[function(r,i){var s=a(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,s,i):e.call(String(s),r,i)},function(t,i){if(!f&&v||"string"===typeof i&&-1===i.indexOf(m)){var a=r(e,t,this,i);if(a.done)return a.value}var g=s(t),y=String(this),w="function"===typeof i;w||(i=String(i));var C=g.global;if(C){var _=g.unicode;g.lastIndex=0}var $=[];while(1){var b=u(g,y);if(null===b)break;if($.push(b),!C)break;var N=String(b[0]);""===N&&(g.lastIndex=d(y,o(g.lastIndex),_))}for(var E="",P=0,S=0;S<$.length;S++){b=$[S];for(var k=String(b[0]),x=l(h(n(b.index),y.length),0),I=[],L=1;L<b.length;L++)I.push(p(b[L]));var A=b.groups;if(w){var T=[k].concat(I,x,y);void 0!==A&&T.push(A);var B=String(i.apply(void 0,T))}else B=c(k,y,x,I,A,i);x>=P&&(E+=y.slice(P,x)+B,P=x+k.length)}return E+y.slice(P)}]}))},"89df":function(t,e,r){"use strict";r.d(e,"d",(function(){return s})),r.d(e,"c",(function(){return o})),r.d(e,"f",(function(){return n})),r.d(e,"e",(function(){return a})),r.d(e,"b",(function(){return d})),r.d(e,"a",(function(){return c}));r("ac1f"),r("841c"),r("159b"),r("d81d"),r("99af");var i=r("bd0f"),s=function(t){return-1!=t.search(/iPhone/)||-1!=t.search(/iPad/)||-1!=t.search(/iPod/)||-1!=t.search(/Android/)},o=function(t){for(var e=new Array,r=t,i="",s=0;s<r.length;s++)r.charCodeAt(s)>65248&&r.charCodeAt(s)<65375?e[s]=r.charCodeAt(s)-65248:e[s]=r.charCodeAt(s),i+=String.fromCharCode(e[s]);return i},n=function(t){var e={sort:[],map:{}};return t.forEach((function(t){var r=t.area,i=t.region,s=t.code,o=t.address,n=t.hour_weekday,a=t.hour_holiday;e.map[r]||(e.sort.push(r),e.map[r]={sort:[],map:[]}),e.map[r].map[i]||(e.map[r].sort.push(i),e.map[r].map[i]=[]),e.map[r].map[i].push({code:s,address:o,hour_weekday:n,hour_holiday:a})})),e},a=function(t){var e={sort:[],map:{}};return t.forEach((function(t){var r=t.area,i=t.region,s=t.code,o=t.address,n=t.hour_weekday,a=t.hour_holiday;e.map[r]||(e.sort.push(r),e.map[r]={sort:[],map:[]}),e.map[r].map[i]||(e.map[r].sort.push(i),e.map[r].map[i]=[]),e.map[r].map[i].push({code:s,address:o,hour_weekday:n,hour_holiday:a})})),e},d=function(t,e){if(!document.getElementById(t)){var r=document.createElement("script");r.id=t,r.src=e,r.async=!0,document.body.appendChild(r)}},c=function(t){return"".concat(window.location.origin).concat(window.location.pathname).concat(i["r"],"/").concat(t)}},c712:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ValidationObserver",{attrs:{slim:""}},[r("div",[r("ValidationProvider",{attrs:{name:"pref",rules:t.rules("pref"),slim:""},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.failed;return[r("div",{staticClass:"form-group clearfix"},[r("label",{staticClass:"form-control-static cros-label cros-float-left"},[t._v(" "+t._s(t.$t("fields.pref"))+" ")]),r("div",{staticClass:"cros-float-left"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],class:["form-control",{"is-invalid":i}],attrs:{name:"pref",disabled:t.activity},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.city=e.target.multiple?r:r[0]},function(e){return t.refreshCity()}]}},[r("option",{attrs:{value:"",disabled:""}},[t._v(" "+t._s(t.$t("common.defaultSelect"))+" ")]),t._l(t.cities,(function(e,i){return r("option",{key:i,domProps:{value:i}},[t._v(" "+t._s(e)+" ")])}))],2)])])]}}])}),r("ValidationProvider",{attrs:{name:"city",rules:t.rules("city"),slim:""},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.failed;return[r("div",{staticClass:"form-group clearfix"},[r("label",{staticClass:"form-control-static cros-label cros-float-left"},[t._v(" "+t._s(t.$t("fields.city"))+" ")]),r("div",{staticClass:"cros-float-left"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.township,expression:"township"}],class:["form-control",{"is-invalid":i}],attrs:{name:"city",disabled:t.activity},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.township=e.target.multiple?r:r[0]},function(e){return t.refreshTownship()}]}},[r("option",{attrs:{value:"",disabled:""}},[t._v(" "+t._s(t.$t("common.defaultSelect"))+" ")]),t._l(t.townships,(function(e,i){return r("option",{key:i,domProps:{value:i}},[t._v(" "+t._s(e)+" ")])}))],2)])])]}}])}),t.postalCode?r("div",{staticClass:"form-group"},[t._v(" "+t._s(t.$t("fields.postal"))+" "),r("span",{staticClass:"cros-text-primary"},[t._v(t._s(t.postalCode))])]):t._e(),r("ValidationProvider",{attrs:{name:"addr",rules:t.rules("addr"),slim:""},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.failed;return[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.addressBeforeConvert,expression:"addressBeforeConvert"}],class:["form-control",{"is-invalid":i}],attrs:{name:"addressBeforeConvert",type:"text",maxlength:t.addressMaxLength,minlength:t.addressMinLength,placeholder:t.$t("address.placeholder")},domProps:{value:t.addressBeforeConvert},on:{input:function(e){e.target.composing||(t.addressBeforeConvert=e.target.value)}}})])]}}])})],1),r("input",{attrs:{type:"hidden",name:"zipCode"},domProps:{value:t.postalCode}}),r("ValidationProvider",{attrs:{name:"address",rules:t.rules("address")},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.failed;return[r("input",{attrs:{type:"hidden",name:"addr"},domProps:{value:t.address}}),r("div",{directives:[{name:"show",rawName:"v-show",value:i,expression:"failed"}],staticClass:"danger-alert"},[t._v(" "+t._s(t.$t("validations.address"))+" ")])]}}])})],1)},s=[],o=(r("ac1f"),r("5319"),r("159b"),r("b64b"),r("a449")),n=r("7bb1"),a=r("89df"),d={name:"VAddress",inheritAttrs:!1,components:{ValidationProvider:n["b"],ValidationObserver:n["a"]},data:function(){return{city:"",cities:null,township:"",townships:null,activity:!1,addressBeforeConvert:""}},computed:{postalCode:{get:function(){return this.$store.state.inputForm.postalCode},set:function(t){this.$store.commit("inputForm/update",{name:"postalCode",value:t})}},zipNoNeedList:function(){return this.$store.state.setting.commonSetting.data.zipNoNeedList},islandNoNeedList:function(){return this.$store.state.setting.commonSetting.data.islandNoNeedList},actionUrl:function(){return this.$store.getters["setting/actionUrl"]},userId:function(){return this.$store.state.setting.setting.data.userId},id:function(){return this.$store.state.setting.setting.data.id},address:function(){if(0===this.addressBeforeConvert.length||0===this.city.length||0===this.township.length)return"";var t=function(t,e,r){while(-1!=t.indexOf(e))t=t.replace(e,r);return t},e=function(e,r,i,s,o){var n=e;return r&&i&&r[i]&&(n=t(n,r[i],"")),s&&o&&s[o]&&(n=t(n,s[o],""),n=s[o]+n),n},r=e(Object(a["c"])(this.addressBeforeConvert),this.cities,this.city,this.townships,this.township);return r},addressMaxLength:function(){return this.rules("addr").max},addressMinLength:function(){return this.rules("addr").min},redirectToConvMapPreparing:function(){return this.$store.state.inputForm.redirectToConvMapPreparing}},methods:{rules:function(t){return this.$store.getters["inputForm/getFieldRules"](t)},generatePref:function(){var t=this;this.$http({method:"post",url:this.actionUrl,params:{type:"zip1",userId:this.userId,time:(new Date).getTime(),accountId:this.id}}).then((function(e){t.generateCities(e.data)})).catch((function(e){console.error(e),t.$store.dispatch("popup/showErrorPopup",{show:!0,title:t.$t("popup.orderError.title"),code:o["b"].GetZip1Failed})}))},generateCities:function(t){null!=this.zipNoNeedList&&""!=this.zipNoNeedList&&this.zipNoNeedList.forEach((function(e){delete t[e]})),this.cities=t},refreshCity:function(t){var e=this;t&&(this.city=t),this.activity=!0,this.township="",this.postalCode="",this.$http({method:"post",url:this.actionUrl,params:{type:"zip2",prefCd:this.city,userId:this.userId,time:(new Date).getTime(),accountId:this.id}}).then((function(t){e.generateTownships(t.data)})).catch((function(t){console.error(t),e.city="",e.$store.dispatch("popup/showErrorPopup",{show:!0,title:e.$t("popup.orderError.title"),code:o["b"].GetZip2Failed})}))},generateTownships:function(t){null!=this.islandNoNeedList&&""!=this.islandNoNeedList&&Object.keys(this.islandNoNeedList).indexOf(this.city)>-1&&this.islandNoNeedList[this.city].forEach((function(e){delete t[e]})),this.townships=t,this.activity=!1},refreshTownship:function(t){var e=this;t&&(this.township=t),""!==this.township?this.$http({method:"post",url:this.actionUrl,params:{type:"zip3_code3",prefCd:this.city,city1:this.township,userId:this.userId,time:(new Date).getTime(),accountId:this.id}}).then((function(t){e.postalCode=t.data.zipCode})).catch((function(t){console.error(t),e.township="",e.$store.dispatch("popup/showErrorPopup",{show:!0,title:e.$t("popup.orderError.title"),code:o["b"].GetZip3Failed})})):this.postalCode=""}},mounted:function(){var t=this;this.generatePref(),[{key:"city",callback:this.refreshCity},{key:"township",callback:this.refreshTownship}].forEach((function(e){var r=e.key,i=e.callback;return t.$sessionStorage.restore(r,i)})),this.addressBeforeConvert=this.$sessionStorage.get("addressBeforeConvert")||""},watch:{address:function(t){this.$store.commit("inputForm/update",{name:"address",value:t})},redirectToConvMapPreparing:function(t){t&&(this.$sessionStorage.set("city",this.city),this.$sessionStorage.set("township",this.township),this.$sessionStorage.set("addressBeforeConvert",this.addressBeforeConvert))}}},c=d,u=r("2877"),l=Object(u["a"])(c,i,s,!1,null,null,null);e["default"]=l.exports}}]);