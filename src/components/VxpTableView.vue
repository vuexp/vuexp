<template>
  <StackLayout>
    <GridLayout ref="tableViewRef" class="vxp-table-view" :columns="getColumnsString" :rows="getRowsString">
      <template v-if="isLoading || dataNotFound">
        <slot row="0" col="0" class="vxp-table-view-loading-indicator" v-if="hasSlots && isLoading" name="loadingIndicator" />
        <VxpLabel row="0" col="0" class="vxp-table-view-not-found-msg" v-if="!isLoading && dataNotFound" :text="notFoundMsg"></VxpLabel>
      </template>
      <template v-else-if="tableData.length">
        <TableHeader
          v-for="(headerItem, headerIndex) in tableHeaderData"
          :key="headerIndex"
          :type="headerItem.type"
          :name="headerItem.name"
          :label="headerItem.label"
          :sortable="headerItem.sortable"
          :rowSelection="rowSelectionEnabled && headerIndex === 0"
          :disabled="isHeaderDisabled()"
          row="0"
          :col="headerIndex"
          @checkAllClicked="$event === true ? selectAllRows() : deselectAllRows()"
          @onAscendingClicked="$emit('onAscendingClicked', $event)"
          @onDescendingClicked="$emit('onDescendingClicked', $event)"
        />
        <StackLayout
          v-if="rowSelectionEnabled && renderType === 'list'"
          orientation="horizontal"
          row="0"
          col="0"
          :colSpan="columnNumber"
          class="vxp-table-view-list-select-all-container"
        >
          <VxpCheckbox class="vxp-table-view-list-select-all-checkbox" @change="$event === true ? selectAllRows() : deselectAllRows()" />
          <VxpLabel text="Select All" class="vxp-table-view-list-select-all-label" />
        </StackLayout>

        <TableCell
          v-for="(dataItem, dataIndex) in tableData"
          :key="getCellKey(dataItem, dataIndex)"
          :cellData="getCellData(dataItem)"
          :cellHorizontalAlignment="cellHorizontalAlignment()"
          :cellVerticalAlignment="cellVerticalAlignment()"
          :customCSS="dataItem.customCSS"
          :row="getDataRow(dataItem)"
          :col="getDataCol(dataItem)"
          :totalColCount="columnNumber"
          :renderType="renderType"
          :currentRowNo="getDataRow(dataItem)"
          :currentColNo="getDataCol(dataItem)"
          @checkboxClicked="onTableRowSelected(...arguments)"
          @buttonClicked="onTableButtonClicked($event)"
          @linkClicked="onTableLinkClicked($event)"
          @imageLoaded="$emit('onImageLoaded', $event)"
          @imageLoadError="$emit('onImageLoadError', $event)"
          @actionItemClicked="onTableActionItemClicked(...arguments)"
        ></TableCell>
      </template>
    </GridLayout>
    <FlexboxLayout v-if="hasSlots" flexWrap="wrap">
      <slot name="ItemsPerPage" />
      <slot name="pagination" />
    </FlexboxLayout>
  </StackLayout>
