import { InitProjectPage } from './app.po';

describe('init-project App', function() {
  let page: InitProjectPage;

  beforeEach(() => {
    page = new InitProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
