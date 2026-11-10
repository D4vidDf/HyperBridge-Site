---
title: "Theme & Color Scheme Packaging Specification (.htheme / .hscheme / .hbr)"
description: "Authoritative packaging standards, JSON/YAML schemas, standalone .hscheme validation rules, and Android Intent API for distributing HyperBridge themes and color palettes."
weight: 2
showTableOfContents: true
---

This specification defines the packaging format and Android integration contract for distributing standalone **Hyper Bridge Theme Packages** (`.hbr` or `.htheme`).

It is intended for third-party Android theme developers, icon pack authors, and modders building automated distribution pipelines or companion apps.

{{< alert icon="lightbulb" >}}
**Looking for the in-app visual theme creator?**  
See the [Themes & Visual Styles Guide]({{< ref "docs/customization/theme-creator.md" >}}) to build themes directly on your device.
{{< /alert >}}

---

## 1. Package File Structure

Themes are distributed as standard ZIP archives renamed with the `.hbr` or `.htheme` file extension. The archive must follow this directory layout at root:

```Plaintext  
my_theme_project/
├── theme_config.json        <-- Brain (Metadata, colors, masks, rules)  
├── icons/                   <-- Action icons (48x48px PNG recommended)  
│   ├── ic_reply.png  
│   ├── ic_archive.png  
│   └── ic_heart.png  
├── status/                  <-- Progress & Navigation icons  
│   ├── nav_arrow.png  
│   └── download_tick.png  
├── translators/             <-- Bundled Custom Translators (.htrans or .json)
│   ├── spotify_enhanced.htrans  
│   └── whatsapp_vip.json  
└── global/                  <-- Backgrounds or overlays (Optional)  
    └── island_glow.png
```

To create the package:
1. Compress all files directly at the archive root (do not nest them inside an extra parent folder).
2. Rename the resulting `.zip` file to `.hbr` (e.g. `neon_cyberpunk.hbr`) or `.htheme`.

---

## 2. Bundling Custom Translators

Themes can distribute tailored notification behaviors alongside visual styling:

- When Hyper Bridge installs an `.hbr` package, its installer automatically inspects the `translators/` directory.
- Any `.htrans` ZIP packages (containing `translator.json` and custom icons) or `.json` translator definitions are automatically imported into the user's database.
- Translators bundled with themes can leverage the theme's highlight colors, override default notification actions, and select specialized [Island Templates]({{< ref "docs/customization/custom-designs.md" >}}).

See the [Translators Technical Specification]({{< ref "translators-specification.md" >}}) for complete schema documentation.

---

## 3. Configuration Schema (`theme_config.json`)

The `theme_config.json` file controls colors, geometric masks, call styles, and application-specific overrides.

