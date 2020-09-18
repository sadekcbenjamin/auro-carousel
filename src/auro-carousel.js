// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map";

import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";
import iconProperties from '@alaskaairux/icons/dist/tokens/CSSTokenProperties-css.js';
import chevronRightIcon from "@alaskaairux/icons/dist/icons/interface/chevron-right_es6";
import chevronLeftIcon from "@alaskaairux/icons/dist/icons/interface/chevron-left_es6";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-carousel provides users a way to ...
 *
 * @attr {String} cssClass - Applies designated CSS class to DOM element.
 */

class AuroCarousel extends LitElement {
  constructor() {
    super();
    this.defaultScrollDistance = 300;
    this.scrollDistance = this.defaultScrollDistance;
    this.chevronRightSvg = this.getIconAsHtml(chevronRightIcon)
    this.chevronLeftSvg = this.getIconAsHtml(chevronLeftIcon)
    this.scrolledToStart = false;
    this.scrolledToEnd = false;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      scrollDistance: { type: Number },
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  async firstUpdated() {
    this.carousel = this.renderRoot.querySelector('.carousel');

    // if we have custom elements in the slot, wait for them to be defined
    // otherwise, scrollWidth will be inaccurate since the slotted children have not been rendered
    const slot = this.renderRoot.querySelector('slot');
    const slottedCustomElementNames = slot.assignedElements()
      .map(node => node.tagName.toLowerCase())
      .filter(name => name.includes('-'));
    const customElementNamesDeduped = [... new Set(slottedCustomElementNames)];
    await Promise.all(customElementNamesDeduped.map(name => customElements.whenDefined(name)));
    this.setScrollFlags();
  }

  scrollCarousel(num) {
    this.carousel.scrollLeft += num;
  }

  setScrollFlags() {
    const { scrollLeft, scrollWidth, clientWidth } = this.carousel;
    this.scrolledToStart = scrollLeft <= 10;
    this.scrolledToEnd = scrollLeft === scrollWidth - clientWidth;
    this.requestUpdate();
  }

  getIconAsHtml(icon) {
    let dom = new DOMParser().parseFromString(icon.svg, 'text/html');
    return dom.body.firstChild;
  }

  render() {
    const carouselClassMap = {
      "carousel": true,
      "carousel--scrolledToStart": this.scrolledToStart,
      "carousel--scrolledToEnd": this.scrolledToEnd
    }

    return html`
      ${iconProperties}
      <div class="${classMap(carouselClassMap)}" @scroll=${this.setScrollFlags}>
        <button @click=${() => this.scrollCarousel(-1 * this.scrollDistance)} class="button
          button--left">${this.chevronLeftSvg}<span class="util_displayHiddenVisually">Move left</span></button>
        <div class="container">
          <slot @slotchange=${this.setScrollFlags}>
          </slot>
        </div>
        <button @click=${() => this.scrollCarousel(this.scrollDistance)}
          class="button button--right">${this.chevronRightSvg}<span class="util_displayHiddenVisually">Move
            right</span></button>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-carousel")) {
  customElements.define("auro-carousel", AuroCarousel);
}
