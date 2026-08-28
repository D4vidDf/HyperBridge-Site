---
title: "Changelog"
description: "Release history and updates for HyperBridge (Čeština)."
showTableOfContents: true
---

Follow the latest updates, features, and release history for **HyperBridge**.


---

## v0.5.7: Performance & Sync Update `Latest` *(English)*

**Optimizations & Fixes**

- **Code Optimization:** Upgraded to the latest Android Gradle Plugin and enabled R8 code shrinking for a smaller, faster app.

- **Stability:** Improved notification synchronization and fixed an issue where original notifications were sometimes prematurely dismissed (PR #258).

---

## v0.5.6: Landscape Hide & Stability Fixes *(English)*

**Fixes & Improvements**

- **System UI Stability:** Validated highlightColor before passing to SystemUI to prevent crashes.

- **Permanent Island Behavior:** Fixed an issue where the permanent island disappeared after notifications or unlock.

- **Landscape Mode:** Added an option to hide the Permanent Island in landscape orientation.

---

## v0.5.5: Messaging & Update Fixes *(English)*

**Live Updates & Islands**

- **Icons:** Fixed an issue where the original app icon wouldn't display properly on Android 16 Live Updates.

- **Inline Replies:** You can now use inline replies directly from Live Update notifications.

- **Island Removal:** Fixed an issue where islands were not being properly removed when dismissed.


**Messaging Grouping Overhaul**

- **Deduplication:** Completely reworked how messaging-style notifications (like WhatsApp) are grouped to prevent duplicated islands.


**Fixes & Stability**

- **Update Migration:** Fixed a critical bug where updating the app wouldn't trigger the proper database migration logic.

- **Defaults:** Disabled "Show in shade" by default on the onboarding screen.

- **Localization:** Resolved broken characters in translated strings.

---

## v0.5.2: Performance & Stability Update

**Play Store Crash Fixes & Stability**

? **Theme Creator:** Fixed a crash when parsing large sets of custom assets.

? **Performance:** Resolved an ANR (Application Not Responding) issue on the initial Welcome Screen.

? **Widget Picker:** Eliminated crashes and Out-Of-Memory (OOM) errors caused by extremely large widget previews.

? **UI Layouts:** Fixed Jetpack Compose layout constraint exceptions that crashed the app when resizing certain menus.

? **Backups:** Resolved OOM errors when importing large backup files by optimizing JSON parsing.

? **Warm Starts:** Significantly improved app launch speeds and eliminated UI thread blocking on mid-range devices.

? **Background Service:** Completely overhauled the Notification Listener memory architecture, dropping background overhead to 0% and improving battery life.

---

## v0.5.1: Fixes & Refinements

**Fixes & Stability**

WhatsApp Duplicates Fixed: Resolved an issue that caused duplicate WhatsApp notifications to appear.

Notification Flicker & Crashes Fixed: Fixed a crash caused by receiving multiple notifications in a short timeframe. The app now safely updates notifications normally, eliminating the notification flicker and improving stability.

Notification Intents Restored: Fixed an issue where clicking a featured notification would incorrectly route to the troubleshooting screen instead of the original app.


**Features & Polish**

Remove Island on Dismiss: Added a new option to automatically remove the island if the original system notification is dismissed.

Featured Notifications Diagnostics: Added a new check screen during Onboarding to verify if your Xiaomi device supports Featured Notifications and if the required permissions are enabled.

Setup Health Integration: The Featured Notifications permission status is now continuously monitored and displayed inside the Setup Health screen.

Troubleshooting Screen: Added a dedicated Troubleshooting Screen that guides users on how to enable the necessary hidden system permissions (or use Shizuku) to get islands working on strict Xiaomi ROMs.

Clearer Terminology: Renamed the "Live Updates" section in the settings menu to "Notification Management" to better reflect its purpose.

Settings UI Polish: Restored the missing rounded corners on the "Permanent Island" option in the Global Settings list.

Spanish Translations: Added full Spanish translations for all the new troubleshooting dialogues, setup health checks, and notification management settings.

---

## v0.5.0: The Live Update

**CN ROM Support**

- Enable the new Sui & Shizuku workaround to enjoy the Hyper Islands in your devices running HyperOS CN (Chinese) ROMs without native support.


**Theme Engine Improvements**

- Engine Selection: You can now choose animation engines per-app or globally.

- Shizuku Workaround: Toggle added directly to the Theme Editor Engine tab.

- Behavior Controls: Custom timeouts and popup logic are now fully supported.


**Intelligent Permanent Island**

- Always Visible: Keep the island on screen even without active notifications.

- Auto-Hide: The permanent island now automatically hides itself whenever an active widget is shown on the screen.


**Smart Icon Tinting**

- New detection system automatically analyzes extracted notification icons and intelligently tints them white if they are dark or monochrome.


**Downloads & Progress**

- New Dedicated Download Layout: Separated download and progress layouts with dedicated visual designs.

- Text Progress Support: Parsed percentage text (e.g. "12%") for app updates even without native progress bars.

- Smart Filtering: Restricted text-based progress checking to store and installer downloads to prevent false triggers on other status notifications.


**Messaging Fixes**

- Fixed missing sender avatars in apps like Telegram (now correctly extracts "sender_person" data).

- Resolved issues with grouped notifications (chat summaries) not triggering islands.

- Fixed island disappearance bugs caused by notification update race conditions.


**System & Onboarding**

- New Onboarding Screen: A brand new and easier setup process for critical permissions.

- Boot Fix: Service now starts immediately and reliably after restart.

- Smarter Alerts: Downloads and Media update silently, while messaging updates reliably trigger popup animations.

- Navigation: Faster and smoother app transitions.

---

## v0.4.2: Hotfix Update

- **Crash Fix:** Resolved a critical issue that caused the app to crash when opening the settings menu in Traditional Chinese.

- **Under the Hood:** General bug fixes and stability improvements to keep your Island running smoothly.

---

## v0.4.0: The Customization Update

**Theme Engine 🎨**

The biggest update yet! You can now fully customize the Dynamic Island visual experience.

- **Theme Creator:** Design themes directly on your phone with real-time previews.

- **Granular Control:** Choose exactly how icons are shown, customize call notification colors and shapes, and configure individual app overrides.

- **Smart Colors:** Automatically extract vibrant brand colors from app icons.

- **Per-Action Customization (Beta):** Fine-tune the look of specific notification actions.

- **Sharing:** Export and import themes as portable <i>.hbr</i> packages.



**Widget Support 🧩**

Pin standard Android widgets to the island for quick access—even on your **Lockscreen**!

- Choose between **Interactive** mode for speed or **Snapshot** mode for battery efficiency.



**Notification Engine 2.0 ⚡**

A complete rewrite of the core logic for better stability:

- **Smarter Parsing:** Fixed issues where notifications showed package names (e.g., com.whatsapp) instead of message content.

- **Anti-Flicker:** New content hashing prevents redundant updates and stuttering.

- **Ghost Fixes:** Solved race conditions where islands lingered after dismissal.



**Visual Refresh ✨**

- Redesigned "Design" tab with fluid, native-feeling carousels.

- New "Text Pill" buttons for clearer notification actions.

- Added support for 🇮🇩 Indonesian and 🇹🇷 Turkish.



<i>Note: This release includes significant architectural changes. Please report any bugs on GitHub!</i>

---

## v0.3.1: Backup & Polyglot Update

**Backup & Restore 📦**

New power-user feature! Securely export your settings, blocklists, and app priorities to a .hbr file and restore them anytime.


**New Languages 🌍**

Added support for:

- 🇩🇪 German

- 🇷🇺 Russian

- 🇺🇦 Ukrainian (Improved)

<i>Plus: A new in-app Language Selector to change languages without affecting your system settings.</i>


**Visual Refresh 🎨**

The app has been updated with **Material 3 Expressive** design. Enjoy larger headers, rounder shapes, and a smoother experience.


**Privacy & Setup 🛡️**

- Improved Onboarding with a dedicated Privacy page clarifying offline-first architecture.

- Stricter compatibility checks to ensure the best experience on HyperOS 3.0.


**Fixes 🛠️**

- Fixed a critical issue where settings were lost after device reboot (migrated to database).

- Fixed "Exit" button in Navigation island showing as an icon instead of text.

- Fixed App Icon loading in Settings.

---

## v0.3.0: The Global Update

**Hidden Notification 👻**

New option to hide notifications from the system panel while keeping the Island active. Check Global Settings!


**New Languages 🌍**

Special thanks to our community for these translations:

- 🇧🇷 Portuguese (Brazil)

- 🇵🇱 Polish

- 🇰🇷 Korean


- 🇺🇦 Ukranian


**Navigation Customization 🧭**

You can now choose what information appears on the Left and Right sides of the Navigation Island (Distance, ETA, Instruction).


**Spoiler Protection 🛡️**

New "Blocked Terms" feature. Define words globally or per-app to prevent specific notifications from showing up on the Island.


**Call Improvements 📞**

Improved detection logic to support a wider range of VoIP and Dialer applications.


**Fixes & Improvements 🛠️**

- Fixed a critical bug where the app would get stuck loading after a reboot.

- Fixed notifications sometimes showing raw package names (e.g. "com.google...") instead of content.

- Redesigned App Configuration sheet for better usability.

- Improved Compatibility Check screen with detailed device info.

---

## v0.2.0: The Information Update

- **Advanced Progress:** Added support for "Step Progress" (e.g. 1 of 3) and progress bars with icons inside the notification shade.

- **Priority System:** New "Island Behavior" settings. Choose between "Most Recent", "First Come", or a custom "App Priority" list.

- **Smart Filtering:** Improved detection of duplicate notifications and grouped downloads.

- **Visual Improvements:** Fixed layout issues with Navigation instructions.

- **Per-App Config:** Customize Timeout and Floating behavior per app.

---

## v0.1.0: The Expressive Update

- **Major UI Overhaul:** New Material 3 Expressive design with smooth animations.

- **Better Island:** Text now appears on the right side. Added Green Tick for finished downloads.

- **Per-App Config:** Select specific notification types (Music, Maps, Calls) per app.

- **Smart Filters:** Blocks duplicate notifications and saves battery.

- **New Library:** Filter apps by category and sort order.

- **Localization:** Added Spanish support.
