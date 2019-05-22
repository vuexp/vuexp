<template>
	<StackLayout class="textView-wrapper">
		<StackLayout orientation="horizontal">
			<Label text="Textview:" />
			<TextView id="TextView" 
        v-model="text"
        :hint="hint"
        :editable="editable"
        :maxLength="maxLengthNumeric"
        :returnKeyType="returnKeyType"
        :autocorrect="autocorrect"
        @textChange="eventOutput = 'textChange'"
        @returnPress="eventOutput = 'returnPress'"
        @focus="eventOutput = 'focus'"
        @blur="eventOutput = 'blur'" />
		</StackLayout>
		<StackLayout orientation="horizontal">
			<Label text="text:" horizontalAlignment="50%" />
			<TextField v-model="text" id="TextView_text_textfield" horizontalAlignment="50%" />
		</StackLayout>
		<StackLayout orientation="horizontal">
			<Label text="hint:" />
			<TextField v-model="hint" id="TextView_hint_textfield" />
		</StackLayout>
		<StackLayout orientation="horizontal">
			<Label text="editable:" />
			<input type="checkbox" v-model="editable" id="TextView_editable_input">
		</StackLayout>
		<StackLayout orientation="horizontal">
			<Label text="maxLength:" />
			<TextField v-model="maxLength" keyboardType="number" id="TextView_maxLength_textfield" />
		</StackLayout>
		<StackLayout orientation="horizontal">
			<Label text="returnKeyType:" />
			<select v-model="returnKeyType" id="TextView_returnKeyType_select">
				<option value="done" id="TextView_returnKeyType_done_option">done</option>
				<option value="next" id="TextView_returnKeyType_next_option">next</option>
				<option value="go" id="TextView_returnKeyType_go_option">go</option>
				<option value="search" id="TextView_returnKeyType_search_option">search</option>
				<option value="send" id="TextView_returnKeyType_send_option">send</option>
			</select>
		</StackLayout>
		<StackLayout orientation="horizontal">
			<Label text="autocorrect:" />
			<input type="checkbox" v-model="autocorrect" id="TextView_autocorrect_input">
		</StackLayout>
		<StackLayout orientation="horizontal">
			<Label text="Event output:" />
			<Label :text="eventOutput" id="TextView_eventOutput_Label" />
		</StackLayout>
	</StackLayout>
</template>

<script>
  import TextView from '../../../src/core/components/TextView/TextView'
  import TextField from '../../../src/core/components/TextField/TextField'
	import Label from '../../../src/core/components/Label/Label'
	import StackLayout from '../../../src/layouts/StackLayout'

	export default {
		name: "TextViewDoc",
		components: {
      TextView,
      TextField,
			Label,
			StackLayout
		},
		data() {
			return {
				text: '',
				hint: '',
				editable: true,
				maxLength: "15",
				returnKeyType: 'done',
				autocorrect: false,
				eventOutput: ''
			}
    },
    computed: {
			maxLengthNumeric() {
				return this.maxLength ?
					Number(this.maxLength) : null;
			}
		},
	};
</script>

<style>
	.textView-wrapper * {
		margin: 3px;
	}
</style>