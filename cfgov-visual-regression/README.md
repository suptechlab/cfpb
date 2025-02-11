# cfgov-visual-regression

E2E visual regression tests for consumerfinance.gov using [cypress-image-diff](https://github.com/uktrade/cypress-image-diff). This tool takes full-page screenshots of the most popular cf.gov pages to spot unintentional visual changes caused by cascading stylesheet changes.

## Typical workflow

1. `yarn` to install dependencies.
1. Ensure [consumerfinance.gov](https://github.com/cfpb/consumerfinance.gov?tab=readme-ov-file#quickstart) is running at localhost:8000.
1. `yarn test` to generate baseline screenshots.
1. Make some CSS changes to your local cf.gov repo. Don't forget to rebuild front-end assets with `./frontend.sh`.
1. `yarn test` to generate new screenshots and compare them to the baselines.
1. `yarn test:report` to open a report showing changes, if any. Or just view the diff'ed screenshots in `output/images/diff/`

The list of webpages and viewport sizes can be changed in `cypress-image-diff.config.cjs`. Generated screenshots are stored in the `output/` dir. Each screenshot takes about 10 seconds to generate.

## Open source licensing info

1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)