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
	</StackLayout>
</template>

<script>
	import WebView from '../../../src/components/WebView';
	import TextField from '../../../src/components/TextField';
	import Label from '../../../src/components/Label';
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
				src: '<div><h1>WebView</h1></div>',
				html: '<div><h1>WebView</h1></div>'
			}
		},
		methods: {
			webViewLoadStarted(event) {
				console.log("WebView Loading started.");
			},
			webViewLoadFinished(event) {
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
