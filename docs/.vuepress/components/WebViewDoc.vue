<template>
	<StackLayout class="webView-wrapper">
		<WebView id="WebView" :src="src" :html="html" @loadStarted="webViewLoadStarted" @loadFinished="webViewLoadFinished" />
		<StackLayout orientation="horizontal" class="frm-grp">
			<Label text="src:" width="50" />
			<TextField v-model="src" id="WebView_src_textfield" />
		</StackLayout>
		<StackLayout orientation="horizontal" class="frm-grp">
			<Label text="html:"  width="50" />
			<TextField v-model="html" id="WebView_html_textfield" />
		</StackLayout>
		<StackLayout orientation="horizontal">
			<Label text="Event output:" />
			<Label :text="eventOutput" id="WebView_eventOutput_Label"/>
		</StackLayout>
	</StackLayout>
</template>

<script>
	import WebView from '../../../src/core/components/WebView/WebView';
	import TextField from '../../../src/core/components/TextField/TextField';
	import Label from '../../../src/core/components/Label/Label';
	import StackLayout from '../../../src/layouts/StackLayout';

	export default {
		name: "WebViewDoc",
		components: {
			WebView,
			TextField,
			StackLayout,
			Label,
		},
		data() {
			return {
				src: '',
				html: '',
				eventOutput: '',
			}
		},
		methods: {
			webViewLoadStarted(event) {
				this.eventOutput = 'loadStarted';
				console.log("WebView Loading started.");
			},
			webViewLoadFinished(event) {
				this.eventOutput = 'loadFinished';
				console.log("WebView Loading finished.");
			}
		}
	};
</script>

<style lang="scss" scoped>
.webView-wrapper * {
	margin: 3px;
}
.frm-grp {
	input {
		width: 100%;
	}
}
</style>
