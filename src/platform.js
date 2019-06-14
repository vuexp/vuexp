import { getGridColumn } from './ui/grid';
import debounce from './helpers/debounce';
import platformUtils from './platform-utils';

function updateGridColumn(callBack) {
  const orientation = platformUtils.getOrientation(window);
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
