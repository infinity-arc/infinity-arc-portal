import { ApplicationRouter } from './app-router';

describe('app-router', () => {
  it('builds', () => {
    expect(new ApplicationRouter()).toBeTruthy();
  });
});
