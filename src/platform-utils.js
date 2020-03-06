import { os } from './ui/enums';
import { getGridColumn } from './ui/grid';
import debounce from './helpers/debounce';

function getBrowser(navigator) {
  if (typeof navigator === 'undefined' || (navigator && navigator.userAgent === 'node.js')) {
    return { name: 'NodeJS', version: process.version };
  }

  const ua = navigator.userAgent;
  let tem;
  let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return { name: 'IE', version: tem[1] || '' };
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem != null) {
      const splitUA = tem.slice(1);
      return { name: splitUA[0].replace('OPR', 'Opera'), version: splitUA[1] };
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

function getScreenWidth() {
  return typeof window !== 'undefined' ? window.innerWidth : 1024;
}

function getScreenHeight() {
  return typeof window !== 'undefined' ? window.innerHeight : 768;
}

function getScreenScale() {
  return 1;
}

/* istanbul ignore next */
function updateGridColumn(window, platform, deviceType, screenWidth, callBack) {
  const orientation = platformUtils.getOrientation(window);
  const gridColumn = getGridColumn(orientation, platform, deviceType, screenWidth);
  callBack(gridColumn);
}
const gridChangeListeners = {};

function addGridChangeListener(window, platform, deviceType, screenWidth, callBack) {
  // Triggered once
  updateGridColumn(window, platform, deviceType, screenWidth, callBack);

  if (typeof window !== 'undefined') {
    const token = Symbol('Grid Listener Function');
    gridChangeListeners[token] = () => {
      // Triggered on orientation change
      debounce(() => {
        updateGridColumn(window, platform, deviceType, screenWidth, callBack);
      }, 500)();
    };
    window.addEventListener('resize', gridChangeListeners[token]);
    return token;
  }
  return false;
}

function removeGridChangeListener(token) {
  if (typeof window !== 'undefined' && token in gridChangeListeners) {
    return window.removeEventListener('resize', gridChangeListeners[token]);
  }
  return false;
}

function getOsName(navigator) {
  if (typeof navigator !== 'undefined') {
    if (navigator.appVersion.indexOf('Win') !== -1) return os.Windows;
    if (navigator.appVersion.indexOf('Mac') !== -1) return os.MacOS;
    if (navigator.appVersion.indexOf('X11') !== -1) return os.UNIX;
    if (navigator.appVersion.indexOf('Linux') !== -1) return os.Linux;
  }

  return os.Unknown;
}

const platformUtils = {
  getBrowser,
  getOsName,
  getOrientation,
  getScreenWidth,
  getScreenHeight,
  getScreenScale,
  onGridChange: addGridChangeListener, // TODO: Remove after major version change
  addGridChangeListener,
  removeGridChangeListener,
};
export default platformUtils;
