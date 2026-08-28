---
title: "Privacy Policy"
description: "Privacy Policy for Hyper Bridge and hyper-bridge.app"
layout: "simple"
---

*Last Updated: 28 August 2026*

Welcome to **Hyper Bridge** ([hyper-bridge.app](https://hyper-bridge.app)). This Privacy Policy describes how your information is handled when you visit our website or use the **Hyper Bridge** application (the "Services"). Your privacy is our highest priority.

---

### 1. Core Principle: 100% Local On-Device Processing

Hyper Bridge is designed with a strict privacy-first architecture:
- **No Data Sharing:** Hyper Bridge **does not share, sell, transmit, or monetize** your personal data or notification content with any third parties or remote servers.
- **Zero Telemetry / Analytics:** The application contains no analytics SDKs, trackers, or advertising frameworks.
- **On-Device Local Processing:** All notification parsing, rule matching, translator execution, and theme rendering happen entirely and exclusively on your local device.

---

### 2. Information We Collect and Process

#### Notification Listener Access (`NotificationListenerService`)
To provide its core functionality, Hyper Bridge requires Android Notification Listener permission. 
- **Purpose:** Hyper Bridge reads incoming notifications (e.g., media playback, timers, downloads, navigation progress, messages, and incoming calls) solely to **translate them locally in real time into the Xiaomi HyperOS Super Island / Dynamic Island specification**.
- **Scope:** Notification data is held ephemerally in device memory only for as long as the active island or notification is displayed, after which it is immediately cleared.
- **Storage:** Notification text and images are **never stored permanently** in local databases and are **never sent to external servers**.

#### Privileged Service & Shizuku (Optional)
If you enable Shizuku integration for privileged HyperOS system features (such as enhanced island management or System UI coordination), all API communication occurs purely between local processes on your device via Android IPC (AIDL). No elevated data leaves your device.

#### Backup & Configuration Data
If you use the Backup & Restore feature, application settings (app blocklists, custom themes, and translation preferences) are exported to a local `.hbr` file chosen by you. We do not have access to your backups.

#### Website & Direct Contact
If you contact us via email ([d4viddf@d4viddf.com](mailto:d4viddf@d4viddf.com)), we will use your email address and provided information solely to answer your technical questions or feedback.

---

### 3. Data Storage and Security
- **Local Storage:** All app preferences, custom theme configurations, and cached widget setups are stored strictly in local Android storage (DataStore & Room database on your device).
- **Security:** Because no notification content or user data is transmitted over the network, your sensitive data remains within Android's sandboxed environment on your device.

---

### 4. Third-Party Sharing
We do not share, sell, or disclose your personal or notification information to any third parties. 

---

### 5. Your Rights and Control
You have full control over Hyper Bridge:
- You can revoke Notification Listener access at any time via Android system settings.
- You can selectively exclude or block specific apps from being read or displayed in the island via the app's settings.
- Clearing the application's data or uninstalling the app permanently removes all stored local preferences and cache.

---

### 6. Children's Privacy
Hyper Bridge does not collect or solicit any personal information from children under the age of 13.

---

### 7. Changes to This Privacy Policy
We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.

---

### 8. Contact
If you have any questions or concerns regarding this Privacy Policy, please contact:

**David DF**  
Email: [d4viddf@d4viddf.com](mailto:d4viddf@d4viddf.com)  
Website: [https://d4viddf.com](https://d4viddf.com)  
Repository: [https://github.com/D4vidDf/HyperBridge](https://github.com/D4vidDf/HyperBridge)
