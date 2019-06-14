const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    absoluteLayout: 'div.vxp-absolute-layout',
    absoluteLayerSetHeight: '#absolutelayout__height__input',
    absoluteLayerColorSelectBox: '#absolutelayout__background__select',
    absoluteLayerColorPurple: '#absolutelayout__background__select > option:nth-child(3)',
    addChildButton: '#absolutelayout__addchild__button',

    child1Left: '#absolutelayout__childleft__input0',
    child1Top: '#absolutelayout__childtop__input0',
    child2Left: '#absolutelayout__childleft__input1',
    child2Top: '#absolutelayout__childtop__input1',
    child3Left: '#absolutelayout__childleft__input2',
    child3Top: '#absolutelayout__childtop__input2',
    child4Left: '#absolutelayout__childleft__input3',
    child4Top: '#absolutelayout__childtop__input3',
    child5Left: '#absolutelayout__childleft__input4',
    child5Top: '#absolutelayout__childtop__input4',
    child6Left: '#absolutelayout__childleft__input5',
    child6Top: '#absolutelayout__childtop__input5',

    child1ColorSelector: '#absolutelayout__childbackground__select0',
    child1ColorBlue: '#absolutelayout__childbackground__select0 > option:nth-child(2)',
    child4ColorSelector: '#absolutelayout__childbackground__select3',
    child4ColorBlue: '#absolutelayout__childbackground__select3 > option:nth-child(2)',
    child5ColorSelector: '#absolutelayout__childbackground__select4',
    child5ColorBlue: '#absolutelayout__childbackground__select4 > option:nth-child(2)',

    childLayout1: 'div.vxp-absolute-layout > span:nth-child(1)',
    childLayout6: 'div.vxp-absolute-layout > span:nth-child(6)',
    childLayout5: 'div.vxp-absolute-layout > span:nth-child(5)',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@absoluteLayout').to.be.visible;
        this.expect.element('@absoluteLayerSetHeight').to.be.visible;
        this.expect.element('@absoluteLayerColorSelectBox').to.be.visible;

        return this;
      },

      setAbsoluteLayout: function(height) {
        return (
          this.waitForElementVisible('@absoluteLayerSetHeight', 30000)
            //set Container Height
            .clearValue('@absoluteLayerSetHeight')
            .setValue('@absoluteLayerSetHeight', height)
            //set Container Background Color
            .click('@absoluteLayerColorSelectBox')
            .click('@absoluteLayerColorPurple')
        );
      },

      setLayoutChildren: function() {
        return this.waitForElementVisible('@child1Left', 30000)
          .clearValue('@child1Left')
          .setValue('@child1Left', 20)
          .clearValue('@child1Top')
          .setValue('@child1Top', 20)
          .click('@child1ColorSelector')
          .waitForElementVisible('@child1ColorBlue', 10000)
          .click('@child1ColorBlue')

          .clearValue('@child2Left')
          .setValue('@child2Left', 140)
          .clearValue('@child2Top')
          .setValue('@child2Top', 20)

          .clearValue('@child3Left')
          .setValue('@child3Left', 20)
          .clearValue('@child3Top')
          .setValue('@child3Top', 140)

          .clearValue('@child4Left')
          .setValue('@child4Left', 140)
          .clearValue('@child4Top')
          .setValue('@child4Top', 140)
          .click('@child4ColorSelector')
          .waitForElementVisible('@child4ColorBlue', 10000)
          .click('@child4ColorBlue');
      },

      addAndSetChildElement: function() {
        return this.waitForElementVisible('@addChildButton', 30000)
          .click('@addChildButton')
          .clearValue('@child5Left')
          .setValue('@child5Left', 20)
          .clearValue('@child5Top')
          .setValue('@child5Top', 260)
          .click('@child5ColorSelector')
          .waitForElementVisible('@child5ColorBlue', 10000)
          .click('@child5ColorBlue')

          .click('@addChildButton')
          .clearValue('@child6Left')
          .setValue('@child6Left', 140)
          .clearValue('@child6Top')
          .setValue('@child6Top', 260);
      },

      checkChildLayouts: function() {
        this.expect.element('@childLayout1').to.be.visible;
        this.expect.element('@childLayout6').to.be.visible;
        this.expect.element('@childLayout5').to.be.visible;
        return this;
      },

      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
