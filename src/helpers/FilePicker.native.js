import { Mediafilepicker } from 'nativescript-mediafilepicker'; //eslint-disable-line
import * as imagepicker from 'nativescript-imagepicker'; //eslint-disable-line
import platform from '../platform';
import { imageSourceModule, fileSystemModule } from './tns-core-modules';

const pickerTypes = Object.freeze({
  file: 'file',
  image: 'image',
  audio: 'audio',
  video: 'video',
  camera: 'camera',
  media: 'media',
});

let fileTypes = {
  android: {
    txt: 'txt',
    pdf: 'pdf',
    png: 'png',
    jpg: 'jpg',
    jpeg: 'jpeg',
    bmp: 'bmp',
    ppt: 'ppt',
    pptx: 'pptx',
    doc: 'doc',
    docx: 'docx',
  },
  ios: {},
};

if (platform.platform === 'ios') {
  // These type definitions are not available in android
  fileTypes.ios = {
    txt: kUTTypeText, // eslint-disable-line
    pdf: kUTTypePDF, // eslint-disable-line
    png: kUTTypePNG, // eslint-disable-line
    jpg: kUTTypeJPEG, // eslint-disable-line
    jpeg: kUTTypeJPEG, // eslint-disable-line
    bmp: kUTTypeBMP, // eslint-disable-line
    ppt: 'com.microsoft.word.ppt',
    pptx: 'org.openxmlformats.wordprocessingml.presentation',
    doc: 'com.microsoft.word.doc',
    docx: 'org.openxmlformats.wordprocessingml.document',
  };
}

class FilePicker {
  constructor() {
    this._options = {
      maxNumberFiles: 1,
      extensions: [],
      maxDuration: 60,
      pickerType: this.pickerTypes.image,
    };

    this._selectedEventHandler = null;
    this._errorEventHandler = null;
    this._cancelEventHandler = null;
  }

  get pickerTypes() {
    return pickerTypes;
  }

  get options() {
    return this._options;
  }
  set options(options) {
    Object.assign(this._options, options);
  }

  extractFilePath(file) {
    return new Promise((resolve, reject) => {
      if (file.file) {
        let filePath = '';
        let fileSize = 0;
        if (file.file.startsWith('file://')) {
          filePath = file.file.replace('file://', '');
          filePath = decodeURIComponent(filePath);
        } else {
          filePath = file.file;
        }

        // try to get file size
        try {
          const documentFile = fileSystemModule.File.fromPath(filePath); // deepscan-disable-line
          fileSize = documentFile.size;
        } catch (ex) {
          console.error('can not get file size!', ex); // eslint-disable-line
        }

        resolve({ file: { filename: filePath, size: fileSize }, path: filePath });
      }

      if (platform.platform === 'ios') {
        const { ios } = file;
        if (ios && ios.mediaType === PHAssetMediaType.Image) { // eslint-disable-line
          const opt = PHImageRequestOptions.new(); // eslint-disable-line
          opt.version = PHImageRequestOptionsVersion.Current; // eslint-disable-line
          PHImageManager.defaultManager().requestImageDataForAssetOptionsResultHandler(ios, opt, (imageData, dataUTI, orientation, info) => { // eslint-disable-line
            const filePath = info.objectForKey('PHImageFileURLKey').toString();
            const imgSource = imageSourceModule.fromData(imageData); // deepscan-disable-line
            const localPath = filePath.toString().split('/');
            const fileName = localPath[localPath.length - 1].split('.')[0] + '.jpeg';
            const folderPath = fileSystemModule.knownFolders.documents().path;
            const jpegFilePath = fileSystemModule.path.join(folderPath, 'image.jpeg');
            const saved = imgSource.saveToFile(jpegFilePath, 'jpeg', 80);
            if (saved) {
              let fileSize = 0;
              try {
                const jpegFile = fileSystemModule.File.fromPath(jpegFilePath); // deepscan-disable-line
                fileSize = jpegFile.size;
              } catch (ex) {
                console.error('can not get file size!', ex); // eslint-disable-line
              }

              resolve({ file: { filename: jpegFilePath, name: fileName, type: 'image/jpeg', size: fileSize }, path: jpegFilePath });
            } else {
              reject();
            }
          });
        }
      } else if (platform.platform === 'android') {
        // try to get file size
        let fileSize = 0;
        try {
          const documentFile = fileSystemModule.File.fromPath(file._android); // deepscan-disable-line
          fileSize = documentFile.size;
        } catch (ex) {
          console.error('can not get file size!', ex); // eslint-disable-line
        }

        resolve({ file: { filename: file._android, type: 'image/jpeg', size: fileSize }, path: file._android });
      } else {
        reject();
      }
    });
  }

