export const Columns = Object.freeze({
  One: 'col-1',
  Two: 'col-2',
  Three: 'col-3',
});

export function getGridColumn(orientation, platform, deviceType, screenWidth) {
  if (platform === 'web') {
    if (screenWidth <= 600) {
      return Columns.One;
    } else if (screenWidth <= 1024) {
      return Columns.Two;
    } else {
      return Columns.Three;
    }
  } else {
    if (deviceType === 'Phone') {
      return Columns.One;
    } else {
      if (orientation === 'portrait') {
        return Columns.One;
      } else {
        if (screenWidth <= 1024) {
          return Columns.Two;
        } else {
          return Columns.Three;
        }
      }
    }
  }
}
