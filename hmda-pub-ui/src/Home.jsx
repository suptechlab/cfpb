import React, { Component } from 'react'

import Header from './common/Header.jsx'

import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="intro">
          <Header type={1} headingText="HMDA Data Publication">
            <p className="lead">
              The HMDA data and reports are the most comprehensive publicly
              available information on mortgage market activity. The data and
              reports can be used along with the{' '}
              <a href="https://www.ffiec.gov/censusproducts.htm">Census</a>{' '}
              demographic information for data analysis purposes. Available
              below are the data and reports for HMDA data collected in or after
              2017. For HMDA data and reports for prior years, visit{' '}
              <a href="https://www.ffiec.gov/hmda/hmdaproducts.htm">
                https://www.ffiec.gov/hmda/hmdaproducts.htm
              </a>
              .
            </p>
          </Header>
        </div>

        <div className="card-container">
          <div className="card">
            <Header
              headingLink="/modified-lar/2018"
              headingText="Modified Loan/Application Register (LAR)"
              paragraphText="The modified LAR provides loan-level data for an individual
              financial institution, as modified by the Bureau to protect applicant and
              borrower privacy."
              type={4}
            />
          </div>

          <div className="card">
            <Header
              headingLink="/disclosure-reports"
              headingText="Disclosure Reports"
              paragraphText="These reports summarize lending activity for individual
              institutions, both nationwide and by MSA/MD."
              type={4}
            />
          </div>

          <div className="card">
            <Header
              headingLink="/aggregate-reports"
              headingText="MSA/MD Aggregate Reports"
              paragraphText="These reports summarize lending activity by MSA/MD."
              type={4}
            />
          </div>

          <div className="card">
            <Header
              headingLink="/national-aggregate-reports"
              headingText="National Aggregate Reports"
              paragraphText="These reports summarize nationwide lending activity.
                They indicate the number and dollar amounts of loan applications,
                cross-tabulated by loan, borrower and geographic characteristics."
              type={4}
            />
          </div>

          <div className="card">
            <Header
              headingLink="/snapshot-national-loan-level-dataset"
              headingText="Snapshot National Loan-Level Dataset"
              paragraphText="The snapshot files contain the national HMDA datasets as of
                a fixed date for all HMDA reporters, as modified by the Bureau to
                protect applicant and borrower privacy."
              type={4}
            />
          </div>

          <div className="card">
            <Header
              headingLink="/dynamic-national-loan-level-dataset"
              headingText="Dynamic National Loan-Level Dataset"
              paragraphText="The dynamic files contain the national HMDA datasets,
              modified by the Bureau to protect applicant and borrower privacy,
              updated weekly for all HMDA reporters."
              type={4}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
