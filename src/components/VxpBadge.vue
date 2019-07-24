<template>
  <Label v-bind="$attrs" v-on="$listeners" v-if="value" class="vxp-badge" :class="{ 'vxp-badge--multi-digit': multiDigit }" :text="value" />
</template>

<script>
import CommonDirective from '../core/directives/CommonDirective';
import Gestures from '../core/mixins/GestureMixin';
import Label from '../core/components/Label/Label';

export default {
  name: 'VxpBadge',
  components: {
    Label,
  },
  props: {
    badge: { type: [Number, String] },
  },
  computed: {
    value: function() {
      return this.badge > 0 ? (this.badge > 99 ? '99+' : this.badge.toString()) : '';
    },
    multiDigit: function() {
      return this.badge > 9;
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
@import '../themes/themes';
@import '../assets/styles/helpers';

.vxp-badge {
  box-sizing: border-box;
  font-size: unit(12);
  text-align: center;
  padding: unit(2, 1) unit(5) unit(2, 1) unit(5);
  height: unit(18);
  line-height: unit(16);
  min-width: unit(18);
  border-radius: unit(50);
  color: #fff;

  @include themed($themes) {
    &:focus {
      outline: none;
    }

    &[primary] {
      color: getvar(primary-text);
      background-color: getvar(primary);
      &:focus {
        outline: none;
      }
    }
    &[secondary] {
      color: getvar(secondary-text);
      background-color: getvar(secondary);
      &:focus {
        outline: none;
      }
    }
    &[alert] {
      color: getvar(alert-text);
      background-color: getvar(alert);

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
