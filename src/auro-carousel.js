// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit-element";

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
    this.scrollDistance = 100;
    this.chevronRightSvg = this.getIconAsHtml(chevronRightIcon)
    this.chevronLeftSvg = this.getIconAsHtml(chevronLeftIcon)
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

  firstUpdated() {
    this.carousel = this.renderRoot.querySelector('.carousel');
  }

  scrollCarousel(num) {
    this.carousel.scrollLeft += num;
  }

  getIconAsHtml(icon) {
    let dom = new DOMParser().parseFromString(icon.svg, 'text/html');
    return dom.body.firstChild;
  }

  render() {
    return html`
      ${iconProperties}
      <div class="carousel">
        <button @click=${() => this.scrollCarousel(-1 * this.scrollDistance)} class="button
          button--left">${this.chevronLeftSvg}</button>
        <div class="container">
          <slot>
          </slot>
        </div>
        <button @click=${() => this.scrollCarousel(this.scrollDistance)}
          class="button button--right">${this.chevronRightSvg}</button>
      
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-carousel")) {
  customElements.define("auro-carousel", AuroCarousel);
}
