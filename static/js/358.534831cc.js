"use strict";(self.webpackChunkskyweb=self.webpackChunkskyweb||[]).push([[358],{44192:function(e,l,a){a.d(l,{r:function(){return s}});var t=a(50953);const s=()=>{const e=(0,t.KR)([]);return{headers:(0,t.KR)([]),tableData:e,loading:(0,t.KR)(!1),total:(0,t.KR)(0),offset:(0,t.KR)(1)}}},87358:function(e,l,a){a.r(l),a.d(l,{default:function(){return n}});var t=a(20641),s=a(50953),u=a(19535),o=a(44192),i=a(45751);var n=(0,t.pM)({__name:"user",setup(e){const{tableData:l,offset:a,loading:n,total:d,headers:r}=(0,o.r)();r.value=[{label:"$vuetify.t_email",prop:"email"},{label:"$vuetify.t_user_id",prop:"userId"},{label:"$vuetify.t_invite_id",prop:"inviteId"},{label:"$vuetify.t_nick_name",prop:"nickname"},{label:"$vuetify.account_wallet",prop:"userId",format(e){return e.walletAddress.secret(6)}}];return(0,t.sV)((async()=>{n.value=!0;try{const{list:e,total:t}=await i.clientApi.userApi.getUserInviteList(a.value);d.value=t,l.value=e}catch(e){}n.value=!1})),(e,o)=>((0,t.uX)(),(0,t.Wv)(u.A,{total:(0,s.R1)(d),modelValue:(0,s.R1)(a),"onUpdate:modelValue":o[0]||(o[0]=e=>(0,s.i9)(a)?a.value=e:null),"data-list":(0,s.R1)(l),loading:(0,s.R1)(n),headers:(0,s.R1)(r)},null,8,["total","modelValue","data-list","loading","headers"]))}})},19535:function(e,l,a){a.d(l,{A:function(){return _}});var t=a(20641),s=a(50953),u=a(90033),o=a(63863),i=a(5615);const n={class:"animate__animated w-1 flex-column animate__fadeIn",style:{height:"fit-content"}},d={key:0,class:"flex-column"},r={class:"flex-row tk-p-v-6 tk-fs-14 header"},c={class:"flex-1 scroll"},v={class:"flex-row tk-p-v-10 tk-fs-12 item"},f={key:1,class:"flex-1 tk-fs-14 flex-column scroll"},p={class:"tk-p-v-8 tk-p-h-10"},k={class:"flex-row flex-just-between flex-align-center"},m={key:2,class:"flex-row flex-center tk-fs-13"};var h=(0,t.pM)({__name:"tableContentList",props:{loading:{type:Boolean,default:!0},dataList:{default:()=>[]},modelValue:{default:1},total:{},headers:{default:()=>[]},page:{type:Boolean,default:!0}},emits:["update:model-value","change"],setup(e,{emit:l}){const a=l,{useMobile:h}=(0,i.bP)((0,o.pp)()),_=e,C=(0,s.lW)(_,"modelValue"),x=(0,t.EW)((()=>(_.total??0)>10)),b=(0,t.EW)((()=>(_.total??0)>10*C.value)),g=()=>{b.value&&(a("update:model-value",_.modelValue+1),a("change"))},w=()=>{_.modelValue>1&&(a("update:model-value",_.modelValue-1),a("change"))};return(e,l)=>{const a=(0,t.gN)("loading");return(0,t.bo)(((0,t.uX)(),(0,t.CE)("div",n,[(0,s.R1)(h)?((0,t.uX)(),(0,t.CE)("div",f,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.dataList,((a,s)=>((0,t.uX)(),(0,t.CE)("div",p,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.headers,((s,o)=>((0,t.uX)(),(0,t.CE)("div",k,[(0,t.Lk)("div",{class:(0,u.C4)([2==s.size?"flex-h-2":"flex-h-1","detail-color"]),style:{"white-space":"pre"}},(0,u.v_)(e.$t(s.label)),3),l[0]||(l[0]=(0,t.Lk)("div",{class:"tk-w-20 flex-0"},null,-1)),(0,t.Lk)("div",{class:(0,u.C4)(2==s.size?"flex-h-2":"flex-h-1")},(0,u.v_)(s.format?s.format(a):a[s.prop]??""),3)])))),256))])))),256))])):((0,t.uX)(),(0,t.CE)("div",d,[(0,t.Lk)("div",r,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.headers,((l,a)=>((0,t.uX)(),(0,t.CE)("div",{class:(0,u.C4)(2==l.size?"flex-h-2":"flex-h-1")},(0,u.v_)(e.$t(l.label)),3)))),256))]),(0,t.Lk)("div",c,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.dataList,((l,a)=>((0,t.uX)(),(0,t.CE)("div",v,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.headers,((e,a)=>((0,t.uX)(),(0,t.CE)("div",{class:(0,u.C4)(2==e.size?"flex-h-2":"flex-h-1")},(0,u.v_)(e.format?e.format(l):l[e.prop]??""),3)))),256))])))),256))])])),l[2]||(l[2]=(0,t.Lk)("div",{class:"tk-h-20"},null,-1)),e.page&&x.value?((0,t.uX)(),(0,t.CE)("div",m,[(0,t.Lk)("div",{onClick:w,class:(0,u.C4)([e.modelValue>1?"color-white pointer":"color-detail-color",""])},(0,u.v_)(e.$t("$vuetify.pre_page")),3),l[1]||(l[1]=(0,t.Lk)("div",{class:"tk-w-30"},null,-1)),(0,t.Lk)("div",{onClick:g,class:(0,u.C4)(["",b.value?"color-white pointer":"color-detail-color"])},(0,u.v_)(e.$t("$vuetify.next_page")),3)])):(0,t.Q3)("",!0)])),[[a,e.loading]])}}});var _=(0,a(66262).A)(h,[["__scopeId","data-v-6baeaa09"]])}}]);