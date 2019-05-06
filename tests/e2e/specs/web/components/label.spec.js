module.exports = {
  tags: ['component', 'label'],
  'Label Component Test'(browser) {
    browser
      .url('http://localhost:8080/components/label.html')
      .waitForElementVisible('body', 60000)
      .setValue('#label_text_input', 'nightwatch')
      .assert.containsText('#label_component', 'nightwatch')
      .end();

    browser.end();
  },
};
