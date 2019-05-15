/* eslint-disable import/no-extraneous-dependencies */

const driversPath = {
  selenium: require('selenium-server').path, // imported @vue/cli-plugin-e2e-nightwatch
  chrome: require('chromedriver').path, // imported @vue/cli-plugin-e2e-nightwatch
  firefox: require('geckodriver').path, // imported geckodriver
};

module.exports = {
  src_folders: ['tests/e2e/specs'],
  output_folder: 'tests/e2e/reports',
  custom_assertions_path: ['node_modules/nightwatch-vrt/assertions'],
  custom_commands_path: ['tests/e2e/customCommands', 'node_modules/nightwatch-vrt/commands'],
  page_objects_path: ['tests/e2e/pageObjects'],
  globals_path: 'tests/e2e/globals.js',

  selenium: {
    start_process: true,
    server_path: driversPath.selenium,
    host: '127.0.0.1',
    port: 4444,
    start_session: true,
    log_path: '',
    cli_args: {
      'webdriver.chrome.driver': driversPath.chrome,
      'webdriver.gecko.driver': driversPath.firefox,
    },
  },

  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
    },
    safari: {
      launch_url: 'localhost',
      desiredCapabilities: {
        browserName: 'safari',
      },
      globals: {
        env: 'dev',
      },
    },
    edge: {
      launch_url: 'localhost',
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
        acceptSslCerts: true,
      },
      globals: {
        env: 'dev',
      },
    },
    chrome: {
      screenshots: {
        enabled: false,
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        nativeEvents: true,
        chromeOptions: {
          args: ['headless', 'disable-web-security', 'ignore-certificate-errors'],
        },
        loggingPrefs: { driver: 'INFO', server: 'OFF', browser: 'INFO' },
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
        marionette: true,
        nativeEvents: true,
        'moz:firefoxOptions': {
          args: ['--headless', 'no-sandbox'],
        },
      },
    },
    android: {
      selenium_start_process: false,
      selenium_port: 4723,
      selenium_host: '127.0.0.1',
      silent: true,
      use_xpath: true,
      desiredCapabilities: {
        automationName: 'UIAutomator2',
        browserName: '',
        launch_url: 'http://127.0.0.1:4723/wd/hub',
        app: '',
        platformName: 'Android',
        platformVersion: '7.1.1',
        device: 'Android',
        deviceName: 'Nexus_6_API_25',
        avd: 'Nexus_6_API_25',
      },
    },
  },
};
