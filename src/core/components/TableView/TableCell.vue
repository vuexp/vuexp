<template>
  <StackLayout v-if="cellData.length > 1" orientation="vertical" :class="getCellClass()">
    <TableCellItem
      v-for="(cellItem, index) in cellData"
      :key="getCellNo(cellItem, index)"
      :horizontalAlignment="cellHorizontalAlignment"
      :itemType="cellItem.type"
      :itemData="cellItem"
      :customCSS="cellItem.customCSS"
      @checkboxClicked="checkboxClicked(...arguments)"
      @buttonClicked="$emit('buttonClicked', $event)"
      @linkClicked="$emit('linkClicked', $event)"
      @imageLoaded="$emit('imageLoaded', $event)"
      @imageLoadError="$emit('imageLoadError', $event)"
      @actionItemClicked="actionItemClicked(...arguments)"
    ></TableCellItem>
  </StackLayout>
  <StackLayout v-else orientation="horizontal" :class="getCellClass()">
    <TableCellItem
      v-for="(cellItem, index) in cellData"
      :key="getCellNo(cellItem, index)"
      :verticalAlignment="cellVerticalAlignment"
      :itemType="cellItem.type"
      :itemData="cellItem"
      :customCSS="cellItem.customCSS"
      @checkboxClicked="checkboxClicked(...arguments)"
      @buttonClicked="$emit('buttonClicked', $event)"
      @linkClicked="$emit('linkClicked', $event)"
      @imageLoaded="$emit('imageLoaded', $event)"
      @imageLoadError="$emit('imageLoadError', $event)"
      @actionItemClicked="actionItemClicked(...arguments)"
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
      default: 'center',
    },
    renderType: {
      type: String,
      default: 'table',
    },
    totalColCount: {
      type: Number,
    },
    currentRowNo: {
      type: Number,
    },
    currentColNo: {
      type: Number,
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
    actionItemClicked(itemId, actionName) {
      this.$emit('actionItemClicked', itemId, actionName);
    },
    checkboxClicked(checked, rowNo) {
      this.$emit('checkboxClicked', checked, rowNo);
    },
    getCellNo(cellItem, index) {
      if (cellItem !== null && typeof cellItem !== 'undefined') {
        return '' + cellItem.rowNo + '-' + cellItem.colNo + '-' + index;
      }
      return '00';
    },
    getCellClass() {
      let classes = [];
      if (this.renderType === 'table') {
        classes.push('vxp-table-view-cell');
        if (this.currentRowNo && this.currentRowNo % 2 === 0) {
          classes.push('vxp-table-view-cell-double');
        }
      } else {
        if (this.currentColNo === 0) {
          classes.push('table-view-cell-first');
        } else if (this.currentColNo === this.totalColCount || (this.renderType === 'list' && this.currentColNo === this.totalColCount - 1)) {
          classes.push('table-view-cell-last');
        } else {
          classes.push('table-view-cell-center');
        }
      }
      return classes;
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

.table-view-cell-center {
  margin: unit(8) unit(0);
  border-width: unit(1) 0 unit(1) unit(0);
  border-style: solid;
  border-color: gray;
  padding: unit(5);
  background-color: #eaeaea;
}
.table-view-cell-first {
  border-width: unit(1) 0 unit(1) unit(1);
  margin: unit(8) unit(0);
  border-top-left-radius: 5%;
  border-bottom-left-radius: 5%;
  border-style: solid;
  border-color: gray;
  padding: unit(5);
  background-color: #eaeaea;
}
.table-view-cell-last {
  background-color: #eaeaea;
  margin: unit(8) unit(0);
  border-width: unit(1) unit(1) unit(1) 0;
  border-top-right-radius: 5%;
  border-bottom-right-radius: 5%;
  border-style: solid;
  border-color: gray;
  padding: unit(5);
}
</style>
