/**
 * @name customPerform
 * @description
 * adds perform function to sections and page objects.
 * Note: command name is derived from file name
 * @param fn
 * @param callback
 * @returns {exports}
 */
exports.command = function(fn, callback) {
  this.perform(fn);
  if (typeof callback === 'function') {
    callback.call(self);
  }
  return this; // allows the command to be chained.
};
