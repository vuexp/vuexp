<template>
  <StackLayout class="vxp-list-picker-modal">
    <ListPicker
      class="vxp-list-picker-modal__list-picker"
      :class="{ 'vxp-list-picker-modal__ios': platform === 'ios' }"
      :items="listOfItems"
      v-model="index"
      @selectedIndexChange="$emit('selectedIndexChange', index)"
      @tap="onClicked"
    />
  </StackLayout>
</template>

<script>
import platform from '../../../platform';

export default {
  name: 'ListPickerModal',
  props: ['listOfItems', 'selectedIndex'],
  data() {
    return {
      index: this.selectedIndex,
      platform: platform.platform,
    };
  },
  methods: {
    onClicked() {
      if (this.$modal) this.$modal.close(this.index);
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
  &__ios {
    height: 100%;
  }
}
</style>
