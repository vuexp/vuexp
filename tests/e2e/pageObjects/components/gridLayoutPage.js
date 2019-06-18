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

    //add Column Settings elements
    //column 1
    columnTypeSelectBox1: '#gridlayout_columns_selectbox0',
    columnTypePxOption1: '#gridlayout_columns_selectbox0 > option:nth-child(2)',
    columnTypeStarOption1: '#gridlayout_columns_selectbox0 > option:nth-child(4)',
    columnInputPxField1: '#gridlayout_columns_selectbox_px_input0',
    //column 2
    columnTypeSelectBox2: '#gridlayout_columns_selectbox1',
    columnTypeStarOption2: '#gridlayout_columns_selectbox1 > option:nth-child(4)',
    columnInputStarField2: '#gridlayout_columns_selectbox_star_input1',
    //column 3
    columnTypeSelectBox3: '#gridlayout_columns_selectbox2',
    columnTypeOption3: '#gridlayout_columns_selectbox2 > option:nth-child(4)',

    //add Row Settings elements
    //row 1
    rowTypeSelectBox1: '#gridlayout_rows_selectbox0',
    rowTypePxOption1: '#gridlayout_rows_selectbox0 > option:nth-child(2)',
    rowInputPxField1: '#gridlayout_rows_selectbox_px_input0',
    rowTypeStarOption1: '#gridlayout_rows_selectbox0 > option:nth-child(4)',
    rowInputStarField1: '#gridlayout_rows_selectbox_star_input0',
    //row 2
    rowTypeSelectBox2: '#gridlayout_rows_selectbox1',
    rowTypeStarOption2: '#gridlayout_rows_selectbox1 > option:nth-child(4)',
    rowInputStarField2: '#gridlayout_rows_selectbox_star_input1',
    //row 3
    rowTypeSelectBox3: '#gridlayout_rows_selectbox2',
    rowTypeStarOption3: '#gridlayout_rows_selectbox2 > option:nth-child(4)',
    rowInputStarField3: '#gridlayout_rows_selectbox_star_input1',
    //delete Cells Buttons
    deleteCellButton3: '#gridlayout_cells_remove_button2',
    deleteCellButton6: '#gridlayout_cells_remove_button5',
    //Column and Row span Input Fields
    rowSpanInputCell2: '#gridlayout_cells_rowspan_input1',
    colSpanInputCell3: '#gridlayout_cells_colspan_input2',
    //Cell Colors
    cellColor1: '#gridlayout_cells_color_selectbox0',
    cellColorColor1: '#gridlayout_cells_color_selectbox0 > option:nth-child(2)',
    cellColor2: '#gridlayout_cells_color_selectbox1',
    cellColorColor2: '#gridlayout_cells_color_selectbox1 > option:nth-child(3)',
    cellColor3: '#gridlayout_cells_color_selectbox2',
    cellColorColor3: '#gridlayout_cells_color_selectbox2 > option:nth-child(4)',
    cellColor4: '#gridlayout_cells_color_selectbox3',
    cellColorColor4: '#gridlayout_cells_color_selectbox3 > option:nth-child(5)',
    cellColor5: '#gridlayout_cells_color_selectbox4',
    cellColorColor5: '#gridlayout_cells_color_selectbox4 > option:nth-child(6)',
    cellColor6: '#gridlayout_cells_color_selectbox5',
    cellColorColor6: '#gridlayout_cells_color_selectbox5 > option:nth-child(7)',
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
      clearAllGrid() {
        return this.waitForElementVisible('@clearAllGridButton', 10000).click('@clearAllGridButton');
      },
      add3NewColumns: function() {
        return this.waitForElementVisible('@addNewColumnButton', 10000)
          .click('@addNewColumnButton')
          .click('@addNewColumnButton')
          .click('@addNewColumnButton');
      },
      add3NewRows: function() {
        return this.waitForElementVisible('@addNewRowButton', 10000)
          .click('@addNewRowButton')
          .click('@addNewRowButton')
          .click('@addNewRowButton');
      },
      add2NewColumns: function() {
        return this.waitForElementVisible('@addNewColumnButton', 10000)
          .click('@addNewColumnButton')
          .click('@addNewColumnButton');
      },
      add2NewRows: function() {
        return this.waitForElementVisible('@addNewRowButton', 10000)
          .click('@addNewRowButton')
          .click('@addNewRowButton');
      },

      setColumnSettingsForCase1: function() {
        return (
          // set Column Settings
          this.waitForElementVisible('@columnTypeSelectBox1', 10000)
            .click('@columnTypeSelectBox1')
            .waitForElementVisible('@columnTypePxOption1', 10000)
            .click('@columnTypePxOption1')
            .waitForElementVisible('@columnInputPxField1', 10000)
            .setValue('@columnInputPxField1', 50)
            .click('@columnTypeSelectBox3')
            .click('@columnTypeOption3')
        );
      },
      setRowSettingsForCase1: function() {
        return (
          // set Row Settings
          this.waitForElementVisible('@rowTypeSelectBox1', 10000)
            .click('@rowTypeSelectBox1')
            .waitForElementVisible('@rowTypePxOption1', 10000)
            .click('@rowTypePxOption1')
            .waitForElementVisible('@rowInputPxField1', 10000)
            .setValue('@rowInputPxField1', 50)
            .click('@rowTypeSelectBox3')
            .click('@rowTypeStarOption3')
        );
      },
      setCellsSettingsForCase1: function() {
        return this.waitForElementVisible('@deleteCellButton3', 10000)
          .click('@deleteCellButton3')
          .click('@deleteCellButton6')
          .clearValue('@rowSpanInputCell2')
          .setValue('@rowSpanInputCell2', 2)
          .clearValue('@colSpanInputCell3')
          .setValue('@colSpanInputCell3', 2);
      },
      setCellColorsCase1: function() {
        return this.waitForElementVisible('@cellColor1', 10000)
          .click('@cellColor1')
          .waitForElementVisible('@cellColorColor1', 10000)
          .click('@cellColorColor1')

          .waitForElementVisible('@cellColor2', 10000)
          .click('@cellColor2')
          .waitForElementVisible('@cellColorColor2', 10000)
          .click('@cellColorColor2')

          .waitForElementVisible('@cellColor3', 10000)
          .click('@cellColor3')
          .waitForElementVisible('@cellColorColor3', 10000)
          .click('@cellColorColor3')

          .waitForElementVisible('@cellColor4', 10000)
          .click('@cellColor4')
          .waitForElementVisible('@cellColorColor4', 10000)
          .click('@cellColorColor4')

          .waitForElementVisible('@cellColor5', 10000)
          .click('@cellColor5')
          .waitForElementVisible('@cellColorColor5', 10000)
          .click('@cellColorColor5')

          .waitForElementVisible('@cellColor6', 10000)
          .click('@cellColor6')
          .waitForElementVisible('@cellColorColor6', 10000)
          .click('@cellColorColor6')
          .click('@renderedResult');
      },

      setColumnSettingsForCase2: function() {
        return (
          // set Column Settings
          this.waitForElementVisible('@columnTypeSelectBox1', 10000)
            .click('@columnTypeSelectBox1')
            .waitForElementVisible('@columnTypeStarOption1', 10000)
            .click('@columnTypeStarOption1')
            .click('@columnTypeSelectBox2')
            .waitForElementVisible('@columnTypeStarOption2', 10000)
            .click('@columnTypeStarOption2')
            .setValue('@columnInputStarField2', 2)
        );
      },
      setRowSettingsForCase2: function() {
        return (
          // set Row Settings
          this.waitForElementVisible('@rowTypeSelectBox1', 10000)
            .click('@rowTypeSelectBox1')
            .waitForElementVisible('@rowTypeStarOption1', 10000)
            .click('@rowTypeStarOption1')
            .setValue('@rowInputStarField1', 2)
            .click('@rowTypeSelectBox2')
            .waitForElementVisible('@rowTypeStarOption2', 10000)
            .click('@rowTypeStarOption2')
            .setValue('@rowInputStarField2', 2)
        );
      },
      setCellColorsCase2: function() {
        return this.waitForElementVisible('@cellColor1', 10000)
          .click('@cellColor1')
          .waitForElementVisible('@cellColorColor1', 10000)
          .click('@cellColorColor1')

          .waitForElementVisible('@cellColor2', 10000)
          .click('@cellColor2')
          .waitForElementVisible('@cellColorColor2', 10000)
          .click('@cellColorColor2')

          .waitForElementVisible('@cellColor3', 10000)
          .click('@cellColor3')
          .waitForElementVisible('@cellColorColor3', 10000)
          .click('@cellColorColor3')

          .waitForElementVisible('@cellColor4', 10000)
          .click('@cellColor4')
          .waitForElementVisible('@cellColorColor4', 10000)
          .click('@cellColorColor4')
          .click('@renderedResult');
      },

      setColumnSettingsForCase3: function() {
        return (
          // set Column Settings
          this.waitForElementVisible('@columnTypeSelectBox1', 10000)
            .click('@columnTypeSelectBox1')
            .waitForElementVisible('@columnTypePxOption1', 10000)
            .click('@columnTypePxOption1')
            .waitForElementVisible('@columnInputPxField1', 10000)
            .setValue('@columnInputPxField1', 100)
        );
      },
      setRowSettingsForCase3: function() {
        return (
          // set Row Settings
          this.waitForElementVisible('@rowTypeSelectBox1', 10000)
            .click('@rowTypeSelectBox1')
            .waitForElementVisible('@rowTypePxOption1', 10000)
            .click('@rowTypePxOption1')
            .waitForElementVisible('@rowInputPxField1', 10000)
            .setValue('@rowInputPxField1', 100)
        );
      },

      perform: function(callback) {
        this.api.perform(callback);
        return this;
      },
    },
  ],
};
