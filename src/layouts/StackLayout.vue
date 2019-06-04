<template>
  <div v-common-directive :class="stackLayoutClass">
    <slot></slot>
  </div>
</template>

<script>
import { camelCaseToDash } from '../helpers/helpers';
import CommonDirective from '../core/directives/CommonDirective';
import Gestures from '../core/mixins/GestureMixin';

export default {
  name: 'StackLayout',
  props: {
    orientation: {
      type: String,
      default: 'vertical',
      validator: value => ['horizontal', 'vertical'].indexOf(value) !== -1,
    },
  },
  computed: {
    stackLayoutClass: function() {
      return `vxp-stack-layout vxp-stack-layout--${camelCaseToDash(this.orientation)}`;
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.vxp-stack-layout {
  display: flex;
  flex-direction: column;

  &--horizontal {
    flex-direction: row;
  }

  > {
    [verticalAlignment='top'] {
      align-self: flex-start;
    }
    [verticalAlignment='center'] {
      align-self: center;
    }
    [verticalAlignment='bottom'] {
      align-self: flex-end;
    }
    [verticalAlignment='stretch'] {
      align-self: stretch;
    }

    [horizontalAlignment='left'] {
      align-self: flex-start;
    }
    [horizontalAlignment='center'] {
      align-self: center;
    }
    [horizontalAlignment='right'] {
      align-self: flex-end;
    }
    [horizontalAlignment='stretch'] {
      align-self: stretch;
    }
  }
}
</style>
