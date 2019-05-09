<template>
<StackLayout class="scroll-view" orientation="horizontal">
    <ScrollView :orientation="scrollType" id="scrollview_container" @scroll="onScroll" class="scroll-view__vertical" :scrollBarIndicatorVisible="scrollBarIndicatorVisible" >
      <StackLayout orientation="vertical">
        <div>Vuexp project is web components for Nativescript-Vue. NativeScript is an open source framework for building truly native mobile applications using JavaScript.</div>
      </StackLayout>
    </ScrollView>
   <StackLayout orientation="vertical">
     <StackLayout orientation="horizontal">
        <StackLayout orientation="horizontal">
            <Label text="Scroll Bar Enabled:" id="scrollview_enabled_label" class="scroll-view__margin_left" width="200"></Label>
            <input aria-label="Scroll Bar Enabled" type="checkbox" v-model="scrollBarIndicatorVisible" id="scrollview_horizontal_input" />
        </StackLayout>  
        <StackLayout orientation="horizontal">
            <Label text="Horizontal Scrolling:" id="scrollview_orientation_label" class="scroll-view__margin_left" width="200"></Label>
            <input aria-label="Horizontal Scrolling" type="checkbox" v-model="horizontal" id="scrollview_horizontal_input" />
        </StackLayout> 
     </StackLayout> 
      <StackLayout orientation="horizontal">
          <Label :text="scrollText" id="scrollview_scroll_label" class="scroll-view__margin_left"></Label>          
         
      </StackLayout>       
    </StackLayout>
  </StackLayout>
</template>


<script>
import ScrollView from '../../../src/components/ScrollView'
import StackLayout from '../../../src/layouts/StackLayout'
import Label from "../../../src/components/Label";
import Button from "../../../src/components/Button";

export default {
  name: "ScrollViewDoc",
  data(){
    return {
      scrollBarIndicatorVisible:false,
      horizontal:false,
      scrollText: ''
    };
  },
  methods: {
    onScroll(){
      this.scrollText = 'scrolled';
    },
    clearScrollText() {
      this.scrollText = '';
    }
  },
  computed: {
    scrollType() {
      if(this.horizontal) {
        return "horizontal";
      }
      return "vertical";
    }
  },
  components :{
    StackLayout,
    ScrollView,
    Label,
    Button
  }
};

</script>

<style lang="scss" scoped>
.scroll-view {
  &__horizontal {
    width: 150px;
    height: 50px;
  }
  &__vertical {
    height: 100px;
    width: 150px;
  }
   &__margin_left {
   margin-left: 15px;
  }
}
</style>