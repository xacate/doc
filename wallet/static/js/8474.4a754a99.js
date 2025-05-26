"use strict";(self["webpackChunkwallet_vue"]=self["webpackChunkwallet_vue"]||[]).push([[8474],{1792:function(e,t,i){var o=i(81238),a=i(74186),r=(i(3886),i(76046)),n=i(48317),s=o.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,l=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.logo="google"}render(){return o.qy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};c.styles=[r.W5,s],l([(0,a.MZ)()],c.prototype,"logo",void 0),c=l([(0,n.E)("wui-logo")],c)},3831:function(e,t,i){var o=i(81238),a=i(74186),r=i(85354),n=(i(7892),i(76046)),s=i(48317),l=(i(43573),o.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`),c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends o.WF{constructor(){super(...arguments),this.disabled=!1}render(){return o.qy`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,r.J)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?o.qy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};u.styles=[n.W5,l],c([(0,a.MZ)()],u.prototype,"errorMessage",void 0),c([(0,a.MZ)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,a.MZ)()],u.prototype,"value",void 0),c([(0,a.MZ)()],u.prototype,"tabIdx",void 0),u=c([(0,s.E)("wui-email-input")],u)},9434:function(e,t,i){var o=i(81238),a=i(74186),r=(i(15144),i(76046)),n=i(42849),s=i(48317),l=o.AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends o.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`\n    --local-width: var(--wui-icon-box-size-${this.size});\n    --local-height: var(--wui-icon-box-size-${this.size});\n    `,o.qy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset["variant"]="image",o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset["variant"]="generated";const e=n.Z.generateAvatarColors(this.address);return this.style.cssText+=`\n ${e}`,null}return this.dataset["variant"]="default",null}};u.styles=[r.W5,l],c([(0,a.MZ)()],u.prototype,"imageSrc",void 0),c([(0,a.MZ)()],u.prototype,"alt",void 0),c([(0,a.MZ)()],u.prototype,"address",void 0),c([(0,a.MZ)()],u.prototype,"size",void 0),u=c([(0,s.E)("wui-avatar")],u)},11716:function(e,t,i){i(44114),i(18111),i(7588);var o=i(81238),a=i(74186),r=i(87367),n=i(80347),s=i(96577),l=i(68237),c=o.AH`
  :host {
    width: 100%;
    display: block;
  }
`,u=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let d=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.text="",this.open=r.I.state.open,this.unsubscribe.push(n.I.subscribeKey("view",(()=>{r.I.hide()})),s.W.subscribeKey("open",(e=>{e||r.I.hide()})),r.I.subscribeKey("open",(e=>{this.open=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),r.I.hide()}render(){return o.qy`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return o.qy`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();this.open||r.I.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:"shade"})}onMouseLeave(e){this.contains(e.relatedTarget)||r.I.hide()}};d.styles=[c],u([(0,a.MZ)()],d.prototype,"text",void 0),u([(0,a.wk)()],d.prototype,"open",void 0),d=u([(0,l.EM)("w3m-tooltip-trigger")],d)},13578:function(e,t,i){var o=i(81238),a=i(74186),r=(i(3886),i(15144),i(7892),i(76046)),n=i(42849),s=i(48317),l=o.AH`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon:not(.image-icon),
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon:not(.image-icon),
  a[data-variant='shade'] > wui-icon:not(.image-icon) {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon:not(.image-icon),
  a[data-variant='success'] > wui-icon:not(.image-icon),
  a[data-variant='shadeSmall'] > wui-icon:not(.image-icon),
  a[data-variant='error'] > wui-icon:not(.image-icon) {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`,c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends o.WF{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.imageIcon=void 0,this.imageIconSize="md",this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant,t=e?"small-600":"paragraph-600";return o.qy`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${this.title?this.title:n.Z.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc}></wui-image>`:this.imageIcon?o.qy`<wui-icon
        name=${this.imageIcon}
        color="inherit"
        size=${this.imageIconSize}
        class="image-icon"
      ></wui-icon>`:null}};u.styles=[r.W5,r.fD,l],c([(0,a.MZ)()],u.prototype,"variant",void 0),c([(0,a.MZ)()],u.prototype,"imageSrc",void 0),c([(0,a.MZ)()],u.prototype,"imageIcon",void 0),c([(0,a.MZ)()],u.prototype,"imageIconSize",void 0),c([(0,a.MZ)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,a.MZ)()],u.prototype,"icon",void 0),c([(0,a.MZ)()],u.prototype,"href",void 0),c([(0,a.MZ)()],u.prototype,"text",void 0),u=c([(0,s.E)("wui-chip")],u)},13848:function(e,t,i){var o=i(81238),a=i(74186),r=(i(3886),i(76046)),n=i(48317),s=o.AH`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`,l=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return o.qy`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};c.styles=[r.W5,r.fD,s],l([(0,a.MZ)()],c.prototype,"text",void 0),l([(0,a.MZ)()],c.prototype,"icon",void 0),c=l([(0,n.E)("wui-icon-button")],c)},32367:function(e,t,i){var o=i(81238),a=i(74186),r=i(85354),n=(i(7892),i(76046)),s=i(48317),l=(i(1792),o.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`),c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends o.WF{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,r.J)(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return"center"===this.align?o.qy` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};u.styles=[n.W5,n.fD,l],c([(0,a.MZ)()],u.prototype,"logo",void 0),c([(0,a.MZ)()],u.prototype,"name",void 0),c([(0,a.MZ)()],u.prototype,"align",void 0),c([(0,a.MZ)()],u.prototype,"tabIdx",void 0),c([(0,a.MZ)({type:Boolean})],u.prototype,"disabled",void 0),u=c([(0,s.E)("wui-list-social")],u)},40089:function(e,t,i){i(50278)},48474:function(e,t,i){i.r(t),i.d(t,{AppKitAccountButton:function(){return C},AppKitButton:function(){return T},AppKitConnectButton:function(){return P},AppKitNetworkButton:function(){return B},W3mAccountButton:function(){return k},W3mAccountSettingsView:function(){return se},W3mAccountView:function(){return Ve},W3mAllWalletsView:function(){return Zt},W3mButton:function(){return S},W3mChooseAccountNameView:function(){return Oo},W3mConnectButton:function(){return j},W3mConnectView:function(){return Vi},W3mConnectWalletsView:function(){return Ho},W3mConnectingExternalView:function(){return ro},W3mConnectingMultiChainView:function(){return lo},W3mConnectingWcBasicView:function(){return To},W3mConnectingWcView:function(){return Eo},W3mDownloadsView:function(){return jo},W3mGetWalletView:function(){return qo},W3mNetworkButton:function(){return _},W3mNetworkSwitchView:function(){return Yo},W3mNetworksView:function(){return oa},W3mProfileView:function(){return et},W3mRouter:function(){return H.J},W3mSIWXSignMessageView:function(){return Ta},W3mSwitchActiveChainView:function(){return sa},W3mSwitchAddressView:function(){return nt},W3mUnsupportedChainView:function(){return ha},W3mWalletCompatibleNetworksView:function(){return va},W3mWhatIsANetworkView:function(){return ua},W3mWhatIsAWalletView:function(){return Lo}});i(44114),i(18111),i(7588);var o=i(81238),a=i(74186),r=i(85354),n=i(37903),s=i(94732),l=i(64529),c=i(97180),u=i(58843),d=i(81753),p=i(96577),h=i(68237),w=(i(15144),i(32923),i(7892),i(80894),i(76046)),g=i(42849),f=i(48317),b=(i(9434),i(3198),o.AH`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`),m=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let v=class extends o.WF{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return o.qy`
      <button
        ?disabled=${this.disabled}
        class=${(0,r.J)(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?g.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return o.qy` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?o.qy`<wui-image src=${this.networkSrc}></wui-image>`:o.qy`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `,t=this.loading?o.qy`<wui-loading-spinner size="md" color="fg-200"></wui-loading-spinner>`:o.qy`<wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>`;return o.qy`${e} ${t}`}return null}};v.styles=[w.W5,w.fD,b],m([(0,a.MZ)()],v.prototype,"networkSrc",void 0),m([(0,a.MZ)()],v.prototype,"avatarSrc",void 0),m([(0,a.MZ)()],v.prototype,"balance",void 0),m([(0,a.MZ)({type:Boolean})],v.prototype,"isUnsupportedChain",void 0),m([(0,a.MZ)({type:Boolean})],v.prototype,"disabled",void 0),m([(0,a.MZ)({type:Boolean})],v.prototype,"loading",void 0),m([(0,a.MZ)()],v.prototype,"address",void 0),m([(0,a.MZ)()],v.prototype,"profileName",void 0),m([(0,a.MZ)()],v.prototype,"charsStart",void 0),m([(0,a.MZ)()],v.prototype,"charsEnd",void 0),v=m([(0,f.E)("wui-account-button")],v);var y=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class x extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.caipAddress=n.W.getAccountData(this.namespace)?.caipAddress,this.balanceVal=n.W.getAccountData(this.namespace)?.balance,this.balanceSymbol=n.W.getAccountData(this.namespace)?.balanceSymbol,this.profileName=n.W.getAccountData(this.namespace)?.profileName,this.profileImage=n.W.getAccountData(this.namespace)?.profileImage,this.network=n.W.getNetworkData(this.namespace)?.caipNetwork,this.networkImage=s.$.getNetworkImage(this.network),this.isSupported=!!l.H.state.allowUnsupportedChain||(!n.W.state.activeChain||n.W.checkIfSupportedNetwork(n.W.state.activeChain))}firstUpdated(){const e=this.namespace;e?this.unsubscribe.push(n.W.subscribeChainProp("accountState",(e=>{this.caipAddress=e?.caipAddress,this.balanceVal=e?.balance,this.balanceSymbol=e?.balanceSymbol,this.profileName=e?.profileName,this.profileImage=e?.profileImage}),e),n.W.subscribeChainProp("networkState",(t=>{this.network=t?.caipNetwork,this.isSupported=n.W.checkIfSupportedNetwork(e,t?.caipNetwork),this.networkImage=s.$.getNetworkImage(t?.caipNetwork)}),e)):this.unsubscribe.push(c.j.subscribeNetworkImages((()=>{this.networkImage=s.$.getNetworkImage(this.network)})),n.W.subscribeKey("activeCaipAddress",(e=>{this.caipAddress=e})),u.U.subscribeKey("balance",(e=>this.balanceVal=e)),u.U.subscribeKey("balanceSymbol",(e=>this.balanceSymbol=e)),u.U.subscribeKey("profileName",(e=>this.profileName=e)),u.U.subscribeKey("profileImage",(e=>this.profileImage=e)),n.W.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=s.$.getNetworkImage(e),this.isSupported=!e?.chainNamespace||n.W.checkIfSupportedNetwork(e?.chainNamespace),this.fetchNetworkImage(e)})))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!n.W.state.activeChain)return null;const e="show"===this.balance,t="string"!==typeof this.balanceVal;return o.qy`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${!l.H.state.allowUnsupportedChain&&!this.isSupported}
        address=${(0,r.J)(d.w.getPlainAddress(this.caipAddress))}
        profileName=${(0,r.J)(this.profileName)}
        networkSrc=${(0,r.J)(this.networkImage)}
        avatarSrc=${(0,r.J)(this.profileImage)}
        balance=${e?d.w.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid=${"account-button"+(this.namespace?`-${this.namespace}`:"")}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `}async onClick(){await n.W.switchActiveNamespace(this.namespace),this.isSupported||l.H.state.allowUnsupportedChain?p.W.open():p.W.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){e?.assets?.imageId&&(this.networkImage=await s.$.fetchNetworkImage(e?.assets?.imageId))}}y([(0,a.MZ)({type:Boolean})],x.prototype,"disabled",void 0),y([(0,a.MZ)()],x.prototype,"balance",void 0),y([(0,a.MZ)()],x.prototype,"charsStart",void 0),y([(0,a.MZ)()],x.prototype,"charsEnd",void 0),y([(0,a.MZ)()],x.prototype,"namespace",void 0),y([(0,a.wk)()],x.prototype,"caipAddress",void 0),y([(0,a.wk)()],x.prototype,"balanceVal",void 0),y([(0,a.wk)()],x.prototype,"balanceSymbol",void 0),y([(0,a.wk)()],x.prototype,"profileName",void 0),y([(0,a.wk)()],x.prototype,"profileImage",void 0),y([(0,a.wk)()],x.prototype,"network",void 0),y([(0,a.wk)()],x.prototype,"networkImage",void 0),y([(0,a.wk)()],x.prototype,"isSupported",void 0);let k=class extends x{};k=y([(0,h.EM)("w3m-account-button")],k);let C=class extends x{};C=y([(0,h.EM)("appkit-account-button")],C);var $=o.AH`
  :host {
    display: block;
    width: max-content;
  }
`,I=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class E extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.caipAddress=n.W.state.activeCaipAddress}firstUpdated(){this.namespace?this.unsubscribe.push(n.W.subscribeChainProp("accountState",(e=>{this.caipAddress=e?.caipAddress}),this.namespace)):this.unsubscribe.push(n.W.subscribeKey("activeCaipAddress",(e=>this.caipAddress=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.caipAddress?o.qy`
          <appkit-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${(0,r.J)(this.balance)}
            .charsStart=${(0,r.J)(this.charsStart)}
            .charsEnd=${(0,r.J)(this.charsEnd)}
            namespace=${(0,r.J)(this.namespace)}
          >
          </appkit-account-button>
        `:o.qy`
          <appkit-connect-button
            size=${(0,r.J)(this.size)}
            label=${(0,r.J)(this.label)}
            loadingLabel=${(0,r.J)(this.loadingLabel)}
            namespace=${(0,r.J)(this.namespace)}
          ></appkit-connect-button>
        `}}E.styles=$,I([(0,a.MZ)({type:Boolean})],E.prototype,"disabled",void 0),I([(0,a.MZ)()],E.prototype,"balance",void 0),I([(0,a.MZ)()],E.prototype,"size",void 0),I([(0,a.MZ)()],E.prototype,"label",void 0),I([(0,a.MZ)()],E.prototype,"loadingLabel",void 0),I([(0,a.MZ)()],E.prototype,"charsStart",void 0),I([(0,a.MZ)()],E.prototype,"charsEnd",void 0),I([(0,a.MZ)()],E.prototype,"namespace",void 0),I([(0,a.wk)()],E.prototype,"caipAddress",void 0);let S=class extends E{};S=I([(0,h.EM)("w3m-button")],S);let T=class extends E{};T=I([(0,h.EM)("appkit-button")],T);var A=o.AH`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,R=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let W=class extends o.WF{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e="md"===this.size?"paragraph-600":"small-600";return o.qy`
      <button data-size=${this.size} ?disabled=${this.loading}>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?o.qy`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};W.styles=[w.W5,w.fD,A],R([(0,a.MZ)()],W.prototype,"size",void 0),R([(0,a.MZ)({type:Boolean})],W.prototype,"loading",void 0),W=R([(0,f.E)("wui-connect-button")],W);var O=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class N extends o.WF{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=p.W.state.open,this.loading=this.namespace?p.W.state.loadingNamespaceMap.get(this.namespace):p.W.state.loading,this.unsubscribe.push(p.W.subscribe((e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`
      <wui-connect-button
        size=${(0,r.J)(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${"connect-button"+(this.namespace?`-${this.namespace}`:"")}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?p.W.close():this.loading||p.W.open({view:"Connect",namespace:this.namespace})}}O([(0,a.MZ)()],N.prototype,"size",void 0),O([(0,a.MZ)()],N.prototype,"label",void 0),O([(0,a.MZ)()],N.prototype,"loadingLabel",void 0),O([(0,a.MZ)()],N.prototype,"namespace",void 0),O([(0,a.wk)()],N.prototype,"open",void 0),O([(0,a.wk)()],N.prototype,"loading",void 0);let j=class extends N{};j=O([(0,h.EM)("w3m-connect-button")],j);let P=class extends N{};P=O([(0,h.EM)("appkit-connect-button")],P);var M=i(31843),q=o.AH`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`,D=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let U=class extends o.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return o.qy`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?o.qy`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?o.qy`<wui-image src=${this.imageSrc}></wui-image>`:o.qy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};U.styles=[w.W5,w.fD,q],D([(0,a.MZ)()],U.prototype,"imageSrc",void 0),D([(0,a.MZ)({type:Boolean})],U.prototype,"isUnsupportedChain",void 0),D([(0,a.MZ)({type:Boolean})],U.prototype,"disabled",void 0),U=D([(0,f.E)("wui-network-button")],U);var Z=o.AH`
  :host {
    display: block;
    width: max-content;
  }
`,z=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class L extends o.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=n.W.state.activeCaipNetwork,this.networkImage=s.$.getNetworkImage(this.network),this.caipAddress=n.W.state.activeCaipAddress,this.loading=p.W.state.loading,this.isSupported=!!l.H.state.allowUnsupportedChain||(!n.W.state.activeChain||n.W.checkIfSupportedNetwork(n.W.state.activeChain)),this.unsubscribe.push(c.j.subscribeNetworkImages((()=>{this.networkImage=s.$.getNetworkImage(this.network)})),n.W.subscribeKey("activeCaipAddress",(e=>{this.caipAddress=e})),n.W.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=s.$.getNetworkImage(e),this.isSupported=!e?.chainNamespace||n.W.checkIfSupportedNetwork(e.chainNamespace),s.$.fetchNetworkImage(e?.assets?.imageId)})),p.W.subscribeKey("loading",(e=>this.loading=e)))}firstUpdated(){s.$.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=!this.network||n.W.checkIfSupportedNetwork(this.network.chainNamespace);return o.qy`
      <wui-network-button
        .disabled=${Boolean(this.disabled||this.loading)}
        .isUnsupportedChain=${!l.H.state.allowUnsupportedChain&&!e}
        imageSrc=${(0,r.J)(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?this.isSupported||l.H.state.allowUnsupportedChain?this.network.name:"Switch Network":this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(M.E.sendEvent({type:"track",event:"CLICK_NETWORKS"}),p.W.open({view:"Networks"}))}}L.styles=Z,z([(0,a.MZ)({type:Boolean})],L.prototype,"disabled",void 0),z([(0,a.MZ)({type:String})],L.prototype,"label",void 0),z([(0,a.wk)()],L.prototype,"network",void 0),z([(0,a.wk)()],L.prototype,"networkImage",void 0),z([(0,a.wk)()],L.prototype,"caipAddress",void 0),z([(0,a.wk)()],L.prototype,"loading",void 0),z([(0,a.wk)()],L.prototype,"isSupported",void 0);let _=class extends L{};_=z([(0,h.EM)("w3m-network-button")],_);let B=class extends L{};B=z([(0,h.EM)("appkit-network-button")],B);var H=i(96256),F=(i(20116),i(80955)),V=i(25638),J=i(20169),K=i(14210),G=i(80347),Y=i(78134),X=i(77888),Q=(i(5507),i(5069),i(97186),i(3886),i(66285),o.AH`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`),ee=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let te=class extends o.WF{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return o.qy`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};te.styles=[w.W5,w.fD,Q],ee([(0,a.MZ)()],te.prototype,"label",void 0),ee([(0,a.MZ)()],te.prototype,"description",void 0),ee([(0,a.MZ)()],te.prototype,"icon",void 0),te=ee([(0,f.E)("wui-notice-card")],te);i(17651);var ie=i(1555),oe=i(81653),ae=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let re=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.socialProvider=oe.i.getConnectedSocialProvider(),this.socialUsername=oe.i.getConnectedSocialUsername(),this.namespace=n.W.state.activeChain,this.unsubscribe.push(n.W.subscribeKey("activeChain",(e=>{this.namespace=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=V.a.getConnectorId(this.namespace),t=V.a.getAuthConnector();if(!t||e!==F.o.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const i=t.provider.getEmail()??"";return i||this.socialUsername?o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(i,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(i)}</wui-text>
      </wui-list-item>
    `:(this.style.cssText="display: none",null)}onGoToUpdateEmail(e,t){t||G.I.push("UpdateEmailWallet",{email:e,redirectView:"Account"})}getAuthName(e){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};ae([(0,a.wk)()],re.prototype,"namespace",void 0),re=ae([(0,h.EM)("w3m-account-auth-button")],re);var ne=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let se=class extends o.WF{constructor(){super(),this.usubscribe=[],this.networkImages=c.j.state.networkImages,this.address=u.U.state.address,this.profileImage=u.U.state.profileImage,this.profileName=u.U.state.profileName,this.network=n.W.state.activeCaipNetwork,this.preferredAccountTypes=u.U.state.preferredAccountTypes,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(u.U.subscribe((e=>{e.address&&(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountTypes=e.preferredAccountTypes)})),u.U.subscribeKey("preferredAccountTypes",(e=>this.preferredAccountTypes=e)),n.W.subscribeKey("activeCaipNetwork",(e=>{e?.id&&(this.network=e)})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[this.network?.assets?.imageId??""];return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,r.J)(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${h.Zv.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${(0,r.J)(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){const e=this.network?.chainNamespace,t=V.a.getConnectorId(e),i=V.a.getAuthConnector(),a=n.W.checkIfNamesSupported();return a&&i&&t===F.o.CONNECTOR_ID.AUTH&&!this.profileName?o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const e=this.network?.chainNamespace,t=V.a.getConnectorId(e),i=V.a.getAuthConnector(),{origin:a}=location;return!i||t!==F.o.CONNECTOR_ID.AUTH||a.includes(J.oU.SECURE_SITE)?null:o.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=n.W.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find((({id:e})=>e===this.network?.id));return t||!i}onCopyAddress(){try{this.address&&(d.w.copyToClopboard(this.address),K.P.showSuccess("Address copied"))}catch{K.P.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){const e=this.network?.chainNamespace,t=n.W.checkIfSmartAccountEnabled(),i=V.a.getConnectorId(e),a=V.a.getAuthConnector();return a&&i===F.o.CONNECTOR_ID.AUTH&&t?(this.switched||(this.text=this.preferredAccountTypes?.[e]===ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `):null}onChooseName(){G.I.push("ChooseAccountName")}async changePreferredAccountType(){const e=this.network?.chainNamespace,t=n.W.checkIfSmartAccountEnabled(),i=this.preferredAccountTypes?.[e]!==ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&t?ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT:ie.Vl.ACCOUNT_TYPES.EOA,o=V.a.getAuthConnector();o&&(this.loading=!0,await Y.x.setPreferredAccountType(i,e),this.text=i===ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,X.R.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&G.I.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await Y.x.disconnect(),p.W.close()}catch{M.E.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),K.P.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){M.E.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),G.I.push("UpgradeEmailWallet")}};ne([(0,a.wk)()],se.prototype,"address",void 0),ne([(0,a.wk)()],se.prototype,"profileImage",void 0),ne([(0,a.wk)()],se.prototype,"profileName",void 0),ne([(0,a.wk)()],se.prototype,"network",void 0),ne([(0,a.wk)()],se.prototype,"preferredAccountTypes",void 0),ne([(0,a.wk)()],se.prototype,"disconnecting",void 0),ne([(0,a.wk)()],se.prototype,"loading",void 0),ne([(0,a.wk)()],se.prototype,"switched",void 0),ne([(0,a.wk)()],se.prototype,"text",void 0),se=ne([(0,h.EM)("w3m-account-settings-view")],se);i(61701),i(79720),i(5589);var le=o.AH`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`,ce=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ue=class extends o.WF{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail"}render(){const e=n.W.state.activeChain,t=V.a.getConnectorId(e),i=t===F.o.CONNECTOR_ID.AUTH;return o.qy`<button data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${i?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${g.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(e){e.target instanceof HTMLElement&&"copy-address"===e.target.id?this.onCopyClick?.(e):this.onProfileClick?.(e)}getIconTemplate(e){return o.qy`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};ue.styles=[w.W5,w.fD,le],ce([(0,a.MZ)()],ue.prototype,"avatarSrc",void 0),ce([(0,a.MZ)()],ue.prototype,"profileName",void 0),ce([(0,a.MZ)()],ue.prototype,"address",void 0),ce([(0,a.MZ)()],ue.prototype,"icon",void 0),ce([(0,a.MZ)()],ue.prototype,"onProfileClick",void 0),ce([(0,a.MZ)()],ue.prototype,"onCopyClick",void 0),ue=ce([(0,f.E)("wui-profile-button-v2")],ue);var de=o.AH`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,pe=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let he=class extends o.WF{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset["type"]=this.isDense?"flex":"block",this.tabs.map(((e,t)=>{const i=t===this.activeTab;return o.qy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${i}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `}))}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout((()=>{this.animateTabs(0,!0)}),0))}iconTemplate(e){return e.icon?o.qy`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const i=this.buttons[this.activeTab],o=this.buttons[e],a=i?.querySelector("wui-text"),r=o?.querySelector("wui-text"),n=o?.getBoundingClientRect(),s=r?.getBoundingClientRect();i&&a&&!t&&e!==this.activeTab&&(a.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&n&&s&&r&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(n.width+s.width)+6}px`,o.animate([{width:`${n.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),r.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};he.styles=[w.W5,w.fD,de],pe([(0,a.MZ)({type:Array})],he.prototype,"tabs",void 0),pe([(0,a.MZ)()],he.prototype,"onTabChange",void 0),pe([(0,a.MZ)({type:Array})],he.prototype,"buttons",void 0),pe([(0,a.MZ)({type:Boolean})],he.prototype,"disabled",void 0),pe([(0,a.MZ)()],he.prototype,"localTabWidth",void 0),pe([(0,a.wk)()],he.prototype,"activeTab",void 0),pe([(0,a.wk)()],he.prototype,"isDense",void 0),he=pe([(0,f.E)("wui-tabs")],he);i(21522);var we=o.AH`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`,ge=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let fe=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.caipAddress=u.U.state.caipAddress,this.address=d.w.getPlainAddress(u.U.state.caipAddress),this.allAccounts=u.U.state.allAccounts,this.profileImage=u.U.state.profileImage,this.profileName=u.U.state.profileName,this.disconnecting=!1,this.balance=u.U.state.balance,this.balanceSymbol=u.U.state.balanceSymbol,this.features=l.H.state.features,this.namespace=n.W.state.activeChain,this.chainId=n.W.state.activeCaipNetwork?.id,this.unsubscribe.push(u.U.subscribeKey("caipAddress",(e=>{this.address=d.w.getPlainAddress(e),this.caipAddress=e})),u.U.subscribeKey("balance",(e=>this.balance=e)),u.U.subscribeKey("balanceSymbol",(e=>this.balanceSymbol=e)),u.U.subscribeKey("profileName",(e=>this.profileName=e)),u.U.subscribeKey("profileImage",(e=>this.profileImage=e)),l.H.subscribeKey("features",(e=>this.features=e)),u.U.subscribeKey("allAccounts",(e=>{this.allAccounts=e})),n.W.subscribeKey("activeChain",(e=>this.namespace=e)),n.W.subscribeKey("activeCaipNetwork",(e=>{if(e){const[t,i]=e?.caipNetworkId?.split(":")||[];t&&i&&(this.namespace=t,this.chainId=i)}})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!this.caipAddress)return null;const e=n.W.state.activeChain!==F.o.CHAIN.SOLANA&&this.allAccounts.length>1;return o.qy`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        ${e?this.multiAccountTemplate():this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${d.w.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){if(!this.namespace)return null;const e=this.features?.onramp,t=J.oU.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace);return e&&t?o.qy`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}orderedFeaturesTemplate(){const e=this.features?.walletFeaturesOrder||J.oU.DEFAULT_FEATURES.walletFeaturesOrder;return e.map((e=>{switch(e){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}}))}activityTemplate(){if(!this.namespace)return null;const e=this.features?.history&&J.oU.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace);return e?o.qy` <wui-list-item
          iconVariant="blue"
          icon="clock"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){const e=this.features?.swaps,t=n.W.state.activeChain===F.o.CHAIN.EVM;return e&&t?o.qy`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `:null}sendTemplate(){const e=this.features?.send,t=n.W.state.activeChain,i=J.oU.SEND_SUPPORTED_NAMESPACES.includes(t);return e&&i?o.qy`
      <wui-list-item
        iconVariant="blue"
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const e=n.W.state.activeChain,t=V.a.getConnectorId(e),i=V.a.getAuthConnector(),{origin:a}=location;return!i||t!==F.o.CONNECTOR_ID.AUTH||a.includes(J.oU.SECURE_SITE)?null:o.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleSwitchAccountsView(){G.I.push("SwitchAddress")}handleClickPay(){G.I.push("OnRampProviders")}handleClickSwap(){G.I.push("Swap")}handleClickSend(){G.I.push("WalletSend")}explorerBtnTemplate(){const e=u.U.state.addressExplorerUrl;return e?o.qy`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}singleAccountTemplate(){return o.qy`
      <wui-avatar
        alt=${(0,r.J)(this.caipAddress)}
        address=${(0,r.J)(d.w.getPlainAddress(this.caipAddress))}
        imageSrc=${(0,r.J)(null===this.profileImage?void 0:this.profileImage)}
        data-testid="single-account-avatar"
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName?h.Zv.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):h.Zv.getTruncateString({string:this.address||"",charsStart:4,charsEnd:4,truncate:"middle"})}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `}multiAccountTemplate(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=this.allAccounts.find((e=>e.address===this.address)),t=u.U.state.addressLabels.get(this.address);return"bip122"===this.namespace?this.btcAccountsTemplate():o.qy`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${(0,r.J)(this.address)}
        icon="${e?.type===ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&n.W.state.activeChain===F.o.CHAIN.EVM?"lightbulb":"mail"}"
        avatarSrc=${(0,r.J)(this.profileImage?this.profileImage:void 0)}
        profileName=${(0,r.J)(t||this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `}btcAccountsTemplate(){return o.qy`<wui-flex gap="m" alignItems="center" flexDirection="column">
      <wui-avatar
        .imageSrc=${(0,r.J)(this.profileImage?this.profileImage:void 0)}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>
      <wui-tabs
        .tabs=${[{label:"Payment"},{label:"Ordinals"}]}
        .onTabChange=${e=>u.U.setCaipAddress(`bip122:${this.chainId}:${this.allAccounts[e]?.address||""}`,this.namespace)}
      ></wui-tabs>
      <wui-flex gap="xs" alignItems="center" justifyContent="center">
        <wui-text variant="large-600" color="fg-100">
          ${h.Zv.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        </wui-text>
        <wui-icon-link
          size="md"
          icon="copy"
          iconColor="fg-200"
          @click=${this.onCopyAddress}
        ></wui-icon-link>
      </wui-flex>
    </wui-flex>`}onCopyAddress(){try{this.address&&(d.w.copyToClopboard(this.address),K.P.showSuccess("Address copied"))}catch{K.P.showError("Failed to copy")}}onTransactions(){const e=n.W.state.activeChain;M.E.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:u.U.state.preferredAccountTypes?.[e]===ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),G.I.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await Y.x.disconnect(),p.W.close()}catch{M.E.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),K.P.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const e=u.U.state.addressExplorerUrl;e&&d.w.openHref(e,"_blank")}onGoToUpgradeView(){M.E.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),G.I.push("UpgradeEmailWallet")}};fe.styles=we,ge([(0,a.wk)()],fe.prototype,"caipAddress",void 0),ge([(0,a.wk)()],fe.prototype,"address",void 0),ge([(0,a.wk)()],fe.prototype,"allAccounts",void 0),ge([(0,a.wk)()],fe.prototype,"profileImage",void 0),ge([(0,a.wk)()],fe.prototype,"profileName",void 0),ge([(0,a.wk)()],fe.prototype,"disconnecting",void 0),ge([(0,a.wk)()],fe.prototype,"balance",void 0),ge([(0,a.wk)()],fe.prototype,"balanceSymbol",void 0),ge([(0,a.wk)()],fe.prototype,"features",void 0),ge([(0,a.wk)()],fe.prototype,"namespace",void 0),ge([(0,a.wk)()],fe.prototype,"chainId",void 0),fe=ge([(0,h.EM)("w3m-account-default-widget")],fe);i(81148);var be=o.AH`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`,me=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ve=class extends o.WF{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return o.qy`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};ve.styles=[w.W5,be],me([(0,a.MZ)()],ve.prototype,"dollars",void 0),me([(0,a.MZ)()],ve.prototype,"pennies",void 0),ve=me([(0,f.E)("wui-balance")],ve);i(13848);var ye=o.AH`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`,xe=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ke=class extends o.WF{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return o.qy`<button data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${g.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?o.qy`<wui-image src=${this.networkSrc}></wui-image>`:o.qy`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ke.styles=[w.W5,w.fD,ye],xe([(0,a.MZ)()],ke.prototype,"networkSrc",void 0),xe([(0,a.MZ)()],ke.prototype,"avatarSrc",void 0),xe([(0,a.MZ)()],ke.prototype,"profileName",void 0),xe([(0,a.MZ)()],ke.prototype,"address",void 0),xe([(0,a.MZ)()],ke.prototype,"icon",void 0),ke=xe([(0,f.E)("wui-profile-button")],ke);var Ce=o.AH`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
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
`,$e=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ie=class extends o.WF{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset["variant"]=this.variant,o.qy`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill"===this.variant?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Ie.styles=[w.W5,w.fD,Ce],$e([(0,a.MZ)()],Ie.prototype,"placement",void 0),$e([(0,a.MZ)()],Ie.prototype,"variant",void 0),$e([(0,a.MZ)()],Ie.prototype,"message",void 0),Ie=$e([(0,f.E)("wui-tooltip")],Ie);var Ee=i(67495);const Se={getTabsByNamespace(e){const t=Boolean(e)&&e===F.o.CHAIN.EVM;return t?Ee.o.ACCOUNT_TABS:[]}};i(97573);var Te=o.AH`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`,Ae=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Re=class extends o.WF{render(){return o.qy`<w3m-activity-list page="account"></w3m-activity-list>`}};Re.styles=Te,Re=Ae([(0,h.EM)("w3m-account-activity-widget")],Re);i(82685),i(6578);var We=o.AH`
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
`,Oe=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ne=class extends o.WF{render(){return o.qy`${this.nftTemplate()}`}nftTemplate(){return o.qy` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
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
        <wui-text
          variant="paragraph-500"
          align="center"
          color="fg-100"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="small-400"
          align="center"
          color="fg-200"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`}onReceiveClick(){G.I.push("WalletReceive")}};Ne.styles=We,Ne=Oe([(0,h.EM)("w3m-account-nfts-widget")],Ne);i(52583);var je=o.AH`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`,Pe=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Me=class extends o.WF{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return o.qy`
      <button ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?o.qy` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:o.qy`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};Me.styles=[w.W5,w.fD,je],Pe([(0,a.MZ)()],Me.prototype,"icon",void 0),Pe([(0,a.MZ)()],Me.prototype,"text",void 0),Pe([(0,a.MZ)()],Me.prototype,"description",void 0),Pe([(0,a.MZ)()],Me.prototype,"tag",void 0),Pe([(0,a.MZ)()],Me.prototype,"iconBackgroundColor",void 0),Pe([(0,a.MZ)()],Me.prototype,"iconColor",void 0),Pe([(0,a.MZ)({type:Boolean})],Me.prototype,"disabled",void 0),Me=Pe([(0,f.E)("wui-list-description")],Me);i(77929);var qe=o.AH`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`,De=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ue=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tokenBalance=u.U.state.tokenBalance,this.unsubscribe.push(u.U.subscribe((e=>{this.tokenBalance=e.tokenBalance})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?o.qy`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:o.qy` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="buy-crypto"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="receive-funds"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){return this.tokenBalance?.map((e=>o.qy`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`))}onReceiveClick(){G.I.push("WalletReceive")}onBuyClick(){const e=n.W.state.activeChain;M.E.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:u.U.state.preferredAccountTypes?.[e]===ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),G.I.push("OnRampProviders")}};Ue.styles=qe,De([(0,a.wk)()],Ue.prototype,"tokenBalance",void 0),Ue=De([(0,h.EM)("w3m-account-tokens-widget")],Ue);i(11716),i(16035);var Ze=o.AH`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
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
`,ze=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Le=3,_e=48,Be=430;let He=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.address=u.U.state.address,this.profileImage=u.U.state.profileImage,this.profileName=u.U.state.profileName,this.network=n.W.state.activeCaipNetwork,this.currentTab=u.U.state.currentTab,this.tokenBalance=u.U.state.tokenBalance,this.features=l.H.state.features,this.networkImage=s.$.getNetworkImage(this.network),this.unsubscribe.push(c.j.subscribeNetworkImages((()=>{this.networkImage=s.$.getNetworkImage(this.network)})),u.U.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):p.W.close()})),n.W.subscribeKey("activeCaipNetwork",(e=>this.network=e)),l.H.subscribeKey("features",(e=>this.features=e))),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearInterval(this.watchTokenBalance)}firstUpdated(){u.U.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");return o.qy`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${(0,r.J)(this.address)}
        networkSrc=${(0,r.J)(this.networkImage)}
        icon="chevronBottom"
        avatarSrc=${(0,r.J)(this.profileImage?this.profileImage:void 0)}
        profileName=${(0,r.J)(this.profileName??void 0)}
        data-testid="w3m-profile-button"
      ></wui-profile-button>

      ${this.tokenBalanceTemplate()} ${this.orderedWalletFeatures()} ${this.tabsTemplate()}
      ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){const e=this.features?.walletFeaturesOrder||J.oU.DEFAULT_FEATURES.walletFeaturesOrder,t=e.every((e=>!this.features?.[e]));return t?null:o.qy`<wui-flex gap="s">
      ${e.map((e=>{switch(e){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"receive":return this.receiveTemplate();case"send":return this.sendTemplate();default:return null}}))}
    </wui-flex>`}onrampTemplate(){const e=this.features?.onramp;return e?o.qy`
      <w3m-tooltip-trigger text="Buy">
        <wui-icon-button
          data-testid="wallet-features-onramp-button"
          @click=${this.onBuyClick.bind(this)}
          icon="card"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}swapsTemplate(){const e=this.features?.swaps,t=n.W.state.activeChain===F.o.CHAIN.EVM;return e&&t?o.qy`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}receiveTemplate(){const e=this.features?.receive;return e?o.qy`
      <w3m-tooltip-trigger text="Receive">
        <wui-icon-button
          data-testid="wallet-features-receive-button"
          @click=${this.onReceiveClick.bind(this)}
          icon="arrowBottomCircle"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}sendTemplate(){const e=this.features?.send,t=n.W.state.activeChain,i=J.oU.SEND_SUPPORTED_NAMESPACES.includes(t);return e&&i?o.qy`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval((()=>u.U.fetchTokenBalance((e=>this.onTokenBalanceError(e)))),1e4)}onTokenBalanceError(e){if(e instanceof Error&&e.cause instanceof Response){const t=e.cause.status;t===F.o.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}}listContentTemplate(){return 0===this.currentTab?o.qy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?o.qy`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?o.qy`<w3m-account-activity-widget></w3m-account-activity-widget>`:o.qy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){const e=d.w.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:i="00"}=d.w.formatTokenBalance(e);return o.qy`<wui-balance dollars=${t} pennies=${i}></wui-balance>`}return o.qy`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){const e=Se.getTabsByNamespace(n.W.state.activeChain);return 0===e.length?null:o.qy`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      localTabWidth=${d.w.isMobile()&&window.innerWidth<Be?(window.innerWidth-_e)/Le+"px":"104px"}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){u.U.setCurrentTab(e)}onProfileButtonClick(){const{allAccounts:e}=u.U.state;e.length>1?G.I.push("Profile"):G.I.push("AccountSettings")}onBuyClick(){G.I.push("OnRampProviders")}onSwapClick(){const e=n.W.state.activeChain;this.network?.caipNetworkId&&!J.oU.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?G.I.push("UnsupportedChain",{swapUnsupportedChain:!0}):(M.E.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:u.U.state.preferredAccountTypes?.[e]===ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),G.I.push("Swap"))}onReceiveClick(){G.I.push("WalletReceive")}onSendClick(){const e=n.W.state.activeChain;M.E.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:u.U.state.preferredAccountTypes?.[e]===ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),G.I.push("WalletSend")}};He.styles=Ze,ze([(0,a.wk)()],He.prototype,"watchTokenBalance",void 0),ze([(0,a.wk)()],He.prototype,"address",void 0),ze([(0,a.wk)()],He.prototype,"profileImage",void 0),ze([(0,a.wk)()],He.prototype,"profileName",void 0),ze([(0,a.wk)()],He.prototype,"network",void 0),ze([(0,a.wk)()],He.prototype,"currentTab",void 0),ze([(0,a.wk)()],He.prototype,"tokenBalance",void 0),ze([(0,a.wk)()],He.prototype,"features",void 0),ze([(0,a.wk)()],He.prototype,"networkImage",void 0),He=ze([(0,h.EM)("w3m-account-wallet-features-widget")],He);var Fe=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ve=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.namespace=n.W.state.activeChain,this.unsubscribe.push(n.W.subscribeKey("activeChain",(e=>{this.namespace=e})))}render(){if(!this.namespace)return null;const e=V.a.getConnectorId(this.namespace),t=V.a.getAuthConnector();return o.qy`
      ${t&&e===F.o.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return o.qy`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return o.qy`<w3m-account-default-widget></w3m-account-default-widget>`}};Fe([(0,a.wk)()],Ve.prototype,"namespace",void 0),Ve=Fe([(0,h.EM)("w3m-account-view")],Ve);i(18237);var Je=i(65642),Ke=o.AH`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`,Ge=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ye=class extends o.WF{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.labels=u.U.state.addressLabels,this.caipNetwork=n.W.state.activeCaipNetwork,this.socialProvider=oe.i.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){super.connectedCallback(),Je.T.getBalance(this.accountAddress,this.caipNetwork?.caipNetworkId).then((e=>{let t=this.balance;e.balances.length>0&&(t=e.balances.reduce(((e,t)=>e+(t?.value||0)),0)),this.balance=t,this.fetchingBalance=!1,this.requestUpdate()})).catch((()=>{this.fetchingBalance=!1,this.requestUpdate()}))}render(){const e=this.getLabel(),t=n.W.state.activeChain,i=V.a.getConnectorId(t);return this.shouldShowIcon=i===F.o.CONNECTOR_ID.AUTH,o.qy`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?o.qy`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===ie.Vl.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:o.qy`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${g.Z.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${e}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          <slot name="action"></slot>
          ${this.fetchingBalance?o.qy`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:o.qy` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
        </wui-flex>
      </wui-flex>
    `}getLabel(){let e=this.labels?.get(this.accountAddress);const t=n.W.state.activeChain,i=V.a.getConnectorId(t);return e||i!==F.o.CONNECTOR_ID.AUTH?e||(e="EOA"):e=`${"eoa"===this.accountType?this.socialProvider??"Email":"Smart"} Account`,e}};Ye.styles=[w.W5,w.fD,Ke],Ge([(0,a.MZ)()],Ye.prototype,"accountAddress",void 0),Ge([(0,a.MZ)()],Ye.prototype,"accountType",void 0),Ge([(0,a.MZ)({type:Boolean})],Ye.prototype,"selected",void 0),Ge([(0,a.MZ)({type:Function})],Ye.prototype,"onSelect",void 0),Ye=Ge([(0,f.E)("wui-list-account")],Ye);var Xe=o.AH`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`,Qe=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let et=class extends o.WF{constructor(){super(),this.usubscribe=[],this.address=u.U.state.address,this.profileImage=u.U.state.profileImage,this.profileName=u.U.state.profileName,this.accounts=u.U.state.allAccounts,this.loading=!1,this.usubscribe.push(u.U.subscribeKey("address",(e=>{e?this.address=e:p.W.close()}))),this.usubscribe.push(u.U.subscribeKey("profileImage",(e=>{this.profileImage=e}))),this.usubscribe.push(u.U.subscribeKey("profileName",(e=>{this.profileName=e})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-profile-view: No account provided");return o.qy`
      <wui-flex flexDirection="column" gap="l" .padding=${["0","xl","m","xl"]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${(0,r.J)(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${this.profileName?h.Zv.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):h.Zv.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${()=>G.I.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `}accountsTemplate(){return o.qy`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs","m","s","s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map((e=>this.accountTemplate(e)))}
      </wui-flex>
    </wui-flex>`}async onSwitchAccount(e){const t=n.W.state.activeCaipNetwork?.chainNamespace;this.loading=!0;const i=V.a.getAuthConnector();if(i){const i=e.type;await Y.x.setPreferredAccountType(i,t)}u.U.setShouldUpdateToAddress(e.address,t),this.loading=!1}accountTemplate(e){return o.qy`<wui-list-account accountAddress=${e.address} accountType=${e.type}>
      ${e.address===this.address?"":o.qy`<wui-button
            slot="action"
            textVariant="small-600"
            size="md"
            variant="accent"
            @click=${()=>this.onSwitchAccount(e)}
            .loading=${this.loading}
            >Switch</wui-button
          >`}
    </wui-list-account>`}onCopyAddress(){try{this.address&&(d.w.copyToClopboard(this.address),K.P.showSuccess("Address copied"))}catch{K.P.showError("Failed to copy")}}};et.styles=Xe,Qe([(0,a.wk)()],et.prototype,"address",void 0),Qe([(0,a.wk)()],et.prototype,"profileImage",void 0),Qe([(0,a.wk)()],et.prototype,"profileName",void 0),Qe([(0,a.wk)()],et.prototype,"accounts",void 0),Qe([(0,a.wk)()],et.prototype,"loading",void 0),et=Qe([(0,h.EM)("w3m-profile-view")],et);var tt=o.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`,it=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ot=class extends o.WF{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return o.qy`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};ot.styles=[w.W5,w.fD,tt],it([(0,a.MZ)()],ot.prototype,"imageSrc",void 0),it([(0,a.MZ)()],ot.prototype,"text",void 0),it([(0,a.MZ)()],ot.prototype,"size",void 0),ot=it([(0,f.E)("wui-banner-img")],ot);var at=o.AH`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`,rt=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let nt=class extends o.WF{constructor(){super(),this.metadata=l.H.state.metadata,this.allAccounts=u.U.state.allAccounts||[],this.balances={},this.labels=u.U.state.addressLabels,this.currentAddress=u.U.state.address||"",this.caipNetwork=n.W.state.activeCaipNetwork,u.U.subscribeKey("allAccounts",(e=>{this.allAccounts=e}))}connectedCallback(){super.connectedCallback(),this.allAccounts.forEach((e=>{Je.T.getBalance(e.address,this.caipNetwork?.caipNetworkId).then((t=>{let i=this.balances[e.address]||0;t.balances.length>0&&(i=t.balances.reduce(((e,t)=>e+(t?.value||0)),0)),this.balances[e.address]=i,this.requestUpdate()}))}))}getAddressIcon(e){return"smartAccount"===e?"lightbulb":"mail"}render(){return o.qy`
      <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
        <wui-banner-img
          imageSrc=${(0,r.J)(this.metadata?.icons[0])}
          text=${(0,r.J)(this.metadata?.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map(((e,t)=>this.getAddressTemplate(e,t)))}
      </wui-flex>
    `}getAddressTemplate(e,t){const i=this.labels?.get(e.address),a=n.W.state.activeChain,r=V.a.getConnectorId(a),s=r===F.o.CONNECTOR_ID.AUTH;return o.qy`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${e.address}></wui-avatar>
          ${s?o.qy`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(e.type)}"
                ?border=${!0}
              ></wui-icon-box>`:o.qy`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${i||h.Zv.getTruncateString({string:e.address,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${"number"===typeof this.balances[e.address]?`$${this.balances[e.address]?.toFixed(2)}`:o.qy`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${e.address?.toLowerCase()===this.currentAddress?.toLowerCase()?"":o.qy`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${t}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${()=>this.onSwitchAddress(e.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `}onSwitchAddress(e){const t=n.W.state.activeCaipNetwork,i=t?.chainNamespace,o=`${i}:${t?.id}:${e}`;u.U.setCaipAddress(o,i),p.W.close()}};nt.styles=at,rt([(0,a.wk)()],nt.prototype,"allAccounts",void 0),rt([(0,a.wk)()],nt.prototype,"balances",void 0),nt=rt([(0,h.EM)("w3m-switch-address-view")],nt);var st=i(96305),lt=o.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`,ct=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ut=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,st._)(),this.checked=void 0}render(){return o.qy`
      <label>
        <input
          ${(0,st.K)(this.inputElementRef)}
          type="checkbox"
          ?checked=${(0,r.J)(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};ut.styles=[w.W5,w.fD,w.ck,lt],ct([(0,a.MZ)({type:Boolean})],ut.prototype,"checked",void 0),ut=ct([(0,f.E)("wui-switch")],ut);var dt=o.AH`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`,pt=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ht=class extends o.WF{constructor(){super(...arguments),this.checked=void 0}render(){return o.qy`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${(0,r.J)(this.checked)}></wui-switch>
      </button>
    `}};ht.styles=[w.W5,w.fD,dt],pt([(0,a.MZ)({type:Boolean})],ht.prototype,"checked",void 0),ht=pt([(0,f.E)("wui-certified-switch")],ht);var wt=o.AH`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`,gt=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ft=class extends o.WF{constructor(){super(...arguments),this.icon="copy"}render(){return o.qy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};ft.styles=[w.W5,w.fD,wt],gt([(0,a.MZ)()],ft.prototype,"icon",void 0),ft=gt([(0,f.E)("wui-input-element")],ft);i(43573);var bt=o.AH`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,mt=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let vt=class extends o.WF{constructor(){super(...arguments),this.inputComponentRef=(0,st._)()}render(){return o.qy`
      <wui-input-text
        ${(0,st.K)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};vt.styles=[w.W5,bt],vt=mt([(0,f.E)("wui-search-bar")],vt);var yt=i(65768),xt=i(83761),kt=(i(39650),o.AH`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`),Ct=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let $t=class extends o.WF{constructor(){super(...arguments),this.type="wallet"}render(){return o.qy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?o.qy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${xt.a}`:o.qy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};$t.styles=[w.W5,w.fD,kt],Ct([(0,a.MZ)()],$t.prototype,"type",void 0),$t=Ct([(0,f.E)("wui-card-select-loader")],$t);var It=o.AH`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,Et=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let St=class extends o.WF{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&g.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&g.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&g.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&g.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&g.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&g.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&g.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&g.Z.getSpacingStyles(this.margin,3)};\n    `,o.qy`<slot></slot>`}};St.styles=[w.W5,It],Et([(0,a.MZ)()],St.prototype,"gridTemplateRows",void 0),Et([(0,a.MZ)()],St.prototype,"gridTemplateColumns",void 0),Et([(0,a.MZ)()],St.prototype,"justifyItems",void 0),Et([(0,a.MZ)()],St.prototype,"alignItems",void 0),Et([(0,a.MZ)()],St.prototype,"justifyContent",void 0),Et([(0,a.MZ)()],St.prototype,"alignContent",void 0),Et([(0,a.MZ)()],St.prototype,"columnGap",void 0),Et([(0,a.MZ)()],St.prototype,"rowGap",void 0),Et([(0,a.MZ)()],St.prototype,"gap",void 0),Et([(0,a.MZ)()],St.prototype,"padding",void 0),Et([(0,a.MZ)()],St.prototype,"margin",void 0),St=Et([(0,f.E)("wui-grid")],St);var Tt=i(3413),At=(i(98961),i(40089),o.AH`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`),Rt=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Wt=class extends o.WF{constructor(){super(),this.observer=new IntersectionObserver((()=>{})),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1}))}),{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const e="certified"===this.wallet?.badge_type;return o.qy`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${(0,r.J)(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?o.qy`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():o.qy`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,r.J)(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return o.qy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=s.$.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await s.$.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};Wt.styles=At,Rt([(0,a.wk)()],Wt.prototype,"visible",void 0),Rt([(0,a.wk)()],Wt.prototype,"imageSrc",void 0),Rt([(0,a.wk)()],Wt.prototype,"imageLoading",void 0),Rt([(0,a.MZ)()],Wt.prototype,"wallet",void 0),Wt=Rt([(0,h.EM)("w3m-all-wallets-list-item")],Wt);var Ot=o.AH`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,Nt=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const jt="local-paginator";let Pt=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!yt.N.state.wallets.length,this.wallets=yt.N.state.wallets,this.recommended=yt.N.state.recommended,this.featured=yt.N.state.featured,this.filteredWallets=yt.N.state.filteredWallets,this.unsubscribe.push(yt.N.subscribeKey("wallets",(e=>this.wallets=e)),yt.N.subscribeKey("recommended",(e=>this.recommended=e)),yt.N.subscribeKey("featured",(e=>this.featured=e)),yt.N.subscribeKey("filteredWallets",(e=>this.filteredWallets=e)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.paginationObserver?.disconnect()}render(){return o.qy`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;const e=this.shadowRoot?.querySelector("wui-grid");e&&(await yt.N.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map((()=>o.qy`
        <wui-card-select-loader type="wallet" id=${(0,r.J)(t)}></wui-card-select-loader>
      `))}walletsTemplate(){const e=this.filteredWallets?.length>0?d.w.uniqueBy([...this.featured,...this.recommended,...this.filteredWallets],"id"):d.w.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id"),t=Tt.A.markWalletsAsInstalled(e);return t.map((e=>o.qy`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `))}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:i,count:o}=yt.N.state,a=window.innerWidth<352?3:4,r=e.length+t.length,n=Math.ceil(r/a);let s=n*a-r+a;return s-=e.length?i.length%a:0,0===o&&i.length>0?null:0===o||[...i,...e,...t].length<o?this.shimmerTemplate(s,jt):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${jt}`);e&&(this.paginationObserver=new IntersectionObserver((([e])=>{if(e?.isIntersecting&&!this.loading){const{page:e,count:t,wallets:i}=yt.N.state;i.length<t&&yt.N.fetchWalletsByPage({page:e+1})}})),this.paginationObserver.observe(e))}onConnectWallet(e){V.a.selectWalletConnector(e)}};Pt.styles=Ot,Nt([(0,a.wk)()],Pt.prototype,"loading",void 0),Nt([(0,a.wk)()],Pt.prototype,"wallets",void 0),Nt([(0,a.wk)()],Pt.prototype,"recommended",void 0),Nt([(0,a.wk)()],Pt.prototype,"featured",void 0),Nt([(0,a.wk)()],Pt.prototype,"filteredWallets",void 0),Pt=Nt([(0,h.EM)("w3m-all-wallets-list")],Pt);i(81502);var Mt=o.AH`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`,qt=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Dt=class extends o.WF{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?o.qy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await yt.N.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=yt.N.state,t=Tt.A.markWalletsAsInstalled(e);return e.length?o.qy`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${t.map((e=>o.qy`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
            ></w3m-all-wallets-list-item>
          `))}
      </wui-grid>
    `:o.qy`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){V.a.selectWalletConnector(e)}};Dt.styles=Mt,qt([(0,a.wk)()],Dt.prototype,"loading",void 0),qt([(0,a.MZ)()],Dt.prototype,"query",void 0),qt([(0,a.MZ)()],Dt.prototype,"badge",void 0),Dt=qt([(0,h.EM)("w3m-all-wallets-search")],Dt);var Ut=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Zt=class extends o.WF{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=d.w.debounce((e=>{this.search=e}))}render(){const e=this.search.length>=2;return o.qy`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?o.qy`<w3m-all-wallets-search
            query=${this.search}
            badge=${(0,r.J)(this.badge)}
          ></w3m-all-wallets-search>`:o.qy`<w3m-all-wallets-list badge=${(0,r.J)(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onClick(){"certified"!==this.badge?(this.badge="certified",K.P.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return d.w.isMobile()?o.qy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){G.I.push("ConnectingWalletConnect")}};Ut([(0,a.wk)()],Zt.prototype,"search",void 0),Ut([(0,a.wk)()],Zt.prototype,"badge",void 0),Zt=Ut([(0,h.EM)("w3m-all-wallets-view")],Zt);i(22489),i(13579);var zt=i(17887),Lt=i(26634),_t=i(91289),Bt=o.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`,Ht=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ft=class extends o.WF{constructor(){super(...arguments),this.text="",this.disabled=!1,this.tabIdx=void 0}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,r.J)(this.tabIdx)}>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};Ft.styles=[w.W5,w.fD,Bt],Ht([(0,a.MZ)()],Ft.prototype,"text",void 0),Ht([(0,a.MZ)({type:Boolean})],Ft.prototype,"disabled",void 0),Ht([(0,a.MZ)()],Ft.prototype,"tabIdx",void 0),Ft=Ht([(0,f.E)("wui-list-button")],Ft);i(98163);var Vt=i(53291),Jt=(i(3831),o.AH`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`),Kt=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Gt=class extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.formRef=(0,st._)(),this.email="",this.loading=!1,this.error=""}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.formRef.value?.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){return o.qy`
      <form ${(0,st.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${(0,r.J)(this.tabIdx)}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){const e=!this.loading&&this.email.length>3;return e?o.qy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?o.qy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}templateError(){return this.error?o.qy`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){const t=F.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((e=>e===n.W.state.activeChain));if(!t){const e=n.W.getFirstCaipNetworkSupportsAuthConnector();if(e)return void G.I.push("SwitchNetwork",{network:e})}try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=V.a.getAuthConnector();if(!t)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:i}=await t.provider.connectEmail({email:this.email});M.E.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===i?(M.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),G.I.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===i?G.I.push("EmailVerifyDevice",{email:this.email}):"CONNECT"===i&&(await Y.x.connectExternal(t,n.W.state.activeChain),G.I.replace("Account"))}catch(i){const e=d.w.parseError(i);e?.includes("Invalid email")?this.error="Invalid email. Try again.":K.P.showError(i)}finally{this.loading=!1}}onFocusEvent(){M.E.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};Gt.styles=Jt,Kt([(0,a.MZ)()],Gt.prototype,"tabIdx",void 0),Kt([(0,a.wk)()],Gt.prototype,"email",void 0),Kt([(0,a.wk)()],Gt.prototype,"loading",void 0),Kt([(0,a.wk)()],Gt.prototype,"error",void 0),Gt=Kt([(0,h.EM)("w3m-email-login-widget")],Gt);i(10699),i(29991);var Yt=i(68174),Xt=i(78932),Qt=(i(32367),i(1792),o.AH`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`),ei=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ti=class extends o.WF{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,r.J)(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};ti.styles=[w.W5,w.fD,Qt],ei([(0,a.MZ)()],ti.prototype,"logo",void 0),ei([(0,a.MZ)({type:Boolean})],ti.prototype,"disabled",void 0),ei([(0,a.MZ)()],ti.prototype,"tabIdx",void 0),ti=ei([(0,f.E)("wui-logo-select")],ti);var ii=i(62707),oi=o.AH`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,ai=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const ri=2,ni=6;let si=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.features=l.H.state.features,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.isPwaLoading=!1,this.unsubscribe.push(V.a.subscribeKey("connectors",(e=>{this.connectors=e,this.authConnector=this.connectors.find((e=>"AUTH"===e.type))})),l.H.subscribeKey("features",(e=>this.features=e)))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){const e="explore"===this.walletGuide;let t=this.features?.socials;return!t&&e?(t=J.oU.DEFAULT_FEATURES.socials,this.renderTopViewContent(t)):t?this.renderTopViewContent(t):null}renderTopViewContent(e){return 2===e.length?o.qy` <wui-flex gap="xs">
        ${e.slice(0,ri).map((e=>o.qy`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,r.J)(this.tabIdx)}
              ?disabled=${this.isPwaLoading}
            ></wui-logo-select>`))}
      </wui-flex>`:o.qy` <wui-list-social
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      logo=${(0,r.J)(e[0])}
      align="center"
      name=${`Continue with ${e[0]}`}
      tabIdx=${(0,r.J)(this.tabIdx)}
      ?disabled=${this.isPwaLoading}
    ></wui-list-social>`}bottomViewTemplate(){let e=this.features?.socials;const t="explore"===this.walletGuide,i=!this.authConnector||!e||!e?.length;return i&&t&&(e=J.oU.DEFAULT_FEATURES.socials),e?e.length<=ri?null:e&&e.length>ni?o.qy`<wui-flex gap="xs">
        ${e.slice(1,ni-1).map((e=>o.qy`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,r.J)(this.tabIdx)}
              ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading}
            ></wui-logo-select>`))}
        <wui-logo-select
          logo="more"
          tabIdx=${(0,r.J)(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading}
        ></wui-logo-select>
      </wui-flex>`:e?o.qy`<wui-flex gap="xs">
      ${e.slice(1,e.length).map((e=>o.qy`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
            tabIdx=${(0,r.J)(this.tabIdx)}
            ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading}
          ></wui-logo-select>`))}
    </wui-flex>`:null:null}onMoreSocialsClick(){G.I.push("ConnectSocials")}async onSocialClick(e){const t=F.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((e=>e===n.W.state.activeChain));if(!t){const e=n.W.getFirstCaipNetworkSupportsAuthConnector();if(e)return void G.I.push("SwitchNetwork",{network:e})}e&&await(0,Xt.Up)(e)}async handlePwaFrameLoad(){if(d.w.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof ii.Y&&await this.authConnector.provider.init()}catch(e){Yt.h.open({shortMessage:"Error loading embedded wallet in PWA",longMessage:e.message},"error")}finally{this.isPwaLoading=!1}}}};si.styles=oi,ai([(0,a.MZ)()],si.prototype,"walletGuide",void 0),ai([(0,a.MZ)()],si.prototype,"tabIdx",void 0),ai([(0,a.wk)()],si.prototype,"connectors",void 0),ai([(0,a.wk)()],si.prototype,"features",void 0),ai([(0,a.wk)()],si.prototype,"authConnector",void 0),ai([(0,a.wk)()],si.prototype,"isPwaLoading",void 0),si=ai([(0,h.EM)("w3m-social-login-widget")],si);i(13578);var li=o.AH`
  :host {
    padding-bottom: var(--wui-spacing-s);
  }
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`,ci=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ui=class extends o.WF{constructor(){super(...arguments),this.walletGuide="get-started"}render(){return"explore"===this.walletGuide?o.qy`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://walletguide.walletconnect.network"
              title="Find one on WalletGuide"
            ></wui-chip>
          </wui-flex>
        </wui-flex>`:o.qy`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          .padding=${["s","0","s","0"]}
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${(0,r.J)(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`}onGetStarted(){G.I.push("Create")}};ui.styles=li,ci([(0,a.MZ)()],ui.prototype,"tabIdx",void 0),ci([(0,a.MZ)()],ui.prototype,"walletGuide",void 0),ui=ci([(0,h.EM)("w3m-wallet-guide")],ui);i(50278);var di=o.AH`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`,pi=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const hi=4;let wi=class extends o.WF{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<hi;return o.qy`${this.walletImages.slice(0,hi).map((({src:e,walletName:t})=>o.qy`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${(0,r.J)(t)}
            ></wui-wallet-image>
          `))}
      ${e?[...Array(hi-this.walletImages.length)].map((()=>o.qy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};wi.styles=[w.W5,di],pi([(0,a.MZ)({type:Array})],wi.prototype,"walletImages",void 0),wi=pi([(0,f.E)("wui-all-wallets-image")],wi);var gi=o.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`,fi=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let bi=class extends o.WF{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,r.J)(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?o.qy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?o.qy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?o.qy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:o.qy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.loading?o.qy`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?o.qy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?o.qy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};bi.styles=[w.W5,w.fD,gi],fi([(0,a.MZ)({type:Array})],bi.prototype,"walletImages",void 0),fi([(0,a.MZ)()],bi.prototype,"imageSrc",void 0),fi([(0,a.MZ)()],bi.prototype,"name",void 0),fi([(0,a.MZ)()],bi.prototype,"tagLabel",void 0),fi([(0,a.MZ)()],bi.prototype,"tagVariant",void 0),fi([(0,a.MZ)()],bi.prototype,"icon",void 0),fi([(0,a.MZ)()],bi.prototype,"walletIcon",void 0),fi([(0,a.MZ)()],bi.prototype,"tabIdx",void 0),fi([(0,a.MZ)({type:Boolean})],bi.prototype,"installed",void 0),fi([(0,a.MZ)({type:Boolean})],bi.prototype,"disabled",void 0),fi([(0,a.MZ)({type:Boolean})],bi.prototype,"showAllWallets",void 0),fi([(0,a.MZ)({type:Boolean})],bi.prototype,"loading",void 0),fi([(0,a.MZ)({type:String})],bi.prototype,"loadingSpinnerColor",void 0),bi=fi([(0,f.E)("wui-list-wallet")],bi);var mi=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let vi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.count=yt.N.state.count,this.filteredCount=yt.N.state.filteredWallets.length,this.isFetchingRecommendedWallets=yt.N.state.isFetchingRecommendedWallets,this.unsubscribe.push(V.a.subscribeKey("connectors",(e=>this.connectors=e)),yt.N.subscribeKey("count",(e=>this.count=e)),yt.N.subscribeKey("filteredWallets",(e=>this.filteredCount=e.length)),yt.N.subscribeKey("isFetchingRecommendedWallets",(e=>this.isFetchingRecommendedWallets=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.find((e=>"walletConnect"===e.id)),{allWallets:t}=l.H.state;if(!e||"HIDE"===t)return null;if("ONLY_MOBILE"===t&&!d.w.isMobile())return null;const i=yt.N.state.featured.length,a=this.count+i,n=a<10?a:10*Math.floor(a/10),s=this.filteredCount>0?this.filteredCount:n;let c=`${s}`;return this.filteredCount>0?c=`${this.filteredCount}`:s<a&&(c=`${s}+`),o.qy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${c}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${(0,r.J)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){M.E.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),G.I.push("AllWallets")}};mi([(0,a.MZ)()],vi.prototype,"tabIdx",void 0),mi([(0,a.wk)()],vi.prototype,"connectors",void 0),mi([(0,a.wk)()],vi.prototype,"count",void 0),mi([(0,a.wk)()],vi.prototype,"filteredCount",void 0),mi([(0,a.wk)()],vi.prototype,"isFetchingRecommendedWallets",void 0),vi=mi([(0,h.EM)("w3m-all-wallets-widget")],vi);var yi=i(7085),xi=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ki=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.unsubscribe.push(V.a.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"ANNOUNCED"===e.type));return e?.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.filter(yi.g.showConnector).map((e=>o.qy`
              <wui-list-wallet
                imageSrc=${(0,r.J)(s.$.getConnectorImage(e))}
                name=${e.name??"Unknown"}
                @click=${()=>this.onConnector(e)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${e.id}`}
                .installed=${!0}
                tabIdx=${(0,r.J)(this.tabIdx)}
              >
              </wui-list-wallet>
            `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){"walletConnect"===e.id?d.w.isMobile()?G.I.push("AllWallets"):G.I.push("ConnectingWalletConnect"):G.I.push("ConnectingExternal",{connector:e})}};xi([(0,a.MZ)()],ki.prototype,"tabIdx",void 0),xi([(0,a.wk)()],ki.prototype,"connectors",void 0),ki=xi([(0,h.EM)("w3m-connect-announced-widget")],ki);var Ci=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let $i=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.loading=!1,this.unsubscribe.push(V.a.subscribeKey("connectors",(e=>this.connectors=e))),d.w.isTelegram()&&d.w.isIos()&&(this.loading=!Y.x.state.wcUri,this.unsubscribe.push(Y.x.subscribeKey("wcUri",(e=>this.loading=!e))))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{customWallets:e}=l.H.state;if(!e?.length)return this.style.cssText="display: none",null;const t=this.filterOutDuplicateWallets(e);return o.qy`<wui-flex flexDirection="column" gap="xs">
      ${t.map((e=>o.qy`
          <wui-list-wallet
            imageSrc=${(0,r.J)(s.$.getWalletImage(e))}
            name=${e.name??"Unknown"}
            @click=${()=>this.onConnectWallet(e)}
            data-testid=${`wallet-selector-${e.id}`}
            tabIdx=${(0,r.J)(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `))}
    </wui-flex>`}filterOutDuplicateWallets(e){const t=oe.i.getRecentWallets(),i=this.connectors.map((e=>e.info?.rdns)).filter(Boolean),o=t.map((e=>e.rdns)).filter(Boolean),a=i.concat(o);if(a.includes("io.metamask.mobile")&&d.w.isMobile()){const e=a.indexOf("io.metamask.mobile");a[e]="io.metamask"}const r=e.filter((e=>!a.includes(String(e?.rdns))));return r}onConnectWallet(e){this.loading||G.I.push("ConnectingWalletConnect",{wallet:e})}};Ci([(0,a.MZ)()],$i.prototype,"tabIdx",void 0),Ci([(0,a.wk)()],$i.prototype,"connectors",void 0),Ci([(0,a.wk)()],$i.prototype,"loading",void 0),$i=Ci([(0,h.EM)("w3m-connect-custom-widget")],$i);var Ii=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ei=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.unsubscribe.push(V.a.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"EXTERNAL"===e.type)),t=e.filter(yi.g.showConnector),i=t.filter((e=>e.id!==F.o.CONNECTOR_ID.COINBASE_SDK));return i?.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${i.map((e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,r.J)(s.$.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,r.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){G.I.push("ConnectingExternal",{connector:e})}};Ii([(0,a.MZ)()],Ei.prototype,"tabIdx",void 0),Ii([(0,a.wk)()],Ei.prototype,"connectors",void 0),Ei=Ii([(0,h.EM)("w3m-connect-external-widget")],Ei);var Si=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ti=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map((e=>o.qy`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${e.id}`}
              imageSrc=${(0,r.J)(s.$.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${(0,r.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){V.a.selectWalletConnector(e)}};Si([(0,a.MZ)()],Ti.prototype,"tabIdx",void 0),Si([(0,a.MZ)()],Ti.prototype,"wallets",void 0),Ti=Si([(0,h.EM)("w3m-connect-featured-widget")],Ti);var Ai=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ri=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){const e=this.connectors.filter(yi.g.showConnector);return 0===e.length?(this.style.cssText="display: none",null):o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,r.J)(s.$.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,r.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `}onConnector(e){V.a.setActiveConnector(e),G.I.push("ConnectingExternal",{connector:e})}};Ai([(0,a.MZ)()],Ri.prototype,"tabIdx",void 0),Ai([(0,a.MZ)()],Ri.prototype,"connectors",void 0),Ri=Ai([(0,h.EM)("w3m-connect-injected-widget")],Ri);var Wi=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Oi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.unsubscribe.push(V.a.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"MULTI_CHAIN"===e.type&&"WalletConnect"!==e.name));return e?.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,r.J)(s.$.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,r.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){V.a.setActiveConnector(e),G.I.push("ConnectingMultiChain")}};Wi([(0,a.MZ)()],Oi.prototype,"tabIdx",void 0),Wi([(0,a.wk)()],Oi.prototype,"connectors",void 0),Oi=Wi([(0,h.EM)("w3m-connect-multi-chain-widget")],Oi);var Ni=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ji=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.loading=!1,this.unsubscribe.push(V.a.subscribeKey("connectors",(e=>this.connectors=e))),d.w.isTelegram()&&d.w.isIos()&&(this.loading=!Y.x.state.wcUri,this.unsubscribe.push(Y.x.subscribeKey("wcUri",(e=>this.loading=!e))))}render(){const e=oe.i.getRecentWallets(),t=e.filter((e=>!Tt.A.isExcluded(e))).filter((e=>!this.hasWalletConnector(e))).filter((e=>this.isWalletCompatibleWithCurrentChain(e)));return t.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map((e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,r.J)(s.$.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${(0,r.J)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){this.loading||V.a.selectWalletConnector(e)}hasWalletConnector(e){return this.connectors.some((t=>t.id===e.id||t.name===e.name))}isWalletCompatibleWithCurrentChain(e){const t=n.W.state.activeChain;return!t||!e.chains||e.chains.some((e=>{const i=e.split(":")[0];return t===i}))}};Ni([(0,a.MZ)()],ji.prototype,"tabIdx",void 0),Ni([(0,a.wk)()],ji.prototype,"connectors",void 0),Ni([(0,a.wk)()],ji.prototype,"loading",void 0),ji=Ni([(0,h.EM)("w3m-connect-recent-widget")],ji);var Pi=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Mi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,d.w.isTelegram()&&d.w.isIos()&&(this.loading=!Y.x.state.wcUri,this.unsubscribe.push(Y.x.subscribeKey("wcUri",(e=>this.loading=!e))))}render(){const{connectors:e}=V.a.state,{customWallets:t,featuredWalletIds:i}=l.H.state,a=oe.i.getRecentWallets(),n=e.find((e=>"walletConnect"===e.id)),c=e.filter((e=>"INJECTED"===e.type||"ANNOUNCED"===e.type||"MULTI_CHAIN"===e.type)),u=c.filter((e=>"Browser Wallet"!==e.name));if(!n)return null;if(i||t||!this.wallets.length)return this.style.cssText="display: none",null;const d=u.length+a.length,p=Math.max(0,2-d),h=Tt.A.filterOutDuplicateWallets(this.wallets).slice(0,p);return h.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${h.map((e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,r.J)(s.$.getWalletImage(e))}
              name=${e?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${(0,r.J)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){if(this.loading)return;const t=V.a.getConnector(e.id,e.rdns);t?G.I.push("ConnectingExternal",{connector:t}):G.I.push("ConnectingWalletConnect",{wallet:e})}};Pi([(0,a.MZ)()],Mi.prototype,"tabIdx",void 0),Pi([(0,a.MZ)()],Mi.prototype,"wallets",void 0),Pi([(0,a.wk)()],Mi.prototype,"loading",void 0),Mi=Pi([(0,h.EM)("w3m-connect-recommended-widget")],Mi);var qi=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Di=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.connectorImages=c.j.state.connectorImages,this.unsubscribe.push(V.a.subscribeKey("connectors",(e=>this.connectors=e)),c.j.subscribeKey("connectorImages",(e=>this.connectorImages=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(d.w.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find((e=>"walletConnect"===e.id));if(!e)return this.style.cssText="display: none",null;const t=e.imageUrl||this.connectorImages[e?.imageId??""];return o.qy`
      <wui-list-wallet
        imageSrc=${(0,r.J)(t)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${(0,r.J)(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(e){V.a.setActiveConnector(e),G.I.push("ConnectingWalletConnect")}};qi([(0,a.MZ)()],Di.prototype,"tabIdx",void 0),qi([(0,a.wk)()],Di.prototype,"connectors",void 0),qi([(0,a.wk)()],Di.prototype,"connectorImages",void 0),Di=qi([(0,h.EM)("w3m-connect-walletconnect-widget")],Di);var Ui=o.AH`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,Zi=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let zi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.recommended=yt.N.state.recommended,this.featured=yt.N.state.featured,this.unsubscribe.push(V.a.subscribeKey("connectors",(e=>this.connectors=e)),yt.N.subscribeKey("recommended",(e=>this.recommended=e)),yt.N.subscribeKey("featured",(e=>this.featured=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:e,recent:t,announced:i,injected:a,multiChain:n,recommended:s,featured:l,external:c}=yi.g.getConnectorsByType(this.connectors,this.recommended,this.featured),u=yi.g.getConnectorTypeOrder({custom:e,recent:t,announced:i,injected:a,multiChain:n,recommended:s,featured:l,external:c});return u.map((e=>{switch(e){case"injected":return o.qy`
            ${n.length?o.qy`<w3m-connect-multi-chain-widget
                  tabIdx=${(0,r.J)(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${i.length?o.qy`<w3m-connect-announced-widget
                  tabIdx=${(0,r.J)(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${a.length?o.qy`<w3m-connect-injected-widget
                  .connectors=${a}
                  tabIdx=${(0,r.J)(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return o.qy`<w3m-connect-walletconnect-widget
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return o.qy`<w3m-connect-recent-widget
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return o.qy`<w3m-connect-featured-widget
            .wallets=${l}
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return o.qy`<w3m-connect-custom-widget
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return o.qy`<w3m-connect-external-widget
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return o.qy`<w3m-connect-recommended-widget
            .wallets=${s}
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${e}`),null}}))}};zi.styles=Ui,Zi([(0,a.MZ)()],zi.prototype,"tabIdx",void 0),Zi([(0,a.wk)()],zi.prototype,"connectors",void 0),Zi([(0,a.wk)()],zi.prototype,"recommended",void 0),Zi([(0,a.wk)()],zi.prototype,"featured",void 0),zi=Zi([(0,h.EM)("w3m-connector-list")],zi);var Li=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let _i=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0}render(){return o.qy`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${(0,r.J)(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${(0,r.J)(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};Li([(0,a.MZ)()],_i.prototype,"tabIdx",void 0),_i=Li([(0,h.EM)("w3m-wallet-login-list")],_i);var Bi=o.AH`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,Hi=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Fi=470;let Vi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.connectors=V.a.state.connectors,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.features=l.H.state.features,this.enableWallets=l.H.state.enableWallets,this.noAdapters=n.W.state.noAdapters,this.walletGuide="get-started",this.checked=_t.o.state.isLegalCheckboxChecked,this.isEmailEnabled=this.features?.email&&!n.W.state.noAdapters,this.isSocialEnabled=this.features?.socials&&this.features.socials.length>0&&!n.W.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(V.a.subscribeKey("connectors",(e=>{this.connectors=e,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})),l.H.subscribeKey("features",(e=>this.setEmailAndSocialEnableCheck(e,this.noAdapters))),l.H.subscribeKey("enableWallets",(e=>this.enableWallets=e)),n.W.subscribeKey("noAdapters",(e=>this.setEmailAndSocialEnableCheck(this.features,e))),_t.o.subscribeKey("isLegalCheckboxChecked",(e=>this.checked=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.resizeObserver?.disconnect();const e=this.shadowRoot?.querySelector(".connect");e?.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){const e=this.shadowRoot?.querySelector(".connect");e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e?.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver((()=>{this.handleConnectListScroll()})),this.resizeObserver?.observe(e),this.handleConnectListScroll())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=l.H.state,i=l.H.state.features?.legalCheckbox,a=e||t,r=Boolean(a)&&Boolean(i)&&"get-started"===this.walletGuide,n=r&&!this.checked,s={connect:!0,disabled:n},c=l.H.state.enableWalletGuide,u=this.enableWallets,d=this.isSocialEnabled||this.authConnector,p=n?-1:void 0;return o.qy`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          class=${(0,Lt.H)(s)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="s"
            .padding=${d&&u&&c&&"get-started"===this.walletGuide?["3xs","s","0","s"]:["3xs","s","s","s"]}
          >
            ${this.renderConnectMethod(p)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(n)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `}setEmailAndSocialEnableCheck(e,t){this.isEmailEnabled=e?.email&&!t,this.isSocialEnabled=e?.socials&&e.socials.length>0&&!t,this.features=e,this.noAdapters=t}checkIfAuthEnabled(e){const t=e.filter((e=>e.type===Vt.o.CONNECTOR_TYPE_AUTH)).map((e=>e.chain)),i=F.o.AUTH_CONNECTOR_SUPPORTED_CHAINS;return i.some((e=>t.includes(e)))}renderConnectMethod(e){const t=Tt.A.getConnectOrderMethod(this.features,this.connectors);return o.qy`${t.map(((t,i)=>{switch(t){case"email":return o.qy`${this.emailTemplate(e)} ${this.separatorTemplate(i,"email")}`;case"social":return o.qy`${this.socialListTemplate(e)}
          ${this.separatorTemplate(i,"social")}`;case"wallet":return o.qy`${this.walletListTemplate(e)}
          ${this.separatorTemplate(i,"wallet")}`;default:return null}}))}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){const t=Tt.A.getConnectOrderMethod(this.features,this.connectors),i=t[e+1];if(!i)return;const o=this.checkMethodEnabled(i);return o?i:this.checkIsThereNextMethod(e+1)}separatorTemplate(e,t){const i=this.checkIsThereNextMethod(e),a="explore"===this.walletGuide;switch(t){case"wallet":{const e=this.enableWallets;return e&&i&&!a?o.qy`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}case"email":{const e="social"===i;return this.isAuthEnabled&&this.isEmailEnabled&&!e&&i?o.qy`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const e="email"===i;return this.isAuthEnabled&&this.isSocialEnabled&&!e&&i?o.qy`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(e){return this.isEmailEnabled&&this.isAuthEnabled?o.qy`<w3m-email-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,r.J)(e)}
    ></w3m-email-login-widget>`:null}socialListTemplate(e){return this.isSocialEnabled&&this.isAuthEnabled?o.qy`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,r.J)(e)}
    ></w3m-social-login-widget>`:null}walletListTemplate(e){const t=this.enableWallets,i=!1===this.features?.emailShowWallets,a=this.features?.collapseWallets,n=i||a;if(!t)return null;if((d.w.isTelegram()||d.w.isSafari())&&d.w.isIos()&&Y.x.connectWalletConnect().catch((e=>({}))),"explore"===this.walletGuide)return null;const s=this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled);return s&&n?o.qy`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${(0,r.J)(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:o.qy`<w3m-wallet-login-list tabIdx=${(0,r.J)(e)}></w3m-wallet-login-list>`}guideTemplate(e=!1){const t=l.H.state.enableWalletGuide;if(!t)return null;const i={guide:!0,disabled:e},a=e?-1:void 0;return this.authConnector||this.isSocialEnabled?o.qy`
      ${"explore"!==this.walletGuide||n.W.state.noAdapters?null:o.qy`<wui-separator data-testid="wui-separator" id="explore" text="or"></wui-separator>`}
      <wui-flex flexDirection="column" .padding=${["l","0","0","0"]} class=${(0,Lt.H)(i)}>
        <w3m-wallet-guide
          tabIdx=${(0,r.J)(a)}
          walletGuide=${this.walletGuide}
        ></w3m-wallet-guide>
      </wui-flex>
    `:null}legalCheckboxTemplate(){return"explore"===this.walletGuide?null:o.qy`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){const e=this.shadowRoot?.querySelector(".connect");if(!e)return;const t=e.scrollHeight>Fi;t?(e.style.setProperty("--connect-mask-image","linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,\n          black 40px,\n          black calc(100% - 40px),\n          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%\n        )"),e.style.setProperty("--connect-scroll--top-opacity",h.z8.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",h.z8.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--connect-mask-image","none"),e.style.setProperty("--connect-scroll--top-opacity","0"),e.style.setProperty("--connect-scroll--bottom-opacity","0"))}onContinueWalletClick(){G.I.push("ConnectWallets")}};Vi.styles=Bi,Hi([(0,zt.w)()],Vi.prototype,"connectors",void 0),Hi([(0,zt.w)()],Vi.prototype,"authConnector",void 0),Hi([(0,zt.w)()],Vi.prototype,"features",void 0),Hi([(0,zt.w)()],Vi.prototype,"enableWallets",void 0),Hi([(0,zt.w)()],Vi.prototype,"noAdapters",void 0),Hi([(0,a.MZ)()],Vi.prototype,"walletGuide",void 0),Hi([(0,zt.w)()],Vi.prototype,"checked",void 0),Hi([(0,zt.w)()],Vi.prototype,"isEmailEnabled",void 0),Hi([(0,zt.w)()],Vi.prototype,"isSocialEnabled",void 0),Hi([(0,zt.w)()],Vi.prototype,"isAuthEnabled",void 0),Vi=Hi([(0,h.EM)("w3m-connect-view")],Vi);var Ji=i(19349),Ki=(i(67756),i(95076),o.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`),Gi=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Yi=class extends o.WF{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return o.qy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Yi.styles=[w.W5,w.fD,Ki],Gi([(0,a.MZ)({type:Boolean})],Yi.prototype,"disabled",void 0),Gi([(0,a.MZ)()],Yi.prototype,"label",void 0),Gi([(0,a.MZ)()],Yi.prototype,"buttonLabel",void 0),Yi=Gi([(0,f.E)("wui-cta-button")],Yi);var Xi=o.AH`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,Qi=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let eo=class extends o.WF{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:i,chrome_store:a,homepage:r}=this.wallet,n=d.w.isMobile(),s=d.w.isIos(),l=d.w.isAndroid(),c=[t,i,r,a].filter(Boolean).length>1,u=h.Zv.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!n?o.qy`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>G.I.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&r?o.qy`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?o.qy`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&l?o.qy`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&d.w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&d.w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&d.w.openHref(this.wallet.homepage,"_blank")}};eo.styles=[Xi],Qi([(0,a.MZ)({type:Object})],eo.prototype,"wallet",void 0),eo=Qi([(0,h.EM)("w3m-mobile-download-links")],eo);var to=o.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,io=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class oo extends o.WF{constructor(){super(),this.wallet=G.I.state.data?.wallet,this.connector=G.I.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=s.$.getWalletImage(this.wallet)??s.$.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=Y.x.state.wcUri,this.error=Y.x.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.buffering=!1,this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Y.x.subscribeKey("wcUri",(e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())})),Y.x.subscribeKey("wcError",(e=>this.error=e)),Y.x.subscribeKey("buffering",(e=>this.buffering=e))),(d.w.isTelegram()||d.w.isSafari())&&d.w.isIos()&&Y.x.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),o.qy`
      <wui-flex
        data-error=${(0,r.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,r.J)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?o.qy`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||!this.error&&this.buffering||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?o.qy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(Y.x.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){const e=Ji.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return o.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(d.w.copyToClopboard(this.uri),K.P.showSuccess("Link copied"))}catch{K.P.showError("Failed to copy")}}}oo.styles=to,io([(0,a.wk)()],oo.prototype,"isRetrying",void 0),io([(0,a.wk)()],oo.prototype,"uri",void 0),io([(0,a.wk)()],oo.prototype,"error",void 0),io([(0,a.wk)()],oo.prototype,"ready",void 0),io([(0,a.wk)()],oo.prototype,"showRetry",void 0),io([(0,a.wk)()],oo.prototype,"secondaryBtnLabel",void 0),io([(0,a.wk)()],oo.prototype,"secondaryLabel",void 0),io([(0,a.wk)()],oo.prototype,"buffering",void 0),io([(0,a.wk)()],oo.prototype,"isLoading",void 0),io([(0,a.MZ)({type:Boolean})],oo.prototype,"isMobile",void 0),io([(0,a.MZ)()],oo.prototype,"onRetry",void 0);var ao=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ro=class extends oo{constructor(){if(super(),this.externalViewUnsubscribe=[],!this.connector)throw new Error("w3m-connecting-view: No connector provided");M.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(n.W.subscribeKey("activeCaipAddress",(e=>{e&&p.W.close()})))}disconnectedCallback(){this.externalViewUnsubscribe.forEach((e=>e()))}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.id===F.o.CONNECTOR_ID.COINBASE_SDK&&this.error||(await Y.x.connectExternal(this.connector,this.connector.chain),M.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}})))}catch(e){M.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};ro=ao([(0,h.EM)("w3m-connecting-external-view")],ro);var no=o.AH`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`,so=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let lo=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.activeConnector=V.a.state.activeConnector,this.unsubscribe.push(V.a.subscribeKey("activeConnector",(e=>this.activeConnector=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${(0,r.J)(s.$.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0","s","0","s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs","0","xs","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map((e=>e.name?o.qy`
            <wui-list-wallet
              imageSrc=${(0,r.J)(s.$.getChainImage(e.chain))}
              name=${F.o.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
              data-testid="wui-list-chain-${e.chain}"
            ></wui-list-wallet>
          `:null))}onConnector(e){const t=this.activeConnector?.connectors?.find((t=>t.chain===e.chain));t?"walletConnect"===t.id?d.w.isMobile()?G.I.push("AllWallets"):G.I.push("ConnectingWalletConnect"):G.I.push("ConnectingExternal",{connector:t}):K.P.showError("Failed to find connector")}};lo.styles=no,so([(0,a.wk)()],lo.prototype,"activeConnector",void 0),lo=so([(0,h.EM)("w3m-connecting-multi-chain-view")],lo);var co=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let uo=class extends o.WF{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(Y.x.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.generateTabs();return o.qy`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map((e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=e.map((({platform:e})=>e)),e}onTabChange(e){const t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};co([(0,a.MZ)({type:Array})],uo.prototype,"platforms",void 0),co([(0,a.MZ)()],uo.prototype,"onSelectPlatfrom",void 0),co([(0,a.wk)()],uo.prototype,"buffering",void 0),uo=co([(0,h.EM)("w3m-connecting-header")],uo);var po=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ho=class extends oo{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),M.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=V.a.state,t=e.find((e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns||"INJECTED"===e.type||e.name===this.wallet?.name));if(!t)throw new Error("w3m-connecting-wc-browser: No connector found");await Y.x.connectExternal(t,t.chain),p.W.close(),M.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(e){M.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};ho=po([(0,h.EM)("w3m-connecting-wc-browser")],ho);var wo=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let go=class extends oo{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),M.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:i,href:o}=d.w.formatNativeUrl(e,this.uri);Y.x.setWcLinking({name:t,href:o}),Y.x.setRecentWallet(this.wallet),d.w.openHref(i,"_blank")}catch{this.error=!0}}};go=wo([(0,h.EM)("w3m-connecting-wc-desktop")],go);var fo=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let bo=class extends oo{constructor(){if(super(),this.btnLabelTimeout=void 0,this.labelTimeout=void 0,this.onRender=()=>{!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())},this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:t}=this.wallet,{redirect:i,href:o}=d.w.formatNativeUrl(e,this.uri);Y.x.setWcLinking({name:t,href:o}),Y.x.setRecentWallet(this.wallet);const a=d.w.isIframe()?"_top":"_self";d.w.openHref(i,a),clearTimeout(this.labelTimeout),this.secondaryLabel=J.oU.CONNECT_LABELS.MOBILE}catch(e){M.E.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.initializeStateAndTimers(),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),M.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this)),clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout)}initializeStateAndTimers(){this.secondaryBtnLabel=void 0,this.secondaryLabel=J.oU.CONNECT_LABELS.MOBILE,this.btnLabelTimeout=setTimeout((()=>{this.secondaryBtnLabel="Try again",this.secondaryLabel=J.oU.CONNECT_LABELS.MOBILE}),J.oU.FIVE_SEC_MS),this.labelTimeout=setTimeout((()=>{this.secondaryLabel="Hold tight... it's taking longer than expected"}),J.oU.THREE_SEC_MS)}onBuffering(){const e=d.w.isIos();"visible"===document?.visibilityState&&!this.error&&e&&(Y.x.setBuffering(!0),setTimeout((()=>{Y.x.setBuffering(!1)}),5e3))}onTryAgain(){this.buffering||(clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout),this.initializeStateAndTimers(),Y.x.setWcError(!1),this.onConnect())}};bo=fo([(0,h.EM)("w3m-connecting-wc-mobile")],bo);i(58513),i(45897);var mo=o.AH`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`,vo=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let yo=class extends oo{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),M.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach((e=>e())),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return Y.x.setWcLinking(void 0),Y.x.setRecentWallet(this.wallet),o.qy` <wui-qr-code
      size=${e}
      theme=${Ji.W.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,r.J)(s.$.getWalletImage(this.wallet))}
      color=${(0,r.J)(Ji.W.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,r.J)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return o.qy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};yo.styles=mo,yo=vo([(0,h.EM)("w3m-connecting-wc-qrcode")],yo);var xo=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ko=class extends o.WF{constructor(){if(super(),this.wallet=G.I.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");M.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,r.J)(s.$.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};ko=xo([(0,h.EM)("w3m-connecting-wc-unsupported")],ko);var Co=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let $o=class extends oo{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(Y.x.subscribeKey("wcUri",(()=>{this.updateLoadingState()}))),M.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:i,href:o}=d.w.formatUniversalUrl(e,this.uri);Y.x.setWcLinking({name:t,href:o}),Y.x.setRecentWallet(this.wallet),d.w.openHref(i,"_blank")}catch{this.error=!0}}};Co([(0,a.wk)()],$o.prototype,"isLoading",void 0),$o=Co([(0,h.EM)("w3m-connecting-wc-web")],$o);var Io=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Eo=class extends o.WF{constructor(){super(),this.wallet=G.I.state.data?.wallet,this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(l.H.state.siwx),this.determinePlatforms(),this.initializeConnection()}render(){return o.qy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `}async initializeConnection(e=!1){if("browser"!==this.platform&&(!l.H.state.manualWCControl||e))try{const{wcPairingExpiry:t,status:i}=Y.x.state;(e||l.H.state.enableEmbedded||d.w.isPairingExpired(t)||"connecting"===i)&&(await Y.x.connectWalletConnect(),this.isSiwxEnabled||p.W.close())}catch(t){M.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),Y.x.setWcError(!0),K.P.showError(t.message??"Connection error"),Y.x.resetWcConnection(),G.I.goBack()}}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:i,injected:o,rdns:a}=this.wallet,r=o?.map((({injected_id:e})=>e)).filter(Boolean),s=[...a?[a]:r??[]],c=!l.H.state.isUniversalProvider&&s.length,u=e,p=i,h=Y.x.checkInstalled(s),w=c&&h,g=t&&!d.w.isMobile();w&&!n.W.state.noAdapters&&this.platforms.push("browser"),u&&this.platforms.push(d.w.isMobile()?"mobile":"qrcode"),p&&this.platforms.push("web"),g&&this.platforms.push("desktop"),w||!c||n.W.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return o.qy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return o.qy`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return o.qy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return o.qy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return o.qy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return o.qy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){const e=this.platforms.length>1;return e?o.qy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Io([(0,a.wk)()],Eo.prototype,"platform",void 0),Io([(0,a.wk)()],Eo.prototype,"platforms",void 0),Io([(0,a.wk)()],Eo.prototype,"isSiwxEnabled",void 0),Eo=Io([(0,h.EM)("w3m-connecting-wc-view")],Eo);var So=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let To=class extends o.WF{constructor(){super(...arguments),this.isMobile=d.w.isMobile()}render(){if(this.isMobile){const{featured:e,recommended:t}=yt.N.state,{customWallets:i}=l.H.state,a=oe.i.getRecentWallets(),r=e.length||t.length||i?.length||a.length;return o.qy`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${r?o.qy`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return o.qy`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};So([(0,a.wk)()],To.prototype,"isMobile",void 0),To=So([(0,h.EM)("w3m-connecting-wc-basic-view")],To);var Ao=i(50830),Ro=o.AH`
  .continue-button-container {
    width: 100%;
  }
`,Wo=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Oo=class extends o.WF{constructor(){super(...arguments),this.loading=!1}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{d.w.openHref(Ao.T.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return o.qy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return o.qy`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){const e=n.W.state.activeChain;G.I.push("RegisterAccountName"),M.E.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:u.U.state.preferredAccountTypes?.[e]===ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}};Oo.styles=Ro,Wo([(0,a.wk)()],Oo.prototype,"loading",void 0),Oo=Wo([(0,h.EM)("w3m-choose-account-name-view")],Oo);var No=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let jo=class extends o.WF{constructor(){super(...arguments),this.wallet=G.I.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return o.qy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?o.qy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?o.qy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?o.qy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?o.qy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&d.w.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&d.w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&d.w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&d.w.openHref(this.wallet.homepage,"_blank")}};jo=No([(0,h.EM)("w3m-downloads-view")],jo);var Po=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Mo="https://walletconnect.com/explorer";let qo=class extends o.WF{render(){return o.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{d.w.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=yt.N.state,{customWallets:i}=l.H.state,a=[...t,...i??[],...e].slice(0,4);return a.map((e=>o.qy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,r.J)(s.$.getWalletImage(e))}
          @click=${()=>{d.w.openHref(e.homepage??Mo,"_blank")}}
        ></wui-list-wallet>
      `))}};qo=Po([(0,h.EM)("w3m-get-wallet-view")],qo);i(91594);var Do=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Uo=class extends o.WF{constructor(){super(...arguments),this.data=[]}render(){return o.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((e=>o.qy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map((e=>o.qy`<wui-visual name=${e}></wui-visual>`))}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `))}
      </wui-flex>
    `}};Do([(0,a.MZ)({type:Array})],Uo.prototype,"data",void 0),Uo=Do([(0,h.EM)("w3m-help-widget")],Uo);var Zo=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const zo=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Lo=class extends o.WF{render(){return o.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${zo}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){M.E.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),G.I.push("GetWallet")}};Lo=Zo([(0,h.EM)("w3m-what-is-a-wallet-view")],Lo);var _o=o.AH`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,Bo=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ho=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.checked=_t.o.state.isLegalCheckboxChecked,this.unsubscribe.push(_t.o.subscribeKey("isLegalCheckboxChecked",(e=>{this.checked=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=l.H.state,i=l.H.state.features?.legalCheckbox,a=e||t,n=Boolean(a)&&Boolean(i),s=n&&!this.checked,c=s?-1:void 0;return o.qy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${n?["0","s","s","s"]:"s"}
        gap="xs"
        class=${(0,r.J)(s?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${(0,r.J)(c)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};Ho.styles=_o,Bo([(0,a.wk)()],Ho.prototype,"checked",void 0),Ho=Bo([(0,h.EM)("w3m-connect-wallets-view")],Ho);var Fo=o.AH`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,Vo=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Jo=class extends o.WF{render(){return o.qy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Jo.styles=[w.W5,Fo],Jo=Vo([(0,f.E)("wui-loading-hexagon")],Jo);i(67732);var Ko=o.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,Go=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Yo=class extends o.WF{constructor(){super(),this.network=G.I.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),t=this.getSubLabel();return o.qy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,r.J)(s.$.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:o.qy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=n.W.state.activeChain,t=V.a.getConnectorId(e),i=V.a.getAuthConnector();return i&&t===F.o.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){const e=n.W.state.activeChain,t=V.a.getConnectorId(e),i=V.a.getAuthConnector();return i&&t===F.o.CONNECTOR_ID.AUTH?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,n.W.state.activeChain!==this.network?.chainNamespace&&n.W.setIsSwitchingNamespace(!0),this.network&&await n.W.switchActiveNetwork(this.network)}catch(e){this.error=!0}}};Yo.styles=Ko,Go([(0,a.wk)()],Yo.prototype,"showRetry",void 0),Go([(0,a.wk)()],Yo.prototype,"error",void 0),Yo=Go([(0,h.EM)("w3m-network-switch-view")],Yo);i(81008),i(71201);var Xo=o.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,Qo=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ea=class extends o.WF{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return o.qy`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled}>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?o.qy`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?o.qy`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:o.qy`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};ea.styles=[w.W5,w.fD,Xo],Qo([(0,a.MZ)()],ea.prototype,"imageSrc",void 0),Qo([(0,a.MZ)()],ea.prototype,"name",void 0),Qo([(0,a.MZ)({type:Boolean})],ea.prototype,"disabled",void 0),Qo([(0,a.MZ)({type:Boolean})],ea.prototype,"selected",void 0),Qo([(0,a.MZ)({type:Boolean})],ea.prototype,"transparent",void 0),ea=Qo([(0,f.E)("wui-list-network")],ea);var ta=o.AH`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`,ia=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let oa=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.network=n.W.state.activeCaipNetwork,this.requestedCaipNetworks=n.W.getCaipNetworks(),this.search="",this.onDebouncedSearch=d.w.debounce((e=>{this.search=e}),100),this.unsubscribe.push(c.j.subscribeNetworkImages((()=>this.requestUpdate())),n.W.subscribeKey("activeCaipNetwork",(e=>this.network=e)),n.W.subscribe((()=>{this.requestedCaipNetworks=n.W.getAllRequestedCaipNetworks()})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","s","s","s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return o.qy`
      <wui-flex gap="xs" .padding=${["0","s","s","s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onNetworkHelp(){M.E.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),G.I.push("WhatIsANetwork")}networksTemplate(){const e=n.W.getAllApprovedCaipNetworkIds(),t=d.w.sortRequestedNetworks(e,this.requestedCaipNetworks);return this.search?this.filteredNetworks=t?.filter((e=>e?.name?.toLowerCase().includes(this.search.toLowerCase()))):this.filteredNetworks=t,this.filteredNetworks?.map((e=>o.qy`
        <wui-list-network
          .selected=${this.network?.id===e.id}
          imageSrc=${(0,r.J)(s.$.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${this.getNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `))}getNetworkDisabled(e){const t=e.chainNamespace,i=u.U.getCaipAddress(t),o=n.W.getAllApprovedCaipNetworkIds(),a=!1!==n.W.getNetworkProp("supportsAllNetworks",t),r=V.a.getConnectorId(t),s=V.a.getAuthConnector(),l=r===F.o.CONNECTOR_ID.AUTH&&s;return!(!i||a||l)&&!o?.includes(e.caipNetworkId)}onSwitchNetwork(e){const t=G.I.state.data,i=e.id===this.network?.id;if(i)return;const o=e.chainNamespace!==n.W.state.activeChain,a=u.U.state.caipAddress,r=u.U.getCaipAddress(e.chainNamespace),s=V.a.getConnectorId(n.W.state.activeChain),l=s===F.o.CONNECTOR_ID.AUTH,c=F.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((t=>t===e.chainNamespace));a?l&&c?G.I.push("SwitchNetwork",{...t,network:e}):l&&!c||o&&!r?G.I.push("SwitchActiveChain",{switchToChain:e.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:e}):G.I.push("SwitchNetwork",{...t,network:e}):G.I.push("SwitchNetwork",{...t,network:e})}};oa.styles=ta,ia([(0,a.wk)()],oa.prototype,"network",void 0),ia([(0,a.wk)()],oa.prototype,"requestedCaipNetworks",void 0),ia([(0,a.wk)()],oa.prototype,"filteredNetworks",void 0),ia([(0,a.wk)()],oa.prototype,"search",void 0),oa=ia([(0,h.EM)("w3m-networks-view")],oa);var aa=o.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }

  .capitalize {
    text-transform: capitalize;
  }
`,ra=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const na={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0};let sa=class extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=G.I.state.data?.switchToChain,this.caipNetwork=G.I.state.data?.network,this.activeChain=n.W.state.activeChain}firstUpdated(){this.unsubscribe.push(n.W.subscribeKey("activeChain",(e=>this.activeChain=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.switchToChain?F.o.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const t=F.o.CHAIN_NAME_MAP[this.switchToChain];return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual name=${(0,r.J)(na[this.switchToChain])}></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${t}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${t}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${e} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(n.W.setIsSwitchingNamespace(!0),V.a.setFilterByNamespace(this.switchToChain),this.caipNetwork?await n.W.switchActiveNetwork(this.caipNetwork):n.W.setActiveNamespace(this.switchToChain),G.I.reset("Connect"))}};sa.styles=aa,ra([(0,a.MZ)()],sa.prototype,"activeChain",void 0),sa=ra([(0,h.EM)("w3m-switch-active-chain-view")],sa);var la=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const ca=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let ua=class extends o.WF{render(){return o.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ca}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{d.w.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};ua=la([(0,h.EM)("w3m-what-is-a-network-view")],ua);var da=o.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,pa=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ha=class extends o.WF{constructor(){super(),this.swapUnsupportedChain=G.I.state.data?.swapUnsupportedChain,this.unsubscribe=[],this.disconecting=!1,this.unsubscribe.push(c.j.subscribeNetworkImages((()=>this.requestUpdate())))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?o.qy`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:o.qy`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const e=n.W.getAllRequestedCaipNetworks(),t=n.W.getAllApprovedCaipNetworkIds(),i=d.w.sortRequestedNetworks(t,e),a=this.swapUnsupportedChain?i.filter((e=>J.oU.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId))):i;return a.map((e=>o.qy`
        <wui-list-network
          imageSrc=${(0,r.J)(s.$.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `))}async onDisconnect(){try{this.disconecting=!0,await Y.x.disconnect(),p.W.close()}catch{M.E.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),K.P.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const t=u.U.state.caipAddress,i=n.W.getAllApprovedCaipNetworkIds(),o=(n.W.getNetworkProp("supportsAllNetworks",e.chainNamespace),G.I.state.data);t?i?.includes(e.caipNetworkId)?await n.W.switchActiveNetwork(e):G.I.push("SwitchNetwork",{...o,network:e}):t||(n.W.setActiveCaipNetwork(e),G.I.push("Connect"))}};ha.styles=da,pa([(0,a.wk)()],ha.prototype,"disconecting",void 0),ha=pa([(0,h.EM)("w3m-unsupported-chain-view")],ha);var wa=o.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`,ga=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let fa=class extends o.WF{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return o.qy`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};fa.styles=[w.W5,w.fD,wa],ga([(0,a.MZ)()],fa.prototype,"icon",void 0),ga([(0,a.MZ)()],fa.prototype,"text",void 0),fa=ga([(0,f.E)("wui-banner")],fa);var ba=o.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,ma=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let va=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.preferredAccountTypes=u.U.state.preferredAccountTypes,this.unsubscribe.push(u.U.subscribeKey("preferredAccountTypes",(e=>{this.preferredAccountTypes=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=n.W.getAllRequestedCaipNetworks(),t=n.W.getAllApprovedCaipNetworkIds(),i=n.W.state.activeCaipNetwork,a=n.W.checkIfSmartAccountEnabled();let l=d.w.sortRequestedNetworks(t,e);if(a&&this.preferredAccountTypes?.[i?.chainNamespace]===ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT){if(!i)return null;l=[i]}const c=l.filter((e=>e.chainNamespace===i?.chainNamespace));return c.map((e=>o.qy`
        <wui-list-network
          imageSrc=${(0,r.J)(s.$.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `))}};va.styles=ba,ma([(0,a.wk)()],va.prototype,"preferredAccountTypes",void 0),va=ma([(0,h.EM)("w3m-wallet-compatible-networks-view")],va);var ya=i(27309),xa=o.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`,ka=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ca=class extends o.WF{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,o.qy`${this.templateVisual()}`}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:o.qy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Ca.styles=[w.W5,xa],ka([(0,a.MZ)()],Ca.prototype,"imageSrc",void 0),ka([(0,a.MZ)()],Ca.prototype,"alt",void 0),ka([(0,a.MZ)({type:Boolean})],Ca.prototype,"borderRadiusFull",void 0),Ca=ka([(0,f.E)("wui-visual-thumbnail")],Ca);var $a=o.AH`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`,Ia=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ea=class extends o.WF{constructor(){super(...arguments),this.dappImageUrl=l.H.state.metadata?.icons,this.walletImageUrl=u.U.state.connectedWalletInfo?.icon}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return o.qy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Ea.styles=$a,Ea=Ia([(0,h.EM)("w3m-siwx-sign-message-thumbnails")],Ea);var Sa=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ta=class extends o.WF{constructor(){super(...arguments),this.dappName=l.H.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return o.qy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,await ya.U.requestSignMessage().finally((()=>this.isSigning=!1))}async onCancel(){this.isCancelling=!0,await ya.U.cancelSignMessage().finally((()=>this.isCancelling=!1))}};Sa([(0,a.wk)()],Ta.prototype,"isCancelling",void 0),Sa([(0,a.wk)()],Ta.prototype,"isSigning",void 0),Ta=Sa([(0,h.EM)("w3m-siwx-sign-message-view")],Ta)},50278:function(e,t,i){var o=i(81238),a=i(74186),r=(i(3886),i(15144),i(80894),i(76046)),n=i(48317),s=(i(3198),o.AH`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`),l=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${e});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset["walletIcon"]=this.walletIcon),o.qy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?o.qy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:o.qy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};c.styles=[r.fD,r.W5,s],l([(0,a.MZ)()],c.prototype,"size",void 0),l([(0,a.MZ)()],c.prototype,"name",void 0),l([(0,a.MZ)()],c.prototype,"imageSrc",void 0),l([(0,a.MZ)()],c.prototype,"walletIcon",void 0),l([(0,a.MZ)({type:Boolean})],c.prototype,"installed",void 0),l([(0,a.MZ)()],c.prototype,"badgeSize",void 0),c=l([(0,n.E)("wui-wallet-image")],c)},50830:function(e,t,i){i.d(t,{T:function(){return o}});const o={URLS:{FAQ:"https://walletconnect.com/faq"}}},67732:function(e,t,i){i(71201)},71201:function(e,t,i){var o=i(81238),a=i(74186);const r=o.JW`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var n=i(83761);const s=o.JW`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;i(3886),i(15144);var l=i(76046),c=i(48317),u=o.AH`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,d=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let p=class extends o.WF{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:s,md:n.a,lg:r},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset["round"]="true",this.style.cssText="\n      --local-width: var(--wui-spacing-3xl);\n      --local-height: var(--wui-spacing-3xl);\n      --local-icon-size: var(--wui-spacing-l);\n    "):this.style.cssText=`\n\n      --local-path: var(--wui-path-network-${this.size});\n      --local-width:  var(--wui-width-network-${this.size});\n      --local-height:  var(--wui-height-network-${this.size});\n      --local-icon-size:  var(--wui-icon-size-network-${this.size});\n    `,o.qy`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:o.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};p.styles=[l.W5,u],d([(0,a.MZ)()],p.prototype,"size",void 0),d([(0,a.MZ)()],p.prototype,"name",void 0),d([(0,a.MZ)({type:Object})],p.prototype,"networkImagesBySize",void 0),d([(0,a.MZ)()],p.prototype,"imageSrc",void 0),d([(0,a.MZ)({type:Boolean})],p.prototype,"selected",void 0),d([(0,a.MZ)({type:Boolean})],p.prototype,"round",void 0),p=d([(0,c.E)("wui-network-image")],p)},77929:function(e,t,i){var o=i(81238),a=i(74186),r=(i(3886),i(15144),i(7892),i(80894),i(76046)),n=i(42849),s=i(48317),l=o.AH`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`,c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends o.WF{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return o.qy`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${n.Z.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?o.qy`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:o.qy`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};u.styles=[r.W5,r.fD,l],c([(0,a.MZ)()],u.prototype,"tokenName",void 0),c([(0,a.MZ)()],u.prototype,"tokenImageUrl",void 0),c([(0,a.MZ)({type:Number})],u.prototype,"tokenValue",void 0),c([(0,a.MZ)()],u.prototype,"tokenAmount",void 0),c([(0,a.MZ)()],u.prototype,"tokenCurrency",void 0),c([(0,a.MZ)({type:Boolean})],u.prototype,"clickable",void 0),u=c([(0,s.E)("wui-list-token")],u)},78932:function(e,t,i){i.d(t,{Up:function(){return g}});i(44114);var o=i(80955),a=i(58843),r=i(37903),n=i(25638),s=i(31843),l=i(80347),c=i(14210),u=i(81753),d=i(81653);function p(){try{return u.w.returnOpenHref(`${o.o.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch(e){throw new Error("Could not open social popup")}}async function h(){l.I.push("ConnectingFarcaster");const e=n.a.getAuthConnector();if(e&&!a.U.state.farcasterUrl)try{const{url:t}=await e.provider.getFarcasterUri();a.U.setFarcasterUrl(t,r.W.state.activeChain)}catch(t){l.I.goBack(),c.P.showError(t)}}async function w(e){l.I.push("ConnectingSocial");const t=n.a.getAuthConnector();let i=null;try{const o=setTimeout((()=>{throw new Error("Social login timed out. Please try again.")}),45e3);if(t&&e){if(u.w.isTelegram()||(i=p()),i)a.U.setSocialWindow(i,r.W.state.activeChain);else if(!u.w.isTelegram())throw new Error("Could not create social popup");const{uri:n}=await t.provider.getSocialRedirectUri({provider:e});if(!n)throw i?.close(),new Error("Could not fetch the social redirect uri");if(i&&(i.location.href=n),u.w.isTelegram()){d.i.setTelegramSocialProvider(e);const t=u.w.formatTelegramSocialLoginUrl(n);u.w.openHref(t,"_top")}clearTimeout(o)}}catch(o){i?.close(),c.P.showError(o?.message)}}async function g(e){a.U.setSocialProvider(e,r.W.state.activeChain),s.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),"farcaster"===e?await h():await w(e)}},83761:function(e,t,i){i.d(t,{a:function(){return a}});var o=i(81238);const a=o.JW`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`},95076:function(e,t,i){var o=i(81238),a=i(74186),r=(i(3886),i(15144),i(7892),i(76046)),n=i(48317),s=o.AH`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`,l=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const e="sm"===this.size?"small-600":"paragraph-600";return o.qy`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?o.qy`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};c.styles=[r.W5,r.fD,s],l([(0,a.MZ)()],c.prototype,"variant",void 0),l([(0,a.MZ)()],c.prototype,"imageSrc",void 0),l([(0,a.MZ)({type:Boolean})],c.prototype,"disabled",void 0),l([(0,a.MZ)()],c.prototype,"icon",void 0),l([(0,a.MZ)()],c.prototype,"size",void 0),l([(0,a.MZ)()],c.prototype,"text",void 0),c=l([(0,n.E)("wui-chip-button")],c)},98163:function(e,t,i){var o=i(81238),a=i(74186),r=(i(7892),i(76046)),n=i(48317),s=o.AH`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
    transition: background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color;
  }
`,l=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.text=""}render(){return o.qy`${this.template()}`}template(){return this.text?o.qy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};c.styles=[r.W5,s],l([(0,a.MZ)()],c.prototype,"text",void 0),c=l([(0,n.E)("wui-separator")],c)},98961:function(e,t,i){i(39650)}}]);