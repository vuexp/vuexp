import { expect } from 'chai';
import platformUtils from '../../src/platform-utils';

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
});
