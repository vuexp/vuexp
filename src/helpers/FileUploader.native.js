import * as bgHttp from 'nativescript-background-http'; //eslint-disable-line

export default class FileUploader {
  constructor({ file, target, headers, onProgress }) { // eslint-disable-line
    this.files = [];
    if (file) {
      this.files.push(file);
    }
    this.timeout = 30 * 1000;
    this.session = bgHttp.session('image-upload');
    this.request = {
      method: 'POST',
      headers,
      androidAutoDeleteAfterUpload: false,
      androidNotificationTitle: `Image background upload`,
    };
    this.target = target;
    this.headers = headers || {};

    this.onProgress = onProgress;
  }

  cancel() {
    if (this.task) {
      this.task.cancel();
    }
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

      this.request.url = this.target;

      const params = this.files.map(file => {
        return { name: 'Files', filename: file.filename, mimeType: file.mimeType };
      });

      this.task = this.session.multipartUpload(params, this.request);

      if (this.task === undefined) {
        reject('Can not create upload task!');
        return;
      }

      this.task.on('progress', event => {
        if (this.onProgress) {
          this.onProgress(event.currentBytes ? (event.currentBytes / event.totalBytes) * 100 : 0);
        }
      });
      this.task.on('error', e => {
        reject(e.error ? e.error.toString() : e.error);
      });

      this.task.on('cancelled', () => {
        reject('Aborted');
      });

      this.task.on('responded', event => {
        try {
          resolve(event.data);
        } catch (e) {
          reject(e);
        }
      });
    });
  }
}
