<template>
  <div class="vxp-action-bar">
    <span v-if="title && showTitle" class="vxp-action-bar__title">{{ title }}</span>
    <slot></slot>
  </div>
</template>

<script>
import Gestures from '../mixins/GestureMixin';

export default {
  name: 'ActionBar',
  data: function() {
    return {
      navigationButtonCreated: false,
    };
  },
  props: {
    title: String,
  },
  computed: {
    showTitle: function() {
      if (this.$slots.default) {
        for (let slot of this.$slots.default) {
          if (slot.componentOptions && slot.componentOptions.tag && !['ActionItem', 'NavigationButton'].includes(slot.componentOptions.tag)) return false;
        }
      }
      return true;
    },
  },
  mounted() {
    // Only last navigation button will show
    this.processSlots();
  },
  updated() {
    this.processSlots();
  },
  methods: {
    processSlots() {
      this.navigationButtonCreated = false;
      if (this.$slots.default) {
        for (let i = this.$slots.default.length - 1; i >= 0; i--) {
          let slot = this.$slots.default[i];
          if (slot.componentOptions && slot.componentOptions.tag && slot.componentOptions.tag === 'NavigationButton') {
            if (!this.navigationButtonCreated) {
              this.navigationButtonCreated = true;
              slot.elm.style.display = 'inherit';
            } else {
              slot.elm.style.display = 'none';
            }
          }
        }
      }
    },
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.vxp-action-bar {
  display: flex;
  height: 40px;
  background-color: #f5f5f5;
  color: #333333;
  box-sizing: border-box;
  flex-direction: row;
  width: 100%;
  padding: 0 5px 0px 10px;
  align-items: center;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);

  &__title {
    margin: 0 5px;
    white-space: nowrap;
    font-size: 18px;
  }

  & > * {
    flex: 1;
    align-items: center;
  }
  .vxp-action-item,
  .vxp-navigation-button {
    flex: 0 1 auto;
  }
}
</style>
