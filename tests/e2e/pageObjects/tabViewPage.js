const checkScreenshot = require('../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    tabTwo: '.vxp-stack-layout--vertical > div:nth-child(1) > div > div.vxp-tab-view__header > button:nth-child(2)',
    selectedIndexLabel: '#tabview__selectedIndex__label',
    tabTextColorLabel: '#tabView__tabTextColor__label',
    tabTextColorInput: '#tabView__tabTextColor__input',
    tabTextColorOption: '#tabView__tabTextColor__input > option:nth-child(3)',
    tabBackgroundColor: '#tabView__tabBackgroundColor__input',
    tabBackgroundColorOption: '#tabView__tabBackgroundColor__input > option:nth-child(3)',
    selectedTabTextColor: '#tabView__selectedTabTextColor__input',
    seledtedTabTextColorOption: '#tabView__selectedTabTextColor__input > option:nth-child(4)',
    selectedTab: '.vxp-tab-view__header > button.vxp-tab-view__header__tab.vxp-tab-view__header__tab-active > span',
    idInput: 'input[placeholder="ID of selected tab"]',
    idLabel: 'div[role="tabpanel"]',
    titleLabel: 'span[class="vxp-tab-view__header__tab__title"]',
    titleInput: 'input[placeholder="title of selected tab"]',
    webIconInput: '.demo-panel.tabView-wrapper.vxp-stack-layout.vxp-stack-layout--vertical > div > select',
    webIconOption: 'option[value="fa fa-user-circle-o"]',
    tabView: `.content > div:nth-child(5) > 
    div.nudoc-example__content > div.vxp-stack-layout.vxp-stack-layout--vertical > div:nth-child(1) > div > div.vxp-tab-view__header`,
    tabTwoText: `.nudoc-example__content > 
        div.vxp-stack-layout.vxp-stack-layout--vertical > div:nth-child(1) > div > div.vxp-tab-view__header > button:nth-child(2) > span`,
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
      selectTabTextColor: function() {
        return this.waitForElementVisible('@tabTextColorInput', 10000).click('@tabTextColorOption');
      },
      selectBackgroundColor: function() {
        return this.waitForElementVisible('@tabBackgroundColor', 10000).click('@tabBackgroundColorOption');
      },
      selectSelectedTabTextColor: function() {
        return this.waitForElementVisible('@selectedTabTextColor', 10000).click('@seledtedTabTextColorOption');
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
