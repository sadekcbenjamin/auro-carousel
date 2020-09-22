// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import { unsafeSVG } from "lit-html/directives/unsafe-svg";
import { ifDefined } from "lit-html/directives/if-defined";

import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";
import iconProperties from '@alaskaairux/icons/dist/tokens/CSSTokenProperties-css.js';
import chevronRightIcon from "@alaskaairux/icons/dist/icons/interface/chevron-right_es6";
import chevronLeftIcon from "@alaskaairux/icons/dist/icons/interface/chevron-left_es6";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-carousel displays a group of elements in a scrollable container.
 *
 * @attr {Number} scrollDistance - How many pixels to scroll the carousel when the shoulder buttons are triggered.
 * @attr {String} label - The accessible name for the carousel. Logs a console warning if not set.
 *
 * @slot - the elements in the carousel
 */

class AuroCarousel extends LitElement {
  constructor() {
    super();
    this.scrollDistance = 300;

    /**
     * @private
     * Whether or not the carousel is scrolled to the start.
     */
    this.scrolledToStart = false;

    /**
     * @private
     * Whether or not the carousel is scrolled to the end.
     */
    this.scrolledToEnd = false;
  }

  static get properties() {
    return {
      scrollDistance: {
        type: Number,
        reflect: true
      },
      label: { type: String },
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  firstUpdated() {
    this.carousel = this.renderRoot.querySelector('.carousel');

    if (!this.label) {
      // eslint-disable-next-line no-console
      console.warn('Label should be provided to auro-carousel for carousel to be accessible');
    }

    this.setScrollFlags(false);
    this.setUpIntersectionObserver();
    this.setUpResizeObserver();
  }

  /**
   * Internal method to determine if the screen is small.
   * @private
   * @returns {boolean} true if the screen is small
   */
  isSmallScreen() {
    const breakpointDetector = this.renderRoot.querySelector('.breakpoint-detector');
    // CSS sets content of pseudoelement based on media query
    // This prevents duplicating the breakpoints in CSS and JS
    const currentBreakpoint = window.
      getComputedStyle(breakpointDetector, ':before').
      getPropertyValue('content').
      replace(/"/gu, '');

    return currentBreakpoint !== 'sm';
  }

  /**
   * Scrolls the carousel by the given amount.
   * @param {number} num - the number of pixels to scroll the carousel by. Positive scrolls to the
   * right, negative scrolls to the left.
   * @return {void}
   */
  scrollCarousel(num) {
    this.carousel.scrollLeft += num;
  }

  /**
   * Internal method to set scrolledToStart and scrolledToEnd
   * @private
   * @param {boolean} autofocus - true if the first or last element should be focused when scrolled to
   * start or end, respectively.
   * @return {void}
   */
  setScrollFlags(autofocus) {
    const { scrollLeft, scrollWidth, clientWidth } = this.carousel;

    this.scrolledToStart = scrollLeft <= 0;
    this.scrolledToEnd = scrollLeft >= scrollWidth - clientWidth;

    // scrolling to the start or end makes the left/right buttons disappear
    // when this happens, focus the first or last slotted element, respectively
    if (autofocus && (this.scrolledToStart || this.scrolledToEnd)) {
      if (this.scrolledToStart) {
        this.firstElementChild.focus();
      } else {
        this.lastElementChild.focus();
      }
    }

    this.requestUpdate();
  }

  /**
   * Internal method to set up the intersection observer. When carousel elements are out of view,
   * we remove it from the tab order and hide it from assistive tech. When they come into view, we
   * reverse our changes.
   * @private
   * @return {void}
   */
  setUpIntersectionObserver() {
    const options = {
      root: this.carousel,
      threshold: 0.8
    };

    // We only manage tabIndex/aria-hidden in browsers that support IntersectionObserver (excludes IE)
    // and medium or larger screen sizes. The left/right buttons do not show on small screens so there
    // is not a way for screen reader users to scroll the carousel.
    if ('IntersectionObserver' in window && !this.isSmallScreen()) {
      const callback = (entries) => {
        // when the slotted element becomes visible, we want it to be tabbable and visible to assistive tech
        // otherwise, we remove it from the tab order and set aria-hidden
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.removeAttribute('tabindex');
            entry.target.removeAttribute('aria-hidden');
          } else {
            entry.target.setAttribute('tabindex', '-1');
            entry.target.setAttribute('aria-hidden', true);
          }
        })
      }

      this.intersectionObserver = new IntersectionObserver(callback, options);
      this.observeChildren();
    }
  }

  /**
   * Internal method to set up the resize observer. When an element is resized, we update
   * the scroll flags so the buttons are shown/hidden appropriately.
   * @private
   * @return {void}
   */
  setUpResizeObserver() {
    if ('ResizeObserver' in window) {
      // Update scrollflags when a child's size changes (e.g., a custom element becomes
      // defined or an image is loaded)
      this.resizeObserver = new ResizeObserver(() => this.setScrollFlags());
      Array.from(this.children).forEach((element) => {
        this.resizeObserver.observe(element);
      });
    }
  }

  /**
   * Internal method to observe the components children with IntersectionObserver.
   * @private
   * @return {void}
   */
  observeChildren() {
    Array.from(this.children).forEach((element) => {
      this.intersectionObserver.observe(element);
    })
  }

  /**
   * Internal method to handle slot change. When the slot contents change, we need to re-observe the
   * slotted elements.
   * @private
   * @return {void}
   */
  handleSlotChange() {
    this.setScrollFlags(false);
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.observeChildren();
    }
  }

  /**
   * Internal method to handle clicks on the shoulder buttons.
   * @private
   * @param {boolean} scrollRight - whether to scroll the carousel right or left.
   * @return {void}
   */
  handleClick(scrollRight) {
    if (scrollRight) {
      this.scrollCarousel(this.scrollDistance)
    } else {
      this.scrollCarousel(-1 * this.scrollDistance);
    }
  }

  render() {
    const carouselClassMap = {
      "carousel": true,
      "carousel--scrolledToStart": this.scrolledToStart,
      "carousel--scrolledToEnd": this.scrolledToEnd
    }

    return html`
      ${iconProperties}
      <div class="breakpoint-detector"></div>
      <div role="group" 
        aria-label="${ifDefined(this.label)}" 
        aria-roledescription="carousel"
        class="${classMap(carouselClassMap)}" 
        @scroll=${() => this.setScrollFlags(true)} >
        <button @click=${() => this.handleClick(false)} class="button button--left">
          ${unsafeSVG(chevronLeftIcon.svg)}<span class="util_displayHiddenVisually">Scroll left</span>
        </button>
        <div class="container">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
        <button @click=${() => this.handleClick(true)} class="button button--right">
          ${unsafeSVG(chevronRightIcon.svg)}<span class="util_displayHiddenVisually">Scroll right</span>
        </button>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-carousel")) {
  customElements.define("auro-carousel", AuroCarousel);
}
