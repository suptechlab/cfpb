# Quarterly Data Graph API

This API is what powers the [Data Browser's Quarterly Graphs](https://ffiec.cfpb.gov/data-browser/graphs/quarterly/)

## Quarterly Data Endpoints

### Available Graphs

This endpoint lists out all the available graph data accessible through the API. The returned `graphs` field is a list of metadata consisting of `title`, `category`, and `endpoint`;
by appending the `endpoint` field of the desired graph metadata to the API root url of `https://ffiec.cfpb.gov/quarterly-data/graphs/`, the full graph data is retrieved

  ```
  Method: GET
  Endpoint: https://ffiec.cfpb.gov/quarterly-data/graphs
  ```

  #### Example

  <b>Request:</b>

  `curl "https://ffiec.cfpb.gov/quarterly-data/graphs" -H 'Content-Type: application/json'`

  <b>Response:</b>

  ```json
  {
    "graphs": [
      {
        "category": "Loan & Application Counts",
        "endpoint": "applications",
        "title": "How has the number of applications changed?"
      },
      {
        "category": "Loan & Application Counts",
        "endpoint": "loans",
        "title": "How has the number of loans changed?"
      },
      ...
    ]
  }
  ```

### Specific Graph Data

To get the specific graph data, append the `endpoint` value from the above [Available Graphs](#available-graphs) section example response to the base url of `https://ffiec.cfpb.gov/quarterly-data/graphs/`,
e.g. `https://ffiec.cfpb.gov/quarterly-data/graphs/applications`.

The response contains the following sections:

  * title
  
  * subtitle

  * series

  * xLabel

  * yLabel

`title`, `subtitle`, `xLabel`, and `yLabel` are text fields providing some contexts of what the data represents.

`series` section is a list of data representing each line within the graph; each element within `series` will include xy `coordinates`, and `name` of the line.
In general, the x `coordinates` represents the time period (e.g. `2021-Q3`), y `coordinates` are numeric values.

  ```
  Method: GET
  Endpoint: https://ffiec.cfpb.gov/quarterly-data/graphs/{{graph endpoint name}}
  ```

<b>Request:</b>

`curl "https://ffiec.cfpb.gov/quarterly-data/graphs/applications" -H 'Content-Type: application/json'`

<b>Response:</b>

  ```json
{
  "series": [
    {
      "coordinates": [
        {
          "x": "2019-Q3",
          "y": 1167382.0
        },
        {
          "x": "2019-Q4",
          "y": 1258227.0
        },
        {
          "x": "2020-Q1",
          "y": 1301157.0
        },
        ...
      ],
      "name": "Conventional Conforming",
    },
    ...
  ],
  "subtitle": "Conventional conforming applications dramatically increased since 2019. FHA loans temporarily moved higher in 2020 Q3.",
  "title": "How has the number of applications changed?",
  "xLabel": "Year Quarter",
  "yLabel": "Application Count"
}

```


### Available Graphs
At the time of publication, below are the data available with their endpoints.
To get the most up-to-date list, refer to [Graph Data Summary](#graph-data-summary) section.

  ||
  ---|---
  Endpoint | Description
  `applications` | How has the number of applications changed?
  `all-applications` | How much of the total loan/application count do quarterly filers account for?
  `loans` | How has the number of loans changed?
  `credit-scores` | How have median credit scores changed?
  `credit-scores-cc-re` | For conventional conforming loans, how have median credit scores differed by race/ethnicity?
  `credit-scores-fha-re` | For FHA loans, how have median credit scores differed by race/ethnicity?
  `ltv` | How has median CLTV changed?
  `ltv-cc-re` | For conventional conforming loans, how has median CLTV differed by race/ethnicity?
  `ltv-fha-re` | For FHA loans, how has median CLTV differed by race/ethnicity?
  `dti` | How has median DTI changed?
  `dti-cc-re` | For conventional conforming loans, how has median DTI differed by race/ethnicity?
  `dti-fha-re` | For FHA loans, how has median DTI differed by race/ethnicity?
  `denials` | How have denial rates changed?
  `denials-cc-re` | For conventional conforming loans, how have denial rates differed by race/ethnicity?
  `denials-fha-re` | For FHA loans, how have denial rates differed by race/ethnicity?
  `interest-rates` | How have median interest rates changed?
  `interest-rates-cc-re` | For conventional conforming loans, how have median interest rates differed by race/ethnicity?
  `interest-rates-fha-re` | For FHA loans, how have median interest rates differed by race/ethnicity?
  `tlc` | How have median total loan costs changed?
  `tlc-cc-re` | For conventional conforming loans, how have median total loan costs differed by race/ethnicity?
  `tlc-fha-re` | For FHA loans, how have median total loan costs differed by race/ethnicity?