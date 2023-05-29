import { newE2EPage } from '@stencil/core/testing';

describe('wc-textarea', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-textarea></wc-textarea>');

    const element = await page.find('wc-textarea');
    expect(element).toHaveClass('hydrated');
  });
});
