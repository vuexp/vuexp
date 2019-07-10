const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    accordion: '#accordion',
    autoCollapse: '#accordion_autocollapse_checkbox',
    new_item_title: '#item_title_input',
    add_button: '#item_add_new',
    autoCollapse_label: '#accordion_autocollapse_status_label',
    expanded_label: '#accordion_expanded_event_label',
    collapsed_label: '#accordion_collapsed_event_label',
    initial_expanded_items: '.vxp-stack-layout--vertical > div:nth-child(5) > span:nth-child(2)',
    item1: '#item1 > div span',
    item2: '#item2 > div span',
    item3: '#item3 > div span',
    item4: '#item4 > div span',
    item5: '#item5 > div span',
    sample_button: '.vxp-stack-layout--vertical > div > div > button:nth-child(1)',

    item2_contentArea: '#item2 > div.accordion-body',
    item3_contentArea: '#item3 > div.accordion-body',
  },
  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        return this.waitForElementVisible('@item1', 10000);
      },
      check_Autocollapse: function() {
        return this.waitForElementVisible('@autoCollapse', 3000).click('@autoCollapse');
      },
      clickItem: function(item_no) {
        this.waitForElementVisible('@accordion', 3000);
        switch (item_no) {
          case 1:
            return this.click('@item1');
          case 2:
            return this.click('@item2');
          case 3:
            return this.click('@item3');
          case 4:
            return this.click('@item4');
          case 5:
            return this.click('@item5');
        }
      },
      addItem: function(text) {
        this.waitForElementVisible('@add_button', 3000)
          .waitForElementVisible('@new_item_title', 3000)
          .clearValue('@new_item_title')
          .setValue('@new_item_title', text)
          .click('@add_button');
        return this;
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
