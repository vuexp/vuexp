<template>
  <StackLayout>
    <GridLayout class="vxp-table-view" :columns="colConfigStr" :rows="rowConfigStr" height="100%">
      <VxpLabel
        class="vxp-table-view__cell"
        v-for="(currentHeader, index) in headerFields"
        :text="currentHeader.label"
        :key="'header_' + index"
        :row="0"
        :col="index"
      />

      <StackLayout
        class="vxp-table-view__cell"
        v-for="currentData in linearDataArray"
        :key="'cell_' + currentData.row + '_' + currentData.col"
        :row="currentData.row"
        :col="currentData.col"
      >
        <component :is="headerFields[currentData.col].type" v-bind="currentData.data" v-on="currentData.eventHandlers" />
      </StackLayout>
    </GridLayout>
  </StackLayout>
</template>
<script>
import GridLayout from '../layouts/GridLayout';
import VxpLabel from './VxpLabel';

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
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    colCount() {
      return this.headerFields.length;
    },
    linearDataArray() {
      let linearDataArray = [];

      for (let rowIndex = 0; rowIndex < this.data.length; rowIndex++) {
        for (let colIndex = 0; colIndex < this.headerFields.length; colIndex++) {
          let objectToBeBound = {};

          for (let currentProp in this.headerFields[colIndex].bindings) {
            objectToBeBound[currentProp] = this.data[rowIndex][this.headerFields[colIndex].bindings[currentProp]];
          }

          let eventHandlersForCell = {};
          for (let currentEventName in this.headerFields[colIndex].eventHandlers) {
            let columnEventHandler = this.headerFields[colIndex].eventHandlers[currentEventName];

            eventHandlersForCell[currentEventName] = e => {
              columnEventHandler(e, this.data[rowIndex], rowIndex, colIndex);
            };
          }

          linearDataArray.push({
            row: rowIndex + 1, // +1 for header
            col: colIndex,
            data: objectToBeBound,
            eventHandlers: eventHandlersForCell,
          });
        }
      }

      return linearDataArray;
    },
    colConfigStr() {
      let widthConfigArr = [];
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
}
</style>
