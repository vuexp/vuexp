<template>
  <Label v-if="externalUrl && visibility" class="vxp-link-button typ-body" :text="text" @tap="onTap" />
  <Label v-else-if="!externalUrl && visibility" :text="text" class="vxp-link-button typ-body" @tap="$emit('tap', $event)" />
</template>

<script>
import { openUrl } from 'tns-core-modules/utils/utils'; // eslint-disable-line

export default {
  name: 'LinkButton.native',
  props: {
    text: {
      type: String,
      required: true,
    },
    externalUrl: {
      type: String,
      default: '',
    },
    visibility: {
      type: Boolean,
      default: true,
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

.vxp-link-button {
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
