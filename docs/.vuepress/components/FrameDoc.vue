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

<style lang="scss" scoped>
    .demo-panel {
        padding: 10px;
        border-radius: 5px;
        margin: 10px;
        border: 1px solid #f1f1f1;

        &__title {
            font-size:20px;
            font-weight:bold;
            margin-bottom:10px;
        }
    }
    select {
        border: 1px solid #eaeaea;
        border-radius: 3px;
        padding: 2px 10px 2px 0;
    }
</style>
