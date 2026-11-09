---
title: "Notification Listener Access"
description: "How to safely grant Android notification listener permission, handle Android 13+ restricted settings, and pass Xiaomi's security countdown."
weight: 1
showTableOfContents: true
---

In Android, third-party applications are strictly sandboxed from observing other apps' alerts. To intercept music playback, incoming chat messages, download progress, navigation alerts, and system timers, **HyperBridge** requires Android's specialized **Notification Listener Access** (`NotificationListenerService`).

Without this permission, HyperBridge cannot detect when notifications are posted or updated, meaning dynamic islands cannot be displayed.

---

## 🔒 Privacy & On-Device Security

Granting notification listener access allows an app to observe incoming notification titles, body text, actions, and media metadata. HyperBridge takes privacy and security very seriously:

* **100% On-Device Processing**: Notification data is processed purely in ephemeral RAM and converted on the fly into native HyperOS Super Island views.
* **Zero Network Permissions**: HyperBridge does **not** request the Android internet permission (`android.permission.INTERNET`). It is technically impossible for the app to send your messages, verification codes, or personal data to any external server.
* **No Disk Logging**: Message contents and notification payloads are never saved to your device storage or persistent databases.

---

## 🛠️ Step-by-Step: How to Enable on HyperOS

You can grant Notification Listener access during the initial [Onboarding Wizard]({{< ref "docs/getting-started/first-steps.md" >}}), from the **System Health** dashboard (**Settings** &rarr; **System Health**), or manually through Xiaomi HyperOS Settings.

### Method 1: Via HyperBridge (Recommended)

1. Open **HyperBridge** and tap the **System Health** card on the dashboard or open **Settings** &rarr; **System Health**.
2. Under the permissions list, tap **Grant Permission** next to **Notification Listener Access**.
3. Android will open the **Device & app notifications** system screen directly.
4. Locate and tap **Hyper Bridge** in the list.
5. Toggle **Allow notification access** to **ON**.
6. Accept Xiaomi's [10-Second Security Warning](#-navigating-xiaomis-10-second-security-warning).

---

### Method 2: Manual System Settings Path

If you need to navigate to the setting manually in HyperOS:

1. Open your phone's **Settings**.
2. Scroll down and tap **Apps** &rarr; **Special app access** (or search for *"Device & app notifications"* in the Settings search bar).
3. Tap **Device & app notifications** (or **Notification access** on older MIUI versions).
4. Select **Hyper Bridge** from the installed apps list.
5. Turn on the toggle switch for **Allow notification access**.

---

## ⚠️ Android 13, 14 & 15+ "Restricted Settings" Fix

If you installed HyperBridge directly from a downloaded APK (e.g. from GitHub Releases) rather than the Google Play Store, Android automatically flags the app as sideloaded and greys out the notification listener toggle with the following alert:

> **"Restricted setting: For your security, this setting is currently unavailable."**

{{< figure src="/img/docs/permissions/en/system-setup-permissions.jpg" alt="Allow Restricted Settings on HyperOS" caption="Resolving Android 13+ restricted settings in App Info." >}}

### How to Unlock Restricted Settings:

1. Open your device **Settings** &rarr; **Apps** &rarr; **Manage apps**.
2. Locate and tap **Hyper Bridge** in the list to open its **App info** screen.
3. In the top-right corner of the App info page, tap the **three dots (⋮)** menu icon.
4. Tap **Allow restricted settings**.
5. Authenticate using your device fingerprint, face unlock, or screen lock PIN/password.
6. A toast message will appear saying *"Restricted settings allowed for Hyper Bridge"*.
7. Return to **Device & app notifications** and toggle **Allow notification access** to **ON**.

---

## ⏱️ Navigating Xiaomi's 10-Second Security Warning

Whenever any app requests Notification Listener access or Accessibility permissions on Xiaomi devices, HyperOS / MIUI presents a full-screen system security dialog titled *"Danger"*:

> *"Notification access allows the app to read all notifications, including personal information such as contact names and text messages..."*

This is a standard Xiaomi operating system protection mechanism designed to ensure users deliberately choose to grant elevated notification access.

### How to complete the prompt:
1. Wait for the **10-second countdown timer** at the bottom of the dialog to reach zero.
2. Check the box labeled **"I am aware of the possible risks, and assume all possible consequences voluntarily."**
3. Tap **OK** to confirm.

---

## ✅ Verifying Listener Status

Once granted, return to **HyperBridge**:
1. Check the **System Health** dashboard banner: it should now display a green badge (**"System Health: Good"**).
2. Look at the listener status in **Diagnostics** (**Settings** &rarr; **Diagnostics**): the `NotificationListenerService` watchdog should report `CONNECTED` and `ACTIVE`.

If the listener service ever drops after deep sleep or a system reboot, ensure you have also configured [Autostart and Battery Saver]({{< ref "docs/permissions/battery-and-autostart.md" >}}).
