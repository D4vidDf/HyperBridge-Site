---
title: "Changelog"
description: "Release history and updates for HyperBridge (한국어)."
showTableOfContents: true
---

Follow the latest updates, features, and release history for **HyperBridge**.


---

## HyperBridge v0.6.0-beta1 🚀

Welcome to **HyperBridge v0.6.0-beta1**! This milestone release marks the arrival of the all-new **Custom Translators Framework (`.htrans`)**, powerful **RAW_PARAM_V2 presentation modes**, built-in **Visual Translator Editor**, **System Update Islands**, and key stability fixes for Android 15 & 16.

---

{{< alert icon="triangle-exclamation" >}}
### ⚠️ Beta Notice: Custom Translators & Full Engine Rework
This release includes a **complete architectural rework of our translation engine** and the very first public implementation of the Custom Translators system. 

Because this is a major transition:
- Some advanced features, custom edge-case layouts, or specific token interpolations may still behave unexpectedly or contain bugs.
- Certain legacy behaviors or templates may require minor adjustments.

**We need your feedback!** If you encounter any bugs, crashes, broken presentations, or missing features, please let us know by [opening a GitHub Issue](https://github.com/D4vidDf/HyperBridge/issues/new/choose) or posting in our [Discussions](https://github.com/D4vidDf/HyperBridge/discussions). Your reports directly help us stabilize the engine for the final 0.6.0 release.
{{< /alert >}}

---

### 🌟 Highlights & Major Features

#### 🧩 Custom Translators Framework (`.htrans`)
Take total control over how any app's notifications render on Xiaomi HyperOS Super Island. Define custom matching rules, regex extractions, variable tokens, dynamic actions, and theme bindings without waiting for app updates.
- **Import, Export & Share**: Seamlessly package `.htrans` or `.htrans.zip` packages with embedded artwork and share them across devices via Storage Access Framework (SAF).
- **Built-in Visual Editor**: Build and test translators directly inside the HyperBridge app.

📖 **Learn more in our documentation:**
- [Custom Translators Overview](https://hyper-bridge.app/docs/customization/custom-translators/)
- [Translators Specification & Schema Reference](https://hyper-bridge.app/docs/customization/translators-specification/)
- [Theme Creator & Bundling Guide](https://hyper-bridge.app/docs/customization/theme-creator/)

---

#### ⚡ Advanced Custom Translations: `RAW_PARAM_V2` Mode
For advanced creators, the new `RAW_PARAM_V2` presentation mode lets you bypass standard layout constraints and write pure HyperOS Super Island JSON contracts with dynamic token interpolation (`{notif.title}`, `{media.artist}`, `{var.custom}`, `{pic.key}`).
- **Dynamic Elements**: Full support for `coverInfo`, `progressInfo`, `chatInfo`, `baseInfo`, and `bgInfo` (color & picture background).
- **Dual Island Layouts**: Full custom configurations for both `smallIslandArea` and `bigIslandArea` (`imageTextInfoLeft` / `imageTextInfoRight`).
- **Dynamic Variables & Actions**: Extract progress percentages, live timestamps (`startText`/`endText`), and map custom intents or smart actions on the fly.

🔗 **Official Xiaomi Specifications & Guides:**
- [Official Xiaomi HyperOS Focus Notification & Island Parameters Guide](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131)
- [Official Xiaomi Super Island Template Library Specification (PDF)](https://mag-admin.cnbj1.mi-fds.com/mag-admin/island/%E5%B0%8F%E7%B1%B3%E8%B6%85%E7%BA%A7%E5%B2%9B%E6%A8%A1%E6%9D%BF%E5%BA%9320260129.pdf?GalaxyAccessKeyId=5151729087601&Expires=9223372036854775807&Signature=BAXCOHXbEjDgaKSfEnU3UScw4KQ%3D)

---

#### 🔄 System Update Island Integration
HyperBridge now brings a native-like experience to Xiaomi System Updates:
- Track download and install progress directly on the Super Island.
- Dedicated customization and timeout settings within the app.

---

### 🐛 Fixes & Improvements

- **Android 15+ Message Interaction**: Fixed an issue where tapping a messaging island did not open the target application.
- **Android 16+ Island Grouping**: Fixed force-grouping behavior so bridged islands are only grouped where Android 16+ grouping APIs exist.
- **Summary Island Clean-up**: Fixed an issue where the island group summary lingered after all individual islands were dismissed.
- **CI / Quality Gating**: Added GitHub Actions workflow for automated PR test verification and APK artifact generation.

---

### 📋 What's Changed

* ci: add GitHub Actions workflow for PR test gating and debug APK artifact (#349) by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/352
* feat: add system update island integration and customization settings by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/365
* fix: only group bridged islands on Android 16+, where force grouping exists (#358) by @noelpatata in https://github.com/D4vidDf/HyperBridge/pull/368
* feat(translators): Custom Translators Framework (.htrans), Visual Editor, Dynamic Engine, Theme Bundling & SAF Sharing (#271) by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/353
* feat: add RAW_PARAM_V2 presentation mode with custom variables and actions by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/369
* fix: message island tap opens the app again on Android 15+ (#359) by @noelpatata in https://github.com/D4vidDf/HyperBridge/pull/366
* fix: drop the island group summary once no island is left (#372) by @noelpatata in https://github.com/D4vidDf/HyperBridge/pull/373

**Full Changelog**: https://github.com/D4vidDf/HyperBridge/compare/v0.6.0-dev4...v0.6.0-beta1

---

## Hyper Bridge v0.6.0-dev2

Hyper Bridge **v0.6.0-dev2** is the second development release of the v0.6.0 cycle!

This milestone introduces contextual **Smart Action Buttons** (one-tap OTP copy, URL opening, dialing, parcel tracking, and directions), resolves critical permanent island yielding and auto-hide TTL behaviors, enhances the real-time **Diagnostics engine**, overhauls settings navigation and M3 Expressive UI layouts, repairs multi-language character encodings, and brings a redesigned **Featured Notification Warning Banner**.

---

### ⚡ Context-Aware Smart Action Buttons

* **One-Tap OTP Copy**: Automatically detects one-time passwords and SMS verification codes from incoming message notifications and renders a dedicated copy button directly on the island.
* **Open Links & Dial Numbers**: Intelligent pattern detection extracts URLs and telephone numbers from notification bodies, letting you open links or start phone calls with a single tap.
* **Track Parcels**: Automatically recognizes carrier package tracking numbers and enables instant shipment lookups.
* **Turn-by-Turn Directions**: Identifies shared map links (Google Maps, etc.) and street addresses in message text, offering an immediate **Directions** action button.
* **M3 Expressive App Exclusion Picker**: Choose exactly which apps should or shouldn't generate Smart Actions via a redesigned Material 3 Expressive bottom sheet with instant search and filter controls.

#### ⚙️ How to Enable Smart Actions
* **Globally**: Navigate to **Settings** → **Global Settings** → toggle **Smart Actions** on.
* **Per-App**: Open any application in the app list (Active Apps or Library) → **Island Behavior** → customize or override Smart Action buttons specifically for that app.

---

### 🏝️ Island Lifecycle & Timing Fixes

* **Permanent Island Yielding Overhaul**: Fixed an issue where the Permanent Island remained hidden indefinitely behind long-lived native focus or media notifications ([#255](https://github.com/D4vidDf/HyperBridge/issues/255)). It now yields to native islands only momentarily on new events before gracefully restoring.
* **Accurate Auto-Hide TTL**: Message and standard islands now strictly honor the user-configured Auto-Hide timeout (TTL) ([#278](https://github.com/D4vidDf/HyperBridge/issues/278)), ensuring stale islands dismiss reliably and never remain stuck on screen.

---

### 🩺 Enhanced Diagnostics & Observability

* **Silent Drop Tracking**: The Diagnostics event feed now records silent drops along with exact classification reasons (e.g. blocked keywords, DND, group summaries, or rate limits).
* **System Removals & Spawns**: Real-time event auditing for island additions, updates, and dismissals, giving users and developers clear transparency into notification pipeline decisions.

---

### 🎨 Settings Refinement & Material 3 Expressive UI

* **Streamlined Settings Hierarchy**: Global Settings is now front-and-center as the primary entry point, with descriptive subtitles outlining island behavior, engine selection, inline replies, and smart actions.
* **Guides & Help Reorganization**: Moved system setup and permission walkthroughs into a consolidated "Guides and help" section for cleaner navigation.
* **Redesigned Featured Notification Banner**: Replaced intrusive dialogs/banners with an expressive `FeaturedNotificationWarningBanner` located cleanly beneath the top app bar exclusively on the Active Apps page, complete with an expandable detail dialog.
* **Consistent Component Padding**: Standardized card margins, toggle alignments, and content-to-action spacing across all configuration subscreens.

---

### 🌍 Translations & Encoding Repairs

* **Mojibake / Character Encoding Repair**: Fixed corrupted special characters across community translations (Russian, Ukrainian, Polish, French, Hungarian, Indonesian, etc.) ([#309](https://github.com/D4vidDf/HyperBridge/issues/309)) and integrated automated sanitization tooling.
* **Spanish Localizations & Credits**: Added full Spanish translations (`values-es-rES` and `values-es-rEM`) for call stages and new settings strings, alongside community credits for System Islands & Enhancements.

---

### What's Changed
* feat: Smart Action buttons — OTP copy, open link, dial, track parcel (#270, Phase 2) by @noelpatata2 in https://github.com/D4vidDf/HyperBridge/pull/303
* fix: permanent island no longer stays hidden behind long-lived media/focus notifications (#255) by @noelpatata2 in https://github.com/D4vidDf/HyperBridge/pull/304
* feat(diagnostics): record silent drops, new islands and system removals by @noelpatata2 in https://github.com/D4vidDf/HyperBridge/pull/308
* fix(i18n): restore broken special characters across translations and preserve community updates (#309) by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/311
* fix: island TTL for message/standard islands now follows Auto-hide (#278) by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/312
* update dev branch by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/313
* feat(settings): add System Islands & Enhancements credit and update Spanish localizations by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/314
* refactor(ui): overhaul settings screens layout, navigation customization, and smart action app picker by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/315
* feat(ui): introduce `FeaturedNotificationWarningBanner` and move warning UI to `ActiveAppsPage` by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/317
* feat(smart-actions): Directions button for shared map links (#270) by @noelpatata2 in https://github.com/D4vidDf/HyperBridge/pull/316
* feat(smart-actions): Directions button for street addresses (#270) by @noelpatata2 in https://github.com/D4vidDf/HyperBridge/pull/318

**Full Changelog**: https://github.com/D4vidDf/HyperBridge/compare/v0.6.0-dev1...v0.6.0-dev2

---

## Hyper Bridge v0.6.0-dev1

Hyper Bridge **v0.6.0-dev1** is the first development release of the v0.6.0 cycle! 

This release introduces native system islands for Screen Recording and VPN, overhauls the core notification lifecycle for zero-latency performance, integrates messaging deduplication and call state machines, adds step-by-step floating notification setup guidance, connects to the new web documentation & changelog platform, brings brand-new dedicated **Diagnostics** and **Bug Report** screens, and completely redesigns the per-app configuration experience with dedicated subscreens and integrated Island Widget management.

---

### 📱 Redesigned App Configuration Screen & Subscreens

* **Full-Screen Workspace Migration**: Migrated away from cramped modal bottom sheets on the Active Apps and Library tabs to a dedicated full-screen `AppConfigScreen` with complete gesture and hardware back-stack support.
* **Expressive Card Grouping**: Replaced cluttered inline accordion dropdowns with 3 distinct connected card groups using variable-corner shapes inspired by the Theme Creator:
  1. *Core Behavior & Filters* (Active Notification Types, Island Behavior, Blocked Terms).
  2. *Island Widgets* (Per-app widget management).
  3. *Future Extensions* (Custom Design & Custom Translators with prominent **"COMING SOON"** badges).
* **Dedicated Subscreen Navigation**: Smooth horizontal animated transitions into dedicated subscreen containers (`SubscreenScaffold`), complete with tonal back buttons matching the `InfoScreen` design.
* **Streamlined Island Behavior**: "Use Global Defaults" is now the top-level option; tweaking any slider or toggle seamlessly converts settings into custom overrides, while re-enabling global defaults instantly clears overrides back to defaults.
* **Blocked Terms Vertical List**: Blocked keywords are now organized in clean, separate containers featuring an input box card on top and an expressive vertical list below with one-tap removal.
* **Future Extension Previews**: Added dedicated placeholder subscreens for upcoming community Custom Designs and Custom Translators with direct links to track progress on GitHub.

---

### 🧩 Unified Island Widgets Management

* **Reusable App-Filtered Widget Picker**: Clicking "Add Widget" in the app configuration screen opens the unified `WidgetPickerScreen` automatically filtered to providers from that specific application, auto-expanding its widget list and adapting the title to "Select Widget".
* **Live Configuration & Editing**: Selecting any widget immediately transitions into `WidgetConfigScreen` to configure custom sizes, render modes, timeouts, and shade overlays. Configured widgets in the app list can also be tapped directly or edited via an edit icon button.
* **Adaptive Live Previews**: Widget previews in the list dynamically scale their container height to match the configured `WidgetSize` (`SMALL`, `MEDIUM`, `LARGE`, `XLARGE`, `ORIGINAL`), with proper measure and layout constraints for crisp rendering.
* **Floating Action Button**: Moved the "Add Widget" trigger to a prominent `FloatingActionButton` with comfortable bottom scroll padding.

---

### 🌐 New Documentation Website & Offloaded Changelogs
* **Dedicated Docs Platform**: We have launched our official documentation website! Complete changelogs, setup guides, and technical explanations have moved to the web to keep the app lightweight and documentation easily searchable.
* **Direct In-App Navigation**: The Info screen now links directly to the online documentation and release notes, ensuring you always have access to the latest guides and version history.

---

### 🔍 New Diagnostics & Bug Report Screens

#### 🩺 Real-Time Diagnostics Screen
* **Subsystem Health Checks**: Live status indicators for Notification Listener Service connection, `POST_NOTIFICATIONS` permission, HyperOS Island hardware support, and Featured Notification permissions.
* **Live System Metrics**: Instant visibility into active island counts, active widget tracking, and selected allowed apps.
* **Rolling Sanitized Event Log**: An in-app diagnostic log viewer showing recent notification events and translation statuses in real-time, making it effortless to see why a particular notification did or didn't become an island.
* **Material 3 Expressive Design**: Clean card-based layout with full Compose preview support for faster development and inspection.

#### 🐛 Streamlined Bug Report Screen
* **Automated System Profiling**: Gathers device model, Android version, HyperOS build, active settings, and bridge status automatically.
* **Privacy-Sanitized Exports**: Sensitive text, notification content, and personal information are automatically scrubbed and redacted.
* **One-Tap GitHub Ready Formatting**: Formats your issue into a structured, clean Markdown template and copies it directly to your clipboard so you can paste it straight into GitHub Issues.

---

### 🚀 Key Highlights & New System Islands

#### 🎥 Native Xiaomi Screen Recording System Island
* **Live Recording Ticker**: Dynamic island ticker displaying active recording duration in real time.
* **Direct IPC Controls**: Full interaction with Xiaomi’s screen recorder service (`com.miui.screenrecorder`) via IPC to pause, resume, and stop recordings directly from the island.
* **Saved Completion Banner**: Quick-access summary and preview banner with action handlers when a screen recording finishes saving.
* **Dedicated Settings**: Custom configuration screen to adjust screen recording island behavior.

#### 🛡️ VPN Connectivity & System Island
* **System-Level Observer**: Monitors VPN network capabilities (`TRANSPORT_VPN`) natively without needing root or Shizuku.
* **Known Provider Adapters**: Out-of-the-box support for popular VPN providers (WireGuard, OpenVPN, Cloudflare 1.1.1.1 WARP, ProtonVPN, Tailscale, Mullvad, and more).
* **Active Status & Disconnect**: Displays live connected duration, country flag resolution, and offers a one-tap disconnect button right from the island.
* **System Integrations Tab**: Conveniently manage VPN and system island toggles separate from regular apps.

---

### ⚡ Performance & Core Lifecycle Overhaul

* **Zero-Latency In-Memory Dispatch**: Moved preference lookups on the hot notification path to cached in-memory state flows, eliminating SQLite/DataStore I/O bottlenecks.
* **Generation Gating (`SourceProcessingGeneration`)**: Automatically supersedes outdated translation jobs during rapid notification updates.
* **Expiry Registry (`ExpiredIslandRegistry`)**: Tracks expired notification state to eliminate ghost islands, resurrecting dismissed notifications, and visual flicker.
* **`IslandUpdateResolver`**: Reconciles incoming changes against existing active islands, updating state smoothly in-place.

---

### 💬 Messaging & Call Enhancements

* **Presentation Family Tracking**: Correlates group summaries and per-conversation child notifications across apps like WhatsApp, Telegram, and Signal.
* **Fingerprint Deduplication**: Identifies and suppresses duplicate notification popups during rapid message bursts ("chat storms").
* **Call Lifecycle State Machine**: Classifies and manages Incoming, Ongoing, Held, and Ending call states with dedicated microphone live/muted indicators.

---

### 🎨 UI & Setup Guidance

* **Floating Notification Setup**: Step-by-step guidance to disable Xiaomi's native floating heads-up notifications per app to avoid visual duplication over islands.
* **System Integrations Section**: Separates built-in system modules (Screen Recording, VPN) from standard third-party apps for clearer management.

---

### 🛠️ Stability & Framework Fixes

* **SecurityException Guard**: Safely guarded calls to `NotificationListenerService.activeNotifications` before the listener service connects or after disconnection.
* **Safe Intent Dispatch**: Guarded against null or canceled `PendingIntent` executions.
* **Unit Test Coverage**: Comprehensive suite of **243 passing unit tests** covering all reducers, trackers, and translation policies.

---

### 💖 Community & Credits
Special thanks to **[Sykeptical](https://github.com/sykeptical)** for their foundational contributions to Screen Recording controls, messaging deduplication, call state handling, and VPN integration originally developed in their fork and integrated into HyperBridge v0.6.0.

---

### What's Changed
* l10n: Update Korean translation by @alexkoala in https://github.com/D4vidDf/HyperBridge/pull/276
* feat(i18n): add comprehensive Arabic language translation by @solom185 in https://github.com/D4vidDf/HyperBridge/pull/280
* chore: bump version to 0.6.0-dev1 and migrate changelogs to web docum… by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/281
* Epic/283 epic port integrate features and enhancements from sykeptical fork into hyper bridge v060 by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/300
* Feature/app config screen by @D4vidDf in https://github.com/D4vidDf/HyperBridge/pull/301

### New Contributors
* @solom185 made their first contribution in https://github.com/D4vidDf/HyperBridge/pull/280

**Full Changelog**: https://github.com/D4vidDf/HyperBridge/compare/v0.5.7...v0.6.0-dev1

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

## v0.3.1: 백업 & 다국어 업데이트

**백업 & 복원 📦**

고급 사용자 기능 추가! 설정, 차단 목록, 앱 우선순위를 .hbr 파일로 안전하게 내보내고 언제든지 복원할 수 있습니다.


**새로운 언어 🌍**

다음 언어가 추가되었습니다:

- 🇩🇪 독일어

- 🇷🇺 러시아어

- 🇺🇦 우크라이나어 (개선됨)

<i>또한: 시스템 언어에 영향을 주지 않고 앱 내에서 바로 변경할 수 있는 새로운 언어 선택기가 추가되었습니다.</i>


**시각적 업데이트 🎨**

앱이 Material 3 Expressive 디자인으로 새로워졌습니다. 더 큰 헤더, 더 둥근 형태, 더 부드러운 사용자 경험을 제공합니다.


**프라이버시 & 설정 🛡️**

- 오프라인 우선 구조를 설명하는 전용 프라이버시 페이지가 포함된 온보딩 개선.

- HyperOS 3.0에서 최고의 경험을 제공하기 위한 더욱 엄격한 호환성 검사.


**버그 수정 🛠️**

- 기기 재부팅 후 설정이 사라지는 치명적 오류 수정(데이터베이스로 마이그레이션됨).

- Navigation Island에서 “종료” 버튼이 아이콘으로 표시되던 문제 수정 — 이제 텍스트로 표시됩니다.

- 설정에서 앱 아이콘 로딩 문제 수정.

---

## v0.3.0: The Hidden 업데이트

- **숨겨진 알림 👻:** 알림 패널에는 숨기고, 아일랜드에서는 계속 표시되도록 하는 새로운 옵션이 추가되었습니다. 전역 설정에서 확인하세요.

- **새로운 언어 🌍:** 커뮤니티 번역에 감사드립니다:

- 🇧🇷 포르투갈어(브라질)

- 🇵🇱 폴란드어

- 🇰🇷 한국어

- 🇺🇦 우크라이나어

- **내비게이션 설정 🧭:** 거리, 도착 시간, 안내 등 어떤 정보를 좌/우에 표시할지 선택할 수 있습니다.

- **스포일러 방지 🛡️:** “차단된 단어” 기능을 통해 특정 단어가 포함된 알림이 아일랜드에 표시되지 않도록 전역 또는 앱별로 설정할 수 있습니다.

- **통화 개선 📞:** 더 다양한 VoIP 및 전화 앱을 정확하게 감지하도록 로직을 개선했습니다.

- **수정 및 개선 🛠️:**

- 재부팅 후 앱이 로딩에서 멈추는 치명적 버그 수정

- 알림 내용 대신 패키지명이 표시되던 문제 수정

- 앱 구성 패널 디자인 개선

- 기기 정보를 포함한 호환성 검사 화면 개선

---

## v0.2.0: The Information 업데이트

- **고급 진행률 표시줄:** "단계별 진행"(예: 1/3) 및 알림창 내 아이콘이 포함된 진행률 표시줄 지원이 추가되었습니다.

- **우선순위 시스템:** 새로운 "아일랜드 동작" 설정. "최신순", "선착순", 또는 사용자 지정 "앱 우선순위" 목록 중에서 선택하세요.

- **스마트 필터링:** 중복 알림 및 그룹화된 다운로드 감지 기능이 개선되었습니다.

- **시각적 개선:** 내비게이션 안내의 레이아웃 문제를 수정했습니다.

- **앱별 구성:** 앱별로 시간 제한 및 플로팅 동작을 사용자가 지정할 수 있습니다.

---

## v0.1.0: The Expressive 업데이트

- **주요 UI 개편:** 부드러운 애니메이션이 적용된 새로운 Material 3 Expressive 디자인.

- **향상된 아일랜드:** 이제 텍스트가 오른쪽에 표시됩니다. 완료된 다운로드에 녹색 체크 표시가 추가되었습니다.

- **앱별 구성:** 앱별로 특정 알림 유형(음악, 지도, 통화)을 선택할 수 있습니다.

- **스마트 필터:** 중복 알림을 차단하고 배터리를 절약합니다.

- **새로운 라이브러리:** 카테고리별로 앱을 필터링하고 정렬 순서를 변경할 수 있습니다.

- **현지화:** 스페인어 지원이 추가되었습니다.
