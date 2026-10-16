---
title: "Compact Wave Music Island"
description: "Studio micro-widget featuring adaptive album-art Material 3 colors, an animated wave progress bar, and conditional play/pause controls."
date: 2026-10-16
showcase_id: "designs/compact-wave-music"
showcase_type: "design"
file_extension: ".hwidget"
version: "1.2.0"
min_app_version: "0.6.0"

developer_id: "D4vidDf"
repo_url: "https://github.com/D4vidDf/HyperBridge"
download_url: "/presets/designs/compact_wave_music.hwidget.json"
license: "MIT"

target_scope: "NOTIFICATION_TYPE"
notification_types:
  - "MEDIA"
target_apps:
  - name: "Spotify"
    package: "com.spotify.music"
  - name: "YouTube Music"
    package: "com.google.android.apps.youtube.music"
  - name: "Apple Music"
    package: "com.apple.android.music"
canvas_size: "MEDIUM"
template_base: "custom_studio"
preview_image: "/img/docs/designs/en/06-designs-manager-active.jpg"
preview_compact: "/img/docs/designs/en/02-add-design-sheet.jpg"
screenshots:
  - "/img/docs/designs/en/06-designs-manager-active.jpg"
  - "/img/docs/designs/en/02-add-design-sheet.jpg"
accent_colors:
  - "#38BDF8"
  - "#818CF8"
  - "#F43F5E"
  - "#18181B"
tags:
  - "music"
  - "studio"
  - "wave"
  - "media"
  - "material-you"
---

## Overview

Built in the **Hyper Bridge Micro-Widgets Studio**, **Compact Wave Music Island** transforms any active media player notification into a spatial `MEDIUM` canvas island with real-time album art color extraction (`notification_media_expressive`) and a gradient `WAVE` progress bar.

## Studio Elements & Dynamic Bindings

- **Album Cover (`ImageNode`)**: `64x64dp` squircle bitmap bound to `{notif_media.avatar}`.
- **Track & Artist Column (`ContainerNode`)**: Marquee-enabled `{media.track}` title above `{media.artist}`.
- **Animated Wave Progress (`ProgressNode`)**: `LINEAR` + `WAVE` mode bound to `{media.progress}` with `#38BDF8` &rarr; `#818CF8` gradient fill.
- **Conditional Play/Pause Button (`ButtonNode`)**: Evaluates `is_media_playing` to dynamically swap between `play` and `pause` icons and background accents.
