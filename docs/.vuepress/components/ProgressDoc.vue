<template>
  <StackLayout class="progress">
    <Label text="Default Progress"/>
    <Progress :value="currentProgress" @valueChange="progressChange" :maxValue="maxValueProgress"/>
    <!-- <Button @tap="incrementValue" text="Increment" class="progress__button" value="Button"/> -->
  </StackLayout>
</template>

<script>

import Label from '../../../src/components/Label'
import StackLayout from '../../../src/layouts/StackLayout'
import Progress from '../../../src/components/Progress'
export default {
  name: 'ProgressDoc',
  components: {Label, StackLayout,Progress},
  data() {
    return {
      currentProgress: 10,
      maxValueProgress: 70,
    };
  },
  methods: {
    progressChange: function(newValue, oldValue) {
    //   alert('Progress Changed ' + oldValue + ' to ' + newValue);
    },
    incrementValue() {
      if(this.currentProgress === this.maxValueProgress) this.currentProgress = 0;
      this.currentProgress += 10;

    },
  },
  mounted: function() {
   
    setInterval(() => {
      this.incrementValue();
      console.log('VALUE INCREMENT');
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.progress {
  &__button {
    width: 100px;
    margin-top: 20px;
  }
}
</style>