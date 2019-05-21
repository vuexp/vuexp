<template>
  <a v-if="externalUrl" class="vxp-link-button typ-body" :href="externalUrl" :target="externalUrl ? '_blank' : ''">{{ text }}</a>
  <a v-else class="vxp-link-button typ-body" @click="$emit('tap', $event)">{{ text }}</a>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    externalUrl: {
      type: String,
    },
    visibility: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss">
@import '../themes/themes';
@import '../assets/styles/helpers';

.vxp-link-button {
  background-color: transparent;
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
