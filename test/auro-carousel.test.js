import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-carousel.js';

describe('auro-carousel', () => {
  it('sets the CSS class on auro-carousel > div element', async () => {
    const el = await fixture(html`
      <auro-carousel cssclass="testClass"></auro-carousel>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-carousel is accessible', async () => {
    const el = await fixture(html`
      <auro-carousel cssclass="testClass"></auro-carousel>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-carousel custom element is defined', async () => {
    const el = await !!customElements.get("auro-carousel");

    await expect(el).to.be.true;
  });
});
