<template>
  <input
    v-common-directive
    class="vxp-textfield"
    :placeholder="hint"
    :disabled="!editable"
    :maxlength="maxLength"
    :type="secure ? 'password' : handleKeyboardType"
    :value="text"
    :spellcheck="autocorrect"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
    @keyup.enter="$emit('returnPress', $event)"
    @input="updateValue"
  />
</template>

<script>
import CommonDirective from '../../directives/CommonDirective';
import Gestures from '../../mixins/GestureMixin';

export default {
  model: {
    event: 'input',
    prop: 'text',
  },
  name: 'TextField',
  props: {
    maxLength: Number,
    keyboardType: {
      type: String,
      default: 'text',
    },
    secure: {
      type: Boolean,
      default: false,
    },
    text: String,
    hint: String,
    editable: {
      type: Boolean,
      default: true,
    },
    autocorrect: Boolean,
  },
  directives: {
    'common-directive': CommonDirective,
  },
  methods: {
    updateValue: function($event) {
      this.$emit('textChange', $event);
      this.$emit('input', $event.target.value);
    },
  },
  computed: {
    handleKeyboardType: function() {
      switch (this.keyboardType) {
        case 'phone':
          return 'tel';
        case 'datetime':
          return 'datetime-local';
        case 'email':
          return 'email';
        case 'url':
          return 'url';
        case 'number':
          return 'number';
        default:
          return 'text';
      }
    },
  },
  mixins: [Gestures],
};
</script>

<style scoped lang="scss">
.vxp-textfield {
  padding: 2px 5px 2px 2px;
  border: 0;
  border-bottom: 1px solid #959595;
  &:focus {
    outline: 0 !important;
    border-bottom: 1px solid dodgerblue;
  }
}
</style>
