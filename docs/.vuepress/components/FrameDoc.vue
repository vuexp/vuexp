<template>
    <StackLayout>
        <Frame id="Frame" />
            <Label id="Frame_label" text="FRAME" />
        <Frame />
    </StackLayout>
</template>

<script>
    import StackLayout from '../../../src/layouts/StackLayout'
    import Label from '../../../src/components/Label'
    import Frame from '../../../src/components/Frame'

    export default {
        name: "FrameDoc",
        data() {
            return {
                textViewInput: "default \n value"
            };
        },
        methods: {
            webViewLoadStarted(event) {
                console.log("WebView Loading Started");
            },
            webViewLoadFinished(event) {
                console.log("WebView Loading finished.");
            }
        },
        components: {
            StackLayout,
            Frame,
            Label
        }
    };
</script>
