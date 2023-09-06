# Getting Started

When it comes to integrating with our Account Aggregator (AA), there are multiple paths to choose from, depending on the specific functionality you are building.

Your interaction and integration with Ink Account Aggregator (AA) will typically occur in one of two roles: as a Financial Information Provider (FIP) or a Financial Information User (FIU). Please refer to the relevant section below for detailed information on integration and API usage.

## Understanding FIU Workflows

Here, we provide an overview of the key workflows for an FIU:

### Consent Flow - Requesting Consent
The FIU initiates the consent process by making a request to the AA server through the `/Consent` API. Upon receiving this request, the AA server notifies the customer, typically via app notifications or SMS, prompting them to review and either approve or reject the consent request within the Ink app (whether on mobile or web).

### Consent Flow - Notifying FIU of Consent Status
Once the customer makes their decision within the Ink app (Mobile or Web), the AA server informs the FIU by invoking the `/Consent/Notification` API. Upon receiving this notification, the FIU has the option to update their systems and subsequently retrieve consent details from the AA server via the `/Consent/{id}` endpoint.

### Data Flow - Initiating a Data Request
If the customer grants consent, and the FIU receives consent details from Ink AA, the FIU can proceed to request data associated with that consent by calling the `/FI/request` API. The AA server will generate a unique session identifier for the request and then forward it to the Financial Information Providers (FIPs) according to the consent details.

### Data Flow - Receiving Data
Following a data request, the FIU must await the "Data Ready" notification from the AA, which indicates that the AA server has received the data from the FIP. Once this notification is received, the FIU server can retrieve the data from the AA server.

## Understanding AA Workflows and Customer Interaction

Before customers can securely share their financial information with FIUs, they must first register with a licensed AA. Ink AA offers a mobile or web application for customer interactions, making the process straightforward with just a few steps.

### Step 1: Customer Registration with AA
Customers can register with the Ink Account Aggregator using either the Ink mobile app or the web platform. Upon registration, customers receive a unique handle or AA ID, such as `yourname@ink-aa` or their mobile number `9999999999@ink`. This virtual user handle can be provided to FIUs for consent requests, similar to a UPI handle for payment collections.

### Step 2: Customer Linking Their Financial Accounts
Customers need to link their financial accounts to their unique Ink AA ID. The authentication process is simple and typically involves receiving an OTP on the customer's registered mobile number from their Financial Institution.

### Step 3: Securely Share Financial Information
With their accounts linked, customers can accept or reject consent requests from FIUs and share their financial account information for their selected accounts. This can be easily managed through the Ink mobile or web app. Once consent is granted, FIUs can request financial information from the specified accounts through the Ink AA.

## Integrating with Our FIU Module

We have already developed the core functionality of the FIU module, simplifying your integration with an AA. This allows you to focus on building your application once you have access to the decrypted data.

Our FIU sandbox environment is continuously available for your use. It's worth noting that the FIU sandbox is agnostic to any specific AA and can interface with any account aggregator. This is achieved based on the handle of the AA user, for example, `customer1@ink` will redirect to the 'Ink AA'.

Our data schemas adhere to the [ReBIT FIType schemas](https://api.rebit.org.in/schema).
