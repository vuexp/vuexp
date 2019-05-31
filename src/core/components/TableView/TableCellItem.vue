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
import platform from '../../../platform';

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
        onLoadError: 'onImageLoadError', // image
        onLoad: 'onImageLoaded', // image
        tap: 'tapClickHandler', // button, link, iconbutton
        change: 'onCheckboxClicked', // checkbox
      },
    };
  },
  directives: {
    DynamicEvents: {
      //TODO move directive to another file
      bind: function(el, binding, vnode) {
        const allEvents = binding.value;
        Object.keys(allEvents).forEach(event => {
          // register handler in the dynamic component
          vnode.componentInstance.$on(event, (data, eventData) => {
            const targetEvent = allEvents[event];
            vnode.context[targetEvent](data, eventData);
          });
        });
      },
      unbind: function(el, binding, vnode) {
        vnode.componentInstance.$off();
      },
    },
  },
  methods: {
    onImageLoadError(e) {
      this.$emit('imageLoadError', e.currentTarget.id, e);
    },
    onImageLoaded(e) {
      this.$emit('imageLoaded', e.currentTarget.id, e);
    },
    tapClickHandler(e) {
      let sourceType = null;
      if (e && e.target && e.target.tagName) {
        if (e.target.attributes && typeof e.target.attributes['actionname'] !== 'undefined') {
          sourceType = 'action';
        } else if (e.target.tagName === 'BUTTON') {
          sourceType = 'button';
        } else if (e.target.tagName === 'A') {
          sourceType = 'link';
        }
      }

      if (sourceType === 'button') {
        this.$emit('buttonClicked', e.currentTarget.id);
      } else if (sourceType === 'link') {
        this.$emit('linkClicked', e.currentTarget.id);
      } else if (sourceType === 'action') {
        this.$emit('actionItemClicked', e.currentTarget.id, e.target.attributes['actionname']);
      }
    },
    onCheckboxClicked(value, eventData) {
      let id = platform === 'web' ? eventData.currentTarget.id : eventData.object.id;
      if (id) {
        id = id.split('-');
        this.$emit('checkboxClicked', value, id[0]);
      }
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
      if ((this.itemData && this.itemData.data === null) || typeof this.itemData.data === 'undefined') {
        return params;
      } else {
        params = this.itemData.data;
      }

      if (params && !params.id) {
        params.id = this.itemData.rowNo + '-' + this.itemData.colNo;
      }

      // style params
      if (this.customCSS !== null || typeof this.customCSS !== 'undefined') {
        params.style = {};
        Object.keys(this.customCSS).forEach(cssKey => {
          params.style[cssKey] = this.customCSS[cssKey];
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
