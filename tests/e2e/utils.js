const name = Math.random()
  .toString(36)
  .substr(2, 5);

/**
 * Generates random text with given length, chars from given charSet
 * @example charSet  "abcdefg1235"
 * @param [length] optional default 8
 * @param [charSet] optional default a-z
 * @returns {string}
 */
function generateRandomText(length, charSet) {
  let text = '';
  let possible = 'abcdefghijklmnopqrstuvwxyz';
  if (!length) {
    length = 8;
  }
  if (charSet) {
    possible = charSet;
  }

  for (var i = 0; i < length; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

/**
 * Generates random date from Unix Epoch to given maxDate or now, if maxDate is not given.
 * @param [maxDate] optional, defaults to now
 * @returns {Date}
 */
function generateRandomDate(maxDate) {
  if (maxDate) {
    return new Date(Math.floor(maxDate * Math.random()));
  }
  return new Date(Math.floor(new Date() * Math.random()));
}

function verticalTravers(obj, fn) {
  const context = this;
  function* parentTraverser(obj) {
    if (!obj.parent) return;
    yield obj.parent;
  }
  function recursive(fn, item) {
    if (!item) return;
    fn.call(context, item);
    recursive(fn, parentTraverser(item).next().value);
  }
  recursive(fn, obj);
}

module.exports = {
  name,
  generateRandomText: generateRandomText,
  generateRandomDate: generateRandomDate,
  verticalTravers: verticalTravers,
};
