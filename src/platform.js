import platformUtils from './platform-utils';

function addGridChangeListener(callBack) {
  return platformUtils.addGridChangeListener(window, platform.platform, platform.deviceType, platform.screenWidth, callBack);
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
  onGridChange: addGridChangeListener, // TODO: Remove after major version change
  addGridChangeListener: addGridChangeListener,
  removeGridChangeListener: platformUtils.removeGridChangeListener,
  screenScale: platformUtils.getScreenScale,
};

export default platform;
