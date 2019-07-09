<template>
  <StackLayout :class="item_class" :id="uniqueId">
    <StackLayout class="item-header" @tap="notifyOfClick">
      <VxpLabel class="item-header-title" :text="title" />
    </StackLayout>
    <StackLayout class="accordion-body" ref="body" :style="slideStyle">
      <StackLayout v-show="isOpen" :class="item_content_class" ref="bodyContent">
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
      this.$parent.$emit('child-registered', this);
      this.$parent.$on('toggle-child', this.handleToggleRequest);
    });
  },
  beforeDestroy() {
    this.$parent.$emit('child-removed', this.uniqueId);
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
    item_class() {
      return {
        item: true,
        'item-active': this.isOpen,
      };
    },
    item_content_class() {
      return {
        'item-content': true,
        'is-hidden': !this.showItemContent,
      };
    },
  },
  methods: {
    handleToggleRequest(toggleId) {
      if (toggleId === this.uniqueId) {
        this.toggleCollapsed();
      }
    },
    setUniqueId(id) {
      this.uniqueId = id;
    },
    notifyOfClick() {
      if (this.uniqueId) {
        this.$parent.$emit('child-clicked', this.uniqueId);
      }
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

.accordion-body {
  overflow: hidden;
}
.item-header {
  cursor: pointer;
}
.item-content {
  background-color: #ffffff;
}
.item-header-title {
  padding: unit(10, 10);
  font-weight: 600;
}
</style>
