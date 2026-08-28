---
title: "Changelog"
description: "Release history and updates for HyperBridge (Italiano)."
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

### v0.5.0: Il Live Update

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

### v0.4.2: Aggiornamento Hotfix

- **Crash Fix:** Risolto un problema critico che ha causato l'arresto dell'app quando si apre il menu delle impostazioni in Cinese Tradizionale.

- ** Sotto al cofano:** Correzioni generali di bug e miglioramenti della stabilità per mantenere la tua Isola senza intoppi.

---

### v0.4.0: Aggiornamento Personalizzazione

**Motore del Tema 🎨**

Il più grande aggiornamento è adesso! Ora è possibile personalizzare completamente l'esperienza visiva Dynamic Island.

- **Crea il tuo Tema:** Temi di design direttamente sul telefono con anteprime in tempo reale.

- **Controllo Completo:** Scegli esattamente come vengono visualizzate le icone, personalizzare i colori e le forme delle notifiche delle chiamate e configurare gli override delle singole app.

- **Colori intelligenti:** Estrarre automaticamente colori di marca vibranti dalle icone delle app.

- **Personalizzazione per Azione (Beta):** Ottimizza l'aspetto di specifiche azioni di notifica.

- **Condivisione:** Esporta e importa temi come portatili <i>. br</i> pacchetti.



**Supporto Widget 🧩**

Fissa i Widget standard Android sull'isola per un rapido accesso, anche sulla tua **schermata di blocco**!

- Scegli tra la modalità **Interattiva** per velocità o la modalità **Snapshot** per efficienza della batteria.



**Motore delle notifiche 2. ⚡**

Una riscrittura completa della logica di base per una migliore stabilità:

- **Analisi più intelligente:** Problemi risolti in cui le notifiche mostravano nomi di pacchetti (e. ., com.whatsapp) invece del contenuto del messaggio.

- **Anti-Flicker:** Nuovo hashing dei contenuti impedisce aggiornamenti ridondanti e balbuzienti.

- **Isole Fantasma:** Condizioni di funzionamento risolte in cui le isole persistevano dopo il cancellamento.



**Aggiornamento visivo :scintille:**

- Scheda "Design" con fluent design, caroselli di nativo-sentimento.

- Nuovi pulsanti "Pillola di testo" per azioni di notifica più chiare.

- Aggiunto il supporto per 🇮🇩 Indonesiano e :Turchia: turco.



<i>Nota: Questa versione include cambiamenti architettonici significativi. Si prega di segnalare eventuali bug su GitHub!</i>

---

### v0.3.1: Backup & Aggiornamento Polyglot

**Backup & Ripristina 📦**

Nuova funzionalità power-user! Esporta in modo sicuro le tue impostazioni, liste di blocco e priorità delle app in un . br file e ripristinarli in qualsiasi momento.


**Nuove lingue 🌍**

Aggiunto supporto per:

- :Germania: Tedesco

- 🇷🇺 Russo

- :Ucraina: Ucraina (migliorata)

<i>Plus: Un nuovo Selettore di lingua in-app per cambiare le lingue senza influenzare le impostazioni di sistema.</i>


**Aggiornamento visivo 🎨**

L'app è stata aggiornata con **Material 3 Expressive** design. Godetevi intestazioni più grandi e un'esperienza più fluida.


**Privacy & Setup 🛡️**

- Miglioramento dell'Onboarding con una pagina dedicata sulla Privacy che chiarisce l'architettura offline-first.

- Controlli di compatibilità più rigorosi per garantire la migliore esperienza su HyperOS 3.0.


**Corregge 🛠️**

- Risolto un problema critico in cui le impostazioni sono state perse dopo il riavvio del dispositivo (migrato al database).

- Fissato il pulsante "Uscita" nell'isola di Navigazione che mostra come icona invece del testo.

- Risolta visualizzazione icona di caricamento in Impostazioni.

---

### v0.3.0: Aggiornamento Globale

**Notifica nascosta 👻**

Nuova opzione per nascondere le notifiche dal pannello di sistema mantenendo l'isola attiva. Controlla Le Impostazioni Globali!


**Nuove lingue 🌍**

Un ringraziamento speciale alla nostra comunità per queste traduzioni:

- :Brasile: Portoghese (Brasile)

- :Polonia: Polacco

- :Sud_Corea: Coreano


- :Ucraina: Ukranian


**Navigazione Personalizzata 🧭**

Ora puoi scegliere quali informazioni appaiono sui lati sinistro e destro dell'isola di navigazione (Distanza, ETA, destinazione).


**Protezione Spoiler 🛡️**

Nuova funzione "Blocca Parole". Definire le parole globalmente o per app per impedire la visualizzazione di notifiche specifiche sull'isola.


**Miglioramenti delle chiamate 📞**

Miglioramento della logica di rilevamento per supportare una gamma più ampia di applicazioni VoIP e Tastierino.


**Corregge & Miglioramenti 🛠️**

- Risolto un bug critico in cui l'app sarebbe rimasta bloccata dopo un riavvio.

- Notifiche corrette a volte che mostrano nomi di pacchetti grezzi (ad esempio "com.google...") invece del contenuto.

- Scheda di configurazione dell'app ridisegnata per una migliore usabilità.

- Migliorata la compatibilità Controlla lo schermo con informazioni dettagliate sul dispositivo.

---

### v0.2.0: Aggiornamento Delle Informazioni

- **Migliorato stato di avanzamento:** Aggiunto il supporto per "Avanzamento passo per passo" (ad esempio 1 di 3) e barre di avanzamento con icone all'interno dell'area notifiche.

- **Priorità delle notifiche:** Nuove impostazioni "Comportamento isola". Scegli tra "Più recenti", "Primo arrivato" o un elenco personalizzato di "Priorità app".

- **Filtro intelligente:** Rilevamento migliorato di notifiche duplicate e download raggruppati.

- **Miglioramenti visivi:** Risolti problemi di layout con le istruzioni di navigazione.

- **Configurazione comportamento App:** Personalizza il comportamento di timeout e floating per app.

---

### v0.1.0: Aggiornamento Espressivo

- **Revisione dell'interfaccia utente:** Nuovo Material 3 Expressive design con animazioni fluide.

- **Isola migliorata:** Il testo appare ora sul lato destro. Aggiunta spunta verde per i download finiti.

- **Pre Configura App:** Seleziona tipi di notifica specifici (Musica, Mappe, chiamate) per app.

- **Filtri intelligenti:** Blocca le notifiche duplicate e salva la batteria.

- **Nuova Biblioteca:** Filtra le app per categoria e ordina l'ordine.

- **Localizzazione:** Aggiunto supporto spagnolo.
