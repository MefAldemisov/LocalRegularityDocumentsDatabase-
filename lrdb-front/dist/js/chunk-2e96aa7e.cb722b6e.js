(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e96aa7e"],{"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,a=r("a640"),o=r("ae40"),i=a("forEach"),s=o("forEach");t.exports=i&&s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},2532:function(t,e,r){"use strict";var n=r("23e7"),a=r("5a34"),o=r("1d80"),i=r("ab13");n({target:"String",proto:!0,forced:!i("includes")},{includes:function(t){return!!~String(o(this)).indexOf(a(t),arguments.length>1?arguments[1]:void 0)}})},"3aa6":function(t,e,r){"use strict";var n=r("fdb6"),a=r.n(n);a.a},4160:function(t,e,r){"use strict";var n=r("23e7"),a=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"466d":function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),o=r("50c4"),i=r("1d80"),s=r("8aa5"),c=r("14c3");n("match",1,(function(t,e,r){return[function(e){var r=i(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var i=a(t),l=String(this);if(!i.global)return c(i,l);var u=i.unicode;i.lastIndex=0;var d,f=[],p=0;while(null!==(d=c(i,l))){var h=String(d[0]);f[p]=h,""===h&&(i.lastIndex=s(l,o(i.lastIndex),u)),p++}return 0===p?null:f}]}))},"529e":function(t,e,r){},"5a34":function(t,e,r){var n=r("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5a5d":function(t){t.exports=JSON.parse('[{"id":1,"owner":2,"name":"Приложение 4 ознакомление","doc_format":"docx","created":"2019-04-02T12:11:00.032709Z","last_update":"2018-02-04T12:11:00.032709Z","effect_date":"2020-04-08T12:11:00.032709Z","expiration_date":"2017-12-10T12:11:00.032709Z","department":"Департамент Управления Образованием","doc_size":19773},{"id":2,"owner":4,"name":"Приложение 3 ознакомление","doc_format":"png","created":"2016-04-05T12:11:00.032709Z","last_update":"2017-02-04T12:11:00.032709Z","effect_date":"2020-04-07T12:11:00.032709Z","expiration_date":"2014-04-04T12:11:00.032709Z","department":"Департамент Управления Образованием","doc_size":12473},{"id":3,"owner":8,"name":"Приложение 2 ознакомление","doc_format":"pdf","created":"2018-11-04T12:11:00.032709Z","last_update":"2017-04-04T12:11:00.032709Z","effect_date":"2020-01-04T12:11:00.032709Z","expiration_date":"2015-09-04T12:11:00.032709Z","department":"Департамент Управления Образованием","doc_size":19731},{"id":4,"owner":16,"name":"Приложение 1 ознакомление","doc_format":"docx","created":"2019-04-04T12:11:00.032709Z","last_update":"2018-04-04T12:11:00.032709Z","effect_date":"2020-03-04T12:11:00.032709Z","expiration_date":"2020-02-04T12:11:00.032709Z","department":"Департамент Управления Образованием","doc_size":11773}]')},"93d8":function(t,e,r){"use strict";var n=r("529e"),a=r.n(n);a.a},"99af":function(t,e,r){"use strict";var n=r("23e7"),a=r("d039"),o=r("e8b5"),i=r("861d"),s=r("7b0b"),c=r("50c4"),l=r("8418"),u=r("65f0"),d=r("1dde"),f=r("b622"),p=r("2d00"),h=f("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",_=p>=51||!a((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),v=d("concat"),x=function(t){if(!i(t))return!1;var e=t[h];return void 0!==e?!!e:o(t)},w=!_||!v;n({target:"Array",proto:!0,forced:w},{concat:function(t){var e,r,n,a,o,i=s(this),d=u(i,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?i:arguments[e],x(o)){if(a=c(o.length),f+a>m)throw TypeError(g);for(r=0;r<a;r++,f++)r in o&&l(d,f,o[r])}else{if(f>=m)throw TypeError(g);l(d,f++,o)}return d.length=f,d}})},ab13:function(t,e,r){var n=r("b622"),a=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[a]=!1,"/./"[t](e)}catch(n){}}return!1}},afed:function(t,e,r){t.exports=r.p+"img/prev.84e98460.jpg"},b715:function(t,e,r){"use strict";var n=r("c344"),a=r.n(n);a.a},c344:function(t,e,r){},e0ee:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:{act:t.cursor_active},on:{mouseover:function(e){return t.setActCours(!0)},mouseout:function(e){return t.setActCours(!1)}}},[r("doc-list-page",{key:t.info[t.currentPage-1].index,attrs:{info:t.info[t.currentPage-1].info}}),r("div",{staticClass:"mt-3"},[r("ul",{directives:[{name:"shortkey",rawName:"v-shortkey",value:{right:["ctrl","shift","arrowright"],left:["ctrl","shift","arrowleft"]},expression:"{\n                right: ['ctrl', 'shift', 'arrowright'],\n                left: ['ctrl', 'shift', 'arrowleft'],\n            }"}],staticClass:"pagination justify-content-center",on:{shortkey:t.changeKeyPage}},[r("li",{staticClass:"page-item"},[r("span",{staticClass:"page-link",on:{click:function(e){return t.changePage(t.currentPage-1)}}},[t._v(t._s(t.$t("prev")))])]),t._l(t.pages,(function(e){return r("li",{key:e,staticClass:"page-item"},[r("span",{staticClass:"page-link",class:{active:t.currentPage===e},attrs:{href:"#"},on:{click:function(r){return t.changePage(e)}}},[t._v(t._s(e))])])})),r("li",{staticClass:"page-item"},[r("span",{staticClass:"page-link",on:{click:function(e){return t.changePage(t.currentPage+1)}}},[t._v(t._s(t.$t("next")))])])],2)])],1)},a=[],o=(r("fb6a"),r("a9e3"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-content"},t._l(t.info,(function(t){return r("doc-list-page-item",{key:t.id,staticClass:"my-lg-3 shadow-sm my-5",attrs:{info:t}})})),1)}),i=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"row"},[r("div",{staticClass:"col-lg"},[r("div",{staticClass:"my-2 mx-2 my-auto"},[r("doc-list-page-item-row",{attrs:{text:"version",controller:t.info.version}}),r("doc-list-page-item-row",{attrs:{text:"commit",controller:t.info.commit}}),r("doc-list-page-item-row",{attrs:{text:"srch_name",controller:t.info.name}}),r("doc-list-page-item-row",{attrs:{text:"srch_owner",controller:t.info.owner}}),r("doc-list-page-item-row",{attrs:{text:"srch_create",controller:t.dt_created}}),r("doc-list-page-item-row",{attrs:{text:"srch_upd",controller:t.dt_last_update}}),r("doc-list-page-item-row",{attrs:{text:"srch_start",controller:t.dt_effect_date}}),r("doc-list-page-item-row",{attrs:{text:"srch_end",controller:t.dt_expiration_date}}),r("doc-list-page-item-row",{attrs:{text:"srch_id",controller:t.info.id}}),r("doc-list-page-item-row",{attrs:{text:"srt_dep",controller:t.info.department}}),r("doc-list-page-item-row",{attrs:{text:"srt_size",controller:t.info.doc_size}}),r("doc-list-page-item-row",{attrs:{text:"srch_type",controller:t.info.doc_format}}),r("div",{staticClass:"my-sm-2 row input-group input-group-sm"},[r("button",{staticClass:"col-sm py-sm-1 btn btn-success mr-1"},[r("a",{attrs:{href:t.doc_file,download:"document.pdf"}},[r("span",{staticClass:"btn_content"},[t._v(t._s(t.$t("download"))+" "),r("font-awesome-icon",{attrs:{icon:"download"}})],1)])]),r("router-link",{staticClass:"ml-1 col-sm py-1 btn btn-success",attrs:{to:{name:"History",params:{id:t.info.id,name:t.info.name}}}},[r("span",{staticClass:"btn_content"},[t._v(t._s(t.$t("show_history"))+" "),r("font-awesome-icon",{attrs:{icon:"history"}})],1)])],1)],1)]),r("div",{staticClass:"col-lg full_height shadow p-4 my-1 bg-white rounded"},[r("div",{staticClass:"mx-1 full_height",attrs:{id:"target"}},[r("img",{staticClass:"iframe",attrs:{src:t.doc_file,alt:"$t(preview)"}})])])])},c=[];r("99af"),r("4160"),r("caad"),r("b64b"),r("ac1f"),r("2532"),r("466d"),r("1276");function l(t){if(Array.isArray(t))return t}r("a4d3"),r("e01a"),r("d28b"),r("e260"),r("d3b7"),r("3ca3"),r("ddb0");function u(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=t[Symbol.iterator]();!(n=(i=s.next()).done);n=!0)if(r.push(i.value),e&&r.length===e)break}catch(c){a=!0,o=c}finally{try{n||null==s["return"]||s["return"]()}finally{if(a)throw o}}return r}}var d=r("06c5");function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(t,e){return l(t)||u(t,e)||Object(d["a"])(t,e)||f()}var h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.controller?r("label",{staticClass:"my-1 row input-group input-group-sm"},[r("div",{staticClass:"input-group-prepend"},[r("span",{staticClass:"input-group-text"},[t._v(t._s(t.$t(t.text)))])]),r("input",{staticClass:"col form-control",attrs:{type:"text",title:t.controller,readonly:""},domProps:{value:t.controller}})]):t._e()},m=[],g={name:"DocListPageItemRow",props:{text:{requred:!0,type:String},controller:{retured:!0}}},_=g,v=(r("93d8"),r("2877")),x=Object(v["a"])(_,h,m,!1,null,"5359c619",null),w=x.exports,y=r("afed"),b=r.n(y),C={name:"DocListPageItem",components:{DocListPageItemRow:w},props:{doc_file:{default:b.a,required:!1},info:{type:Object,required:!0,validator:function(t){var e=Object.keys(t),r=!0;if(["created","last_update","effect_date","expiration_date","name","id"].forEach((function(t){r=r&&e.includes(t)})),!r)return r;var n=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.*$/;return["created","last_update","effect_date","expiration_date"].forEach((function(e){var a=null!=t[e].match(n);r=r&&a})),r}}},computed:{dt_created:function(){return this.excludeDate(this.info.created)},dt_last_update:function(){return this.excludeDate(this.info.last_update)},dt_effect_date:function(){return this.excludeDate(this.info.effect_date)},dt_expiration_date:function(){return this.excludeDate(this.info.expiration_date)}},methods:{excludeDate:function(t){var e=t.split("T"),r=p(e,2),n=r[0],a=r[1],o=a.split("."),i=o[0];return"".concat(n," ").concat(i)}}},P=C,T=(r("b715"),Object(v["a"])(P,s,c,!1,null,"97b42436",null)),k=T.exports,E={name:"DocListPage",components:{DocListPageItem:k},props:{info:{type:Array,required:!0}}},Z=E,D=Object(v["a"])(Z,o,i,!1,null,null,null),S=D.exports,j={name:"DocList",components:{DocListPage:S},props:{response:{require:!0,type:Array},n_docs:{default:2,type:Number,validator:function(t){return t>0}}},data:function(){return{currentPage:1,cursor_active:!1}},computed:{info:function(){var t=1,e=0,r=[{index:1,info:this.response.slice(e,e+this.n_docs)}];for(e=this.n_docs;e<this.response.length;e+=this.n_docs)r.push({index:t+1,info:this.response.slice(e,e+this.n_docs)}),t++;return r},pages:function(){return this.info.length}},methods:{changePage:function(t){t>0&&t<this.pages+1&&(this.currentPage=t)},changeKeyPage:function(t){this.cursor_active&&("right"===t.srcKey?this.changePage(this.currentPage+1):this.changePage(this.currentPage-1))},setActCours:function(t){this.cursor_active=t}}},$=j,O=(r("3aa6"),Object(v["a"])($,n,a,!1,null,"6840b3f0",null));e["a"]=O.exports},f1ad:function(t,e,r){"use strict";e["a"]={compareValues:function(t){return function(e,r){if(!e[t]||!r[t])return 0;var n="string"===typeof e[t]?e[t].toLowerCase():e[t],a="string"===typeof r[t]?r[t].toLowerCase():r[t],o=0;return n>a?o=1:n<a&&(o=-1),o}}}},fdb6:function(t,e,r){}}]);
//# sourceMappingURL=chunk-2e96aa7e.cb722b6e.js.map