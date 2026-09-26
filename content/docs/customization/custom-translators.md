---
title: "Custom Translators Guide"
description: "Learn how to create, configure, import, and share declarative notification translators in Hyper Bridge."
weight: 2
showTableOfContents: true
---

Hyper Bridge 0.6.0 introduces the **Custom Translators Framework**, a declarative engine that lets you customize exactly how notifications from any app are transformed into native Xiaomi HyperOS **HyperIsland** (HyperIsland) cards and compact status pills.

Whether you want to highlight messages from VIP contacts, turn delivery progress notifications into live tracked waypoints, add 1-tap OTP verification buttons, or hide redundant notification actions, Custom Translators give you full control.

{{< alert icon="lightbulb" >}}
**Looking for the complete technical JSON schema and developer architecture?**  
Check out the [Advanced Translators Technical Specification]({{< ref "docs/advanced/translators-specification.md" >}}).
{{< /alert >}}

---

## What is a Custom Translator?

A **Translator** acts as a rule-based bridge between standard Android notifications (`StatusBarNotification`) and the Xiaomi HyperIsland notification framework.

Each translator defines:
1. **Target Scope & Conditions:** Which app(s), channels, or notification types to intercept (using pattern matching, keywords, or regex).
2. **Data & Progress Extraction:** How to extract numbers, delivery percentages, or contact names from the notification text.
3. **Action Buttons & Smart Actions:** Which action buttons appear on the island, including 1-tap OTP copying, map navigation, and inline replies.
4. **Presentation & Compact Pill Design:** The visual layout template, dynamic text variables, and compact pill styling.
5. **Theme & Appearance:** Custom accent colors, icon shapes, and bindings to installed HyperThemes.
6. **Behavior & Engine Mode:** Float display duration, dismissal behavior, and whether to use the Custom Island or Native Live Updates engine.

---

## Managing Translators in the App

Hyper Bridge provides intuitive access to your translators across the application:

### 1. From the Design Hub
In the **Design** tab of Hyper Bridge:
- **Bento Card (`Translators`)**: Tap the card to open the **Translator Manager**, or tap the `+` action on the card to launch the **Visual Translator Editor** immediately.
- **Floating Action Button (`+`)**: Tap the main `+` FAB and select **Smart Translator**.

### 2. Translator Manager Screen
The **Translator Manager** (`DesignRoute.TRANSLATOR_MANAGER`) is your central control panel:
- **Live Preview Toggle**: Toggle the top preview bar to visualize your active rules in real time.
- **Multi-Dimensional Filtering:** Filter translators by:
  - **Scope:** Global, Specific Apps, System Apps, or Notification Type.
  - **Status:** Active or Inactive.
  - **Target App:** Show only rules affecting a specific application.
  - **Author & Icon:** Filter by creator or custom badge icon.
- **Search:** Quickly search translators by name, description, or target package name.
- **Priority Reordering:** Translators are evaluated by priority (highest number first). You can adjust priorities directly to ensure specific rules override generic ones.
- **Quick Toggles:** Enable or disable any translator with a single tap without deleting its configuration.
- **SAF Import & Export**: Import community `.htrans` / `.json` rules or export your own creations directly to device storage.

### 3. App Configuration Screen
When configuring any individual app under **Library** &rarr; **App Settings**, you will find a dedicated **Custom Translators** section:
- See all translators currently active for that specific application.
- Tap the **+ Create Translator** shortcut to launch the visual editor with the app's package name automatically pre-filled.

---

## Step-by-Step: Creating a Custom Translator

Follow this step-by-step walkthrough to build your first custom translator using the visual editor.

### Step 1: General Info & Target Scope
Open the visual editor by tapping **Create Custom Translator** in the Translator Manager:
1. **Name & Description:** Give your translator a recognizable name (e.g., `WhatsApp VIP Chat` or `Uber Live Tracker`).
2. **Author:** Enter your handle or community username.
3. **Target Scope:**
   - **Specific Apps:** Target one or more installed user applications (e.g., `com.whatsapp`, `com.spotify.music`).
   - **System Apps:** Explicitly target system applications (e.g., Screen Recorder, Download Manager, System UI).
   - **Notification Type:** Apply this rule to all apps categorized under a type (e.g., Messaging, Media, Calls, Navigation).
   - **Global:** Apply across all notifications matching your specific regex conditions.
