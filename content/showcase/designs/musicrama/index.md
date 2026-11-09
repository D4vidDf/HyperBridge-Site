---
title: "Musicrama – Adaptive Media Player (.htrans)"
description: "Inspired by the YouTube Music widget, Musicrama dynamically adapts buttons, text, and background colors to the album art of the currently playing track."
date: 2026-11-09

showcase_type: "design"
file_extension: ".htrans"
version: "1.0.0"
min_app_version: "0.6.0"

developer_id: "D4vidDf"
repo_url: "https://github.com/D4vidDf/HyperBridge-Site"
download_url: "/presets/Musicrama.htrans"
license: "MIT"

target_scope: "NOTIFICATION_TYPE"
notification_types:
  - "MEDIA"
target_apps:
  - name: "YouTube Music"
    package: "com.google.android.apps.youtube.music"
  - name: "Spotify"
    package: "com.spotify.music"
canvas_size: "SMALL"
template_base: "custom_studio"

thumbnail: "thumbnail.webp"
preview_image: "banner.webp"
preview_compact: "pill.webp"

accent_colors:
  - "#FF0000"
  - "#282828"
  - "#FFFFFF"

tags:
  - "musicrama"
  - "youtube-music"
  - "media-player"
  - "adaptive-color"
  - "material-you"
  - "expressive"
  - "studio-widget"
  - "album-art"
---

## Overview

**Musicrama** is the first official Studio Custom Design for HyperBridge, bringing an expressive, album-art adaptive media player experience directly to the **Xiaomi HyperOS Super Island**.

Inspired by the iconic Android YouTube Music widget, Musicrama uses HyperBridge's **Expressive Palette Engine** (`sourceType: notification_media_expressive`) to dynamically extract dominant and harmonizing color tones directly from the live music thumbnail. Every button, label, and background container automatically shifts its theme in real-time to match the mood of whatever song or podcast you are streaming.

---

### Key Features

* **🎨 Real-Time Dynamic Color Adaptation**: Colors of the interactive buttons, track title, artist typography, and background card shift seamlessly to match each song's album art.
* **⚡ Native Interactive Controls**: Play, pause, skip, and track status buttons compiled into native Android `RemoteViews` for instantaneous responsiveness with zero lag.
* **🏝️ Seamless Dual Sizing**:
  * **Expanded Island**: Full media control card with track info, high-contrast action buttons, and dynamic color styling.
  * **Compact Pill**: Sleek pill capsule displaying album art thumbnail and scrolling track info.
* **🎵 Universal Media Player Support**: Built for YouTube Music and fully compatible with Spotify, Apple Music, Tidal, Amazon Music, and any Android media session notification.
* **🔒 100% Offline & Private**: Runs entirely on-device with zero internet permissions.

---

### How to Install

1. Tap the **Download Package (.htrans)** button above to save `Musicrama.htrans` to your device.
2. Tap the downloaded file in your browser or file manager. HyperBridge will automatically open the **Import Package** dialog.
3. Review the preview and tap **Import**. The design and linked translator will be saved to your **Design Hub** and activate immediately for all active media playback!
