/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  figDocs: [
    // Filing Instructions Guide
    {
      type: 'category',
      label: 'Filing Instructions Guide',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        {type: 'doc', id: 'overview', label: '1. Overview'},
        {type: 'doc', id: 'changes-2023', label: '2. Changes for 2023'},
        {type: 'doc', id: 'file-specifications', label: '3. File Specifications'},
        {type: 'doc', id: 'data-specifications', label: '4. Data Specifications'},
        {type: 'doc', id: 'edit-specifications', label: '5. Edit Specifications'},
        {type: 'doc', id: 'additional-info', label: '6. Additional Info'},
        {type: 'doc', id: 'paperwork-reduction', label: 'Paperwork Reduction'},
      ],
    },
  ],
}

module.exports = sidebars
