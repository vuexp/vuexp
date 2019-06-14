import platformUtils from './platform-utils';

function onGridChange(callBack) {
  platformUtils.onGridChange(window, platform.platform, platform.deviceType, platform.screenWidth, callBack);
}

const platform = {
  deviceType: 'browser',
  language: 'en',
  os: platformUtils.getOsName(navigator),
  osVersion: null,
  sdkVersion: null,
  platform: 'web',
  browser: platformUtils.getBrowser(navigator).name,
  browserVersion: platformUtils.getBrowser(navigator).version,
  screenWidth: platformUtils.getScreenWidth,
  screenHeight: platformUtils.getScreenHeight,
  onGridChange: onGridChange,
  screenScale: platformUtils.getScreenScale,
};

export default platform;
