<template>
  <div class="vxp-page">
    <slot></slot>
  </div>
</template>

<script>
import Gestures from '../../mixins/GestureMixin';

export default {
  name: 'Page',
  mixins: [Gestures],
};
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}

.vxp-page {
  display: flex;
  flex-direction: column;
  height: 100%;

  &[actionbarhidden='true'] {
    > .vxp-action-bar {
      display: none;
      visibility: hidden;
    }
  }

  > {
    .vxp-stack-layout {
      height: 100%;
    }
    .vxp-dock-layout {
      height: 100%;
    }
    .vxp-wrap-layout {
      height: 100%;
    }
    .vxp-absolute-layout {
      height: 100%;
    }
    .vxp-flexbox-layout {
      height: 100%;
    }
    .vxp-grid-layout {
      height: 100%;
    }
  }
}
</style>
