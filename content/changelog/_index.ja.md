---
title: "Changelog"
description: "Release history and updates for HyperBridge (日本語)."
showTableOfContents: true
---

Follow the latest updates, features, and release history for **HyperBridge**.


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

## v0.5.2: Inline Reply, Performance & Stability *(English)*

**New Inline Reply Feature!**

- **Inline Reply:** You can now reply to messages directly from the island without opening the app!

- **Customization:** Fully customize the look of the new inline reply editor globally or per-app.

- **Global Settings:** Access the new Reply customization section directly from the Global Settings -> Inline reply.



**Play Store Crash Fixes & Stability**

- **Theme Creator:** Fixed a crash when parsing large sets of custom assets.

- **Performance:** Resolved an ANR (Application Not Responding) issue on the initial Welcome Screen.

- **Widget Picker:** Eliminated crashes and Out-Of-Memory (OOM) errors caused by extremely large widget previews.

- **UI Layouts:** Fixed Jetpack Compose layout constraint exceptions that crashed the app when resizing certain menus.

- **Backups:** Resolved OOM errors when importing large backup files by optimizing JSON parsing.

- **Warm Starts:** Significantly improved app launch speeds and eliminated UI thread blocking on mid-range devices.

- **Background Service:** Completely overhauled the Notification Listener memory architecture, dropping background overhead to 0% and improving battery life.

---

## v0.5.1: Fixes & Refinements *(English)*

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

## v0.5.0: The Live Update *(English)*

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

## v0.4.2: 緊急修正アップデート

- **クラッシュの修正:** 繁体字中国語で設定メニューを開いた際にアプリがクラッシュする重大な不具合を修正しました。

- **内部改善:** アイランドを快適にご利用いただけるよう、全般的な不具合修正と安定性の改善を行いました。

---

## v0.4.0: カスタマイズアップデート

**テーマエンジン 🎨**

過去最大のアップデート！Dynamic Islandの表示を自由にカスタマイズできるようになりました。

- **テーマクリエイター:** リアルタイムプレビューを見ながら、端末上で直接テーマをデザインできます。

- **細かいコントロール:** アイコンの表示方法を細かく指定したり、通話通知の色や形をカスタマイズしたり、アプリごとの個別設定を行えます。

- **スマートカラー:** アプリアイコンから鮮やかなブランドカラーを自動で抽出します。

- **アクションごとのカスタマイズ（ベータ）:** 特定の通知アクションの見た目を細かく調整できます。

- **共有:** テーマを持ち運び可能な<i>.hbr</i>パッケージとしてエクスポート・インポートできます。



**ウィジェット対応 🧩**

標準的なAndroidウィジェットをアイランドにピン留めして、すぐにアクセスできるようになりました。**ロック画面**でも使用可能です！

- スピード重視の**インタラクティブ**モードか、バッテリー効率重視の**スナップショット**モードを選択できます。



**通知エンジン 2.0 ⚡**

安定性向上のため、コアロジックを全面的に書き直しました:

- **解析の高度化:** 通知にメッセージ内容の代わりにパッケージ名（例: com.whatsapp）が表示される不具合を修正しました。

- **ちらつき防止:** 新しいコンテンツハッシュ機能により、不要な更新やちらつきを防ぎます。

- **ゴースト表示の修正:** 通知を消してもアイランドが残ってしまう競合状態を解決しました。



**ビジュアルの刷新 ✨**

- ネイティブな操作感の滑らかなカルーセルで、「デザイン」タブを再デザインしました。

- より分かりやすい通知アクション用の「テキストピル」ボタンを追加しました。

- 🇮🇩 インドネシア語と🇹🇷 トルコ語に対応しました。



<i>注: 今回のリリースには大規模なアーキテクチャ変更が含まれます。不具合を見つけた場合はGitHubでご報告ください！</i>

---

## v0.3.1: バックアップ＆多言語アップデート

**バックアップと復元 📦**

