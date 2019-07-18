<template>
  <StackLayout class="vxp-accordion">
    <slot></slot>
  </StackLayout>
</template>

<script>
import StackLayout from '../layouts/StackLayout';

export default {
  name: 'VxpAccordion',
  components: { StackLayout },
  props: {
    initialExpandedItems: {
      required: false,
      type: Array,
      default: function() {
        return [];
      },
      validator: items => Array.isArray(items) && !items.some(n => typeof n !== 'number'),
    },
    autoCollapse: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.$on('childRegistered', this.initializeChildItem);
    this.$on('childClicked', this.handleChildClicked);
    this.$on('childRemoved', this.destroyChildItem);
    this.$nextTick(this.updateChildren);
  },
  data() {
    return {
      nextId: 1,
      childrenToggleStatus: {},
    };
  },
  methods: {
    onExpanded(event) {
      this.$emit('expanded', event);
    },
    onCollapsed(event) {
      this.$emit('collapsed', event);
    },
    initializeChildItem(child) {
      const id = this.getNextId();
      child.setUniqueId(id);
      this.childrenToggleStatus[id] = false;
    },
    destroyChildItem(childId) {
      delete this.childrenToggleStatus[childId];
    },
    updateChildren() {
      this.openInitialItems(this.$children[0].$children.length);
    },
    getNextId() {
      const v = this.nextId.toString(10);
      this.nextId += 1;
      return v;
    },
    handleChildClicked(child_id) {
      if (this.autoCollapse) {
        for (const id in this.childrenToggleStatus) {
          if (this.childrenToggleStatus[id] && id !== child_id) {
            this.$emit('toggleChild', id);
            this.onCollapsed(id);
            this.childrenToggleStatus[id] = false;
          }
        }
      }
      this.childrenToggleStatus[child_id] = !this.childrenToggleStatus[child_id];
      this.$emit('toggleChild', child_id);
      if (this.childrenToggleStatus[child_id]) {
        this.onExpanded(child_id);
      } else {
        this.onCollapsed(child_id);
      }
    },
    openInitialItems(items_length) {
      const initialItems = this.initialExpandedItems;
      if (initialItems != null) {
        initialItems.forEach(num_item => {
          if (num_item > 0 && num_item <= items_length) {
            this.handleChildClicked(String(num_item));
          }
        });
      }
    },
  },
};
</script>
<style lang="scss">
@import '../themes/themes';
@import '../assets/styles/helpers';
.vxp-accordion {
  background-color: #c0cad8;
}
</style>
