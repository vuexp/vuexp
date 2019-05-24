import { expect } from 'chai';
import platform from '../../src/platform';

/* Window Resize Simulating */

describe('Platform', () => {
  it('gets deviceType information', () => {
    expect(platform.deviceType).to.not.be.undefined;
  });

  it('gets language information', () => {
    expect(platform.language).to.not.be.undefined;
  });

  it('gets os information', () => {
    expect(platform.os).to.not.be.undefined;
  });

  it('gets osVersion information', () => {
    expect(platform.osVersion).to.not.be.undefined;
  });

  it('gets sdkVersion information', () => {
    expect(platform.sdkVersion).to.not.be.undefined;
  });

  it('gets isBrowser information', () => {
    expect(platform.platform).to.not.be.undefined;
  });

  it('gets browser information', () => {
    expect(platform.browser).to.not.be.undefined;
  });

  it('gets browserVersion information', () => {
    expect(platform.browserVersion).to.not.be.undefined;
  });

  it('gets screenWidth information', () => {
    expect(platform.screenWidth()).to.not.be.undefined;
    expect(typeof platform.screenWidth()).to.be.equal('number');
  });

  it('gets screenHeight information', () => {
    expect(platform.screenHeight()).to.not.be.undefined;
    expect(typeof platform.screenHeight()).to.be.equal('number');
  });

  it('onGridChange function trigger', () => {
    platform.onGridChange(gridCol => {
      expect(gridCol).to.not.be.undefined;
    });
  });

  it('web resize event testing', done => {
    // Creating resize event for trigger
    const resizeEvent = window.document.createEvent('UIEvents');
    resizeEvent.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(resizeEvent);

    platform.onGridChange(gridCol => {
      setTimeout(() => {
        expect(gridCol).to.not.be.undefined;
        done();
      }, 501);
    });
  });
});
