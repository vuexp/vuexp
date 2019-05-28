---
sidebarDepth: 0
---

# VxpImageUploader

This is an overview of `<VxpImageUploader>` component.
`VxpImageUploader` is a UI component that lets user to select an image to upload.

## Live Demo
<DocExampleBox :liveDemoMode="true">
<VxpImageUploaderLiveDemo />
</DocExampleBox>

## Props

| Name       | Type    | Default | Web | Mobile | Description |
| ---------- | ------- | ------- | --- | ------ | ----------- |
| src        | String  | `-`       | ✔   | ✔      | Url of the image |
| size       | Number  | `100`   | ✔   | ✔      | Size of the image in pixels |
| maxSize    | Number  | `10485760` | ✔   | ✔      | Maximum allowed image file size to upload. Default is 10 MB. |
| disabled   | Boolean | `false` | ✔   | ✔      | If component is disabled, user can not select a file to upload. It acts as an image component |
| target     | String  |  `-`      | ✔   | ✔      | REST API point for upload operation. This point must accept POST method and a file that is sent using multipart form data. |

## Events

| Name              | Web | Mobile | Description |
| ----------------- | --- | ------ | ----------- |
| maxFileError      |  ✔  | ✔      | This event is emitted if user selects a bigger file than the specified max-file size. |
| onUploadError     |  ✔  | ✔      | This event is emitted if something goes wrong during upload operation. `error` will be provided as the first parameter. |
| onUploadProgress |  ✔  | ✔      | This event is emitted on upload progress. Percent will be provided as the first parameter |
| onUploadCompleted |  ✔  | ✔      | This event is emitted if upload is completed successfully. String of server `response` will be provided as the first parameter |