</template>
<script>
import GridLayout from '../layouts/GridLayout';
import StackLayout from '../layouts/StackLayout';
import FlexboxLayout from '../layouts/FlexboxLayout';
import TableCell from '../core/components/TableView/TableCell';
import TableHeader from '../core/components/TableView/TableHeader';
import VxpLabel from './VxpLabel';
import VxpCheckbox from './VxpCheckbox';
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
      selectedRows: [], // selected rows
      selectedColumns: this.headerFields, // visible columns
      columns: 'auto', // gridview columns string
      rows: 'auto', // gridview rows string
      columnNumber: 0, // total column number
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
    tableHeaderData() {
      let headers = [];
      if (this.rowSelectionEnabled) {
        // Select All checkbox
        const selectionCell = {
          name: '',
          label: '',
          type: 'checkbox',
          sortable: false,
          rowSelection: true,
          listAlignment: 'horizontal',
        };
        headers.push(selectionCell);
      }

      this.headerFields.forEach(headerItem => {
        const item = {
          name: headerItem.name,
          label: headerItem.label,
          type: headerItem.type,
          sortable: headerItem.sortable,
          rowSelection: false,
          listAlignment: headerItem.listAlignment,
        };
        headers.push(item);
      });

      return headers;
    },
    /**
     * Produces 'columns' string for gridview
     */
    getColumnsString() {
      let cols = 'auto';
      for (var i = 0; i < this.selectedColumns.length; i++) {
        if (this.renderType === 'table' || (this.renderType === 'list' && this.selectedColumns[i].listAlignment === 'horizontal')) {
          if (this.selectedColumns[i].columnWidth) {
            cols += ',' + this.selectedColumns[i].columnWidth;
          } else {
            cols += ',auto';
          }
        }
      }
      return cols;
    },
    /**
     * Returns 'rows' string for gridview
     */
    getRowsString() {
      return this.rows;
    },
    /**
     * Generates all table cells and their data types, props
     * and also helps to switching of rendering types
     */
    tableData() {
      const tableData = []; // will store all table cells and their props
      if (this.data !== null && this.headerFields !== null && typeof this.data !== 'undefined') {
        let rowIndex = 1; // indicates current row number, row 0 is header field in grid
        let colIndex = 0; // indicates current column number

        // initialize grid row,column rendering styles
        this.setInitialRowAndColString();

        this.data.forEach(dataRow => {
          colIndex = 0; // set zero at the beginning of new row

          //insert checkbox at the beginning of every row
          if (this.rowSelectionEnabled) {
            const selectionCell = {};
            selectionCell.type = 'checkbox';
            selectionCell.customCSS = {}; // TODO take css as table prop
            selectionCell.data = {};
            selectionCell.rowNo = rowIndex;
            selectionCell.colNo = colIndex;
            selectionCell.data.checked = this.selectedRows.includes(rowIndex);

            tableData.push(selectionCell);
            colIndex++;
          }

          // Loop only selected columns
          this.headerFields.forEach(headerItem => {
            const cellData = this.extractCellData(headerItem, dataRow, rowIndex, colIndex);
            if (this.renderType === 'table' || (this.renderType === 'list' && headerItem.listAlignment === 'horizontal')) {
              // every object/array will be on new column in the table
              tableData.push(cellData);
              colIndex++; // increase column index
            } else if (this.renderType === 'list' && headerItem.listAlignment === 'vertical') {
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

          if (this.renderType === 'list') {
            colIndex++;
            const actionCell = {};
            actionCell.type = 'icon';
            actionCell.customCSS = {}; // TODO take css as table prop
            actionCell.data = {};
            actionCell.rowNo = rowIndex;
            actionCell.colNo = colIndex;
            actionCell.data.actionName = 'choose';
            actionCell.data.icon = 'fa fa-exclamation-triangle'; //TODO update icon

            tableData.push(actionCell);
          }

          this.addRowsString(); // update rows rendering style
          rowIndex++; // increase row index
        });

        // save total row, column number
        this.setColumnNumber(colIndex);
        this.setRowNumber(rowIndex);
      }
      return tableData;
    },
  },
  methods: {
    onTableActionItemClicked(itemId, actionName) {
      const rowNo = itemId ? itemId.split('-')[0] : null;
      if (rowNo) {
        this.$emit('onActionItemClicked', actionName, this.data[rowNo - 1]);
      }
    },
    onTableLinkClicked(linkId) {
      const rowNo = linkId ? linkId.split('-')[0] : null;
      if (rowNo) {
        this.$emit('onLinkClicked', this.data[rowNo - 1]);
      }
    },
    onTableButtonClicked(buttonId) {
      const rowNo = buttonId ? buttonId.split('-')[0] : null;
      if (rowNo) {
        this.$emit('onButtonClicked', this.data[rowNo - 1]);
      }
    },
    /**
     * Sets row number
     */
    setRowNumber(number) {
      this.rowNumber = number;
    },
    /**
     * Sets column number
     */
    setColumnNumber(number) {
      this.columnNumber = number;
    },
    /**
     * Updates rows rendering style
     */
    addRowsString() {
      this.rows += ',auto';
    },
    /**
     * Initialize grid row,column rendering styles
     */
    setInitialRowAndColString() {
      this.rows = 'auto';
      this.columns = 'auto';
    },
    /**
     * Hides headers which are combined in a single column
     */
    isHeaderDisabled() {
      if (this.renderType === 'list') {
        return true;
      }
      return false;
    },
    /**
     * Returns data of table cell
     */
    getCellData(dataItem) {
      if (Array.isArray(dataItem)) {
        //single item: table view
        return dataItem;
      } else {
        //multi items: list view
        return [dataItem];
      }
    },
    /**
     * Returns unique key of table cell
     */
    getCellKey(dataItem, dataIndex) {
      return '' + dataItem.rowNo + dataItem.colNo + dataIndex;
    },
    /**
     * Returns row number of table cell
     */
    getDataRow(dataItem) {
      if (Array.isArray(dataItem)) {
        return dataItem[0].rowNo;
      } else {
        return dataItem.rowNo;
      }
    },
    /**
     * Returns col number of table cell
     */
    getDataCol(dataItem) {
      if (Array.isArray(dataItem)) {
        return dataItem[dataItem.length - 1].colNo;
      } else {
        return dataItem.colNo;
      }
    },
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
      cellData.type = headerItem.type;
      cellData.customCSS = {}; // TODO take css as table prop
      cellData.data = {};
      cellData.rowNo = rowIndex;
      cellData.colNo = colIndex;

      if (headerItem.type === 'image') {
        cellData.data.src = dataRow[headerItem.name];
        cellData.data.stretch = 'aspectFill';
        cellData.customCSS = {};
        cellData.customCSS['border-radius'] = '100%';
        // cellData.customCSS['width'] = '100%';
        // cellData.customCSS['height'] = '100%';
        cellData.customCSS['width'] = '75px';
        cellData.customCSS['height'] = '75px';
      } else if (headerItem.type === 'text') {
        cellData.data.text = dataRow[headerItem.name];
        cellData.data.textWrap = true;
      } else if (headerItem.type === 'checkbox') {
        cellData.data.checked = dataRow[headerItem.name];
      } else if (headerItem.type === 'button') {
        cellData.data.text = dataRow[headerItem.name];
        cellData.data.primary = true;
      } else if (headerItem.type === 'link') {
        cellData.data.text = dataRow[headerItem.name];
      } else if (headerItem.type === 'icon') {
        cellData.data.icon = headerItem.label;
      }

      if (typeof headerItem.isAction !== 'undefined' && headerItem.isAction) {
        cellData.data.actionName = headerItem.name;
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
      this.$emit('onRowSelected', this.data[rowNo - 1]);
    },
    /**
     * Removes given row no from selected rows array
     * And fires and event
     */
    removeSelectedRow(rowNo) {
      this.selectedRows = this.selectedRows.filter(row => row !== rowNo);
      this.$emit('onRowDeselected', this.data[rowNo - 1]);
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
    GridLayout,
    TableCell,
    TableHeader,
    VxpLabel,
    StackLayout,
    FlexboxLayout,
    VxpCheckbox,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/helpers.scss';
@import url('/fonts/fontawesome.min.css');
.vxp-table-view-list-select-all-checkbox {
  margin: unit(5);
}
.vxp-table-view-list-select-all-label {
  margin: unit(5);
}
</style>
