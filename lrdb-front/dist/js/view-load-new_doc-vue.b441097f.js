(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-load-new_doc-vue"],{"1a86":function(e,t,a){"use strict";var n=a("2f34"),l=a.n(n);l.a},"2f34":function(e,t,a){},"4de4":function(e,t,a){"use strict";var n=a("23e7"),l=a("b727").filter,i=a("1dde"),r=a("ae40"),s=i("filter"),c=r("filter");n({target:"Array",proto:!0,forced:!s||!c},{filter:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}})},"89cc":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{on:{submit:function(t){return t.preventDefault(),e.postData(t)}}},[a("Params",{attrs:{form_type:"load",required:e.req},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),a("button",{staticClass:"btn btn-success btn-block",attrs:{type:"submit"}},[e._v(" "+e._s(e.$t("upl_doc_data"))+" ")])],1)},l=[],i=(a("96cf"),a("1da1")),r=a("9789"),s=a("8daa"),c={name:"NewDoc",data:function(){return{req:!0,value:""}},components:{Params:r["a"]},methods:{postData:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].addDocuments(this.value).then((function(e){console.log("loading complete")})).catch((function(e){console.log("Error, post file")}));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},u=c,o=a("2877"),d=Object(o["a"])(u,n,l,!1,null,null,null);t["default"]=d.exports},9789:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pb-3"},[a("h3",{staticClass:"pt-4"},[e._v(e._s(e.$t("main_params")))]),a("div",{staticClass:"row"},[a("input_field",{attrs:{name:"srch_name",type:"text",required:e.required},on:{input:e.handleInput},model:{value:e.val.name,callback:function(t){e.$set(e.val,"name",t)},expression:"val.name"}})],1),"load"!==e.form_type?a("div",{staticClass:"row"},[a("input_field",{attrs:{name:"srch_owner",type:"text",required:e.required},on:{input:e.handleInput},model:{value:e.val.owner,callback:function(t){e.$set(e.val,"owner",t)},expression:"val.owner"}}),"upload"!==e.form_type?a("input_field",{attrs:{name:"srch_id",type:"number",required:e.required},on:{input:e.handleInput},model:{value:e.val.id,callback:function(t){e.$set(e.val,"id",t)},expression:"val.id"}}):e._e()],1):e._e(),a("h3",{staticClass:"pt-4"},[e._v(e._s(e.$t("dates")))]),"search"===e.form_type?a("div",{staticClass:"row"},[a("date-range",{attrs:{name:"srch_create",required:e.required},on:{input:e.handleInput},model:{value:e.val.created,callback:function(t){e.$set(e.val,"created",t)},expression:"val.created"}}),a("date-range",{attrs:{name:"srch_last",required:e.required},on:{input:e.handleInput},model:{value:e.val.last_update,callback:function(t){e.$set(e.val,"last_update",t)},expression:"val.last_update"}})],1):e._e(),"search"===e.form_type?a("div",{staticClass:"row"},[a("date-range",{attrs:{name:"srch_start",required:e.required},on:{input:e.handleInput},model:{value:e.val.effect_date,callback:function(t){e.$set(e.val,"effect_date",t)},expression:"val.effect_date"}}),a("date-range",{attrs:{name:"srch_end",required:e.required},on:{input:e.handleInput},model:{value:e.val.expiration_date,callback:function(t){e.$set(e.val,"expiration_date",t)},expression:"val.expiration_date"}})],1):e._e(),"search"!==e.form_type?a("div",{staticClass:"row"},[a("date-range",{attrs:{name:"srch_start",range:e.f,required:e.required},on:{input:e.handleInput},model:{value:e.val.effect_date,callback:function(t){e.$set(e.val,"effect_date",t)},expression:"val.effect_date"}}),a("date-range",{attrs:{name:"srch_end",range:e.f,required:e.required},on:{input:e.handleInput},model:{value:e.val.expiration_date,callback:function(t){e.$set(e.val,"expiration_date",t)},expression:"val.expiration_date"}})],1):e._e(),a("h3",{staticClass:"pt-4"},[e._v(e._s(e.$t("srch_dep")))]),a("div",{staticClass:"pb-4 d-flex flex-wrap justify-content-around"},e._l(e.departments,(function(t){return a("check",{key:t.val,on:{input:e.handleInput},model:{value:e.select_list[t.index],callback:function(a){e.$set(e.select_list,t.index,a)},expression:"select_list[dep.index]"}},[e._v(e._s(e.$t(t.val)))])})),1),"search"!==e.form_type?a("div",[a("h3",[e._v(e._s(e.$t("selct_file")))]),a("input_file",{on:{input:e.handleInput},model:{value:e.val.file,callback:function(t){e.$set(e.val,"file",t)},expression:"val.file"}})],1):e._e()])},l=[],i=(a("4de4"),a("a630"),a("b0c0"),a("b64b"),a("d3b7"),a("3ca3"),a("ddb0"),a("9871")),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-check-inline"},[a("label",{staticClass:"rounded-lg border",class:{active:e.selected}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"hidden",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.selected)?e._i(e.selected,null)>-1:e.selected},on:{input:e.handleInput,change:function(t){var a=e.selected,n=t.target,l=!!n.checked;if(Array.isArray(a)){var i=null,r=e._i(a,i);n.checked?r<0&&(e.selected=a.concat([i])):r>-1&&(e.selected=a.slice(0,r).concat(a.slice(r+1)))}else e.selected=l}}}),e._t("default")],2)])},s=[],c={name:"check",data:function(){return{selected:!1}},props:{value:{required:!0}},methods:{handleInput:function(e){this.$emit("input",e.target.checked)}}},u=c,o=(a("1a86"),a("2877")),d=Object(o["a"])(u,r,s,!1,null,"6105a1d1",null),p=d.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueCtkDateTimePicker",{staticClass:"my-1 col-sm",attrs:{id:e.name,label:e.$t(e.name),locale:e.lang,range:e.range,"only-date":e.day,color:"#0f870d","button-color":"#0f870d"},on:{input:e.handleInput},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}})},f=[],m={name:"DateRange",props:{name:{required:!0,type:String},range:{default:!0,type:Boolean},value:{required:!0}},data:function(){return{t:!0,day:!0,val:null}},computed:{lang:function(){var e=this.$i18n.locale;return"tat"===e?"ru":e}},methods:{handleInput:function(e){this.$emit("input",this.val)}}},h=m,_=Object(o["a"])(h,v,f,!1,null,null,null),b=_.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"row"},[a("div",{staticClass:"col input-group mb-1"},[a("div",{staticClass:"w-100 input-group-text",class:{"bg-success":e.filename}},[e._v(" "+e._s(e.$t("selct_file"))+" "),e.filename?a("span",[e._v(":")]):e._e(),e._v(" "+e._s(e.filename)+" ")])]),a("input",{staticClass:"form-control",attrs:{id:"srch_file_inp",type:"file"},on:{change:e.previewFiles,input:e.handleInput}})])},x=[],y={name:"input_file",props:{value:{required:!0}},methods:{previewFiles:function(e){this.filename=e.target.files[0].name},handleInput:function(e){this.$emit("input",e.target.files[0])}},data:function(){return{filename:""}}},q=y,k=(a("cf99"),Object(o["a"])(q,g,x,!1,null,"29e0106f",null)),w=k.exports,$={name:"Params",components:{input_field:i["a"],check:p,DateRange:b,input_file:w},props:{required:{default:!1,type:Boolean},form_type:{default:"search",type:String},value:{required:!0},initial:{required:!1,default:function(){return{name:"",owner:""}}}},data:function(){return{active_select:!1,f:!1,departments:[{name:"University Development",val:"dep1",index:0},{name:"Design and research activities",val:"dep2",index:1},{name:"Pre-university education",val:"dep3",index:2},{name:"Public relations",val:"dep4",index:3},{name:"Legal issues",val:"dep5",index:4},{name:"Quality education",val:"dep6",index:5},{name:"Administrative Policy and Informatization",val:"dep7",index:6}],val:{file:"",name:"",owner:"",id:0,created:"",last_update:"",effect_date:"",expiration_date:"",dep:""},select_list:[!1,!1,!1,!1,!1,!1,!1]}},created:function(){this.val.name=this.initial.name,this.val.owner=this.initial.owner},methods:{filterSelected:function(){for(var e={},t=0,a=Object.keys(this.val);t<a.length;t++){var n=a[t];this.val[n]&&(e[n]=this.val[n])}return e},changeActive:function(){this.active_select=!this.active_select},handleInput:function(e){var t=Array.from(Array(this.select_list.length).keys()),a=this.select_list;this.val.dep=t.filter((function(e){return a[e]})),this.val.dep=this.val.dep.length>0?this.val.dep:"",this.$emit("input",this.filterSelected())}}},C=$,I=Object(o["a"])(C,n,l,!1,null,null,null);t["a"]=I.exports},9871:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"col-lg input-group mb-1"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[e._v(e._s(e.$t(e.name)))])]),"checkbox"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],staticClass:"form-control",attrs:{required:e.required,type:"checkbox"},domProps:{checked:Array.isArray(e.val)?e._i(e.val,null)>-1:e.val},on:{input:e.handleInput,change:function(t){var a=e.val,n=t.target,l=!!n.checked;if(Array.isArray(a)){var i=null,r=e._i(a,i);n.checked?r<0&&(e.val=a.concat([i])):r>-1&&(e.val=a.slice(0,r).concat(a.slice(r+1)))}else e.val=l}}}):"radio"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],staticClass:"form-control",attrs:{required:e.required,type:"radio"},domProps:{checked:e._q(e.val,null)},on:{input:e.handleInput,change:function(t){e.val=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],staticClass:"form-control",attrs:{required:e.required,type:e.type},domProps:{value:e.val},on:{input:[function(t){t.target.composing||(e.val=t.target.value)},e.handleInput]}}),a("div",{staticClass:"input-group-append"},[e._t("append")],2)])},l=[],i=(a("b0c0"),{name:"InputField",props:{type:{default:"text",type:String},name:{required:!0,type:String},required:{default:!1,type:Boolean},value:{required:!0}},data:function(){return{val:""}},computed:{inp_name:function(){return this.name+"_inp"}},created:function(){this.val=this.value},methods:{handleInput:function(e){this.$emit("input",this.val)}}}),r=i,s=a("2877"),c=Object(s["a"])(r,n,l,!1,null,null,null);t["a"]=c.exports},cf99:function(e,t,a){"use strict";var n=a("fbfc"),l=a.n(n);l.a},fbfc:function(e,t,a){}}]);
//# sourceMappingURL=view-load-new_doc-vue.b441097f.js.map