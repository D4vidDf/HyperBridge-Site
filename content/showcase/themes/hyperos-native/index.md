---
title: "HyperOS Native Pro"
description: "Authentic Xiaomi HyperOS 3 visual styling with adaptive dynamic app colors, squircle icon masks, and native pill proportions."
date: 2026-10-12
showcase_id: "themes/hyperos-native"
showcase_type: "theme"
file_extension: ".htheme"
version: "1.2.0"
min_app_version: "0.6.0"

developer_id: "D4vidDf"
repo_url: "https://github.com/D4vidDf/HyperBridge"
download_url: "/presets/themes/hyperos_native.htheme.json"
license: "MIT"

target_scope: "GLOBAL"
notification_types:
  - "STANDARD"
  - "MEDIA"
  - "CALLS"
  - "NAVIGATION"
  - "PROGRESS"
target_apps: []
preview_image: "/img/docs/themes/en/06-colors-palette-presets.jpg"
preview_compact: "/img/docs/themes/en/09-icons-shapes-preview.jpg"
screenshots:
  - "/img/docs/themes/en/06-colors-palette-presets.jpg"
  - "/img/docs/themes/en/09-icons-shapes-preview.jpg"
  - "/img/docs/themes/en/12-call-style-answer.jpg"
accent_colors:
  - "#0D84FF"
  - "#34C759"
  - "#FF3B30"
  - "#1C1C1E"
tags:
  - "hyperos"
  - "native"
  - "squircle"
  - "dynamic-colors"
---

## Overview

**HyperOS Native Pro** replicates the stock Xiaomi HyperOS 3 system focus notification aesthetic while unlocking full dynamic color extraction (`use_app_colors: true`) across third-party Android applications.

## Key Features

- **Adaptive App Icon Accents**: Automatically extracts the dominant accent color from each app's icon for progress bars and highlight badges.
- **Authentic Squircle Icon Mask (`squircle`)**: Uses Xiaomi's continuous-curvature super-ellipse mask with `12%` balanced inner icon padding.
- **Native Call Capsule Colors**: Configures `#34C759` (Accept) and `#FF3B30` (Decline) circular call action buttons.
- **Turn-by-Turn Navigation Ready**: Pre-configured `#0D84FF` navigation progress bar with high-contrast directional arrow tinting.

## Theme Configuration Snippet

```json
{
  "id": "hyperos_native_pro",
  "meta": {
    "name": "HyperOS Native Pro",
    "author": "D4vidDf",
    "version": 2
  },
  "global": {
    "highlight_color": "#0D84FF",
    "background_color": "#1C1C1E",
    "text_color": "#FFFFFF",
    "use_app_colors": true,
    "icon_shape_id": "squircle",
    "icon_padding_percent": 12
  }
}
```
