<template>
  <StackLayout>
    <GridLayout class="vxp-table-view" :columns="colConfigStr" :rows="rowConfigStr" height="100%">
      <StackLayout v-if="rowSelectionEnabled" class="vxp-table-view__cell vxp-table-view__selection_header" :row="0" :col="0">
        <VxpCheckbox @change="onSelectAllCbChanged" :checked="areAllRowsChecked" v-show="multirowSelection" />
      </StackLayout>

      <VxpLabel
        class="vxp-table-view__cell"
        v-for="(currentHeader, index) in headerFields"
        :text="currentHeader.label"
        :key="'header_' + index"
        :row="0"
        :col="index + (rowSelectionEnabled ? 1 : 0)"
      />

      <StackLayout
        class="vxp-table-view__cell"
        v-for="currentData in linearDataArray"
        :key="'cell_' + currentData.row + '_' + currentData.col"
        :row="currentData.row"
        :col="currentData.col"
      >
        <VxpCheckbox v-if="currentData.isSelectionRow" v-on="currentData.events" :checked="rowSelections[currentData.row - (rowSelectionEnabled ? 1 : 0)]" />
        <component v-if="!currentData.isSelectionRow" :is="currentData.componentName" v-bind="currentData.data" v-on="currentData.events" />
      </StackLayout>
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
    multirowSelection: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      rowSelections: [],
    };
  },
  mounted() {
    this.data.forEach(() => {
      this.rowSelections.push(false);
    });
  },
  methods: {
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
        row: rowIndex + 1, // +1 for header
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
      for (let i = 0; i < this.rowSelections.length; i++) {
        if (!this.rowSelections[i]) {
          return false;
        }
      }
      return true;
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
            row: rowIndex + 1, // +1 for header
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
      let heightConfigArr = ['auto']; // init with auto for header
      this.data.forEach(() => {
        heightConfigArr.push('auto');
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

<style lang="scss" scoped>
@import '../assets/styles/helpers.scss';
@import url('/fonts/fontawesome.min.css');

.vxp-table-view {
  &__cell {
    border-width: unit(1);
    border-color: black;
    border-style: solid;
    padding: unit(3);
    margin: unit(1);
  }
  &__selection_header {
  }
}
</style>
