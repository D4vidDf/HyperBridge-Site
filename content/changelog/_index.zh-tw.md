---
title: "Changelog"
description: "Release history and updates for HyperBridge (繁體中文)."
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

### v0.5.1: 修復 & 改進

**修復 & 穩定**

WhatsApp 重複通知修復：解決了 WhatsApp 通知重複出現的問題。

通知閃爍 & 崩潰修復：修復了短時間內收到多個通知導致的崩潰問題。應用程式現在可以安全地正常更新通知，消除了通知閃爍並提高了穩定性。

通知 Intent 恢復：修正了點擊精選通知時會錯誤地跳到故障排除畫面而不是原始應用程式的問題。


**功能 & 最佳化**

關閉通知時移除超級島通知：新增選項，當系統通知關閉時，超級島通知將自動移除。

精選通知診斷：在引導過程中新增檢查介面，用於驗證您的小米設備是否支援精選通知以及是否已啟用所需權限。

設定健康整合：精選通知的權限狀態現在會持續監控並顯示在設定健康介面中。

故障排除介面：新增專門的故障排除介面，引導使用者啟用必要的隱藏系統權限（或使用Shizuku），以使超級島通知在嚴格的小米 ROM 上正常運作。

更清晰的術語：將設定選單中的“即時更新”部分重新命名為“通知管理”，以更好地體現其用途。

設定介面最​​佳化：恢復了預設設定清單中「永久通知島」選項的圓角效果。

西班牙文翻譯：為所有新增的故障排除對話方塊、設定健康檢查和通知管理設定新增了完整的西班牙文翻譯

---

### v0.5.0: 即時更新

** 中國版ROM 支援 **

- 啟用新的 Sui & Shizuku 變通方案，即可在執行 HyperOS 中國版ROM 且不支援原生功能的裝置上體驗小米超級島。


**主題引擎改善**

- 引擎選擇：現在您可以為每個應用程式或預設選擇動畫引擎。

- Shizuku 變通方案：已將切換開關直接新增至主題編輯器的引擎標籤。

- 行為控制：現在完全支援自訂逾時和彈出邏輯。


**智慧永久島**

- 隨時可見：即使沒有活動通知，超級島也會保持在螢幕上。

- 自動隱藏：現在，當螢幕上顯示小工具時，永久島會自動隱藏。


**智慧型圖示著色**

- 新的檢測系統會自動分析提取通知圖標，如果圖標是深色或單色的，則會聰明地將其著色為白色。


**下載 &進度**

- 全新專用下載佈局：獨立的下載和進度佈局，採用專屬視覺設計。

- 文字進度支援：即使沒有原生進度條，也能解析應用更新的百分比文字（例如「12%」）。

- 智慧過濾：限制基於文字的進度檢查，僅用於商店和安裝程式下載，以防止誤觸其他狀態通知。


**訊息修復**

- 修正了 Telegram 等應用程式中缺少寄件者頭像的問題（現在可以正確提取「sender_person」資料）。

- 解決了分組通知（聊天摘要）無法觸發超級島的問題。

- 修正了通知更新競爭條件所導致的超級島消失錯誤。


**系統 &引導流程**

- 全新引導介面：關鍵權限的設定流程更方便。

- 啟動修復：服務現在在重新啟動後能夠立即可靠地啟動。

- 更聰明的提醒：下載和媒體更新將靜默進行，而訊息更新則會可靠地觸發彈出動畫。

- 導航：應用程式切換更加流暢快速

---

### v0.4.2: 修補更新

- **崩潰修復：**修正了在繁體中文環境下，開啟設定選單會導致應用程式閃退的嚴重問題。

- **底層最佳化：** 一般錯誤的修正與穩定性提升，確保您的超級島順暢運作。

---

### v0.4.0: 自訂更新

**主題引擎 🎨**

史上最大更新！現在你可以完整自訂 Dynamic Island 的視覺體驗。

- **主題創建器： **直接在手機上設計主題，並即時預覽。

- **精細控制： **自訂圖示顯示方式、來電通知的顏色與形狀，並為單一 App 設定覆蓋選項。

- **智慧配色： **自動從 App 圖示提取鮮明品牌色。

- **動作級自訂 (Beta)：** 微調特定通知動作的外觀。

- **分享： **將主題匯出或匯入為 <i>.hbr</i> 套件。



**小工具支援 🧩**

