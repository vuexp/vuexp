import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import localVue from '../local-vue';
// import platform from '../../../src/platform';
import VxpImageUploader from '../../../src/components/VxpImageUploader';
import FilePicker from '../../../src/helpers/FilePicker';
import FileUploader from '../../../src/helpers/FileUploader';

describe('VxpImageUploader', () => {
  let uploadStub, filePickerOpenStub, filePickerOnStub;
  const dummyFile = new File(['somedummycontent'], 'filename', { type: 'text/html' });
  const emptyFile = new File([''], 'filename', { type: 'text/html' });
  beforeEach(() => {
    filePickerOpenStub = sinon.spy(FilePicker.prototype, 'open');
    filePickerOnStub = sinon.spy(FilePicker.prototype, 'on');
    uploadStub = sinon.stub(FileUploader.prototype, 'upload');
  });

  afterEach(() => {
    FilePicker.prototype.open.restore();
    FilePicker.prototype.on.restore();
    FileUploader.prototype.upload.restore();
  });

  const createComponent = data => {
    const component = mount(VxpImageUploader, {
      ...data,
      localVue,
    });
    return component;
  };

  const createMockedComponent = (propsToOverride = {}, listeners = {}, mountingOptions = {}) => {
    return createComponent({
      propsData: {
        ...propsToOverride,
      },
      listeners: {
        ...listeners,
      },
      ...mountingOptions,
    });
  };

  let wrapper = createComponent();

  it('should mount with defaults', () => {
    wrapper = createComponent({});
    expect(wrapper.isVueInstance()).to.eq(true);
  });

  it('should mounted with filePicker hook', () => {
    wrapper = createComponent({});
    expect(filePickerOnStub.calledOnce).to.eq(true);
    expect(filePickerOnStub.calledWith('selected')).to.eq(true);
    const callArgs = filePickerOnStub.getCall(0).args;
    expect(callArgs.length).to.eq(2);
    expect(callArgs[1] instanceof Function).to.eq(true);
  });

  it('should trigger open filePicker when tap interaction', () => {
    wrapper = createComponent({});
    wrapper.trigger('click');
    expect(filePickerOpenStub.calledOnce).to.eq(true);
  });

  it('should not trigger filePicker when disabled', () => {
    wrapper = createMockedComponent({
      disabled: true,
    });
    wrapper.trigger('click');
    expect(filePickerOpenStub.calledOnce).to.eq(false);
  });

  it('should not call onFileSelected when no, corrupted file or empty file selected', () => {
    wrapper = createMockedComponent(null);
    sinon.spy(wrapper.vm, 'onFileSelected');
    const callback = filePickerOnStub.getCall(0).args[1];
    callback.call(wrapper.vm, [
      {
        get size() {
          throw new Error();
        },
      },
    ]);
    callback.call(wrapper.vm, []);
    callback.call(wrapper.vm, [emptyFile]);
    expect(wrapper.vm.onFileSelected.called).to.eq(false);
  });

  it('should emit onMaxFileError when fileSize is bigger than maxSize', done => {
    let onMaxFileError = sinon.spy();
    wrapper = createMockedComponent(
      {
        maxSize: 1,
      },
      {
        onMaxFileError,
      },
    );
    const callback = filePickerOnStub.getCall(0).args[1];
    callback.call(wrapper.vm, [dummyFile]);
    setTimeout(() => {
      expect(onMaxFileError.called).to.eq(true);
      done();
    });
  });

  it('should emit onUploadCompleted when FileUploader.upload succeeds', done => {
    wrapper = createMockedComponent({
      onUploadCompleted: sinon.spy(),
    });
    const callback = filePickerOnStub.getCall(0).args[1];
    callback.call(wrapper.vm, [dummyFile]);
    const uploadInnerStub = uploadStub.returns(Promise.resolve(dummyFile));
    setTimeout(() => {
      expect(uploadInnerStub.calledOnce).to.eq(true);
      expect(wrapper.emitted().onUploadCompleted.length).to.eq(1);
      done();
    }, 1);
  });

  it('should emit onUploadError when FileUploader.upload fails', done => {
    wrapper = createMockedComponent({
      onUploadError: sinon.spy(),
    });
    const callback = filePickerOnStub.getCall(0).args[1];
    callback.call(wrapper.vm, [dummyFile]);
    const uploadInnerStub = uploadStub.returns(Promise.reject('err'));
    setTimeout(() => {
      expect(uploadInnerStub.calledOnce).to.eq(true);
      expect(wrapper.emitted().onUploadError.length).to.eq(1);
      done();
    }, 10);
  });

  it('should emit onUploadProgress when FileUploader.upload emits proggress data', done => {
    wrapper = createMockedComponent({
      onUploadProgress: sinon.spy(),
    });
    const callback = filePickerOnStub.getCall(0).args[1];
    uploadStub.returns({
      then() {
        wrapper.vm.onProgress(10);
        wrapper.vm.onProgress(30);
        wrapper.vm.onProgress(80);
        wrapper.vm.onProgress(100);
        return Promise.resolve(dummyFile);
      },
    });
    callback.call(wrapper.vm, [dummyFile]);
    setTimeout(() => {
      expect(uploadStub.calledOnce).to.eq(true);
      expect(wrapper.emitted().onUploadProgress.length).to.eq(4);
      done();
    }, 10);
  });
});
