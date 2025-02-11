## Unreleased

### Added
- Nothing.

### Changed
- Nothing.

### Deprecated
- Nothing.

### Removed
- Nothing.

### Fixed
- Nothing.

## [0.13.0](https://cfpb.github.io/complaint-intake/versions/0.13.0/)

### Added
- Added small business affiliation.
- Add dynamic pronouns (i.e. "you" vs. "them") to step 5 content.

### Changed
- Updated welcome page to use the final, cleared content.
- Updated step 1 to use the final, cleared content.
- Updated step 2 to use the final, cleared content.
- Updated step 3 to use the final, cleared content.
- Updated step 4 to use the final, cleared content.
- Updated step 5 to use the final, cleared content.
- Updated review page to use the final, cleared content.
- Hid annotations for user testing.

### Deprecated
- Nothing.

### Removed
- Removed student and disability affiliations.

### Fixed
- Nothing.

## [0.12.2](https://cfpb.github.io/complaint-intake/versions/0.12.2/)

### Added
- Nothing.

### Changed
- Nothing.

### Deprecated
- Nothing.

### Removed
- Nothing.

### Fixed
- Fixed CSS columns to work around recent Chrome bugs.

## [0.12.1](https://cfpb.github.io/complaint-intake/versions/0.12.1/)

### Added
- Nothing.

### Changed
- Updated text copy on your information step.

### Deprecated
- Nothing.

### Removed
- Nothing.

### Fixed
- Nothing.


## [0.12.0](https://cfpb.github.io/complaint-intake/versions/0.12.0/)

### Added
- Nothing.

### Changed
- Changed behavior for select a company step so that debt/credit reporting
  company is always on top and second company is hidden behind a toggle.

### Deprecated
- Nothing.

### Removed
- Nothing.

### Fixed
- Nothing.


## [0.11.0](https://cfpb.github.io/complaint-intake/versions/0.11.0/)

### Added
- Where did you get the loan fieldset from debt collection/payday loan.

### Changed
- Removes fieldset borders that were being applied outside of pagination.
- Added `data-` prefix to data attributes.
- Added second company to debt collection sub-products.
- Added placeholder text for step 2 when product is not selected.
- Made "how should this company identify you" section a template.
- Updated product option combinations.
- Updated company name selection to handle proper state when removing name.

### Deprecated
- Nothing.

### Removed
- Nothing.

### Fixed
- Fixed toggle on dispute case section for all products.


## [0.10.2](https://cfpb.github.io/complaint-intake/versions/0.10.2/)

### Added
- Nothing.

### Changed
- Updates formatting of date inputs to three fields.
- Updates placeholder text to social security number inputs.

### Deprecated
- Nothing.

### Removed
- Nothing.

### Fixed
- Nothing.


## [0.10.1](https://cfpb.github.io/complaint-intake/versions/0.10.1/)

### Added
- Nothing.

### Changed
- Removes "Optional" text next to address fields when all fields are optional.
- Hides all but first radio buttons on step 5 on page load.

### Deprecated
- Nothing.

### Removed
- Nothing.

### Fixed
- Fixed incorrect "person involved" drop-down.


## [0.10.0](https://cfpb.github.io/complaint-intake/versions/0.10.0/)

### Added
- Nothing.

### Changed
- Moves inline JS to modules.
- Added prefixes to address fields.
- Formatted Social Security Number input field as three fields.
- Changes drop-down text for your information "This person is..." drop-down.
- Moves affiliations section to primary consumer section.
- Makes affiliations checkboxes show current status sections concurrently.
- Move checkboxes onto its own row.

### Deprecated
- Nothing.

### Removed
- Removed unused inline brand styles.
- Removed unused inline JS.

### Fixed
- Identify options on company information page that were not showing.


## [0.9.0](https://cfpb.github.io/complaint-intake/versions/0.9.0/)

### Added
- Added "what people are involved" section to step 5.
- Added Modal organism.
- Added case number input for debt collection product.
- Added web-storage-proxy module for getting localStorage value.

### Changed
- Updated autoprefixer to 3.1.0.

### Deprecated
- Nothing.

### Removed
- cursor.png and associated styles.

### Fixed
- Fix issue where "how to contact" in additional company erroneously displays.


## [0.8.0](https://cfpb.github.io/complaint-intake/versions/0.8.0/)

### Added
- Added handlebars for handling address template.
- Added how to contact section to additional company contact.

### Changed
- Removed type of friend.
- Added international address format when changing address country.
- Removed clean gulp task from build task.
- Added address for additional consumer.

### Deprecated
- Nothing.

### Removed
- Nothing.

### Fixed
- Show "what school" input when selecting private student loan on step 1.


## [0.7.0](https://cfpb.github.io/complaint-intake/versions/0.7.0/)

### Added
- "Save and continue later" link on step 1 and 2.
- Added pagination component from cfgov-refresh.

### Changed
- Full name and email for additional point of contact visible by default.
- Updated footer for inside form pages to use minimal global footer.
- Updated minimal global header to include Spanish-language link.

### Deprecated
- Nothing.

### Removed
- Diagonal striping background images.
- Optional text from company information and contact info steps.
- Sidebar navigation.

### Fixed
- Nothing.


## [0.6.0](https://cfpb.github.io/complaint-intake/versions/0.6.0/)

### Added
- Full address for additional contact.
- CSS for columns in the form that are not floated.

### Changed
- Converted company-information.html state text inputs to drop-downs.
- Converted your-information.html state text inputs to drop-downs.
- Order of name and address fields on your-information.html.
- Order of name and address fields on company-information.html.
- Updated header for inside form pages to use minimal global header.
- Imports Capital Framework and overrides unsupported fieldset styles.
- Changes annotation toggle link to icon to save page real estate.

### Deprecated
- Nothing.

### Removed
- Empty `placeholder` attributes.
- Unused main.less and gulp styles task code from cf-generator generated code.
- Unused `block` styles.

### Fixed
- Fixed double underline on log in link.
- Turned absolute image paths to relative for publishing the form.


## [0.52](https://cfpb.github.io/complaint-intake/versions/0.52/)

### Added
- Initial repository setup.
- Capital Framework project infrastructure (including a gulp build).
- Old prototype files into new Capital Framework structure
  (temporarily; the old code will be phased out as it is
  iteratively replaced with new code).
- Installation and usage instructions to the readme.
- Follow-up questions for complaints where the issue is "Problems with the
  mortgage servicer when you are making payments" or "Problems with the mortgage
  servicer when you are unable to pay".
- Phone number field to the form that appears when a matching company isn't
  found in the system in step 4

### Changed
- Moved /source-art/ folder to project root so it doesn't get copied to /dist/.
- Updated gulp to 3.9.1.
- Updated eslint to 2.0.0.
- Normalized gulp variable and task naming.
- Moved form markup to `/src/`.
- For debt collecction complaints, the phone number the debt collector is
  calling is now a separate field from the other consumer identifiers in step 4.

### Deprecated
- Nothing.

### Removed
- Google Analytics references since GTM is used.

### Fixed
- Two-column lists with an odd number of items no longer spill into a
  third column.
- The question "What school did you attend when you received the loan?"
  now reads "What school were you attending when you received the loan?".
