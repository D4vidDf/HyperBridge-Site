# HyperBridge v0.6.0: The Spatial & Customization Update 🚀

Welcome to the official, stable release of **HyperBridge v0.6.0**! 🎉

**v0.6.0** is our largest and most transformative release to date. Over multiple development and beta iterations, HyperBridge has evolved from a notification bridge into a full-fledged **spatial micro-widget studio**, an open **custom translator engine**, and an **adaptive large-screen companion** for Xiaomi HyperOS.

Whether you want to build custom KWGT-style Dynamic Island widgets, localize and customize any app’s notifications with regex, or monitor real-time charging, privacy indicators (camera/microphone), screen recordings, and VPN sessions, 0.6.0 gives you total control.

---

## 🌟 Headline Highlights

### 🎨 1. Studio Design & Spatial Micro-Widgets (KWGT-Style)
Build, customize, and bind interactive micro-widgets that render directly into your HyperOS Super Island as native Android views (`RemoteViews`):
* **Layer-Based Node Tree**: Arrange, group, and style containers (`Row`, `Column`, `Box`) alongside content elements (`Text`, `Button`, `Image`, `Progress`, `Shape`).
* **Spatial Sizing Modes**: Design layouts optimized for all island dimensions: **Small**, **Medium**, **Large**, **Extra-Large**, and **Snapshot**.
* **Dynamic Tokens & Formulas**: Bind live notification payloads (`{notif.title}`, `{notif.text}`), media playback tokens (`{media.remaining}`), device telemetry (`{device.battery}`), variables, and conditional formulas.
* **Conditional Visibility (`showIf`)**: Display elements conditionally (e.g., show progress only during active downloads, or render buttons only when an inline reply is present).
* **Interactive Button Triggers**: Trigger notification actions, smart actions, inline replies, media controls, or custom deep links directly from island buttons, featuring stateful icon overrides (e.g. dynamic play/pause swaps).
* **Typography & Fonts**: Import custom TTF/OTF fonts directly into the studio, rendered to high-resolution bitmaps for crisp display.
* **Styling Freedom**: Transparent root canvas support, per-container theme overrides, and root picture backgrounds.
* **Live Scenario Switcher**: Stress-test your design right inside the editor against simulated audio playback, OTP messages, downloads, and incoming calls.
* **Portable `.hwidget` Packaging**: One-tap export, file association import modals, and full system backup integration.

