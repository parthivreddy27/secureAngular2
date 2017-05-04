import { SecureAngular2Page } from './app.po';

describe('secure-angular2 App', function() {
  let page: SecureAngular2Page;

  beforeEach(() => {
    page = new SecureAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
