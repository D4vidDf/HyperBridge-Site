---
title: "Discord Voice Call Live Timer"
description: "Displays active Discord voice call duration with a live count-up stopwatch on both the compact pill and expanded island."
date: 2026-11-15
showcase_type: "translator"
file_extension: ".htrans"
version: "1.0.0"
min_app_version: "0.6.0-rc4"
developer_id: "RenShirayuki"
repo_url: "https://github.com/RenShirayuki/hyperbridge-translators"
download_url: "https://github.com/RenShirayuki/hyperbridge-translators/releases/latest/download/Discord_Call.htrans"
license: "MIT"
target_scope: "SPECIFIC_APPS"
notification_types:
  - "CALLS"
  - "TIMER"
target_apps:
  - name: "Discord"
    package: "com.discord"
template_base: "standard"
preview_image: "preview.webp"
preview_compact: "preview-pill.webp"
accent_colors:
  - "#5865F2"
  - "#18181B"
tags:
  - "discord"
  - "voice-call"
  - "timer"
  - "stopwatch"
---

## Overview

A clean Custom Translator for Discord (`com.discord`) that transforms the ongoing `"Voice Connected"` notification into a live call duration island with both compact pill and expanded card layouts.

> **Note:** Requires **HyperBridge `v0.6.0-rc4` or newer** to support the `First Detected (Stopwatch / Call Start)` timer source.

### Key Features
- **Live Count-Up Stopwatch**: Uses HyperBridge's `First Detected (Stopwatch / Call Start)` timer source (`Count Up`) to track active voice call duration from `00:00` without requiring native `usesChronometer` flags.
- **Clean Compact Pill & Expanded Card**: Displays the Discord icon alongside the active channel or caller name (`{notif.subtext}`) and live elapsed timer.
- **Modded Client Friendly**: Pre-configured for official Discord and easily adaptable to modded clients (such as Valenced) by updating the target package name.
