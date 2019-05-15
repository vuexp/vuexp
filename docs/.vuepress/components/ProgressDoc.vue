<template>
  <StackLayout class="progress">
    <Progress :value="25" :maxValue="maxValueProgress"/>
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
      currentProgress: 25,
      incrementValue: 25,
      maxValueProgress: 100,
    };
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