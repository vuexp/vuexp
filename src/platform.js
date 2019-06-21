import platformUtils from './platform-utils';

function onGridChange(callBack) {
  platformUtils.onGridChange(window, platform.platform, platform.deviceType, platform.screenWidth, callBack);
}

const _navigator = typeof navigator !== 'undefined' ? navigator : undefined;

const platform = {
  deviceType: 'browser',
  language: 'en',
  os: platformUtils.getOsName(_navigator),
  osVersion: null,
  sdkVersion: null,
  platform: 'web',
  browser: platformUtils.getBrowser(_navigator).name,
  browserVersion: platformUtils.getBrowser(_navigator).version,
  screenWidth: platformUtils.getScreenWidth,
  screenHeight: platformUtils.getScreenHeight,
  onGridChange: onGridChange,
  screenScale: platformUtils.getScreenScale,
};

export default platform;
