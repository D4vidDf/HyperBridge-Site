---
title: "Theme Creator Guide"
description: "How to customize shapes, colors, per-app styling, and bundled custom translators using HyperThemes."
weight: 1
showTableOfContents: true
---

This guide covers how to customize and create themes using the **In-App Theme Creator** in Hyper Bridge:
- Build, preview, and customize colors, geometric masks, call styles, and engine behaviors directly on your device.
- Export your creations or import themes shared by the community.

{{< alert icon="lightbulb" >}}
**Looking for the developer package specification or Android Intent API?**  
See the [Theme Packaging Specification (.hbr)]({{< ref "docs/advanced/theme-packaging-spec.md" >}}) in the Advanced & Developer documentation.
{{< /alert >}}

---

## Visual Theme Creator (In-App)

Hyper Bridge 0.6.0 includes a full-featured **Visual Theme Creator** (`ThemeCreatorScreen`). You can build, preview, edit, and apply beautiful custom island themes directly on your phone without touching JSON or ZIP files.

```mermaid
flowchart TD
    Hub["Design Hub"] --> Create["Create Theme / Edit Theme"]
    Create --> LivePrev["Interactive Island Preview\n(Accept/Decline, App Colors, Masks)"]
    Create --> Sections["Theme Creator Sub-Menus"]
    
    Sections --> SecColors["🎨 Colors & Color Mode\nHex picker, App Icon color sampling"]
    Sections --> SecIcons["📐 Icons & Shapes\nCircle, Squircle, Cookie, Clover, Padding"]
    Sections --> SecCalls["📞 Call Controls\nAnswer & Decline colors, shapes, custom icons"]
    Sections --> SecBeh["⚡ Engine & Behavior\nFloat duration, timeout, Live Update engine"]
    Sections --> SecNav["🧭 Navigation & Reply\nTurn-by-turn colors, inline reply appearance"]
    Sections --> SecActions["🔘 Default Actions\nReply, Archive button styles & icons"]
    Sections --> SecApps["📱 App-Specific Overrides\nPer-app highlight & button customizations"]
```

### 1. Accessing Theme Management

Open **Design Hub** &rarr; tap the **Themes & Styles** Bento card:

{{< figure src="/img/docs/themes/en/01-themes-manager-list.jpg" alt="Theme Manager Library" caption="Figure 1: The Theme Manager library showing installed themes, active selection checkmark, and edit/export actions." >}}

From here you can:
- **Switch Active Theme:** Tap any theme card to activate it immediately.
- **Manage Custom Themes:** Tap the **Edit (Pencil)** icon to modify an existing theme, **Share** to export as an `.hbr` bundle, or **Trash** to delete it.
- **Add New Theme:** Tap the **`+` (Floating Action Button)** in the bottom right corner:

{{< figure src="/img/docs/themes/en/02-add-new-theme-sheet.jpg" alt="Add New Theme Action Sheet" caption="Figure 2: Add New Theme sheet with options to Create New Theme, Search online catalog, or Import from file." >}}

Choose **Create New Theme** to launch the visual studio, **Import** to load a local `.hbr`/`.htheme` archive, or **Search** to browse community creations.

---

### 2. The Theme Creator Studio Overview

When you create or edit a theme, the **Theme Creator Studio** (`ThemeCreatorScreen`) opens with an interactive live canvas at the top:

{{< figure src="/img/docs/themes/en/03-create-theme-overview.jpg" alt="Theme Creator Studio Overview" caption="Figure 3: Theme Creator main studio featuring the live island simulator, Theme Info button, and module navigation." >}}

#### Theme Info & Metadata
Tap **Edit Theme Info** to brand your creation:

{{< figure src="/img/docs/themes/en/04-theme-info-metadata.jpg" alt="Theme Info & Metadata Sheet" caption="Figure 4: Setting the theme icon, name, author credits, and description." >}}

- **Select Icon:** Pick an emblem or custom artwork for your theme card.
- **Theme Name & Author Name:** Give your theme a distinctive identity.
- **Description:** Add release notes or styling tips.

---

### 3. Step-by-Step Theme Modules