4. **Icon Badge:** Pick an icon representing your rule from the preset library.

---

### Step 2: Matching Conditions & Rules
Define the exact conditions that must be met for this translator to activate:
- **Keyword & Regex Matching:**
  - **Title Regex:** Match specific words in the title (e.g., `(?i).*(delivery|order).*`).
  - **Text Regex:** Match content within the notification body text.
  - **Subtext Regex:** Match secondary summary text.
- **Category & Channel:** Target a specific Android notification channel ID (e.g., `order_updates`) or category (`CATEGORY_MESSAGE`, `CATEGORY_PROGRESS`).
- **Type-Specific Matchers:**
  - **Messaging / Chat:** Filter by specific sender name (e.g., `Mom|Boss|Alice`), conversation title, or restrict to group chats.
  - **Media:** Match specific artist names or album titles.
  - **Calls:** Filter by incoming, ongoing, or missed call status.
  - **Navigation:** Match turn-by-turn instructions or distance milestones.
  - **Progress:** Match notifications within a specific percentage range (e.g., only trigger between `0%` and `90%`).

---

### Step 3: Action Buttons & Smart Actions
Configure up to 3 interactive buttons displayed on the expanded island card:
1. **Source Selection:**
   - **Notification Action:** Re-uses an original action button from the app's notification. You can match it by position (Index `0`, `1`, `2`) or by **Title Regex** (e.g., `(?i)reply|answer`).
   - **Smart Action:** Injects an intelligent Hyper Bridge utility:
     - **OTP Copy:** Detects and copies one-time verification codes to the clipboard with one tap.
     - **Open URL:** Detects links and opens them in your default browser.
     - **Dial Number:** Extracts phone numbers and opens the phone dialer.
     - **Track Package:** Opens package tracking links directly.
   - **Inline Reply:** Provides a direct text input field on the island for quick chat replies.
2. **Visibility Toggling:** Hide redundant or unwanted actions (e.g., keep "Mark as Read" while hiding "Mute").
3. **Display Modes:** Choose between **Icon Only**, **Text Only**, or **Icon & Text**.

---

### Step 4: Presentation, Templates & Compact Pill
Customize the visual card and its status bar appearance:
1. **Presentation Mode:**
   - **Standard:** Clean default card layout with avatar/icon, title, subtitle, and action buttons.
   - **Layout Templates:** Choose from specialized layout presets:
     - `tpl_weather_nav`: Navigation and weather updates.
     - `tpl_payment_wallet`: Payment confirmations and transaction receipts.
     - `tpl_call_kit`: Call management with accept/decline action controls.
     - `tpl_ride_delivery`: Live delivery tracking with waypoint progress.
     - `tpl_queue_wait`: Queue and wait time status.
     - `tpl_parking_meter`: Parking timer with live countdown.
     - `tpl_file_transfer`: File download/upload with percentage bar.
     - `tpl_media_compact`: Music card with artist, track, and playback controls.
   - **RAW_PARAM_V2 (Direct Xiaomi Island Protocol):** Advanced mode for developers and theme authors. Allows supplying a raw Xiaomi HyperOS `param_v2` JSON payload template with variable tokens, custom image injections, and direct action key bindings.
     {{< alert icon="gear" >}}
     **Streamlined Editor Experience:** When `RAW_PARAM_V2` is active, Hyper Bridge automatically hides manual visual builder tabs (Pill, Presentation slots, Progress, Action slots). The visual editor streamlines its interface to focus exclusively on Target Apps & Scope, Matching Conditions, Custom Variables & Regex, and Behavior Overrides.
     {{< /alert >}}
