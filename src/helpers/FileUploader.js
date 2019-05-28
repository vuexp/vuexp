export default class FileUploader {
  constructor({ file, target, headers, onProgress }) {
    this.files = [];
    if (file) {
      this.files.push(file);
    }
    this.timeout = 30 * 1000;
    this.xhr = new XMLHttpRequest();
    this.formData = new FormData();
    this.target = target;
    this.headers = headers || {};

    this.onProgress = onProgress;
  }

  cancel() {
    this.xhr.abort();
  }

  upload() {
    return new Promise((resolve, reject) => {
      if (!this.target) {
        reject('Upload target not set');
        return;
      }
      if (this.files.length === 0) {
        reject('Files not added');
        return;
      }

      this.xhr.addEventListener(
        'readystatechange',
        event => {
          if (event && event.target) {
            const { status, responseText, readyState, statusText } = event.target;
            if (status && readyState && responseText && readyState === 4) {
              if (status === 200) {
                try {
                  resolve(responseText);
                } catch (e) {
                  resolve(responseText);
                }
              } else {
                reject(`${status} - ${statusText}`);
              }
            }
          }
        },
        false,
      );

      this.xhr.upload.addEventListener(
        'progress',
        event => {
          if (this.onProgress) {
            this.onProgress(event.lengthComputable ? (event.loaded / event.total) * 100 : 0);
          }
        },
        false,
      );
      this.xhr.upload.addEventListener(
        'error',
        error => {
          reject(error);
        },
        false,
      );
      this.xhr.upload.addEventListener(
        'abort',
        () => {
          reject('Aborted');
        },
        false,
      );

      this.xhr.timeout = this.timeout;
      this.xhr.open('POST', this.target);

      if (this.headers) {
        for (const header in this.headers) {
          if (this.headers.hasOwnProperty(header)) {
            this.xhr.setRequestHeader(header, this.headers[header]);
          }
        }
      }

      for (const file of this.files) {
        this.formData.append('Files', file, file.name || 'user_file');
      }

      this.xhr.send(this.formData);
    });
  }
}