The creator organizes theme properties into modular, focused subscreens:

#### ⚡ Behavior & Triggers (`CreatorRoute.BEHAVIOR_MENU`)
Configure how the notification engine treats this theme:

{{< figure src="/img/docs/themes/en/05-theme-behavior-triggers.jpg" alt="Behavior & Triggers Menu" caption="Figure 5: Engine mode selection, island behavior timeouts, and triggered notification event types." >}}

- **Engine:** Switch between **Live Updates (Custom Island Engine)** and **Native Xiaomi Live Updates**.
- **Island Behavior:** Fine-tune auto-dismiss durations, duplicate handling, and lock screen visibility.
- **Notification Types:** Choose which event categories trigger islands for this theme.

---

#### 🎨 Colors & Color Mode (`CreatorRoute.COLORS`)
Define the visual color palette across your island:

{{< figure src="/img/docs/themes/en/06-colors-palette-presets.jpg" alt="Colors & Presets" caption="Figure 6: Preset color chips, dynamic app color extraction, and Material You system wallpaper matching." >}}

- **Preset Colors:** Tap quick accent swatches (Green, Red, Blue, Orange, Purple).
- **Dynamic Colors:**
  - **Use App Colors:** Automatically extracts and applies the dominant color from each notification app's icon for a customized look.
  - **Material You (System):** Extracts tonal palettes directly from your Android wallpaper.
- **Custom Color Picker:** Tap the **Custom** tab to choose any precise hex code:

{{< figure src="/img/docs/themes/en/07-colors-custom-hex.jpg" alt="Custom Hex Color Picker" caption="Figure 7: Custom hex color selection." >}}

---

#### 📐 Icons & Shapes (`CreatorRoute.ICONS`)
Style the geometric framing and proportions of notification avatars and status indicators:

{{< figure src="/img/docs/themes/en/08-icons-shapes-size.jpg" alt="Icon Size & Proportions" caption="Figure 8: Icon Size slider adjusting proportions between Full and Minimal." >}}

- **Icon Size Slider:** Scale notification icons between full-bleed and compact minimalism.
- **Live State Previews:** Swipe horizontally on the preview card at the top to see your changes across notifications, calls, and media:

{{< figure src="/img/docs/themes/en/09-icons-shapes-preview.jpg" alt="Call and Media Live State Preview" caption="Figure 9: Real-time simulator rendering call buttons and status icons with active theme settings." >}}

- **Navigation & Progress Icons:** Choose custom vector glyphs for turn-by-turn guidance and completion badges:

{{< figure src="/img/docs/themes/en/10-icons-shapes-navigation.jpg" alt="Navigation and Progress Icon Options" caption="Figure 10: Customizable navigation waypoints and progress success icons." >}}

- **Geometric Mask Picker:** Apply custom corner masks to all icons:

{{< figure src="/img/docs/themes/en/11-icons-shapes-mask-picker.jpg" alt="Icon Shape Masks" caption="Figure 11: Geometric shape masks: Circle, Rounded Squircle, Cookie, Arch, and Clover." >}}

---

#### 📞 Call Controls Style (`CreatorRoute.CALLS`)
Customize incoming and ongoing phone call cards:

{{< figure src="/img/docs/themes/en/12-call-style-answer.jpg" alt="Answer Call Button Styling" caption="Figure 12: Customizing Answer button color (#34C759) and geometric shape mask." >}}

- **Answer Button:** Configure custom hex colors (default `#34C759`) and geometric masks.
- **Decline Button:** Configure end-call accents (default `#FF3B30`) and button shapes:

{{< figure src="/img/docs/themes/en/13-call-style-decline.jpg" alt="Decline Call Button Styling" caption="Figure 13: Customizing Decline button color (#FF3B30) and geometric shape mask." >}}

---

#### 🧭 Navigation Layout (`CreatorRoute.NAVIGATION`)
Fine-tune turn-by-turn GPS heads-up islands:

{{< figure src="/img/docs/themes/en/14-navigation-layout-config.jpg" alt="Navigation Layout Configuration" caption="Figure 14: Navigation layout configuration for distance, time, and maneuver instructions." >}}

