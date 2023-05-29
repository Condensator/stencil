import { newSpecPage } from '@stencil/core/testing';
import { WcTextarea } from '../wc-textarea';

describe('wc-textarea', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcTextarea],
      html: `<wc-textarea></wc-textarea>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-textarea>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-textarea>
    `);
  });
});
