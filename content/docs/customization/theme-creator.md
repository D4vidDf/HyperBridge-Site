---
title: "Theme Creator Guide"
description: "How to customize shapes, colors, and per-app styling using HyperThemes."
weight: 1
showTableOfContents: true
---

This guide details how developers can create themes for **HyperBridge** and integrate a direct "Apply Theme" button in their own apps (e.g., icon pack dashboards, theme stores, or personalization tools).

## **1. The Strict Contract**

Themes are distributed as **HyperBridge Packages** (.hbr), which are standard ZIP archives containing a specific folder structure and configuration file. Whether a user downloads the file manually or applies it via your app, the internal structure must be identical.

### **File Structure**

Organize your theme assets as follows before zipping:

```Plaintext  
my_theme_project
│  
├── theme_config.json        <-- The Brain (Metadata + Rules)  
│  
├── icons/                   <-- Action icons (48x48px PNG suggested)  
│   ├── ic_reply.png  
│   ├── ic_archive.png  
│   └── ic_heart.png  
│  
├── status/                  <-- Progress & Navigation icons  
│   ├── nav_arrow.png  
│   └── download_tick.png  
│  
└── global/                  <-- Backgrounds or overlays (Optional)  
    └── island_glow.png
```

**Note:** Once built, rename the .zip file to .hbr (e.g., neon_theme.hbr).

---

## **2. Configuration (theme_config.json)**

The theme_config.json maps your image files to HyperBridge logic.

### **JSON Specification**

```JSON  
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
    "answer_shape_id": "circle",      // [NEW] Shape override for answer button
    "decline_shape_id": "circle",     // [NEW] Shape override for decline button
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

## **3. Applying the Theme (Intent Code)**

To apply the theme programmatically from your app, you must send the .hbr file via a specific Android Intent. This requires saving the file to your cache (so it is accessible) and sharing it via FileProvider.

### **Prerequisites**

1. **File Extension:** Ensure the file ends in .hbr or .zip.  
2. **MIME Type:** Use application/zip or application/octet-stream.  
3. **Permissions:** The FLAG_GRANT_READ_URI_PERMISSION is critical.

### **Kotlin Implementation**

Copy this function into your app to handle the "Apply" button click.

```Kotlin  
import android.content.Context  
import android.content.Intent  
import androidx.core.content.FileProvider  
import java.io.File

fun applyThemeToHyperBridge(context: Context) {  
    try {  
        // 1. Locate your theme file (e.g., copy from assets to cache)  
        // If your theme is in 'assets/neon_theme.hbr':  
        val themeFile = File(context.cacheDir, "neon_theme.hbr")  
          
        if (!themeFile.exists()) {  
            context.assets.open("neon_theme.hbr").use { input ->  
                themeFile.outputStream().use { output -> input.copyTo(output) }  
            }  
        }

        // 2. Create the URI using FileProvider  
        // Ensure you have a FileProvider defined in your AndroidManifest.xml  
        val uri = FileProvider.getUriForFile(  
            context,  
            "${context.packageName}.provider",  
            themeFile  
        )

        // 3. Send the Intent to HyperBridge  
        val intent = Intent("com.d4viddf.hyperbridge.APPLY_THEME").apply {  
            setDataAndType(uri, "application/zip")  
            addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)  
            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)  
        }

        // 4. Launch  
        context.startActivity(intent)

    } catch (e: Exception) {  
        // HyperBridge is likely not installed or the file failed to copy  
        e.printStackTrace()  
        // TODO: Prompt user to install HyperBridge  
    }  
}

```

### **Flutter Implementation**

For Flutter, use the android_intent_plus package (or similar) to construct the specific intent.

```Dart  
import 'dart:io';  
import 'package:android_intent_plus/android_intent.dart';  
import 'package:path_provider/path_provider.dart';  
// Note: You must handle copying the asset to a file path first.

Future<void> applyTheme() async {  
  // 1. Get the path to your .hbr file (e.g., from temporary directory)  
  final dir = await getTemporaryDirectory();  
  final filePath = '${dir.path}/neon_theme.hbr';  
    
  // (Ensure file exists at filePath...)

  // 2. Create the Intent  
  // Note: Flutter's ability to grant URI permissions directly is limited compared to native.  
  // Using 'action_view' is often more reliable for cross-app file opening in Flutter.  
  final intent = AndroidIntent(  
    action: 'com.d4viddf.hyperbridge.APPLY_THEME',  
    type: 'application/zip',  
    data: Uri.parse('content://$filePath').toString(), // This often requires a platform channel for proper FileProvider URI  
    flags: <int>[  
      0x00000001, // FLAG_GRANT_READ_URI_PERMISSION  
      0x10000000, // FLAG_ACTIVITY_NEW_TASK  
    ],  
  );

  await intent.launch();  
}
```

*Note: For complex file sharing in Flutter (generating a content:// URI), it is highly recommended to use a native MethodChannel that implements the Kotlin code above.*

---

## **4. Summary of the Public API**

| Component | Specification |
| :---- | :---- |
| **Structure** | Folder with theme_config.json + icons/ folder. |
| **Package** | ZIP format, renamed to .hbr. |
| **Intent Action** | com.d4viddf.hyperbridge.APPLY_THEME |
| **Data Type** | application/zip |
| **Security** | Requires FileProvider URI + Read Permission Flag. |

This format is universal. A .hbr file created for this intent can also be uploaded to Telegram, Discord, or Google Drive for users to install manually via the HyperBridge "Import" menu.

