<template>
  <StackLayout>
    <GridLayout class="vxp-panel-title" columns="*,auto">
      <VxpLabel v-if="title" class="vxp-panel-title__title" :text="title" col="0"></VxpLabel>
      <slot name="topbar" col="1"></slot>
    </GridLayout>
    <StackLayout class="vxp-panel-content">
      <slot name="content"></slot>
    </StackLayout>
  </StackLayout>
</template>

<script>
import StackLayout from '../layouts/StackLayout';
import GridLayout from '../layouts/GridLayout';
import VxpLabel from './VxpLabel';

export default {
  name: 'VxpPanel',
  components: {
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
.vxp-panel-content {
  background-color: #f4f5fa;
  padding: unit(0) unit(15);
}
.vxp-panel-title {
  height: unit(40);
  background-color: #c0cad8;
  color: #434855;
  width: 100%;
  font-weight: bold;
  padding-top: unit(5);

  &__title {
    margin: unit(5) unit(5) 0 unit(15);
    white-space: nowrap;
    font-size: unit(18);
  }
}
</style>
