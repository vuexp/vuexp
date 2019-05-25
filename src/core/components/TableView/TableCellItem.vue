<template>
  <component :is="componentType" v-bind="componentParams" v-dynamic-events="cellEvents" class="vxp-table-view-cell-item"></component>
</template>
<script>
import VxpLabel from '../../../components/VxpLabel';
import VxpImage from '../../../components/VxpImage';
import VxpLink from '../../../components/VxpLink';
import VxpCheckbox from '../../../components/VxpCheckbox';
import VxpButton from '../../../components/VxpButton';
import VxpIconButton from '../../../components/VxpIconButton';

export default {
  name: 'TableCellItem',
  props: {
    itemType: {
      type: String,
      default: 'text',
      required: true,
    },
    itemData: {
      // item related props and their values
      type: Object,
      default: null,
      required: true,
    },
    customCSS: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      cellEvents: {
        onLoadError: 'onLoadError', // image
        onLoad: 'onLoad',
        tap: 'tap', // button, link, iconbutton
        onTap: 'onTap', // checkbox
      },
    };
  },
  directives: {
    DynamicEvents: {
      bind: function(el, binding, vnode) {
        const allEvents = binding.value;
        Object.keys(allEvents).forEach(event => {
          // register handler in the dynamic component
          vnode.componentInstance.$on(event, eventData => {
            const targetEvent = allEvents[event];
            vnode.context[targetEvent](eventData);
          });
        });
      },
      unbind: function(el, binding, vnode) {
        vnode.componentInstance.$off();
      },
    },
  },
  methods: {
    onLoadError(e) {
      console.log('onLoadError', e); //eslint-disable-line
    },
    onLoad(e) {
      console.log('onLoad', e); //eslint-disable-line
    },
    tap(e) {
      console.log('tap', e); //eslint-disable-line
    },
    onTap(e) {
      console.log('onTap', e); //eslint-disable-line
    },
  },
  computed: {
    componentType() {
      switch (this.itemType) {
        case 'text':
          return 'VxpLabel';
        case 'checkbox':
          return 'VxpCheckbox';
        case 'image':
          return 'VxpImage';
        case 'button':
          return 'VxpButton';
        case 'link':
          return 'VxpLink';
        case 'icon':
          return 'VxpIconButton';
        default:
          return 'VxpLabel';
      }
    },
    componentParams() {
      let params = {};
      if (this.itemData === null || typeof this.itemData === 'undefined') {
        return params;
      } else {
        params = this.itemData;
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
  components: {
    VxpLabel,
    VxpImage,
    VxpLink,
    VxpCheckbox,
    VxpButton,
    VxpIconButton,
  },
};
</script>
<style lang="scss" scoped></style>
