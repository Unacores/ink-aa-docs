# Overview

## Introduction

Welcome to **Ink Account Aggregator**! This guide provides comprehensive instructions for integrating and utilizing our Account Aggregator APIs. 

Our primary role is as an **Account Aggregator (AA)** within the ecosystem, but we also offer modules responsible for implementing **Financial Information User (FIU)** functionality along with the associated APIs. FIUs and Financial Information Providers (FIPs) can seamlessly integrate these modules into their production environments, ensuring a swift onboarding process into the AA ecosystem.

Alternatively, FIUs or FIPs can choose to develop their own FIU or FIP modules using our **AA REST API**. To assist with this, Ink provides an **AA API sandbox** (`ink_aa_integration`), a resource that implements essential REST APIs for an AA. This guide includes all the vital information necessary for FIUs or FIPs to interface effectively with our AA REST API, enabling seamless integration into the AA ecosystem.

We ensure compatibility with the latest community and **ReBIT API specifications** for our simulators. If you encounter issues or have questions, feel free to contact us at **[connect@ink-aa.com](mailto:connect@ink-aa.com)**.

---

## Glossary

- **AA (Account Aggregator)**: Facilitates secure information exchange between FIUs/Customers and FIPs.  
- **FIP (Financial Information Provider)**: Holds customer account information and shares encrypted data upon consent and request from the FIU or customer.  
- **FIU (Financial Information User)**: Requests consent via an AA and, upon approval, accesses data as a consumer.  

- **`aa_api_key`**: HTTP header set when an AA calls the FIP or FIU API. This token is generated by the FIP or FIU and provided to the AA.  
- **`fip_api_key`**: HTTP header set when an FIP calls the AA APIs. This token, provided by the AA, is used alongside the `x-jws-signature` header.  
- **`client_api_key`**: HTTP header set for all API calls when an FIU interacts with AA APIs. This token is generated by the AA and is used in conjunction with the `x-jws-signature`.  
- **`x-jws-signature`**: HTTP header containing the detached signature of the request/response body. APIs require signed requests/responses, and the signature must be included in this header. Refer to our **[How to](how_to)** section for details on generating this signature.

---

## API Information

All API requests and responses adhere to the **[JSON](https://www.json.org)** format. The APIs support `GET` and `POST` methods and utilize HTTP response codes to indicate status and errors.  

### Key Requirements:
- **Content-Type**: All requests must include `application/json`.  
- **Body Format**: The body must be valid JSON.  
- **Protocol**: APIs use the secure `https` protocol.  

---

## Get Started

Let’s begin! Explore how to integrate and build products leveraging the **AA ecosystem**. Head over to our **[Get Started](get_started)** guide to kick off your integration journey.

---

## Version

We strictly adhere to the latest API specifications, currently at **2.0.0**, as defined by **ReBIT** and the community.

