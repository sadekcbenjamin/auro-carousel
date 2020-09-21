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
 * auro-carousel provides users a way to ...
 *
 * @attr {String} cssClass - Applies designated CSS class to DOM element.
 */

class AuroCarousel extends LitElement {
  constructor() {
    super();
    this.defaultScrollDistance = 300;
    this.scrollDistance = this.defaultScrollDistance;
    this.scrolledToStart = false;
    this.scrolledToEnd = false;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      scrollDistance: { type: Number },
      label: { type: String },
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  async firstUpdated() {
    this.carousel = this.renderRoot.querySelector('.carousel');
    this.componentSlot = this.renderRoot.querySelector('slot');

    if (!this.label) {
      console.warn('Label should be provided to auro-carousel for carousel to be accessible');
    }
    
    // CSS sets content of pseudoelement based on media query
    // This prevents duplicating the breakpoints in CSS and JS
    const breakpointDetector = this.renderRoot.querySelector('.breakpoint-detector');
    const currentBreakpoint = window
      .getComputedStyle(breakpointDetector, ':before')
      .getPropertyValue('content').replace(/\"/g, '');
    this.isSmallScreen = currentBreakpoint !== 'sm';

    // IE11 does not support assignedElements
    if ('assignedElements' in this.componentSlot) {
      // if we have custom elements in the slot, wait for them to be defined
      // otherwise, scrollWidth will be inaccurate since the slotted children have not been rendered
      const slottedCustomElementNames = this.componentSlot.assignedElements()
        .map(node => node.tagName.toLowerCase())
        .filter(name => name.includes('-'));
      const customElementNamesDeduped = [... new Set(slottedCustomElementNames)];
      await Promise.all(customElementNamesDeduped.map(name => customElements.whenDefined(name)));
      this.setScrollFlags(false);
      this.setUpIntersectionObserver();
    }
  }

  scrollCarousel(num) {
    this.carousel.scrollLeft += num;
  }

  setScrollFlags(autofocus) {
    const { scrollLeft, scrollWidth, clientWidth } = this.carousel;
    this.scrolledToStart = scrollLeft <= 0;
    this.scrolledToEnd = scrollLeft >= scrollWidth - clientWidth;

    // scrolling to the start or end makes the left/right buttons disappear
    // when this happens, focus the first or last slotted element, respectively
    if (autofocus && (this.scrolledToStart || this.scrolledToEnd) && 'assignedElements' in this.componentSlot) {
      const slottedElements = this.componentSlot.assignedElements();
      if (this.scrolledToStart) {
        slottedElements[0].focus();
      } else {
        slottedElements[slottedElements.length - 1].focus();
      }
    }

    this.requestUpdate();
  }

  setUpIntersectionObserver() {
    const options = {
      root: this.carousel
    };

    // only manage tabIndex/aria-hidden in browsers that support IntersectionObserver (excludes IE)
    // and medium or larger screen sizes
    // the left/right buttons do not show on small screens so there is not a way for screen reader users
    // to scroll the carousel
    if ('IntersectionObserver' in window && !this.isSmallScreen) {
      const callback = (entries, observer) => {
        // when the slotted element becomes visible, we want it to be tabbable and visible to assistive tech
        // otherwise, we remove it from the tab order and set aria-hidden
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.removeAttribute('tabindex');
            entry.target.removeAttribute('aria-hidden');
            entry.target.style.visibility = "";
          } else {
            entry.target.setAttribute('tabindex', '-1');
            entry.target.setAttribute('aria-hidden', true);
            // if we don't set this, we get an axe violation for "aria-hidden elements do not contain focusable elements"
            entry.target.style.visibility = "hidden";
          }
        })
      }
      this.observer = new IntersectionObserver(callback, options);

      this.componentSlot.assignedElements().forEach(element => {
        this.observer.observe(element);
      })
    }
  }

  handleSlotChange() {
    this.setScrollFlags(false);
    if (this.observer) {
      // when an item is added to the slot, we need to re-observe the slotted elements
      this.observer.disconnect();
      this.componentSlot.assignedElements().forEach(element => {
        this.observer.observe(element);
      });
    }
  }

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
