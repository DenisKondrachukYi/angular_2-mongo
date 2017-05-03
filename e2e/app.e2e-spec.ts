import { BuddhaTESTPage } from './app.po';

describe('buddha-test App', () => {
  let page: BuddhaTESTPage;

  beforeEach(() => {
    page = new BuddhaTESTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
