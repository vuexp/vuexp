<template>
  <StackLayout class="progress">
    <Label text="Default Progress"/>
    <Progress :value="currentProgress" @valueChange="progressChange" :maxValue="maxValueProgress"/>
    <Button @tap="incrementValue" id="progress__increment__button" text="Increment" class="progress__button" value="Button"/>
    <Button @tap="decrementValue" id="progress__increment__button" text="Increment" class="progress__button" value="Button"/>
<!-- 
    <button @click="incrementValue" id="progress__increment__button">Increment</button>
    <button @click="decrementValue" id="progress__decrement__button">Decrement</button> -->
    <Label text="Increment: "/>
    <TextField id="progress__increment__input" v-model="increment" :editable="true" keyboardType="number"/>
    <Label text="Max Value: "/>
    <TextField id="progress__maxValue__input" v-model="modifiedMaxVal" :editable="true" keyboardType="number" @input="onMaxValueChange($event)"/>
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
      modifiedMaxVal: "70",
      increment: "10",
    };
  },
  computed: {
    currentProgressLabel() {
      return `Current Progress: ${this.currentProgress}`;
    },
    incrementAsNumber(){
      return Number(this.increment);
    }
  },
  methods: {
    progressChange({ eventName, oldValue, value }) {
      if (this.currentProgress > this.maxValueProgressAsNumber) return;
      alert(`${eventName} ${oldValue} to ${value}`);
    },
    incrementValue() {
      if (this.currentProgress >= this.maxValueProgressAsNumber) return;
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
    onMaxValueChange(event){
      this.maxValueProgress = Number(event);
    }
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