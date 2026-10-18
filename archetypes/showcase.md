---
title: "{{ replace .Name "-" " " | title }}"
description: "Brief 1-2 sentence summary displayed on the showcase card."
date: {{ .Date }}

# 1. Package Classification
# showcase_type options: "theme" | "design" | "translator" | "scheme"
showcase_type: "design"
# file_extension options: ".htheme" | ".hbr" | ".htrans" | ".hwidget" | ".hscheme.yaml"
file_extension: ".hwidget"
version: "1.0.0"
min_app_version: "0.6.0"

# 2. Developer Profile Link
# Matches your GitHub username and `data/developers/<developer_id>.yaml`
developer_id: "your-github-username"
author:
  name: "Your Display Name"
  github: "your-github-username"
  avatar: "https://github.com/your-github-username.png"
  bio: "Short description about you as a creator/developer."
  website: "https://your-website.com"
  repos:
    - name: "My HyperBridge Customizations"
      url: "https://github.com/your-github-username/your-repo"

# 3. Repository & Direct Download Link
# IMPORTANT: Host your package file (.htheme, .htrans, .hwidget, .hscheme.yaml) on your
# GitHub Repository / GitHub Releases. Do NOT commit binary archives to this site repo.
repo_url: "https://github.com/your-github-username/your-repo"
download_url: "https://github.com/your-github-username/your-repo/releases/latest/download/package.hwidget"
license: "MIT"

# 4. Filtering & Technical Metadata
# target_scope options: "SPECIFIC_APPS" | "SYSTEM_APPS" | "NOTIFICATION_TYPE" | "GLOBAL"
target_scope: "NOTIFICATION_TYPE"
# notification_types options: "MEDIA" | "MESSAGING" | "CALLS" | "NAVIGATION" | "PROGRESS" | "TIMER" | "STANDARD"
notification_types:
  - "MEDIA"
# List specific target apps (or leave empty if global / all apps of a notification type)
target_apps:
  - name: "Spotify"
    package: "com.spotify.music"
# For Studio Designs: "SMALL" | "MEDIUM" | "LARGE" | "XLARGE"
canvas_size: "MEDIUM"
# "custom_studio" or Xiaomi template ID (e.g. "tpl_ride_delivery", "tpl_call_kit")
template_base: "custom_studio"

# 5. Visual Previews & Styling
# Banner (preview_image): Recommended 1280x720px (16:9 landscape), strictly < 300 KB.
# Displayed in a fixed-height banner on cards (190px) and detail gallery (320px); clicking opens full-size Lightbox.
preview_image: "preview.webp"
preview_compact: ""
screenshots: []
accent_colors:
  - "#38BDF8"
  - "#18181B"
tags:
  - "custom"
  - "hyperisland"
---

## Overview

Describe what your customization does, how it enhances the HyperOS Super Island experience, and what makes it unique.

## Features

- **Expanded Island View**: Describe the expanded layout and interactive buttons.
- **Compact Pill View**: Describe how it looks in the status bar pill.
- **Dynamic Variables & Rules**: List any special tokens or regex rules used.

## Installation & Setup

1. Tap **Download** on this page using your phone's browser.
2. Tap **Open** on the downloaded file notification and choose **HyperBridge**.
3. Confirm the import in the HyperBridge preview sheet!

## Changelog

- **v1.0.0**: Initial release.
