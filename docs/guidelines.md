# Guidelines  

To ensure consistency and reliability across all API interactions, please adhere to the following guidelines when integrating with our system.

---

## 📅 Timestamp Formats  

All timestamp-related attributes in the APIs must follow the standard date-time timezone format:  

**`yyyy-mm-dd'T'hh:mm:ss.<3digit millisecond>'Z'`**

This format aligns with the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard, which ensures uniformity and compatibility across various systems and time zones.  

### Example:
- **2024-11-21T12:45:30.123Z**  

By adhering to this format, we can guarantee that timestamps are consistent, easily parsed, and compatible across different services in the ecosystem.
