<template>
  <StackLayout class="textField-wrapper">
    <StackLayout orientation="horizontal">
      <VxpTextField
      id="VxpTextField"
      label="VxpTextField"
      :text="text"
      :disabled="disabled"
      :autoFocus="autoFocus"
      :errors="errors"
      :keyboardType="keyboardType"
      :returnKeyType="returnKeyType"
      @input="text = $event"
      @textChange="eventOutput = 'textChange'"
      @returnPress="eventOutput = 'returnPress'"
      @focus="eventOutput = 'focus'"
      @blur="eventOutput = 'blur'" />
    </StackLayout>
    <StackLayout orientation="horizontal">
      <VxpLabel text="text:" horizontalAlignment="50%" />
      <TextField v-model="text" id="VxpTextField_text_textfield" horizontalAlignment="50%" :maxLength="maxLengthNumeric" :keyboardType="keyboardType" />
    </StackLayout>
    <StackLayout orientation="horizontal">
      <VxpLabel text="disabled:" />
      <VxpCheckbox v-model="disabled" id="VxpTextField_disabled_checkbox"></VxpCheckbox>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <VxpLabel text="autoFocus:" />
      <VxpCheckbox v-model="autoFocus" id="VxpTextField_autoFocus_checkbox"></VxpCheckbox>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <VxpLabel text="keyboardType:" />
      <select v-model="keyboardType" id="VxpTextField_keyboardType_select">
        <option value="datetime" id="VxpTextField_keyboardType_dateTime_option">datetime</option>
        <option value="phone" id="VxpTextField_keyboardType_phone_option">phone</option>
        <option value="number" id="VxpTextField_keyboardType_number_option">number</option>
        <option value="url" id="VxpTextField_keyboardType_url_option">url</option>
        <option value="email" id="VxpTextField_keyboardType_email_option">email</option>
      </select>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <VxpLabel text="returnKeyType:" />
      <select v-model="returnKeyType" id="VxpTextField_returnKeyType_select">
        <option value="done" id="VxpTextField_returnKeyType_done_option">done</option>
        <option value="next" id="VxpTextField_returnKeyType_next_option">next</option>
        <option value="go" id="VxpTextField_returnKeyType_go_option">go</option>
        <option value="search" id="VxpTextField_returnKeyType_search_option">search</option>
        <option value="send" id="VxpTextField_returnKeyType_send_option">send</option>
      </select>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <VxpLabel text="error text:" horizontalAlignment="50%" />
      <TextField id="VxpTextField_errors_textfield" v-model="errorText" horizontalAlignment="50%" />
    </StackLayout>
    <StackLayout orientation="horizontal">
      <VxpButton id="VxpTextField_add_error_button" @tap="addErrorText" text="Add Error"></VxpButton>
      <VxpButton id="VxpTextField_clear_errors_button" @tap="clearErrorText" text="Clear Errors"></VxpButton>
    </StackLayout>
    <StackLayout orientation="horizontal">
      <VxpLabel text="Event output:" />
      <VxpLabel :text="eventOutput" id="VxpTextField_eventOutput_Label" />
    </StackLayout>
  </StackLayout>
</template>

<script>
  import VxpTextField from '../../../src/components/VxpTextField';
  import VxpCheckbox from '../../../src/components/VxpCheckbox';
  import VxpLabel from '../../../src/components/VxpLabel';
  import StackLayout from '../../../src/layouts/StackLayout';
  import TextField from '../../../src/core/components/TextField/TextField';
  import VxpButton from '../../../src/components/VxpButton';

  export default {
    name: 'VxpTextFieldDoc',
    data() {
      return {
        text: '',
        editable: true,
        disabled: false,
        autoFocus: true,
        keyboardType: 'email',
        returnKeyType: 'done',
        errors: [],
        errorText: '',
        eventOutput: ''
      };
    },
    computed: {
      maxLengthNumeric() {
        return this.maxLength ?
          Number(this.maxLength) : null;
      }
    },
    methods: {
      addErrorText() {
        this.errors.push(this.errorText);
      },
      clearErrorText() {
        this.errors = [];
        this.errorText = '';
      }
    },
    components: {
      VxpTextField,
      VxpCheckbox,
      TextField,
      VxpButton,
      StackLayout,
      VxpLabel
    }
  };
</script>

<style lang="scss" scoped>
  @import '../../../src/assets/styles/helpers';

  .textField-wrapper {
    * {
      margin: unit(3);
      #VxpTextField {
        margin-bottom: unit(25);
      }
    }
  }

  
</style>

