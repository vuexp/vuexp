<template>
  <StackLayout orientation="vertical" :class="['vxp-table-view-cell', { 'vxp-table-view-cell-double': this.currentRowNo && this.currentRowNo % 2 === 0 }]">
    <TableCellItem
      v-for="(cellItem, index) in cellData"
      :key="getCellNo(cellItem, index)"
      :horizontalAlignment="cellHorizontalAlignment"
      :verticalAlignment="cellVerticalAlignment"
      :itemType="cellItem.type"
      :itemData="cellItem"
      :customCSS="cellItem.customCSS"
      @checkboxClicked="$emit('checkboxClicked', $event)"
      @buttonClicked="$emit('buttonClicked', $event)"
      @imageLoaded="$emit('imageLoaded', $event)"
      @imageLoadError="$emit('imageLoadError', $event)"
    ></TableCellItem>
  </StackLayout>
</template>
<script>
import TableCellItem from './TableCellItem';
import StackLayout from '../../../layouts/StackLayout';

export default {
  name: 'TableCell',
  props: {
    // cellData can store single item for table view appearance
    // cellData can store multiple items for list view appearance
    cellData: {
      type: Array,
      default: null,
      required: true,
    },
    cellHorizontalAlignment: {
      type: String,
      default: 'left',
    },
    cellVerticalAlignment: {
      type: String,
      default: 'top',
    },
    customCSS: {
      type: Object,
      default: null,
    },
  },
  components: {
    TableCellItem,
    StackLayout,
  },
  data() {
    return {
      currentRowNo: null,
    };
  },
  methods: {
    getCellNo(cellItem, index) {
      if (cellItem !== null && typeof cellItem !== 'undefined') {
        this.currentRowNo = cellItem.rowNo;
        return '' + cellItem.rowNo + cellItem.colNo + index;
      }
      return '00';
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../../assets/styles/helpers.scss';

.vxp-table-view-cell {
  padding: unit(5);
  border-width: unit(0) unit(1) unit(1) unit(1);
  border-style: solid;
  border-color: gray;
}

.vxp-table-view-cell-double {
  background-color: #eee;
}
</style>
