const checkScreenshot = require('../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    tabTwo: '.vxp-stack-layout--vertical > div:nth-child(1) > div > div.vxp-tab-view__header > button:nth-child(2)',
    selectedIndexLabel: '.demo-panel.tabView-wrapper.vxp-stack-layout.vxp-stack-layout--vertical > span:nth-child(2)',
    tabTextColorLabel: '#tabView__tabTextColor__label',
    tabTextColorInput: '#tabView__tabTextColor__input',
    tabBackgroundColor: '#tabView__tabBackgroundColor__input',
    selectedTabTextColor: '#tabView__selectedTabTextColor__input',
    idInput: 'input[placeholder="ID of selected tab"]',
    idLabel: 'div[role="tabpanel"]',
    titleLabel: 'span[class="vxp-tab-view__header__tab__title"]',
    titleInput: 'input[placeholder="title of selected tab"]',
    webIconInput: '.demo-panel.tabView-wrapper.vxp-stack-layout.vxp-stack-layout--vertical > div > select',
    webIconOption: 'option[value="fa fa-user-circle-o"]',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@tabTwo').to.be.visible;
        this.expect.element('@selectedIndexLabel').to.be.visible;
        this.expect.element('@tabTextColor').to.be.visible;
        this.expect.element('@tabBackgroundColor').to.be.visible;

        return this;
      },
      selectTab: function() {
        return this.waitForElementVisible('@tabTwo', 10000).click('@tabTwo');
      },
      selectTabTextColor: function(tabColor) {
        return this.waitForElementVisible('@tabTextColorInput', 10000).setValue('@tabTextColorInput', tabColor);
      },
      selectBackgroundColor: function(backgroundcolor) {
        return this.waitForElementVisible('@tabBackgroundColor', 10000).setValue('@tabBackgroundColor', backgroundcolor);
      },
      selectSelectedTabTextColor: function(selectedcolor) {
        return this.waitForElementVisible('@selectedTabTextColor', 10000).setValue('@selectedTabTextColor', selectedcolor);
      },
      setItemId: function(text) {
        return this.waitForElementVisible('@idInput', 10000).setValue('@idInput', text);
      },
      setTitle: function(text) {
        return this.waitForElementVisible('@titleInput', 10000).setValue('@titleInput', text);
      },
      selectWebIcon: function(webIconOption) {
        return this.waitForElementVisible('@webIconInput', 10000).setValue('@webIconInput', webIconOption);
      },
      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
