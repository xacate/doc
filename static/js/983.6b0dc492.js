"use strict";(self.webpackChunkskyweb=self.webpackChunkskyweb||[]).push([[983],{44192:function(e,l,t){t.d(l,{r:function(){return s}});var a=t(50953);const s=()=>{const e=(0,a.KR)([]);return{headers:(0,a.KR)([]),tableData:e,loading:(0,a.KR)(!1),total:(0,a.KR)(0),offset:(0,a.KR)(1)}}},77164:function(e,l,t){t.d(l,{A:function(){return m}});var a=t(20641),s=t(90033),o=t(50953),i=t(40349),r=t(73554),n=t(40292),A=t(63863),c=t(5615),u=t(50716);const v={class:"flex-row max-width tk-p-v-5"},d=["onClick"],p=["src"],k={style:{"white-space":"pre"},class:"tk-p-l-5 tk-fs-14"};var f=(0,a.pM)({__name:"SelectRadio",props:{value:{default:0},list:{}},emits:["change"],setup(e,{emit:l}){const{useMobile:t}=(0,c.bP)((0,A.pp)()),f=l,m=e,g=(0,o.KR)([]),w=(0,o.KR)(),y=(0,o.KR)(0),C=(0,o.KR)(0),b=(0,o.lW)(m,"value"),h=(0,o.KR)(0),x=async()=>{if(w.value){await(0,i.cP)((()=>null!=w.value?.children?.length&&w.value?.children?.length>0));for(let e=0;e<w.value.children.length;e++){const l=w.value.children[e];g.value[e]=l.clientWidth}R()}},R=async()=>{await(0,i.cP)((()=>g.value.length>0)),y.value=g.value[h.value],C.value=0;for(let e=0;e<h.value;e++)C.value+=g.value[e]};(0,a.sV)(x),(0,a.wB)(t,x),(0,a.wB)([h,b],R,{immediate:!0,deep:!0});return(0,a.sV)((()=>{r.s.on(n.O.UpdateLanguageInfo,x)})),(0,a.hi)((()=>{r.s.off(n.O.UpdateLanguageInfo,x)})),(e,l)=>((0,a.uX)(),(0,a.CE)("div",v,[(0,a.Lk)("div",{class:(0,s.C4)(["position-re tk-br-24 flex-row tk-p-v-5 no no-scroll",[(0,o.R1)(t)?"tk-m-h-15 w-1 ":"tk-m-l-15"]]),style:{"background-color":"#e4e4e411","overflow-x":"auto"}},[(0,a.Lk)("div",{class:"position-ab tk-br-20",style:(0,s.Tr)([{"background-color":"#13c78266",transition:"all 0.25s"},{left:`${C.value}px`,top:0,bottom:0,width:`${y.value}px`}])},null,4),(0,a.Lk)("div",{ref_key:"sliderRef",ref:w,class:"position-re flex-row flex-1 flex-align-center"},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.list,((e,l)=>((0,a.uX)(),(0,a.CE)("div",{onClick:e=>(e=>{h.value=e,f("change",e)})(l),class:"flex-row pointer tk-p-h-20 flex-align-center"},[e.icon?((0,a.uX)(),(0,a.CE)("img",{key:0,class:"tk-w-18",src:l===h.value?e.selectIcon??e.icon:e.icon,alt:""},null,8,p)):(0,a.Q3)("",!0),(0,a.Lk)("div",k,(0,s.v_)((0,o.R1)(u.$t)(e.title)),1)],8,d)))),256))],512)],2)]))}});var m=(0,t(66262).A)(f,[["__scopeId","data-v-cf99cce0"]])},79353:function(e,l,t){t.d(l,{A:function(){return h}});var a=t(20641),s=t(90033),o=t(50953),i=t(40349);const r={class:"tk-p-v-10 t"},n={class:"tk-fs-13",style:{color:"#cccccc"}},A=["src"];var c=(0,a.pM)({__name:"ExpendView",props:{title:{}},setup(e){const l=(0,o.KR)(!1),c=(0,o.KR)(0),u=(0,o.KR)(!1),v=(0,o.KR)(),d=()=>{u.value=!u.value};return(0,i.cP)((async()=>!!(v.value&&v.value.children.length>0)&&(c.value=v.value?.clientHeight??0,l.value=!0,!0))),(e,o)=>((0,a.uX)(),(0,a.CE)("div",r,[(0,a.Lk)("div",{class:"flex-just-between flex-row pointer flex-align-center",onClick:d},[(0,a.Lk)("span",n,(0,s.v_)(e.title),1),(0,a.Lk)("img",{style:(0,s.Tr)([{transition:"all 0.25s"},{}]),src:u.value?t(47373):t(14811),alt:""},null,8,A)]),(0,a.Lk)("div",{style:(0,s.Tr)([{transition:"all 0.25s",overflow:"hidden"},{height:l.value?u.value?`${c.value}px`:"0":"auto"}]),class:"",ref_key:"contentRef",ref:v},[(0,a.RG)(e.$slots,"default")],4)]))}});var u=(0,t(66262).A)(c,[["__scopeId","data-v-7b147c47"]]),v=t(50716),d=t(63863),p=t(5615);const k={class:"max-width tk-p-v-14 tk-p-h-10"},f={class:"color-detail-color tk-fs-14",style:{"word-wrap":"break-word","word-break":"break-all"}},m={class:"color-detail-color tk-fs-14",style:{"word-wrap":"break-word","word-break":"break-all"}},g={class:"color-detail-color tk-fs-14",style:{"word-wrap":"break-word","word-break":"break-all"}},w={class:"color-detail-color tk-fs-14",style:{"word-wrap":"break-word","word-break":"break-all"}},y={class:"color-detail-color tk-fs-14",style:{"word-wrap":"break-word","word-break":"break-all"}},C={class:"color-detail-color tk-fs-14",style:{"word-wrap":"break-word","word-break":"break-all"}},b={class:"color-detail-color tk-fs-14",style:{"word-wrap":"break-word","word-break":"break-all"}};var h=(0,a.pM)({__name:"Problem",setup(e){const{useMobile:l}=(0,p.bP)((0,d.pp)());return(e,t)=>((0,a.uX)(),(0,a.CE)("div",k,[(0,a.Lk)("div",{class:(0,s.C4)(["color-menu tk-br-8 tk-p-v-10",(0,o.R1)(l)?"flex-column":"flex-row flex-align-stretch"])},[(0,a.Lk)("div",{style:(0,s.Tr)({flex:(0,o.R1)(l)?"0 1 auto":"2 2 0"}),class:(0,s.C4)((0,o.R1)(l)?"flex-row flex-align-center tk-p-h-20 flex-just-between":"flex-column flex-center")},[(0,a.Lk)("span",null,(0,s.v_)((0,o.R1)(v.$t)("$vuetify.home_problem")),1)],6),(0,a.Lk)("div",{style:(0,s.Tr)({flex:(0,o.R1)(l)?"0 1 auto":"3 3 0"})},[(0,a.Lk)("div",{class:(0,s.C4)((0,o.R1)(l)?"tk-p-h-20":"tk-p-h-30")},[(0,a.bF)(u,{title:(0,o.R1)(v.$t)("$vuetify.home_proble_1_t")},{default:(0,a.k6)((()=>[(0,a.Lk)("div",f,(0,s.v_)((0,o.R1)(v.$t)("$vuetify.home_proble_1_d")),1)])),_:1},8,["title"]),(0,a.bF)(u,{title:(0,o.R1)(v.$t)("$vuetify.home_proble_2_t")},{default:(0,a.k6)((()=>[(0,a.Lk)("div",m,(0,s.v_)((0,o.R1)(v.$t)("$vuetify.home_proble_2_d")),1)])),_:1},8,["title"]),(0,a.bF)(u,{title:(0,o.R1)(v.$t)("$vuetify.home_proble_3_t")},{default:(0,a.k6)((()=>[(0,a.Lk)("div",g,(0,s.v_)((0,o.R1)(v.$t)("$vuetify.home_proble_3_d")),1)])),_:1},8,["title"]),(0,a.bF)(u,{title:(0,o.R1)(v.$t)("$vuetify.home_proble_4_t")},{default:(0,a.k6)((()=>[(0,a.Lk)("div",w,(0,s.v_)((0,o.R1)(v.$t)("$vuetify.home_proble_4_d")),1)])),_:1},8,["title"]),(0,a.bF)(u,{title:(0,o.R1)(v.$t)("$vuetify.home_proble_5_t")},{default:(0,a.k6)((()=>[(0,a.Lk)("div",y,(0,s.v_)((0,o.R1)(v.$t)("$vuetify.home_proble_5_d")),1)])),_:1},8,["title"]),(0,a.bF)(u,{title:(0,o.R1)(v.$t)("$vuetify.home_proble_6_t")},{default:(0,a.k6)((()=>[(0,a.Lk)("div",C,(0,s.v_)((0,o.R1)(v.$t)("$vuetify.home_proble_6_d")),1)])),_:1},8,["title"]),(0,a.bF)(u,{title:(0,o.R1)(v.$t)("$vuetify.home_proble_7_t")},{default:(0,a.k6)((()=>[(0,a.Lk)("div",b,(0,s.v_)((0,o.R1)(v.$t)("$vuetify.home_proble_7_d")),1)])),_:1},8,["title"])],2)],4)],2)]))}})},19535:function(e,l,t){t.d(l,{A:function(){return g}});var a=t(20641),s=t(50953),o=t(90033),i=t(63863),r=t(5615);const n={class:"animate__animated w-1 flex-column animate__fadeIn",style:{height:"fit-content"}},A={key:0,class:"flex-column"},c={class:"flex-row tk-p-v-6 tk-fs-14 header"},u={class:"flex-1 scroll"},v={class:"flex-row tk-p-v-10 tk-fs-12 item"},d={key:1,class:"flex-1 tk-fs-14 flex-column scroll"},p={class:"tk-p-v-8 tk-p-h-10"},k={class:"flex-row flex-just-between flex-align-center"},f={key:2,class:"flex-row flex-center tk-fs-13"};var m=(0,a.pM)({__name:"tableContentList",props:{loading:{type:Boolean,default:!0},dataList:{default:()=>[]},modelValue:{default:1},total:{},headers:{default:()=>[]},page:{type:Boolean,default:!0}},emits:["update:model-value","change"],setup(e,{emit:l}){const t=l,{useMobile:m}=(0,r.bP)((0,i.pp)()),g=e,w=(0,s.lW)(g,"modelValue"),y=(0,a.EW)((()=>(g.total??0)>10)),C=(0,a.EW)((()=>(g.total??0)>10*w.value)),b=()=>{C.value&&(t("update:model-value",g.modelValue+1),t("change"))},h=()=>{g.modelValue>1&&(t("update:model-value",g.modelValue-1),t("change"))};return(e,l)=>{const t=(0,a.gN)("loading");return(0,a.bo)(((0,a.uX)(),(0,a.CE)("div",n,[(0,s.R1)(m)?((0,a.uX)(),(0,a.CE)("div",d,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.dataList,((t,s)=>((0,a.uX)(),(0,a.CE)("div",p,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.headers,((s,i)=>((0,a.uX)(),(0,a.CE)("div",k,[(0,a.Lk)("div",{class:(0,o.C4)([2==s.size?"flex-h-2":"flex-h-1","detail-color"]),style:{"white-space":"pre"}},(0,o.v_)(e.$t(s.label)),3),l[0]||(l[0]=(0,a.Lk)("div",{class:"tk-w-20 flex-0"},null,-1)),(0,a.Lk)("div",{class:(0,o.C4)(2==s.size?"flex-h-2":"flex-h-1")},(0,o.v_)(s.format?s.format(t):t[s.prop]??""),3)])))),256))])))),256))])):((0,a.uX)(),(0,a.CE)("div",A,[(0,a.Lk)("div",c,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.headers,((l,t)=>((0,a.uX)(),(0,a.CE)("div",{class:(0,o.C4)(2==l.size?"flex-h-2":"flex-h-1")},(0,o.v_)(e.$t(l.label)),3)))),256))]),(0,a.Lk)("div",u,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.dataList,((l,t)=>((0,a.uX)(),(0,a.CE)("div",v,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.headers,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{class:(0,o.C4)(2==e.size?"flex-h-2":"flex-h-1")},(0,o.v_)(e.format?e.format(l):l[e.prop]??""),3)))),256))])))),256))])])),l[2]||(l[2]=(0,a.Lk)("div",{class:"tk-h-20"},null,-1)),e.page&&y.value?((0,a.uX)(),(0,a.CE)("div",f,[(0,a.Lk)("div",{onClick:h,class:(0,o.C4)([e.modelValue>1?"color-white pointer":"color-detail-color",""])},(0,o.v_)(e.$t("$vuetify.pre_page")),3),l[1]||(l[1]=(0,a.Lk)("div",{class:"tk-w-30"},null,-1)),(0,a.Lk)("div",{onClick:b,class:(0,o.C4)(["",C.value?"color-white pointer":"color-detail-color"])},(0,o.v_)(e.$t("$vuetify.next_page")),3)])):(0,a.Q3)("",!0)])),[[t,e.loading]])}}});var g=(0,t(66262).A)(m,[["__scopeId","data-v-6baeaa09"]])},61228:function(e,l,t){t.r(l),t.d(l,{default:function(){return _}});t(81454);var a=t(20641),s=t(90033),o=t(50953),i=t(76398),r=t(53751),n=t(50716),A=t(45751),c=t(44192),u=t(63863),v=t(19535),d=t(5615);const p={class:"w-1 tk-br-8 tk-p-h-16 color-menu"},k={key:1},f={class:"flex-row flex-just-between tk-p-v-10 flex-align-center"},m={class:"tk-fs-14"},g={class:"tk-fs-14"},w={class:"flex-row flex-just-between tk-p-v-10 flex-align-center"},y={class:"tk-fs-14"};var C=(0,a.pM)({__name:"LastBets",setup(e){const{useMobile:l}=(0,d.bP)((0,u.pp)()),{offset:t,tableData:i,total:r,headers:C,loading:b}=(0,c.r)();C.value=[{label:"$vuetify.recom_time",prop:"createTime"},{label:"$vuetify.wallet_bet_trans_game_name",prop:"gameName",format(e){return e.gameName.secret(6)??"0"}},{label:"$vuetify.wallet_withdraw_amount",prop:"number"},{label:"$vuetify.wallet_withdraw_coin",prop:"coinsCategory"},{label:"$vuetify.t_user_id",prop:"userId"}];return(0,a.sV)((async()=>{b.value=!0;try{const{list:e,total:l}=await A.clientApi.userApi.getUserCoinsRecordListAllWeb({recordCategory:"bet",pageNo:1});i.value=e,r.value=l}catch(e){}b.value=!1})),(e,t)=>((0,a.uX)(),(0,a.CE)("div",p,[(0,o.R1)(l)?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.Wv)(v.A,{key:0,loading:(0,o.R1)(b),"data-list":(0,o.R1)(i),page:!1,headers:(0,o.R1)(C)},null,8,["loading","data-list","headers"])),(0,o.R1)(l)?((0,a.uX)(),(0,a.CE)("div",k,[(0,a.Lk)("div",f,[(0,a.Lk)("span",m,(0,s.v_)((0,o.R1)(n.$t)("$vuetify.wallet_bet_trans_game_name")),1),(0,a.Lk)("span",g,(0,s.v_)((0,o.R1)(n.$t)("$vuetify.wallet_withdraw_amount")),1)]),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)((0,o.R1)(i),((e,l)=>((0,a.uX)(),(0,a.CE)("div",w,[(0,a.Lk)("span",y,(0,s.v_)(e.gameName.secret(6)??"0"),1),(0,a.Lk)("span",{class:"tk-fs-14",style:(0,s.Tr)({color:e.number>0?"green":"red"})},(0,s.v_)(e.number),5)])))),256))])):(0,a.Q3)("",!0)]))}});const b={class:"w-1 tk-p-h-16"};var h=(0,a.pM)({__name:"BetMatch",setup(e){const{useMobile:l}=(0,d.bP)((0,u.pp)());return(e,t)=>{const i=(0,a.gN)("loading");return(0,a.bo)(((0,a.uX)(),(0,a.CE)("div",b,[t[1]||(t[1]=(0,a.Fv)('<div class="w-1 flex-row flex-align-center tk-fs-14"><div class="color-detail-color flex-row flex-center" style="flex:2 0 20%;"> 遊戲 </div><div class="color-detail-color flex-row flex-center" style="flex:2 0 20%;"> 玩家 </div><div class="color-detail-color flex-row flex-center" style="flex:3 0 30%;"> 投注金額 </div><div class="color-detail-color flex-row flex-center" style="flex:1 0 10%;"> 倍率 </div><div class="color-detail-color flex-row flex-center" style="flex:2 0 20%;"> 利潤金額 </div></div>',1)),((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)([1,2,3,4,5],((e,i)=>(0,a.Lk)("div",{class:(0,s.C4)(["w-1 tk-p-v-8 flex-row flex-align-center",(0,o.R1)(l)?"tk-fs-11":"tk-fs-14"]),style:{"align-items":"stretch"}},t[0]||(t[0]=[(0,a.Fv)('<div class="flex-row flex-center" style="flex:2 2 20%;"> JACK </div><div class="flex-row flex-center" style="flex:2 2 20%;"> HURLEYLOST </div><div class="flex-row flex-center" style="flex:3 3 30%;"> 0.01480852 </div><div class="flex-row flex-center" style="flex:1 1 10%;word-break:break-all;"> 1.38x </div><div class="flex-row flex-center" style="flex:2 2 20%;"> -13.59576007 </div>',5)]),2))),64))])),[[i,!0]])}}});const x={class:"max-width tk-p-t-20 tk-p-h-10"},R={class:"tk-p-h-20 tk-p-v-10 flex-row flex-align-center flex-just-between"},E={class:"tk-fs-16"};var B=(0,a.pM)({__name:"GameType",emits:["change"],setup(e,{emit:l}){const t=(0,o.KR)(1);return(e,l)=>((0,a.uX)(),(0,a.CE)("div",x,[(0,a.Lk)("div",R,[(0,a.Lk)("span",E,(0,s.v_)((0,o.R1)(n.$t)("$vuetify.home_t")),1),l[0]||(l[0]=(0,a.Lk)("div",{class:"flex-row flex-align-center"},[(0,a.Lk)("div",{class:"tk-w-15"})],-1))]),(0,a.bo)((0,a.bF)(C,null,null,512),[[r.aG,1==t.value]]),(0,a.bo)((0,a.bF)(h,null,null,512),[[r.aG,2==t.value]])]))}}),Q=t(79353),F=t(92099),K=t(16210),L=t(61736),I=t(38721),U=t(77164),P=t(7113),S=t(75220),X=t(73554),G=t(40292);const T={class:"w-1 h-1 scroll tk-p-b-15"};var M=(0,a.pM)({__name:"GameMenu",setup(e){const{getCategoryList:l}=(0,P.b)(),{gameCategory:r}=(0,d.bP)((0,P.b)()),n=(0,S.lq)();(0,a.sV)((()=>{const e=n.params,l=Object.keys(e);0!==l.length&&l.includes("name")&&"placa"===e.name&&X.s.emit(G.O.ShowPlacaTipInfoMessage)}));const A=(0,o.KR)("Self-developed"),c=(0,o.KR)(!1),u=(0,o.KR)(r.value.map((e=>({title:e.label,icon:e.icon,selectIcon:e.activeIcon}))));u.value.unshift({title:"$vuetify.game_all",icon:t(56456),selectIcon:t(29210)});const v=e=>{if(0===e)return p.value.length=0,void(p.value=[{name:"Hot",mark:"$vuetify.game_hot",type:"Hot"},{name:"New",mark:"$vuetify.game_new",type:"New"},{name:"Self-developed",mark:"$vuetify.game_ziyan",type:"Self-developed"},{name:"FaChaiGaming",mark:"$vuetify.game_slot",type:"Slot Game"},{name:"TADAGaming",mark:"$vuetify.game_buyu",type:"Fish Game"},{name:"TADAGaming",mark:"$vuetify.game_caipiao",type:"Lottery Game"},{name:"TADAGaming",mark:"$vuetify.game_zhipai",type:"Card Game"},{name:"TADAGaming",mark:"$vuetify.game_baozha",type:"Crash Game"}]);const l=r.value[e-1];k(l.key)},p=(0,o.KR)([]),k=async e=>{p.value.length=0,c.value=!0,A.value=e,l(e).then((l=>{c.value=!1,p.value=l.map((l=>({name:l,mark:l,type:e})))}))};return(0,a.sV)((()=>{v(0)})),(e,l)=>{const t=(0,a.gN)("loading");return(0,a.uX)(),(0,a.CE)("div",T,[(0,a.bF)(i.A),(0,a.bF)(U.A,{list:u.value,onChange:v},null,8,["list"]),(0,a.bo)(((0,a.uX)(),(0,a.CE)("div",{class:(0,s.C4)(c.value?"tk-h-300":"")},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(p.value,((e,l)=>((0,a.uX)(),(0,a.Wv)(I.A,{key:l,type:e.type,mark:1===p.value.length?"":e.mark,name:e.name},null,8,["type","mark","name"])))),128))],2)),[[t,c.value]]),(0,a.bF)(B),(0,a.bF)(Q.A),(0,a.bF)(F.A),(0,a.bF)(K.A),(0,a.bF)(L.A),l[0]||(l[0]=(0,a.Lk)("div",{class:"tk-h-20"},null,-1))])}}});var _=M},38721:function(e,l,t){t.d(l,{A:function(){return E}});t(44114),t(81454);var a=t(20641),s=t(50953),o=t(13791),i=t(63863),r=t(7113),n=t(90033),A=t(40349),c=t(50716),u=t(5615),v=t(77420),d=t(26861),p=t(94250);const k={class:"game-item max-width"},f={key:0,class:"tk-fs-16"},m={key:1},g={class:"flex-row flex-align-center"},w={key:0,class:"tk-w-4"},y={key:2,class:"tk-w-2"},C={key:0,class:"flex-row flex-center h-1"},b=["src"],h=["onClick"];var x=(0,a.pM)({__name:"gameItem",props:{loading:{type:Boolean,default:!1},title:{default:""},className:{default:"tk-h-180"},dataList:{default:()=>[]}},emits:["change","clickAll","refresh"],setup(e,{emit:l}){const{useMobile:o}=(0,u.bP)((0,i.pp)()),r=l,x=e,R=(0,s.KR)(null),E=(0,s.KR)(!1),B=(0,s.KR)(!1),Q=(0,s.KR)([]),F=()=>{R.value&&(E.value=R.value?.hasPrev??!1,B.value=R.value?.hasNext??!1)},K=()=>{R.value&&R.value.scrollTo("next"),setTimeout(F,250)},L=()=>{R.value&&R.value.scrollTo("prev"),setTimeout(F,250)},I=(0,s.lW)(x,"dataList");return(0,a.wB)(I,(()=>{(0,A.cP)((async()=>x.dataList.length>0)).then(F)}),{deep:!0,immediate:!0}),(e,l)=>{const i=(0,a.gN)("lazy"),A=(0,a.gN)("loading");return(0,a.uX)(),(0,a.CE)("div",k,[(0,a.Lk)("div",{class:(0,n.C4)((0,s.R1)(o)?"back-item":"")},[(0,a.Lk)("div",{class:(0,n.C4)(["flex-row flex-align-center flex-just-between",(0,s.R1)(o)?"tk-p-l-10 tk-p-t-10":"tk-p-h-20 tk-p-v-10"])},[e.title?((0,a.uX)(),(0,a.CE)("span",f,(0,n.v_)((0,s.R1)(c.$t)(e.title)),1)):((0,a.uX)(),(0,a.CE)("span",m)),(0,a.Lk)("div",g,[(0,a.Lk)("div",{class:"pointer tk-p-h-8 tk-p-v-4 tk-br-7 flex-row flex-center tk-fs-12",style:(0,n.Tr)({backgroundColor:(0,s.R1)(o)?"":"#3a414222"}),onClick:l[0]||(l[0]=l=>e.$emit("clickAll"))},(0,n.v_)((0,s.R1)(c.$t)("$vuetify.home_all")),5),(0,s.R1)(o)?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",w)),(0,s.R1)(o)?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",{key:1,style:(0,n.Tr)([{opacity:E.value?1:.5},{"background-color":"rgb(58, 65, 66)","border-radius":"50%"}]),onClick:L,class:"pointer tk-p-h-3 tk-p-v-3 tk-br-2 flex-row flex-center tk-fs-16"},[(0,a.bF)(d.w,{size:"small",icon:"$next",style:{transform:"rotateZ(180deg)"}})],4)),(0,s.R1)(o)?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",y)),(0,s.R1)(o)?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",{key:3,style:(0,n.Tr)([{opacity:B.value?1:.5},{"background-color":"#3a4142","border-radius":"50%"}]),onClick:K,class:"pointer tk-p-h-3 tk-p-v-3 flex-row flex-center tk-fs-16"},[(0,a.bF)(d.w,{size:"small",icon:"$next"})],4))])],2),(0,a.bo)(((0,a.uX)(),(0,a.CE)("div",{class:(0,n.C4)(["bt-item",e.className])},[0===e.dataList.length?((0,a.uX)(),(0,a.CE)("div",C,[(0,a.Lk)("img",{onClick:l[1]||(l[1]=e=>r("refresh")),class:"tk-w-30 pointer",src:t(53099),alt:""},null,8,b)])):((0,a.uX)(),(0,a.Wv)((0,s.R1)(v.fJ),{key:1,style:{padding:"0"},ref_key:"sliderRef",ref:R,modelValue:Q.value,"onUpdate:modelValue":l[2]||(l[2]=e=>Q.value=e),mobile:!0},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.dataList,((t,s)=>((0,a.uX)(),(0,a.Wv)(p.U,{key:s},{default:(0,a.k6)((({isSelected:s,toggle:o})=>[e.$slots.item?(0,a.RG)(e.$slots,"item",{key:0,item:t}):((0,a.uX)(),(0,a.CE)("div",{key:1,onClick:e=>(e=>{setTimeout(F,250),r("change",e)})(t),class:"position-re pointer flex-row flex-center item"},[(0,a.bo)(((0,a.uX)(),(0,a.CE)("img",{key:t.img,class:"w-1",alt:"",style:{"max-height":"100%","object-fit":"cover"}})),[[i,t.img]]),l[3]||(l[3]=(0,a.Lk)("div",{class:"position-ab"},null,-1)),l[4]||(l[4]=(0,a.Lk)("div",{class:"positionab"},null,-1))],8,h))])),_:2},1024)))),128))])),_:3},8,["modelValue"]))],2)),[[A,e.loading]])],2)])}}});var R=(0,t(66262).A)(x,[["__scopeId","data-v-50366a18"]]);var E=(0,a.pM)({__name:"GameList",props:{type:{default:"Slot Game"},name:{default:"PGSoft"},mark:{default:""}},setup(e){const l=e,{useMobile:t}=(0,u.bP)((0,i.pp)()),{getGameList:n}=(0,r.b)(),A=(0,s.KR)(0),c=(0,s.KR)(!0),v=(0,s.KR)([]),d=e=>{o.A.push(`/game/${l.name}/${l.type}_${e.gameUid}`)},p=async()=>{c.value=!0,n(l.type,l.name).then((e=>{A.value++,e.length>20?v.value=e.slice(0,20).map((e=>({img:e.icon,gameName:e.gameName,gameType:e.gameType,gameUid:e.gameUid,platformType:e.platformType}))):v.value=e.map((e=>({img:e.icon,gameName:e.gameName,gameType:e.gameType,gameUid:e.gameUid,platformType:e.platformType}))),c.value=!1}))},k=(0,s.lW)(l,"name");return(0,a.wB)(k,(()=>{k.value&&p()}),{immediate:!0}),(e,i)=>((0,a.uX)(),(0,a.Wv)(R,{key:A.value,"class-name":(0,s.R1)(t)?"tk-h-164":"tk-h-180",loading:c.value,title:e.mark,"data-list":v.value,onChange:d,onRefresh:p,onClickAll:i[0]||(i[0]=t=>{return a=e.name,void o.A.push(`/gamelist/${l.type}_${a}`);var a})},null,8,["class-name","loading","title","data-list"]))}})},53099:function(e){e.exports="data:image/png;base64,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"},14811:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH2SURBVHgBtVXRccIwDJWcDsAGTTegG7gTwAbQ/16h/9wlueO/5a7/pRuwQcMEpRM03YAFiCoJx4AvJLQc785xYktPki0pABcGNm0myXPHGDMgRAtEXV6K3VYhg5XnZVkus+yp+JMBIQZjxrw54s8OtIAAsiwZpScZYPIYjfnw3hLliDiPoiifTB5+nIxE0+X1HiD2nWpBZXkXRoMN5HwEOEySxyU0INQJjZgDazvBFQvetpELhExkRUd0hUOPODSQZLM08GIdkqXZ7FtGjZG16MD28mNEMzowoGHyJO/HyB1i2GVSnZF7/UAYV1FUEVh9Ei2aUq4NrJvzJEPT2xtA98FZsYAzwVG860xkvQFwYXPRfMH5yPWJ2NVJHnxxpHMy8mnrLjOG01Cw7s2eruczcGFcVR7wiKfT1+uqWvc9qvPsGKGr8orT3QGiFAlsNhsL52NrgKjwBpD7ja4BDOFMYBT1dOb+5Q2U29SS4rIcooV/QgqWPe87zqU3oJVL8KKWjXnb7yUBCjfqyDuul8lRpFXBYiDwCbtm19QyjpHL+R+krE/ToGF1xZiG3E5unWNK7jg82n843D44CRZS5ezEqpLhyboWY51q+w9nH2k6S3g3hXbo/RGVs7ojbfvpx+op4oAl+R3j7Q7nOMGK13PJwFPv6iL4BVJWDPCXK6B5AAAAAElFTkSuQmCC"},47373:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH+SURBVHgBvVaBVSIxEJ3JXQF7HdDBcRWwduBVAFaANGCSCoQKxA7oQKjAtQLXDrYBN/4kE4mPRWBR/3t52QyT/zNJJgPRD4APORhzW6K7hOuImAf4LtAacq5GXxG5e2Nm614ikZw1iEs6jJpc+x9iVdePqsto7QLk6kEEGm8CyQXaH6On7Ps4pkUQIBrA/zHMOyYS7+gQSBqCbI4VNvQJjF14fy2ERuup3SuSCTQS/pqOBLb3EtHc4bNwbTuzdjbfEYGTD/k5DFx7BYElnQhwTETIL/IfOGpvV1lMJgrwso9AFME85hXFG3id7EpWAKMaR9OrpXPQynxW48i7jaSUfpNC7It4jXlNMZphLhIG2MeKvgLu9Sl0LvL+FnMhxnq7ovdDPJK4vchuY7jyzPRhu4qdOWrX9gkaaZ0IkSCCCqpjtEH6wd6Eez6nfkg7E4RDJCCPZ8G//tJXgNUo503b5QdQdWVIyjMg8/2BN+mMJE9mPkPvZRmazsE2qVfJlL/Cfv8bxDgJ71APaH17LUnd5En9LuKT0HGbsvUOQkM6Ab7+sFI6BsE2T+qdp/7Qs91BXjCraV4eUHNM7tNZGXMhoIbT0rl2g+/Kn5+8SUOQj1x8CIt9AntFZIWlZPyADmODi2P21Z/j/kiwmlC8limPfJK9oPyu8eyuTilu34Y30pbhUfVUpz8AAAAASUVORK5CYII="},56456:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFTSURBVHgB3VTBUcMwELxz8uCZEtwCFRA/+YUfP0wDMKnAcgWedOBUEJ78MBUwdCA6SAOxWF1EMB7ZFpg8kp05W5b2dqWTLKJTB4cSlSpi4uhFPkydKLXUIXlRCAnic4i/oRlLwAh9i5DcyRAhz1cZMZdoXiDWiHcEDPk2Sa6pqp5f+/K5Z9Yzirggw+mXl8oelYzlK/vOpNeYEo8lSrYNNmjUO0ZsUfMbCFQtzgKcwnF0176wR9zWe4PmrC/RMxHLtSt5anKiVkLqEqz4GgmXfadFxsCh/d5Ys41oNDBt5cTyNFwq9XBPAXC1T7Ev9vPuoOFbwTd2H/RbmFr7uoP+gzE4usF0iCAnBTXuGC6HroxBAxHnKPOOmFrmQCMNHLgis9tfCzy5gvo8JCt8DyCOcigbB6N/NfgjTt/gx2WHI6k6T0woTJ3LPjm0V6BpPDSdFT4BusCAlMFYgBIAAAAASUVORK5CYII="},29210:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF4SURBVHgB3VTBUcMwELxTkpk8PTEFpAU/Ex4kHUAFmBIogLFMA7RgKoAOEoZxPLzSgvjxIIyffKJD5yEggx0LDI9kZ2RL1un2tHc+gF0Huhp6mRwKEDMAAg00zUdSuZwTLkbevZx0SCxNNEMENEQ48xfy2OVsI8HBQxx1uiZyBA+IrnkwCaC4GWRx1HS+ViJvKb3Oq7gy05DXpCl+OYxkQZrFkgAL5wSQ6L4+zwOZOxNs9GZJjIccEU+eRxdz26aQCIsAhgSk6vLyTSJbbxOf6qEOvjpnrMbytgd6aqZqW15KBH56Gdp6r/sUPG2pFt5b93Vg58VPZWjbdO2FuSpXCU+T1Tg6Awe8ax/6i9gIjqfERHU3+CDS9Ag/BBGoqu9O/0Eb/DtBt8mgKFmNYdWeFpQ0tYxGAnaOAqPqveIloQ3BJ2hOGu54hgKOzHPicso5B+ycWwWPDdGfEvwWu09Q6qaDNJZ1FeMKu60zSjcwzhW0BApSsFd4A2ialvPRNukkAAAAAElFTkSuQmCC"}}]);