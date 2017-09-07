import { browser, by, element } from 'protractor';

export class AppPage {   

  getTitle() {
    return browser.getTitle();
  }

  navigateTo() {
    return browser.get('/protractor-demo/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
