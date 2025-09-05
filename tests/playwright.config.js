// playright configuraciones

/** @type {import('@playwright/test').Config} */
const config = {
    use: {
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure'
    },
    projects: [
            {name: 'chromium',use: {browserName: 'chromium'}},
            {name: 'firefox',use: {browserName: 'firefox'}},
            {name: 'webkit',use: {browserName: 'webkit'}}
    ],

  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
};

module.exports = config;