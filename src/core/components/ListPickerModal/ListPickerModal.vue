<template>
  <GridLayout class="vxp-list-picker-modal" rows="*, auto" columns="*, *">
    <ListPicker
      row="0"
      col="0"
      colSpan="2"
      class="vxp-list-picker-modal__list-picker"
      :class="{ 'vxp-list-picker-modal__ios': platform === 'ios' }"
      :items="listOfItems"
      v-model="index"
      @selectedIndexChange="$emit('selectedIndexChange', index)"
    />
    <Button row="1" col="0" text="Cancel" @tap="cancel" />
    <Button row="1" col="1" text="Done" @tap="done" />
  </GridLayout>
</template>

<script>
import platform from '../../../platform';
import GridLayout from '../../../layouts/GridLayout';
import Button from '../Button/Button';

export default {
  name: 'ListPickerModal',
  components: { Button, GridLayout },
  props: ['listOfItems', 'selectedIndex'],
  data() {
    return {
      index: this.selectedIndex,
      platform: platform.platform,
    };
  },
  methods: {
    done() {
      if (this.$modal) this.$modal.close(this.index);
    },
    cancel() {
      if (this.$modal) this.$modal.close();
    },
  },
  created() {
    this.index = this.index === -1 || !this.index ? 0 : this.index;
  },
};
</script>

<style lang="scss">
.vxp-list-picker-modal {
  width: 100%;
  &__list-picker {
    width: 100%;
  }
}
</style>
