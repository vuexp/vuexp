<template>
	<StackLayout class="textField-wrapper">
		<StackLayout orientation="horizontal">
			<Label text="Textfield:" />
			<TextField 
			id="TextField"
			:text="text"
			:hint="hint"
			:editable="editable"
			:maxLength="maxLengthNumeric"
			:secure="secure"
			:keyboardType="keyboardType"
			:returnKeyType="returnKeyType"
			:autocorrect="autocorrect"
			@input="text = $event"
			@textChange="eventOutput = 'textChange'"
			@returnPress="eventOutput = 'returnPress'"
			@focus="eventOutput = 'focus'"
			@blur="eventOutput = 'blur'" />
		</StackLayout>
		<StackLayout orientation="horizontal">
			<Label text="text:" horizontalAlignment="50%" />
			<TextField v-model="text" id="TextField_text_textfield" horizontalAlignment="50%" :maxLength="maxLengthNumeric" :keyboardType="keyboardType" />
		</StackLayout>
		<StackLayout orientation="horizontal">
			<Label text="hint:" />
			<TextField v-model="hint" id="TextField_hint_textfield" />
		</StackLayout>
		<StackLayout orientation="horizontal">
			<Label text="editable:" />
			<input type="checkbox" v-model="editable" id="TextField_editable_input">
		</StackLayout>
		<StackLayout orientation="horizontal">
			<Label text="maxLength:" />
			<TextField v-model="maxLength" keyboardType="number" id="TextField_maxLength_input" />
		</StackLayout>
		<StackLayout orientation="horizontal">
			<Label text="secure:" />
			<input type="checkbox" v-model="secure" id="TextField_secure_input">
		</StackLayout>
		<StackLayout orientation="horizontal">
			<Label text="keyboardType:" />
			<select v-model="keyboardType" id="TextField_keyboardType_select">
				<option value="datetime" id="TextField_keyboardType_dateTime_option">datetime</option>
				<option value="phone" id="TextField_keyboardType_phone_option">phone</option>
				<option value="number" id="TextField_keyboardType_number_option">number</option>
				<option value="url" id="TextField_keyboardType_url_option">url</option>
				<option value="email" id="TextField_keyboardType_email_option">email</option>
			</select>
		</StackLayout>
		<StackLayout orientation="horizontal">
			<Label text="returnKeyType:" />
			<select v-model="returnKeyType" id="TextField_returnKeyType_select">
				<option value="done" id="TextField_returnKeyType_done_option">done</option>
				<option value="next" id="TextField_returnKeyType_next_option">next</option>
				<option value="go" id="TextField_returnKeyType_go_option">go</option>
				<option value="search" id="TextField_returnKeyType_search_option">search</option>
				<option value="send" id="TextField_returnKeyType_send_option">send</option>
			</select>
		</StackLayout>
		<StackLayout orientation="horizontal">
			<Label text="autocorrect:" />
			<input type="checkbox" v-model="autocorrect" id="TextField_autocorrect_input">
		</StackLayout>
		<StackLayout orientation="horizontal">
			<Label text="Event output:" />
			<Label :text="eventOutput" id="TextField_eventOutput_Label"/>
		</StackLayout>
	</StackLayout>
</template>

<script>
	import TextField from '../../../src/components/TextField'
	import Label from '../../../src/components/Label'
	import StackLayout from '../../../src/layouts/StackLayout'

	export default {
		name: 'TextFieldDoc',
		data() {
			return {
				text: '',
				hint: '',
				editable: true,
				maxLength: "15",
				secure: false,
				keyboardType: 'email',
				returnKeyType: 'done',
				autocorrect: false,
				eventOutput: ''
			};
		},
		computed: {
			maxLengthNumeric() {
				return this.maxLength ?
					Number(this.maxLength) : null;
			}
		},
		components: {
			TextField,
			StackLayout,
			Label
		}
	};
</script>

<style>
	.textField-wrapper * {
		margin: 3px;
	}
</style>

