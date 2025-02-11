# HMDA User API

The HMDA User API is used to update a user's attributes in the HMDA Platform. These attributes are: first name, last name, and the institutions that they are associated with.

All requests to the User API require an authorization token. More information on getting this token can be found in the [HMDA Platform Filing API documentation](/documentation/api/filing/platform.md#authorization).

## Seeing a User's Current Attributes

All user attributes for the HMDA Platform are stored in the HMDA Platform's authorization provider, Keycloak, and can be found in the user's authorization token once decoded using standard JWT decoding. In order to see the changes to a user's attributes a new token must be fetched.

In order to associate a user with an institution that user's email domain must be associated with that institution. In order to determine what institutions are associated with the user's email domain the [Institution's API search by email domain route](/api/institutions-api/#search-by-email-domain) can be used.

## Update a User

This endpoint takes a JSON object of user attributes. All attributes must be submitted in the request.

```
Method: POST
Endpoint: https://ffiec.cfpb.gov/hmda-auth/users/
Headers: Authorization: Bearer {{access_token}}
Body: '{firstName: "{{firstName}}", lastName: "{{lastName}}", leis: ["{{lei}}"]}'
```

### Example

<b>Request:</b>

```
curl -X POST \
  "https://ffiec.cfpb.gov/hmda-auth/users/" \
  -H 'Authorization: Bearer {{access_token}}' \
  -d '{firstName: "testFirstName", lastName: "testLastName", leis: ["BANKLEIFORTEST123456"]}'
```

<b>Response:</b>

```json
{
    "firstName": "testFirstName",
    "lastName": "testLastName",
    "leis": [
        "BANKLEIFORTEST123456"
    ]
}
```