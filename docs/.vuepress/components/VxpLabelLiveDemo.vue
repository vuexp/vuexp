<template>
  <StackLayout>
    <StackLayout class="demo-panel">
      <VxpLabel text="Label Properties" class="demo-panel__title" />

      <FlexboxLayout flexWrap="wrap">
        <VxpLabel text="Text" class="option-label" />
        <TextField id="label_text_input" v-model="labelValue" class="option-input" />
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <VxpLabel text="Text Wrap" class="option-label" />
        <input id="label_textwrap_cb" type="checkbox" v-model="textWrap" />
      </FlexboxLayout>
    </StackLayout>

    <StackLayout class="demo-panel">
      <VxpLabel text="Rendered Result" class="demo-panel__title" />
      <VxpLabel id="label_component" :text="labelValue" :textWrap="textWrap" />
    </StackLayout>

    <StackLayout class="demo-panel">
      <VxpLabel text="Styling the label" class="demo-panel__title" />
      <FlexboxLayout justifyContent="space-between" flexDirection="row">
        <VxpTextField type="text" v-model="formattedStringItemText" />

        <FlexboxLayout>
          <VxpLabel text="Bold: " />
          <VxpCheckbox id="label_bold" class="checkbox" v-model="bold" />
        </FlexboxLayout>

        <FlexboxLayout>
          <VxpLabel text="Italic: " />
          <VxpCheckbox id="label_italic" class="checkbox" v-model="italic" />
        </FlexboxLayout>

        <FlexboxLayout>
          <VxpLabel text="Underline: " />
          <VxpCheckbox id="label_underline" class="checkbox" v-model="underline" />
        </FlexboxLayout>

        <FlexboxLayout>
          <VxpLabel text="Colored: " />
          <VxpCheckbox id="label_colored" class="checkbox" v-model="colored" />
        </FlexboxLayout>

        <VxpButton text="Add" @tap="addItem" />
      </FlexboxLayout>

      <FlexboxLayout flexDirection="column" alignItems="flex-start">
        <FlexboxLayout v-for="(item, key) in formattedStringItems" :key="key" alignItems="center" style="backgroundColor: #CCC; margin: 3px 0; padding: 0 10px; font-size: 12px">
          <VxpLabel :textWrap="true">
            <FormattedString>
              <Span :text="item.text" :style="item.style" />
            </FormattedString>
          </VxpLabel>
          <VxpIconButton :size="30" :id="'remove_item_' + key" @tap="removeItem(key)" iconName="fa" :icon="'fa-minus'" primary />
        </FlexboxLayout>
      </FlexboxLayout>
    </StackLayout>

    <StackLayout class="demo-panel">
      <VxpLabel text="Rendered Result" class="demo-panel__title" />
      <VxpLabel :textWrap="true">
        <FormattedString>
          <Span :text="item.text" v-for="(item, key) in formattedStringItems" :key="key" :style="item.style" />
        </FormattedString>
      </VxpLabel>
    </StackLayout>
  </StackLayout>
</template>

<script>
import VxpLabel from '../../../src/components/VxpLabel';
import VxpTextField from '../../../src/components/VxpTextField';
import VxpIconButton from '../../../src/components/VxpIconButton';
import VxpButton from '../../../src/components/VxpButton';
import StackLayout from '../../../src/layouts/StackLayout';
import TextField from '../../../src/core/components/TextField/TextField';
import FormattedString from '../../../src/core/components/FormattedString/FormattedString';
import Span from '../../../src/core/components/Span/Span';
import FlexboxLayout from '../../../src/layouts/FlexboxLayout';
import GridLayout from '../../../src/layouts/GridLayout';
import VxpCheckbox from "../../../src/components/VxpCheckbox";

export default {
  name: 'VxpLabelLiveDemo',
  data() {
    return {
      labelValue: 'Hello world!',
      textWrap: false,
      bold: false,
      italic: false,
      underline: false,
      colored: false,
      formattedStringItemText: '',
      formattedStringItems: [
        {
          text: 'This text has a ',
        },
        {
          text: 'red ',
          style: {
            color: 'red',
          },
        },
        {
          text: 'piece of text. ',
        },
        {
          text: 'Also, this bit is italic, ',
          style: {
            fontStyle: 'italic',
          },
        },
        {
          text: 'and this bit is bold.',
          style: {
            fontWeight: 'bold',
          },
        },
      ],
    };
  },
  components: {
    VxpTextField,
    VxpCheckbox,
    FlexboxLayout,
    GridLayout,
    VxpButton,
    VxpLabel,
    StackLayout,
    TextField,
    FormattedString,
    Span,
    VxpIconButton,
  },
  methods: {
    addItem() {
      this.formattedStringItems.push({
        text: this.formattedStringItemText,
        style: {
          fontWeight: this.bold ? 'bold' : undefined,
          fontStyle: this.italic ? 'italic' : undefined,
          textDecoration: this.underline ? 'underline' : undefined,
          color: this.colored ? 'red' : undefined,
        },
      });
      this.formattedStringItemText = '';
      this.bold = false;
      this.italic = false;
      this.underline = false;
      this.colored = false;
    },
    removeItem(key) {
      this.formattedStringItems = this.formattedStringItems.filter((item, index) => index !== key);
    },
  },
};
</script>

<style lang="scss" scoped>
.flexbox {
  color: #2c3e50;
}

.checkbox{
  margin-left: 10px;
}

.demo-panel {
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  border: 1px solid #f1f1f1;

  &__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}

.editor-param-input {
  width: 50px;
}

.option-label {
  margin-right: 10px;
  margin-bottom: 5px;
  width: 130px;
}

.option-input {
  width: 130px;
}

.option-row {
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
  width: 100%;
}

.editor-param-title {
  margin: 0 5px 0 5px;
}

select {
  border: 1px solid #eaeaea;
  border-radius: 3px;
  padding: 2px 10px 2px 0;
}

button {
  padding: unset;
  padding-left: 5px;
  padding-right: 5px;
  min-width: unset;
}

@import url('/fonts/fontawesome.min.css');
</style>
