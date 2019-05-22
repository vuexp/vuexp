import { getGridColumn } from './ui/grid';

const { device, isIOS, isAndroid, screen } = require('tns-core-modules/platform'); // eslint-disable-line
const nativescriptOrientation = require('nativescript-orientation');

function getScreenScale() {
  return screen.mainScreen.scale;
}
function getScreenWidth() {
  return screen.mainScreen.widthDIPs;
}

function getScreenHeight() {
  return screen.mainScreen.heightDIPs;
}

function updateGridColumn(callBack) {
  const orientation = nativescriptOrientation.getOrientation();
  const gridColumn = getGridColumn(orientation, platform.platform, platform.deviceType, platform.screenWidth());
  callBack(gridColumn);
}

function onGridChange(callBack) {
  // Triggered once
  updateGridColumn(callBack);

  nativescriptOrientation.addOrientationApplier(() => {
    // Triggered on orientation change
    updateGridColumn(callBack);
  });
}

const platform = {
  deviceType: device.deviceType,
  language: device.language,
  os: device.os,
  osVersion: device.osVersion,
  sdkVersion: device.sdkVersion,
  platform: isAndroid ? 'android' : isIOS ? 'ios' : 'web',
  browser: null,
  browserVersion: null,
  screenWidth: getScreenWidth,
  screenHeight: getScreenHeight,
  onGridChange: onGridChange,
  screenScale: getScreenScale,
};

export default platform;
