# HMDA File Serving

The HMDA Platform serves a number of files including:

1. [Documentation](https://ffiec.cfpb.gov/documentation)
2. [Modified LAR](https://ffiec.cfpb.gov/data-publication/modified-lar)
3. [Institution Register Summaries](https://ffiec.cfpb.gov/data-publication/disclosure-reports/)
4. [Dynamic National Loan-Level Dataset](https://ffiec.cfpb.gov/data-publication/dynamic-national-loan-level-dataset)
5. [Snapshot National Loan-Level Dataset](https://ffiec.cfpb.gov/data-publication/snapshot-national-loan-level-dataset)
6. [Disclosure Reports](https://ffiec.cfpb.gov/data-publication/disclosure-reports)
7. [Aggregate Reports](https://ffiec.cfpb.gov/data-publication/aggregate-reports)
8. [Rate Spread Data](https://ffiec.cfpb.gov/tools/rate-spread)

The HMDA Platform serves these files in three seperate ways, through the HMDA File api, Githhub, and S3.

The HMDA File api is used to serve the Modfied LAR and Institution Register Summaries. Github is used to serve documentation in the form of markdown files which are formatted by the HMDA-Frontend. S3 is used to serve all other files

## HMDA File API

The HMDA File API is used for accessing the Modified LAR and Institution Register Summaries.

### Get Modified LAR Pipe Delimited .txt File

| | |
|:-------|:-----|
| Method | `GET` |
| Endpoint | `https://ffiec.cfpb.gov/file/modifiedLar/year/{{year}}/institution/{{lei}}/txt` |

### Get Modified LAR Pipe Delimited .txt File with Header

| | |
|:-------|:-----|
| Method | `GET` |
| Endpoint | `https://ffiec.cfpb.gov/file/modifiedLar/year/{{year}}/institution/{{lei}}/txt/header` |

### Get Modified LAR .csv File

| | |
|:-------|:-----|
| Method | `GET` |
| Endpoint | `https://ffiec.cfpb.gov/file/modifiedLar/year/{{year}}/institution/{{lei}}/csv` |

### Get Modified LAR .csv File with Header

| | |
|:-------|:-----|
| Method | `GET` |
| Endpoint |
`https://ffiec.cfpb.gov/file/modifiedLar/year/{{year}}/institution/{{lei}}/csv/header` |

### Get Institution Register Summary (IRS)

The IRS is a summary of a institution's HMDA submission to be used by the filing institution to confirm that they are submitting the correct data.

As such, access to each IRS is restricted to users associated with the institution. Users must be authenticated using the HMDA authentication system and include a bearer token with their request.

(More information on authentication can be found above in the [Authorization section](https://cfpb.github.io/hmda-platform/#hmda-platform-filing-api-authorization) in the HMDA Platform Filing API section of these docs)

| | |
|:-------|:-----|
| Method | `GET` |
| Endpoint | `https://ffiec.cfpb.gov/file/reports/irs/year/{{year}}/institution/{{lei}}` |
| Headers | `Authorization: Bearer {{access_token}}` |

**Request:**

```console
    curl -X POST "https://ffiec.cfpb.gov/public/rateSpread/reports/irs/year/2019/institution/B90YWS6AFX2LGWOXJ1LD" \
    -H 'Authorization: Bearer  {{access_token}}'
```

**CSV Response:**

```console
    MSA/MD, MSA/MD Name, Total Lars, Total Amount ($000's), CONV, FHA, VA, FSA, Site Built, Manufactured, 1-4 units, 5+ units, Home Purchase, Home Improvement, Refinancing, Cash-out Refinancing, Other Purpose, Purpose N/A
    16984,"Chicago-Naperville, IL-IN-WI", 1, 135, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0
    27260,"Jacksonville-St. Marys-Palatka, FL-GA", 1, 445, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0
```

## Github File Service

Documentation served from github can be found on the [HMDA Frontend github repository](https://github.com/cfpb/hmda-frontend/tree/master/src/documentation/markdown)

## S3 File Service

All other files are accessed through direct links to the HMDA Platform's public S3 bucket. These S3 links are all prefixed with: `https://s3.amazonaws.com/cfpb-hmda-public/prod`.
