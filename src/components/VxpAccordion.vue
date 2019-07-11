<template>
  <StackLayout class="accordion">
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
    this.$on('child-registered', child => {
      const id = this.getNextId();
      child.setUniqueId(id);
      this.children_toggle_status[id] = false;
    });
    this.$on('child-clicked', this.handleChildClicked);
    this.$on('child-removed', child_id => {
      delete this.children_toggle_status[child_id];
    });
    this.$nextTick(() => {
      this.openInitialItems(this.$children[0].$children.length);
    });
  },
  data() {
    return {
      next_id: 1,
      children_toggle_status: {},
    };
  },
  methods: {
    onExpanded(event) {
      this.$emit('expanded', event);
    },
    onCollapsed(event) {
      this.$emit('collapsed', event);
    },
    getNextId() {
      const v = this.next_id.toString(10);
      this.next_id += 1;
      return v;
    },
    handleChildClicked(child_id) {
      if (this.autoCollapse) {
        for (const id in this.children_toggle_status) {
          if (this.children_toggle_status[id] && id !== child_id) {
            this.$emit('toggle-child', id);
            this.onCollapsed(id);
            this.children_toggle_status[id] = false;
          }
        }
      }
      this.children_toggle_status[child_id] = !this.children_toggle_status[child_id];
      this.$emit('toggle-child', child_id);
      if (this.children_toggle_status[child_id]) {
        this.onExpanded(child_id);
      } else {
        this.onCollapsed(child_id);
      }
    },
    openInitialItems(items_length) {
      const is = this.initialExpandedItems;
      if (is != null) {
        is.forEach(num_item => {
          if (num_item > 0 && num_item <= items_length) {
            this.handleChildClicked(String(num_item));
          }
        });
      }
    },
  },
};
</script>
<style scoped>
.accordion {
  background-color: #c0cad8;
}
</style>
