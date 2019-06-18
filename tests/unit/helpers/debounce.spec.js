import { expect } from 'chai';
import sinon from 'sinon';
import debounce from '../../../src/helpers/debounce';

describe('Debounce Test.', () => {
  it('should call immediate test', () => {
    const spy = sinon.spy();
    const func = debounce(spy, 500, true);
    func();
    expect(spy.callCount).to.equal(0);
  });
  it('should call it several times and function called 0 times before 500ms', () => {
    const spy = sinon.spy();
    const func = debounce(spy, 500);
    func();
    func();
    func();
    expect(spy.callCount).to.equal(0);
  });
  it('should call it several times and function called 1 times after 500ms', done => {
    const spy = sinon.spy();
    const func = debounce(spy, 500);
    func();
    func();
    func();
    setTimeout(() => {
      expect(spy.callCount).to.equal(1);
      done();
    }, 550);
  });
  it('should call immediate without timeout test', () => {
    const spy = sinon.spy();
    const func = debounce(spy, null, true);
    func();
    expect(spy.callCount).to.equal(1);
  });
});