```json  
{
  "id": "acquatheme",
  "meta": {
    "name": "Neon Cyberpunk",
    "author": "PixelMaster",
    "version": 2,
    "description": "A high contrast neon theme with custom shapes and smart rules."
  },
  "global": {
    "highlight_color": "#00FFDD",
    "background_color": "#202124",
    "text_color": "#FFFFFF",
    "use_app_colors": false,          // If true, dynamic colors from app icon override highlight_color
    "icon_shape_id": "cookie",        // Options: circle, square, squircle, cookie, arch, clover8
    "icon_padding_percent": 15
  },
  "call_config": {
    "answer_color": "#34C759",
    "decline_color": "#FF3B30",
    "answer_shape_id": "circle",      // Shape override for answer button
    "decline_shape_id": "circle",     // Shape override for decline button
    "answer_icon": {
      "type": "LOCAL_FILE",
      "value": "icons/call_answer.png"
    },
    "decline_icon": {
      "type": "LOCAL_FILE",
      "value": "icons/call_decline.png"
    }
  },
  "default_actions": {
    "reply": {
      "mode": "ICON",                 // Options: ICON, TEXT, BOTH
      "background_color": "#3300FFDD",// Hex color for button background
      "tint_color": "#00FFDD",        // Hex color for icon/text tint
      "icon": {
        "type": "LOCAL_FILE",
        "value": "icons/ic_reply.png"
      }
    },
    "archive": {
      "mode": "ICON",
      "icon": {
        "type": "LOCAL_FILE",
        "value": "icons/ic_archive.png"
      }
    }
  },
  "default_progress": {
    "active_color": "#FF0099",
    "finished_color": "#34C759",
    "show_percentage": true,
    "active_icon": {                  // Icon displayed while progress is running
        "type": "LOCAL_FILE",
        "value": "status/downloading.png"
    },
    "finished_icon": {                // Icon displayed when progress completes
        "type": "LOCAL_FILE",
        "value": "status/download_tick.png"
    }
  },
  "default_navigation": {
    "progress_bar_color": "#00FFDD",
    "swap_sides": false,
    "pic_forward": {
        "type": "LOCAL_FILE",
        "value": "nav/arrow_straight.png"
    },
    "pic_end": {
        "type": "LOCAL_FILE",
        "value": "nav/destination_flag.png"
    }
  },
  "apps": {
    "com.whatsapp": {
      "highlight_color": "#25D366",   // App-specific override
      "actions": {
        "reply": {
          "mode": "BOTH",
          "tint_color": "#FFFFFF",
          "background_color": "#25D366",
          "icon": {
            "type": "LOCAL_FILE",
            "value": "icons/ic_reply_whatsapp.png"
          }
        }
      }
    }
  }
}
```

---

---

## 4. Standalone Color Scheme Specification (`.hscheme`)

