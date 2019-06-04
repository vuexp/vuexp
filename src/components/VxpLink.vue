<template>
  <VxpLabel v-if="disabled" class="typ-body" :text="text" />
  <a v-else-if="externalUrl" class="vxp-link typ-body" :href="externalUrl" :target="externalUrl ? '_blank' : ''">{{ text }}</a>
  <a v-else class="vxp-link typ-body" @click="$emit('tap', $event)">{{ text }}</a>
</template>

<script>
import VxpLabel from './VxpLabel';

export default {
  name: 'VxpLink',
  props: {
    text: {
      type: String,
      required: true,
    },
    externalUrl: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    VxpLabel,
  },
};
</script>

<style lang="scss">
@import '../themes/themes';
@import '../assets/styles/helpers';

.vxp-link {
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
