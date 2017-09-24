import { AppPage } from './app.po';

import chai = require('chai');
chai.use(require('chai-as-promised'));
chai.use(require('chai-smoothie'));

const expect = chai.expect;


describe('Protractor Demo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a title', () => {
    page.navigateTo();
    expect(page.getTitle()).to.eventually.equal('Client');
  });
});