Introduced in **HyperBridge v0.6.0** ([#443](https://github.com/D4vidDf/HyperBridge/pull/443)), the `.hscheme` format is a standardized, lightweight YAML specification for Material 3 color schemes.

While full `.htheme` / `.hbr` archives bundle bitmap icons, progress assets, and dynamic translator rules in a ZIP container, `.hscheme` files are **standalone, single-file color palettes**. They can be shared independently, imported in one tap, and applied across both classic Island templates and modern Widget Studio micro-widgets.

### YAML Schema Definition

A valid `.hscheme` file consists of top-level metadata and a structured `roles` mapping adhering to Material Design 3 token semantics:

```yaml
id: coruna_solar_eclipse
name: "A Coruña Total Eclipse (12 Aug)"
author: D4vidDf
description: "Solar corona gold and horizon ember orange over deep totality umbra black."
is_dark: true

roles:
  # Primary — Accent, progress bars, and high-emphasis chips
  primary: "#D25C24"
  on_primary: "#FFFFFF"
  primary_container: "#591F05"
  on_primary_container: "#FFDBCD"

  # Secondary — Status pill indicators and secondary badges
  secondary: "#FFB055"
  on_secondary: "#2B1700"
  secondary_container: "#4F3108"
  on_secondary_container: "#FFDEA6"

  # Tertiary — Contrasting visual accents and tags
  tertiary: "#FF8652"
  on_tertiary: "#311000"
  tertiary_container: "#4A1C07"
  on_tertiary_container: "#FFDBCE"

  # Surfaces — Backplates, elevated containers, and base backgrounds
  surface: "#080302"
  on_surface: "#F5E6DF"
  surface_variant: "#24140E"
  on_surface_variant: "#D8BFB4"
  surface_container: "#140A07"
  surface_container_high: "#21120D"
  surface_container_low: "#040101"

  # Outlines & Dividers
  outline: "#8C6756"
  outline_variant: "#3D241B"

  # Error & Alert Highlights
  error: "#FF5449"
  on_error: "#FFFFFF"
```

### Schema Field Reference

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `String` | **Yes** | Unique identifier (lowercase alphanumeric, underscores, hyphens: `^[a-z0-9_-]+$`). |
| `name` | `String` | **Yes** | User-friendly display name shown in Theme Manager and Community Showcase. |
| `author` | `String` | **Yes** | Creator name or GitHub username. |
| `description`| `String` | No | Short narrative describing aesthetic theme inspiration or contrast characteristics. |
| `is_dark` | `Boolean` | **Yes** | `true` for dark themes; `false` for light themes. Governs SystemUI icon brightness. |
| `roles` | `Map` | **Yes** | Key-value mapping of Material 3 role tokens to hexadecimal color strings. |

### Strict Validation Rules (#443)

HyperBridge v0.6.0 enforces strict validation via `YamlColorSchemeParser` during import:

1. **Hex Color Formatting**: Every color value in `roles` must match `#RGB`, `#RRGGBB`, or `#AARRGGBB` (with alpha). Invalid CSS names (e.g. `red`) or unquoted numeric hex codes are rejected.
2. **Mandatory Core Roles**: At minimum, `primary`, `on_primary`, `surface`, and `on_surface` must be defined. Any omitted secondary or container tokens are automatically derived through standard Material 3 tonal palette algorithms.
3. **Contrast & Luminance Checks**: When `is_dark: true`, `surface` must have low luminance (< 0.25) to prevent illegible blinding white cards in dark mode.
4. **Encoding & Line Breaks**: Files must be UTF-8 encoded. Both Unix (`\n`) and Windows (`\r\n`) line breaks are supported.

---

## 5. Programmatic Installation & File Associations (Android Intent API)


Companion apps, icon packs, and theme managers can install themes directly into Hyper Bridge using an Android Intent. The user will see Hyper Bridge launch and present a 1-tap confirmation preview sheet.

### Intent Contract

| Property | Value |
| :--- | :--- |
| **Action** | `com.d4viddf.hyperbridge.APPLY_THEME` |
| **MIME Type** | `application/zip` or `application/octet-stream` |
| **Data URI** | Content URI pointing to the `.hbr` / `.zip` file via Android `FileProvider` |
| **Flags** | `FLAG_GRANT_READ_URI_PERMISSION`, `FLAG_ACTIVITY_NEW_TASK` |

### Kotlin Implementation

```kotlin
import android.content.Context
import android.content.Intent
import androidx.core.content.FileProvider
import java.io.File

fun applyThemeToHyperBridge(context: Context) {
    try {
        // 1. Locate theme file in cache or assets
        val themeFile = File(context.cacheDir, "neon_theme.hbr")
        if (!themeFile.exists()) {
            context.assets.open("neon_theme.hbr").use { input ->
                themeFile.outputStream().use { output -> input.copyTo(output) }
            }
        }

        // 2. Obtain content URI via FileProvider
        val uri = FileProvider.getUriForFile(
            context,
            "${context.packageName}.provider",
            themeFile
        )

        // 3. Dispatch the intent
        val intent = Intent("com.d4viddf.hyperbridge.APPLY_THEME").apply {
            setDataAndType(uri, "application/zip")
            addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        }

        context.startActivity(intent)
    } catch (e: Exception) {
        e.printStackTrace()
    }
}
```

### Flutter Implementation

Using `android_intent_plus`:

```dart
import 'dart:io';
import 'package:android_intent_plus/android_intent.dart';
import 'package:path_provider/path_provider.dart';

Future<void> applyTheme() async {
  final dir = await getTemporaryDirectory();
  final filePath = '${dir.path}/neon_theme.hbr';

  final intent = AndroidIntent(
    action: 'com.d4viddf.hyperbridge.APPLY_THEME',
    type: 'application/zip',
    data: Uri.parse('content://$filePath').toString(),
    flags: <int>[
      0x00000001, // FLAG_GRANT_READ_URI_PERMISSION
      0x10000000, // FLAG_ACTIVITY_NEW_TASK
    ],
  );

  await intent.launch();
}
```

---

## 6. Next Steps

- Explore the [Translators Technical Specification]({{< ref "translators-specification.md" >}}) to build advanced notification rules bundled in your themes.
- Learn about [Smart Actions]({{< ref "docs/features/smart-actions.md" >}}) to add copy OTP or quick-reply chips.
