---
title: "Changelog"
description: "Release history and updates for HyperBridge (Bahasa Indonesia)."
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

### v0.5.1: Perbaikan & Penyempurnaan

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

### v0.5.0: Pembaruan Langsung

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

### v0.4.2: Pembaruan Hotfix

- **Perbakan Kesalahan:** Mengatasi masalah kritis yang menyebabkan aplikasi mogok saat membuka menu pengaturan dalam bahasa Mandarin Tradisional.

- **Di Balik Layar:** Perbaikan kesalahan umum dan peningkatan stabilitas agar Island Anda tetap berjalan lancar.

---

### v0.4.0: Pembaruan Kustomisasi

**Theme Engine 🎨**

Pembaruan terbesar sejauh ini! Kini Anda dapat sepenuhnya menyesuaikan tampilan visual Dynamic Island.

- **Theme Creator** Desain tema langsung di ponsel Anda dengan pratinjau waktu nyata.

- **Kontrol Granular** Pilih dengan tepat bagaimana ikon ditampilkan, sesuaikan warna dan bentuk notifikasi panggilan, dan konfigurasikan pengaturan khusus untuk setiap aplikasi.

- **Smart Colors** Secara otomatis mengekstrak warna merek yang hidup dari ikon aplikasi.

- **Kustomisasi Per-Aksi (Beta)** Sesuaikan tampilan aksi notifikasi tertentu.

- **Berbagi** Ekspor dan impor tema sebagai paket <i>.hbp</i> portabel.



**Dukungan Widget 🧩**

Sematkan widget Android standar ke Island untuk akses cepat—bahkan di **Lock screen**.

- Pilih antara mode **Interaktif** untuk kecepatan atau mode **Snapshot** untuk efisiensi baterai.



**Notification Engine 2.0 ⚡**

Penulisan ulang total logika inti untuk stabilitas yang lebih baik.

- **Parsing Lebih Cerdas** Memperbaiki masalah di mana notifikasi menampilkan nama paket (misalnya com.whatsapp) alih-alih konten pesan.

- **Anti-Flicker** Hashing konten baru mencegah pembaruan berulang dan efek patah-patah.

- **Ghost Fixes** Memperbaiki kondisi balapan di mana Island tetap muncul setelah ditutup.



**Penyegaran Visual ✨**

- Tab “Design” didesain ulang dengan carousel yang halus dan terasa native.

- Tombol “Text Pill” baru untuk aksi notifikasi yang lebih jelas.

- Menambahkan dukungan untuk 🇮🇩 bahasa Indonesia dan 🇹🇷 Turki.



<i>Catatan: Rilis ini mencakup perubahan arsitektur yang signifikan. Silakan laporkan bug apa pun di GitHub.</i>

---

### v0.3.1: Pembaruan Cadangan & Polyglot

**Cadangkan & Pulihkan 📦**

Fitur baru untuk power-user! Ekspor pengaturan, daftar blokir, dan prioritas aplikasi Anda dengan aman ke file .hbr dan pulihkan kapan saja.


**Bahasa Baru 🌍**

Menambahkan dukungan untuk:

- 🇩🇪 Jerman

- 🇷🇺 Rusia

- 🇺🇦 Ukraina (Ditingkatkan)

<i>Plus: A new in-app Language Selector to change languages without affecting your system settings.</i>


**Penyegaran Visual 🎨**

Aplikasi telah diperbarui dengan desain **Material 3 Expressive**. Nikmati header yang lebih besar, bentuk yang lebih bulat, dan pengalaman yang lebih halus.


**Privasi & Setup 🛡️**

- Peningkatan Onboarding dengan halaman Privasi khusus yang menjelaskan arsitektur offline-first.

- Cek kompatibilitas yang lebih ketat untuk memastikan pengalaman terbaik di HyperOS 3.0.


**Perbaikan 🛠️**

- Memperbaiki masalah kritis di mana pengaturan hilang setelah reboot perangkat (dimigrasikan ke database).

- Memperbaiki tombol "Keluar" di island Navigasi yang muncul sebagai ikon alih-alih teks.

- Memperbaiki pemuatan Ikon Aplikasi di Pengaturan.

---

### v0.3.0: Pembaruan Global

**Notifikasi Tersembunyi 👻**

Opsi baru untuk menyembunyikan notifikasi dari panel sistem sambil tetap mengaktifkan Island. Cek Pengaturan Global!


**Bahasa Baru 🌍**

Terima kasih khusus kepada komunitas kami untuk terjemahan ini:

- 🇧🇷 Portugis (Brasil)

- 🇵🇱 Polandia

- 🇰🇷 Korea


- 🇺🇦 Ukraina


**Kustomisasi Navigasi 🧭**

Anda sekarang dapat memilih informasi apa yang muncul di sisi Kiri dan Kanan Island Navigasi (Jarak, ETA, Instruksi).


**Perlindungan Spoiler 🛡️**

Fitur baru "Istilah Diblokir". Tentukan kata secara global atau per-aplikasi untuk mencegah notifikasi spesifik muncul di Island.


**Peningkatan Panggilan 📞**

Logika deteksi ditingkatkan untuk mendukung lebih banyak aplikasi VoIP dan Dialer.


**Perbaikan & Peningkatan 🛠️**

- Memperbaiki bug kritis di mana aplikasi macet saat memuat setelah reboot.

- Memperbaiki notifikasi yang kadang menampilkan nama paket mentah (mis. "com.google...") alih-alih konten.

- Mendesain ulang lembar Konfigurasi Aplikasi untuk penggunaan yang lebih baik.

- Meningkatkan layar Cek Kompatibilitas dengan info perangkat yang detail.

---

### v0.2.0: Informasi Pembaruan

- **Progres Canggih:** Menambahkan dukungan untuk "Progres Langkah" (mis. 1 dari 3) dan bilah progres dengan ikon di dalam panel notifikasi.

- **Sistem Prioritas:** Pengaturan "Perilaku Island" baru. Pilih antara "Paling Baru", "Siapa Cepat", atau daftar "Prioritas Aplikasi" kustom.

- **Penyaringan Cerdas:** Peningkatan deteksi notifikasi duplikat dan unduhan grup.

- **Peningkatan Visual:** Memperbaiki masalah tata letak pada instruksi Navigasi.

- **Konfig Per-Aplikasi:** Kustomisasi Timeout dan perilaku Mengambang (Floating) per aplikasi.

---

### v0.1.0: Pembaruan Ekspresif

- **Perombakan UI Besar:** Desain Material 3 Expressive baru dengan animasi halus.

- **Island Lebih Baik:** Teks sekarang muncul di sisi kanan. Menambahkan Centang Hijau untuk unduhan selesai.

- **Konfig Per-Aplikasi:** Pilih tipe notifikasi spesifik (Musik, Peta, Panggilan) per aplikasi.

- **Filter Cerdas:** Memblokir notifikasi duplikat dan menghemat baterai.

- **Pustaka Baru:** Filter aplikasi berdasarkan kategori dan urutan sortir.

- **Lokalisasi:** Menambahkan dukungan bahasa Spanyol.
