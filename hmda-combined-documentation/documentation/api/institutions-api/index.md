# Institutions API

These are a series of APIs that can be used to fetch information about financial institutions from the HMDA Platform.

## Get All Institutions for a Specific Year

This API is used for getting every institution that filed HMDA data for a specific year.

```
Method: GET
Endpoint: https://ffiec.cfpb.gov/v2/reporting/filers/{{year}}
```

### Example

<b>Request:</b>

```
curl GET \
  "https://ffiec.cfpb.gov/v2/reporting/filers/2022"
```

<b>Truncated Response:</b>

```json
{
    "institutions": [
        {
            "lei": "549300BAZS5RZ8O98A51",
            "name": "POWER FINANCIAL",
            "period": "2022"
        },
        {
            "lei": "549300UHEEV73TKCZY62",
            "name": "Self-Help Federal Credit Union",
            "period": "2022"
        },
        ...
    ]
}

```

## Search for an Institution by LEI

This API is used to fetch information for a particular institution by the institution's LEI.


```
Method: GET
Endpoint: https://ffiec.cfpb.gov/v2/public/institutions/{{lei}}/year/{{year}}
```

### Example

<b>Request:</b>

```
curl GET \
  "https://ffiec.cfpb.gov/v2/public/institutions/BANKLEIFORTEST123456/year/2024"
```

<b>Response:</b>

```json
{
    "institutions": [
        {
            "activityYear": 2024,
            "lei": "BANKLEIFORTEST123456",
            "agency": 9,
            "institutionType": -1,
            "institutionId2017": "",
            "taxId": "01-0123456",
            "rssd": -1,
            "emailDomains": [
                "test.com"
            ],
            "respondent": {
                "name": "Test Bank",
                "state": "",
                "city": ""
            },
            "parent": {
                "idRssd": -1,
                "name": ""
            },
            "assets": -1,
            "otherLenderCode": -1,
            "topHolder": {
                "idRssd": -1,
                "name": ""
            },
            "hmdaFiler": false,
            "quarterlyFiler": true,
            "quarterlyFilerHasFiledQ1": false,
            "quarterlyFilerHasFiledQ2": false,
            "quarterlyFilerHasFiledQ3": false,
            "notes": "test"
        }
    ]
}
```

## Search by Email Domain

This API is used to fetch all institutions associated with a particular email domain. This API is used to determine what institutions a user may be associated with in the HMDA Platform.

```
Method: GET
Endpoint: https://ffiec.cfpb.gov/v2/public/institutions?domain={{emailDomain}}
```

### Example

<b>Request:</b>

```
curl GET \
  "https://ffiec.cfpb.gov/v2/public/institutions?domain=test.com"
```

<b>Response:</b>

```json
{
    "institutions": [
        {
            "activityYear": 2024,
            "lei": "BANKLEIFORTEST123456",
            "agency": 9,
            "institutionType": -1,
            "institutionId2017": "",
            "taxId": "01-0123456",
            "rssd": -1,
            "emailDomains": [
                "test.com"
            ],
            "respondent": {
                "name": "Test Bank",
                "state": "",
                "city": ""
            },
            "parent": {
                "idRssd": -1,
                "name": ""
            },
            "assets": -1,
            "otherLenderCode": -1,
            "topHolder": {
                "idRssd": -1,
                "name": ""
            },
            "hmdaFiler": false,
            "quarterlyFiler": true,
            "quarterlyFilerHasFiledQ1": false,
            "quarterlyFilerHasFiledQ2": false,
            "quarterlyFilerHasFiledQ3": false,
            "notes": "test"
        }
    ]
}
```



