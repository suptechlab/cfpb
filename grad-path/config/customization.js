/* ==========================================================================
   Configuration for custom branding and content.
   Set or change the values below to customize the application for your use.
   ========================================================================== */

const branding = {
  // REQUIRED: Replace this with the name of your organization.
  org_name: 'Org Name',

  // Optional: Insert the filename of an image you have placed in `src/img/`
  // to display it in the header of the site.
  org_logo: '',

  // REQUIRED: The name of the tool as it will appear on the homepage and title bar.
  tool_name: 'Your financial path to graduation',

  // REQUIRED: Enter the URL to which the back link in the footer should point.
  footer_back_url: 'https://www.consumerfinance.gov',
};

const social = {
  // The items in this group pertain to the OpenGraph tags found in _head.html
  // that control how sites display a preview card when a link to the tool is shared.

  // REQUIRED: The URL where the tool will live. Used by OpenGraph tag in _head.html.
  url: '',

  // Optional: Replace with the filename of a new image you have placed in `src/img/`
  // to customize the preview card thumbnail. Ideal size: 1200x630
  social_image: 'social-share-graphic_1200x630.png',

  // Optional: Replace with your own brief description of the tool.
  description:
    'Understand and compare your financial aid offers, plan to cover the remaining costs, estimate how much you’ll owe, and decide if you can afford that debt.',
};

const content = {
  // Optional: Paragraph to go below the tool name in the hero banner on the homepage.
  hero_paragraph:
    'Have a financial aid offer? We’ll help you plan to finish your program with debt you can afford.',
};

const context = { ...branding, ...social, ...content };

export default {
  context,
};
