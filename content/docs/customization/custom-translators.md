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
- **Rule Overview & Search**: Browse all registered translators or use the search bar to filter by rule name, author, or target package.
- **Multi-Dimensional Filtering**: Tap **Filters** to narrow down translators by Status (Active/Inactive), Scope (Global, Specific Apps, System Apps), or Notification Category.
- **Priority Reordering & Toggle**: Adjust priority ordering or toggle rules on/off with a single tap.
- **SAF Import & Export**: Import community `.htrans` / `.json` rules or export your own creations directly to device storage.

{{< figure src="/img/docs/translators/en/00-translators-list-empty.jpg" title="Translators Manager - Empty State" alt="Translators Manager Empty State" width="300" >}}

{{< figure src="/img/docs/translators/en/00b-translators-filter-dialog.jpg" title="Filter Translators Bottom Sheet" alt="Filter Translators Sheet" width="300" >}}

### 3. Creating a Translator
When tapping **Create Translator** (or when editing an existing template design), the visual editor opens with the live HyperIsland interactive preview:

{{< figure src="/img/docs/translators/en/00c-new-translator-default.jpg" title="New Translator Editor Canvas" alt="New Translator Canvas" width="300" >}}

---

## Step-by-Step: The Visual Editor Options & Modules

The Visual Editor is divided into specialized modules. Every design and translator can be customized across each of these modules:

### Module 1: Editor Overview & Live Preview
At the top of the editor, a real-time preview showcases how the notification appears as an **Expanded Island**, a **Compact Pill**, or in **HyperOS 3** styling. Tap between preview modes at any time to verify layout changes.

{{< figure src="/img/docs/translators/en/01-edit-overview-weather-nav.jpg" title="Visual Editor Overview with Live Preview" alt="Editor Overview Screen" width="300" >}}

---

### Module 2: Rule Info & Priority
Tap **Edit Info & Priority** to configure identity and execution sequence:
- **Translator Icon**: Select a badge icon representing your rule.
- **Theme Name**: Set a unique descriptive title (e.g. `Weather & Navigation`).
- **Author Name**: Identify the creator.
- **Execution Priority**: Value (e.g. `100`) determining evaluation precedence over generic rules.
- **Description**: Document purpose and behavioral notes.

{{< figure src="/img/docs/translators/en/02-edit-translator-info.jpg" title="Translator Identity & Priority Settings" alt="Translator Info Settings" width="300" >}}

---

### Module 3: Target Applications & Scope
Configure which apps or notification types this rule targets:
1. Tap **Target Applications** to inspect active rules and types.
2. Select **Target Scope**:
   - **Global**: Applies to all allowed applications in your Library.
   - **Specific Apps**: Explicitly limits the rule to selected installed apps.
   - **System Apps**: Targets system apps (e.g. Screen Recorder, Downloads).
   - **Types**: Restricts rule to broad notification types (Messaging, Media, Calls, Downloads, Navigation).
3. Toggle **Filter by Notification Type** to restrict rule matching to designated Android notification categories (e.g., Messages & General).

{{< figure src="/img/docs/translators/en/03-edit-target-applications.jpg" title="Target Applications Configuration" alt="Target Applications Module" width="300" >}}

{{< figure src="/img/docs/translators/en/04-edit-select-target-scope.jpg" title="Select Target Scope Sheet" alt="Select Target Scope Modal" width="300" >}}

{{< figure src="/img/docs/translators/en/05-edit-select-notification-types.jpg" title="Notification Type Category Filters" alt="Notification Category Filters" width="300" >}}

---

### Module 4: Match Conditions & Regex Rules
Define regular expression patterns and criteria to match incoming notifications:
1. Open **Match Conditions** to view configured pattern rules.
2. Tap **+ Add Condition Pattern** to view the extensive catalog of match targets across categories:
   - **Standard Properties**: Title Pattern (Regex), Text / Body Pattern (Regex), Subtext Pattern (Regex), Notification Channel ID, Category (`msg`, `call`, `progress`), Must Have Progress, Must Have Actions.
   - **Messaging & People**: Person / Sender Name (Regex), Conversation / Group Title (Regex), Group Conversation.
   - **Media & Playback**: Artist / Performer (Regex), Album Name (Regex), Playback State.
   - **Phone Calls**: Caller Name (Regex), Call State Filter.
   - **Navigation**: Navigation Instruction (Regex), Distance Text (Regex).
   - **Progress & Downloads**: Minimum Progress %, Maximum Progress %.
