<template>
  <StackLayout>
    <StackLayout v-if="itemList.length > 0" orientation="horizontal">
      <VxpCheckbox />
      <VxpLabel text="Select All" />
    </StackLayout>
    <VxpListView ref="listView" :items="itemList" :height="listViewHeight" @tap="onListViewTap" :itemSelect="itemConditions">
      <v-template slot-scope="{ item }" slot="showIfStateTrue">
        <StackLayout orientation="horizontal">
          <TableCellItem
            v-if="item.contains === 'object'"
            :verticalAlignment="cellVerticalAlignment"
            :itemType="item.params.type"
            :itemData="item.params.data"
            :customCSS="item.params.customCSS"
            @checkboxClicked="$emit('checkboxClicked', $event)"
            @buttonClicked="$emit('buttonClicked', $event)"
            @imageLoaded="$emit('imageLoaded', $event)"
            @imageLoadError="$emit('imageLoadError', $event)"
          />
          <StackLayout v-else-if="item.contains === 'array'" :verticalAlignment="cellVerticalAlignment">
            <TableCellItem
              v-for="(cellItem, index) in item.array"
              :key="getCellNo(cellItem, index)"
              :horizontalAlignment="cellHorizontalAlignment"
              :itemType="cellItem.params.type"
              :itemData="cellItem.params.data"
              :customCSS="cellItem.params.customCSS"
              @checkboxClicked="$emit('checkboxClicked', $event)"
              @buttonClicked="$emit('buttonClicked', $event)"
              @imageLoaded="$emit('imageLoaded', $event)"
              @imageLoadError="$emit('imageLoadError', $event)"
            ></TableCellItem>
          </StackLayout>
          <TableCellItem
            v-if="item.contains === 'action'"
            :verticalAlignment="cellVerticalAlignment"
            :itemType="item.params.type"
            :itemData="item.params.data"
            :customCSS="item.params.customCSS"
            @checkboxClicked="$emit('checkboxClicked', $event)"
            @buttonClicked="$emit('buttonClicked', $event)"
            @imageLoaded="$emit('imageLoaded', $event)"
            @imageLoadError="$emit('imageLoadError', $event)"
          />
        </StackLayout>
      </v-template>
    </VxpListView>
    <FlexboxLayout v-if="hasSlots" flexWrap="wrap">
      <slot name="ItemsPerPage" />
      <slot name="pagination" />
    </FlexboxLayout>
  </StackLayout>
</template>
<script>
import VxpListView from './VxpListView';
import VTemplate from '../core/components/VTemplate/VTemplate';
import StackLayout from '../layouts/StackLayout';
import FlexboxLayout from '../layouts/FlexboxLayout';
import VxpCheckbox from './VxpCheckbox';
import VxpLabel from './VxpLabel';
import TableCellItem from '../core/components/TableView/TableCellItem';
import platform from '../platform';

