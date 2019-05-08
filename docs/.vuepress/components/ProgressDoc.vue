<template>
  <StackLayout class="progress">
    <Progress :value="currentProgress" :maxValue="maxValueProgress"/>
  </StackLayout>
</template>

<script>
import Progress from '../../../src/components/Progress';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'ProgressDoc',
  components: { StackLayout, Progress},
  data() {
    return {
      currentProgress: 0,
      incrementValue: 25,
      maxValueProgress: 100,
    };
  },
  created() {
    setInterval(() => {
      this.currentProgress += this.incrementValue;
      if (this.currentProgress > this.maxValueProgress) {
        this.currentProgress = 0;
      }
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