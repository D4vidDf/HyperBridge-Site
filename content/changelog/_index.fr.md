---
title: "Changelog"
description: "Release history and updates for HyperBridge (Français)."
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

## v0.5.2: Réponse intégrée, performance & stabilité

**Nouvelle fonctionnalité de réponse intégrée !**

- **Réponse intégrée :** Vous pouvez désormais répondre aux messages directement depuis la notification sans ouvrir l'application !

- **Personnalisation :** Personnalisez entièrement l'apparence du nouvel éditeur de réponse intégrée, soit globalement, soit par application.

- **Paramètres généraux :** Accédez à la nouvelle section de personnalisation des réponses directement depuis Paramètres généraux -> Réponse intégrée.



**Correction de crash du Play Store & Stabilité**

- **Créateur de thème :** Correction d'un plantage lors de l'analyse d'un grand nombre d'actifs personnalisés.

- **Performances :** Résolution d'un problème d’application qui ne répond plus (ANR) sur l’écran initial de bienvenue.

- **Widget Picker:** Elimination de plantages et d'erreurs Out-Of-Memory (OOM) causés par une prévisualisation de Widget extremement large.

- **Dispositions de l'interface utilisateur :** Correction des exceptions sur les contraintes de mise en page de composition de Jetpack qui plantaient l'application lors du redimensionnement de certains menus.

- **Sauvegardes :** Erreurs OOM corrigées lors de l'importation de gros fichiers de sauvegarde en optimisant l'analyse JSON.

- **Démarrage chaud :** Amélioration significative des vitesses de lancement des applications et élimination du blocage des piles d'interface utilisateur sur les appareils de milieu de gamme.

- **Service d'arrière-plan :** Révision complète de l'architecture du traitement d'écoute, chute de la charge en arrière-plan à 0 % et amélioration de la durée de vie de la batterie.

---

## v0.5.1: Corrections & Affinements

**Corrections & stabilité**

Correction des doublons WhatsApp : résolution d'un problème qui entraînait l'affichage de notifications WhatsApp en double.

Correction du scintillement des notifications & des plantages : correction d'un plantage provoqué par la réception de plusieurs notifications en peu de temps. L'application met désormais à jour les notifications normalement et en toute sécurité, ce qui élimine le scintillement des notifications et améliore la stabilité.

Restauration des intentions de notification : correction d'un problème où cliquer sur une notification mise en avant redirigeait à tort vers l'écran de dépannage au lieu de l'application d'origine.


**Fonctionnalités & améliorations**

Suppression de l'îlot lors de la fermeture : ajout d'une nouvelle option permettant de supprimer automatiquement l'îlot si la notification système d'origine est fermée.

Diagnostic des notifications en vedette : ajout d'un nouvel écran de vérification lors de la configuration initiale pour vérifier si votre appareil Xiaomi prend en charge les notifications en vedette et si les autorisations requises sont activées.

Intégration à l'état de la configuration : l'état des autorisations pour les notifications en vedette est désormais surveillé en continu et affiché dans l'écran d'état de la configuration.

