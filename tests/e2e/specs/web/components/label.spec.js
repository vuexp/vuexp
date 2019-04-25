module.exports = {
  tags: ['component', 'label'],
  'Label Component Test'(browser) {
    browser
      .url('http://localhost:8080/components/label.html')
      .waitForElementVisible('body', 60000)
      .setValue('#labeldoc-input', 'nightwatch')
      .assert.containsText('#labeldoc-label', 'nightwatch')
      .end();

    browser.end();
  },
};
