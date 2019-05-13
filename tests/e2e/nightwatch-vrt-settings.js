const screenshotPathGenerator = require('./integrations/screenshotPathGenerator');

module.exports = () => {
  return {
    generate_screenshot_path: screenshotPathGenerator,
    latest_screenshots_path: 'tests/e2e/reports/vrt',
    latest_suffix: '--latest',
    baseline_screenshots_path: 'tests/e2e/vrt/baseline',
    baseline_suffix: '',
    diff_screenshots_path: 'tests/e2e/reports/vrt',
    diff_suffix: '--diff',
    threshold: 0.35,
    prompt: false,
    always_save_diff_screenshot: false,
  };
};