📖 **Learn More in the Docs:**
* [Widget Studio Overview & Editor Guide](https://hyper-bridge.app/docs/widget-studio/custom-widget-studio/)
* [Widget Elements & Node Properties](https://hyper-bridge.app/docs/widget-studio/custom-widget-elements/)
* [Dynamic Tokens, Formulas & `showIf` Conditions](https://hyper-bridge.app/docs/widget-studio/custom-widget-formulas-conditions/)
* [Custom Widget Color Schemes & Overrides](https://hyper-bridge.app/docs/customization/custom-widget-color-schemes/)
* [`.hwidget` Files, Bundling & Packaging](https://hyper-bridge.app/docs/widget-studio/custom-widget-files-packaging/)

---

### 🧩 2. Custom Translators Framework (`.htrans`) & RAW_PARAM_V2
Take complete control over how third-party app notifications display on the Super Island:
* **Built-in Visual Translator Editor**: Create and test custom rules without waiting for app updates.
* **Flexible Matching**: Regex pattern extraction, dynamic variable mapping, custom action assignment, and theme bindings.
* **Granular Pill Slot Customization & Contextual Extractions**: Choose custom left-slot graphics/text and categorized right-slot modes—including Smart Auto-Detect, 2FA/OTP codes, Flight & Boarding Pass details, unread chat badges (`+3`), progress percentages, and elapsed vs. remaining media playback counters (scoped strictly to custom translators to preserve the classic built-in pill layout).
* **Configurable Timers & Stopwatches**: Dedicated timer start reference modes (*Automatic*, *First Detected*, or *Notification Timestamp*) and count-up/count-down direction for voice calls, gaming sessions, and ongoing notifications without native chronometers.
* **`RAW_PARAM_V2` Super Island Contracts**: Advanced creators can bypass standard templates and construct native HyperOS JSON contracts with dual island layouts (`smallIslandArea` & `bigIslandArea`), `coverInfo`, `progressInfo`, `chatInfo`, `baseInfo`, and `bgInfo`.
* **Lock Screen Adaptation & Privacy**: Dedicated "Show on lock screen" toggle dynamically switching `islandProperty` (0 while locked, 1 unlocked) for keyguard visibility, while strictly respecting system lock screen privacy settings when source notifications hide sensitive content.
* **Alert & Orientation Control**: "Float only on first alert" toggle to suppress repeated heads-up popups on frequently updating progress notifications, plus **"Less in Landscape" Mode** to skip heads-up popups while rotated in landscape orientation.
* **SAF Import/Export**: Bundle and share standalone `.htrans` and `.htrans.zip` packages across devices.

📖 **Learn More in the Docs:**
* [Custom Translators Guide & Visual Editor](https://hyper-bridge.app/docs/customization/custom-translators/)
* [`.htrans` & `RAW_PARAM_V2` Technical Specification](https://hyper-bridge.app/docs/advanced/translators-specification/)
* [App Settings & Notification Behavior](https://hyper-bridge.app/docs/getting-started/app-settings/)

---

### 📱 3. Adaptive Redesign for Large Screens, Foldables & DeX
Built on modern Window Size Class paradigms to make optimal use of tablets, foldables, and landscape screens:
* **Adaptive 3-Column Studio Workspace**: Panning canvas with fluid viewport adjustments and dedicated side toolbars.
* **Split-Pane & Cascading Panes in Theme Creator**: Inspect theme configurations on one side while tweaking color tokens and components on the other.
* **Dual-Pane Translator Experience**: Cascading navigation for accelerated string localization and translation testing.

📖 **Learn More in the Docs:**
* [Adaptive UI for Tablets, Foldables & Large Screens](https://hyper-bridge.app/docs/getting-started/adaptive-large-screens/)

---

### ⚡ 4. Context-Aware Smart Action Buttons
Intelligent inline buttons extracted directly from incoming notifications:
* **One-Tap OTP Copy**: Automatically extracts SMS verification codes and one-time passwords for instant clipboard copying.
* **Open Links & Dial Numbers**: Detects URLs and telephone numbers in messages for one-tap browser launching or dialing.
* **Track Parcels**: Automatically identifies carrier tracking codes for immediate delivery lookups.
* **Turn-by-Turn Directions**: Recognizes shared map links and physical street addresses to launch route navigation immediately.
* **M3 Expressive App Exclusion Picker**: Filter and whitelist/blacklist apps with search controls.

📖 **Learn More in the Docs:**
* [Context-Aware Smart Actions Guide](https://hyper-bridge.app/docs/features/smart-actions/)
* [Contributing Smart Action Languages & Patterns](https://hyper-bridge.app/docs/contributing/smart-actions-languages/)

---

### 🏝️ 5. New System Islands & Telemetry
Expanded native integration for core device features without requiring root:
* **Privacy Indicators Island**: Live island indicators for active microphone and camera usage, featuring customizable indicator styles (sensor icons vs. minimalist colored dots), optional status text for an ultra-compact pill appearance, and real-time preview.
* **System Charging Island**: Real-time charging status island with customizable layout designs, live previews, dedicated charging speed display mode, dual-cell battery wattage calculation, and vendor-specific charge time estimation for Xiaomi devices.
* **Screen Recording Controls**: Direct IPC connection to Xiaomi Screen Recorder (`com.miui.screenrecorder`) to pause, resume, and stop recordings from the island, complete with post-save preview banners.
* **VPN Connectivity**: System-level network observer tracking live duration, country flags, one-tap disconnection, provider priority sorting, and Cloudflare WARP adapter support.
* **USB & Wireless Debugging**: Automatic status island indicating active ADB debugging sessions.
* **System Updates**: Native Super Island integration for tracking download and installation progress of Xiaomi system updates.

📖 **Learn More in the Docs:**
* [System Apps & Telemetry Islands Guide](https://hyper-bridge.app/docs/features/system-apps/)
* [Dynamic Islands Overview](https://hyper-bridge.app/docs/features/dynamic-islands/)

---

### 🌟 6. Community Showcase & Theming Ecosystem
* **Community Showcase Platform**: Browse and install community creations at [hyper-bridge.app/showcase/](https://hyper-bridge.app/showcase/), with in-app featured banner links.
* **`.hscheme` Packaging Format**: Standardized color scheme packaging specification with strict validation for dependable sharing.
* **Material 3 Expressive Theme Manager**: Redesigned theme screen with smooth list animations and named file sharing.
* **10 Official HyperOS Templates**: Compose layouts using official Xiaomi island designs (delivery tracking, boarding pass, progress transfer, call card, media capsule, etc.).
* **Bento Grid Design Screen**: Unified navigation for Themes, Island Widgets, Custom Designs, and Smart Translators.

📖 **Learn More in the Docs:**
* [Design Hub Overview](https://hyper-bridge.app/docs/customization/design-hub/)
* [Custom Designs & Official HyperOS Templates](https://hyper-bridge.app/docs/features/custom-designs/)
* [Theme Creator & Color Schemes](https://hyper-bridge.app/docs/customization/theme-creator/)
* [`.hscheme` Theme Packaging Specification](https://hyper-bridge.app/docs/advanced/theme-packaging-spec/)
* [Community Showcase Guide](https://hyper-bridge.app/docs/customization/community-showcase/) & [How to Submit Creations](https://hyper-bridge.app/docs/contributing/showcase-submission/)

---

### ⚡ 7. Performance & Notification Engine 2.0
* **Zero-Latency In-Memory Dispatch**: Preference reads on the notification hot path moved to cached StateFlows, eliminating SQLite/DataStore I/O bottlenecks.
* **Generation Gating & Expiry Registry**: `SourceProcessingGeneration` and `ExpiredIslandRegistry` eliminate notification race conditions, ghost islands, and flickering.
* **Messaging, Shade & Unlock Reliability**: Presentation family tracking resolves group chat bursts ("chat storms") across WhatsApp, Telegram, and Signal, while fixing shade duplication, missing dismiss/reply behaviors, unlock flicker with multiple pending messages, and fallback notification duplication when an island cannot be drawn.
* **AndroidX `MessagingStyle` Avatars**: Profile pictures render cleanly without being incorrectly tinted by system theme colors.
* **Monospaced Media Counters & Seek Sync**: Integrated Xiaomi HyperOS native `sameWidthDigitInfo` on Big Island to prevent visual jitter and island resizing during track playback, alongside accurate seek/scrub counter synchronization.
* **Call & Navigation Lifetimes**: Classifies Incoming, Ongoing, Held, and Ending call states with whole-word mute/unmute keyword matching, cleanly tears down call islands when rewritten into ended/missed follow-ups, and extends call and navigation island lifetimes beyond HyperOS's 1-hour default limit.
* **Permanent Island & Progress Accuracy**: Yields momentarily to native focus notifications before gracefully restoring, remains visible while media is actively playing, and prevents discount percentages or ongoing browser notifications from falsely triggering download progress bars.
* **HyperOS 4 Beta Compatibility**: Guarantees island visibility by ensuring `dismissible: false` parameters are explicitly applied.
* **Direct App Launching**: Messaging capsules launch target apps via direct activity intents, eliminating trampoline delays.

📖 **Learn More in the Docs:**
* [Permanent Island Configuration](https://hyper-bridge.app/docs/features/permanent-island/)
* [Inline Reply & Messaging Islands](https://hyper-bridge.app/docs/features/inline-reply/)
* [Diagnostics & Notification Event Tracking](https://hyper-bridge.app/docs/troubleshooting/diagnostics/)
* [Full HyperBridge Documentation Portal](https://hyper-bridge.app/docs/)

---

## 📋 What's Changed Across the 0.6.0 Milestone

* l10n: Update Korean translation by @alexkoala in [#276](https://github.com/D4vidDf/HyperBridge/pull/276)
* feat(i18n): add comprehensive Arabic language translation by @solom185 in [#280](https://github.com/D4vidDf/HyperBridge/pull/280)
* chore: bump version to 0.6.0-dev1 and migrate changelogs to web documentation by @D4vidDf in [#281](https://github.com/D4vidDf/HyperBridge/pull/281)
* Epic/283: integrate features and enhancements from sykeptical fork into hyper bridge v060 by @D4vidDf in [#300](https://github.com/D4vidDf/HyperBridge/pull/300)
* Feature/app config screen by @D4vidDf in [#301](https://github.com/D4vidDf/HyperBridge/pull/301)
* feat: Smart Action buttons — OTP copy, open link, dial, track parcel (#270) by @noelpatata2 in [#303](https://github.com/D4vidDf/HyperBridge/pull/303)
* fix: permanent island no longer stays hidden behind long-lived media/focus notifications (#255) by @noelpatata2 in [#304](https://github.com/D4vidDf/HyperBridge/pull/304)
* feat(diagnostics): record silent drops, new islands and system removals by @noelpatata2 in [#308](https://github.com/D4vidDf/HyperBridge/pull/308)
* fix(i18n): restore broken special characters across translations (#309) by @D4vidDf in [#311](https://github.com/D4vidDf/HyperBridge/pull/311)
* fix: island TTL for message/standard islands now follows Auto-hide (#278) by @D4vidDf in [#312](https://github.com/D4vidDf/HyperBridge/pull/312)
* update dev branch by @D4vidDf in [#313](https://github.com/D4vidDf/HyperBridge/pull/313)
* feat(settings): add System Islands & Enhancements credit and update Spanish localizations by @D4vidDf in [#314](https://github.com/D4vidDf/HyperBridge/pull/314)
* refactor(ui): overhaul settings screens layout, navigation customization, and smart action app picker by @D4vidDf in [#315](https://github.com/D4vidDf/HyperBridge/pull/315)
* feat(smart-actions): Directions button for shared map links (#270) by @noelpatata2 in [#316](https://github.com/D4vidDf/HyperBridge/pull/316)
* feat(ui): introduce `FeaturedNotificationWarningBanner` and move warning UI to `ActiveAppsPage` by @D4vidDf in [#317](https://github.com/D4vidDf/HyperBridge/pull/317)
* feat(smart-actions): Directions button for street addresses (#270) by @noelpatata2 in [#318](https://github.com/D4vidDf/HyperBridge/pull/318)
* ci: add GitHub Actions workflow for PR test gating and debug APK artifact (#349) by @D4vidDf in [#352](https://github.com/D4vidDf/HyperBridge/pull/352)
* feat(translators): Custom Translators Framework (.htrans), Visual Editor, Dynamic Engine, Theme Bundling & SAF Sharing (#271) by @D4vidDf in [#353](https://github.com/D4vidDf/HyperBridge/pull/353)
* feat: add system update island integration and customization settings by @D4vidDf in [#365](https://github.com/D4vidDf/HyperBridge/pull/365)
* fix: message island tap opens the app again on Android 15+ (#359) by @noelpatata in [#366](https://github.com/D4vidDf/HyperBridge/pull/366)
* fix: only group bridged islands on Android 16+, where force grouping exists (#358) by @noelpatata in [#368](https://github.com/D4vidDf/HyperBridge/pull/368)
* feat: add RAW_PARAM_V2 presentation mode with custom variables and actions by @D4vidDf in [#369](https://github.com/D4vidDf/HyperBridge/pull/369)
* fix: drop the island group summary once no island is left (#372) by @noelpatata in [#373](https://github.com/D4vidDf/HyperBridge/pull/373)
* fix: message island tap opens the app through an activity, not a broadcast trampoline (#371, #382) by @noelpatata in [#386](https://github.com/D4vidDf/HyperBridge/pull/386)
* feat(design): Visual Island Template Composer with 10 official HyperOS templates, Design Hub Bento Grid & Design Manager (#272, #327, #383, #385) by @D4vidDf in [#390](https://github.com/D4vidDf/HyperBridge/pull/390)
* fix: ensure small and big island visibility on HyperOS 4 Beta by setting dismissible to false by @D4vidDf in [#393](https://github.com/D4vidDf/HyperBridge/pull/393)
* refactor(strings): optimize string resources for Crowdin quota and streamline documentation guides by @D4vidDf in [#399](https://github.com/D4vidDf/HyperBridge/pull/399)
* fix(messaging): support AndroidX MessagingStyle avatars and prevent photo tinting (#395) by @D4vidDf in [#406](https://github.com/D4vidDf/HyperBridge/pull/406)
* fix(call): match mute/unmute keywords as whole words by @noelpatata in [#408](https://github.com/D4vidDf/HyperBridge/pull/408)
* PR: KWGT-Style Micro-Widgets Studio & Spatial Island Builder (#273, Phase 5) by @D4vidDf in [#411](https://github.com/D4vidDf/HyperBridge/pull/411)
* fix(progress): a discount percentage is not download progress (#408 follow-up) by @noelpatata in [#412](https://github.com/D4vidDf/HyperBridge/pull/412)
* feat: custom design translator persistence, file association import modals, and full backup support for translators/designs by @D4vidDf in [#413](https://github.com/D4vidDf/HyperBridge/pull/413)
* fix: decouple widget ID and assets when duplicating a custom design by @D4vidDf in [#414](https://github.com/D4vidDf/HyperBridge/pull/414)
* feat(translator): customizable compact pill media order and custom widget island styling by @D4vidDf in [#415](https://github.com/D4vidDf/HyperBridge/pull/415)
* feat(translator): add 'float only on first alert' toggle to suppress repeated heads-up pop-ups on updates by @D4vidDf in [#416](https://github.com/D4vidDf/HyperBridge/pull/416)
* chore: update SDK versions, dependencies, and Material 3 theme configuration by @D4vidDf in [#418](https://github.com/D4vidDf/HyperBridge/pull/418)
* feat(studio): update button shape selector options and add shape serialization test by @D4vidDf in [#419](https://github.com/D4vidDf/HyperBridge/pull/419)
* fix(nav): preserve navigation stack and home screen tab across configuration changes by @D4vidDf in [#420](https://github.com/D4vidDf/HyperBridge/pull/420)
* feat(system): charging status island by @noelpatata in [#424](https://github.com/D4vidDf/HyperBridge/pull/424)
* feat(charging): add customizable layout design options and live preview for charging island by @D4vidDf in [#426](https://github.com/D4vidDf/HyperBridge/pull/426)
* feat(design): link featured banner cards to showcase pages by @D4vidDf in [#427](https://github.com/D4vidDf/HyperBridge/pull/427)
* feat(design): redesign share bottom sheet with static previews, export selector, and optional linked translator by @D4vidDf in [#428](https://github.com/D4vidDf/HyperBridge/pull/428)
* feat(ui): redesign Design & Translator Manager cards with overflow menu and delete confirmation by @D4vidDf in [#429](https://github.com/D4vidDf/HyperBridge/pull/429)
* feat(system): USB and wireless debugging island by @noelpatata in [#430](https://github.com/D4vidDf/HyperBridge/pull/430)
* feat(vpn): introduce VPN Island customization screen, detection modes by @D4vidDf in [#431](https://github.com/D4vidDf/HyperBridge/pull/431)
* refactor(island): remove custom micro-widget binding and source management from permanent island by @D4vidDf in [#432](https://github.com/D4vidDf/HyperBridge/pull/432)
* feat(translator): add show on lock screen behavior override and dynamic property switching by @D4vidDf in [#433](https://github.com/D4vidDf/HyperBridge/pull/433)
* feat(packaging): introduce .hscheme format and standardize package file validation by @D4vidDf in [#443](https://github.com/D4vidDf/HyperBridge/pull/443)
* feat(studio): support custom font imports and revamp palette and font family pickers by @D4vidDf in [#446](https://github.com/D4vidDf/HyperBridge/pull/446)
* feat(widget): render custom fonts to bitmap, support button typefaces, and improve font resolution by @D4vidDf in [#447](https://github.com/D4vidDf/HyperBridge/pull/447)
* feat(charging): introduce charging speed display mode, dual-cell wattage support, and Xiaomi charge time estimation by @D4vidDf in [#448](https://github.com/D4vidDf/HyperBridge/pull/448)
* feat(design): enable custom design creation via Widget Studio from add design flow by @D4vidDf in [#449](https://github.com/D4vidDf/HyperBridge/pull/449)
* feat(studio): add transparent background support and per-container color scheme overrides by @D4vidDf in [#451](https://github.com/D4vidDf/HyperBridge/pull/451)
* feat(widget): support picture backgrounds on root canvas and improve notification visual resolution by @D4vidDf in [#452](https://github.com/D4vidDf/HyperBridge/pull/452)
* feat: adaptive UI foundation for tablets, foldables, and landscape screens (Part 1) by @D4vidDf in [#453](https://github.com/D4vidDf/HyperBridge/pull/453)
* feat(theme): modernize Theme Manager with Material 3 Expressive list items and named file sharing by @D4vidDf in [#454](https://github.com/D4vidDf/HyperBridge/pull/454)
* feat(theme): adaptive split-pane and cascading panes UI for Theme Creator on tablets and foldables by @D4vidDf in [#455](https://github.com/D4vidDf/HyperBridge/pull/455)
* feat(studio): introduce adaptive 3-column layout, canvas panning, and fluid viewport adjustments by @D4vidDf in [#456](https://github.com/D4vidDf/HyperBridge/pull/456)
* feat(studio): introduce preview placeholder customization, live preview rendering, and package bundling by @D4vidDf in [#457](https://github.com/D4vidDf/HyperBridge/pull/457)
* refactor(studio): extract ImageConfigSelectorCard for image source and configuration by @D4vidDf in [#458](https://github.com/D4vidDf/HyperBridge/pull/458)
* feat(translator): introduce adaptive split-pane layout and cascading navigation in translator editor by @D4vidDf in [#460](https://github.com/D4vidDf/HyperBridge/pull/460)
* feat(translator): introduce granular pill slot customization, contextual right designs, and media counter modes by @D4vidDf in [#463](https://github.com/D4vidDf/HyperBridge/pull/463)
* fix(translator): restore standard and message translators to rc1 pill design by @D4vidDf in [#466](https://github.com/D4vidDf/HyperBridge/pull/466)
* docs: update README for 0.6.0 and refresh screenshots by @D4vidDf in [#467](https://github.com/D4vidDf/HyperBridge/pull/467)
* fix(translator): use sameWidthDigitInfo for media counter to prevent island resizing by @D4vidDf in [#470](https://github.com/D4vidDf/HyperBridge/pull/470)
* feat(translator): add configurable timer start mode and direction for custom translators by @D4vidDf in [#471](https://github.com/D4vidDf/HyperBridge/pull/471)
* Potential fix for code scanning alert no. 1: Workflow does not contain permissions by @D4vidDf in [#475](https://github.com/D4vidDf/HyperBridge/pull/475)
* fix: permanent island stays hidden while a media player is playing (#445) by @noelpatata in [#476](https://github.com/D4vidDf/HyperBridge/pull/476)
* fix(progress): ongoing browser notifications are not download progress (#231) by @noelpatata in [#477](https://github.com/D4vidDf/HyperBridge/pull/477)
* feat(settings): add "Less in landscape" option to skip the heads-up popup when rotated by @noelpatata in [#478](https://github.com/D4vidDf/HyperBridge/pull/478)
* fix(privacy): keep bridge notifications off the lock screen when the source is hidden there by @noelpatata in [#479](https://github.com/D4vidDf/HyperBridge/pull/479)
* i18n(es): add Spanish translations for landscape float setting and troubleshooting by @D4vidDf in [#483](https://github.com/D4vidDf/HyperBridge/pull/483)
* feat(system): privacy indicators island for mic and camera in use (#481) by @noelpatata in [#486](https://github.com/D4vidDf/HyperBridge/pull/486)
* fix(call): end the call island when the app rewrites the call into a follow-up (#226) by @noelpatata in [#487](https://github.com/D4vidDf/HyperBridge/pull/487)
* fix(call,nav): call and navigation islands outlive HyperOS's 1 h default (#168) by @noelpatata in [#488](https://github.com/D4vidDf/HyperBridge/pull/488)
* fix: the bridge notification repeats the source when the island is not drawn (#485) by @noelpatata in [#489](https://github.com/D4vidDf/HyperBridge/pull/489)
* feat(privacy): add indicator style (icon vs dot) and text visibility customization options by @D4vidDf in [#491](https://github.com/D4vidDf/HyperBridge/pull/491)
* fix: resolve WhatsApp shade duplication, unlock flicker with multiple messages, and media seek counter by @D4vidDf in [#492](https://github.com/D4vidDf/HyperBridge/pull/492)

---

## 💖 Community & Credits
A heartfelt thank you to everyone who contributed code, translations, testing, and feedback during this milestone:
* **[Sykeptical](https://github.com/sykeptical)** for foundational Screen Recording IPC controls, VPN integration, and messaging deduplication concepts.
* **@noelpatata / @noelpatata2** for Smart Action buttons, Privacy Indicators island, USB/wireless debugging island, charging status island, "Less in landscape" mode, lock screen privacy, and call/navigation lifecycle fixes.
* **@alexkoala** and **@solom185** for localized translations.
* All our testers and Community Showcase creators on Discord and GitHub.

**Full Changelog**: https://github.com/D4vidDf/HyperBridge/compare/v0.5.7...v0.6.0
