<template>
  <StackLayout class="progress">
    <Label text="Default Progress"/>
    <Progress :value="currentProgress" @valueChange="progressChange" :maxValue="maxValueProgress"/>
    <!-- <Button @tap="incrementValue" text="Increment" class="progress__button" value="Button"/> -->
    <button @click="incrementValue" id="progress__increment__button">Increment</button>
    <button @click="decrementValue" id="progress__decrement__button">Decrement</button>
    <Label text="Increment: "/>
    <TextField id="progress__increment__input" v-model.number="increment" :editable="true" keyboardType="number"/>
    <Label text="Max Value: "/>
    <TextField id="progress__maxValue__input" v-model.number="maxValueProgress" :editable="true" keyboardType="number"/>
    <Label :text="currentProgressLabel" id="progress__value__label"/>
  </StackLayout>
</template>

<script>
import Label from '../../../src/components/Label';
import Progress from '../../../src/components/Progress';
import TextField from '../../../src/components/TextField';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'ProgressDoc',
  components: { Label, StackLayout, Progress, TextField },
  data() {
    return {
      currentProgress: 10,
      maxValueProgress: 70,
      increment: 10,
    };
  },
  computed: {
    currentProgressLabel: function() {
      return `Current Progress: ${this.currentProgress}`;
    },
  },
  methods: {
    progressChange({ eventName, oldValue, value }) {
      if (this.currentProgress > this.maxValueProgress) return;
      alert(`${eventName} ${oldValue} to ${value}`);
    },
    incrementValue() {
      if (this.currentProgress >= this.maxValueProgress) return;
      this.currentProgress += this.increment;
    },
    decrementValue() {
      if (this.currentProgress <= 0) return;
      this.currentProgress -= this.increment;
    },
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