3. Enter regex patterns with optional named capture groups (e.g. `^(?<sender>.*?): (?<msg>.*)`).

{{< figure src="/img/docs/translators/en/06-edit-match-conditions-rules.jpg" title="Match Conditions Overview" alt="Match Conditions Overview" width="300" >}}

{{< figure src="/img/docs/translators/en/07-edit-add-match-condition-sheet.jpg" title="Add Condition Pattern Sheet" alt="Add Condition Pattern Sheet" width="300" >}}

{{< figure src="/img/docs/translators/en/08-edit-add-condition-pattern-full-list.jpg" title="Available Regex & Property Filters" alt="Match Condition Available Properties" width="300" >}}

{{< figure src="/img/docs/translators/en/09-edit-condition-regex-input.jpg" title="Regex Pattern Editor" alt="Regex Pattern Editor Input" width="300" >}}

---

### Module 5: Presentation & Layout Templates
Control visual rendering mode and variable text templates:
1. **Presentation Mode**: Choose between **Standard**, **Template** (official predefined HyperIsland layouts), or **Widget** (interactive rich widget component).
2. **Template Selector**: Switch between Xiaomi's 10 official templates.
3. **Linked Theme**: Inherit the globally active theme or bind to a custom installed theme.
4. **Left Icon Slot**: Set the source icon displayed on the left side of the island (e.g., App Icon, Custom Icon, Contact Avatar).
5. **Text & Templates with Variable Tokens**: Customize the **Title Template**, **Subtitle Template**, and **Highlight Text Template** using dynamic variable chips like `{notif.title}`, `{notif.text}`, `{notif.subtext}`.

{{< figure src="/img/docs/translators/en/10-edit-presentation-layout-overview.jpg" title="Presentation & Layout Overview" alt="Presentation & Layout Screen" width="300" >}}

{{< figure src="/img/docs/translators/en/11-edit-select-presentation-mode.jpg" title="Select Presentation Mode Sheet" alt="Select Presentation Mode" width="300" >}}

{{< figure src="/img/docs/translators/en/12-edit-presentation-theme-and-icon-slot.jpg" title="Linked Theme & Left Icon Slot" alt="Theme and Icon Slot Configuration" width="300" >}}

{{< figure src="/img/docs/translators/en/13-edit-select-linked-theme.jpg" title="Select Theme Picker" alt="Select Theme Sheet" width="300" >}}

{{< figure src="/img/docs/translators/en/14-edit-presentation-text-templates-variables.jpg" title="Title Template & Variable Token Chips" alt="Title Template Variables" width="300" >}}

{{< figure src="/img/docs/translators/en/15-edit-presentation-subtitle-template.jpg" title="Subtitle Template Configuration" alt="Subtitle Template Variables" width="300" >}}

{{< figure src="/img/docs/translators/en/16-edit-presentation-highlight-text-template.jpg" title="Highlight Text Template Configuration" alt="Highlight Text Template" width="300" >}}

---

### Module 6: Compact Pill Customization
Configure how the compact status pill is displayed when collapsed around your camera cutout:
1. Open **Pill Customization** to review the live pill preview and configure left/right sides.
2. Read the **Compact Pill Guide** to understand symmetrical layout rules and auto-detection behaviors.
3. Select **Right Pill Design**:
   - **Auto-detect (Recommended)**: Automatically renders a timer or circular progress percentage if present in the notification.
   - **Circular progress**: Shows an animated circular progress ring.
   - **Timer**: Displays a live counting chronometer.
   - **Highlight text**: Shows custom highlight text or status snippet.
   - **Empty**: Leaves the right pill slot blank.

{{< figure src="/img/docs/translators/en/17-edit-pill-customization-overview.jpg" title="Pill Customization Overview" alt="Pill Customization Overview" width="300" >}}

