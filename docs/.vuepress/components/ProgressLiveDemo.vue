<template>
  <StackLayout class="progress">
    <Progress
      :value="currentProgress"
      @valueChange="progressChange"
      :maxValue="maxValueProgress"
      class="m-b-2em"
    />
    <StackLayout orientation="horizontal">
      <Button
        @tap="incrementValue"
        id="progress__increment__button"
        text="Increment"
        class="progress__button"
        value="Button"
      />
      <Button
        @tap="decrementValue"
        id="progress__increment__button"
        text="Decrement"
        class="progress__button"
        value="Button"
      />
    </StackLayout>

    <Label text="Increment: "/>
    <TextField
      id="progress__increment__input"
      v-model="increment"
      :editable="true"
      keyboardType="number"
    />
    <Label text="Max Value: "/>
    <TextField
      id="progress__maxValue__input"
      v-model="maxValueInput"
      :editable="true"
      keyboardType="number"
      @input="onMaxValueChange($event)"
    />
    <Label :text="currentProgressLabel" id="progress__value__label"/>
    <Label :text="eventLogLabel" id="progress__eventChange__label"/>
  </StackLayout>
</template>

<script>
import Label from '../../../src/core/components/Label/Label';
import Progress from '../../../src/core/components/Progress/Progress';
import TextField from '../../../src/core/components/TextField/TextField';
import StackLayout from '../../../src/layouts/StackLayout';
import Button from '../../../src/core/components/Button/Button';

export default {
  name: 'ProgressLiveDemo',
  components: { Label, StackLayout, Progress, TextField, Button },
  data() {
    return {
      currentProgress: 0,
      maxValueProgress: 70,
      maxValueInput: '70',
      increment: '10',
      eventLog: '',
    };
  },
  computed: {
    currentProgressLabel() {
      return `Current Progress: ${this.currentProgress}`;
    },
    incrementAsNumber() {
      return Number(this.increment);
    },
    maxValueInputAsNumber() {
      return parseInt(this.maxValueInput);
    },
    eventLogLabel() {
      return `Event: ${this.eventLog}`;
    },
  },
  methods: {
    progressChange({ eventName, oldValue, value }) {
      if (this.currentProgress > this.maxValueInputAsNumber) return;
      this.eventLog = `${eventName} ${oldValue} to ${value}`;
    },
    incrementValue() {
      const maxValErr = this.maxValueInputAsNumber < this.incrementAsNumber + this.currentProgress;
      if (maxValErr) {
        alert('Incremented value is greater than max value');
        return;
      }
      if (this.currentProgress >= this.maxValueInputAsNumber) {
        return;
      }
      this.currentProgress += this.incrementAsNumber;
    },
    decrementValue() {
      if (this.currentProgress <= 0) return;
      this.currentProgress -= this.incrementAsNumber;
    },
    /**
     * Changes max value of progress bar, TextField always returns string value so we need convert it to Number
     * @param {String} event The Event bubble up on input changed
     * @return {void}
     */
    onMaxValueChange(event) {
      this.maxValueProgress = Number(event);
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
.m-b-2em {
  margin-bottom: 2em;
}
</style>