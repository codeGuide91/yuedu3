(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zhangjiexinxi/add-or-update"],{"0d88":function(n,e,t){"use strict";t.r(e);var i=t("9f35"),r=t("c8c7");for(var a in r)"default"!==a&&function(n){t.d(e,n,(function(){return r[n]}))}(a);t("2f48");var u,o=t("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"747a40b0",null,!1,i["a"],u);e["default"]=s.exports},"26af":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,e,t,i,r,a,u){try{var o=n[a](u),s=o.value}catch(c){return void t(c)}o.done?e(s):Promise.resolve(s).then(i,r)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(i,r){var u=n.apply(e,t);function o(n){a(u,i,r,o,s,"next",n)}function s(n){a(u,i,r,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("5d99"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{dingdanbianhao:"",shujimingcheng:"",fenlei:"",fengmian:"",zhangjie:"",neirong:"",yonghuzhanghao:"",yonghuxingming:"",fabushijian:"",userid:""},fenleiOptions:[],fenleiIndex:0,user:{},ro:{dingdanbianhao:!1,shujimingcheng:!1,fenlei:!1,fengmian:!1,zhangjie:!1,neirong:!1,yonghuzhanghao:!1,yonghuxingming:!1,fabushijian:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var e=u(i.default.mark((function e(t){var r,a,u,o;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:return a=e.sent,this.user=a.data,e.next=7,this.$api.option("fenlei","fenlei",{});case 7:if(a=e.sent,this.fenleiOptions=a.data,this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!t.id){e.next=17;break}return this.ruleForm.id=t.id,e.next=15,this.$api.info("zhangjiexinxi",this.ruleForm.id);case 15:a=e.sent,this.ruleForm=a.data;case 17:if(!t.cross){e.next=64;break}u=n.getStorageSync("crossObj"),e.t0=i.default.keys(u);case 20:if((e.t1=e.t0()).done){e.next=64;break}if(o=e.t1.value,"dingdanbianhao"!=o){e.next=26;break}return this.ruleForm.dingdanbianhao=u[o],this.ro.dingdanbianhao=!0,e.abrupt("continue",20);case 26:if("shujimingcheng"!=o){e.next=30;break}return this.ruleForm.shujimingcheng=u[o],this.ro.shujimingcheng=!0,e.abrupt("continue",20);case 30:if("fenlei"!=o){e.next=34;break}return this.ruleForm.fenlei=u[o],this.ro.fenlei=!0,e.abrupt("continue",20);case 34:if("fengmian"!=o){e.next=38;break}return this.ruleForm.fengmian=u[o],this.ro.fengmian=!0,e.abrupt("continue",20);case 38:if("zhangjie"!=o){e.next=42;break}return this.ruleForm.zhangjie=u[o],this.ro.zhangjie=!0,e.abrupt("continue",20);case 42:if("neirong"!=o){e.next=46;break}return this.ruleForm.neirong=u[o],this.ro.neirong=!0,e.abrupt("continue",20);case 46:if("yonghuzhanghao"!=o){e.next=50;break}return this.ruleForm.yonghuzhanghao=u[o],this.ro.yonghuzhanghao=!0,e.abrupt("continue",20);case 50:if("yonghuxingming"!=o){e.next=54;break}return this.ruleForm.yonghuxingming=u[o],this.ro.yonghuxingming=!0,e.abrupt("continue",20);case 54:if("fabushijian"!=o){e.next=58;break}return this.ruleForm.fabushijian=u[o],this.ro.fabushijian=!0,e.abrupt("continue",20);case 58:if("userid"!=o){e.next=62;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,e.abrupt("continue",20);case 62:e.next=20;break;case 64:this.styleChange();case 65:case"end":return e.stop()}}),e,this)})));function t(n){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianConfirm:function(n){console.log(n),this.ruleForm.fabushijian=n.result,this.$forceUpdate()},fenleiChange:function(n){this.fenleiIndex=n.target.value,this.ruleForm.fenlei=this.fenleiOptions[this.fenleiIndex]},fengmianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.fengmian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.userid){n.next=3;break}return this.$utils.msg("用户id不能为空"),n.abrupt("return");case 3:if(!this.ruleForm.id){n.next=8;break}return n.next=6,this.$api.update("zhangjiexinxi",this.ruleForm);case 6:n.next=10;break;case 8:return n.next=10,this.$api.add("zhangjiexinxi",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,r=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,t("543d")["default"])},"2f48":function(n,e,t){"use strict";var i=t("f921"),r=t.n(i);r.a},"9f35":function(n,e,t){"use strict";var i={"w-picker":function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"5d99"))}},r=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return i}))},a27a:function(n,e,t){"use strict";(function(n){t("4c0b"),t("921b");i(t("66fd"));var e=i(t("0d88"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},c8c7:function(n,e,t){"use strict";t.r(e);var i=t("26af"),r=t.n(i);for(var a in i)"default"!==a&&function(n){t.d(e,n,(function(){return i[n]}))}(a);e["default"]=r.a},f921:function(n,e,t){}},[["a27a","common/runtime","common/vendor"]]]);