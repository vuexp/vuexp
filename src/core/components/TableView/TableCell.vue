<template>
  <StackLayout orientation="vertical" class="vxp-table-view-cell">
    <TableCellItem
      v-for="cellItem in cellData"
      :key="getCellNo(cellItem)"
      :horizontalAlignment="cellHorizontalAlignment"
      :verticalAlignment="cellVerticalAlignment"
      :itemType="cellItem.type"
      :itemData="cellItem.data"
      :customCSS="cellItem.customCSS"
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
  methods: {
    getCellNo(cellItem) {
      if (cellItem !== null && typeof cellItem !== 'undefined') {
        return '' + cellItem.rowNo + cellItem.colNo;
      }
      return '00';
    },
  },
};
</script>
<style lang="scss" scoped></style>
