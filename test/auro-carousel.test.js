import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-carousel.js';

describe('auro-carousel', () => {
  it('auro-carousel is accessible', async () => {
    const el = await getDefaultFixture();

    await expect(el).to.be.accessible();
  });

  it('auro-carousel custom element is defined', async () => {
    const el = await !!customElements.get("auro-carousel");

    await expect(el).to.be.true;
  });

  it('scrolls the container right when right button clicked', async () => {
    const el = await getDefaultFixture();
    rightButton(el).click();
    expect(el.carousel.scrollLeft).to.equal(el.defaultScrollDistance);
  });

  it('scrolls the container left when left button clicked', async () => {
    const el = await getDefaultFixture();
    scrollToEnd(el);
    const startScrollPosition = el.carousel.scrollLeft;
    leftButton(el).click();
    expect(el.carousel.scrollLeft).to.equal(startScrollPosition - el.defaultScrollDistance);
  });

  it('hides left button and focuses first element when scrolled to start', async () => {
    const el = await getDefaultFixture();
    // scroll position begins at 0, so scroll right and then back to trigger update
    rightButton(el).click();
    leftButton(el).click();
    await waitFor(() => expect(isHidden(leftButton(el))).to.be.true);
    await waitFor(() => expect(document.activeElement).to.equal(el.children[0]));
  });

  it('hides right button and focuses last element when scrolled to start', async () => {
    const el = await getDefaultFixture();
    scrollToEnd(el);
    await waitFor(() => expect(isHidden(rightButton(el))).to.be.true)
    await waitFor(() => expect(document.activeElement).to.equal(el.children[el.children.length - 1]));
  });

  it('shows both buttons when in the middle', async () => {
    const el = await getDefaultFixture();
    rightButton(el).click();
    await waitFor(() => expect(isHidden(leftButton(el))).to.be.false);
    expect(isHidden(rightButton(el))).to.be.false;
  })

  it('sets tabindex and aria-hidden when child scrolled out of view', async () => {
    const el = await getDefaultFixture();
    scrollToEnd(el);
    await expectA11yPropertiesToBeSet(el.firstElementChild);
    await expectA11yPropertiesNotToBeSet(el.lastElementChild);
  })

  it('re-observes on slot change', async () => {
    const el = await getDefaultFixture();
    el.innerHTML = `
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
      <button>Button 4</button>
      <button>Button 5</button>
      <button>Button 6</button>
      <button>Button 7</button>
      <button>Button 8</button>
      <button>Button 9</button>
      <button>Button 10</button>
    `;

    scrollToEnd(el);
    await expectA11yPropertiesToBeSet(el.firstElementChild);
    await expectA11yPropertiesNotToBeSet(el.lastElementChild);
  })

  it('does not manage focus on small screen', async () => {
    const el = await getDefaultFixture();
    // since we can't simulate a small browser window, we need to manually
    // set the internal property and re-initialize the observer
    el.isSmallScreen = true;
    el.observer.disconnect();
    el.setUpIntersectionObserver();

    scrollToEnd(el);
    await expectA11yPropertiesNotToBeSet(el.firstElementChild);
    await expectA11yPropertiesNotToBeSet(el.lastElementChild);
  })

  async function getDefaultFixture() {
    // set width on component to force it to overflow
    const el = await fixture(html`
      <auro-carousel label="buttons" style="width: 200px;">
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
        <button>Button 4</button>
        <button>Button 5</button>
        <button>Button 6</button>
        <button>Button 7</button>
        <button>Button 8</button>
        <button>Button 9</button>
        <button>Button 10</button>
      </auro-carousel>
    `);
    // disable smooth scrolling so we don't have to wait for scrolling to finish
    el.carousel.style = "scroll-behavior: auto;"
    return el;
  }

  async function expectA11yPropertiesToBeSet(el) {
    // We set tryImmediately to false here to prevent false positives
    // The element needs a chance to change state
    await waitFor(() => expect(el.tabIndex).to.equal(-1), false);
    expect(el.getAttribute('aria-hidden')).to.equal('true');
    expect(el.style.visibility).to.equal('hidden');
  }

  async function expectA11yPropertiesNotToBeSet(el) {
    await waitFor(() => expect(el.tabIndex).to.equal(0), false);
    expect(el.hasAttribute('aria-hidden')).to.be.false;
    expect(el.style.visibility).to.equal('');
  }

  function scrollToEnd(el) {
    el.carousel.scrollLeft = el.carousel.scrollWidth - el.carousel.clientWidth;
  }

  function rightButton(el) {
    return el.shadowRoot.querySelector('.button--right');
  }

  function leftButton(el) {
    return el.shadowRoot.querySelector('.button--left');
  }

  /**
   * Helper function that retries an assertion until it passes.
   * It will throw the assertion exception after 500ms if it has not passed
   * @param {boolean} tryImmediately - whether or not to attempt the assertion immediately.
   */
  function waitFor(assertion, tryImmediately = true) {
    return new Promise(resolve => {
      const startTime = Date.now();
      const tryAssertion = () => {
        try {
          assertion();
          clearInterval(intervalId);
          resolve();
        } catch (err) {
          if (Date.now() - startTime > 500) {
            throw err;
          }
        }
      }
      const intervalId = setInterval(tryAssertion, 50)
      if (tryImmediately) {
        tryAssertion();
      }
    })
  }

  function isHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.display === 'none');
  }
});
