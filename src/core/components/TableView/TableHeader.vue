<template>
  <StackLayout v-if="!disabled" orientation="horizontal" class="vxp-table-view-header">
    <VxpCheckbox v-if="rowSelection" :check="checkedAll" @change="$emit('checkAllClicked', $event)" class="vxp-table-view-header-checkbox"></VxpCheckbox>

    <StackLayout v-if="!rowSelection" orientation="horizontal">
      <VxpLabel :text="label" :textWrap="true" class="vxp-table-view-header-label"></VxpLabel>
      <StackLayout v-if="sortable" orientation="vertical" class="vxp-table-view-header-sorting-buttons">
        <VxpIconButton icon="fa-chevron-up" iconName="fa" size="20" @tap="$emit('onAscendingClicked', name)"></VxpIconButton>
        <VxpIconButton icon="fa-chevron-down" iconName="fa" size="20" @tap="$emit('onDescendingClicked', name)"></VxpIconButton>
      </StackLayout>
    </StackLayout>
  </StackLayout>
</template>
<script>
import VxpLabel from '../../../components/VxpLabel';
import VxpIconButton from '../../../components/VxpIconButton';
import VxpCheckbox from '../../../components/VxpCheckbox';
import StackLayout from '../../../layouts/StackLayout';

export default {
  name: 'TableHeader',
  props: {
    type: {
      type: String,
      default: null,
      required: true,
    },
    name: {
      type: String,
      default: null,
      required: true,
    },
    label: {
      type: String,
      default: null,
    },
    sortable: {
      type: Boolean,
      default: false,
    },
    rowSelection: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checkedAll: false,
    };
  },
  computed: {
    //TODO add settings button
    componentParams() {
      let params = {};
      if (this.headerData === null || typeof this.headerData === 'undefined') {
        return params;
      } else {
        params = this.headerData;
      }

      // style params
      if (this.customCSS !== null || typeof this.customCSS !== 'undefined') {
        Object.keys(this.customCSS).forEach(cssKey => {
          params[cssKey] = this.customCSS[cssKey];
        });
      }
      return params;
    },
  },
  methods: {
    checkedAllUpdate() {
      this.checkedAll = !this.checkedAll;
      this.$emit('onCheckAll', this.checkedAll);
    },
  },
  components: {
    VxpLabel,
    VxpIconButton,
    VxpCheckbox,
    StackLayout,
  },
};
</script>
<style lang="scss" scoped>
@import '../../../assets/styles/helpers.scss';

.vxp-table-view-header {
  padding: unit(5);
  border: unit(1) solid darkgray;
  background-color: gray;
}
</style>
