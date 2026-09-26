---
title: "Changelog"
description: "Release history and updates for HyperBridge (繁體中文)."
showTableOfContents: true
---

Follow the latest updates, features, and release history for **HyperBridge**.


---

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
- [Translators Specification & Schema Reference](https://hyper-bridge.app/docs/advanced/translators-specification/)
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

## v0.5.1: 修復 & 改進

**修復 & 穩定**

WhatsApp 重複通知修復：解決了 WhatsApp 通知重複出現的問題。

通知閃爍 & 崩潰修復：修復了短時間內收到多個通知導致的崩潰問題。應用程式現在可以安全地正常更新通知，消除了通知閃爍並提高了穩定性。

通知 Intent 恢復：修正了點擊精選通知時會錯誤地跳到故障排除畫面而不是原始應用程式的問題。


**功能 & 最佳化**

關閉通知時移除超級島通知：新增選項，當系統通知關閉時，超級島通知將自動移除。

精選通知診斷：在引導過程中新增檢查介面，用於驗證您的小米設備是否支援精選通知以及是否已啟用所需權限。

設定健康整合：精選通知的權限狀態現在會持續監控並顯示在設定健康介面中。

故障排除介面：新增專門的故障排除介面，引導使用者啟用必要的隱藏系統權限（或使用Shizuku），以使超級島通知在嚴格的小米 ROM 上正常運作。

更清晰的術語：將設定選單中的“即時更新”部分重新命名為“通知管理”，以更好地體現其用途。

設定介面最​​佳化：恢復了預設設定清單中「永久通知島」選項的圓角效果。

西班牙文翻譯：為所有新增的故障排除對話方塊、設定健康檢查和通知管理設定新增了完整的西班牙文翻譯

---

## v0.5.0: 即時更新

** 中國版ROM 支援 **

- 啟用新的 Sui & Shizuku 變通方案，即可在執行 HyperOS 中國版ROM 且不支援原生功能的裝置上體驗小米超級島。


**主題引擎改善**

- 引擎選擇：現在您可以為每個應用程式或預設選擇動畫引擎。

- Shizuku 變通方案：已將切換開關直接新增至主題編輯器的引擎標籤。

- 行為控制：現在完全支援自訂逾時和彈出邏輯。


**智慧永久島**

- 隨時可見：即使沒有活動通知，超級島也會保持在螢幕上。

- 自動隱藏：現在，當螢幕上顯示小工具時，永久島會自動隱藏。


**智慧型圖示著色**

- 新的檢測系統會自動分析提取通知圖標，如果圖標是深色或單色的，則會聰明地將其著色為白色。


**下載 &進度**

- 全新專用下載佈局：獨立的下載和進度佈局，採用專屬視覺設計。

- 文字進度支援：即使沒有原生進度條，也能解析應用更新的百分比文字（例如「12%」）。

- 智慧過濾：限制基於文字的進度檢查，僅用於商店和安裝程式下載，以防止誤觸其他狀態通知。


**訊息修復**

- 修正了 Telegram 等應用程式中缺少寄件者頭像的問題（現在可以正確提取「sender_person」資料）。

- 解決了分組通知（聊天摘要）無法觸發超級島的問題。

- 修正了通知更新競爭條件所導致的超級島消失錯誤。


**系統 &引導流程**

- 全新引導介面：關鍵權限的設定流程更方便。

- 啟動修復：服務現在在重新啟動後能夠立即可靠地啟動。

- 更聰明的提醒：下載和媒體更新將靜默進行，而訊息更新則會可靠地觸發彈出動畫。

- 導航：應用程式切換更加流暢快速

---

## v0.4.2: 修補更新

- **崩潰修復：**修正了在繁體中文環境下，開啟設定選單會導致應用程式閃退的嚴重問題。

- **底層最佳化：** 一般錯誤的修正與穩定性提升，確保您的超級島順暢運作。

---

## v0.4.0: 自訂更新

**主題引擎 🎨**

史上最大更新！現在你可以完整自訂 Dynamic Island 的視覺體驗。

- **主題創建器： **直接在手機上設計主題，並即時預覽。

- **精細控制： **自訂圖示顯示方式、來電通知的顏色與形狀，並為單一 App 設定覆蓋選項。

- **智慧配色： **自動從 App 圖示提取鮮明品牌色。

- **動作級自訂 (Beta)：** 微調特定通知動作的外觀。

- **分享： **將主題匯出或匯入為 <i>.hbr</i> 套件。



**小工具支援 🧩**

將標準 Android 小工具固定到超級島，快速存取——即使在 **鎖定畫面** 也能使用！

- 可選 互動模式 **Interactive** 提升速度，或 快照模式 **Snapshot**節省電量。



**通知引擎 2.0 ⚡**

核心邏輯全面重寫，提升穩定性：

- **更智慧的解析： **修正通知只顯示套件名稱（如 com.whatsapp）而非訊息內容的問題。

- **防閃爍： **新增內容雜湊機制，避免重複更新與畫面卡頓。

- **幽靈通知修正： **解決通知消失後 Island 遺留的 race condition 問題。



**視覺更新 ✨**

- 重新設計「設計」分頁，使用流暢且原生感的旋轉木馬介面。

- 新增「文字膠囊」按鈕，讓通知動作更清楚。

- 新增對 🇮🇩 印尼語與 🇹🇷 土耳其語的支援。



<i>備註：本次版本包含重大架構調整，如發現任何問題，請至 GitHub 回報！</i>

---

## v0.3.1: 備份 & 多語言更新

**備份 & 還原 📦**

全新的進階功能！現在可以安全地將您的設定、封鎖名單與 App 優先順序匯出為 .hbr 檔案，並能隨時進行還原。


**新語言支援 🌍**

新增支援：

- 🇩🇪 德語

- 🇷🇺 俄語
- 
🇺🇦 烏克蘭語（已優化）

<i>外加：全新的內建語言切換器，讓您可以直接變更 App 語言而不影響系統設定。</i>


**視覺翻新 🎨**

App 已更新為 **Material 3 豐富表現**設計。享受更大的標題、更圓潤的形狀以及更流暢的使用體驗。


**隱私 & 設定 🛡️**

- 優化了初始設定流程，新增專屬的隱私頁面以詳細說明「離線優先」的架構。

- 執行更嚴格的相容性檢查，確保在 HyperOS 3.0 上擁有最佳體驗。


**修復 🛠️**

- 修正了裝置重啟後設定遺失的重大問題（已遷移至資料庫）。

- 修正了導航島中的「退出」按鈕顯示為圖示而非文字的問題。

- 修正了設定頁面中 App 圖示載入的問題。

---

## v0.3.0: 預設功能更新

**隱藏通知 👻**

新增可從系統面板隱藏通知，同時保持超級島運作的選項。請查看預設設定！


**新語言支援 🌍**

特別感謝社群提供的翻譯貢獻：

- 葡萄牙語（巴西）
- 
- 波蘭語

- 韓語


- 烏克蘭語


**導航自訂功能 🧭**

您現在可以選擇導航時島左側與右側顯示的資訊（距離、預計抵達時間、導航指令）。


**防劇透保護 🛡️**

全新「封鎖關鍵字」功能。可進行預設設定或針對個別 App 定義關鍵字，防止特定通知顯示在超級島上。


**通話功能優化 📞**

優化偵測邏輯，以支援更多種類的 VoIP 與撥號應用程式。


**修復 & 優化 🛠️**

- 修正了裝置重啟後 App 可能卡在載入畫面的重大錯誤。

- 修正了通知有時會顯示原始套件名稱（例如：com.google...）而非實際內容的問題。

- 重新設計 App 配置頁面以提升易用性。

- 優化相容性檢查畫面，提供更詳細的裝置資訊。

---

## v0.2.0: 資訊更新

- **進階進度顯示：**新增支援「分段進度」（例如：1/3）以及通知欄內含圖示的進度條。

- **優先級系統：**全新的「超級島行為」設定。可選擇「最近優先」、「先到先得」或自訂「App 優先順序」清單。

- **智慧過濾：**優化了重複通知與群組下載的偵測機制。

- **視覺優化：**修正了導航指令的佈局問題。

- **個別 App 設定：**可針對不同 App 自訂逾時時間與懸浮行為。

---

## v0.1.0: 快速更新

- **介面大改版：**全新的 Material 3 豐富表現設計，搭配流暢的動畫效果。

- **超級島優化：**文字現在會顯示在右側。新增下載完成時的綠色勾選圖示。

- **個別 App 設定：**可針對不同 App 選擇特定的通知類型（音樂、地圖、電話）。

- **智慧過濾：**阻擋重複通知並節省電力。

- **全新資料庫：**可按類別過濾 App 並自訂排序方式。

- **在地化：**新增西班牙語支援。
