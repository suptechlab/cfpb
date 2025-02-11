/// <reference types="cypress" />

import config from '../../cypress-image-diff.config.cjs';

const pages = config.PAGES.TOP.concat(config.PAGES.OTHER);
const {DESKTOPS, TABLETS, MOBILES} = config.VIEWPORTS;

describe('Full page visual regression testing', () => {
  pages.forEach((page) => {
    context('Desktop experience', () => {
      DESKTOPS.forEach((desktop: Cypress.ViewportPreset) => {
        context(desktop, () => {
          beforeEach(() => {
            cy.viewport(desktop);
          });
          it(`${page} should not have visually changed`, () => {
            cy.visit(page);
            cy.compareSnapshot(`${desktop}${page.replaceAll('/', '-')}`);
          });
        });
      });
    });
    context('Tablet experience', () => {
      TABLETS.forEach((tablet: Cypress.ViewportPreset) => {
        context(tablet, () => {
          beforeEach(() => {
            cy.viewport(tablet);
          });
          it(`${page} should not have visually changed`, () => {
            cy.visit(page);
            cy.compareSnapshot(`${tablet}${page.replaceAll('/', '-')}`);
          });
        });
      });
    });
    context('Mobile experience', () => {
      MOBILES.forEach((mobile: Cypress.ViewportPreset) => {
        context(mobile, () => {
          beforeEach(() => {
            cy.viewport(mobile);
          });
          it(`${page} should not have visually changed`, () => {
            cy.visit(page);
            cy.compareSnapshot(`${mobile}${page.replaceAll('/', '-')}`);
          });
        });
      });
    });
  });
});
