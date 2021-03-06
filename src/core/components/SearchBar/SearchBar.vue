<template>
  <div v-common-directive :style="{ backgroundColor: textFieldBackgroundColor }" class="vxp-searchbar">
    <Label @tap="$emit('submit')" class="vxp-searchbar__search-icon" />
    <input
      ref="searchbar"
      class="vxp-searchbar__search-input"
      :style="{ '--hint-color': this.textFieldHintColor }"
      :placeholder="hint"
      :type="keyboardType"
      :value="text"
      @keyup.enter="$emit('submit')"
      @input="updateValue"
    />
    <Label v-if="text" @tap="onClear" class="vxp-searchbar__clear-icon" />
  </div>
</template>

<script>
import CommonDirective from '../../directives/CommonDirective';
import Gestures from '../../mixins/GestureMixin';
import Label from '../Label/Label';

export default {
  model: {
    event: 'input',
    prop: 'text',
  },
  name: 'SearchBar',
  props: {
    keyboardType: String,
    hint: String,
    text: String,
    textFieldBackgroundColor: String,
    textFieldHintColor: String,
  },
  methods: {
    updateValue: function($event) {
      if (this.$listeners.input) {
        this.$emit('input', $event.target.value);
      }
      if (this.$listeners.textChange) {
        this.$emit('textChange', $event.target.value);
      }
    },
    onClear: function(event) {
      if (this.$listeners.input) {
        this.$emit('input', '');
      }
      if (this.$listeners.textChange) {
        this.$emit('textChange', '');
      }
      if (this.$listeners.clear) {
        this.$emit('clear', event);
      }
    },
  },
  directives: {
    'common-directive': CommonDirective,
  },
  components: {
    Label,
  },
  mixins: [Gestures],
};
</script>

<style lang="scss">
.vxp-searchbar {
  display: flex;
  align-items: stretch;
  background-color: #ebebeb75;
  justify-content: space-between;
  min-width: 90px;
  max-height: 75px;
  min-height: 28px;
  padding: 7px;
  border: solid 1px rgba(0, 0, 0, 0.1);

  &__search-input {
    margin: 0;
    padding: 0 5px;
    text-align: left;
    flex: 1;
    min-width: 30px;
    border: solid 1px rgba(0, 0, 0, 0.1);
    &:focus {
      outline: solid 1px rgba(0, 0, 0, 0.2);
    }
    &::placeholder {
      color: var(--hint-color);
    }
  }

  &__search-icon {
    cursor: pointer;
    background-image: url('../../../assets/icons/searchIcon.png');
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center center;
    flex: 0 0 30px;
  }

  &__clear-icon {
    cursor: pointer;
    background-image: url('../../../assets/icons/clearIcon.png');
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center center;
    flex: 0 0 30px;
  }
}
</style>
