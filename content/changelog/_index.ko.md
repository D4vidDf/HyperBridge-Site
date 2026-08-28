---
title: "Changelog"
description: "Release history and updates for HyperBridge (한국어)."
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

### v0.3.1: 백업 & 다국어 업데이트

**백업 & 복원 📦**

고급 사용자 기능 추가! 설정, 차단 목록, 앱 우선순위를 .hbr 파일로 안전하게 내보내고 언제든지 복원할 수 있습니다.


**새로운 언어 🌍**

다음 언어가 추가되었습니다:

- 🇩🇪 독일어

- 🇷🇺 러시아어

- 🇺🇦 우크라이나어 (개선됨)

<i>또한: 시스템 언어에 영향을 주지 않고 앱 내에서 바로 변경할 수 있는 새로운 언어 선택기가 추가되었습니다.</i>


**시각적 업데이트 🎨**

앱이 Material 3 Expressive 디자인으로 새로워졌습니다. 더 큰 헤더, 더 둥근 형태, 더 부드러운 사용자 경험을 제공합니다.


**프라이버시 & 설정 🛡️**

- 오프라인 우선 구조를 설명하는 전용 프라이버시 페이지가 포함된 온보딩 개선.

- HyperOS 3.0에서 최고의 경험을 제공하기 위한 더욱 엄격한 호환성 검사.


**버그 수정 🛠️**

- 기기 재부팅 후 설정이 사라지는 치명적 오류 수정(데이터베이스로 마이그레이션됨).

- Navigation Island에서 “종료” 버튼이 아이콘으로 표시되던 문제 수정 — 이제 텍스트로 표시됩니다.

- 설정에서 앱 아이콘 로딩 문제 수정.

---

### v0.3.0: The Hidden 업데이트

- **숨겨진 알림 👻:** 알림 패널에는 숨기고, 아일랜드에서는 계속 표시되도록 하는 새로운 옵션이 추가되었습니다. 전역 설정에서 확인하세요.

- **새로운 언어 🌍:** 커뮤니티 번역에 감사드립니다:

- 🇧🇷 포르투갈어(브라질)

- 🇵🇱 폴란드어

- 🇰🇷 한국어

- 🇺🇦 우크라이나어

- **내비게이션 설정 🧭:** 거리, 도착 시간, 안내 등 어떤 정보를 좌/우에 표시할지 선택할 수 있습니다.

- **스포일러 방지 🛡️:** “차단된 단어” 기능을 통해 특정 단어가 포함된 알림이 아일랜드에 표시되지 않도록 전역 또는 앱별로 설정할 수 있습니다.

- **통화 개선 📞:** 더 다양한 VoIP 및 전화 앱을 정확하게 감지하도록 로직을 개선했습니다.

- **수정 및 개선 🛠️:**

- 재부팅 후 앱이 로딩에서 멈추는 치명적 버그 수정

- 알림 내용 대신 패키지명이 표시되던 문제 수정

- 앱 구성 패널 디자인 개선

- 기기 정보를 포함한 호환성 검사 화면 개선

---

### v0.2.0: The Information 업데이트

- **고급 진행률 표시줄:** "단계별 진행"(예: 1/3) 및 알림창 내 아이콘이 포함된 진행률 표시줄 지원이 추가되었습니다.

- **우선순위 시스템:** 새로운 "아일랜드 동작" 설정. "최신순", "선착순", 또는 사용자 지정 "앱 우선순위" 목록 중에서 선택하세요.

- **스마트 필터링:** 중복 알림 및 그룹화된 다운로드 감지 기능이 개선되었습니다.

- **시각적 개선:** 내비게이션 안내의 레이아웃 문제를 수정했습니다.

- **앱별 구성:** 앱별로 시간 제한 및 플로팅 동작을 사용자가 지정할 수 있습니다.

---

### v0.1.0: The Expressive 업데이트

- **주요 UI 개편:** 부드러운 애니메이션이 적용된 새로운 Material 3 Expressive 디자인.

- **향상된 아일랜드:** 이제 텍스트가 오른쪽에 표시됩니다. 완료된 다운로드에 녹색 체크 표시가 추가되었습니다.

- **앱별 구성:** 앱별로 특정 알림 유형(음악, 지도, 통화)을 선택할 수 있습니다.

- **스마트 필터:** 중복 알림을 차단하고 배터리를 절약합니다.

- **새로운 라이브러리:** 카테고리별로 앱을 필터링하고 정렬 순서를 변경할 수 있습니다.

- **현지화:** 스페인어 지원이 추가되었습니다.
