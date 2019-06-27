import { expect } from 'chai';
import sinon from 'sinon';
import { pickerTypes, default as FilePicker } from '../../../src/helpers/FilePicker'; // eslint-disable-line import/no-named-default

describe('Helper:FilePicker', () => {
  const fileContents = 'file contents';
  const mockFile = new Blob([fileContents], { type: 'text/plain' });
  let mockInput = createMockInput();

  function createMockInput() {
    return {
      type: '',
      value: '',
      accept: '',
      multiple: '',
      addEventListener: sinon.stub(),
      click: sinon.stub(),
    };
  }

  beforeEach(() => {
    mockInput = createMockInput();
  });

  it('should have an internal default input with type file created', () => {
    const picker = new FilePicker();
    expect(picker._inputElement).to.be.ok;
    expect(picker._inputElement instanceof HTMLInputElement).to.eq(true);
    expect(picker._inputElement.type).to.eq('file');
  });

  it('should have given input as selector', () => {
    const input = document.createElement('input');
    input.type = 'file';
    const picker = new FilePicker(input);
    expect(picker._inputElement === input).to.be.true;
  });

  it('should bind change event listener for the file input', () => {
    new FilePicker(mockInput);
    expect(mockInput.addEventListener.calledOnce).to.be.true;
    expect(mockInput.addEventListener.getCall(0).args[0]).to.be.eq('change');
    expect(mockInput.addEventListener.getCall(0).args[1] instanceof Function).to.be.true;
  });

  it('should trigger native filePicker operator to open when open called', () => {
    const picker = new FilePicker(mockInput);
    picker.open();
    expect(mockInput.click.called).to.be.true;
  });

  it('should trigger native filePicker operator to open when open called', () => {
    const picker = new FilePicker(mockInput);
    picker.open();
    expect(mockInput.click.called).to.be.true;
  });

  it('should trigger selected event with selected files array', () => {
    const picker = new FilePicker(mockInput);
    const mockFiles = [mockFile];
    const testSelectedSpy = sinon.spy();
    picker.on('selected', testSelectedSpy);
    mockInput.addEventListener.callArgOnWith(1, null, { target: { files: mockFiles } });
    expect(testSelectedSpy.calledOnce).to.be.true;
    expect(testSelectedSpy.getCall(0).args[0]).to.eq(mockFiles);
  });

  it('should not bind selected event with wrong callback type supplied', () => {
    const picker = new FilePicker();
    expect(picker.on.bind(picker, 'selected', {})).to.throw();
  });

  it('should not throw error if no callback supplied and file selected', () => {
    new FilePicker(mockInput);
    const mockFilesSingle = [mockFile];
    const mockFilesMultiple = [mockFile, mockFile, mockFile];
    const callWithParams1 = mockInput.addEventListener.callArgOnWith.bind(mockInput.addEventListener, 1, null, { target: { files: mockFilesSingle } });
    const callWithParams2 = mockInput.addEventListener.callArgOnWith.bind(mockInput.addEventListener, 1, null, { target: { files: mockFilesMultiple } });
    expect(callWithParams1).to.not.throw();
    expect(callWithParams2).to.not.throw();
  });

  it('should trigger error callback when maxNumberFiles limit exceeded', () => {
    const picker = new FilePicker(mockInput);
    picker.options.maxNumberFiles = 2;
    const mockFiles = [mockFile, mockFile, mockFile];
    const testSelectedSpy = sinon.spy();
    const testErrorSpy = sinon.spy();
    picker.on('selected', testSelectedSpy);
    picker.on('error', testErrorSpy);
    mockInput.addEventListener.callArgOnWith(1, null, { target: { files: mockFiles } });
    expect(testSelectedSpy.calledOnce).to.be.false;
    expect(testErrorSpy.calledOnce).to.be.true;
    expect(testErrorSpy.getCall(0).args[0]).to.be.deep.eq('max limit exceeded');
  });

  it('should accept proper file types according to the options', () => {
    const pickerOptions = [
      {
        type: pickerTypes.file,
        accept: '*',
      },
      {
        type: pickerTypes.image,
        accept: 'image/*',
      },
      {
        type: pickerTypes.audio,
        accept: 'audio/*',
      },
      {
        type: pickerTypes.media,
        accept: 'image/*,video/*',
      },
      {
        type: pickerTypes.video,
        accept: 'video/*',
      },
      {
        type: 'invalid',
        accept: '*',
      },
    ];

    pickerOptions.forEach(type => {
      const mockInput = createMockInput();
      const picker = new FilePicker(mockInput);
      picker.options.extensions = [];
      picker.options.pickerType = type.type;
      picker.options.maxNumberFiles = 1;
      const options = picker.getOptions(picker.options);
      expect(options.accept).to.deep.eq(type.accept);
      expect(options.multipleSelection).to.be.false;

      picker.open();
      expect(mockInput.accept).to.deep.eq(type.accept);
      expect(mockInput.multiple).to.deep.eq(false);
    });

    pickerOptions.forEach(type => {
      const mockInput = createMockInput();
      const picker = new FilePicker(mockInput);
      picker.options.extensions = [];
      picker.options.pickerType = type.type;
      picker.options.maxNumberFiles = 2;
      const options = picker.getOptions(picker.options);
      expect(options.accept).to.deep.eq(type.accept);
      expect(options.multipleSelection).to.be.true;

      picker.open();
      expect(mockInput.accept).to.deep.eq(type.accept);
      expect(mockInput.multiple).to.deep.eq(true);
    });

    pickerOptions.forEach(type => {
      const mockInput = createMockInput();
      const picker = new FilePicker(mockInput);
      picker.options.pickerType = type.type;
      picker.options.maxNumberFiles = 1;
      picker.options.extensions = ['.zip', '.yml'];
      const options = picker.getOptions(picker.options);
      expect(options.accept).to.deep.eq('');
      expect(options.multipleSelection).to.be.false;

      picker.open();
      expect(mockInput.accept).to.deep.eq('');
      expect(mockInput.multiple).to.deep.eq(false);
    });

    pickerOptions.forEach(type => {
      const mockInput = createMockInput();
      const picker = new FilePicker(mockInput);
      picker.options.pickerType = type.type;
      picker.options.maxNumberFiles = 2;
      picker.options.extensions = ['.zip', '.yml'];
      const options = picker.getOptions(picker.options);
      expect(options.accept).to.deep.eq('');
      expect(options.multipleSelection).to.be.true;

      picker.open();
      expect(mockInput.accept).to.deep.eq('');
      expect(mockInput.multiple).to.deep.eq(true);
    });
  });
});
