<template>
  <StackLayout :class="{ 'vxp-accordion-item': true, 'vxp-accordion-item__active': isOpen }" :id="item_id">
    <StackLayout class="vxp-accordion-item__header" @tap="notifyOfClick">
      <VxpLabel class="vxp-accordion-item__header__title" :text="title" />
    </StackLayout>
    <StackLayout class="vxp-accordion-item__body" ref="body">
      <StackLayout v-show="isOpen" :class="{ 'vxp-accordion-item__content': true, 'vxp-accordion-item__hidden': !showItemContent }" ref="bodyContent">
        <slot name="content"></slot>
      </StackLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
import StackLayout from '../layouts/StackLayout';
import VxpLabel from './VxpLabel';

export default {
  name: 'VxpAccordionItem',
  props: {
    title: String,
  },
  components: {
    StackLayout,
    VxpLabel,
  },
  data() {
    return {
      isOpen: false,
      showItemContent: false,
      uniqueId: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.bubbleEvent('childRegistered', this);
      this.listenAccordion('toggleChild', this.handleToggleRequest);
    });
  },
  beforeDestroy() {
    this.$parent.$emit('childRemoved', this.uniqueId);
  },
  watch: {
    isOpen(newStatus) {
      if (newStatus) {
        this.$emit('open');
      } else {
        this.$emit('close');
      }
    },
  },
  computed: {
    item_id() {
      return 'item' + this.uniqueId;
    },
  },
  methods: {
    handleToggleRequest(toggleId) {
      if (toggleId === this.uniqueId) {
        this.toggleCollapsed();
      }
    },
    bubbleEvent(event, param) {
      let p = this.$parent;
      while (p) {
        if (p.$options.name === 'VxpAccordion') {
          p.$emit(event, param);
          break;
        }
        p = p.$parent;
      }
    },
    listenAccordion(event, handler) {
      let p = this.$parent;
      while (p) {
        if (p.$options.name === 'VxpAccordion') {
          p.$on(event, handler);
          break;
        }
        p = p.$parent;
      }
    },
    setUniqueId(id) {
      this.uniqueId = id;
    },
    notifyOfClick() {
      this.bubbleEvent('childClicked', this.uniqueId);
    },
    toggleCollapsed() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../themes/themes';
@import '../assets/styles/helpers';

.vxp-accordion-item {
  &__body {
    overflow: hidden;
  }
  &__header {
    cursor: pointer;
    &__title {
      padding: unit(10, 10);
      font-weight: 600;
    }
  }
  &__content {
    background-color: #ffffff;
  }
}
</style>
