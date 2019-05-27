import { os } from './ui/enums';
import { getGridColumn } from './ui/grid';
import debounce from './helpers/debounce';

let osName = os.Unknown;
if (typeof navigator !== 'undefined') {
  if (navigator.appVersion.indexOf('Win') !== -1) osName = os.Windows;
  if (navigator.appVersion.indexOf('Mac') !== -1) osName = os.MacOS;
  if (navigator.appVersion.indexOf('X11') !== -1) osName = os.UNIX;
  if (navigator.appVersion.indexOf('Linux') !== -1) osName = os.Linux;
}

function getBrowser() {
  if (typeof navigator === 'undefined' || (navigator && navigator.userAgent === 'node.js')) return { name: 'NodeJS', version: process.version };

  const ua = navigator.userAgent;
  let tem,
    M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return { name: 'IE', version: tem[1] || '' };
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\bOPR|Edge\/(\d+)/);
    if (tem !== null) {
      return { name: 'Opera', version: tem[1] };
    }
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  tem = ua.match(/version\/(\d+)/i);
  if (tem !== null) {
    M.splice(1, 1, tem[1]);
  }

  return {
    name: M[0],
    version: M[1],
  };
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
  browser: getBrowser().name,
  browserVersion: getBrowser().version,
  screenWidth: getScreenWidth,
  screenHeight: getScreenHeight,
  onGridChange: onGridChange,
  screenScale: getScreenScale,
};

export default platform;