2. **Dynamic Text Templates & Cascading Fallbacks:** Use variable chips or syntax to insert live information into titles, subtitles, or raw JSON templates:
   - Built-in tokens: `{notif.title}`, `{notif.text}`, `{notif.sender}`, `{notif.conversation_title}`, `{notif.media_artist}`, `{notif.progress}`, `{app.name}`.
   - Cascading fallbacks: `{media.artist | notif.text | "Unknown Artist"}` or `{var.driver ?: "Driver"}` evaluate candidates from left to right, preventing blank placeholders.
3. **Compact Pill Customization:** Configure how the pill looks in the top status bar when collapsed (for Standard & Template modes):
   - **Left Slot:** Choose between `Icon and Text`, `Icon Only`, `Text Only`, `Contact Avatar`, or `Hidden`.
   - **Right Slot:** Choose between `Auto`, `Progress Percent (%)`, `Live Timer`, `Highlight Text`, or `None`.

---

### Step 5: Themes & Appearance
Control the color palette and graphic styling:
- **Theme Binding:** Bind this translator to a specific installed HyperTheme, or set it to automatically inherit your active system theme.
- **Highlight Color Override:** Override the primary accent color for this notification (e.g., WhatsApp Green `#25D366`, Uber Black `#000000`, Telegram Blue `#2AABEE`).
- **Icon Shape & Padding:** Select icon masks (`Circle`, `Squircle`, `Rounded Rect`) and adjust icon padding.

---

### Step 6: Behavior & Engine Motor
Configure how the island animates and dismisses:
- **Engine Mode:**
  - **Inherit:** Uses the global motor setting configured in Hyper Bridge.
  - **Custom Island:** Renders via Hyper Bridge's native floating HyperIsland engine.
  - **Native Live Update:** Routes the notification through Xiaomi's native HyperOS live update notification channel.
- **Float Duration:** Set how many seconds the expanded island stays open before collapsing into the compact pill.
- **Island Timeout:** Automatically dismiss the island after a set time (e.g., 30 seconds for quick alerts).
- **Shade Display:** Choose whether the notification remains visible in the standard Android notification shade.

---

### Step 7: Testing with the Live Preview
At the top of the editor, an interactive **HyperOS 3 Island Preview** updates in real-time as you tweak settings:
- Tap the **Expanded Island / Compact Pill** toggle to verify both states.
- Verify text wrapping, variable replacement, button styling, and theme colors before saving.

---

## Importing, Exporting & Sharing

Custom translators can be distributed as standalone files or bundled into complete theme packages:

### 1. The `.htrans` Package Format
A standard `.htrans` file is a compressed ZIP archive containing:
- `translator.json`: The complete declarative translator definition.
- `icons/` *(optional)*: Custom vector or bitmap icons referenced by action buttons.

Hyper Bridge also seamlessly supports importing raw `.json` translator files.

### 2. Exporting a Translator
1. Open the **Translator Manager**.
2. Tap the **Export** icon on any translator card.
3. Choose a destination folder using Android's Storage Access Framework (SAF) document picker to save your `.htrans` file.

### 3. One-Tap Sharing
Tap the **Share** button on any translator card to open the standard Android Share sheet. You can send your `.htrans` file directly via Telegram, Discord, Email, or WhatsApp.

### 4. Importing a Translator
1. In the **Translator Manager**, tap the **Import** button in the top app bar.
2. Select any `.htrans` or `.json` file from your device storage.
3. Hyper Bridge automatically validates the archive, extracts any bundled icons, verifies security against path traversal, and registers the translator in your database.

### 5. Theme-Pack Bundling (`.htheme` / `.hbr`)
Theme creators can bundle custom translators directly inside their theme packages!  
Simply include a `translators/` folder inside your `.htheme` archive containing `.htrans` or `.json` files. When a user installs your theme, all bundled translators are automatically discovered and registered.

---

## Next Steps

- Check out the full [Advanced Translators Technical Specification]({{< ref "docs/advanced/translators-specification.md" >}}) for complete JSON schemas, Room database entity structures, and runtime pipeline details.
- Explore the [Theme Creator Guide]({{< ref "theme-creator.md" >}}) to build complete icon and color themes for Hyper Bridge.
- Learn about [Smart Actions]({{< ref "docs/features/smart-actions.md" >}}) to supercharge your notification buttons.