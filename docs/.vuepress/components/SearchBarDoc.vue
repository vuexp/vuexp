<template>
  <StackLayout>
    <SearchBar
      :text="searchPhrase"
      :hint="hint"
      :textFieldBackgroundColor="background"
      :textFieldHintColor="hintColor"
      @submit="onSubmit"
      @textChange="onTextChange($event)"
      @clear="onClear"
      @input="searchPhrase = $event"
      id="searchbar__docs"
    />
    <StackLayout orientation="horizontal" class="flex m-t-10">
      <Label text="Hint:" class="label"></Label>
      <TextField v-model="hint" class="form-input" id="searchbar__hint__input"/>
    </StackLayout>
    <StackLayout orientation="horizontal" class="flex m-t-10">
      <Label text="Text:" class="label"></Label>
      <TextField v-model="searchPhrase" class="form-input" id="searchbar__text__input"/>
    </StackLayout>
    <StackLayout orientation="horizontal" class="flex m-t-10">
      <Label text="Hint Color:" class="label"></Label>
      <select
        id="searchbar__textFieldHintColor__input"
        style="margin-left: 5px"
        class="form-input"
        v-model="hintColor"
      >
        <option disabled value>Color</option>
        <option v-for="color in colors" :key="color.value" :value="color.value">{{color.label}}</option>
      </select>
    </StackLayout>
    <StackLayout orientation="horizontal" class="flex m-t-10">
      <Label text="Background:" class="label"></Label>
      <select
        id="searchbar__textFieldBackgroundColor__input"
        class="form-input"
        style="margin-left: 5px"
        v-model="background"
      >
        <option disabled value>Color</option>
        <option v-for="color in colors" :key="color.value" :value="color.value">{{color.label}}</option>
      </select>
    </StackLayout>
    <StackLayout orientation="horizontal" class="flex m-t-10">
      <Label text="Last Event:" class="label"></Label>
      <Label :text="eventLabelText" class="form-input" id="searchbar_event_label"></Label>
    </StackLayout>
  </StackLayout>
</template>

<script>
import Label from '../../../src/core/components/Label/Label';
import SearchBar from '../../../src/core/components/SearchBar/SearchBar';
import TextField from '../../../src/core/components/TextField/TextField';
import StackLayout from '../../../src/layouts/StackLayout';
import PredefinedColors from '../../shared/colors';

export default {
  name: 'SearchBarDoc',
  data() {
    return {
      searchPhrase: '',
      hint: 'Search hint',
      hintColor: '',
      background: '',
      eventLabelText: '-',
      colors: PredefinedColors,
    };
  },
  methods: {
    onSubmit() {
      this.eventLabelText = 'submit';
    },
    onTextChange(text) {
      this.eventLabelText = 'textChangeEvent';
    },
    onClear() {
      this.eventLabelText = 'clear';
    },
  },
  components: {
    StackLayout,
    Label,
    SearchBar,
    TextField,
  },
};
</script>

<style lang="scss" scoped>
.m-t-10 {
  margin-top: 10px;
}

.flex {
  display: flex;

  .label {
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
  }

  .form-input {
    border-radius: 5px;
    flex: 1;
    margin-left: 5px;
    border: 2px solid #ccc;
  }
}
</style>
