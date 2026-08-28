---
title: "Changelog"
description: "Release history and updates for HyperBridge (Русский)."
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

### v0.5.2: Performance & Stability Update

**Play Store Crash Fixes & Stability**

? **Theme Creator:** Fixed a crash when parsing large sets of custom assets.

? **Performance:** Resolved an ANR (Application Not Responding) issue on the initial Welcome Screen.

? **Widget Picker:** Eliminated crashes and Out-Of-Memory (OOM) errors caused by extremely large widget previews.

? **UI Layouts:** Fixed Jetpack Compose layout constraint exceptions that crashed the app when resizing certain menus.

? **Backups:** Resolved OOM errors when importing large backup files by optimizing JSON parsing.

? **Warm Starts:** Significantly improved app launch speeds and eliminated UI thread blocking on mid-range devices.

? **Background Service:** Completely overhauled the Notification Listener memory architecture, dropping background overhead to 0% and improving battery life.

---

### v0.5.1: Fixes & Refinements

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

### v0.5.0: The Live Update

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

### v0.4.2: Hotfix Update

- **Crash Fix:** Resolved a critical issue that caused the app to crash when opening the settings menu in Traditional Chinese.

- **Under the Hood:** General bug fixes and stability improvements to keep your Island running smoothly.

---

### v0.4.0: The Customization Update

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

### v0.3.1: Обновление: Резервирование и Полиглот

**Резервное копирование и Восстановление 📦**

Новая функция для продвинутых пользователей! Безопасно экспортируйте ваши настройки, блоклисты и приоритеты приложений в файл .hbr и восстанавливайте их в любое время.


**Новые Языки 🌍**

Добавлена поддержка следующих языков:

- 🇩🇪 Немецкий

- 🇷🇺 Русский

- 🇺🇦 Украинский (улучшено)

<i>Также: новый встроенный переключатель языка, позволяющий менять язык приложения без изменения системных настроек.</i>


**Визуальное Обновление 🎨**

Приложение обновлено до дизайна **Material 3 Expressive**. Наслаждайтесь более крупными заголовками, округлёнными формами и более плавным интерфейсом.


**Приватность и Настройка 🛡️**

- Улучшен onboarding с отдельной страницей Приватности, объясняющей offline-first архитектуру.

- Ужесточены проверки совместимости для лучшего опыта на HyperOS 3.0.


**Исправления 🛠️**

- Исправлена критическая ошибка, из-за которой настройки терялись после перезагрузки устройства (перенесено в базу данных).

- Исправлена кнопка «Выход» в Navigation Island — теперь отображается текст, а не иконка.

- Исправлена загрузка иконок приложений в Настройках.

---

### v0.3.0: Глобальное обновление

**Скрытые уведомления 👻**

Новая опция, позволяющая скрывать уведомления из системной панели, сохраняя Остров активным. Проверьте Глобальные настройки!


**Новые языки 🌍**

Особая благодарность нашему сообществу за эти переводы:

- 🇧🇷 Португальский (Бразилия)

- 🇵🇱 Польский

- 🇰🇷 Корейский

- 🇺🇦 Украинский


**Настройки навигации 🧭**

Теперь вы можете выбрать, какая информация будет отображаться слева и справа на Навигационном Острове (Расстояние, Время прибытия, Инструкция).


**Защита от спойлеров 🛡️**

Новая функция «Заблокированные слова». Указывайте слова глобально или для отдельных приложений, чтобы предотвратить появление определённых уведомлений на Острове.


**Улучшения звонков 📞**

Улучшена логика обнаружения для поддержки большего числа VoIP-приложений и «звонилок».


**Исправления и улучшения 🛠️**

- Исправлена критическая ошибка, из-за которой приложение зависало при загрузке после перезапуска.

- Исправлено отображение имён пакетов (например "com.google...")
вместо содержимого уведомлений.

- Обновлён дизайн панели настройки приложений для более удобного использования.

- Улучшён экран проверки совместимости с подробной информацией об устройстве.

---

### v0.2.0: Информационное обновление

- **Расширенный прогресс:** Добавлена поддержка «пошагового прогресса» (напр. 1 из 3) и индикаторов прогресса с иконками внутри шторки уведомлений.

- **Система приоритетов:** Новые настройки «Поведения Острова». Выбирайте между «Самые новые», «Кто первый» или собственным списком «Приоритет приложений».

- **Умная фильтрация:** Улучшено обнаружение дублированных уведомлений и сгруппированных загрузок.

- **Визуальные улучшения:** Исправлены проблемы с макетом навигационных инструкций.

- **Настройки приложений:** Настраивайте тайм-аут и поведение плавающего окна отдельно для каждого приложения.

---

### v0.1.0: Экспрессивное обновление

- **Обновление интерфейса:** Новый дизайн Material 3 Expressive с плавными анимациями.

- **Лучший Остров:** Текст теперь отображается справа. Добавлена зелёная галочка для завершённых загрузок.

- **Настройки приложений:** Выбор конкретных типов уведомлений (Музыка, Карты, Звонки) для каждого приложения.

- **Умные фильтры:** Блокируют дублированные уведомления и экономят заряд батареи.

- **Новая библиотека:** Фильтрация приложений по категории и порядку сортировки.

- **Локализация:** Добавлена поддержка испанского языка.
