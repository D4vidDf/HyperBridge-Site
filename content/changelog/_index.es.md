---
title: "Changelog"
description: "Release history and updates for HyperBridge (Español (España))."
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

## v0.5.7: Actualización de Rendimiento y Sincronización `Latest`

**Optimizaciones y correcciones**

- **Optimización de código:** Actualización a la última versión del Plugin de Gradle para Android y habilitación de R8 para una app más pequeña y rápida.

- **Estabilidad:** Mejora en la sincronización de notificaciones y corrección de un error donde las notificaciones originales a veces se eliminaban prematuramente (PR #258).

---

## v0.5.6: Modo Horizontal y Correcciones de Estabilidad

**Correcciones y Mejoras**

- **Estabilidad de System UI:** Validación de highlightColor antes de enviarlo a SystemUI para evitar cierres.

- **Isla Permanente:** Solucionado un problema por el que la isla permanente desaparecía tras recibir notificaciones o desbloquear el dispositivo.

- **Modo Horizontal:** Añadida opción para ocultar la isla permanente en orientación horizontal.

---

## v0.5.5: Mensajería y Correcciones

**Live Updates e Islas**

- **Iconos:** Solucionado un problema por el que el icono de la aplicación original no se mostraba correctamente en los Live Updates de Android 16.

- **Respuestas Rápidas:** Ahora puedes usar las respuestas rápidas directamente desde las notificaciones de Live Updates.

- **Cierre de Islas:** Solucionado un problema por el que las islas no se cerraban correctamente al descartarlas.


**Renovación de Agrupación de Mensajes**

- **Desduplicación:** Se ha rediseñado por completo la forma en que se agrupan las notificaciones de mensajería (como WhatsApp) para evitar islas duplicadas.


**Correcciones y Estabilidad**

- **Migración de Actualización:** Se ha solucionado un error crítico por el que la actualización de la aplicación no activaba correctamente la lógica de migración de la base de datos.

- **Valores predeterminados:** Se ha desactivado "Mostrar en panel" por defecto en la pantalla de inicio.

- **Localización:** Se han corregido los caracteres corruptos en las cadenas traducidas.

---

## v0.5.2: Respuesta Rápida, Rendimiento y Estabilidad

**¡Nueva Respuesta Rápida!**

- **Respuesta Rápida:** ¡Ahora puedes responder a los mensajes directamente desde la isla sin abrir la app!

- **Personalización:** Personaliza completamente el aspecto del nuevo editor de respuestas rápidas a nivel global o por aplicación.

- **Ajustes Globales:** Accede a la nueva sección de personalización de Respuestas directamente desde los Ajustes Globales -> Respuesta Rápida.



**Actualización de Rendimiento y Estabilidad**

- **Creador de Temas:** Se resolvió un cierre inesperado al cargar conjuntos de iconos grandes.

- **Mejora en la Bienvenida:** Eliminado un error de "Aplicación no Responde" (ANR) en la primera pantalla.

- **Selector de Widgets:** Prevenidos cierres y errores de falta de memoria (OOM) causados por vistas previas gigantes.

- **Diseño Más Robusto:** Solucionados problemas de restricciones de diseño en Jetpack Compose al achicar menús.

- **Copias de Seguridad:** Mejorado el análisis de JSON, evitando errores de OOM al restaurar archivos grandes.

- **Inicio Rápido:** Reducción significativa de los bloqueos de la interfaz, acelerando el inicio de la app en dispositivos de gama media.

- **Servicio en Segundo Plano:** Arquitectura de memoria del Notification Listener completamente rediseñada, reduciendo el consumo en segundo plano al 0% y mejorando la batería.

---

## v0.5.1: Correcciones y Mejoras

**Correcciones y Estabilidad**

Corrección de Duplicados en WhatsApp: Resuelto un problema que causaba que aparecieran notificaciones duplicadas de WhatsApp.

Corrección de Parpadeos y Cierres: Solucionado un cierre inesperado causado al recibir múltiples notificaciones en un corto período. La aplicación ahora actualiza las notificaciones de manera segura, eliminando el parpadeo y mejorando la estabilidad.

Intenciones Restauradas: Corregido un problema donde al hacer clic en una notificación destacada, la app te dirigía incorrectamente a la pantalla de solución de problemas en lugar de abrir la aplicación original.


**Características y Mejoras**

Eliminar Isla al Descartar: Añadida una nueva opción para eliminar automáticamente la isla si se descarta la notificación original del sistema.

Diagnóstico de Notificaciones: Añadida una nueva pantalla de verificación durante la configuración inicial para comprobar si tu dispositivo Xiaomi es compatible con las Notificaciones Destacadas.

Integración de Estado del Sistema: El estado de los permisos de Notificaciones Destacadas ahora se monitoriza continuamente y se muestra dentro de la pantalla de Estado del Sistema.

Pantalla de Solución de Problemas: Añadida una pantalla dedicada que guía a los usuarios sobre cómo habilitar los permisos ocultos del sistema (o usar Shizuku).

Terminología Más Clara: Renombrada la sección de "Actualizaciones en Vivo" en el menú de ajustes a "Gestión de Notificaciones" para reflejar mejor su propósito.

Pulido de Interfaz en Ajustes: Restauradas las esquinas redondeadas faltantes en la opción "Isla Permanente" en la lista de Ajustes Globales.

Traducciones al Español: Añadidas traducciones completas al español para todos los nuevos diálogos de solución de problemas, verificaciones del sistema y ajustes.

---

## v0.5.0: La actualización en vivo

**Soporte para ROMs CN**

- Habilita la nueva solución Sui & Shizuku para disfrutar de Hyper Islands en tus dispositivos con ROMs HyperOS CN (China) sin soporte nativo.


**Mejoras del Motor de Temas**

- Selección de Motor: Ahora puedes elegir motores de animación por aplicación o globalmente.

- Solución Shizuku: Opción agregada directamente a la pestaña Motor del Editor de Temas.

- Controles de Comportamiento: Tiempos de espera personalizados y lógica de ventanas emergentes son ahora totalmente compatibles.


**Isla Permanente Inteligente**

- Siempre Visible: Mantén la isla en pantalla incluso sin notificaciones activas.

- Ocultar Automáticamente: La isla permanente ahora se oculta automáticamente cuando se muestra un widget activo en la pantalla.


**Tintado Inteligente de Iconos**

- El nuevo sistema de detección analiza automáticamente los iconos de notificación extraídos y los tiñe inteligentemente de blanco si son oscuros o monocromáticos.


**Descargas y Progreso**

- Nuevo Diseño Dedicado para Descargas: Diseños de descarga y progreso separados con diseños visuales dedicados.

- Soporte de Progreso de Texto: Texto de porcentaje analizado (por ejemplo, "12%") para actualizaciones de aplicaciones incluso sin barras de progreso nativas.

- Filtrado Inteligente: Verificación de progreso basada en texto restringida a descargas de tiendas e instaladores para evitar activaciones falsas en otras notificaciones de estado.


**Correcciones de Mensajería**

- Se corrigió la falta de avatares del remitente en aplicaciones como Telegram (ahora extrae correctamente los datos "sender_person").

- Se resolvieron problemas con notificaciones agrupadas (resúmenes de chat) que no activaban las islas.

- Se corrigieron errores de desaparición de la isla causados por condiciones de carrera en la actualización de notificaciones.


**Sistema y Configuración Inicial**

- Nueva Pantalla de Bienvenida: Un proceso de configuración completamente nuevo y más fácil para los permisos críticos.

- Corrección de Inicio: El servicio ahora se inicia inmediata y confiablemente después de reiniciar.

- Alertas más Inteligentes: Las descargas y medios se actualizan silenciosamente, mientras que las actualizaciones de mensajes activan animaciones emergentes de manera confiable.

- Navegación: Transiciones de aplicaciones más rápidas y fluidas

---

## v0.4.2: Actualización Rápida

- **Corrección de errores:** Se solucionó un error crítico que provocaba el cierre de la aplicación al abrir la configuración en Chino Tradicional.

- **Mejoras generales:** Corrección de errores menores y mejoras de estabilidad para que la Isla funcione sin problemas.

---

## v0.4.0: La Actualización de Personalización

**Theme Engine 🎨**

¡La actualización más grande hasta la fecha! Ahora puedes personalizar completamente la experiencia visual de la isla dinámica.

- **Creador de temas:** Diseña temas directamente en tu teléfono con cambios en tiempo real.

- **Control avanzado:** Elegir exactamente cómo se muestran los iconos, personalizar colores y formas de notificación de llamadas, y configurar aplicaciones individuales.

- **Colores Inteligentes:** Extraer automáticamente los colores de acento de los iconos de la aplicación.

- **Personalización por acción (Beta):** Ajusta el aspecto de las acciones de notificación específicas.

- **Compartir:** Exporta e importa temas como paquetes <i>. hbr</i>.



**Soporte para Widgets🧩**

Ancla Widgets a la isla para un rápido acceso, incluso en tu **Pantalla de Bloqueo**!

- Elija entre **modo interactivo** o **Snapshot** para aquellas aplcaciones que tengan problemas para cargar la información.



**Motor de notificación 2.0. ⚡**

Una completa reescritura de la lógica para una mejor estabilidad:

- **Análisis más inteligente:** Problemas arreglados donde las notificaciones mostraban los nombres de los paquetes (ej. com.whatsapp) en lugar del contenido del mensaje.

- **Anti-Flicker:** Nuevo hashing de contenido previene actualizaciones redundantes.

- **Notificaciones Fantasmas:** Resuelto varios problemas que hacían que las notificaciones se mantuvieran auqnue la notificación original ya no estaba presente



**Refresco visual ✨**

- Pestaña "Diseño": Nueva pantalla que permite crear tus propios temas o usar Widgets.

- Nuevos botones de "Texto" para acciones de notificación más claras.

- Añadido soporte para 🇮🇩 Indonesia y 🇹🇷 Turco.



<i>Nota: Esta versión incluye cambios significativos en la arquitectura. Por favor, informe de cualquier error en GitHub!</i>

---

## v0.3.1: Actualización de Copias y Idiomas

**Copia de Seguridad y Restauración 📦**

¡Nueva función para usuarios avanzados! Exporta de forma segura tu configuración, listas de bloqueo y prioridades a un archivo .hbr y restáuralos cuando quieras.


**Nuevos Idiomas 🌍**

Añadido soporte para:

- 🇩🇪 Alemán

- 🇷🇺 Ruso

- 🇺🇦 Ucraniano (Mejorado)

<i>Además: Nuevo selector de idioma en la app para cambiarlo sin afectar a los ajustes del sistema.</i>


**Renovación Visual 🎨**

La aplicación se ha actualizado al diseño **Material 3 Expressive**. Disfruta de cabeceras más grandes, formas más redondeadas y una experiencia más fluida.


**Privacidad y Configuración 🛡️**

- Onboarding mejorado con una página de Privacidad dedicada que aclara la arquitectura offline.

- Verificaciones de compatibilidad más estrictas para asegurar la mejor experiencia en HyperOS 3.0.


**Correcciones 🛠️**

- Solucionado un error crítico donde la configuración se perdía al reiniciar (migración a base de datos).

- Corregido el botón "Salir" en la isla de Navegación (ahora muestra texto en lugar de un icono).

- Corregida la carga del icono de la App en Ajustes.

---

## v0.3.0: La Actualización Global

**Notificación Oculta 👻**

Nueva opción para ocultar notificaciones del panel del sistema manteniendo la Isla activa. ¡Revisa los Ajustes Globales!


**Nuevos Idiomas 🌍**

¡Un agradecimiento especial a la comunidad por estas traducciones!

- 🇧🇷 Portugués (Brasil)

- 🇵🇱 Polaco

- 🇰🇷 Coreano

- 🇺🇦 Ucraniano


**Personalización de Navegación 🧭**

Ahora puedes elegir qué información aparece a la izquierda y derecha de la Isla de Navegación (Distancia, Hora de llegada, Instrucción).


**Protección Anti-Spoilers 🛡️**

Nueva función de "Términos Bloqueados". Define palabras globalmente o por aplicación para evitar que ciertas notificaciones aparezcan en la Isla.


**Mejoras en Llamadas 📞**

Mejorada la lógica de detección para soportar más aplicaciones de VoIP y Teléfono.


**Correcciones y Mejoras 🛠️**

- Solucionado un error crítico donde la app se quedaba cargando tras reiniciar.

- Corregido error donde las notificaciones mostraban el nombre del paquete (ej. "com.google…") en lugar del contenido.

- Rediseñado el panel de Configuración de App.

- Mejorada la pantalla de Comprobación de Compatibilidad con info detallada.

---

## v0.2.0: La Actualización de Información

- **Progreso Avanzado:** Soporte para "Pasos" (ej. 1 de 3) y barras de progreso con iconos en el panel de notificaciones.

- **Sistema de Prioridad:** Nuevos ajustes de "Comportamiento". Elige el orden de aparición de las islas.

- **Filtros Inteligentes:** Detección mejorada de duplicados.

- **Mejoras Visuales:** Diseño de navegación mejorado.

- **Configuración por Aplicación:** Personaliza la duración y tiempo de muestra por aplicación.

---

## v0.1.0: La Actualización Expresiva

- **Nuevo Diseño :** Hyper Bridge ahora usa Material 3 Expressive con nuevas animaciones.

- **Mejoras en HyperIsland:** El texto ahora aparece a la derecha y muestra un tick verde para descargas completas.

- **Configuración por aplicación:** Ahora puedes personalizar que tipos de notificación se puede mostrar para cada aplicación.

- **Filtros Inteligentes:** Hyper Bridge ahora bloquea notificaciones duplicadas y ahorra batería.

- **Nueva Biblioteca:** Filtra aplicaciones por categoría y orden.

- **Idiomas:** Soporte completo para Español.
