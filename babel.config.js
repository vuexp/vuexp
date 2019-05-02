module.exports = function(api) {
  api.cache(true);
  const presets = [['@vue/app', { useBuiltIns: 'entry' }]];
  const plugins = ['istanbul'];

  return {
    presets,
    plugins,
  };
};
