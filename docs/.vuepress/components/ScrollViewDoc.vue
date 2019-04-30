<template>
<StackLayout class="scroll-view">
    <ScrollView orientation="horizontal" id="scrollview" class="scroll-view__horizontal">
      <StackLayout orientation="horizontal">
        <div>Native Vue Web project is web components for Nativescript-Vue.</div>
      </StackLayout>
    </ScrollView>

    <ScrollView orientation="vertical" class="scroll-view__vertical">
      <StackLayout orientation="vertical">
        <div>Native Vue Web project is web components for Nativescript-Vue. NativeScript is an open source framework for building truly native mobile applications using JavaScript.</div>
      </StackLayout>
    </ScrollView>
  </StackLayout>
</template>


<script>
import ScrollView from '../../../src/components/ScrollView'
import StackLayout from '../../../src/layouts/StackLayout'

export default {
  name: "ScrollViewDoc",
  components :{
    StackLayout,
    ScrollView
  }
};
</script>

<style lang="scss" scoped>
.scroll-view {
  &__horizontal {
    width: 150px;
  }
  &__vertical {
    height: 100px;
    width: 150px;
    margin-top: 15px;
  }
}
</style>