<template>
  <StackLayout orientation="horizontal" class="vxp-table-view-header">
    <VxpCheckbox v-if="rowSelection" :check="checkedAll" @onTap="checkedAllUpdate"></VxpCheckbox>

    <VxpLabel v-if="!rowSelection" :text="headerLabel" textWrap="true"></VxpLabel>
    <StackLayout v-if="sortable" orientation="vertical" class="vxp-table-view-header-sorting-buttons">
      <VxpIconButton icon="fa fa-exclamation-triangle" size="20" @tap="this.$emit('onAscendingClicked', $event)"></VxpIconButton>
      <VxpIconButton icon="fa fa-exclamation-triangle" size="20" @tap="this.$emit('onDescendingClicked', $event)"></VxpIconButton>
    </StackLayout>
  </StackLayout>
</template>
<script>
import VxpLabel from '../../../components/VxpLabel';
import VxpCheckbox from '../../../components/VxpCheckbox';
import StackLayout from '../../../layouts/StackLayout';

export default {
  name: 'TableHeader',
  props: {
    headerType: {
      type: String,
      default: null,
      required: true,
    },
    headerName: {
      type: String,
      default: null,
      required: true,
    },
    headerLabel: {
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
    VxpCheckbox,
    StackLayout,
  },
};
</script>
<style lang="scss" scoped></style>
