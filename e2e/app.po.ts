export class Angularattack2016SayodevPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angularattack2016-sayodev-app h1')).getText();
  }
}
