<template>
  <StackLayout class="textView-wrapper">
    <StackLayout orientation="horizontal">
      <VxpLabel text="TextView:" />
      <TextView
        id="textview"
        v-model="text"
        :hint="hint"
        :editable="editable"
        :maxLength="maxLengthNumeric"
        :returnKeyType="returnKeyType"
        :autocorrect="autocorrect"
        @textChange="eventOutput = 'textChange'"
        @returnPress="eventOutput = 'returnPress'"
        @focus="eventOutput = 'focus'"
        @blur="eventOutput = 'blur'"
      />
    </StackLayout>
    <StackLayout orientation="horizontal">
      <VxpLabel text="text:" horizontalAlignment="50%" />
      <TextField v-model="text" id="textview__text__input" horizontalAlignment="50%" />
    </StackLayout>
    <StackLayout orientation="horizontal">
      <VxpLabel text="hint (placeholder):" />
      <TextField v-model="hint" id="textview__hint__input" />
    </StackLayout>
    <StackLayout orientation="horizontal">
      <VxpLabel text="editable (disabled):" />
      <VxpCheckbox id="textview__editable__input" :checked="editable" @change="editable = !editable"/>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <VxpLabel text="maxLength:" />
      <TextField v-model="maxLength" keyboardType="number" id="textview___maxlength__input" />
    </StackLayout>
    <StackLayout orientation="horizontal">
      <VxpLabel text="returnKeyType:" />
      <select v-model="returnKeyType" id="textview__returnKeyType__select">
        <option value="done" id="TextView_returnKeyType_done_option">done</option>
        <option value="next" id="TextView_returnKeyType_next_option">next</option>
        <option value="go" id="TextView_returnKeyType_go_option">go</option>
        <option value="search" id="TextView_returnKeyType_search_option">search</option>
        <option value="send" id="TextView_returnKeyType_send_option">send</option>
      </select>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <VxpLabel text="autocorrect:" />
      <VxpCheckbox v-model="autocorrect" id="textview__autocorrect__input" />
    </StackLayout>
    <StackLayout orientation="horizontal">
      <VxpLabel text="Event output:" />
      <VxpLabel :text="eventOutput" id="textview__eventOutput__label" />
    </StackLayout>
  </StackLayout>
</template>

<script>
import TextView from '../../../src/core/components/TextView/TextView';
import TextField from '../../../src/core/components/TextField/TextField';
import StackLayout from '../../../src/layouts/StackLayout';
import VxpCheckbox from '../../../src/components/VxpCheckbox';
import VxpLabel from '../../../src/components/VxpLabel';

export default {
  name: 'TextViewDoc',
  components: {
    VxpLabel,
    VxpCheckbox,
    TextView,
    TextField,
    StackLayout,
  },
  data() {
    return {
      text: '',
      hint: '',
      editable: true,
      maxLength: '15',
      returnKeyType: 'done',
      autocorrect: false,
      eventOutput: '',
      disabled: false,
    };
  },
  computed: {
    maxLengthNumeric() {
      return this.maxLength ? Number(this.maxLength) : null;
    },
  },
};
</script>

<style>
.textView-wrapper * {
  margin: 3px;
}
</style>
