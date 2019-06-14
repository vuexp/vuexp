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

const platformUtils = {
  getBrowser,
};
export default platformUtils;