パワーユーザー向けの新機能！設定、ブロックリスト、アプリの優先度を.hbrファイルに安全にエクスポートし、いつでも復元できます。


**新しい言語 🌍**

以下の言語に対応しました:

- 🇩🇪 ドイツ語

- 🇷🇺 ロシア語

- 🇺🇦 ウクライナ語（改善版）

<i>さらに、システム設定に影響を与えずにアプリ内で言語を変更できる、新しい言語選択機能を追加しました。</i>


**ビジュアルの刷新 🎨**

アプリが**Material 3 Expressive**デザインにアップデートされました。より大きなヘッダー、丸みを帯びた形状、スムーズな操作性をお楽しみください。


**プライバシーとセットアップ 🛡️**

- オフラインファースト設計を説明する専用のプライバシーページを、オンボーディングに追加しました。

- HyperOS 3.0で最良の体験を得られるよう、互換性チェックをより厳密にしました。


**修正 🛠️**

- 端末再起動後に設定が失われる重大な不具合を修正しました（データベースへの移行により対応）。

- ナビゲーションアイランドの「終了」ボタンがテキストではなくアイコンで表示される不具合を修正しました。

- 設定画面でのアプリアイコンの読み込みを修正しました。

---

## v0.3.0: グローバルアップデート

**通知の非表示 👻**

アイランドを有効にしたまま、システムパネルから通知を非表示にする新しいオプションを追加しました。全体設定を確認してください！


**新しい言語 🌍**

これらの翻訳にご協力いただいたコミュニティの皆様に感謝します:

- 🇧🇷 ポルトガル語（ブラジル）

- 🇵🇱 ポーランド語

- 🇰🇷 韓国語


- 🇺🇦 ウクライナ語


**ナビゲーションのカスタマイズ 🧭**

ナビゲーションアイランドの左側と右側に表示する情報（距離、到着予定時刻、案内）を選択できるようになりました。


**ネタバレ防止 🛡️**

新しい「ブロックするキーワード」機能を追加。特定の単語を全体またはアプリごとに設定し、該当する通知がアイランドに表示されないようにできます。


**通話機能の改善 📞**

より幅広いVoIPアプリや電話アプリに対応できるよう、検出ロジックを改善しました。


**修正と改善 🛠️**

- 再起動後にアプリの読み込みが止まってしまう重大な不具合を修正しました。

- 通知の内容ではなく、パッケージ名（例: "com.google..."）がそのまま表示されることがある不具合を修正しました。

- 使いやすさ向上のため、アプリ設定シートを再デザインしました。

- 詳細な端末情報を表示するよう、互換性チェック画面を改善しました。

---

## v0.2.0: 情報アップデート

- **進行状況の強化:** 「ステップ進行状況」（例: 3件中1件）と、通知パネル内でアイコン付きの進行バーに対応しました。

- **優先度システム:** 新しい「アイランドの動作」設定を追加。「最新順」「先着順」、またはカスタムの「アプリ優先度」リストから選択できます。

- **スマートフィルタリング:** 重複した通知やグループ化されたダウンロードの検出精度を向上しました。

- **表示の改善:** ナビゲーション表示のレイアウトの不具合を修正しました。

- **アプリごとの設定:** アプリごとにタイムアウトやポップアップ表示の挙動をカスタマイズできます。

---

## v0.1.0: エクスプレッシブアップデート

- **UIの大幅刷新:** スムーズなアニメーションを備えた新しいMaterial 3 Expressiveデザインを採用しました。

- **アイランドの改善:** テキストが右側に表示されるようになりました。ダウンロード完了時に緑色のチェックマークを追加しました。

- **アプリごとの設定:** アプリごとに特定の通知タイプ（音楽、マップ、通話）を選択できます。

- **スマートフィルター:** 重複通知をブロックし、バッテリーを節約します。

- **新しいライブラリ:** カテゴリや並び順でアプリを絞り込めます。

- **ローカライズ:** スペイン語に対応しました。