  getOptions(options) {
    switch (options.pickerType) {
      case pickerTypes.image:
        return {
          android: {
            isCaptureMood: false, // if true then camera will open directly.
            isNeedCamera: true,
            maxNumberFiles: options.maxNumberFiles,
            isNeedFolderList: true,
          },
          ios: {
            isCaptureMood: false, // if true then camera will open directly.
            maxNumberFiles: options.maxNumberFiles,
          },
        };

      case pickerTypes.camera:
        return {
          android: {
            isCaptureMood: true, // if true then camera will open directly.
            isNeedCamera: true,
            maxNumberFiles: 0,
            isNeedFolderList: false,
            multipleSelection: false,
          },
          ios: {
            isCaptureMood: true, // if true then camera will open directly.
            maxNumberFiles: 0,
          },
        };

      case pickerTypes.audio:
        return {
          android: {
            isCaptureMood: false, // if true then voice recorder will open directly.
            isNeedRecorder: true,
            maxNumberFiles: options.maxNumberFiles,
            isNeedFolderList: true,
            maxSize: 102400, // Maximum size of recorded file in bytes. 5900 = ~ 1 second
          },
          ios: {
            isCaptureMood: false, // if true then voice recorder will open directly.
            maxNumberFiles: options.maxNumberFiles,
            audioMaximumDuration: 10,
          },
        };
      case pickerTypes.video:
        return {
          android: {
            isCaptureMood: false, // if true then camera will open directly.
            isNeedCamera: true,
            maxNumberFiles: options.maxNumberFiles,
            isNeedFolderList: true,
            maxDuration: options.maxDuration,
          },
          ios: {
            isCaptureMood: false, // if true then camera will open directly.
            videoMaximumDuration: options.maxDuration,
          },
        };

      default:
      case pickerTypes.file:
        return {
          android: {
            extensions: options.extensions.map(x => fileTypes.android[x]),
            maxNumberFiles: options.maxNumberFiles,
            isNeedFolderList: true,
          },
          ios: {
            extensions: options.extensions.map(x => fileTypes.ios[x]),
            multipleSelection: options.maxNumberFiles > 1,
          },
        };
    }
  }

  open() {
    if (this.options.pickerType === this.pickerTypes.media) {
      this._mediaFilePicker = imagepicker.create({
        mode: 'single', // use "multiple" for multiple selection
      });

      this._mediaFilePicker
        .authorize()
        .then(() => {
          return this._mediaFilePicker.present();
        })
        .then(results => {
          this._selectedEventHandler(results);
        })
        .catch(e => {
          this._cancelEventHandler(e);
        });
    } else {
      this._mediaFilePicker = new Mediafilepicker();
      const options = this.getOptions(this.options);

      switch (this.options.pickerType) {
        case pickerTypes.image:
        case pickerTypes.camera:
          this._mediaFilePicker.openImagePicker(options);
          break;
        case pickerTypes.audio:
          this._mediaFilePicker.openAudioPicker(options);
          break;
        case pickerTypes.video:
          this._mediaFilePicker.openVideoPicker(options);
          break;
        case pickerTypes.file:
        default:
          this._mediaFilePicker.openFilePicker(options);
          break;
      }

      this._mediaFilePicker.on('getFiles', res => {
        if (this._selectedEventHandler !== null && typeof this._selectedEventHandler === 'function') {
          let results = res.object.get('results');

          if (results.length > this.options.maxNumberFiles) {
            this._errorEventHandler('max limit exceeded');
          } else {
            this._selectedEventHandler(results);
          }
        }
      });

      this._mediaFilePicker.on('error', res => {
        if (this._errorEventHandler !== null && typeof this._errorEventHandler === 'function') {
          let msg = res.object.get('msg');
          this._errorEventHandler(msg);
        }
      });

      this._mediaFilePicker.on('cancel', res => {
        if (this._cancelEventHandler !== null && typeof this._cancelEventHandler === 'function') {
          let msg = res.object.get('msg');
          this._cancelEventHandler(msg);
        }
      });
    }
  }

  on(eventName, callBack) {
    switch (eventName) {
      case 'selected':
        this._selectedEventHandler = callBack;
        break;
      case 'error':
        this._errorEventHandler = callBack;
        break;
      case 'cancel':
        this._cancelEventHandler = callBack;
        break;
    }
  }
}

export default FilePicker;