將標準 Android 小工具固定到超級島，快速存取——即使在 **鎖定畫面** 也能使用！

- 可選 互動模式 **Interactive** 提升速度，或 快照模式 **Snapshot**節省電量。



**通知引擎 2.0 ⚡**

核心邏輯全面重寫，提升穩定性：

- **更智慧的解析： **修正通知只顯示套件名稱（如 com.whatsapp）而非訊息內容的問題。

- **防閃爍： **新增內容雜湊機制，避免重複更新與畫面卡頓。

- **幽靈通知修正： **解決通知消失後 Island 遺留的 race condition 問題。



**視覺更新 ✨**

- 重新設計「設計」分頁，使用流暢且原生感的旋轉木馬介面。

- 新增「文字膠囊」按鈕，讓通知動作更清楚。

- 新增對 🇮🇩 印尼語與 🇹🇷 土耳其語的支援。



<i>備註：本次版本包含重大架構調整，如發現任何問題，請至 GitHub 回報！</i>

---

### v0.3.1: 備份 & 多語言更新

**備份 & 還原 📦**

全新的進階功能！現在可以安全地將您的設定、封鎖名單與 App 優先順序匯出為 .hbr 檔案，並能隨時進行還原。


**新語言支援 🌍**

新增支援：

- 🇩🇪 德語

- 🇷🇺 俄語
- 
🇺🇦 烏克蘭語（已優化）

<i>外加：全新的內建語言切換器，讓您可以直接變更 App 語言而不影響系統設定。</i>


**視覺翻新 🎨**

App 已更新為 **Material 3 豐富表現**設計。享受更大的標題、更圓潤的形狀以及更流暢的使用體驗。


**隱私 & 設定 🛡️**

- 優化了初始設定流程，新增專屬的隱私頁面以詳細說明「離線優先」的架構。

- 執行更嚴格的相容性檢查，確保在 HyperOS 3.0 上擁有最佳體驗。


**修復 🛠️**

- 修正了裝置重啟後設定遺失的重大問題（已遷移至資料庫）。

- 修正了導航島中的「退出」按鈕顯示為圖示而非文字的問題。

- 修正了設定頁面中 App 圖示載入的問題。

---

### v0.3.0: 預設功能更新

**隱藏通知 👻**

新增可從系統面板隱藏通知，同時保持超級島運作的選項。請查看預設設定！


**新語言支援 🌍**

特別感謝社群提供的翻譯貢獻：

- 葡萄牙語（巴西）
- 
- 波蘭語

- 韓語


- 烏克蘭語


**導航自訂功能 🧭**

您現在可以選擇導航時島左側與右側顯示的資訊（距離、預計抵達時間、導航指令）。


**防劇透保護 🛡️**

全新「封鎖關鍵字」功能。可進行預設設定或針對個別 App 定義關鍵字，防止特定通知顯示在超級島上。


**通話功能優化 📞**

優化偵測邏輯，以支援更多種類的 VoIP 與撥號應用程式。


**修復 & 優化 🛠️**

- 修正了裝置重啟後 App 可能卡在載入畫面的重大錯誤。

- 修正了通知有時會顯示原始套件名稱（例如：com.google...）而非實際內容的問題。

- 重新設計 App 配置頁面以提升易用性。

- 優化相容性檢查畫面，提供更詳細的裝置資訊。

---

### v0.2.0: 資訊更新

- **進階進度顯示：**新增支援「分段進度」（例如：1/3）以及通知欄內含圖示的進度條。

- **優先級系統：**全新的「超級島行為」設定。可選擇「最近優先」、「先到先得」或自訂「App 優先順序」清單。

- **智慧過濾：**優化了重複通知與群組下載的偵測機制。

- **視覺優化：**修正了導航指令的佈局問題。

- **個別 App 設定：**可針對不同 App 自訂逾時時間與懸浮行為。

---

### v0.1.0: 快速更新

- **介面大改版：**全新的 Material 3 豐富表現設計，搭配流暢的動畫效果。

- **超級島優化：**文字現在會顯示在右側。新增下載完成時的綠色勾選圖示。

- **個別 App 設定：**可針對不同 App 選擇特定的通知類型（音樂、地圖、電話）。

- **智慧過濾：**阻擋重複通知並節省電力。

- **全新資料庫：**可按類別過濾 App 並自訂排序方式。

- **在地化：**新增西班牙語支援。