Écran de dépannage : ajout d'un écran de dépannage dédié qui guide les utilisateurs sur la manière d'activer les autorisations système cachées nécessaires (ou d'utiliser Shizuku) pour que les bulles de notifications fonctionnent sur les ROM Xiaomi strictes.

Terminologie plus claire : la section « Mises à jour en direct » du menu des paramètres a été renommée « Gestion des notifications » afin de mieux refléter

Polissage de l'Interface utilisateur : rétablissement des coins arrondis qui manquaient dans l'option « bulles permanentes » de la liste des paramètres généraux.

Traductions en espagnol : ajout de traductions complètes en espagnol pour toutes les nouvelles boîtes de dialogue de dépannage, les contrôles d'intégrité de la configuration et les paramètres de gestion des notifications.

---

## v0.5.0: La mise à jour "Live Update"

**Support ROM CN**

- Utilisez Sui & Shizuku pour profiter des notifications Hyper Islands sur vos appareils exécutant des ROM HyperOS CN (chinois) sans prise en charge native.


**Améliorations du moteur de thème**

- Sélection du moteur : vous pouvez désormais choisir le moteur d'animation par application ou global.

- Solution de contournement Shizuku : option ajoutée directement à l'onglet Moteur de l'éditeur de thème.

- Contrôles de comportement : les délais d'attente personnalisés et la logique contextuelle sont désormais entièrement pris en charge.


**Île permanente intelligente**

- Toujours visible : gardez la notification à l'écran même sans notifications actives.

- Masquer automatiquement : l'îlot permanent se cache désormais automatiquement chaque fois qu'un widget actif est affiché à l'écran.


**Teinture intelligente des icônes**

- Le nouveau système de détection analyse automatiquement les icônes de notification extraites et les teinte intelligemment en blanc si elles sont sombres ou monochromes.


**Téléchargements & progression**

- Nouvelle présentation de téléchargement dédiée : présentations de téléchargement et de progression séparés avec des conceptions visuelles dédiées.

- Prise en charge de la progression du texte : pourcentage sous forme de texte (par exemple "12 %") pour les mises à jour d'applications, même sans barres de progression natives.

- Filtrage intelligent : vérification de la progression basée sur du texte pour stocker et télécharger le programme d'installation afin d'éviter de faux déclenchements sur d'autres notifications d'état.


**Corrections de messagerie**

- Correction des avatars d'expéditeur manquants dans des applications comme Telegram (extrait désormais correctement les données "sender_person").

- Problèmes résolus avec les notifications groupées (résumés de discussion) ne déclenchant pas les notifications.

- Correction de bugs de disparition des notifications causés par des conditions de mise à jour des notifications.


**Système & Intégration**

- Nouvel écran d'intégration : tout nouveau processus de configuration plus simple pour les autorisations critiques.

- Correctif de démarrage : le service démarre désormais immédiatement et de manière fiable après le redémarrage.

- Alertes plus intelligentes : les téléchargements et les médias sont mis à jour silencieusement, tandis que les mises à jour de messagerie déclenchent de manière fiable des animations contextuelles.

- Navigation : transitions d'applications plus rapides et plus fluides.

---

## v0.4.2: Mise à jour de corrections de bugs

- **Correction d'un crash :** Résolution d'un problème critique qui faisait planter l'application lors de l'ouverture du menu des paramètres en chinois traditionnel.

- **Corrections diverses :** Corrections générales de bugs pour améliorer la stabilité et la fluidité de l'application.

---

## v0.4.0: La version de la personnalisation

**Système de thèmes 🎨**

La plus grande mise à jour ! Vous pouvez maintenant personnaliser pleinement l'expérience visuelle des bulles de notification.

- **Créateur de Thèmes :** Concevez des thèmes directement sur votre téléphone avec un aperçu en temps réel.

- **Paramétrage plus fin:**; Choisissez exactement comment les icônes sont affichées, personnalisez les couleurs et les formes des notifications, et configurer les remplacements des applications individuelles.

- **Couleurs intelligentes:**; Extraction automatique des couleurs des icônes d'application.

- **Personnalisation par action (Bêta):**; Ajustement de l'apparence de certaines notifications d'actions spécifiques.

- **Partage :** Exportez et importez des thèmes au format <i>hbr</i> .



**Support des widget 🧩**

Verrouillez les widgets standard d'Android pour un accès rapide — même sur votre **écran verrouillé**!

- Choisissez entre les modes **interractifs** pour la vitesse ou **instantané** pour l'efficacité de la batterie.



**Moteur de notification 2.0⚡**

Réécriture complète du moteur pour une meilleure stabilité:

- **Analyse intelligente : ** Résolutions de problèmes où les notifications affichaient les noms des paquets (par ex. : com.whatsapp) au lieu du contenu du message.

- **Anti-scintillement :** La vérification de contenu empêche les notifications redondantes et les saccades.

- **Correction des fantômes :** Résolution d'un problème où les notifications persistaient après leur suppression.



**Rafraîchissement visuel ✨**

- Onglet "Design" redessiné pour plus de fluidité avec des blocs dynamiques.

- Nouveaux boutons de textes pour des actions de notification plus claires.

- Ajout du support pour l'indonésien 🇮🇩 et le turque 🇹🇷.



<i>Note : Cette version comprend des changements architecturaux importants. Veuillez signaler tout bug sur GitHub !</i>

---

## v0.3.1: Sauvegarde & langues

**Sauvegarde & Restauration 📦**

Nouvelle fonctionnalité utilisateur ! Exportez vos paramètres, listes de blocage et priorités d'applications en toute sécurité vers un fichier .hbr et restaurez les à tout moment.


**Nouvelles Langues 🌍**

Support Ajouté pour :

- :Allemagne : Allemand

- :Russie : Russe

- 🇺🇦 Ukrainien (Imprové)

<i>Plus : Un nouveau sélecteur de langue a été intégré pour changer de Langue sans toucher aux paramètres  système.</i>



**Mise à jour visuelle 🎨**

L'application a été mise à jour avec **Material 3 Expressive** . Appréciez des en-têtes plus grands, des formes arrondies et une expérience plus agréable.


**Confidentialité & Configuration 🛡️**

- Amélioration de l'intégration avec une page consacrée à la protection de la vie privée qui clarifie l'architecture hors ligne.

- Des contrôles de compatibilité plus stricts pour assurer la meilleure expérience sur HyperOS 3.0.



**Corrections 🛠️**

- Correction d'un problème critique où les paramètres étaient perdus après le redémarrage de l'appareil (migré vers la base de données).

- <Correction du bouton "Quitter" sur les bulles de navigation s'affichant sous la forme d'une icône au lieu du texte.

- Correction de l'icône de chargement dans les paramètres.

---

## v0.3.0: La version "Globale"

**Notification masquée 👻**

Nouvelle option pour masquer les notifications du panneau système tout en gardant les bulles active. Vérifiez les paramètres généraux!


**Nouvelles langues 🌍**

Un merci spécial à notre communauté pour ces traductions :

- 🇧🇷 portugais (Brésil)

- 🇵🇱 polonais

- 🇰🇷 coréen


- 🇺🇦 ukrainien


**Personnalisation de la navigation 🧭**

Vous pouvez maintenant choisir les informations qui apparaissent sur les côtés gauche et droit de la bulle de navigation (distance, ETA, instruction).


**Protection contre les spoilers 🛡️**

Nouvelle fonctionnalité « termes bloqués ». Définissez des mots globalement ou par application pour empêcher l'affichage de notifications spécifiques.


**Améliorations des appels 📞**

Logique de détection améliorée pour prendre en charge une plus grande gamme d'applications VoIP et de clavier.


**Corrections et & améliorations 🛠️**

- Correction d'un bug critique qui empêchait le chargement de l'application après un redémarrage.

- Correction des notifications affichant parfois les noms bruts des packages (par exemple, "com.google...") au lieu du contenu.

- Feuille de configuration de l'application repensée pour une meilleure convivialité.

- Écran de vérification de compatibilité amélioré avec des informations détaillées sur l'appareil

---

## v0.2.0: La version de l'information

- **Progression avancée:** Ajout d'étapes de progressions (par ex. 1 sur 3) et de barres de progression avec icônes dans la bulle de notification.

- **Système de priorité :** Nouveaux paramètres « Comportement des bulles de notification. Choisissez entre "Les plus récents", "Premier arrivé" ou une liste personnalisée "Priorité des applications".

- ** Filtrage intelligent :** Détection améliorée des notifications en double et des téléchargements groupés.

- **Améliorations visuelles :** Correction de problèmes de mise en page avec les instructions de navigation.

- **Configuration par application :** Personnalisez le comportement du délai d'attente et du flottement par application.

---

## v0.1.0: La version expressive

- **Révision majeure de l'interface utilisateur :** Nouveau design "Material 3 expressive" avec des animations plus fluides.

- ** Meilleure bulle:** Le texte apparaît maintenant sur le côté droit. Ajout d'une coche verte pour les téléchargements terminés.

- **Configuration par application :** Sélectionnez les types de notifications spécifiques (Musique, Plans, Appels) par application.

- **Filtres intelligents :** Bloque les notifications en double et économise la batterie.

- **Nouvelle bibliothèque :** Filtrer les applications par catégorie et ordre de tri.

- **Localisation :** Ajout de la langue espagnole
