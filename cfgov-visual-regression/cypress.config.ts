import { defineConfig } from 'cypress';
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/plugin';

export default defineConfig({
  blockHosts: [
    '*.federalregister.gov',
    '*.geo.census.gov',
    '*google-analytics.com',
    '*googletagmanager.com',
    '*.newrelic.com',
    '*.nr-data.net',
  ],
  e2e: {
    baseUrl: 'http://localhost:8000',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      return getCompareSnapshotsPlugin(on, config)
    },
  },
  env: {
    ENVIRONMENT: 'local-machine',
  },
});
