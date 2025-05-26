"use strict";(self["webpackChunkwallet_vue"]=self["webpackChunkwallet_vue"]||[]).push([[6609],{11716:function(t,e,o){o(44114),o(18111),o(7588);var i=o(81238),n=o(74186),r=o(87367),a=o(80347),s=o(96577),l=o(68237),c=i.AH`
  :host {
    width: 100%;
    display: block;
  }
`,u=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let p=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.text="",this.open=r.I.state.open,this.unsubscribe.push(a.I.subscribeKey("view",(()=>{r.I.hide()})),s.W.subscribeKey("open",(t=>{t||r.I.hide()})),r.I.subscribeKey("open",(t=>{this.open=t})))}disconnectedCallback(){this.unsubscribe.forEach((t=>t())),r.I.hide()}render(){return i.qy`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return i.qy`<slot></slot> `}onMouseEnter(){const t=this.getBoundingClientRect();this.open||r.I.showTooltip({message:this.text,triggerRect:{width:t.width,height:t.height,left:t.left,top:t.top},variant:"shade"})}onMouseLeave(t){this.contains(t.relatedTarget)||r.I.hide()}};p.styles=[c],u([(0,n.MZ)()],p.prototype,"text",void 0),u([(0,n.wk)()],p.prototype,"open",void 0),p=u([(0,l.EM)("w3m-tooltip-trigger")],p)},16035:function(t,e,o){o(44114),o(18111),o(7588);var i=o(81238),n=o(74186),r=o(87367),a=o(68237),s=(o(5507),o(5589),o(17651),i.AH`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`),l=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let c=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.open=r.I.state.open,this.message=r.I.state.message,this.triggerRect=r.I.state.triggerRect,this.variant=r.I.state.variant,this.unsubscribe.push(r.I.subscribe((t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant})))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){this.dataset["variant"]=this.variant;const t=this.triggerRect.top,e=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${t}px;\n    --w3m-tooltip-left: ${e}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,i.qy`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};c.styles=[s],l([(0,n.wk)()],c.prototype,"open",void 0),l([(0,n.wk)()],c.prototype,"message",void 0),l([(0,n.wk)()],c.prototype,"triggerRect",void 0),l([(0,n.wk)()],c.prototype,"variant",void 0),c=l([(0,a.EM)("w3m-tooltip"),(0,a.EM)("w3m-tooltip")],c)},39650:function(t,e,o){var i=o(81238),n=o(74186),r=o(48317),a=i.AH`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,s=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let l=class extends i.WF{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,i.qy`<slot></slot>`}};l.styles=[a],s([(0,n.MZ)()],l.prototype,"width",void 0),s([(0,n.MZ)()],l.prototype,"height",void 0),s([(0,n.MZ)()],l.prototype,"borderRadius",void 0),s([(0,n.MZ)()],l.prototype,"variant",void 0),l=s([(0,r.E)("wui-shimmer")],l)},76609:function(t,e,o){o.r(e),o.d(e,{W3mSwapPreviewView:function(){return E},W3mSwapSelectTokenView:function(){return W},W3mSwapView:function(){return D}});o(44114),o(18111),o(20116),o(7588);var i=o(81238),n=o(74186),r=o(69759),a=o(80347),s=o(58843),l=o(37903),c=o(10791),u=o(81753),p=o(96577),d=o(31843),w=o(68237),h=(o(79720),o(5507),o(5589),o(17651),o(1555)),g=o(20169),k=(o(11716),o(16035),i.AH`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`),x=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};const b=g.oU.CONVERT_SLIPPAGE_TOLERANCE;let f=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.networkName=l.W.state.activeCaipNetwork?.name,this.detailsOpen=!1,this.sourceToken=c.GN.state.sourceToken,this.toToken=c.GN.state.toToken,this.toTokenAmount=c.GN.state.toTokenAmount,this.sourceTokenPriceInUSD=c.GN.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=c.GN.state.toTokenPriceInUSD,this.priceImpact=c.GN.state.priceImpact,this.maxSlippage=c.GN.state.maxSlippage,this.networkTokenSymbol=c.GN.state.networkTokenSymbol,this.inputError=c.GN.state.inputError,this.unsubscribe.push(c.GN.subscribe((t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.priceImpact=t.priceImpact,this.maxSlippage=t.maxSlippage,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError})))}render(){const t=this.toTokenAmount&&this.maxSlippage?r.S.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;const e=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return i.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${w.Zv.formatNumberToLocalString(e,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${w.Zv.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?i.qy`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  ${this.priceImpact?i.qy` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${w.Zv.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?i.qy`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${"Max slippage sets the minimum amount you must receive for the transaction to proceed. "+(t?`Transaction will be reversed if you receive less than ${w.Zv.formatNumberToLocalString(t,6)} ${this.toToken.symbol} due to price changes.`:"")}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${w.Zv.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${b}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};f.styles=[k],x([(0,n.wk)()],f.prototype,"networkName",void 0),x([(0,n.MZ)()],f.prototype,"detailsOpen",void 0),x([(0,n.wk)()],f.prototype,"sourceToken",void 0),x([(0,n.wk)()],f.prototype,"toToken",void 0),x([(0,n.wk)()],f.prototype,"toTokenAmount",void 0),x([(0,n.wk)()],f.prototype,"sourceTokenPriceInUSD",void 0),x([(0,n.wk)()],f.prototype,"toTokenPriceInUSD",void 0),x([(0,n.wk)()],f.prototype,"priceImpact",void 0),x([(0,n.wk)()],f.prototype,"maxSlippage",void 0),x([(0,n.wk)()],f.prototype,"networkTokenSymbol",void 0),x([(0,n.wk)()],f.prototype,"inputError",void 0),f=x([(0,w.EM)("w3m-swap-details")],f);o(98961);var m=i.AH`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`,v=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let y=class extends i.WF{constructor(){super(...arguments),this.target="sourceToken"}render(){return i.qy`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return i.qy`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};y.styles=[m],v([(0,n.MZ)()],y.prototype,"target",void 0),y=v([(0,w.EM)("w3m-swap-input-skeleton")],y);const T={numericInputKeyDown(t,e,o){const i=["Backspace","Meta","Ctrl","a","A","c","C","x","X","v","V","ArrowLeft","ArrowRight","Tab"],n=t.metaKey||t.ctrlKey,r=t.key,a=r.toLocaleLowerCase(),s="a"===a,l="c"===a,c="v"===a,u="x"===a,p=","===r,d="."===r,w=r>="0"&&r<="9";!n&&(s||l||c||u)&&t.preventDefault(),"0"!==e||p||d||"0"!==r||t.preventDefault(),"0"===e&&w&&(o(r),t.preventDefault()),(p||d)&&(e||(o("0."),t.preventDefault()),(e?.includes(".")||e?.includes(","))&&t.preventDefault()),w||i.includes(r)||d||p||t.preventDefault()}};o(93837);var S=i.AH`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`,$=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};const N=5e-5;let I=class extends i.WF{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){const t=this.marketValue||"0",e=r.S.bigNumber(t).gt("0");return i.qy`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${e?`$${w.Zv.formatNumberToLocalString(this.marketValue,2)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(t){return T.numericInputKeyDown(t,this.value,(t=>this.onSetAmount?.(this.target,t)))}dispatchInputChangeEvent(t){if(!this.onSetAmount)return;const e=t.target.value.replace(/[^0-9.]/gu,"");","===e||"."===e?this.onSetAmount(this.target,"0."):e.endsWith(",")?this.onSetAmount(this.target,e.replace(",",".")):this.onSetAmount(this.target,e)}setMaxValueToInput(){this.onSetMaxValue?.(this.target,this.balance)}templateTokenSelectButton(){return this.token?i.qy`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:i.qy` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){const t=r.S.multiply(this.balance,this.price),e=!!t&&t?.gt(N);return i.qy`
      ${e?i.qy`<wui-text variant="small-400" color="fg-200">
            ${w.Zv.formatNumberToLocalString(this.balance,2)}
          </wui-text>`:null}
      ${"sourceToken"===this.target?this.tokenActionButtonTemplate(e):null}
    `}tokenActionButtonTemplate(t){return t?i.qy` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:i.qy` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(t){this.focused=t}onSelectToken(){d.E.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),a.I.push("SwapSelectToken",{target:this.target})}onBuyToken(){a.I.push("OnRampProviders")}};I.styles=[S],$([(0,n.MZ)()],I.prototype,"focused",void 0),$([(0,n.MZ)()],I.prototype,"balance",void 0),$([(0,n.MZ)()],I.prototype,"value",void 0),$([(0,n.MZ)()],I.prototype,"price",void 0),$([(0,n.MZ)()],I.prototype,"marketValue",void 0),$([(0,n.MZ)()],I.prototype,"disabled",void 0),$([(0,n.MZ)()],I.prototype,"target",void 0),$([(0,n.MZ)()],I.prototype,"token",void 0),$([(0,n.MZ)()],I.prototype,"onSetAmount",void 0),$([(0,n.MZ)()],I.prototype,"onSetMaxValue",void 0),I=$([(0,w.EM)("w3m-swap-input")],I);var A=i.AH`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`,C=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let D=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.initialParams=a.I.state.data?.swap,this.detailsOpen=!1,this.caipAddress=s.U.state.caipAddress,this.caipNetworkId=l.W.state.activeCaipNetwork?.caipNetworkId,this.initialized=c.GN.state.initialized,this.loadingQuote=c.GN.state.loadingQuote,this.loadingPrices=c.GN.state.loadingPrices,this.loadingTransaction=c.GN.state.loadingTransaction,this.sourceToken=c.GN.state.sourceToken,this.sourceTokenAmount=c.GN.state.sourceTokenAmount,this.sourceTokenPriceInUSD=c.GN.state.sourceTokenPriceInUSD,this.toToken=c.GN.state.toToken,this.toTokenAmount=c.GN.state.toTokenAmount,this.toTokenPriceInUSD=c.GN.state.toTokenPriceInUSD,this.inputError=c.GN.state.inputError,this.fetchError=c.GN.state.fetchError,this.onDebouncedGetSwapCalldata=u.w.debounce((async()=>{await c.GN.swapTokens()}),200),l.W.subscribeKey("activeCaipNetwork",(t=>this.onCaipNetworkChange({newCaipNetwork:t,resetSwapState:!0,initializeSwapState:!1}))),s.U.subscribeKey("caipAddress",(t=>this.onCaipAddressChange({newCaipAddress:t,resetSwapState:!0,initializeSwapState:!1}))),this.unsubscribe.push(l.W.subscribeKey("activeCaipNetwork",(t=>this.onCaipNetworkChange({newCaipNetwork:t,resetSwapState:!1,initializeSwapState:!0}))),s.U.subscribeKey("caipAddress",(t=>this.onCaipAddressChange({newCaipAddress:t,resetSwapState:!1,initializeSwapState:!0}))),p.W.subscribeKey("open",(t=>{t||c.GN.resetState()})),a.I.subscribeKey("view",(t=>{t.includes("Swap")||c.GN.resetValues()})),c.GN.subscribe((t=>{this.initialized=t.initialized,this.loadingQuote=t.loadingQuote,this.loadingPrices=t.loadingPrices,this.loadingTransaction=t.loadingTransaction,this.sourceToken=t.sourceToken,this.sourceTokenAmount=t.sourceTokenAmount,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError,this.fetchError=t.fetchError})))}async firstUpdated(){c.GN.initializeState(),this.watchTokensAndValues(),await this.handleSwapParameters()}disconnectedCallback(){this.unsubscribe.forEach((t=>t?.())),clearInterval(this.interval)}render(){return i.qy`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval((()=>{c.GN.getNetworkTokenPrice(),c.GN.getMyTokensWithBalance(),c.GN.swapTokens()}),1e4)}templateSwap(){return i.qy`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?"Swap":this.sourceToken&&this.toToken?this.sourceTokenAmount?this.inputError?this.inputError:"Review swap":"Enter amount":"Select token"}templateReplaceTokensButton(){return i.qy`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return i.qy`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(t,e){const o=c.GN.state.myTokensWithBalance?.find((t=>t?.address===e?.address)),n="toToken"===t?this.toTokenAmount:this.sourceTokenAmount,a="toToken"===t?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD,s=r.S.parseLocalStringToNumber(n)*a;return i.qy`<w3m-swap-input
      .value=${"toToken"===t?this.toTokenAmount:this.sourceTokenAmount}
      .disabled=${"toToken"===t}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${t}
      .token=${e}
      .balance=${o?.quantity?.numeric}
      .price=${o?.price}
      .marketValue=${s}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(t,e){const o=r.S.bigNumber(e||"0");this.handleChangeAmount(t,o.gt(0)?o.toFixed(20):"0")}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?i.qy`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}handleChangeAmount(t,e){c.GN.clearError(),"sourceToken"===t?c.GN.setSourceTokenAmount(e):c.GN.setToTokenAmount(e),this.onDebouncedGetSwapCalldata()}templateActionButton(){const t=!this.toToken||!this.sourceToken,e=!this.sourceTokenAmount,o=this.loadingQuote||this.loadingPrices||this.loadingTransaction,n=o||t||e||this.inputError;return i.qy` <wui-flex gap="xs">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${t?"neutral":"main"}
        .loading=${o}
        .disabled=${n}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){c.GN.switchTokens()}async onSwapPreview(){const t=l.W.state.activeChain;this.fetchError&&await c.GN.swapTokens(),d.E.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:this.sourceToken?.symbol||"",swapToToken:this.toToken?.symbol||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:s.U.state.preferredAccountTypes?.[t]===h.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),a.I.push("SwapPreview")}async handleSwapParameters(){if(this.initialParams){if(!c.GN.state.initialized){const t=new Promise((t=>{const e=c.GN.subscribeKey("initialized",(o=>{o&&(e?.(),t())}))}));await t}await this.setSwapParameters(this.initialParams)}}async setSwapParameters({amount:t,fromToken:e,toToken:o}){if(!c.GN.state.tokens||!c.GN.state.myTokensWithBalance){const t=new Promise((t=>{const e=c.GN.subscribeKey("myTokensWithBalance",(o=>{o&&o.length>0&&(e?.(),t())}));setTimeout((()=>{e?.(),t()}),5e3)}));await t}const i=[...c.GN.state.tokens||[],...c.GN.state.myTokensWithBalance||[]];if(e){const t=i.find((t=>t.symbol.toLowerCase()===e.toLowerCase()));t&&c.GN.setSourceToken(t)}if(o){const t=i.find((t=>t.symbol.toLowerCase()===o.toLowerCase()));t&&c.GN.setToToken(t)}t&&!isNaN(Number(t))&&c.GN.setSourceTokenAmount(t)}onCaipAddressChange({newCaipAddress:t,resetSwapState:e,initializeSwapState:o}){this.caipAddress!==t&&(this.caipAddress=t,e&&c.GN.resetState(),o&&c.GN.initializeState())}onCaipNetworkChange({newCaipNetwork:t,resetSwapState:e,initializeSwapState:o}){this.caipNetworkId!==t?.caipNetworkId&&(this.caipNetworkId=t?.caipNetworkId,e&&c.GN.resetState(),o&&c.GN.initializeState())}};D.styles=A,C([(0,n.MZ)({type:Object})],D.prototype,"initialParams",void 0),C([(0,n.wk)()],D.prototype,"interval",void 0),C([(0,n.wk)()],D.prototype,"detailsOpen",void 0),C([(0,n.wk)()],D.prototype,"caipAddress",void 0),C([(0,n.wk)()],D.prototype,"caipNetworkId",void 0),C([(0,n.wk)()],D.prototype,"initialized",void 0),C([(0,n.wk)()],D.prototype,"loadingQuote",void 0),C([(0,n.wk)()],D.prototype,"loadingPrices",void 0),C([(0,n.wk)()],D.prototype,"loadingTransaction",void 0),C([(0,n.wk)()],D.prototype,"sourceToken",void 0),C([(0,n.wk)()],D.prototype,"sourceTokenAmount",void 0),C([(0,n.wk)()],D.prototype,"sourceTokenPriceInUSD",void 0),C([(0,n.wk)()],D.prototype,"toToken",void 0),C([(0,n.wk)()],D.prototype,"toTokenAmount",void 0),C([(0,n.wk)()],D.prototype,"toTokenPriceInUSD",void 0),C([(0,n.wk)()],D.prototype,"inputError",void 0),C([(0,n.wk)()],D.prototype,"fetchError",void 0),D=C([(0,w.EM)("w3m-swap-view")],D);var P=i.AH`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`,G=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let E=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=c.GN.state.approvalTransaction,this.swapTransaction=c.GN.state.swapTransaction,this.sourceToken=c.GN.state.sourceToken,this.sourceTokenAmount=c.GN.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=c.GN.state.sourceTokenPriceInUSD,this.toToken=c.GN.state.toToken,this.toTokenAmount=c.GN.state.toTokenAmount??"",this.toTokenPriceInUSD=c.GN.state.toTokenPriceInUSD,this.caipNetwork=l.W.state.activeCaipNetwork,this.balanceSymbol=s.U.state.balanceSymbol,this.inputError=c.GN.state.inputError,this.loadingQuote=c.GN.state.loadingQuote,this.loadingApprovalTransaction=c.GN.state.loadingApprovalTransaction,this.loadingBuildTransaction=c.GN.state.loadingBuildTransaction,this.loadingTransaction=c.GN.state.loadingTransaction,this.unsubscribe.push(s.U.subscribeKey("balanceSymbol",(t=>{this.balanceSymbol!==t&&a.I.goBack()})),l.W.subscribeKey("activeCaipNetwork",(t=>{this.caipNetwork!==t&&(this.caipNetwork=t)})),c.GN.subscribe((t=>{this.approvalTransaction=t.approvalTransaction,this.swapTransaction=t.swapTransaction,this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.sourceTokenAmount=t.sourceTokenAmount??"",this.toTokenAmount=t.toTokenAmount??"",this.inputError=t.inputError,t.inputError&&a.I.goBack(),this.loadingQuote=t.loadingQuote,this.loadingApprovalTransaction=t.loadingApprovalTransaction,this.loadingBuildTransaction=t.loadingBuildTransaction,this.loadingTransaction=t.loadingTransaction})))}firstUpdated(){c.GN.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach((t=>t?.())),clearInterval(this.interval)}render(){return i.qy`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval((()=>{c.GN.getApprovalLoadingState()||c.GN.getTransaction()}),1e4)}templateSwap(){const t=`${w.Zv.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${this.sourceToken?.symbol}`,e=`${w.Zv.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${this.toToken?.symbol}`,o=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,n=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD,r=w.Zv.formatNumberToLocalString(o),a=w.Zv.formatNumberToLocalString(n),s=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return i.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${r}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${this.sourceToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${a}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${e}
              imageSrc=${this.toToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${s}
            ?disabled=${s}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?i.qy`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){a.I.goBack()}onSendTransaction(){this.approvalTransaction?c.GN.sendTransactionForApproval(this.approvalTransaction):c.GN.sendTransactionForSwap(this.swapTransaction)}};E.styles=P,G([(0,n.wk)()],E.prototype,"interval",void 0),G([(0,n.wk)()],E.prototype,"detailsOpen",void 0),G([(0,n.wk)()],E.prototype,"approvalTransaction",void 0),G([(0,n.wk)()],E.prototype,"swapTransaction",void 0),G([(0,n.wk)()],E.prototype,"sourceToken",void 0),G([(0,n.wk)()],E.prototype,"sourceTokenAmount",void 0),G([(0,n.wk)()],E.prototype,"sourceTokenPriceInUSD",void 0),G([(0,n.wk)()],E.prototype,"toToken",void 0),G([(0,n.wk)()],E.prototype,"toTokenAmount",void 0),G([(0,n.wk)()],E.prototype,"toTokenPriceInUSD",void 0),G([(0,n.wk)()],E.prototype,"caipNetwork",void 0),G([(0,n.wk)()],E.prototype,"balanceSymbol",void 0),G([(0,n.wk)()],E.prototype,"inputError",void 0),G([(0,n.wk)()],E.prototype,"loadingQuote",void 0),G([(0,n.wk)()],E.prototype,"loadingApprovalTransaction",void 0),G([(0,n.wk)()],E.prototype,"loadingBuildTransaction",void 0),G([(0,n.wk)()],E.prototype,"loadingTransaction",void 0),E=G([(0,w.EM)("w3m-swap-preview-view")],E);o(22489),o(61701),o(81008),o(3886),o(15144),o(7892),o(80894);var R=o(76046),j=o(42849),U=o(48317),O=i.AH`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`,M=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let q=class extends i.WF{constructor(){super(),this.observer=new IntersectionObserver((()=>{})),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.visible=!0:this.visible=!1}))}),{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){if(!this.visible)return null;const t=this.amount&&this.price?r.S.multiply(this.price,this.amount)?.toFixed(3):null;return i.qy`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${t?i.qy`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${j.Z.formatNumberToLocalString(t,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?i.qy`<wui-text variant="small-400" color="fg-200">
                  ${j.Z.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?i.qy`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?i.qy`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};q.styles=[R.W5,R.fD,O],M([(0,n.MZ)()],q.prototype,"imageSrc",void 0),M([(0,n.MZ)()],q.prototype,"name",void 0),M([(0,n.MZ)()],q.prototype,"symbol",void 0),M([(0,n.MZ)()],q.prototype,"price",void 0),M([(0,n.MZ)()],q.prototype,"amount",void 0),M([(0,n.wk)()],q.prototype,"visible",void 0),M([(0,n.wk)()],q.prototype,"imageError",void 0),q=M([(0,U.E)("wui-token-list-item")],q);var B=i.AH`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`,L=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let W=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.targetToken=a.I.state.data?.target,this.sourceToken=c.GN.state.sourceToken,this.sourceTokenAmount=c.GN.state.sourceTokenAmount,this.toToken=c.GN.state.toToken,this.myTokensWithBalance=c.GN.state.myTokensWithBalance,this.popularTokens=c.GN.state.popularTokens,this.searchValue="",this.unsubscribe.push(c.GN.subscribe((t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.myTokensWithBalance=t.myTokensWithBalance})))}updated(){const t=this.renderRoot?.querySelector(".suggested-tokens-container");t?.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));const e=this.renderRoot?.querySelector(".tokens");e?.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){super.disconnectedCallback();const t=this.renderRoot?.querySelector(".suggested-tokens-container"),e=this.renderRoot?.querySelector(".tokens");t?.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),e?.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return i.qy`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(t){"sourceToken"===this.targetToken?c.GN.setSourceToken(t):(c.GN.setToToken(t),this.sourceToken&&this.sourceTokenAmount&&c.GN.swapTokens()),a.I.goBack()}templateSearchInput(){return i.qy`
      <wui-flex .padding=${["3xs","s","0","s"]} gap="xs">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const t=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],e=this.popularTokens?this.popularTokens:[],o=this.filterTokensWithText(t,this.searchValue),n=this.filterTokensWithText(e,this.searchValue);return i.qy`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","s","s","s"]} flexDirection="column">
          ${o?.length>0?i.qy`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${o.map((t=>{const e=t.symbol===this.sourceToken?.symbol||t.symbol===this.toToken?.symbol;return i.qy`
                    <wui-token-list-item
                      data-testid="swap-select-token-item-${t.symbol}"
                      name=${t.name}
                      ?disabled=${e}
                      symbol=${t.symbol}
                      price=${t?.price}
                      amount=${t?.quantity?.numeric}
                      imageSrc=${t.logoUri}
                      @click=${()=>{e||this.onSelectToken(t)}}
                    >
                    </wui-token-list-item>
                  `}))}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${n?.length>0?n.map((t=>i.qy`
                  <wui-token-list-item
                    data-testid="swap-select-token-item-${t.symbol}"
                    name=${t.name}
                    symbol=${t.symbol}
                    imageSrc=${t.logoUri}
                    @click=${()=>this.onSelectToken(t)}
                  >
                  </wui-token-list-item>
                `)):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const t=c.GN.state.suggestedTokens?c.GN.state.suggestedTokens.slice(0,8):null;return t?i.qy`
      <wui-flex class="suggested-tokens-container" .padding=${["0","s","0","s"]} gap="xs">
        ${t.map((t=>i.qy`
            <wui-token-button
              text=${t.symbol}
              imageSrc=${t.logoUri}
              @click=${()=>this.onSelectToken(t)}
            >
            </wui-token-button>
          `))}
      </wui-flex>
    `:null}onSearchInputChange(t){this.searchValue=t.detail}handleSuggestedTokensScroll(){const t=this.renderRoot?.querySelector(".suggested-tokens-container");t&&(t.style.setProperty("--suggested-tokens-scroll--left-opacity",w.z8.interpolate([0,100],[0,1],t.scrollLeft).toString()),t.style.setProperty("--suggested-tokens-scroll--right-opacity",w.z8.interpolate([0,100],[0,1],t.scrollWidth-t.scrollLeft-t.offsetWidth).toString()))}handleTokenListScroll(){const t=this.renderRoot?.querySelector(".tokens");t&&(t.style.setProperty("--tokens-scroll--top-opacity",w.z8.interpolate([0,100],[0,1],t.scrollTop).toString()),t.style.setProperty("--tokens-scroll--bottom-opacity",w.z8.interpolate([0,100],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString()))}filterTokensWithText(t,e){return t.filter((t=>`${t.symbol} ${t.name} ${t.address}`.toLowerCase().includes(e.toLowerCase())))}};W.styles=B,L([(0,n.wk)()],W.prototype,"interval",void 0),L([(0,n.wk)()],W.prototype,"targetToken",void 0),L([(0,n.wk)()],W.prototype,"sourceToken",void 0),L([(0,n.wk)()],W.prototype,"sourceTokenAmount",void 0),L([(0,n.wk)()],W.prototype,"toToken",void 0),L([(0,n.wk)()],W.prototype,"myTokensWithBalance",void 0),L([(0,n.wk)()],W.prototype,"popularTokens",void 0),L([(0,n.wk)()],W.prototype,"searchValue",void 0),W=L([(0,w.EM)("w3m-swap-select-token-view")],W)},87367:function(t,e,o){o.d(e,{I:function(){return a}});var i=o(69983),n=o(28356);const r=(0,i.BX)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),a={state:r,subscribe(t){return(0,i.B1)(r,(()=>t(r)))},subscribeKey(t,e){return(0,n.u$)(r,t,e)},showTooltip({message:t,triggerRect:e,variant:o}){r.open=!0,r.message=t,r.triggerRect=e,r.variant=o},hide(){r.open=!1,r.message="",r.triggerRect={width:0,height:0,top:0,left:0}}}},98961:function(t,e,o){o(39650)}}]);