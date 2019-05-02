<template>
  <StackLayout class="progress">
    <Progress :value="currentProgress" :maxValue="maxValueProgress"/>
  </StackLayout>
</template>

<script>
import Label from '../../../src/components/Label';
import Progress from '../../../src/components/Progress';
import TextField from '../../../src/components/TextField';
import StackLayout from '../../../src/layouts/StackLayout';
import Button from '../../../src/components/Button';

export default {
  name: 'ProgressDoc',
  components: { Label, StackLayout, Progress, TextField, Button },
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