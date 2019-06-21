<template>
  <StackLayout>
    <GridLayout class="vxp-table-view" :columns="colConfigStr" :rows="rowConfigStr" height="100%">
      <StackLayout v-if="rowSelectionEnabled && showHeaders && !isLoadingLocal" class="vxp-table-view__cell vxp-table-view__cell__header" :row="0" :col="0">
        <VxpCheckbox @change="onSelectAllCbChanged" :checked="areAllRowsChecked" v-show="multirowSelection" :disabled="data.length === 0" />
      </StackLayout>

      <template v-if="showHeaders && !isLoadingLocal">
        <VxpLabel
          class="vxp-table-view__cell vxp-table-view__cell__header"
          v-for="(currentHeader, index) in headerFields"
          :text="currentHeader.label"
          :key="'header_' + index"
          :row="0"
          :col="index + (rowSelectionEnabled ? 1 : 0)"
        />
      </template>

      <template v-if="!isLoadingLocal">
        <StackLayout
          class="vxp-table-view__cell vxp-table-view__cell__body"
          v-for="currentData in linearDataArray"
          :key="'cell_' + currentData.row + '_' + currentData.col"
          :row="currentData.row"
          :col="currentData.col"
          :style="getCellStyle(currentData.row, currentData.col)"
        >
          <VxpCheckbox
            v-if="currentData.isSelectionRow"
            v-on="currentData.events"
            :checked="rowSelections[currentData.row - (showHeaders ? 1 : 0)]"
            style="margin-top:auto; margin-bottom:auto; "
          />
          <component
            v-if="!currentData.isSelectionRow"
            :is="currentData.componentName"
            v-bind="currentData.data"
            v-on="currentData.events"
            style="margin-top:auto; margin-bottom:auto; "
          />
        </StackLayout>
        <Label v-if="data.length === 0" class="vxp-table-view__no-data-msg" :text="notFoundMsg" :col="0" :row="1" :colSpan="actualColCount" />
      </template>

      <slot name="loadingIndicator" v-if="isLoadingLocal" :row="showHeaders ? 1 : 0" :col="0" :colSpan="actualColCount"></slot>
    </GridLayout>
  </StackLayout>
</template>
<script>
import Vue from 'vue';
import GridLayout from '../layouts/GridLayout';
import VxpLabel from './VxpLabel';
import VxpCheckbox from './VxpCheckbox';

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
      default: 'No data',
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    rowSelectionEnabled: {
      type: Boolean,
      default: true,
    },
    multirowSelection: {
      type: Boolean,
      default: true,
    },
    showHeaders: {
      type: Boolean,
      default: true,
    },
    cellStyles: {
      type: Array,
    },
  },
  data() {
    return {
      rowSelections: [],
      isLoadingLocal: false,
    };
  },
  mounted() {
    this.isLoadingLocal = this.isLoading;

    this.data.forEach(() => {
      this.rowSelections.push(false);
    });
  },
  watch: {
    isLoading() {
      this.isLoadingLocal = this.isLoading;
    },
  },
  methods: {
    getCellStyle(rowNumber, colNumber) {
      if (this.cellStyles && this.cellStyles[rowNumber]) {
        return this.cellStyles[rowNumber][colNumber];
      }
      return {};
    },
    onSelectAllCbChanged(checked /*,eventData*/) {
      for (let i = 0; i < this.rowSelections.length; i++) {
        Vue.set(this.rowSelections, i, checked);
      }

      if (checked) {
        this.$emit('onSelectAllRows');
      } else {
        this.$emit('onDeselectAllRows');
      }
    },
    deselectAllRows() {
      for (let i = 0; i < this.rowSelections.length; i++) {
        if (this.rowSelections[i]) {
          this.$emit('onRowDeselected', {}, this.data[i], i);
        }
        Vue.set(this.rowSelections, i, false);
      }
    },
    addRowSelectionCellToLinearDataArray(linearDataArray, rowIndex) {
      linearDataArray.push({
        isSelectionRow: true,
        row: rowIndex + (this.showHeaders ? 1 : 0), // +1 for header
        col: 0,
        events: {
          change: (checked, eventData) => {
            if (checked) {
              if (!this.multirowSelection) {
                this.deselectAllRows();
              }

              this.$emit('onRowSelected', eventData, this.data[rowIndex], rowIndex);
            } else {
              this.$emit('onRowDeselected', eventData, this.data[rowIndex], rowIndex);
            }
            Vue.set(this.rowSelections, rowIndex, checked);
          },
        },
      });
    },
  },
  computed: {
    areAllRowsChecked() {
      if (this.rowSelections.length == 0) {
        return false;
      }

      for (let i = 0; i < this.rowSelections.length; i++) {
        if (!this.rowSelections[i]) {
          return false;
        }
      }
      return true;
    },
    actualColCount() {
      return this.headerFields.length + (this.rowSelectionEnabled ? 1 : 0);
    },
    colCount() {
      return this.headerFields.length;
    },
    linearDataArray() {
      let linearDataArray = [];

      for (let rowIndex = 0; rowIndex < this.data.length; rowIndex++) {
        if (this.rowSelectionEnabled) {
          this.addRowSelectionCellToLinearDataArray(linearDataArray, rowIndex);
        }

        for (let colIndex = 0; colIndex < this.headerFields.length; colIndex++) {
          let objectToBeBound = {};

          for (let currentProp in this.headerFields[colIndex].props) {
            objectToBeBound[currentProp] = this.data[rowIndex][this.headerFields[colIndex].props[currentProp]];
          }

          let eventsForCell = {};
          for (let currentEventName in this.headerFields[colIndex].events) {
            let columnEventHandler = this.headerFields[colIndex].events[currentEventName];

            eventsForCell[currentEventName] = e => {
              columnEventHandler(e, this.data[rowIndex], rowIndex, colIndex);
            };
          }

          linearDataArray.push({
            isSelectionRow: false,
            row: rowIndex + (this.showHeaders ? 1 : 0),
            col: colIndex + (this.rowSelectionEnabled ? 1 : 0),
            data: objectToBeBound,
            events: eventsForCell,
            componentName: this.headerFields[colIndex].type,
          });
        }
      }

      return linearDataArray;
    },
    colConfigStr() {
      let widthConfigArr = [];
      if (this.rowSelectionEnabled) {
        widthConfigArr.push('auto');
      }

      this.headerFields.forEach(currentHeader => {
        widthConfigArr.push(currentHeader.width);
      });
      return widthConfigArr.join(','); // like *,*,auto,*,*
    },
    rowConfigStr() {
      let heightConfigArr = []; // init with auto for header
      if (this.showHeaders) {
        heightConfigArr.push('auto');
      }

      if (this.data.length === 0) {
        heightConfigArr.push('auto');
      }

      this.data.forEach(() => {
        heightConfigArr.push('*');
      });
      return heightConfigArr.join(','); // like *,*,auto,*,*
    },
  },
  components: {
    GridLayout,
    VxpLabel,
    VxpCheckbox,
  },
};
</script>

<style lang="scss">
@import '../assets/styles/helpers.scss';
@import url('/fonts/fontawesome.min.css');

.vxp-table-view {
  border-style: solid;
  border-color: lightgray;
  border-width: unit(1);
  border-radius: unit(10);

  &__cell {
    // border-color: black;
    // border-width: unit(3);

    &__body {
      padding: unit(10);
    }

    &__header {
      padding: unit(10);
      text-align: center;
      background-color: #eff5fc;
    }
  }

  &__no-data-msg {
    text-align: center;
  }
}
</style>
