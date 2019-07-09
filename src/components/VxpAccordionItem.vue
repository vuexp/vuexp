<template>
  <StackLayout :class="card_classes">
    <StackLayout class="card-header" @tap="notifyOfClick">
      <VxpLabel class="card-header-title" :text="title" />
    </StackLayout>
    <StackLayout class="accordion-body" ref="body" :style="slideStyle">
      <StackLayout v-show="isOpen" :class="card_content_classes" ref="bodyContent">
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
    id: { default: null },
    title: String,
  },
  components: {
    StackLayout,
    VxpLabel,
  },
  data() {
    return {
      isOpen: false,
      showCardContent: false,
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
    computedId() {
      return this.id ? this.id : this.title.toLocaleLowerCase().replace(/ /g, '-');
    },
    config() {
      const {
        dropdown = false,
        icon = 'caret',
        slide = {
          duration: '700ms',
          timerFunc: 'ease',
        },
      } = this.$parent;
      return {
        dropdown,
        icon,
        slide,
      };
    },
    card_classes() {
      return {
        card: true,
        'card-active': this.isOpen,
      };
    },
    card_content_classes() {
      return {
        'card-content': true,
        'is-hidden': !this.showCardContent,
      };
    },
    slideStyle() {
      const c = this.config.slide;
      return {
        transition: `all ${c.duration} ${c.timerFunc}`,
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
.card-header {
  cursor: pointer;
}
.card-content {
  background-color: #ffffff;
}
.card-header-title {
  padding: unit(10, 10);
  font-weight: 600;
}
</style>