export default {
  name: 'VxpTableView',
  props: {
    headerFields: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    notFoundMsg: {
      type: String,
      default: null,
    },
    tableHeight: {
      type: Number,
      default: null,
    },
    tableWidth: {
      type: Number,
      default: null,
    },
    columnWidth: {
      type: Number,
      default: null,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    rowSelectionEnabled: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      listViewHeight: '300',
      itemConditions: {
        showIfStateTrue: 'true',
      },

      selectedRows: [], // selected rows
      selectedColumns: this.headerFields, // visible columns
      // columns: 'auto', // gridview columns string
      // rows: 'auto', // gridview rows string
      // columnNumber: 0, // total column number
      rowNumber: 0, // total row number
      renderType: 'table',
    };
  },
  mounted() {
    if (platform !== null && typeof platform !== 'undefined') {
      const self = this;
      platform.onGridChange(gridCol => {
        if (gridCol === 'col-1') {
          self.renderType = 'list';
        } else {
          self.renderType = 'table';
        }
      });
    }
  },
  computed: {
    hasSlots() {
      return this.$slots.pagination !== undefined || this.$slots.ItemsPerPage !== undefined || this.$slots.loadingIndicator !== undefined;
    },
    /**
     * Checks data to show not found message
     */
    dataNotFound() {
      if (this.data === null || typeof this.data === 'undefined' || this.data.length === 0) {
        return true;
      }
      return false;
    },
    /**
     * Extracts necessary header data from given header fields
     */
    // tableHeaderData() {
    //   let headers = [];
    //   if (this.rowSelectionEnabled) {
    //     // Select All checkbox
    //     const selectionCell = {
    //       name: '',
    //       label: '',
    //       type: 'checkbox',
    //       sortable: false,
    //       rowSelection: true,
    //       listAlignment: 'horizontal',
    //     };
    //     headers.push(selectionCell);
    //   }

    //   this.headerFields.forEach(headerItem => {
    //     const item = {
    //       name: headerItem.name,
    //       label: headerItem.label,
    //       type: headerItem.type,
    //       sortable: headerItem.sortable,
    //       rowSelection: false,
    //       listAlignment: headerItem.listAlignment,
    //     };
    //     headers.push(item);
    //   });

    //   return headers;
    // },
    /**
     * Produces 'columns' string for gridview
     */
    // getColumnsString() {
    //   let cols = 'auto';
    //   for (var i = 0; i < this.selectedColumns.length; i++) {
    //     if (this.renderType === 'table' || (this.renderType === 'list' && this.selectedColumns[i].listAlignment === 'horizontal')) {
    //       cols += ',*';
    //     }
    //   }
    //   return cols;
    // },
    /**
     * Returns 'rows' string for gridview
     */
    // getRowsString() {
    //   return this.rows;
    // },
    /**
     * Generates all table cells and their data types, props
     * and also helps to switching of rendering types
     */
    itemList() {
      const tableData = []; // will store all table cells and their props
      if (this.data !== null && this.headerFields !== null && typeof this.data !== 'undefined') {
        let rowIndex = 1; // indicates current row number, row 0 is header field in grid
        let colIndex = 0; // indicates current column number

        // initialize grid row,column rendering styles
        // this.setInitialRowAndColString();

        this.data.forEach(dataRow => {
          colIndex = 0; // set zero at the beginning of new row

          //insert checkbox at the beginning of every row
          if (this.rowSelectionEnabled) {
            const selectionCell = {};
            selectionCell.contains = 'object';
            selectionCell.params = {};
            selectionCell.params.type = 'checkbox';
            selectionCell.params.customCSS = {}; // TODO take css as table prop
            selectionCell.params.data = {};
            selectionCell.params.rowNo = rowIndex;
            selectionCell.params.colNo = colIndex;
            selectionCell.params.data.checked = this.selectedRows.includes(rowIndex);

            tableData.push(selectionCell);
            colIndex++;
          }

          // Loop only selected columns
          this.headerFields.forEach(headerItem => {
            const cellData = this.extractCellData(headerItem, dataRow, rowIndex, colIndex);
            if (headerItem.listAlignment === 'horizontal') {
              // every object/array will be on new column in the table
              tableData.push(cellData);
              colIndex++; // increase column index
            } else if (headerItem.listAlignment === 'vertical') {
              // For the items that will be rendered as vertical list,
              // will be stored as array in tableData.

              // Get latest item and add new item below it
              let lastItem = tableData.pop();
              let listData;
              // check if it is an array or an object
              if (Array.isArray(lastItem)) {
                listData = lastItem;
              } else {
                listData = [lastItem]; // convert is to array
              }
              listData.push(cellData); // add new item

              // add vertical item list to table column
              tableData.push(listData);

              // since new item has added just below of latest item
              // no need to increase column index
            }
          });
          // this.addRowsString(); // update rows rendering style
          rowIndex++; // increase row index
        });

        // save total row, column number
        // this.setColumnNumber(colIndex);
        this.setRowNumber(rowIndex);
      }
      return tableData;
    },
  },
  methods: {
    // onListViewTap(e) {
    //   //console.log('onListViewTap ', e);
    // },
    /**
     * Sets row number
     */
    setRowNumber(number) {
      this.rowNumber = number;
    },
    /**
     * Sets column number
     */
    // setColumnNumber(number) {
    //   this.columnNumber = number;
    // },
    /**
     * Updates rows rendering style
     */
    // addRowsString() {
    //   this.rows += ',auto';
    // },
    /**
     * Initialize grid row,column rendering styles
     */
    // setInitialRowAndColString() {
    //   this.rows = 'auto';
    //   this.columns = 'auto';
    // },
    /**
     * Hides headers which are combined in a single column
     */
    // isHeaderDisabled(headerItem) {
    //   if (this.renderType === 'list' && headerItem.listAlignment === 'vertical') {
    //     return true;
    //   }
    //   return false;
    // },
    /**
     * Returns data of table cell
     */
    // getCellData(dataItem) {
    //   if (Array.isArray(dataItem)) {
    //     //single item: table view
    //     return dataItem;
    //   } else {
    //     //multi items: list view
    //     return [dataItem];
    //   }
    // },
    /**
     * Returns unique key of table cell
     */
    // getCellKey(dataItem, dataIndex) {
    //   return '' + dataItem.rowNo + dataItem.colNo + dataIndex;
    // },
    /**
     * Returns row number of table cell
     */
    // getDataRow(dataItem) {
    //   if (Array.isArray(dataItem)) {
    //     return dataItem[0].rowNo;
    //   } else {
    //     return dataItem.rowNo;
    //   }
    // },
    /**
     * Returns col number of table cell
     */
    // getDataCol(dataItem) {
    //   if (Array.isArray(dataItem)) {
    //     return dataItem[dataItem.length - 1].colNo;
    //   } else {
    //     return dataItem.colNo;
    //   }
    // },
    /**
     * Checkbox Action handler for table row selection
     */
    onTableRowSelected(checked, rowNo) {
      if (checked) {
        this.addSelectedRow(rowNo);
      } else {
        this.removeSelectedRow(rowNo);
      }
    },
    /**
     * Fills cell data according to current column type
     */
    extractCellData(headerItem, dataRow, rowIndex, colIndex) {
      const cellData = {};
      cellData.contains = 'object';
      cellData.params = {};
      cellData.params.type = headerItem.type;
      cellData.params.customCSS = {}; // TODO take css as table prop
      cellData.params.data = {};
      cellData.params.rowNo = rowIndex;
      cellData.params.colNo = colIndex;

      if (headerItem.type === 'image') {
        cellData.params.data.src = dataRow[headerItem.name];
      } else if (headerItem.type === 'text') {
        cellData.params.data.text = dataRow[headerItem.name];
        cellData.params.data.textWrap = true;
      } else if (headerItem.type === 'checkbox') {
        cellData.params.data.checked = dataRow[headerItem.name];
      } else if (headerItem.type === 'button') {
        cellData.params.data.text = dataRow[headerItem.name];
        cellData.params.data.primary = true;
      } else if (headerItem.type === 'link') {
        cellData.params.data.text = dataRow[headerItem.name];
        cellData.params.data.externalUrl = dataRow[headerItem.name];
      } else if (headerItem.type === 'icon') {
        cellData.params.data.icon = dataRow[headerItem.name];
      }

      return cellData;
    },
    /**
     * Returns horizontal alignment value of cell
     */
    cellHorizontalAlignment(dataItem) {
      if (dataItem && dataItem.horizontalAlignment) {
        return dataItem.horizontalAlignment;
      }
      return 'left';
    },
    /**
     * Returns vertical alignment value of cell
     */
    cellVerticalAlignment(dataItem) {
      if (dataItem && dataItem.verticalAlignment) {
        return dataItem.verticalAlignment;
      }
      return 'center';
    },
    /**
     * Adds given row no to selected rows array
     * And fires and event
     */
    addSelectedRow(rowNo) {
      this.selectedRows.push(rowNo);
      this.$emit('onRowSelected', rowNo);
    },
    /**
     * Removes given row no from selected rows array
     * And fires and event
     */
    removeSelectedRow(rowNo) {
      this.selectedRows = this.selectedRows.filter(row => row !== rowNo);
      this.$emit('onRowDeselected', rowNo);
    },
    /**
     * Selects all rows in table view
     * And fires and event
     */
    selectAllRows() {
      this.selectedRows = [];
      for (let i = 1; i < this.rowNumber; i++) {
        this.selectedRows.push(i);
      }
      this.$emit('onSelectAllRows', this.selectedRows);
    },
    /**
     * Deselects all rows in table view
     * And fires and event
     */
    deselectAllRows() {
      this.selectedRows = [];
      this.$emit('onDeselectAllRows', this.selectedRows);
    },
  },
  components: {
    VxpListView,
    StackLayout,
    FlexboxLayout,
    VxpCheckbox,
    VTemplate,
    VxpLabel,
    TableCellItem,
  },
};
</script>

<style lang="scss" scoped></style>
