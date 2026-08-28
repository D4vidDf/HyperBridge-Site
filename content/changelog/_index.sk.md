---
title: "Changelog"
description: "Release history and updates for HyperBridge (Slovenčina)."
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

### v0.4.0: Aktualizácia prispôsobenia

**Tématický engine 🎨**

Zatiaľ najväčšia aktualizácia! Teraz si môžete plne prispôsobiť vizuálny zážitok z Dynamického ostrova..

- **Vytváranie tém:** Navrhujte témy priamo v telefóne s ukážkami v reálnom čase.

- **Granulovaná kontrola:** Vyberte si presný spôsob zobrazenia ikon, prispôsobte si farby a tvary upozornení na hovory a nakonfigurujte prepísania jednotlivých aplikácií.

- **Inteligentné Farby:** Automaticky extrahovať žiarivé farby značky z ikon aplikácií.

- **Prispôsobenie pre jednotlivé akcie (beta):** Dolaďte vzhľad konkrétnych akcií upozornení.

- **Zdieľanie:** Export a import tém ako prenosných balíkov <i>.hbr</i>.



**Podpora widgetov 🧩**

Pripnite si štandardné widgety systému Android na ostrovček pre rýchly prístup – dokonca aj na **uzamknutej obrazovke**!

- Vyberte si medzi **Interaktívnym** režimom pre rýchlosť alebo **Momentkovým režimom** pre úsporu batérie.



**Notifikačný Engine 2.0 ⚡**

Kompletné prepísanie základnej logiky pre lepšiu stabilitu:

- **Inteligentnejšia analýza:** Opravené problémy, kde sa v upozorneniach zobrazovali názvy balíkov (napr. com.whatsapp) namiesto obsahu správy.

- **Anti-Flicker:** Hašovanie nového obsahu zabraňuje redundantným aktualizáciám a zasekávaniu.

- **Ghost Oprava:** Vyriešené podmienky pretekov, kde ostrovy pretrvávali aj po vylúčení.



**Vizuálne obnovenie ✨**

- Prepracovaná karta „Dizajn“ s plynulými karuselmi s natívnym vzhľadom.

- Nové tlačidlá „Textová tabletka“ pre jasnejšie akcie v upozorneniach.

- Pridaná podpora pre 🇮🇩 indonézštinu a 🇹🇷 turečtinu.



<i>Poznámka: Toto vydanie obsahuje významné architektonické zmeny. Prosím, nahláste akékoľvek chyby na GitHub!</i>

---

### v0.3.1: Zálohovanie & Aktualizácia Polyglot

**Zálohovanie & Obnovenie 📦**

Nová funkcia pre náročných používateľov! Bezpečne exportujte svoje nastavenia, zoznamy blokovaných položiek a priority aplikácií do súboru .hbr a kedykoľvek ich obnovte..


**Nové jazyky 🌍**

Pridaná podpora jazyka pre:

- 🇩🇪 Nemecký

- 🇷🇺 Ruský

- 🇺🇦 Ukrajinský (Vylepšený)

<i>Plus: Nový výber jazyka v aplikácii na zmenu jazykov bez ovplyvnenia nastavení systému.</i>


**Vizuálne obnovenie 🎨**

Aplikácia bola aktualizovaná s **Material 3 Expressive** dizajnom. Užite si väčšie hlavičky, zaoblenejšie tvary a plynulejší zážitok.


**Súkromie & Nastavenie 🛡️**

- Vylepšený onboarding so samostatnou stránkou ochrany osobných údajov, ktorá objasňuje architektúru zameranú na offline prostredie.

- Prísnejšie kontroly kompatibility pre zabezpečenie čo najlepšieho zážitku v systéme HyperOS 3.0.


**Opravy 🛠️**

- Opravený kritický problém, pri ktorom sa nastavenia stratili po reštarte zariadenia (migrované do databázy).

- Opravené tlačidlo „Ukončiť“ v navigačnom ostrovčeku, ktoré sa zobrazovalo ako ikona namiesto textu..

- Opravené načítavanie ikony aplikácie v Nastaveniach.

---

### v0.3.0: Globálna aktualizácia

**Skryté upozornenia 👻**

Nová možnosť skryť upozornenia na systémovom paneli a zároveň ponechať ostrov aktívny. Skontrolujte globálne nastavenia.!


**Nové jazyky 🌍**

Špeciálne poďakovanie našej komunite za tieto preklady:

- 🇧🇷 Portugalský (Brazília)

- 🇵🇱 Poľský

- 🇰🇷 Kórejský


- 🇺🇦 Ukrajinský


**Prispôsobenie navigácie 🧭**

Teraz si môžete vybrať, ktoré informácie sa zobrazia na ľavej a pravej strane navigačného ostrovčeka (vzdialenosť, predpokladaný čas príchodu, pokyny)..


**Ochrana pred spoilermi 🛡️**

Nová funkcia „Blokované výrazy“. Definujte slová globálne alebo pre jednotlivé aplikácie, aby ste zabránili zobrazovaniu konkrétnych upozornení na ostrove..


**Vylepšenia hovorov 📞**

Vylepšená logika detekcie na podporu širšej škály aplikácií VoIP a Dialer.


**Opravy & Vylepšenia 🛠️**

- Opravená kritická chyba, kvôli ktorej sa aplikácia po reštarte zasekávala pri načítavaní.

- Opravené upozornenia, ktoré niekedy zobrazovali názvy balíkov (napr. „com.google...“) namiesto ich obsahu..

- Prepracovaný hárok konfigurácie aplikácie pre lepšiu použiteľnosť.

- Vylepšená obrazovka kontroly kompatibility s podrobnými informáciami o zariadení.

---

### v0.2.0: Informácia o aktualizácii

- **Pokročilý pokrok:** Pridaná podpora pre „Postup krokov“ (napr. 1 z 3) a indikátory priebehu s ikonami vo vnútri panela upozornení.

- **Systém priorít:** Nové nastavenie "Správanie Islandu". Vyberte si medzi zoznamom „Najnovšie“, „Ktorí prví prídu“ alebo vlastným zoznamom „Priorita aplikácií“..

- **Inteligentné filtrovanie:** Vylepšená detekcia duplicitných upozornení a zoskupených sťahovaní.

- **Vizuálne vylepšenia:** Opravené problémy s rozložením navigačných pokynov.

- **Konfigurácia pre jednotlivé aplikácie:** Prispôsobte si časový limit a správanie pohyblivého umiestnenia pre každú aplikáciu.

---

### v0.1.0: Expresívna aktualizácia

- **Hlavná rekonštrukcia používateľského rozhrania:** Nový "Material 3" Expresívny dizajn s plynulými animáciami.

- **Lepší Island:** Text sa teraz zobrazuje na pravej strane. Pridaná zelená šípka pre dokončené sťahovania.

- **Konfigurácia pre jednotlivé aplikácie:** Vyberte konkrétne typy upozornení (Hudba, Mapy, Hovory) pre každú aplikáciu.

- **Inteligentné filtre:** Blokuje duplicitné upozornenia a šetrí batériu.

- **Nová knižnica:** Filtrovať aplikácie podľa kategórie a zoradiť podľa poradia.

- **Lokalizácia:** Pridaná podpora španielčiny.
