<template>
  <Label v-if="disabled" class="typ-body" :text="text" />
  <Label v-else-if="externalUrl" class="vxp-link typ-body" :text="text" @tap="onTap" />
  <Label v-else :text="text" class="vxp-link typ-body" @tap="$emit('tap', $event)" />
</template>

<script>
import { openUrl } from '../utils'; // eslint-disable-line

export default {
  name: 'VxpLink',
  props: {
    text: {
      type: String,
      required: true,
    },
    externalUrl: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onTap() {
      openUrl(this.externalUrl);
    },
  },
};
</script>

<style lang="scss">
@import '../themes/themes';
@import '../assets/styles/helpers';

.vxp-link {
  background-color: transparent;
  padding: 0;
  text-decoration: none;

  &:active {
    background-color: transparent;
    box-shadow: none;
  }
  &:hover {
    background-color: transparent;
    box-shadow: none;
    cursor: pointer;
  }

  @include themed($themes) {
    color: getvar(primary);
  }
}
</style>
