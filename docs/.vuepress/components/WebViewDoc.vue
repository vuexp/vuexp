<template>
	<WebView src="<div><h1>WebView</h1></div>" />
</template>

<script>
	export default {
		name: "WebViewDoc",
		methods: {
			webViewLoadStarted(event) {
				console.log("WebView Loading Started");
			},
			webViewLoadFinished(event) {
				console.log("WebView Loading finished.");
			}
		}
	};
</script>
