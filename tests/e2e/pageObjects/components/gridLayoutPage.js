const checkScreenshot = require('../../commonCommands/checkScreenshotCommand');

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    renderedResult: 'div.demo-panel.vxp-stack-layout.vxp-stack-layout--vertical div.vxp-grid-layout',
    clearAllGridButton: '#gridlayout_columns_clear',
    addNewColumnButton: '#gridlayout_columns_add_button',
    addNewRowButton: '#gridlayout_rows_add_button',

    //case1
    columnTypeSelectBox1: '#gridlayout_columns_selectbox0',
    columnTypeOption1: '#gridlayout_columns_selectbox0 > option:nth-child(2)',
    columnInputField1: 'gridlayout_columns_selectbox_px_input0',
    columnTypeSelectBox3: '#gridlayout_columns_selectbox2',
    columnTypeOption3: '#gridlayout_columns_selectbox2 > option:nth-child(4)',
    rowTypeSelectBox1: '#gridlayout_rows_selectbox0',
    gridTypeOption1: '#gridlayout_rows_selectbox0 > option:nth-child(2)',
    rowTypeSelectBox3: '#gridlayout_rows_selectbox2',
    gridTypeOption3: '#gridlayout_rows_selectbox2 > option:nth-child(4)',
    //gridCells
    gridCell1: 'div.nudoc-example__content > div > div:nth-child(4) > div:nth-child(2)',
    gridCell2: 'div.nudoc-example__content > div > div:nth-child(4) > div:nth-child(3)',
    gridCell3: 'div.nudoc-example__content > div > div:nth-child(4) > div:nth-child(4)',
    gridCell4: 'div.nudoc-example__content > div > div:nth-child(4) > div:nth-child(5)',
    gridCell5: 'div.nudoc-example__content > div > div:nth-child(4) > div:nth-child(6)',
    gridCell6: 'div.nudoc-example__content > div > div:nth-child(4) > div:nth-child(7)',
    gridCell7: 'div.nudoc-example__content > div > div:nth-child(4) > div:nth-child(8)',
    gridCell8: 'div.nudoc-example__content > div > div:nth-child(4) > div:nth-child(9)',
    gridCell9: 'div.nudoc-example__content > div > div:nth-child(4) > div:nth-child(10)',
  },

  commands: [
    checkScreenshot(),
    {
      checkInitialElements: function() {
        this.expect.element('@buttonComponent').to.be.visible;
        this.expect.element('@buttonTextInput').to.be.visible;
        this.expect.element('@textWrapSelectBox').to.be.visible;
        this.expect.element('@buttonWidth').to.be.visible;
        this.expect.element('@buttonHeight').to.be.visible;
        return this;
      },

      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
