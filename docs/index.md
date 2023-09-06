# Overview

## Introduction

Greetings and welcome to Ink Account Aggregator! Here, you'll discover comprehensive guidance on integrating and utilizing the Account Aggregator APIs. While our primary role is to function as an Account Aggregator (AA) within the ecosystem, we also provide modules that are responsible for implementing the FIU functionality along with their corresponding APIs. FIUs and FIPs have the option to integrate these modules into their production environments, facilitating a swift onboarding process into the AA ecosystem.

Alternatively, if a FIU or FIP prefers to create their own FIU or FIP module, they can utilize our AA REST API. To support this, Ink has developed an 'AA API sandbox' (ink_aa_integration), which serves as an implementation of the essential REST APIs required for an AA. Within this resource, we outline all the vital information necessary for prospective FIUs or FIPs to effectively interface with our AA REST API, thus enabling their seamless integration into the AA ecosystem.

We are committed to staying up-to-date with the latest community and Rebit API specifications for our simulators. However, if you encounter any issues or have any questions, please don't hesitate to contact us at `help@ink-aa.com`.

## Glossary

`AA` - Account Aggregators that facilitate secure information exchange between FIU/Customer and FIP.

`FIP` - Financial Information Providers that hold the customer account information and share encrypted information on presentation of a consent and data request from the FIU or Customer.

`FIU` - Financial Information Users that request consent from a customer via an AA and subsequently request for data on the basis of an approved consent from an AA. These are the data consumers.

`aa_api_key` - The HTTP header that needs to be set when a AA calls the FIP or FIU API. This header value is the token that FIP or FIU generates and gives to AA. 

`fip_api_key` - This HTTP header needs to be set when FIP calls the AA APIs. This is a token that AA gives to FIP and is used in conjunction with the `x-jws-signature` header. 

`client_api_key` - The HTTP header that needs to be set for every API call when FIU calls the AA APIs and value contains the token that AA gives to FIU. This is used in conjunction with the `x-jws-signature` that FIU will set in the API when calling AA.

`x-jws-signature` - HTTP header that contains the 'detached' signature of the body. API request/response need to be signed and the signature to be set in this header. Please see the details in our [How to](how_to) section to generate the signature

## API Information

All API request and responses are in standard [JSON](https://www.json.org) format. The APIs use `GET` and `POST` requests and HTTP response codes to indicate status and errors. All requests must include a Content-Type of `application/json` and the body must be valid JSON. API use `https` protocol for security. 

## Get Started

So, [Lets get started](get_started) with the integration and building out products using the AA ecosystem. 

## Version

We are adhering to the latest API specifications as per ReBIT and community which are currently at 1.1.3