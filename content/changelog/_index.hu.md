---
title: "Changelog"
description: "Release history and updates for HyperBridge (Magyar)."
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

## v0.4.2: Hibaijavító frissítés

- **Hibajavítás:** Kijavítottunk egy kritikus hibát, amely miatt az alkalmazás összeomlott, amikor a beállítások menüt hagyományos kínai nyelven nyitották meg.

- **Háttérmunkák:** Általános hibajavítások és stabilitási fejlesztések, hogy az island-od zökkenőmentesen működjön.

---

## v0.4.0: A testreszabás frissítés

**Téma motor 🎨**

A legnagyobb frissítés eddig! Mostantól teljes mértékben testreszabhatod a Dynamic Island vizuális élményét.

- **Témaalkotó:** Tervezz témákat közvetlenül a telefonodon, valós idejű előnézettel.

- **Részletes vezérlés:** Válaszd ki pontosan, hogyan jelenjenek meg az ikonok, testreszabhatod a hívásértesítések színeit és alakjait, valamint beállíthatod az egyes alkalmazások felülírásait.

- **Intelligens színek:** Az alkalmazásikonokból automatikusan kivonja az élénk márkaszíneket.

- **Műveletenkénti testreszabás (béta):** Finomítsd az egyes értesítési műveletek megjelenését.

- **Megosztás:** Külvitele és behozza a témákat hordozható <i>.hbr</i> csomagokként.

**Modul-támogatás 🧩**

Rögzítsed a szabványos Android-modulokat az Islandra a gyors hozzáférés érdekében – még a **zárképernyőn** is!

- Válassz sebességet biztosító **Interaktív** mód és az akkumulátor hatékonyságát biztosító **Pillanatkép** mód között.



**Értesítési motor 2.0 ⚡**

A jobb stabilitás érdekében teljesen átírtuk a központi logikát:

- **Okosabb elemzés:** Javítva azok a problémák, amikor az értesítések a csomag nevét (pl. com.whatsapp) mutatták az üzenet tartalma helyett.

- **Anti-Flicker:** Az új tartalom-hasholás megakadályozza a felesleges frissítéseket és a akadozást.

- **Ghost Fixes:** Megoldva azok a versenyhelyzetek, amikor a szigetek elutasítás után is megmaradtak.



**Vizuális frissítés ✨**

- Átdolgozott „Design” fül, folyékony, natív érzésű karusszelekkel.

- Új „Text Pill” gombok a világosabb értesítési műveletekhez.

- Hozzáadott támogatás 🇮🇩 indonéz és 🇹🇷 török nyelvekhez.



<i>Megjegyzés: Ez a kiadás jelentős architektúraváltozásokat tartalmaz. A hibákat a GitHubon jelentsd!</i>

---

## v0.3.1: Mentés és többnyelvű frissítés

**Mentés és visszaállítás 📦**

Új, haladó felhasználóknak szóló funkció! Biztonságosan külviteli beállításait, tiltási listáit és alkalmazásfontosságait egy .hbr fájlba, és bármikor visszaállíthatod őket.


**Új nyelvek 🌍**

Támogatás hozzáadva:

- 🇩🇪 német

- 🇷🇺 orosz

- 🇺🇦 ukrán (javított)

<i>Plusz: új, alkalmazáson belüli nyelvválasztó, amellyel a rendszerbeállítások megváltoztatása nélkül válthat nyelvet.</i>


**Vizuális frissítés 🎨**

Az alkalmazás **Material 3 Expressive** dizájnnal lett frissítve. Élvezd a nagyobb fejlécet, a lekerekítettebb formákat és a simább felhasználói élményt.


**Adatvédelem és beállítások 🛡️**

- Továbbfejlesztett bevezetés egy külön adatvédelmi oldallal, amely tisztázza az elsődlegesen offline architektúrát.

- Szigorúbb kompatibilitási ellenőrzések a HyperOS 3.0-n való legjobb felhasználói élmény biztosítása érdekében.


**Javítások 🛠️**

- Javítva egy kritikus hiba, amelynek következtében a beállítások elvesztek az eszköz újraindítása után (átvitel az adatbázisba).

- Javítva a navigációs Island-on található „Kilépés” gomb, amely ikonként jelent meg szöveg helyett.

- Javítva az alkalmazás ikonjának betöltése a Beállításokban.

---

## v0.3.0: Az általános frissítés

**Rejtett értesítések 👻**

Új opció az értesítések elrejtésére a rendszerpanelen, miközben az Island aktív marad. Ellenőrizd az általános beállításokat!


**Új nyelvek 🌍**

Külön köszönet közösségünknek ezekért a fordításokért:

- 🇧🇷 portugál (Brazília)

- 🇵🇱 lengyel

- 🇰🇷 koreai


- 🇺🇦 ukrán


**Navigáció testreszabása 🧭**

Mostantól kiválaszthatod, hogy milyen információk jelenjenek meg a navigációs Island bal és jobb oldalán (távolság, várható érkezési idő, utasítások).


**Leleplezés védelem 🛡️**

Új „Tiltott kifejezések” funkció. Határozd meg a szavakat általánosan vagy alkalmazásonként, hogy megakadályozd bizonyos értesítések megjelenését az Island-on.


**Hívásjavítások 📞**

Továbbfejlesztett felismerési logika a VoIP- és tárcsázóalkalmazások szélesebb körének támogatásához.


**Javítások és fejlesztések 🛠️**

- Javítva egy kritikus hiba, amely miatt az alkalmazás újraindítás után beragadt a betöltés közben.

- Javítva az értesítések néha a tartalom helyett a nyers csomagneveket (pl. „com.google...”) mutatták.

- Átalakítva az alkalmazás konfigurációs lapja a jobb használhatóság érdekében.

- Javítva a kompatibilitás-ellenőrző képernyő részletes eszközadatokkal.

---

## v0.2.0: Az információs frissítés

- **Részletes folyamatok:** Hozzáadott támogatás a „Lépésenkénti előrehaladás” (pl. 1/3) és az ikonokkal ellátott előrehaladási sávok számára az értesítési sávon belül.

- **Fontossági rendszer:** Új „Island működési” beállítások. Választhatsz a „Legutóbbi”, „Elsőként érkezett” vagy egy egyedi „Alkalmazás fontossági” lista közül.

- **Intelligens szűrés:** Javított felismerés az ismétlődő értesítések és csoportos letöltések esetében.

- **Vizuális fejlesztések:** Javított elrendezési problémák a navigációs utasításoknál.

- **Alkalmazásonkénti konfiguráció:** Az időkorlát és a lebegő viselkedés alkalmazásonkénti testreszabása.

---

## v0.1.0: A kifejező frissítés

- **A felhasználói felület jelentős átalakítása:** Új Material 3 kifejező dizájn, sima animációkkal.

- **Jobb Island:** A szöveg most a jobb oldalon jelenik meg. Zöld pipa jelzi a befejezett letöltéseket.

- **Alkalmazásonkénti beállítások:** Alkalmazásonként kiválaszthatók az egyes értesítési típusok (zene, térképek, hívások).

- **Intelligens szűrők:** Megakadályozza az ismétlődő értesítéseket és megtakarítja az akkumulátort.

- **Új könyvtár:** Az alkalmazások szűrése kategória és rendezési sorrend szerint.

- **Fordítások:** Hozzáadva a spanyol nyelv támogatása.
