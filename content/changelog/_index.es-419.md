---
title: "Changelog"
description: "Release history and updates for HyperBridge (Español (Latinoamérica))."
layout: "simple"
---

Follow the latest updates, features, and release history for **HyperBridge**.


---

### v0.5.7: Performance & Sync Update `Latest` *(English)*

**Optimizations & Fixes**

- **Code Optimization:** Upgraded to the latest Android Gradle Plugin and enabled R8 code shrinking for a smaller, faster app.

- **Stability:** Improved notification synchronization and fixed an issue where original notifications were sometimes prematurely dismissed (PR #258).

---

### v0.5.6: Landscape Hide & Stability Fixes *(English)*

**Fixes & Improvements**

- **System UI Stability:** Validated highlightColor before passing to SystemUI to prevent crashes.

- **Permanent Island Behavior:** Fixed an issue where the permanent island disappeared after notifications or unlock.

- **Landscape Mode:** Added an option to hide the Permanent Island in landscape orientation.

---

### v0.5.5: Messaging & Update Fixes *(English)*

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

### v0.5.2: Actualización de Rendimiento y Estabilidad

**Actualización de Rendimiento y Estabilidad**

- **Creador de Temas:** Se resolvió un cierre inesperado al cargar conjuntos de iconos grandes.

- **Mejora en la Bienvenida:** Eliminado un error de "Aplicación no Responde" (ANR) en la primera pantalla.

- **Selector de Widgets:** Prevenidos cierres y errores de falta de memoria (OOM) causados por vistas previas gigantes.

- **Diseño Más Robusto:** Solucionados problemas de restricciones de diseño en Jetpack Compose al achicar menús.

- **Copias de Seguridad:** Mejorado el análisis de JSON, evitando errores de OOM al restaurar archivos grandes.

- **Inicio Rápido:** Reducción significativa de los bloqueos de la interfaz, acelerando el inicio de la app en dispositivos de gama media.

- **Servicio en Segundo Plano:** Arquitectura de memoria del Notification Listener completamente rediseñada, reduciendo el consumo en segundo plano al 0% y mejorando la batería.

---

### v0.5.1: Fixes & Refinements *(English)*

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

### v0.5.0: The Live Update *(English)*

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

### v0.4.2: Hotfix Update *(English)*

- **Crash Fix:** Resolved a critical issue that caused the app to crash when opening the settings menu in Traditional Chinese.

- **Under the Hood:** General bug fixes and stability improvements to keep your Island running smoothly.

---

### v0.4.0: The Customization Update *(English)*

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

### v0.3.1: Actualización de Copias y Idiomas

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

### v0.3.0: La Actualización Global

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

### v0.2.0: La Actualización de Información

- **Progreso Avanzado:** Soporte para "Pasos" (ej. 1 de 3) y barras de progreso con iconos en el panel de notificaciones.

- **Sistema de Prioridad:** Nuevos ajustes de "Comportamiento". Elige el orden de aparición de las islas.

- **Filtros Inteligentes:** Detección mejorada de duplicados.

- **Mejoras Visuales:** Diseño de navegación mejorado.

- **Configuración por Aplicación:** Personaliza la duración y tiempo de muestra por aplicación.

---

### v0.1.0: La Actualización Expresiva

- **Nuevo Diseño :** Hyper Bridge ahora usa Material 3 Expressive con nuevas animaciones.

- **Mejoras en HyperIsland:** El texto ahora aparece a la derecha y muestra un tick verde para descargas completas.

- **Configuración por aplicación:** Ahora puedes personalizar que tipos de notificación se puede mostrar para cada aplicación.

- **Filtros Inteligentes:** Hyper Bridge ahora bloquea notificaciones duplicadas y ahorra batería.

- **Nueva Biblioteca:** Filtra aplicaciones por categoría y orden.

- **Idiomas:** Soporte completo para Español.
