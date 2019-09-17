<template>
  <StackLayout v-if="true" class="vxp-panel">
    <GridLayout class="vxp-panel__title" rows="auto" columns="*, auto">
      <VxpLabel row="0" col="0" class="vxp-panel-title-text" :text="title" verticalAlignment="center" />
      <FlexboxLayout row="0" col="1" class="vxp-panel-title-text">
        <slot name="topbar" />
      </FlexboxLayout>
    </GridLayout>
    <StackLayout class="vxp-panel__content">
      <slot name="content"></slot>
    </StackLayout>
  </StackLayout>
</template>

<script>
import FlexboxLayout from '../layouts/FlexboxLayout';
import StackLayout from '../layouts/StackLayout';
import GridLayout from '../layouts/GridLayout';
import VxpLabel from './VxpLabel';

export default {
  name: 'VxpPanel',
  components: {
    FlexboxLayout,
    StackLayout,
    GridLayout,
    VxpLabel,
  },
  props: {
    title: String,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import './../assets/styles/helpers.scss';

.vxp-panel {
  &__title {
    padding: unit(8) unit(11);
    box-sizing: border-box;
    height: unit(40);
    background-color: #c0cad8;
    color: #434855;
    width: 100%;
    font-weight: bold;
    overflow: initial;

    .vxp-panel-title-text {
      font-size: unit(18);
    }
  }

  &__content {
    background-color: #f4f5fa;
  }
}
</style>
