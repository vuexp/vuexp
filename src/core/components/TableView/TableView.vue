<template>
  <GridLayout ref="tableViewRef" class="vxp-table-view" :columns="getColumnsString(columns)" :rows="getRowsString">
    <template v-if="isLoading || dataNotFound">
      <slot row="0" col="0" class="vxp-table-view-loading-indicator" v-if="hasSlots && isLoading" name="loadingIndicator" />
      <VxpLabel row="0" col="0" class="vxp-table-view-not-found-msg" v-if="!isLoading && dataNotFound" :text="notFoundMsg"></VxpLabel>
    </template>
    <template v-else-if="tableData.length">
      <TableHeader
        v-for="(headerItem, headerIndex) in tableHeaderData"
        :key="headerIndex"
        :headerType="headerItem.type"
        :headerName="headerItem.name"
        :headerLabel="headerItem.label"
        :sortable="headerItem.sortable"
        :rowSelection="rowSelectionEnabled && headerIndex === 0"
        :disabled="isHeaderDisabled(headerItem)"
        row="0"
        :col="headerIndex"
        @checkAllClicked="$event === true ? selectAllRows() : deselectAllRows()"
      >
      </TableHeader>

      <TableCell
        v-for="(dataItem, dataIndex) in tableData"
        :key="getCellKey(dataItem, dataIndex)"
        :cellData="getCellData(dataItem)"
        :cellHorizontalAlignment="cellHorizontalAlignment()"
        :cellVerticalAlignment="cellVerticalAlignment()"
        :customCSS="dataItem.customCSS"
        :row="getDataRow(dataItem)"
        :col="getDataCol(dataItem)"
        @checkboxClicked="onTableRowSelected($event, dataItem.rowNo)"
        @buttonClicked="$emit('buttonClicked', $event)"
        @imageLoaded="$emit('imageLoaded', $event)"
        @imageLoadError="$emit('imageLoadError', $event)"
      ></TableCell>
    </template>
  </GridLayout>
</template>
<script>
import GridLayout from '../../../layouts/GridLayout';
import TableCell from './TableCell';
import TableHeader from './TableHeader';
import VxpLabel from '../../../components/VxpLabel';
import platform from '../../../platform';

export default {
  name: 'TableView',
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
    getColumnsString(columns) {
      for (var i = 0; i < this.selectedColumns.length; i++) {
        if (this.renderType === 'table' || (this.renderType === 'list' && this.selectedColumns[i].listAlignment === 'horizontal')) {
          columns += ',*';
        }
      }
      return columns;
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

          this.addRowsString(); // update rows rendering style
          this.increaseRowIndex(); // increase row index
        });

        // save total row, column number
        this.setRowNumber(rowIndex);
      }
      return tableData;
    },
  },
  methods: {
    /**
     * Sets row number
     */
    setRowNumber(number) {
      this.rowNumber = number;
    },
    /**
     * Increase row index
     */
    increaseRowIndex() {
      this.rowIndex++;
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
    isHeaderDisabled(headerItem) {
      if (this.renderType === 'list' && headerItem.listAlignment === 'vertical') {
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
        return dataItem[0].colNo;
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
        cellData.data.externalUrl = dataRow[headerItem.name];
      } else if (headerItem.type === 'icon') {
        cellData.data.icon = dataRow[headerItem.name];
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
      return 'top';
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
    GridLayout,
    TableCell,
    TableHeader,
    VxpLabel,
  },
};
</script>

<style lang="scss" scoped></style>
