(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghu/add-or-update"],{"653f":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function u(n,e,t,i,r,u,a){try{var o=n[u](a),s=o.value}catch(c){return void t(c)}o.done?e(s):Promise.resolve(s).then(i,r)}function a(n){return function(){var e=this,t=arguments;return new Promise((function(i,r){var a=n.apply(e,t);function o(n){u(a,i,r,o,s,"next",n)}function s(n){u(a,i,r,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("5d99"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{yonghuzhanghao:"",mima:"",yonghuxingming:"",xingbie:"",nianling:"",touxiang:"",yonghushouji:"",shenfenzheng:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{yonghuzhanghao:!1,mima:!1,yonghuxingming:!1,xingbie:!1,nianling:!1,touxiang:!1,yonghushouji:!1,shenfenzheng:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var e=a(i.default.mark((function e(t){var r,u,a,o;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(u=e.sent,this.user=u.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!t.id){e.next=14;break}return this.ruleForm.id=t.id,e.next=12,this.$api.info("yonghu",this.ruleForm.id);case 12:u=e.sent,this.ruleForm=u.data;case 14:if(!t.cross){e.next=53;break}a=n.getStorageSync("crossObj"),e.t0=i.default.keys(a);case 17:if((e.t1=e.t0()).done){e.next=53;break}if(o=e.t1.value,"yonghuzhanghao"!=o){e.next=23;break}return this.ruleForm.yonghuzhanghao=a[o],this.ro.yonghuzhanghao=!0,e.abrupt("continue",17);case 23:if("mima"!=o){e.next=27;break}return this.ruleForm.mima=a[o],this.ro.mima=!0,e.abrupt("continue",17);case 27:if("yonghuxingming"!=o){e.next=31;break}return this.ruleForm.yonghuxingming=a[o],this.ro.yonghuxingming=!0,e.abrupt("continue",17);case 31:if("xingbie"!=o){e.next=35;break}return this.ruleForm.xingbie=a[o],this.ro.xingbie=!0,e.abrupt("continue",17);case 35:if("nianling"!=o){e.next=39;break}return this.ruleForm.nianling=a[o],this.ro.nianling=!0,e.abrupt("continue",17);case 39:if("touxiang"!=o){e.next=43;break}return this.ruleForm.touxiang=a[o],this.ro.touxiang=!0,e.abrupt("continue",17);case 43:if("yonghushouji"!=o){e.next=47;break}return this.ruleForm.yonghushouji=a[o],this.ro.yonghushouji=!0,e.abrupt("continue",17);case 47:if("shenfenzheng"!=o){e.next=51;break}return this.ruleForm.shenfenzheng=a[o],this.ro.shenfenzheng=!0,e.abrupt("continue",17);case 51:e.next=17;break;case 53:this.styleChange();case 54:case"end":return e.stop()}}),e,this)})));function t(n){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(n){this.xingbieIndex=n.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.touxiang=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=a(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.yonghuzhanghao){n.next=3;break}return this.$utils.msg("用户账号不能为空"),n.abrupt("return");case 3:if(this.ruleForm.mima){n.next=6;break}return this.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){n.next=9;break}return this.$utils.msg("身份证应输入身份证格式"),n.abrupt("return");case 9:if(!this.ruleForm.id){n.next=14;break}return n.next=12,this.$api.update("yonghu",this.ruleForm);case 12:n.next=16;break;case 14:return n.next=16,this.$api.add("yonghu",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,r=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,t("543d")["default"])},7527:function(n,e,t){"use strict";var i,r=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return i}))},"7a39":function(n,e,t){},af3c:function(n,e,t){"use strict";t.r(e);var i=t("653f"),r=t.n(i);for(var u in i)"default"!==u&&function(n){t.d(e,n,(function(){return i[n]}))}(u);e["default"]=r.a},c02e:function(n,e,t){"use strict";t.r(e);var i=t("7527"),r=t("af3c");for(var u in r)"default"!==u&&function(n){t.d(e,n,(function(){return r[n]}))}(u);t("e926");var a,o=t("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"3b32e488",null,!1,i["a"],a);e["default"]=s.exports},cf87:function(n,e,t){"use strict";(function(n){t("4c0b"),t("921b");i(t("66fd"));var e=i(t("c02e"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},e926:function(n,e,t){"use strict";var i=t("7a39"),r=t.n(i);r.a}},[["cf87","common/runtime","common/vendor"]]]);