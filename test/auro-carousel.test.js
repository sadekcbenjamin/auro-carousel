import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import sinon from 'sinon';
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
    // scrollLeft is not updated properly because we're in a headless browser
    // so spy on the internal method instead
    spyOnScrollCarousel(el);
    const rightButton = el.shadowRoot.querySelector('.button--right');
    rightButton.click();
    expect(getPassedScrollAmount(el)).to.equal(el.defaultScrollDistance)

  });

  it('scrolls the container left when left button clicked', async () => {
    const el = await getDefaultFixture();
    spyOnScrollCarousel(el);
    const leftButton = el.shadowRoot.querySelector('.button--left');
    leftButton.click();
    expect(getPassedScrollAmount(el)).to.equal(-1 * el.defaultScrollDistance)
  });

  async function getDefaultFixture() {
    return await fixture(html`
      <auro-carousel>
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
  }

  function spyOnScrollCarousel(el) {
    const sandbox = sinon.createSandbox();
    sandbox.spy(el, "scrollCarousel");
  }

  function getPassedScrollAmount(el) {
    return el.scrollCarousel.getCall(0).args[0];
  }
});
