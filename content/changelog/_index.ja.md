---
title: "Changelog"
description: "Release history and updates for HyperBridge (日本語)."
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

### v0.5.2: Inline Reply, Performance & Stability *(English)*

**New Inline Reply Feature!**

- **Inline Reply:** You can now reply to messages directly from the island without opening the app!

- **Customization:** Fully customize the look of the new inline reply editor globally or per-app.

- **Global Settings:** Access the new Reply customization section directly from the Global Settings -> Inline reply.



**Play Store Crash Fixes & Stability**

- **Theme Creator:** Fixed a crash when parsing large sets of custom assets.

- **Performance:** Resolved an ANR (Application Not Responding) issue on the initial Welcome Screen.

- **Widget Picker:** Eliminated crashes and Out-Of-Memory (OOM) errors caused by extremely large widget previews.

- **UI Layouts:** Fixed Jetpack Compose layout constraint exceptions that crashed the app when resizing certain menus.

- **Backups:** Resolved OOM errors when importing large backup files by optimizing JSON parsing.

- **Warm Starts:** Significantly improved app launch speeds and eliminated UI thread blocking on mid-range devices.

- **Background Service:** Completely overhauled the Notification Listener memory architecture, dropping background overhead to 0% and improving battery life.

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

### v0.4.2: 緊急修正アップデート

- **クラッシュの修正:** 繁体字中国語で設定メニューを開いた際にアプリがクラッシュする重大な不具合を修正しました。

- **内部改善:** アイランドを快適にご利用いただけるよう、全般的な不具合修正と安定性の改善を行いました。

---

### v0.4.0: カスタマイズアップデート

**テーマエンジン 🎨**

過去最大のアップデート！Dynamic Islandの表示を自由にカスタマイズできるようになりました。

- **テーマクリエイター:** リアルタイムプレビューを見ながら、端末上で直接テーマをデザインできます。

- **細かいコントロール:** アイコンの表示方法を細かく指定したり、通話通知の色や形をカスタマイズしたり、アプリごとの個別設定を行えます。

- **スマートカラー:** アプリアイコンから鮮やかなブランドカラーを自動で抽出します。

- **アクションごとのカスタマイズ（ベータ）:** 特定の通知アクションの見た目を細かく調整できます。

- **共有:** テーマを持ち運び可能な<i>.hbr</i>パッケージとしてエクスポート・インポートできます。



**ウィジェット対応 🧩**

標準的なAndroidウィジェットをアイランドにピン留めして、すぐにアクセスできるようになりました。**ロック画面**でも使用可能です！

- スピード重視の**インタラクティブ**モードか、バッテリー効率重視の**スナップショット**モードを選択できます。



**通知エンジン 2.0 ⚡**

安定性向上のため、コアロジックを全面的に書き直しました:

- **解析の高度化:** 通知にメッセージ内容の代わりにパッケージ名（例: com.whatsapp）が表示される不具合を修正しました。

- **ちらつき防止:** 新しいコンテンツハッシュ機能により、不要な更新やちらつきを防ぎます。

- **ゴースト表示の修正:** 通知を消してもアイランドが残ってしまう競合状態を解決しました。



**ビジュアルの刷新 ✨**

- ネイティブな操作感の滑らかなカルーセルで、「デザイン」タブを再デザインしました。

- より分かりやすい通知アクション用の「テキストピル」ボタンを追加しました。

- 🇮🇩 インドネシア語と🇹🇷 トルコ語に対応しました。



<i>注: 今回のリリースには大規模なアーキテクチャ変更が含まれます。不具合を見つけた場合はGitHubでご報告ください！</i>

---

### v0.3.1: バックアップ＆多言語アップデート

**バックアップと復元 📦**

パワーユーザー向けの新機能！設定、ブロックリスト、アプリの優先度を.hbrファイルに安全にエクスポートし、いつでも復元できます。


**新しい言語 🌍**

以下の言語に対応しました:

- 🇩🇪 ドイツ語

- 🇷🇺 ロシア語

- 🇺🇦 ウクライナ語（改善版）

<i>さらに、システム設定に影響を与えずにアプリ内で言語を変更できる、新しい言語選択機能を追加しました。</i>


**ビジュアルの刷新 🎨**

アプリが**Material 3 Expressive**デザインにアップデートされました。より大きなヘッダー、丸みを帯びた形状、スムーズな操作性をお楽しみください。


**プライバシーとセットアップ 🛡️**

- オフラインファースト設計を説明する専用のプライバシーページを、オンボーディングに追加しました。

- HyperOS 3.0で最良の体験を得られるよう、互換性チェックをより厳密にしました。


**修正 🛠️**

- 端末再起動後に設定が失われる重大な不具合を修正しました（データベースへの移行により対応）。

- ナビゲーションアイランドの「終了」ボタンがテキストではなくアイコンで表示される不具合を修正しました。

- 設定画面でのアプリアイコンの読み込みを修正しました。

---

### v0.3.0: グローバルアップデート

**通知の非表示 👻**

アイランドを有効にしたまま、システムパネルから通知を非表示にする新しいオプションを追加しました。全体設定を確認してください！


**新しい言語 🌍**

これらの翻訳にご協力いただいたコミュニティの皆様に感謝します:

- 🇧🇷 ポルトガル語（ブラジル）

- 🇵🇱 ポーランド語

- 🇰🇷 韓国語


- 🇺🇦 ウクライナ語


**ナビゲーションのカスタマイズ 🧭**

ナビゲーションアイランドの左側と右側に表示する情報（距離、到着予定時刻、案内）を選択できるようになりました。


**ネタバレ防止 🛡️**

新しい「ブロックするキーワード」機能を追加。特定の単語を全体またはアプリごとに設定し、該当する通知がアイランドに表示されないようにできます。


**通話機能の改善 📞**

より幅広いVoIPアプリや電話アプリに対応できるよう、検出ロジックを改善しました。


**修正と改善 🛠️**

- 再起動後にアプリの読み込みが止まってしまう重大な不具合を修正しました。

- 通知の内容ではなく、パッケージ名（例: "com.google..."）がそのまま表示されることがある不具合を修正しました。

- 使いやすさ向上のため、アプリ設定シートを再デザインしました。

- 詳細な端末情報を表示するよう、互換性チェック画面を改善しました。

---

### v0.2.0: 情報アップデート

- **進行状況の強化:** 「ステップ進行状況」（例: 3件中1件）と、通知パネル内でアイコン付きの進行バーに対応しました。

- **優先度システム:** 新しい「アイランドの動作」設定を追加。「最新順」「先着順」、またはカスタムの「アプリ優先度」リストから選択できます。

- **スマートフィルタリング:** 重複した通知やグループ化されたダウンロードの検出精度を向上しました。

- **表示の改善:** ナビゲーション表示のレイアウトの不具合を修正しました。

- **アプリごとの設定:** アプリごとにタイムアウトやポップアップ表示の挙動をカスタマイズできます。

---

### v0.1.0: エクスプレッシブアップデート

- **UIの大幅刷新:** スムーズなアニメーションを備えた新しいMaterial 3 Expressiveデザインを採用しました。

- **アイランドの改善:** テキストが右側に表示されるようになりました。ダウンロード完了時に緑色のチェックマークを追加しました。

- **アプリごとの設定:** アプリごとに特定の通知タイプ（音楽、マップ、通話）を選択できます。

- **スマートフィルター:** 重複通知をブロックし、バッテリーを節約します。

- **新しいライブラリ:** カテゴリや並び順でアプリを絞り込めます。

- **ローカライズ:** スペイン語に対応しました。