{{< figure src="/img/docs/translators/en/18-edit-compact-pill-guide-sheet.jpg" title="Compact Pill Design Guide" alt="Compact Pill Guide" width="300" >}}

{{< figure src="/img/docs/translators/en/19-edit-select-right-pill-design.jpg" title="Select Right Pill Design Sheet" alt="Select Right Pill Design" width="300" >}}

---

### Module 7: Progress & Timing Elements
Configure progress indicators on the island:
1. Open **Progress & Timing** to adjust how progress is tracked and displayed.
2. Select **Progress Type**:
   - **Disabled / None**: Do not show progress bar or timing indicators.
   - **Progress Bar**: Linear bar in the expanded island, circular indicator on the pill.
   - **Waypoint / Stepper**: Step-by-step waypoint markers for deliveries, routes, and milestones.
   - **Countdown / Timer**: Active elapsed or remaining countdown time indicator.

{{< figure src="/img/docs/translators/en/20-edit-progress-and-timing-overview.jpg" title="Progress & Timing Overview" alt="Progress & Timing Overview" width="300" >}}

{{< figure src="/img/docs/translators/en/21-edit-select-progress-type.jpg" title="Select Progress Type Sheet" alt="Select Progress Type" width="300" >}}

---

### Module 8: Action Buttons & Smart Actions
Configure interactive buttons displayed on the expanded island card:
1. Tap **Buttons** to manage button slots.
2. Review the **Buttons Guide**:
   - **Order of Appearance**: Buttons are placed left-to-right. Use the up and down arrow controls to adjust priority.
   - **Button Types & Sources**: Map original notification buttons, synthesized Smart Actions (OTP copy, URL, phone dial), or inline replies.
   - **Visibility & Styling**: Temporarily hide any button with the eye toggle without losing its configuration. Style buttons as icon-only, text-only, or icon with text.
3. Configure **Button 1** (or additional slots):
   - Choose **Button Source** (Notification Button vs. Smart Action).
   - Match by position/index (`0 = 1st`, `1 = 2nd`) or by **Button Title Regex**.
   - Set **Display Style** (`Icon Only`, `Text Only`, etc.) and optional **Custom Button Label**.
   - Use the **Visibility Toggle** to hide redundant buttons.

{{< figure src="/img/docs/translators/en/22-edit-buttons-overview-empty.jpg" title="Buttons Overview Canvas" alt="Buttons Configuration Canvas" width="300" >}}

{{< figure src="/img/docs/translators/en/23-edit-buttons-guide-sheet.jpg" title="Buttons Setup Guide" alt="Buttons Architecture Guide" width="300" >}}

{{< figure src="/img/docs/translators/en/24-edit-button-1-config.jpg" title="Button Slot 1 Configuration" alt="Button Slot Configuration" width="300" >}}

{{< figure src="/img/docs/translators/en/25-edit-button-1-hidden-toggle.jpg" title="Button Slot Visibility Toggle (Hidden)" alt="Button Slot Hidden Toggle" width="300" >}}

---

### Module 9: Behavior & Engine Motor Settings
Configure notification lifecycle, dismissal rules, and delivery engines:
- **Engine Configuration**: Choose between **Inherit App Default**, **Custom Floating Island Engine**, or **Native Live Update Engine**.
- **Auto-hide Island**: Automatically hide the expanded island after a duration or keep it visible until dismissed.
- **Xiaomi Featured Notifications**:
  - **Heads-up Popup**: Show a brief banner popup before collapsing into the island (with duration slider, e.g. 10s).
  - **Notification Panel**: Choose whether to keep the notification visible in the standard shade.
- **Notification Management**:
  - **Remove original notification**: Automatically clear the source notification when a Live Update is active.
  - **Dismiss with original**: Close the island when the source notification is swiped away.
  - **Enable inline reply**: Launch a custom inline reply overlay when replying directly from the island.

{{< figure src="/img/docs/translators/en/26-edit-behavior-and-engine.jpg" title="Behavior & Engine Settings" alt="Behavior & Engine Configuration" width="300" >}}
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