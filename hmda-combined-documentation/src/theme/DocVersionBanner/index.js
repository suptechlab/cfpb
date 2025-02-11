import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router'
import Translate from '@docusaurus/Translate';
import {
  useActivePlugin,
  useDocVersionSuggestions,
} from '@docusaurus/plugin-content-docs/client';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {
  useDocsPreferredVersion,
  useDocsVersion,
} from '@docusaurus/theme-common/internal';
function UnreleasedVersionLabel({siteTitle, versionMetadata}) {
  return (
    <Translate
      id="theme.docs.versions.unreleasedVersionLabel"
      description="The label used to tell the user that he's browsing an unreleased doc version"
      values={{
        siteTitle,
        versionLabel: <b>{versionMetadata.label}</b>,
      }}>
      {
        'This is unreleased documentation for {siteTitle} {versionLabel} version.'
      }
    </Translate>
  );
}
function UnmaintainedVersionLabel({
  siteTitle,
  versionMetadata,
  isSupplemental,
}) {
  return (
    <Translate
      id='theme.docs.versions.unmaintainedVersionLabel'
      description="The label used to tell the user that he's browsing an unmaintained doc version"
      values={{
        siteTitle,
        versionLabel: <b>{versionMetadata.label}</b>,
        guideType: isSupplemental
          ? 'Supplemental Guide'
          : 'Filing Instructions Guide',
      }}
    >
      {
        'This is the {versionLabel} {guideType} for data collected in {versionLabel}.'
      }
    </Translate>
  )
}
const BannerLabelComponents = {
  unreleased: UnreleasedVersionLabel,
  unmaintained: UnmaintainedVersionLabel,
};
function BannerLabel(props) {
  const BannerLabelComponent =
    BannerLabelComponents[props.versionMetadata.banner];
  return <BannerLabelComponent {...props} />;
}
function LatestVersionSuggestionLabel({
  versionLabel,
  to,
  onClick,
  isSupplemental,
}) {
  return (
    <Translate
      id='theme.docs.versions.latestVersionSuggestionLabel'
      description='The label used to tell the user to check the latest version'
      values={{
        versionLabel,
        latestVersionLink: (
          <b>
            <Link to={to} onClick={onClick}>
              <Translate
                id='theme.docs.versions.latestVersionLinkLabel'
                description='The label used for the latest version suggestion link label'
              >
                {isSupplemental
                  ? 'Supplemental Guide'
                  : 'Filing Instructions Guide'}
              </Translate>
            </Link>
          </b>
        ),
      }}
    >
      {'Here is the {versionLabel} {latestVersionLink}.'}
    </Translate>
  )
}
function DocVersionBannerEnabled({ className, versionMetadata }) {
  const {
    siteConfig: { title: siteTitle, customFields },
  } = useDocusaurusContext()
  const { pluginId } = useActivePlugin({ failfast: true })
  const { savePreferredVersionName } = useDocsPreferredVersion(pluginId)
  const { latestVersionSuggestion } = useDocVersionSuggestions(pluginId)
  const location = useLocation()

  const latestFigYear =
    customFields.latestFigYear

  // Function to extract year from URL
  const getYearFromUrl = path => {
    const match = path.match(/\/fig\/(\d{4})/)
    return match ? match[1] : null
  }

  const urlYear = getYearFromUrl(location.pathname)
  const isSupplemental = location.pathname.includes(
    'supplemental-guide-for-quarterly-filers'
  )

  // Only show banner if the URL year is not the latest FIG year
  if (!urlYear || urlYear === latestFigYear) {
    return null
  }

  // Construct the correct path for the latest version
  const pathToLatestVersion = isSupplemental
    ? `/fig/${latestFigYear}/supplemental-guide-for-quarterly-filers`
    : `/fig/${latestFigYear}/overview`

  return (
    <div
      className={clsx(
        className,
        ThemeClassNames.docs.docVersionBanner,
        'alert alert--warning margin-bottom--md'
      )}
      role='alert'
    >
      <div>
        <UnmaintainedVersionLabel
          siteTitle={siteTitle}
          versionMetadata={versionMetadata}
          isSupplemental={isSupplemental}
        />
      </div>
      <div className='margin-top--md'>
        <LatestVersionSuggestionLabel
          versionLabel={latestFigYear}
          to={pathToLatestVersion}
          onClick={() => savePreferredVersionName(latestVersionSuggestion.name)}
          isSupplemental={isSupplemental}
        />
      </div>
    </div>
  )
}

export default function DocVersionBanner({ className }) {
  const versionMetadata = useDocsVersion()
  const location = useLocation()

  // Check if this is a FIG or supplemental guide page
  if (location.pathname.includes('/fig/')) {
    return (
      <DocVersionBannerEnabled
        className={className}
        versionMetadata={versionMetadata}
      />
    )
  }
  return null
}
