---
title: "Changelog"
description: "Release history and updates for HyperBridge (Polski)."
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

## v0.4.0: Aktualizacja personalizacyjna

**Silnik motywów 🎨**

Największa aktualizacja do tej pory! Teraz możesz w pełni personalizować wygląd dynamicznej wyspy.

- **Kreator motywów:** Projektuj motywy bezpośrednio na telefonie, z podglądami na żywo.

- **Pełna kontrola:** Zdecyduj, jak dokładnie będą wyświetlane ikony, personalizuj kolory i kształty powiadomień o połączeniach, a także konfiguruj zmiany dla poszczególnych aplikacji.

- **Inteligentne kolory:** Automatycznie wyodrębniaj żywe kolory z ikon aplikacji.

- **Dostosowywanie akcji (Beta):** Dostosuj wygląd konkretnych akcji powiadomień.

- **Udostępnianie:** Eksportuj i importuj motywy jako przenośne pliki <i>.hbr</i>.



**Wsparcie dla widżetów 🧩**

Przypinaj standardowe widżety Androida do wyspy, aby mieć do nich szybki dostęp — nawet na **Ekranie blokady**!

- Wybierz między trybem **Interaktywnym** (szybszy) a trybem **Migawki** (oszczędność baterii).



**Silnik powiadomień 2.0 ⚡**

Całkowicie przepisany rdzeń dla lepszej stabilności:

- **Inteligentniejsze parsowanie:** Naprawiono problem, w ramach którego powiadomienia pokazywały nazwy pakietów (np. com.whatsapp) zamiast treści wiadomości.

- **Zapobieganie odświeżaniu:** Nowe haszowanie treści zapobiega ich zbędnym aktualizacjom i migotaniu.

- **Naprawa duchów:** Naprawiono problem, w ramach którego wyspy pozostawały na ekranie po ich usunięciu.



**Zmiany wizualne ✨**

- Przeprojektowano zakładkę "Wygląd" z płynnymi, natywnymi karuzelami.

- Nowe przyciski "Tekstowa pigułka" dla czytelniejszych akcji powiadomień.

- Dodano wsparcie dla języków: 🇮🇩 indonezyjskiego i 🇹🇷 tureckiego.



<i>Uwaga: Ta wersja zawiera istotne zmiany architektoniczne. Prosimy o zgłaszanie wszelkich błędów na GitHubie!</i>

---

## v0.3.1: Aktualizacja: Kopia zapasowa i Wielojęzyczność

**Kopia zapasowa i przywracanie 📦**

Nowa funkcja dla zaawansowanych użytkowników! Bezpiecznie eksportuj swoje ustawienia, listy blokad i priorytety aplikacji do pliku .hbr i przywracaj je w dowolnym momencie.


**Nowe języki 🌍**

Dodano obsługę języków:

- 🇩🇪 niemieckiego

- 🇷🇺 rosyjskiego

- 🇺🇦 ukraińskiego (ulepszonego)

<i>Dodatkowo: nowy selektor języka w aplikacji, który pozwala zmienić język bez modyfikowania ustawień systemowych.</i>


**Odświeżenie wizualne 🎨**

Aplikacja została zaktualizowana do stylu **Material 3 Expressive**. Ciesz się większymi nagłówkami, bardziej zaokrąglonymi kształtami i płynniejszą obsługą.


**Prywatność i konfiguracja 🛡️**

- Ulepszony onboarding z dedykowaną stroną prywatności wyjaśniającą architekturę offline-first.

- Zaostrzone kontrole kompatybilności dla lepszego działania na HyperOS 3.0.


**Poprawki 🛠️**

- Naprawiono krytyczny problem powodujący utratę ustawień po ponownym uruchomieniu urządzenia (przeniesiono je do bazy danych).

- Naprawiono przycisk „Wyjście” w wyspie nawigacji – teraz wyświetla on tekst, a nie ikonę.

- Naprawiono ładowanie ikon aplikacji w Ustawieniach.

---

## v0.3.0: Globalna aktualizacja

**Ukrywanie powiadomień 👻**

Nowa opcja ukrywania powiadomień z Panelu powiadomień przy zachowaniu ich na wyspie. Sprawdź Ustawienia globalne!


**Nowe języki 🌍**

Specjalne podziękowania dla naszej społeczności za tłumaczenia na języki:

- 🇧🇷 portugalski (Brazylia),

- 🇵🇱 polski

- 🇰🇷 koreański


- 🇺🇦 ukraiński


**Dostosowywanie nawigacji 🧭**

Możesz teraz wybrać, jakie informacje pojawią się po lewej i prawej stronie wyspy nawigacji (np. odległość, czas przybycia czy polecenia dot. jazdy).


**Ochrona przed spoilerami 🛡️**

Nowa funkcja "Blokowane frazy". Zdefiniuj słowa globalnie lub dla poszczególnych aplikacji, aby zapobiec wyświetlaniu określonych powiadomień na wyspie.


**Ulepszenia dot. połączeń 📞**

Poprawiono logikę wykrywania powiadomień, aby wspierać większą liczbę aplikacji dialerów i VoIP.


**Poprawki i ulepszenia 🛠️**

- Naprawiono krytyczny błąd, który powodował zawieszanie się aplikacji podczas ładowania po restarcie.

- Naprawiono powiadomienia czasami pokazujące surowe nazwy pakietów (np. "com.google...") zamiast treści.

- Przeprojektowano arkusz konfiguracji aplikacji dla lepszej użyteczności.

- Ulepszono ekran sprawdzania kompatybilności z szczegółowymi informacjami o urządzeniu.

---

## v0.2.0: Aktualizacja informacji

- **Zaawansowany progres:** Dodano wsparcie dla "Postępu krokowego" (np. 1 z 3) oraz pasków postępu z ikonami wewnątrz panelu powiadomień.

- **System priorytetów:** Nowe ustawienia "Zachowanie wysp". Możesz wybrać "Najnowsze", "Kto pierwszy, ten lepszy" lub własną listę priorytetów aplikacji.

- **Inteligentne filtrowanie:** Ulepszono wykrywanie duplikatów powiadomień i grupowanie pobrań.

- **Ulepszenia wizualne:** Naprawiono problemy z układem instrukcji nawigacji.

- **Konfiguracja per aplikacja:** Dostosuj czas wyświetlania i zachowanie pływającej wyspy dla każdej aplikacji.

---

## v0.1.0: Aktualizacja ekspresyjna

- **Odmieniony wygląd:** Nowy design Material 3 Expressive z płynnymi animacjami.

- **Lepsza wyspa:** Tekst pojawia się teraz po prawej stronie. Dodano zielony znacznik dla zakończonych pobrań.

- **Konfiguracja per aplikacja:** Wybierz konkretne typy powiadomień (muzyka, mapy, połączenia) dla każdej aplikacji.

- **Inteligentne filtry:** Blokuj duplikaty powiadomień i oszczędzaj baterię.

- **Nowa biblioteka:** Filtruj aplikacje według kategorii i kolejności sortowania.

- **Tłumaczenie:** Dodano wsparcie dla języka hiszpańskiego.
