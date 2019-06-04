<template>
  <StackLayout class="stack" orientation="horizontal" backgroundColor="#3c495e">
    <Label text="top" verticalAlignment="top" width="70" height="33%" backgroundColor="#43b883" />
    <Label text="center" verticalAlignment="center" width="70" height="33%" backgroundColor="#289062" />
    <Label text="bottom" verticalAlignment="bottom" width="70" height="33%" backgroundColor="#1c6b48" />
    <Label text="stretch" verticalAlignment="stretch" width="70" backgroundColor="#43b883" />
  </StackLayout>
</template>

<script>
import StackLayout from '../../../src/layouts/StackLayout';
import Label from '../../../src/core/components/Label/Label';
export default {
  name: 'StackLayoutVerticaltalChildrenDoc',
  components: {
    StackLayout,
    Label,
  },
};
</script>

<style lang="scss" scoped>
.stack {
  width: 100%;
  height: 100%;
  min-height: 300px;
}
</style>
