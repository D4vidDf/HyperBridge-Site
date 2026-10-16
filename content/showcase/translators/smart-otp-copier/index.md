---
title: "Smart 2FA / OTP Auto-Copier"
description: "Global high-priority rule (`priority: 900`) that detects SMS and email verification codes and injects a 1-tap Copy Code smart action."
date: 2026-10-16
showcase_id: "translators/smart-otp-copier"
showcase_type: "translator"
file_extension: ".htrans"
version: "1.4.0"
min_app_version: "0.6.0"

developer_id: "D4vidDf"
repo_url: "https://github.com/D4vidDf/HyperBridge"
download_url: "/presets/translators/smart_otp_copier.htrans.json"
license: "MIT"

target_scope: "GLOBAL"
notification_types:
  - "MESSAGING"
  - "STANDARD"
target_apps:
  - name: "Google Messages"
    package: "com.google.android.apps.messaging"
  - name: "Gmail"
    package: "com.google.android.gm"
template_base: "STANDARD"
preview_image: "/img/docs/settings/en/08-smart-actions-overview.jpg"
preview_compact: "/img/docs/translators/en/24-edit-button-1-config.jpg"
screenshots:
  - "/img/docs/settings/en/08-smart-actions-overview.jpg"
  - "/img/docs/translators/en/24-edit-button-1-config.jpg"
accent_colors:
  - "#007AFF"
  - "#38BDF8"
tags:
  - "otp"
  - "2fa"
  - "security"
  - "smart-actions"
---

## Overview

Evaluates across all incoming notifications (`target_scope: GLOBAL`) using `(?i).*(\b\d{4,8}\b|code|verification|otp|password).*` and surfaces a 1-tap `OTP_COPY` button directly on your Super Island.
