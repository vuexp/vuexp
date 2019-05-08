<template>
  <StackLayout>
    <StackLayout class="demo-panel">
      <Label text="Label Properties" class="demo-panel__title"/>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Text" class="option-label"/>
        <TextField id="label_text_input" v-model="labelValue" class="option-input"/>
      </FlexboxLayout>

      <FlexboxLayout flexWrap="wrap">
        <Label text="Text Wrap" class="option-label"/>
        <input id="label_textwrap_cb" type="checkbox" v-model="textWrap">
      </FlexboxLayout>
      
    </StackLayout>

    <StackLayout class="demo-panel">
      <Label text="Component" class="demo-panel__title"/>
      <Label id="label_component" :text="labelValue" :textWrap="textWrap" />
    </StackLayout>
  </StackLayout>
</template>

<script>
import Label from '../../../src/components/Label'
import StackLayout from '../../../src/layouts/StackLayout'
import TextField from '../../../src/components/TextField';

export default {
  name: 'LabelLiveDemo',
  data() {
    return {
      labelValue: 'Label',
      textWrap: false
    };
  },
  components: {
    Label,
    StackLayout,
    TextField
  }
};
</script>

<style lang="scss" scoped>
.flexbox {
  color: #2c3e50;
}

.demo-panel {
  padding: 10px;
  border: #3c495e;
  border-radius: 5px;
  margin: 10px;
  border: 1px solid #f1f1f1;

  &__title {
    font-size:20px; 
    font-weight:bold; 
    margin-bottom:10px;
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
</style>
