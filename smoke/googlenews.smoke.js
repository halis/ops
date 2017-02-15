
module.exports = {
  'Google News' : function (browser) {
    browser
      .url('https://news.google.com/')
      .waitForElementVisible('body', 1000)
      .assert.title('Google News');

    browser.expect.element('.blended-wrapper').to.be.present;

    browser.end();
  }
};
