<template>
  <StackLayout>
    <DockLayout :stretchLastChild="false" class="dock">
      <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
      <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
      <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
      <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
    </DockLayout>

    <DockLayout :stretchLastChild="true" class="dock">
      <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
      <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
      <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
      <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
      <Label text="center" backgroundColor="#1c6b48"/>
    </DockLayout>
  </StackLayout>
</template>

<script>
import Label from '../../../src/components/Label';
import DockLayout from '../../../src/layouts/DockLayout';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'DockLayoutDoc',
  components: {
    Label,
    DockLayout,
    StackLayout,
  },
};
</script>

<style lang="scss" scoped>
.dock {
  width: 300px;
  height: 150px;
  margin-bottom: 30px;
  background-color: #3c495e;
}

.editor-param {
  margin: 5px;
}

.editor-param-input {
  width: 40px;
}

</style>
