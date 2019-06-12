import { expect } from 'chai';
import sinon from 'sinon';
import FileUploader from '../../../src/helpers/FileUploader';

const originalXMLHttpRequest = global.XMLHttpRequest;
describe('Helper:FileUploader', () => {
  const mockFile = new File(['somedummycontent'], 'filename', { type: 'text/html' });

  let xhr = sinon.useFakeXMLHttpRequest();
  let request = null;

  before(() => {
    xhr.onCreate = function(req) {
      request = req;
    };
    global.XMLHttpRequest = xhr;
  });

  after(() => {
    global.XMLHttpRequest = originalXMLHttpRequest;
    xhr.restore();
    xhr = null;
  });

  it('should throw error when no constructor passed', () => {
    function badConstructor() {
      new FileUploader();
    }
    expect(badConstructor).to.throw();
  });

  it('should create an empty file list when no file given by constructor', () => {
    const fileUploader = new FileUploader({});
    expect(fileUploader.files).to.be.ok;
    expect(fileUploader.files.length).to.eq(0);
  });

  it('should create an file list with give file is first entry', () => {
    const fileUploader = new FileUploader({ file: mockFile });
    expect(fileUploader.files).to.be.ok;
    expect(fileUploader.files.length).to.eq(1);
    expect(fileUploader.files[0]).to.eq(mockFile);
  });

  it('should call abort for Upload Ajax when called `cancel` method', () => {
    const fileUploader = new FileUploader({});
    expect(request).to.be.ok;
    const abortSpy = sinon.spy(request, 'abort');

    fileUploader.cancel();
    expect(abortSpy.calledOnce).to.be.true;
  });

  it('should throw error at start upload without target configuration', () => {
    return new FileUploader({})
      .upload()
      .then(() => {
        expect.fail('Upload tried to start without target url', 'Upload should not start without target url');
      })
      .catch(err => {
        expect(err).to.be.eq('Upload target not set');
      });
  });

  it('should throw error at start upload without files', () => {
    return new FileUploader({ target: 'fake/path' })
      .upload()
      .then(() => {
        expect.fail('Upload tried to start without a file', 'Upload should not start without a file');
      })
      .catch(err => {
        expect(err).to.be.eq('Files not added');
      });
  });

  it('should reject upload when server response error status', () => {
    const uploadPromise = new FileUploader({ target: 'fake/path', file: mockFile }).upload();
    const serverErrorMessage = 'FileCannotBeUploadedForSomeReason';
    request.setStatus(500);
    request.setResponseHeaders({});
    request.setResponseBody(serverErrorMessage);

    return uploadPromise
      .then(() => {
        expect.fail('Upload should have rejected', 'Upload didnt reject');
      })
      .catch(err => {
        expect(err).to.contain('Internal Server');
      });
  });

  it('should reject upload when offline', () => {
    const uploadPromise = new FileUploader({ target: 'fake/path', file: mockFile }).upload();
    request.error();
    return uploadPromise
      .then(() => {
        expect.fail('Upload should have rejected', 'Upload didnt reject');
      })
      .catch(() => {
        expect(request.readyState).to.eq(4);
        expect(request.status).to.eq(0);
      });
  });

  it('should throw error at aborting upload before upload finished', () => {
    const fileUploader = new FileUploader({ target: 'fake/path', file: mockFile });
    const uploadPromise = fileUploader.upload();
    fileUploader.cancel();

    return uploadPromise
      .then(() => {
        expect.fail('Upload should have rejected', 'Upload didnt reject');
      })
      .catch(err => {
        expect(err).to.be.contain('Aborted');
      });
  });

  it('should throw error at aborting upload before upload finished', () => {
    const fileUploader = new FileUploader({ target: 'fake/path', file: mockFile });
    fileUploader.headers = null;
    const uploadPromise = fileUploader.upload();
    const responseBody = 'SuccessResponse';
    request.uploadProgress(new ProgressEvent('progress', { lengthComputable: true, loaded: 1, total: 1 }));
    request.respond(200, {}, responseBody);

    return uploadPromise
      .then(response => {
        expect(response).to.eq(responseBody);
      })
      .catch(() => {
        expect.fail('Upload should have been resolved', 'Upload didnt resolve');
      });
  });

  it('should add request headers to the xhr', done => {
    const headers = { header1: '1', header2: '2' };
    const fileUploader = new FileUploader({ target: 'fake/path', file: mockFile, headers: headers });
    fileUploader.upload();
    setTimeout(() => {
      expect(request.requestHeaders).to.eql(headers);
      done();
    }, 10);
  });

  it('should not add headers from prototype', done => {
    function parent() {}
    parent.prototype.test1 = '1';

    class child extends parent {
      test2 = '2';
    }
    const headers = new child();
    const fileUploader = new FileUploader({ target: 'fake/path', file: mockFile, headers });
    fileUploader.upload();
    setTimeout(() => {
      expect(headers).to.eql({
        test1: '1',
        test2: '2',
      });
      expect(request.requestHeaders).to.eql({
        test2: '2',
      });
      done();
    }, 10);
  });

  it('should add some file name if fileName not specified', done => {
    const mockFile = new File(['somedummycontent'], '', { type: 'text/html' });
    const fileUploader = new FileUploader({ target: 'fake/path', file: mockFile });
    fileUploader.upload();

    setTimeout(() => {
      expect(fileUploader.formData.get('Files').name).to.be.ok;
      done();
    }, 10);
  });

  it('should callback if proggress event is passed', () => {
    const headers = { header1: '1', header2: '2' };
    const progressSpy = sinon.spy();
    const fileUploader = new FileUploader({ target: 'fake/path', file: mockFile, headers: headers, onProgress: progressSpy });
    fileUploader.upload();
    request.uploadProgress(new ProgressEvent('progress', { lengthComputable: false }));
    request.uploadProgress(new ProgressEvent('progress', { lengthComputable: true, loaded: 1, total: 3 }));

    expect(progressSpy.called).to.be.true;
    expect(progressSpy.getCalls().length).to.be.eq(2);
    expect(progressSpy.getCall(0).args[0]).to.be.eq(0);
    expect(progressSpy.getCall(1).args[0]).to.be.eq((1 / 3) * 100);
  });
});
