import React from 'react'
import Header from '../common/Header.jsx'
import YearSelector from '../common/YearSelector.jsx'
import ProgressCard from './ProgressCard.jsx'
import Reports from './Reports.jsx'
import Report from './Report.jsx'
import { NATIONAL_AGGREGATE_REPORTS } from '../constants/national-aggregate-reports.js'

import './NationalAggregate.css'

const detailsCache = {
  reports: {}
}

NATIONAL_AGGREGATE_REPORTS.forEach(v => {
  if (v.value) {
    detailsCache.reports[v.value] = v
  }

  if (v.options) {
    v.options.forEach(option => {
      detailsCache.reports[option.value] = option
    })
  }
})

class NationalAggregate extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(val) {
    this.props.history.push({
      pathname: `${this.props.match.url}/${val}`
    })
  }

  render() {
    const { params } = this.props.match
    const report = detailsCache.reports[params.reportId]

    const header = (
      <Header
        type={1}
        headingText="National Aggregate Reports"
        paragraphText="These reports summarize nationwide lending activity.
          They indicate the number and dollar amounts of loan applications,
          cross-tabulated by loan, borrower and geographic characteristics."
      >
          <p>To learn about modifications to these reports over the years, visit the{' '}
          <a target="_blank" rel="noopener noreferrer" href="/documentation/2018/ad-changes/">A&D Report Changes</a> page.<br/>
          Looking for other HMDA data? Visit the new <a target="_blank" rel="noopener noreferrer" href="/data-browser/">HMDA Data Browser</a> to filter and download HMDA datasets.
          </p>
      </Header>
    )

    return (
      <React.Fragment>
        <div className="NationalAggregate" id="main-content">
          {header}
          <ol className="ProgressCards">
            <li>
              <ProgressCard
                title="year"
                name={
                  params.year
                    ? params.year
                    : 'Select a year'
                }
                id=''
                link={'/national-aggregate-reports/'}
              />
            </li>
            <li>
              <ProgressCard
                title="report"
                name={params.reportId
                  ? report.label
                  : params.year
                  ? 'Select a report'
                  : ''
                }
                id={params.reportId ? report.value : ''}
                link={
                  params.year
                    ? `/national-aggregate-reports/${params.year}`
                    : null
                }
              />
            </li>
          </ol>
          <hr />
          {params.year ? (
           params.year !== '2017'
            ? <h3>National Aggregate reports are not produced for data collected in or after 2018.</h3>
            : params.reportId ? null :
            <Reports {...this.props} />
          )
          : <YearSelector />
          }
        </div>

        {params.reportId && params.year === '2017' ? <Report {...this.props} /> : null}
      </React.Fragment>
    )
  }
}

export default NationalAggregate
