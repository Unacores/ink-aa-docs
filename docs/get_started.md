# Getting Started  

Welcome to Ink Account Aggregator (AA)! Whether you're a **Financial Information Provider (FIP)** or a **Financial Information User (FIU)**, this guide will help you integrate seamlessly with our ecosystem. Dive into the relevant sections below to understand workflows and API interactions tailored to your role.

---

## Understanding FIU Workflows  

As an FIU, your integration revolves around managing consent and data flows. Below are the key steps to ensure a smooth process:  

### 🚦 Consent Flow  

#### 1. **Requesting Consent**  
- Initiate the consent process via the `/Consent` API.  
- Ink AA notifies the customer through app notifications or SMS.  
- The customer reviews and approves/rejects the request in the Ink app (mobile or web).  

#### 2. **Notifying FIU of Consent Status**  
- Once a customer makes their decision, Ink AA informs the FIU using the `/Consent/Notification` API.  
- FIUs can then retrieve consent details via the `/Consent/{id}` endpoint to update their systems.

---

### 📊 Data Flow  

#### 1. **Initiating a Data Request**  
- Upon consent approval, request financial data via the `/FI/request` API.  
- The AA server generates a unique session ID and forwards the request to relevant FIPs as per the consent details.

#### 2. **Receiving Data**  
- Wait for the "Data Ready" notification from Ink AA, signaling data availability.  
- Retrieve the data securely from the AA server.

---

## Understanding AA Workflows and Customer Interaction  

Ink AA empowers customers to securely share their financial data. The process is intuitive and includes:  

### 🛠️ **Step 1: Customer Registration with AA**  
- Customers register using the Ink mobile app or web platform.  
- Upon registration, they receive a unique AA handle, such as:  
  - `yourname@ink`  
  - `9999999999@ink` (mobile-based handle).  

This handle is shared with FIUs for initiating consent requests, similar to a UPI handle for payments.  

---

### 🔗 **Step 2: Linking Financial Accounts**  
- Customers link their financial accounts by authenticating with their Financial Institution using an OTP.  
- This step ensures all linked accounts are ready for data sharing.  

---

### 🔐 **Step 3: Secure Sharing of Financial Information**  
- Customers approve or reject consent requests directly from the Ink app.  
- Approved consents enable FIUs to securely access specified financial data via Ink AA.

---

## Integrating with Our FIU Module  

Ink AA simplifies integration for FIUs by offering a pre-built **FIU module**. This allows you to:  
- Focus on building your application after receiving decrypted data.  
- Leverage our **FIU sandbox environment** for testing and development.

### Key Highlights of the FIU Module:
- Compatible with any AA, using the customer's AA handle (e.g., `customer1@ink` redirects to Ink AA).  
- Adheres to [ReBIT FIType schemas](https://api.rebit.org.in/schema) for seamless data handling.  

### ⚡ Why Choose Our FIU Module?  
- Reduces development effort by providing core functionality.  
- Ensures compliance with the latest ecosystem standards.  

---

By following this guide, you’ll be ready to integrate efficiently with Ink AA and the broader AA ecosystem. Let us help you unlock the full potential of secure financial data sharing!  

For any assistance, reach out to our support team at **connect@ink-aa.com**.  

