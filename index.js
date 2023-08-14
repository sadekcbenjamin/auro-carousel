import { AuroCarousel } from './src/auro-carousel';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-carousel') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroCarousel {});
  }
}

export { registerComponent }
