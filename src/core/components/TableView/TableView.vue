<template>
  <GridLayout ref="tableViewRef">
    <template v-if="isLoading || dataNotFound">
      <slot row="0" col="0" v-if="hasSlots && isLoading" name="loadingIndicator" />
      <VxpLabel row="0" col="0" v-if="!isLoading && dataNotFound" :text="notFoundMsg"></VxpLabel>
    </template>
    <template v-else-if="tableData.length">
      <TableHeader
        v-for="(headerItem, headerIndex) in tableHeader"
        :key="headerIndex"
        :headerType="headerItem.type"
        :headerName="headerItem.name"
        :headerLabel="headerItem.label"
        :sortable="headerItem.sortable"
        :rowSelection="rowSelection"
        row="0"
        :col="headerIndex"
      >
      </TableHeader>

      <TableCell
        v-for="(dataItem, dataIndex) in tableData"
        :key="dataIndex"
        :cellData="dataItem"
        :cellHorizontalAlignment="cellHorizontalAlignment()"
        :cellVerticalAlignment="cellVerticalAlignment()"
        :customCSS="dataItem.customCSS"
        :row="dataItem.rowNo"
        :col="dataItem.colNo"
      ></TableCell>
    </template>
  </GridLayout>
</template>
<script>
import GridLayout from '../../../layouts/GridLayout';
import TableCell from './TableCell';
import TableHeader from './TableHeader';
import VxpLabel from '../../../components/VxpLabel';

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
    trackWith: {
      type: String,
      default: 'id',
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
    rowSelection: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      selectedRows: [],
      selectedColumns: [], // visible columns
    };
  },
  computed: {
    hasSlots: function() {
      return this.$slots.pagination !== undefined || this.$slots.ItemsPerPage !== undefined || this.$slots.loadingIndicator !== undefined;
    },
    dataNotFound() {
      if (this.data === null || typeof this.data === 'undefined' || this.data.length === 0) {
        return true;
      }
      return false;
    },
    tableHeader() {
      let headers = [];
      if (this.rowSelection) {
        const selectionCell = {
          name: '',
          label: '',
          type: 'checkbox',
          sortable: false,
          rowSelection: true,
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
        };
        headers.push(item);
      });
      return headers;
    },
    tableData() {
      const tableData = [];
      if (this.data !== null && this.headerFields !== null && typeof this.data !== 'undefined') {
        let rowIndex = 1; // indicates current row number, row 0 is header field in grid
        let colIndex = 0; // indicates current column number

        this.data.forEach(dataRow => {
          colIndex = 0; // set zero at the beginning of new row

          if (this.rowSelection) {
            const selectionCell = {};
            selectionCell.type = 'checkbox';
            selectionCell.customCSS = {}; // TODO take css as table prop
            selectionCell.data = {};
            selectionCell.rowNo = rowIndex;
            selectionCell.colNo = colIndex;
            selectionCell.data.checked = this.selectedRows.includes(rowIndex);

            // wrapped with array notation because
            // it can store single item for table view appearance
            // or can store multiple items for list view appearance
            tableData.push([selectionCell]);
            colIndex++;
          }

          // Loop only selected columns
          this.headerFields.forEach(headerItem => {
            const cellData = this.extractCellData(headerItem, dataRow, rowIndex, colIndex);

            // wrapped with array notation because
            // it can store single item for table view appearance
            // or can store multiple items for list view appearance
            tableData.push([cellData]);

            colIndex++; // increase column index
          });
          rowIndex++; // increase row index
        });
      }
      return tableData;
    },
  },
  methods: {
    extractCellData(headerItem, dataRow, rowIndex, colIndex) {
      const cellData = {};
      cellData.type = headerItem.type;
      cellData.customCSS = {}; // TODO take css as table prop
      cellData.data = {};
      cellData.rowNo = rowIndex;
      cellData.colNo = colIndex;

      // TODO how to understand data types ???
      if (headerItem.type === 'photo') {
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
    cellHorizontalAlignment(dataItem) {
      if (dataItem && dataItem.horizontalAlignment) {
        return dataItem.horizontalAlignment;
      }
      return 'left';
    },
    cellVerticalAlignment(dataItem) {
      if (dataItem && dataItem.verticalAlignment) {
        return dataItem.verticalAlignment;
      }
      return 'top';
    },
    addSelectedRow(rowNo) {
      this.selectedRows.push(rowNo);
    },
    removeSelectedRow(rowNo) {
      this.selectedRows.filter(row => row !== rowNo);
    },
    selectAllRows() {
      this.selectedRows = [];
      for (let i = 0; i < this.data.length; i++) {
        this.selectedRows.push(i);
      }
    },
    deselectAllRows() {
      this.selectedRows = [];
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
