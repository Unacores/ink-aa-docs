# Web UI integration with Ink AA

The Ink Web App integration end point enables seamless integration of FIU application with Ink to provide frictionless user experience.

The Ink Web App can be invoked by redirecting the FIU page to the Webview URL as an http GET request along with some URL parameters.

## Pre-Requisites

- You are registered with Ink AA and have got a VUA e.g. `yourname@ink`


### Understanding the Process flow

1. The FIU securely captures the user's AA ID, preferably during an authenticated web session, from the FIU web user interface and submits it to the FIU server.

2. The FIU server generates a consent request in accordance with ReBIT specifications, assigning it a unique consent request ID.

3. After generating the consent request, the FIU server encrypts it and encodes it using a base64 encoder.

4. The FIU server initiates a redirection request to the web browser or webview. This request includes the FIU ID, the encoded consent request, the unique consent request ID, and a callback URL for redirecting to the Ink AA webview.

5. The web browser or webview redirects the user to the Ink domain.

6. Within the Ink AA webview, user AA ID authentication is performed, and the consent request is processed by soliciting consent from the user.

7. Depending on the user's acceptance or rejection of the consent request, the Ink AA server sends a status notification to the FIU server, along with the consent request ID.

8. Subsequently, the webview redirects the user back to the FIU domain, returning to the originally provided callback URL.

9. The FIU can now proceed by checking the consent status with the FIU server.

10. If the user has granted consent, the FIU server can continue with the data request and retrieve data from the Ink AA server.

