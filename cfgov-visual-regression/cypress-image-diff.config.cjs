const config = {
  ROOT_DIR: 'output',
  SCREENSHOTS_DIR: 'images',
  REPORT_DIR: 'reports',
  FAILURE_THRESHOLD: 0.2,
  RETRY_OPTIONS: {
    log: true,
    limit: 3,
    timeout: 120000,
    delay: 300,
  },
  PAGES: {
    TOP: [
      "/",
      "/complaint/",
      "/find-a-housing-counselor/",
      "/learnmore/",
      "/housing/housing-insecurity/help-for-renters/get-help-paying-rent-and-bills/",
      "/consumer-tools/debt-collection/",
      "/coronavirus/mortgage-and-housing-assistance/renter-protections/find-help-with-rent-and-utilities/",
      "/consumer-tools/guide-to-filing-your-taxes/",
      "/ask-cfpb/what-should-i-do-when-a-debt-collector-contacts-me-en-1695/",
      "/coronavirus/mortgage-and-housing-assistance/renter-protections/emergency-rental-assistance-for-renters/",
      "/rules-policy/regulations/",
      "/coronavirus/mortgage-and-housing-assistance/help-for-homeowners/get-homeowner-assistance-funds/",
      "/about-us/newsroom/",
      "/data-research/consumer-complaints/search/",
      "/coronavirus/mortgage-and-housing-assistance/renter-protections/what-to-do-if-youre-facing-eviction/",
      "/enforcement/actions/",
      "/about-us/contact-us/",
      "/rules-policy/regulations/1026/",
      "/rules-policy/regulations/search-regulations/results/",
      "/consumer-tools/credit-reports-and-scores/",
      "/consumer-tools/prepaid-cards/",
      "/consumer-tools/credit-reports-and-scores/consumer-reporting-companies/companies-list/",
      "/about-us/blog/know-your-rights-and-protections-when-it-comes-to-medical-bills-and-collections/",
      "/activity-log/",
      "/data-research/consumer-complaints/",
      "/about-us/blog/medical-debt-anything-already-paid-or-under-500-should-no-longer-be-on-your-credit-report/",
      "/es/obtener-respuestas/mi-deuda-es-de-varios-anos-pueden-los-cobradores-de-deudas-exigir-el-cobro-todavia-es-1423/",
      "/paying-for-college/student-loan-forgiveness/",
      "/consumer-tools/educator-tools/servicemembers/the-servicemembers-civil-relief-act-scra/",
      "/ask-cfpb/search/",
      "/about-us/blog/",
      "/coronavirus/mortgage-and-housing-assistance/renter-protections/",
      "/rules-policy/final-rules/",
      "/consumer-tools/",
      "/data-research/research-reports/",
      "/about-us/the-bureau/",
      "/about-us/newsroom/bank-of-america-for-illegally-charging-junk-fees-withholding-credit-card-rewards-opening-fake-accounts/",
      "/consumer-tools/mortgages/",
      "/owning-a-home/explore-rates/",
      "/consumer-tools/debt-collection/answers/key-terms/",
      "/rules-policy/regulations/1002/",
      "/consumer-tools/fraud/",
      "/consumer-tools/credit-cards/",
      "/rules-policy/regulations/1005/",
      "/about-us/careers/current-openings/",
      "/owning-a-home/closing-disclosure/",
      "/about-us/blog/how-tell-difference-between-legitimate-debt-collector-and-scammers/",
      "/owning-a-home/loan-estimate/",
      "/coronavirus/mortgage-and-housing-assistance/",
      "/rural-or-underserved-tool/",
      "/rules-policy/regulations/1002/9/",
      "/consumer-tools/mortgages/answers/key-terms/",
      "/about-us/newsroom/cfpb-issues-guidance-to-halt-large-banks-from-charging-illegal-junk-fees-for-basic-customer-service/",
      "/owning-a-home/",
      "/ask-cfpb/when-i-tried-to-use-my-credit-card-to-get-cash-from-an-atm-i-could-not-do-so-even-though-i-know-i-have-not-used-all-my-credit-what-can-i-do-en-34/",
      "/consumer-tools/educator-tools/youth-financial-education/glossary/",
      "/compliance/compliance-resources/mortgage-resources/tila-respa-integrated-disclosures/",
      "/consumer-tools/save-as-pdf-instructions/",
      "/about-us/careers/",
      "/data-research/hmda/"
    ],
    OTHER: [
      "/compliance/compliance-resources/signup/"
    ]
  },
  VIEWPORTS: {
    DESKTOPS: [
      "macbook-15"
    ],
    TABLETS: [
      "ipad-2"
    ],
    MOBILES: [
      "iphone-x"
    ]
  }
};

module.exports = config;
