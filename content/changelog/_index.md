---
title: "Changelog"
description: "Release history and updates for HyperBridge (English)."
showTableOfContents: true
---

Follow the latest updates, features, and release history for **HyperBridge**.

---

## v0.5.7: Performance & Sync Update

This release focuses on significant under-the-hood performance improvements and stability fixes. **Version 0.5.7 marks the final minor update for the 0.5.x branch**, as Hyper Bridge officially begins the development of the next major milestone: **v0.6.0**.

### ⚡ Performance & R8 Optimizations
*   **App Optimization Enabled:** Enabled full R8 code shrinking, obfuscation, and resource shrinking. This results in a significantly smaller APK size and improved runtime performance by removing unused code and optimizing class loading.
*   **Build System Upgrade:** Upgraded to **Android Gradle Plugin 9.3.2** and **Gradle 9.5.0** to leverage the latest stability and build-time optimizations.

### 🛠️ Bug Fixes & Stability
*   **Duplicate Prevention:** Improved the logic for messaging apps (like WhatsApp/Telegram). The service now intelligently skips group summaries that would otherwise create redundant islands when live conversations are already active (Fixes #258 — Thanks @noelpatata2!).
*   **Sync Reliability:** Refined the notification synchronization engine to prevent original system notifications from being prematurely dismissed.

### 🌐 Localization
*   Added **Japanese** translation (Thanks @gyuhowa1122-glitch!).
*   Updated Spanish and Portuguese (BR) strings.

### 🤝 Acknowledgements
*   Added a **Special Thanks** section in the app settings acknowledging **Stardawn** for their research on the XMSF workaround that enables HyperIslands on Chinese ROMs.

---

### What's Changed
* Add Japanese translation by @gyuhowa1122-glitch in https://github.com/D4vidDf/HyperBridge/pull/253
* fix: skip group summaries that duplicate live conversation notifications by @noelpatata2 in https://github.com/D4vidDf/HyperBridge/pull/258

### New Contributors
* @gyuhowa1122-glitch made their first contribution in https://github.com/D4vidDf/HyperBridge/pull/253

**Full Changelog**: https://github.com/D4vidDf/HyperBridge/compare/v0.5.6...v0.5.7

---

## v0.5.6: Landscape Hide & Stability Fixes

### What's Changed
* fix: validate highlightColor before passing to SystemUI by @Wangtaotaoo in https://github.com/D4vidDf/HyperBridge/pull/248
* fix: permanent island disappearing after notifications/unlock (#237) by @noelpatata2 in https://github.com/D4vidDf/HyperBridge/pull/243
* feat: Add option to hide Permanent Island in landscape orientation by @ansjdev in https://github.com/D4vidDf/HyperBridge/pull/235

### New Contributors
* @noelpatata2 made their first contribution in https://github.com/D4vidDf/HyperBridge/pull/243
* @ansjdev made their first contribution in https://github.com/D4vidDf/HyperBridge/pull/235

**Full Changelog**: https://github.com/D4vidDf/HyperBridge/compare/v0.5.5...v0.5.6

---

## v0.5.5: Messaging & Update Fixes

This release focuses on significantly improving how islands handle notifications, squashing bugs related to Live Updates, and overhauling messaging grouping so your experience feels smoother and less cluttered.

### ✨ Features & Improvements
* **Messaging Grouping Overhaul:** Completely reworked how messaging-style notifications (like WhatsApp) are grouped to prevent duplicate islands from spawning. (#217)
* **Permanent Island Upgrades:** Improved the stability and logic for permanent/sticky islands to ensure they display and behave correctly. (#222)
* **Live Update Inline Replies:** You can now use the inline reply editor directly from Android 16 Live Update notifications. (#224)

### 🐛 Bug Fixes
* **Notification Drop & Discard Logic:** Fixed a critical issue where islands were not being properly removed when dismissed, and prevented random notification drops. (#221)
* **Live Update Icons:** Fixed a bug where the original application icon wouldn't display properly inside the Live Update builder. (#224)

### 🧹 Maintenance & Chores
* **Cleaned Up Localization:** Safely removed 98 unused strings from the project without breaking UTF-8 encoding, resolving broken characters in localized strings. (#219)

---

**Full Changelog**: https://github.com/D4vidDf/HyperBridge/compare/v0.5.4...v0.5.5

---

## v0.5.4: Critical Bug Fix

### What's Changed
* fix: NLS reliability, Safe Mode crash loop, and implement auto-migration by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/216
* fix: Clamp progress percent to [0, 100] to prevent SystemUI crash by @Wangtaotaoo in https://github.com/D4vidDf/HyperBridge/pull/214

### New Contributors
* @Wangtaotaoo made their first contribution in https://github.com/D4vidDf/HyperBridge/pull/214

**Full Changelog**: https://github.com/D4vidDf/HyperBridge/compare/v0.5.3...v0.5.4

---

## v0.5.3: Stability & Crash Fixes

This release focuses on improving stability and fixing several major crashes reported in production.

### 🛠️ Bug Fixes
- **App Startup Stability**: Fixed a critical double-checked locking bug in the internal database connection that caused `SQLiteCantOpenDatabaseException` and exhausted file descriptors during warm starts.
- **Theme Creator Reliability**: Fixed a `ConcurrentModificationException` when saving themes by ensuring thread-safe map copying during background generation.
- **MIUI Compatibility**: Bypassed aggressive MIUI theme engine hooks that intercepted the standard launcher icon in the onboarding flow, causing an instant `OutOfMemoryError` (`RecordingCanvas.throwIfCannotDraw`) on Xiaomi devices.
- **Backup Resilience**: Improved the JSON backup parser to catch and handle `Throwable` (including `OutOfMemoryError`), allowing the app to gracefully reject corrupted or oversized backups without crashing.
- **Predictive Back**: Mitigated rare `WindowOnBackInvokedDispatcher` null pointer exceptions related to Jetpack Compose gestures.

---
**Full Changelog**: https://github.com/D4vidDf/HyperBridge/compare/v0.5.2...v0.5.3

---

## v0.5.2: Inline Reply, Performance & Stability

This release brings a brand new inline reply experience, allowing you to respond directly from the island, along with major performance optimizations and crash fixes.

### ✨ New Features & Improvements
- **Inline Reply Overlay**: Implement a brand new Inline Reply overlay! Reply to messages directly from the island without opening the app.
- **Inline Reply Customization**: Fully customize the look of the new inline reply editor globally or per-app via the new Global Settings -> Inline reply section.
- **Service Memory Overhaul**: Overhauled NotificationListener memory architecture to use an in-memory ConcurrentHashMap, dropping background CPU overhead and database reads to 0%.
- **Warm Start Performance**: Deferred `AppDatabase` allocation and moved `getPackageInfo` requests off the main UI thread, vastly improving warm start performance on ARM Cortex-A75 / Mali G52 architectures.

### 🐛 Bug Fixes
- **Theme Creator Crash**: Migrated to `ConcurrentHashMap` to resolve `ConcurrentModificationException` during theme asset generation.
- **WelcomePage ANR**: Replaced synchronous `PackageManager` operations with standard `painterResource` to prevent `WelcomePage` ANR (Input Timeout).
- **Widget Picker OOM**: Offloaded `toBitmap` scaling to `Dispatchers.IO` and enforced dimension coercions to eliminate `RecordingCanvas.throwIfCannotDraw` constraints and OOM crashes.
- **UI Layout Exceptions**: Replaced rigid `.heightIn(min = XX.dp)` with `.defaultMinSize(minHeight = XX.dp)` globally to prevent Jetpack Compose Layout Constraint Exceptions on smaller screens.
- **Backup Errors**: Re-routed `Gson` to consume native `InputStreamReader` streams, dramatically reducing heap usage and preventing `OutOfMemoryError` on large JSON backups.

---
### What's Changed
* Fix/system UI crash by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/204
* perf: optimize Notification Listener via synchronous memory caching by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/206
* feat: implement Inline Reply overlay and theme customization by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/207

**Full Changelog**: https://github.com/D4vidDf/HyperBridge/compare/v0.5.1...v0.5.2

---

## v0.5.1: Fixes & Refinements

This release focuses on major bug fixes regarding notification stability, quality-of-life improvements, and permission handling for Xiaomi devices.

### 🐛 Bug Fixes
- **WhatsApp Duplicates Fixed**: Resolved an issue that caused duplicate WhatsApp notifications to appear.
- **Notification Flicker & Crashes Fixed**: Fixed a crash caused by receiving multiple notifications in a short timeframe. Previously, the app would cancel and recreate notifications upon updates; it now safely updates notifications normally, completely eliminating the notification flicker and improving stability.
- **Notification Intents Restored**: Fixed an issue where clicking a featured notification would incorrectly route to the troubleshooting screen instead of the original app (e.g., Spotify, WhatsApp). Notifications now route correctly when permissions are granted!
- **Settings UI Polish**: Restored the missing rounded corners on the "Permanent Island" option in the Global Settings list for a cleaner aesthetic.
- **Improved Fallback Notifications**: If HyperBridge detects that the system cannot render a Featured Notification, it falls back to a standard Android notification. Clicking the fallback notification or its "Troubleshoot" action button now directly opens the Troubleshooting guide.

### ✨ New Features & Improvements
- **Remove Island on Dismiss**: Added a new option to automatically remove the island if the original system notification is dismissed.
- **Featured Notifications Diagnostics**: Added a new check screen during Onboarding to verify if your Xiaomi device supports Featured Notifications and if the required system permissions are enabled.
- **Setup Health Integration**: The "Featured Notifications" permission status is now continuously monitored and displayed inside the **Setup Health** screen (under the Permissions section). You can quickly jump to System Settings from there.
- **Troubleshooting Screen**: Added a dedicated Troubleshooting Screen that guides users on how to enable the necessary hidden system permissions (or use Shizuku) to get islands working on strict Xiaomi ROMs.
- **Clearer Terminology**: Renamed the "Live Updates" section in the settings menu to **"Notification Management"** to better reflect its purpose and avoid confusion with native Live Update engines.
- **Spanish Translations**: Added full Spanish translations (`es-rES`) for all the new troubleshooting dialogues, setup health checks, and notification management settings.

---
### What's Changed
* fix(service): resolve WhatsApp duplication and update flashing/crashes by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/200
* Fix: call islands lingering, permanent island flicker, and system cr by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/201
* fix: implement Featured Notification diagnostics and stability refine… by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/202

**Full Changelog**: https://github.com/D4vidDf/HyperBridge/compare/v0.5.0...v0.5.1

---

## v0.5.0: The Live Update

Hyper Bridge 0.5.0 is a massive feature release bringing full support for Native Live Updates, CN ROMs, a completely overhauled theme engine, dedicated layouts, and major system improvements. 

### 🌟 Headline Features

* **⚡ Native Live Updates Support**
  * Full support for Native Android 16/HyperOS Live Updates.
  * *Requirement*: Requires HyperOS  `3.0.3xx+` or higher.
  * Added as a brand new option in the Engine Selector (available globally or per-app), allowing you to choose between the custom "Xiaomi Featured Design" or native system Live Updates.

* **🇨🇳 Full CN ROM Support (Sui & Shizuku)**
  * Added a dedicated workaround using **Sui and Shizuku** allowing users on HyperOS CN (Chinese) ROMs to fully enjoy Hyper Islands without needing native system support.
  * Ensures seamless network operations and bypasses regional limitations on notifications.

* **🧠 Intelligent Permanent Island**
  * **Always Visible**: You can now choose to keep the empty island permanently on your screen even when there are no active notifications.
  * **Auto-Hide Logic**: The permanent island is smart—it automatically hides itself whenever an active widget is shown on the screen to prevent awkward UI overlaps.
  * Customize the width of the permanent island directly from the settings to perfectly match your camera cutout.

* **🎨 Theme Engine & Color Customization Improvements**
  * **New HSL Color Picker**: Replaced standard hex fields with a beautiful new HSL (Hue, Saturation, Lightness) bottom sheet color picker for ultra-precise theme customization.
  * **Engine Selection**: You can now choose between the "Xiaomi Featured Design" or "Native Android Live Updates" on a per-app basis or globally.
  * **Layered Behavior Controls**: Set custom timeouts and popup logic directly within themes.
  * **Shizuku Toggle**: Added the Shizuku workaround toggle directly to the Theme Editor Engine tab for easy access.

* **⬇️ Dedicated Downloads & Text Progress**
  * **New Download Layout**: Downloads now have a completely separated layout and visual design from standard progress bars, finishing with a satisfying "Green Tick" animation.
  * **Text Progress Support**: The engine now parses raw percentage text (e.g., "12%") from notifications, allowing apps that don't use native progress bars to still trigger the island.
  * **Smart Filtering**: Text-based progress is strictly filtered to store and installer downloads to prevent false triggers on regular status notifications.

* **⚙️ Advanced Island Behaviors & DND**
  * **Do Not Disturb (DND)**: You can now enable DND mode to suppress island popups when you don't want to be interrupted.
  * **Remove Original Notification**: A highly requested new option allows you to automatically remove the original system notification when it's being displayed in the Island, keeping your status bar completely clean.
  * **Custom Heads-up Popups**: You can now define exactly how long the floating "heads-up" popup shows before smoothly transitioning back into the collapsed island.

* **💡 Smart Icon Tinting**
  * Implemented a new detection system that automatically analyzes extracted app notification icons. If an icon is dark or monochrome (making it invisible on the black island background), the system will intelligently tint it white.

### 🛠 System, UX & Bug Fixes

* **New Onboarding Experience**: Completely redesigned the onboarding flow into an 11-page guided setup, making it significantly easier to grant critical permissions, configure engines, and set up island behaviors on your first launch.
* **Direct Boot Support**: The service now supports Direct Boot (`LOCKED_BOOT_COMPLETED`), meaning it starts immediately and reliably after a device restart—even before you unlock your phone for the first time.
* **Widget Enhancements**: 
  * Added a "Favorites" system and "Recommended" filter for the Widget Picker to quickly find island-compatible 1x4 and 2x4 widgets.
  * Added a "Kill Active Widgets" action to instantly dismiss all running overlays.
* **Messaging Fixes**: 
  * Fixed missing sender avatars in apps like Telegram (now accurately extracts `"sender_person"` data).
  * Resolved issues where grouped notifications (chat summaries) failed to trigger the island.
  * Fixed island disappearance bugs caused by notification update race conditions (e.g., rapid progress updates).
* **Navigation 3 Migration**: Fully migrated app routing to AndroidX Navigation 3, resulting in faster, smoother screen transitions and predictive back gesture support.

### 🌍 Localization
* Added full **French** localization.
* Updated strings across Spanish, Traditional Chinese, Italian, Indonesian, Portuguese, Hungarian, and more for all the new features.

### What's Changed
* master by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/126
* Feat/color picker by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/127
* feat(widget): add favorites, recommended filtering, and update notice by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/128
* Feat/live updates by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/129
* build: update project dependencies and gradle configuration by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/134
* Feature/ux iprovement global configuration by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/137
* feat(theme): enhance engine resolution and theme-persistent configuration by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/147
* Feature/nav3 migration by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/152
* Feature/duplication toggle by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/153
* Feature/onboarding screen by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/155
* fix(service): refine progress notification behavior and navigation state by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/157
* feat(boot): add support for Direct Boot by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/159
* refactor(service): refine floating behavior for progress notifications by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/164
* Fix/162 bug crash unable to start service with null by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/165
* Feature/permanent island by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/179
* Beta/0 5 0 by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/190
* Dev by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/193

**Closed & Fixed Issues:**
* #21: [FEAT] Opción para desactivar las notificaciones originales (Closed by @D4vidDf)
* #72: [FEAT] 0.4.0 dev (build 5) FEATURE REQUESTS (Closed by @D4vidDf)
* #94: [FEAT] Display Hyper Island even without any notification. (Closed by @D4vidDf)
* #97: [BUG] Dose not work on Hyper Os 3CN ( Turbo 4 pro) (Closed by @D4vidDf)
* #99: [FEAT] Improved island parameters (Closed by @D4vidDf)
* #107: [FEAT] Move Navigation island design screen (Closed by @D4vidDf)
* #119: Please add Do not Disturb (Closed by @D4vidDf)
* #120: Hyper bridge double notification problem (Closed by @D4vidDf)
* #141: [BUG] Still not working on CN device (Redmi K70 Pro) (Closed by @D4vidDf)
* #146: [BUG] Double notification (Closed by @D4vidDf)
* #156: [BUG] Progress bar/Download can't close notification (Closed by @D4vidDf)
* #158: [BUG] Crash on Phone Boot (Closed by @D4vidDf)
* #162: [BUG] Crash Unable to start service with null on parameter specified as no-null (Closed by @D4vidDf)
* #163: [BUG] Download popup (Closed by @D4vidDf)
* #177: [BUG] No funciona después de la actualización del sistema (Closed by @D4vidDf)

**Full Changelog**: https://github.com/D4vidDf/HyperBridge/compare/v0.4.2...v0.5.0

---

## v0.4.2: Hotfix Update

**Status:** Hotfix Release 🩹

This is a quick hotfix update to address a critical issue introduced in the recent localization update, alongside some under-the-hood improvements.

### 🛠️ Fixes & Improvements
* **Crash Fix:** Resolved a critical `UnknownFormatConversionException` crash that occurred when opening the app configuration menu while the device language was set to Traditional Chinese (Taiwan). 
* **General:** Minor bug fixes and core stability improvements to keep the Island running smoothly.

A huge thank you to the community for reporting the crash so quickly!

**Full Changelog**: https://github.com/D4vidDf/HyperBridge/compare/v0.4.0...v0.4.2

---

## v0.4.0: The Customization Update

**Build Date:** January 22, 2026
**Status:** Stable Release 🌟

> [!TIP]
> This is a major feature update introducing the **Theme Engine**, **Widget Support**, and a complete rewrite of the Notification Core. If you are upgrading from v0.3.x, you may need to re-grant notification permissions or battery optimizations.

---

### ✨ Highlights

### 🎨 The HyperTheme Engine
We have unlocked full customization. You are no longer limited to the default look.
* **Theme Creator:** Design your own Dynamic Island themes directly inside the app with a real-time visual editor.
* **Smart Colors:** Enable `useAppColors` to automatically extract vibrant brand colors from the notification's app icon (e.g., Green for WhatsApp, Blue for Telegram).
* **Icon Shaping:** Customize action buttons with shapes like *Squircle*, *Clover*, *Arch*, *Cookie*, and more.
* **Granular Control:** Configure specific colors for **Calls** (Answer/Decline) and override rules for individual apps.
* **Sharing:** Export your creations as `.hbr` files to share with the community.

### 🧩 Widget Support
Your favorite Android widgets now live in the Dynamic Island.
* **Pin Anywhere:** Access music controls, calendars, or weather widgets from the island layer.
* **Lockscreen Ready:** Widgets remain visible and interactive even on the lockscreen.
* **Dual Modes:** Choose between **Interactive** (real-time, high refresh) or **Snapshot** (battery-efficient) rendering.

> **⚠️ Important:** Widgets containing scrollable lists (e.g., Todo lists, Email streams) **cannot** be rendered in **Interactive Mode** due to system limitations. Please select **Snapshot Mode** for these widgets to display them correctly.

### ⚡ Notification Engine 2.0
The core listening service has been rewritten for maximum stability and performance.
* **Smart Parsing:** Fixed long-standing issues where notifications displayed package names (e.g., `com.whatsapp`) instead of message content.
* **Anti-Flicker:** Implemented content hashing to eliminate UI stuttering during rapid updates (e.g., download progress).
* **Ghost Busters:** Resolved race conditions that caused "ghost islands" to linger after a notification was dismissed.

---

### 🛠️ Improvements & Fixes

* **UI Redesign:** A completely new **"Design"** hub with fluid carousels for managing Themes and Widgets.
* **Privacy:** Added a Global Blocklist to hide specific words or spoilers from appearing on the island.
* **Navigation:** Fixed issues where "Exit Navigation" buttons were missing from the notification shade.
* **Progress Islands:** Fixed rendering issues where download/upload islands would collapse or fail to show action buttons.
* **Database:** Migrated internal storage to Room Database for better reliability and boot persistence.
* **Stability:** Fixed a `NullPointerException` crash when configuring apps via the bottom sheet.

---

### 🌍 Localization
We have moved our translation workflow to **Crowdin**! A massive thank you to everyone who contributed.

👉 **[Help translate HyperBridge on Crowdin](https://crowdin.com/project/hyper-bridge)**

* **New Languages:**
    * 🇮🇩 Indonesian (Bahasa Indonesia)
    * 🇹🇷 Turkish (Türkçe)
    * 🇸🇰 Slovak (Slovenčina)
* **Updated:** 🇧🇷 Portuguese (Brazil), 🇵🇱 Polish, 🇰🇷 Korean, 🇺🇦 Ukrainian, 🇷🇺 Russian, 🇩🇪 German.

---

### 👩‍💻 For Developers
* **Theme API:** Third-party apps (launchers, icon packs) can now apply themes programmatically using the `com.d4viddf.hyperbridge.APPLY_THEME` intent.
* **Documentation:** Check the [Theme Creation Guide](https://github.com/D4vidDf/HyperBridge/discussions/78) to learn how to build `.hbr` packages.

---

### 🤝 Contributors
Special thanks to our new contributors in this cycle:
* @alexkoala (Korean translations)
* @ItzDFPlayer (Ukrainian translations)
* @kilo3528 (Russian & German translations)
* @NIICKTCHUNS & @kacskrz (Continuous localization support)

**Full Changelog**: https://github.com/D4vidDf/HyperBridge/compare/0.3.1...v0.4.0

---

## v0.3.1: Backup & Polyglot Update

### What's Changed
* Added Brazilian Portuguese translation by @NIICKTCHUNS in https://github.com/D4vidDf/HyperBridge/pull/14
* Dev by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/44
* Feature/ru de language by @kilo3528 in https://github.com/D4vidDf/HyperBridge/pull/52
* Feature/ru de language by @kilo3528 in https://github.com/D4vidDf/HyperBridge/pull/54

- **Backup & Restore**: Implemented a complete system to export/import settings, blocklists, and priorities via `.hbr` JSON files.
- **Localization**: Added an in-app Language Selector and support for German (de) and Russian (ru).
- **UI Overhaul**: Updated the entire settings and onboarding experience to **Material 3 Expressive** design (Large Top Bars, increased roundness, surface colors).
- **Onboarding**: Added a Privacy Page explaining offline architecture and improved HyperOS 3.0 compatibility checks.
- **Fixes**: Resolved Navigation "Exit" button rendering as an icon instead of text, and fixed App Icon loading in the Settings screen.
- **Changelog**: Updated release notes for v0.3.1.

### New Contributors
* @kilo3528 made their first contribution in https://github.com/D4vidDf/HyperBridge/pull/52

**Full Changelog**: https://github.com/D4vidDf/HyperBridge/compare/0.3.0...0.3.1

---

## v0.3.0: The Global Update

### What's Changed
* Added Polish translation by @kacskrz in https://github.com/D4vidDf/HyperBridge/pull/10
* Add Brazilian Portuguese translation (#14) by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/16
* feat(nav): add layout customization and fix text alignment by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/18
* Add Brazilian Portuguese translation (#14) by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/22
* feat(a11y): improve TalkBack support and semantic navigation by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/24
* fix(service): ignore notifications showing package name as content by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/28
* fix(deps): downgrade DataStore to resolve boot persistence issues by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/29
* Updating PTBR translation by @NIICKTCHUNS in https://github.com/D4vidDf/HyperBridge/pull/30
* Added Korean translation by @alexkoala in https://github.com/D4vidDf/HyperBridge/pull/26
* fix(service): ignore placeholder notifications containing package name by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/31
* feat(blocklist): add spoiler and privacy protection and redesign conf… by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/32
* Add Ukrainian translation by @ItzDFPlayer in https://github.com/D4vidDf/HyperBridge/pull/37
* feat(data): migrate preference storage from DataStore to Room by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/43

### New Contributors
* @kacskrz made their first contribution in https://github.com/D4vidDf/HyperBridge/pull/10
* @alexkoala made their first contribution in https://github.com/D4vidDf/HyperBridge/pull/26
* @ItzDFPlayer made their first contribution in https://github.com/D4vidDf/HyperBridge/pull/37

**Full Changelog**: https://github.com/D4vidDf/HyperBridge/compare/0.2.0...0.3.0

---

## v0.2.0: The Information Update

### What's Changed
* feat: v0.2.0 Information Update - System Events, Config & Visuals by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/2


**Full Changelog**: https://github.com/D4vidDf/HyperBridge/compare/0.1.0...0.2.0

---

## v0.1.0: The Expressive Update

### What's Changed
* feat(ui): Material 3 Expressive overhaul, new navigation & localization by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/1

**Full Changelog**: https://github.com/D4vidDf/HyperBridge/commits/0.1.0

