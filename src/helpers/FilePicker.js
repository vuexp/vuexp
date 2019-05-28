const pickerTypes = Object.freeze({
  file: 'file',
  image: 'image',
  audio: 'audio',
  video: 'video',
  media: 'media',
});

class FilePicker {
  constructor() {
    this._inputElement = document.createElement('input');
    this._inputElement.type = 'file';

    this._inputElement.addEventListener('change', e => {
      const selectedFiles = e.target.files;

      if (selectedFiles.length > this.options.maxNumberFiles) {
        if (this._errorEventHandler !== null && typeof this._errorEventHandler === 'function') {
          this._errorEventHandler('max limit exceeded');
        }
      } else {
        if (this._selectedEventHandler !== null && typeof this._selectedEventHandler === 'function') {
          this._selectedEventHandler(selectedFiles);
        }
      }
    });

    this._options = {
      maxNumberFiles: 1,
      extensions: [],
      maxDuration: 60, //for only native
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
    return Object.assign(this._options, options);
  }

  extractFilePath(file, path) {
    return new Promise(resolve => {
      resolve({ file, path });
    });
  }

  getOptions(options) {
    let accept = [];

    switch (options.pickerType) {
      case pickerTypes.image:
        accept = options.extensions.length > 0 ? '' : 'image/*';
        break;
      case pickerTypes.audio:
        accept = options.extensions.length > 0 ? '' : 'audio/*';
        break;
      case pickerTypes.video:
        accept = options.extensions.length > 0 ? '' : 'video/*';
        break;
      case pickerTypes.media:
        accept = options.extensions.length > 0 ? '' : 'image/*,video/*';
        break;
      default:
      case pickerTypes.file:
        accept = options.extensions.length > 0 ? '' : '*';
        break;
    }

    return {
      multipleSelection: options.maxNumberFiles > 1,
      accept: accept,
    };
  }

  open() {
    const options = this.getOptions(this.options);

    this._inputElement.value = '';
    this._inputElement.accept = options.accept;
    this._inputElement.multiple = options.multipleSelection;
    this._inputElement.click();
  }

  on(eventName, callBack) {
    switch (eventName) {
      case 'selected':
        this._selectedEventHandler = callBack;
        break;
      case 'error':
        this._errorEventHandler = callBack;
        break;
    }
  }
}

export default FilePicker;
