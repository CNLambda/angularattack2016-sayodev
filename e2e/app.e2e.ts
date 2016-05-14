import { Angularattack2016SayodevPage } from './app.po';

describe('angularattack2016-sayodev App', function() {
  let page: Angularattack2016SayodevPage;

  beforeEach(() => {
    page = new Angularattack2016SayodevPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angularattack2016-sayodev works!');
  });
});
