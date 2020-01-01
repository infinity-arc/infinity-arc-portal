import { newE2EPage } from '@stencil/core/testing';

describe('app-rooter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-rooter></app-rooter>');

    const element = await page.find('app-rooter');
    expect(element).toHaveClass('hydrated');
  });
});
