/**
 * Debounce function
 * @param func
 * @param wait
 * @param immediate
 * @returns {Function}
 */
export default function debounce(func, wait, immediate) {
  let timeout = null;
  return function debounceReturn() {
    const context = this,
      args = arguments;
    clearTimeout(timeout);
    if (wait) {
      timeout = setTimeout(function() {
        if (!immediate) func.apply(context, args);
      }, wait);
    }
    if (immediate && !timeout) {
      func.apply(context, args);
    }
  };
}
