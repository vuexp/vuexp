import { expect } from 'chai';
import platformUtils from '../../src/platform-utils';
import { os } from '../../src/ui/enums';
import platform from '../../src/platform';

describe('Platform utils unit tests', () => {
  describe('getBrowser unit tests', () => {
    const { userAgent } = navigator;
    const userAgentList = [
      {
        input: undefined,
        expectedOutput: { name: 'NodeJS', version: process.version },
      },
      {
        input: 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko',
        expectedOutput: { name: 'IE', version: '11' },
      },
      {
        input: 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0;) like Gecko',
        expectedOutput: { name: 'IE', version: '' },
      },
      {
        input: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36 OPR/43.0.2442.991',
        expectedOutput: { name: 'Opera', version: '43' },
      },
      {
        input: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36',
        expectedOutput: { name: 'Chrome', version: '75' },
      },
      {
        input: 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0',
        expectedOutput: { name: 'Edge', version: '12' },
      },
      {
        input: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/600.7.12 (KHTML, like Gecko) Version/8.0.7 Safari/600.7.12',
        expectedOutput: { name: 'Safari', version: '8' },
      },
      {
        input: 'dummy browser',
        expectedOutput: { name: undefined, version: '' },
      },
    ];

    it(`No navigator supplied. Returns NodeJS ${process.version}`, () => {
      const userAgent = userAgentList[0];
      expect(platformUtils.getBrowser(navigator)).to.eql(userAgent.expectedOutput);
    });

    it(`User agent example for IE version 11.`, () => {
      const userAgent = userAgentList[1];
      navigator.userAgent = userAgent.input;

      expect(platformUtils.getBrowser(navigator)).to.eql(userAgent.expectedOutput);
    });

    it(`User agent example for IE without version.`, () => {
      const userAgent = userAgentList[2];
      navigator.userAgent = userAgent.input;

      expect(platformUtils.getBrowser(navigator)).to.eql(userAgent.expectedOutput);
    });

    it(`User agent example for Opera version 43.`, () => {
      const userAgent = userAgentList[3];
      navigator.userAgent = userAgent.input;

      expect(platformUtils.getBrowser(navigator)).to.eql(userAgent.expectedOutput);
    });

    it(`User agent example for Edge version 12.`, () => {
      const userAgent = userAgentList[4];
      navigator.userAgent = userAgent.input;

      expect(platformUtils.getBrowser(navigator)).to.eql(userAgent.expectedOutput);
    });

    it(`User agent example for Chrome version 75.`, () => {
      const userAgent = userAgentList[5];
      navigator.userAgent = userAgent.input;

      expect(platformUtils.getBrowser(navigator)).to.eql(userAgent.expectedOutput);
    });

    it(`User agent example for Safari version 8.`, () => {
      const userAgent = userAgentList[6];
      navigator.userAgent = userAgent.input;

      expect(platformUtils.getBrowser(navigator)).to.eql(userAgent.expectedOutput);
    });

    it(`Dummy user agent example. Returns no name and no version.`, () => {
      const userAgent = userAgentList[7];
      navigator.userAgent = userAgent.input;

      expect(platformUtils.getBrowser(navigator)).to.eql(userAgent.expectedOutput);
    });

    after(() => {
      navigator.userAgent = userAgent;
    });
  });

  describe('getOrientation unit tests', () => {
    const { innerWidth, innerHeight } = window;

    it('undefined window returns landscape', () => {
      expect(platformUtils.getOrientation(undefined)).to.equal('landscape');
    });

    it('window innerWidth smaller than innerHeight returns portrait', () => {
      window.innerWidth = 100;
      window.innerHeight = 200;

      expect(platformUtils.getOrientation(window)).to.equal('portrait');
    });

    it('window innerWidth bigger than innerHeight returns landscape', () => {
      window.innerWidth = 200;
      window.innerHeight = 100;

      expect(platformUtils.getOrientation(window)).to.equal('landscape');
    });

    after(() => {
      window.innerWidth = innerWidth;
      window.innerHeight = innerHeight;
    });
  });

  describe('getScreenWidth unit tests', () => {
    const { innerWidth } = window;

    it('undefined window returns screen width as 1024', () => {
      expect(platformUtils.getScreenWidth(undefined)).to.equal(1024);
    });

    it('Window inner width of 1920 returns screen width as 1920', () => {
      window.innerWidth = 1920;

      expect(platformUtils.getScreenWidth(window)).to.equal(1920);
    });

    after(() => {
      window.innerWidth = innerWidth;
    });
  });

  describe('getScreenHeight unit tests', () => {
    const { innerHeight } = window;

    it('undefined window returns screen height as 768', () => {
      expect(platformUtils.getScreenHeight(undefined)).to.equal(768);
    });

    it('Window inner height of 1080 returns screen height as 1080', () => {
      window.innerHeight = 1080;

      expect(platformUtils.getScreenHeight(window)).to.equal(1080);
    });

    after(() => {
      window.innerHeight = innerHeight;
    });
  });

  describe('getScreenScale unit tests', () => {
    it('screenScale is 1', () => {
      expect(platformUtils.getScreenScale()).to.equal(1);
    });
  });

  describe('getOsName unit tests', () => {
    const { appVersion } = navigator;
    const appVersionList = [
      {
        appVersion: undefined,
        osName: os.Unknown,
      },
      {
        appVersion: 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko',
        osName: os.Windows,
      },
      {
        appVersion: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/600.7.12 (KHTML, like Gecko) Version/8.0.7 Safari/600.7.12',
        osName: os.MacOS,
      },
      {
        appVersion: 'Mozilla/5.0 (X11; CrOS x86_64 6783.1.0) AppleWebKit/537.36 (KHTML, like Gecko) Edge/12.0',
        osName: os.UNIX,
      },
      {
        appVersion:
          'Mozilla/5.0 (Linux; Android 8.0.0; SM-G930F Build/R16NW; wv) AppleWebKit/537.36 ' +
          '(KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.157 Mobile Safari/537.36',
        osName: os.Linux,
      },
      {
        appVersion: 'dummy os',
        osName: os.Unknown,
      },
    ];

    it('undefined navigator return unknown os.', () => {
      expect(platformUtils.getOsName(undefined)).to.equal(appVersionList[0].osName);
    });

    it('Windows appVersion example returns Windows.', () => {
      navigator.appVersion = appVersionList[1].appVersion;

      expect(platformUtils.getOsName(navigator)).to.equal(appVersionList[1].osName);
    });

    it('MacOS appVersion example returns MacOS.', () => {
      navigator.appVersion = appVersionList[2].appVersion;

      expect(platformUtils.getOsName(navigator)).to.equal(appVersionList[2].osName);
    });

    it('UNIX appVersion example returns UNIX.', () => {
      navigator.appVersion = appVersionList[3].appVersion;

      expect(platformUtils.getOsName(navigator)).to.equal(appVersionList[3].osName);
    });

    it('Linux appVersion example returns Linux.', () => {
      navigator.appVersion = appVersionList[4].appVersion;

      expect(platformUtils.getOsName(navigator)).to.equal(appVersionList[4].osName);
    });

    it('dummy appVersion returns unknown os.', () => {
      navigator.appVersion = appVersionList[5].appVersion;

      expect(platformUtils.getOsName(navigator)).to.equal(appVersionList[0].osName);
    });

    after(() => {
      navigator.appVersion = appVersion;
    });
  });

  describe('onGridChange unit tests', () => {
    it('on grid change with window undefined', () => {
      platformUtils.onGridChange(undefined, 'web', 'browser', 100, gridColumn => {
        expect(gridColumn).to.not.be.undefined;
      });
    });

    it('web resize event testing', done => {
      platform.onGridChange(gridCol => {
        setTimeout(() => {
          expect(gridCol).to.not.be.undefined;
          done();
        }, 501);
      });

      // Creating resize event for trigger
      const resizeEvent = window.document.createEvent('UIEvents');
      resizeEvent.initUIEvent('resize', true, false, window, 0);
      window.dispatchEvent(resizeEvent);
    });
  });
});
