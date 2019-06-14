import { os } from './ui/enums';
import { getGridColumn } from './ui/grid';
import debounce from './helpers/debounce';
import platformUtils from './platform-utils';

let osName = os.Unknown;
if (typeof navigator !== 'undefined') {
  if (navigator.appVersion.indexOf('Win') !== -1) osName = os.Windows;
  if (navigator.appVersion.indexOf('Mac') !== -1) osName = os.MacOS;
  if (navigator.appVersion.indexOf('X11') !== -1) osName = os.UNIX;
  if (navigator.appVersion.indexOf('Linux') !== -1) osName = os.Linux;
}

function getOrientation() {
  return typeof window !== 'undefined' ? (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait') : 'landscape';
}

function getScreenScale() {
  return 1;
}

function getScreenWidth() {
  return typeof window !== 'undefined' ? window.innerWidth : 1024;
}

function getScreenHeight() {
  return typeof window !== 'undefined' ? window.innerHeight : 768;
}

function updateGridColumn(callBack) {
  const orientation = getOrientation();
  const gridColumn = getGridColumn(orientation, platform.platform, platform.deviceType, platform.screenWidth());
  callBack(gridColumn);
}

function onGridChange(callBack) {
  // Triggered once
  updateGridColumn(callBack);

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      // Triggered on orientation change
      debounce(() => {
        updateGridColumn(callBack);
      }, 500)();
    });
  }
}

const platform = {
  deviceType: 'browser',
  language: 'en',
  os: osName,
  osVersion: null,
  sdkVersion: null,
  platform: 'web',
  browser: platformUtils.getBrowser(navigator).name,
  browserVersion: platformUtils.getBrowser(navigator).version,
  screenWidth: getScreenWidth,
  screenHeight: getScreenHeight,
  onGridChange: onGridChange,
  screenScale: getScreenScale,
};

export default platform;
