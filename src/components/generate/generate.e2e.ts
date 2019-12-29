import { newE2EPage } from '@stencil/core/testing';

describe('test-generate', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<test-generate></test-generate>');

    const element = await page.find('test-generate');
    expect(element).toHaveClass('hydrated');
  });
});
