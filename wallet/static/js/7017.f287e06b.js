"use strict";(self["webpackChunkwallet_vue"]=self["webpackChunkwallet_vue"]||[]).push([[7017],{3198:function(e,t,a){var i=a(81238),o=a(74186),r=(a(3886),a(76046)),n=a(48317),s=i.AH`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,c=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let l=class extends i.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t="lg"===this.size,a="xl"===this.size,o=t?"12%":"16%",r=t?"xxs":a?"s":"3xl",n="gray"===this.background,s="opaque"===this.background,c="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:n&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||n?"100%":o};\n       --local-border-radius: var(--wui-border-radius-${r});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,i.qy` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};l.styles=[r.W5,r.fD,s],c([(0,o.MZ)()],l.prototype,"size",void 0),c([(0,o.MZ)()],l.prototype,"backgroundColor",void 0),c([(0,o.MZ)()],l.prototype,"iconColor",void 0),c([(0,o.MZ)()],l.prototype,"iconSize",void 0),c([(0,o.MZ)()],l.prototype,"background",void 0),c([(0,o.MZ)({type:Boolean})],l.prototype,"border",void 0),c([(0,o.MZ)()],l.prototype,"borderColor",void 0),c([(0,o.MZ)()],l.prototype,"icon",void 0),l=c([(0,n.E)("wui-icon-box")],l)},5069:function(e,t,a){var i=a(81238),o=a(74186),r=(a(3886),a(76046)),n=a(48317),s=i.AH`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,c=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let l=class extends i.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",t="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`\n    --local-border-radius: var(${e});\n    --local-padding: var(${t});\n`,i.qy`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};l.styles=[r.W5,r.fD,r.ck,s],c([(0,o.MZ)()],l.prototype,"size",void 0),c([(0,o.MZ)({type:Boolean})],l.prototype,"disabled",void 0),c([(0,o.MZ)()],l.prototype,"icon",void 0),c([(0,o.MZ)()],l.prototype,"iconColor",void 0),l=c([(0,n.E)("wui-icon-link")],l)},5589:function(e,t,a){a(3886)},13848:function(e,t,a){var i=a(81238),o=a(74186),r=(a(3886),a(76046)),n=a(48317),s=i.AH`
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
`,c=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let l=class extends i.WF{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return i.qy`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};l.styles=[r.W5,r.fD,s],c([(0,o.MZ)()],l.prototype,"text",void 0),c([(0,o.MZ)()],l.prototype,"icon",void 0),l=c([(0,n.E)("wui-icon-button")],l)},15144:function(e,t,a){var i=a(81238),o=a(74186),r=a(76046),n=a(48317),s=i.AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,c=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let l=class extends i.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,i.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[r.W5,r.ck,s],c([(0,o.MZ)()],l.prototype,"src",void 0),c([(0,o.MZ)()],l.prototype,"alt",void 0),c([(0,o.MZ)()],l.prototype,"size",void 0),l=c([(0,n.E)("wui-image")],l)},32923:function(e,t,a){var i=a(81238),o=a(74186),r=a(76046),n=a(48317),s=i.AH`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,c=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let l=class extends i.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset["size"]=this.size,i.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};l.styles=[r.W5,s],c([(0,o.MZ)()],l.prototype,"color",void 0),c([(0,o.MZ)()],l.prototype,"size",void 0),l=c([(0,n.E)("wui-loading-spinner")],l)},40089:function(e,t,a){a(50278)},50278:function(e,t,a){var i=a(81238),o=a(74186),r=(a(3886),a(15144),a(80894),a(76046)),n=a(48317),s=(a(3198),i.AH`
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
`),c=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let l=class extends i.WF{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${e});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset["walletIcon"]=this.walletIcon),i.qy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?i.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?i.qy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:i.qy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};l.styles=[r.fD,r.W5,s],c([(0,o.MZ)()],l.prototype,"size",void 0),c([(0,o.MZ)()],l.prototype,"name",void 0),c([(0,o.MZ)()],l.prototype,"imageSrc",void 0),c([(0,o.MZ)()],l.prototype,"walletIcon",void 0),c([(0,o.MZ)({type:Boolean})],l.prototype,"installed",void 0),c([(0,o.MZ)()],l.prototype,"badgeSize",void 0),l=c([(0,n.E)("wui-wallet-image")],l)},61127:function(e,t,a){a(15144)},66285:function(e,t,a){var i=a(81238),o=a(74186),r=(a(32923),a(7892),a(76046)),n=a(48317),s=i.AH`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
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

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,c=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};const l={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},u={lg:"paragraph-600",md:"small-600"},d={lg:"md",md:"md"};let h=class extends i.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const e=this.textVariant??u[this.size];return i.qy`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const e=d[this.size],t=this.disabled?l["disabled"]:l[this.variant];return i.qy`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return i.qy``}};h.styles=[r.W5,r.fD,s],c([(0,o.MZ)()],h.prototype,"size",void 0),c([(0,o.MZ)({type:Boolean})],h.prototype,"disabled",void 0),c([(0,o.MZ)({type:Boolean})],h.prototype,"fullWidth",void 0),c([(0,o.MZ)({type:Boolean})],h.prototype,"loading",void 0),c([(0,o.MZ)()],h.prototype,"variant",void 0),c([(0,o.MZ)({type:Boolean})],h.prototype,"hasIconLeft",void 0),c([(0,o.MZ)({type:Boolean})],h.prototype,"hasIconRight",void 0),c([(0,o.MZ)()],h.prototype,"borderRadius",void 0),c([(0,o.MZ)()],h.prototype,"textVariant",void 0),h=c([(0,n.E)("wui-button")],h)},67732:function(e,t,a){a(71201)},67756:function(e,t,a){var i=a(81238),o=a(74186),r=a(76046),n=a(48317),s=i.AH`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,c=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let l=class extends i.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36,a=t-e,o=116+a,r=245+a,n=360+1.75*a;return i.qy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${r}"
          stroke-dashoffset=${n}
        />
      </svg>
    `}};l.styles=[r.W5,s],c([(0,o.MZ)({type:Number})],l.prototype,"radius",void 0),l=c([(0,n.E)("wui-loading-thumbnail")],l)},71201:function(e,t,a){var i=a(81238),o=a(74186);const r=i.JW`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var n=a(83761);const s=i.JW`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;a(3886),a(15144);var c=a(76046),l=a(48317),u=i.AH`
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
`,d=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let h=class extends i.WF{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:s,md:n.a,lg:r},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset["round"]="true",this.style.cssText="\n      --local-width: var(--wui-spacing-3xl);\n      --local-height: var(--wui-spacing-3xl);\n      --local-icon-size: var(--wui-spacing-l);\n    "):this.style.cssText=`\n\n      --local-path: var(--wui-path-network-${this.size});\n      --local-width:  var(--wui-width-network-${this.size});\n      --local-height:  var(--wui-height-network-${this.size});\n      --local-icon-size:  var(--wui-icon-size-network-${this.size});\n    `,i.qy`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?i.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:i.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};h.styles=[c.W5,u],d([(0,o.MZ)()],h.prototype,"size",void 0),d([(0,o.MZ)()],h.prototype,"name",void 0),d([(0,o.MZ)({type:Object})],h.prototype,"networkImagesBySize",void 0),d([(0,o.MZ)()],h.prototype,"imageSrc",void 0),d([(0,o.MZ)({type:Boolean})],h.prototype,"selected",void 0),d([(0,o.MZ)({type:Boolean})],h.prototype,"round",void 0),h=d([(0,l.E)("wui-network-image")],h)},79720:function(e,t,a){a(66285)},81502:function(e,t,a){a(32923)},83761:function(e,t,a){a.d(t,{a:function(){return o}});var i=a(81238);const o=i.JW`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`},97186:function(e,t,a){var i=a(81238),o=a(74186),r=a(85354),n=(a(3886),a(15144),a(32923),a(7892),a(80894),a(76046)),s=a(48317),c=(a(3198),i.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`),l=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let u=class extends i.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return i.qy`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${(0,r.J)(this.iconVariant)}
        tabindex=${(0,r.J)(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return i.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return i.qy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",a=this.iconSize?this.iconSize:t;return i.qy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${a}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?i.qy`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:i.qy``}chevronTemplate(){return this.chevron?i.qy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};u.styles=[n.W5,n.fD,c],l([(0,o.MZ)()],u.prototype,"icon",void 0),l([(0,o.MZ)()],u.prototype,"iconSize",void 0),l([(0,o.MZ)()],u.prototype,"tabIdx",void 0),l([(0,o.MZ)()],u.prototype,"variant",void 0),l([(0,o.MZ)()],u.prototype,"iconVariant",void 0),l([(0,o.MZ)({type:Boolean})],u.prototype,"disabled",void 0),l([(0,o.MZ)()],u.prototype,"imageSrc",void 0),l([(0,o.MZ)()],u.prototype,"alt",void 0),l([(0,o.MZ)({type:Boolean})],u.prototype,"chevron",void 0),l([(0,o.MZ)({type:Boolean})],u.prototype,"loading",void 0),u=l([(0,s.E)("wui-list-item")],u)},98163:function(e,t,a){var i=a(81238),o=a(74186),r=(a(7892),a(76046)),n=a(48317),s=i.AH`
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
`,c=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let l=class extends i.WF{constructor(){super(...arguments),this.text=""}render(){return i.qy`${this.template()}`}template(){return this.text?i.qy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};l.styles=[r.W5,s],c([(0,o.MZ)()],l.prototype,"text",void 0),l=c([(0,n.E)("wui-separator")],l)},99398:function(e,t,a){a.r(t),a.d(t,{W3mPayLoadingView:function(){return G},W3mPayView:function(){return j},getExchanges:function(){return Y},getIsPaymentInProgress:function(){return J},getPayError:function(){return K},getPayResult:function(){return F},openPay:function(){return H}});a(44114),a(18111),a(20116),a(7588),a(61701),a(58376),a(33883);var i=a(60491),o=(a(80705),a(17887)),r=(a(77017),a(68904)),n=a(58843),s=a(37903),c=a(96577),l=a(81753),u=a(14210),d=a(78134),h=a(68237),p=(a(79720),a(5507),a(5589),a(13848),a(5069),a(61127),a(97186),a(81502),a(67732),a(98163),a(17651),a(40089),a(69983)),g=a(28356),w=a(59761),v=a(80955),y=a(80347),b=a(66813);const f={INVALID_PAYMENT_CONFIG:"INVALID_PAYMENT_CONFIG",INVALID_RECIPIENT:"INVALID_RECIPIENT",INVALID_ASSET:"INVALID_ASSET",INVALID_AMOUNT:"INVALID_AMOUNT",UNKNOWN_ERROR:"UNKNOWN_ERROR",UNABLE_TO_INITIATE_PAYMENT:"UNABLE_TO_INITIATE_PAYMENT",INVALID_CHAIN_NAMESPACE:"INVALID_CHAIN_NAMESPACE",GENERIC_PAYMENT_ERROR:"GENERIC_PAYMENT_ERROR",UNABLE_TO_GET_EXCHANGES:"UNABLE_TO_GET_EXCHANGES",ASSET_NOT_SUPPORTED:"ASSET_NOT_SUPPORTED",UNABLE_TO_GET_PAY_URL:"UNABLE_TO_GET_PAY_URL",UNABLE_TO_GET_BUY_STATUS:"UNABLE_TO_GET_BUY_STATUS"},m={[f.INVALID_PAYMENT_CONFIG]:"Invalid payment configuration",[f.INVALID_RECIPIENT]:"Invalid recipient address",[f.INVALID_ASSET]:"Invalid asset specified",[f.INVALID_AMOUNT]:"Invalid payment amount",[f.UNKNOWN_ERROR]:"Unknown payment error occurred",[f.UNABLE_TO_INITIATE_PAYMENT]:"Unable to initiate payment",[f.INVALID_CHAIN_NAMESPACE]:"Invalid chain namespace",[f.GENERIC_PAYMENT_ERROR]:"Unable to process payment",[f.UNABLE_TO_GET_EXCHANGES]:"Unable to get exchanges",[f.ASSET_NOT_SUPPORTED]:"Asset not supported by the selected exchange",[f.UNABLE_TO_GET_PAY_URL]:"Unable to get payment URL",[f.UNABLE_TO_GET_BUY_STATUS]:"Unable to get buy status"};class x extends Error{get message(){return m[this.code]}constructor(e,t){super(m[e]),this.name="AppKitPayError",this.code=e,this.details=t,Error.captureStackTrace&&Error.captureStackTrace(this,x)}}var I=a(64529);const E="https://rpc.walletconnect.org/v1/json-rpc";class N extends Error{}function A(){const e=I.H.getSnapshot().projectId;return`${E}?projectId=${e}`}async function P(e,t){const a=A(),i={jsonrpc:"2.0",id:1,method:e,params:t},o=await fetch(a,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}),r=await o.json();if(r.error)throw new N(r.error.message);return r}async function k(e){const t=await P("reown_getExchanges",e);return t.result}async function _(e){const t=await P("reown_getExchangePayUrl",e);return t.result}async function T(e){const t=await P("reown_getExchangeBuyStatus",e);return t.result}const C={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"}};function $(e,t){const{chainNamespace:a,chainId:i}=w.C.parseCaipNetworkId(e),o=C[a];if(!o)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${a}`);let r=o.native.assetNamespace,n=o.native.assetReference;"native"!==t&&(r=o.defaultTokenNamespace,n=t);const s=`${a}:${i}`;return`${s}/${r}:${n}`}var R=a(48153);async function S(e){const{paymentAssetNetwork:t,activeCaipNetwork:a,approvedCaipNetworkIds:i,requestedCaipNetworks:o}=e,r=l.w.sortRequestedNetworks(i,o),n=r.find((e=>e.caipNetworkId===t));if(!n)throw new x(f.INVALID_PAYMENT_CONFIG);if(n.caipNetworkId===a.caipNetworkId)return;const c=s.W.getNetworkProp("supportsAllNetworks",n.chainNamespace),u=i?.includes(n.caipNetworkId)||c;if(!u)throw new x(f.INVALID_PAYMENT_CONFIG);try{await s.W.switchActiveNetwork(n)}catch(d){throw new x(f.GENERIC_PAYMENT_ERROR,d)}}async function z(e,t,a){if(t!==v.o.CHAIN.EVM)throw new x(f.INVALID_CHAIN_NAMESPACE);const i="string"===typeof e.amount?parseFloat(e.amount):e.amount;if(isNaN(i))throw new x(f.INVALID_PAYMENT_CONFIG);const o=e.metadata?.decimals??18,r=d.x.parseUnits(i.toString(),o);if("bigint"!==typeof r)throw new x(f.GENERIC_PAYMENT_ERROR);if(t!==v.o.CHAIN.EVM)throw new x(f.INVALID_CHAIN_NAMESPACE);const n=await d.x.sendTransaction({chainNamespace:t,to:e.recipient,address:a,value:r,data:"0x"});return n??void 0}async function M(e,t){const a=e.asset,i=e.recipient,o=Number(e.metadata.decimals),r=d.x.parseUnits(e.amount.toString(),o);if(void 0===r)throw new x(f.GENERIC_PAYMENT_ERROR);const n=await d.x.writeContract({fromAddress:t,tokenAddress:a,args:[i,r],method:"transfer",abi:R.v.getERC20Abi(a),chainNamespace:v.o.CHAIN.EVM});return n??void 0}const O=0,L=(0,p.BX)({paymentAsset:{network:"eip155:1",recipient:"0x0",asset:"0x0",amount:0,metadata:{name:"0x0",symbol:"0x0",decimals:0}},isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0}),W={state:L,subscribe(e){return(0,p.B1)(L,(()=>e(L)))},subscribeKey(e,t){return(0,g.u$)(L,e,t)},async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.subscribeEvents(),L.isConfigured=!0,await c.W.open({view:"Pay"})},resetState(){L.paymentAsset={network:"eip155:1",recipient:"0x0",asset:"0x0",amount:0,metadata:{name:"0x0",symbol:"0x0",decimals:0}},L.isConfigured=!1,L.error=null,L.isPaymentInProgress=!1,L.isLoading=!1,L.currentPayment=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new x(f.INVALID_PAYMENT_CONFIG);try{L.paymentAsset=e.paymentAsset,L.openInNewTab=e.openInNewTab??!0,L.redirectUrl=e.redirectUrl,L.payWithExchange=e.payWithExchange,L.error=null}catch(t){throw new x(f.INVALID_PAYMENT_CONFIG,t.message)}},getPaymentAsset(){return L.paymentAsset},getExchanges(){return L.exchanges},async fetchExchanges(){try{L.isLoading=!0;const e=await k({page:O});L.exchanges=e.exchanges.slice(0,2)}catch(e){throw u.P.showError(m.UNABLE_TO_GET_EXCHANGES),new x(f.UNABLE_TO_GET_EXCHANGES)}finally{L.isLoading=!1}},async getAvailableExchanges(e=O){try{const t=await k({page:e});return t}catch(t){throw new x(f.UNABLE_TO_GET_EXCHANGES)}},async getPayUrl(e,t){try{const a=Number(t.amount),i=await _({exchangeId:e,asset:$(t.network,t.asset),amount:a.toString(16),recipient:`${t.network}:${t.recipient}`});return i}catch(a){if(a instanceof Error&&a.message.includes("is not supported"))throw new x(f.ASSET_NOT_SUPPORTED);throw new Error(a.message)}},async openPayUrl(e,t,a=!0){try{const i=await this.getPayUrl(e,t);if(!i)throw new x(f.UNABLE_TO_GET_PAY_URL);const o=a?"_blank":"_self";return l.w.openHref(i.url,o),i}catch(i){throw L.error=i instanceof x?i.message:m.GENERIC_PAYMENT_ERROR,new x(f.UNABLE_TO_GET_PAY_URL)}},subscribeEvents(){L.isConfigured||(b.A.subscribeProviders((async e=>{const t=s.W.state.activeChain,a=b.A.getProvider(t);a&&await this.handlePayment()})),n.U.subscribeKey("caipAddress",(async e=>{e&&await this.handlePayment()})))},async handlePayment(){L.currentPayment={type:"wallet"};const e=n.U.state.caipAddress;if(!e)return;const{chainId:t,address:a}=w.C.parseCaipAddress(e),i=s.W.state.activeChain;if(!a||!t||!i)return;const o=b.A.getProvider(i);if(!o)return;const r=s.W.state.activeCaipNetwork;if(r&&!L.isPaymentInProgress)try{L.isPaymentInProgress=!0;const e=s.W.getAllRequestedCaipNetworks(),t=s.W.getAllApprovedCaipNetworkIds();switch(await S({paymentAssetNetwork:L.paymentAsset.network,activeCaipNetwork:r,approvedCaipNetworkIds:t,requestedCaipNetworks:e}),await c.W.open({view:"PayLoading"}),i){case v.o.CHAIN.EVM:"native"===L.paymentAsset.asset&&(L.currentPayment.result=await z(L.paymentAsset,i,a)),L.paymentAsset.asset.startsWith("0x")&&(L.currentPayment.result=await M(L.paymentAsset,a));break;default:throw new x(f.INVALID_CHAIN_NAMESPACE)}}catch(l){L.error=l instanceof x?l.message:m.GENERIC_PAYMENT_ERROR,u.P.showError(L.error)}finally{L.isPaymentInProgress=!1}},getExchangeById(e){return L.exchanges.find((t=>t.id===e))},validatePayConfig(e){const{paymentAsset:t}=e;if(!t)throw new x(f.INVALID_PAYMENT_CONFIG);if(!t.recipient)throw new x(f.INVALID_RECIPIENT);if(!t.asset)throw new x(f.INVALID_ASSET);if(!t.amount)throw new x(f.INVALID_AMOUNT)},handlePayWithWallet(){const e=n.U.state.caipAddress;if(!e)return void y.I.push("Connect");const{chainId:t,address:a}=w.C.parseCaipAddress(e),i=s.W.state.activeChain;a&&t&&i?this.handlePayment():y.I.push("Connect")},async handlePayWithExchange(e){try{L.currentPayment={type:"exchange",exchangeId:e},L.isPaymentInProgress=!0;const{network:t,asset:a,amount:i,recipient:o}=L.paymentAsset,r={network:t,asset:a,amount:i,recipient:o},n=await this.getPayUrl(e,r);if(!n)throw new x(f.UNABLE_TO_INITIATE_PAYMENT);return L.currentPayment.sessionId=n.sessionId,L.currentPayment.status="IN_PROGRESS",L.currentPayment.exchangeId=e,{url:n.url,openInNewTab:L.openInNewTab}}catch(t){return L.error=t instanceof x?t.message:m.GENERIC_PAYMENT_ERROR,L.isPaymentInProgress=!1,u.P.showError(L.error),null}},async getBuyStatus(e,t){try{const a=await T({sessionId:t,exchangeId:e});return a}catch(a){throw new x(f.UNABLE_TO_GET_BUY_STATUS)}},async updateBuyStatus(e,t){try{const a=await this.getBuyStatus(e,t);L.currentPayment&&(L.currentPayment.status=a.status,L.currentPayment.result=a.txHash),"SUCCESS"!==a.status&&"FAILED"!==a.status||(L.isPaymentInProgress=!1)}catch(a){throw new x(f.UNABLE_TO_GET_BUY_STATUS)}}};var U=i.AH`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  .token-display {
    padding: var(--wui-spacing-s) var(--wui-spacing-m);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-bg-125);
    margin-top: var(--wui-spacing-s);
    margin-bottom: var(--wui-spacing-s);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--wui-spacing-xs);
  }
`,D=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let j=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.amount="",this.tokenSymbol="",this.networkName="",this.exchanges=W.state.exchanges,this.isLoading=W.state.isLoading,this.loadingExchangeId=null,this.connectedWalletInfo=n.U.state.connectedWalletInfo,this.initializePaymentDetails(),this.unsubscribe.push(W.subscribeKey("exchanges",(e=>this.exchanges=e))),this.unsubscribe.push(W.subscribeKey("isLoading",(e=>this.isLoading=e))),this.unsubscribe.push(n.U.subscribe((e=>this.connectedWalletInfo=e.connectedWalletInfo))),W.fetchExchanges()}get isWalletConnected(){return"connected"===n.U.state.status}render(){return i.qy`
      <wui-flex flexDirection="column">
        <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
          ${this.renderPaymentHeader()}

          <wui-flex flexDirection="column" gap="s">
            <wui-flex flexDirection="column" gap="s">
              ${this.isWalletConnected?this.renderConnectedView():this.renderDisconnectedView()}
            </wui-flex>
            <wui-separator text="or"></wui-separator>
            ${this.renderExchangeOptions()}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}initializePaymentDetails(){const e=W.getPaymentAsset();this.networkName=e.network,this.tokenSymbol=e.metadata.symbol,this.amount=e.amount.toString()}renderPaymentHeader(){let e=this.networkName;if(this.networkName){const t=s.W.getAllRequestedCaipNetworks(),a=t.find((e=>e.caipNetworkId===this.networkName));a&&(e=a.name)}return i.qy`
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="large-700" color="fg-100">${this.amount||"0.0000"}</wui-text>
          <wui-flex class="token-display" alignItems="center" gap="xxs">
            <wui-text variant="paragraph-600" color="fg-100">
              ${this.tokenSymbol||"Unknown Asset"}
            </wui-text>
            ${e?i.qy`
                  <wui-text variant="small-500" color="fg-200"> on ${e} </wui-text>
                `:""}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderConnectedView(){const e=this.connectedWalletInfo?.name||"connected wallet";return i.qy`
      <wui-list-item
        @click=${this.onWalletPayment}
        ?chevron=${!0}
        data-testid="wallet-payment-option"
      >
        <wui-flex alignItems="center" gap="s">
          <wui-wallet-image
            size="sm"
            imageSrc=${(0,r.J)(this.connectedWalletInfo?.icon)}
            name=${(0,r.J)(this.connectedWalletInfo?.name)}
          ></wui-wallet-image>
          <wui-text variant="paragraph-500" color="inherit">Pay with ${e}</wui-text>
        </wui-flex>
      </wui-list-item>

      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="disconnect"
        @click=${this.onDisconnect}
        data-testid="disconnect-button"
        ?chevron=${!1}
      >
        <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
      </wui-list-item>
    `}renderDisconnectedView(){return i.qy`<wui-list-item
      variant="icon"
      iconVariant="overlay"
      icon="walletPlaceholder"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="paragraph-500" color="inherit">Pay from wallet</wui-text>
    </wui-list-item>`}renderExchangeOptions(){return this.isLoading?i.qy`<wui-flex justifyContent="center" alignItems="center">
        <wui-spinner size="md"></wui-spinner>
      </wui-flex>`:0===this.exchanges.length?i.qy`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-100">No exchanges available</wui-text>
      </wui-flex>`:this.exchanges.map((e=>i.qy`
        <wui-list-item
          @click=${()=>this.onExchangePayment(e.id)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          ?disabled=${null!==this.loadingExchangeId}
        >
          <wui-flex alignItems="center" gap="s">
            ${this.loadingExchangeId===e.id?i.qy`<wui-loading-spinner color="accent-100" size="md"></wui-loading-spinner>`:i.qy`<wui-wallet-image
                  size="sm"
                  imageSrc=${(0,r.J)(e.imageUrl)}
                  name=${e.name}
                ></wui-wallet-image>`}
            <wui-text flexGrow="1" variant="paragraph-500" color="inherit"
              >Pay with ${e.name} <wui-spinner size="sm" color="fg-200"></wui-spinner
            ></wui-text>
          </wui-flex>
        </wui-list-item>
      `))}onWalletPayment(){W.handlePayWithWallet()}async onExchangePayment(e){try{this.loadingExchangeId=e;const t=await W.handlePayWithExchange(e);t&&(await c.W.open({view:"PayLoading"}),l.w.openHref(t.url,t.openInNewTab?"_blank":"_self"))}catch(t){console.error("Failed to pay with exchange",t),u.P.showError("Failed to pay with exchange")}finally{this.loadingExchangeId=null}}async onDisconnect(e){e.stopPropagation();try{await d.x.disconnect(),c.W.close()}catch{console.error("Failed to disconnect"),u.P.showError("Failed to disconnect")}}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}};j.styles=U,D([(0,o.w)()],j.prototype,"amount",void 0),D([(0,o.w)()],j.prototype,"tokenSymbol",void 0),D([(0,o.w)()],j.prototype,"networkName",void 0),D([(0,o.w)()],j.prototype,"exchanges",void 0),D([(0,o.w)()],j.prototype,"isLoading",void 0),D([(0,o.w)()],j.prototype,"loadingExchangeId",void 0),D([(0,o.w)()],j.prototype,"connectedWalletInfo",void 0),j=D([(0,h.EM)("w3m-pay-view")],j);var V=a(19349),Z=(a(67756),i.AH`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }
`),B=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};const q=4e3;let G=class extends i.WF{constructor(){super(),this.loadingMessage="",this.subMessage="",this.paymentState="in-progress",this.paymentState=W.state.isPaymentInProgress?"in-progress":"completed",this.updateMessages(),this.setupSubscription(),this.setupExchangeSubscription()}disconnectedCallback(){clearInterval(this.exchangeSubscription)}render(){return i.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center"> ${this.getStateIcon()} </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            ${this.loadingMessage}
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            ${this.subMessage}
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}updateMessages(){switch(this.paymentState){case"completed":this.loadingMessage="Payment completed",this.subMessage="Your transaction has been successfully processed";break;case"error":this.loadingMessage="Payment failed",this.subMessage="There was an error processing your transaction";break;case"in-progress":default:"exchange"===W.state.currentPayment?.type?(this.loadingMessage="Payment initiated",this.subMessage="Please complete the payment on the exchange"):(this.loadingMessage="Awaiting payment confirmation",this.subMessage="Please confirm the payment transaction in your wallet");break}}getStateIcon(){switch(this.paymentState){case"completed":return this.successTemplate();case"error":return this.errorTemplate();case"in-progress":default:return this.loaderTemplate()}}setupExchangeSubscription(){"exchange"===W.state.currentPayment?.type&&(this.exchangeSubscription=setInterval((async()=>{const e=W.state.currentPayment?.exchangeId,t=W.state.currentPayment?.sessionId;e&&t&&(await W.updateBuyStatus(e,t),"SUCCESS"===W.state.currentPayment?.status&&clearInterval(this.exchangeSubscription))}),q))}setupSubscription(){W.subscribeKey("isPaymentInProgress",(e=>{e||"in-progress"!==this.paymentState||(W.state.error||!W.state.currentPayment?.result?this.paymentState="error":this.paymentState="completed",this.updateMessages(),setTimeout((()=>{"disconnected"!==d.x.state.status&&c.W.close()}),3e3))})),W.subscribeKey("error",(e=>{e&&"in-progress"===this.paymentState&&(this.paymentState="error",this.updateMessages())}))}loaderTemplate(){const e=V.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return i.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}successTemplate(){return i.qy`<wui-icon size="xl" color="success-100" name="checkmark"></wui-icon>`}errorTemplate(){return i.qy`<wui-icon size="xl" color="error-100" name="close"></wui-icon>`}};async function H(e){return W.handleOpenPay(e)}function Y(){return W.getExchanges()}function F(){return W.state.currentPayment?.result}function K(){return W.state.error}function J(){return W.state.isPaymentInProgress}G.styles=Z,B([(0,o.w)()],G.prototype,"loadingMessage",void 0),B([(0,o.w)()],G.prototype,"subMessage",void 0),B([(0,o.w)()],G.prototype,"paymentState",void 0),G=B([(0,h.EM)("w3m-pay-loading-view")],G)}}]);