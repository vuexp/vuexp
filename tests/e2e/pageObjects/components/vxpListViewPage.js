const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    removeAllItems: '#vxplistview_removeitems_button',
    addItemtoListButton: '#vxplistview_additem_button',
    itemTextField: '#vxplistview_currentitem_textfield',
    listHeightField: '#vxplistview_listheight_textfield',
    reversedCheckbox: '#vxplistview_reversed_cb',
    blackVtemplateCheckbox: '#vxplistview_currentitem_cb',
    itemfirst: 'div[index="0"]',
    itemlast: 'div[index="1"]',
    itemThird: '#vxplistview_component_listview > div > div:nth-child(3) > div > span',
    itemFourth: '#vxplistview_component_listview > div > div:nth-child(4) > div > span',
    reverseElementList: 'div[class="vxp-stack-layout vxp-stack-layout--vertical reversed"]',
    itemTapLabelFirst: '#vxplistview_event1_label',
    itemTapLabelSecond: '#vxplistview_event2_label',
    list: 'div[class="vxp-scrollview vxp-scrollview--vertical vxp-scrollable vxp-scrollable--undefined"]',
    listViewComponent: '#vxplistview_component_listview',
    scrollEventLabel: '#vxplistview_event2_label',
    loadMoreItemsLabel: '#vxplistview_event1_label',
    scrollElement: '#vxplistview_component_listview > div > div:nth-child(5) > div > span',
    listViewLoadedLabel: '#vxplistview_event0_label',
    scrollToStart: '#vxplistview_scrolltostart_button',
    scrollToEnd: '#vxplistview_scrolltoend_button',
    scrollToIndex: 'div[index="6"]',
    indicatorTextField: '#vxplistview_indicator_textfield',
    indicatorState: '#vxplistview_indicatorstate_cb',
    indicatorShowButton: '#vxplistview_indicatorshow_button',
    indicatorHideButton: '#vxplistview_indicatorhide_button',
    loadingText: '#vxplistview_component_listview > div > div > div > span',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@addItemtoListButton').to.be.visible;
        this.expect.element('@listHeightField').to.be.visible;
        this.expect.element('@itemTextField').to.be.visible;

        return this;
      },
      addItemToList: function(text) {
        return this.waitForElementVisible('@itemTextField', 10000)
          .clearValue('@itemTextField')
          .setValue('@itemTextField', text)
          .click('@addItemtoListButton')
          .click('@removeAllItems')
          .clearValue('@itemTextField')
          .setValue('@itemTextField', text)
          .click('@addItemtoListButton')
          .click('@addItemtoListButton')
          .click('@itemfirst')
          .click('@itemlast');
      },
      addItemToListTwo: function(text2) {
        return this.waitForElementVisible('@itemTextField', 10000)
          .clearValue('@itemTextField')
          .setValue('@itemTextField', text2)
          .click('@addItemtoListButton')
          .click('@addItemtoListButton');
      },

      editListHeight: function(height) {
        return this.waitForElementVisible('@listHeightField', 10000)
          .clearValue('@listHeightField')
          .setValue('@listHeightField', height);
      },
      reverseList: function() {
        return this.waitForElementVisible('@reversedCheckbox', 10000).click('@reversedCheckbox');
      },
      selectVTemplate: function() {
        return this.waitForElementVisible('@blackVtemplateCheckbox', 10000)
          .click('@blackVtemplateCheckbox')
          .click('@addItemtoListButton')
          .click('@addItemtoListButton');
      },
      addScroll: function(text3) {
        return this.waitForElementVisible('@addItemtoListButton', 10000)
          .click('@addItemtoListButton')
          .click('@addItemtoListButton')
          .click('@addItemtoListButton')
          .click('@addItemtoListButton')
          .clearValue('@itemTextField')
          .setValue('@itemTextField', text3)
          .click('@addItemtoListButton')
          .click('@addItemtoListButton')
          .click('@addItemtoListButton');
      },
      clickScrollToStart: function() {
        return this.waitForElementVisible('@scrollToStart', 10000).click('@scrollToStart');
      },
      clickScrollToEnd: function() {
        return this.waitForElementVisible('@scrollToEnd', 10000).click('@scrollToEnd');
      },
      checkScrollEvent: function() {
        return this.waitForElementVisible('@scrollToIndex', 10000);
      },
      showIndicator: function() {
        return this.waitForElementVisible('@indicatorShowButton', 10000).click('@indicatorShowButton');
      },

      hideIndicator: function() {
        return this.waitForElementVisible('@indicatorHideButton', 10000).click('@indicatorHideButton');
      },

      changeIndicatorState: function() {
        return this.waitForElementVisible('@indicatorState', 10000)
          .click('@indicatorState')
          .click('@indicatorShowButton');
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
