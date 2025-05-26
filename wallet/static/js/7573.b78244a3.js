"use strict";(self["webpackChunkwallet_vue"]=self["webpackChunkwallet_vue"]||[]).push([[7573],{97573:function(t,e,i){i(44114),i(18111),i(81148),i(22489),i(7588),i(61701);var r,a=i(81238),s=i(74186),o=i(65588),n=i(37903),c=i(12607),l=i(81753),p=i(80347),u=i(64529),d=i(31843),h=i(58843),g=i(68237),w=(i(5507),i(82685),i(6578),i(17651),i(85354)),y=(i(3886),i(7892),i(80894),i(76046));(function(t){t["approve"]="approved",t["bought"]="bought",t["borrow"]="borrowed",t["burn"]="burnt",t["cancel"]="canceled",t["claim"]="claimed",t["deploy"]="deployed",t["deposit"]="deposited",t["execute"]="executed",t["mint"]="minted",t["receive"]="received",t["repay"]="repaid",t["send"]="sent",t["sell"]="sold",t["stake"]="staked",t["trade"]="swapped",t["unstake"]="unstaked",t["withdraw"]="withdrawn"})(r||(r={}));var x=i(48317),m=(i(15144),i(3198),a.AH`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`),f=function(t,e,i,r){var a,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,i,o):a(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};let v=class extends a.WF{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,e]=this.images,i="NFT"===t?.type,r=e?.url?"NFT"===e.type:i,s=i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",o=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`\n    --local-left-border-radius: ${s};\n    --local-right-border-radius: ${o};\n    `,a.qy`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,e]=this.images,i=t?.type,r=2===this.images.length;return r&&(t?.url||e?.url)?a.qy`<div class="swap-images-container">
        ${t?.url?a.qy`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${e?.url?a.qy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t?.url?a.qy`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:"NFT"===i?a.qy`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:a.qy`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t,e="accent-100";return t=this.getIcon(),this.status&&(e=this.getStatusColor()),t?a.qy`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};v.styles=[m],f([(0,s.MZ)()],v.prototype,"type",void 0),f([(0,s.MZ)()],v.prototype,"status",void 0),f([(0,s.MZ)()],v.prototype,"direction",void 0),f([(0,s.MZ)({type:Boolean})],v.prototype,"onlyDirectionIcon",void 0),f([(0,s.MZ)({type:Array})],v.prototype,"images",void 0),f([(0,s.MZ)({type:Object})],v.prototype,"secondImage",void 0),v=f([(0,x.E)("wui-transaction-visual")],v);var b=a.AH`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`,$=function(t,e,i,r){var a,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,i,o):a(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};let T=class extends a.WF{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return a.qy`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,w.J)(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${(0,w.J)(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${r[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const t=this.descriptions?.[0];return t?a.qy`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){const t=this.descriptions?.[1];return t?a.qy`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};T.styles=[y.W5,b],$([(0,s.MZ)()],T.prototype,"type",void 0),$([(0,s.MZ)({type:Array})],T.prototype,"descriptions",void 0),$([(0,s.MZ)()],T.prototype,"date",void 0),$([(0,s.MZ)({type:Boolean})],T.prototype,"onlyDirectionIcon",void 0),$([(0,s.MZ)()],T.prototype,"status",void 0),$([(0,s.MZ)()],T.prototype,"direction",void 0),$([(0,s.MZ)({type:Array})],T.prototype,"images",void 0),$([(0,s.MZ)({type:Array})],T.prototype,"price",void 0),$([(0,s.MZ)({type:Array})],T.prototype,"amount",void 0),$([(0,s.MZ)({type:Array})],T.prototype,"symbol",void 0),T=$([(0,x.E)("wui-transaction-list-item")],T);i(55881);var k=i(1555),A=a.AH`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`,C=function(t,e,i,r){var a,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,i,o):a(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};const I="last-transaction",D=7;let O=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=n.W.state.activeCaipAddress,this.transactionsByYear=c.W.state.transactionsByYear,this.loading=c.W.state.loading,this.empty=c.W.state.empty,this.next=c.W.state.next,c.W.clearCursor(),this.unsubscribe.push(n.W.subscribeKey("activeCaipAddress",(t=>{t&&this.caipAddress!==t&&(c.W.resetTransactions(),c.W.fetchTransactions(t)),this.caipAddress=t})),n.W.subscribeKey("activeCaipNetwork",(()=>{this.updateTransactionView()})),c.W.subscribe((t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next})))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){return a.qy` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){const t=n.W.state.activeCaipNetwork?.caipNetworkId,e=c.W.state.lastNetworkInView;e!==t&&(c.W.resetTransactions(),this.caipAddress&&c.W.fetchTransactions(l.w.getPlainAddress(this.caipAddress))),c.W.setLastNetworkInView(t)}templateTransactionsByYear(){const t=Object.keys(this.transactionsByYear).sort().reverse();return t.map((t=>{const e=parseInt(t,10),i=new Array(12).fill(null).map(((t,i)=>{const r=g.tt.getTransactionGroupTitle(e,i),a=this.transactionsByYear[e]?.[i];return{groupTitle:r,transactions:a}})).filter((({transactions:t})=>t)).reverse();return i.map((({groupTitle:t,transactions:e},r)=>{const s=r===i.length-1;return e?a.qy`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${s?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200" data-testid="group-title"
                >${t}</wui-text
              >
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(e,s)}
            </wui-flex>
          </wui-flex>
        `:null}))}))}templateRenderTransaction(t,e){const{date:i,descriptions:r,direction:s,isAllNFT:o,images:n,status:c,transfers:l,type:p}=this.getTransactionListItemProps(t),u=l?.length>1,d=2===l?.length;return d&&!o?a.qy`
        <wui-transaction-list-item
          date=${i}
          .direction=${s}
          id=${e&&this.next?I:""}
          status=${c}
          type=${p}
          .images=${n}
          .descriptions=${r}
        ></wui-transaction-list-item>
      `:u?l.map(((t,r)=>{const s=g.tt.getTransferDescription(t),o=e&&r===l.length-1;return a.qy` <wui-transaction-list-item
          date=${i}
          direction=${t.direction}
          id=${o&&this.next?I:""}
          status=${c}
          type=${p}
          .onlyDirectionIcon=${!0}
          .images=${[n[r]]}
          .descriptions=${[s]}
        ></wui-transaction-list-item>`})):a.qy`
      <wui-transaction-list-item
        date=${i}
        .direction=${s}
        id=${e&&this.next?I:""}
        status=${c}
        type=${p}
        .images=${n}
        .descriptions=${r}
      ></wui-transaction-list-item>
    `}templateTransactions(t,e){return t.map(((i,r)=>{const s=e&&r===t.length-1;return a.qy`${this.templateRenderTransaction(i,s)}`}))}emptyStateActivity(){return a.qy`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
      data-testid="empty-activity-state"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return a.qy`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
      data-testid="empty-account-state"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?a.qy`${this.emptyStateAccount()}`:a.qy`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(D).fill(a.qy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((t=>t)):null}onReceiveClick(){p.I.push("WalletReceive")}createPaginationObserver(){const t=n.W.state.activeChain,{projectId:e}=u.H.state;this.paginationObserver=new IntersectionObserver((([i])=>{i?.isIntersecting&&!this.loading&&(c.W.fetchTransactions(l.w.getPlainAddress(this.caipAddress)),d.E.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:l.w.getPlainAddress(this.caipAddress),projectId:e,cursor:this.next,isSmartAccount:h.U.state.preferredAccountTypes?.[t]===k.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}))}),{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const t=this.shadowRoot?.querySelector(`#${I}`);t&&this.paginationObserver?.observe(t)}getTransactionListItemProps(t){const e=o.r.formatDate(t?.metadata?.minedAt),i=g.tt.getTransactionDescriptions(t),r=t?.transfers,a=t?.transfers?.[0],s=Boolean(a)&&t?.transfers?.every((t=>Boolean(t.nft_info))),n=g.tt.getTransactionImages(r);return{date:e,direction:a?.direction,descriptions:i,isAllNFT:s,images:n,status:t.metadata?.status,transfers:r,type:t.metadata?.operationType}}};O.styles=A,C([(0,s.MZ)()],O.prototype,"page",void 0),C([(0,s.wk)()],O.prototype,"caipAddress",void 0),C([(0,s.wk)()],O.prototype,"transactionsByYear",void 0),C([(0,s.wk)()],O.prototype,"loading",void 0),C([(0,s.wk)()],O.prototype,"empty",void 0),C([(0,s.wk)()],O.prototype,"next",void 0),O=C([(0,g.EM)("w3m-activity-list")],O)}}]);