- **Left Side:** Distance & Remaining Time.
- **Right Side:** Maneuver instruction (e.g., Turn Right).
- *Note:* In the Native Live Update engine, right-side content is prioritized to maintain status bar alignment.

---

#### 🔘 Global Actions & Quick Buttons (`CreatorRoute.ACTIONS`)
Configure smart action buttons attached to notifications (such as Reply, Archive, Like, Mark as Read):

{{< figure src="/img/docs/themes/en/15-global-actions-empty.jpg" alt="Global Actions Empty State" caption="Figure 15: Global Actions manager for styling action buttons based on label keywords." >}}

Tap the **`+` (Add Action)** button to create keyword matching rules:

{{< figure src="/img/docs/themes/en/16-global-actions-configure.jpg" alt="Configure Action Dialog" caption="Figure 16: Action styling rule: keyword trigger, display mode (Icon Only, Text, Both), background color, and text color." >}}

- **Keyword Matching:** Enter keywords (e.g. `'Reply'`, `'Archive'`, `'Skip'`).
- **Display Mode:** Choose between **Icon Only**, **Text**, or **Both**.
- **Colors:** Set custom button background and text/icon contrast colors.

---

#### 📱 Per-App Custom Overrides (`CreatorRoute.APPS`)
Override theme rules for specific individual applications:

{{< figure src="/img/docs/themes/en/17-app-config-empty.jpg" alt="App Configuration Overview" caption="Figure 17: App-specific styling override manager." >}}

Tap **`+`** to select an app from your device:

{{< figure src="/img/docs/themes/en/18-app-config-select-app.jpg" alt="Select Target App for Styling" caption="Figure 18: Selecting an installed application to apply custom per-app styling." >}}

You can assign unique highlight colors, distinct geometric shapes, or special button layouts for specific apps (e.g., WhatsApp in emerald green, Spotify in neon green, YouTube Music in crimson).

---

### 4. Saving & Applying Your Theme
1. Tap the **Save** button in the top-right corner of the studio.
2. In the dialog:
   - **Save & Apply**: Immediately activates your new theme as the default system style.
   - **Save Only**: Saves the theme to your library without applying it.
3. Your theme is saved locally and can be exported as an `.hbr` package at any time!

---

## Exporting, Importing & Sharing Themes

Hyper Bridge makes it easy to back up, share, and import themes without touching code:

### Exporting an In-App Theme
1. Navigate to **Design Hub** &rarr; **Themes & Styles**.
2. Tap the menu (**⋮**) or the **Export** icon on any custom theme card.
3. Choose a destination folder using Android's file picker. Hyper Bridge generates an `.hbr` theme package containing all your colors, button rules, and bundled translators.

### Importing a Community Theme
1. Download any `.hbr` or `.htheme` file from the community, Discord, Telegram, or GitHub.
2. In Hyper Bridge, go to **Design Hub** &rarr; **Themes & Styles** and tap **Import Theme** in the top bar.
3. Select your `.hbr` file. Hyper Bridge will preview the theme palette and install it into your library with one tap.

---

## Packaging Themes for Distribution (Developers)

If you are an icon pack developer, designer, or Android modder interested in:
- Manually creating `.hbr` / `.htheme` ZIP packages with custom icons,
- Bundling custom `.htrans` translators inside your theme,
- Triggering 1-tap theme installation from your companion Android app via `com.d4viddf.hyperbridge.APPLY_THEME` intents,

Please refer to the dedicated **[Theme Packaging Specification (.hbr)]({{< ref "docs/advanced/theme-packaging-spec.md" >}})** in the Advanced & Developer documentation.

---

## Next Steps

- Browse the official [10 Xiaomi Island Templates]({{< ref "docs/customization/custom-designs.md" >}}) to see how themes render across delivery, music, and boarding pass cards.
- Add live home-screen widgets into your islands with the [System Widgets Guide]({{< ref "docs/customization/widgets-guide.md" >}}).
- Create custom notification rules with the [Custom Translators Guide]({{< ref "docs/customization/custom-translators.md" >}}).
