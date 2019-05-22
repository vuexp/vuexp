/**
 * Debounce function
 * @param func
 * @param wait
 * @param immediate
 * @returns {Function}
 */
export default function debounce(func, wait, immediate) {
  let timeout;
  return function debounceReturn() {
    const context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}
