---
title: "Boarding Pass & Flight Gate Island"
description: "Travel ticket layout (tpl_boarding_pass) displaying flight number, boarding gate badge, and live departure countdown timer."
date: 2026-10-09
showcase_id: "designs/boarding-pass-travel"
showcase_type: "design"
file_extension: ".hwidget"
version: "1.0.0"
min_app_version: "0.6.0"

developer_id: "HyperStudioTeam"
repo_url: "https://github.com/D4vidDf/HyperBridge"
download_url: "/presets/designs/boarding_pass_travel.hwidget.json"
license: "MIT"

target_scope: "SPECIFIC_APPS"
notification_types:
  - "TIMER"
  - "NAVIGATION"
  - "STANDARD"
target_apps:
  - name: "Google Wallet"
    package: "com.google.android.apps.walletnfcrel"
  - name: "TripIt"
    package: "com.tripit"
canvas_size: "LARGE"
template_base: "tpl_boarding_pass"
preview_image: "/img/docs/design/en/01-design-hub-dashboard.jpg"
preview_compact: "/img/docs/design/en/02-design-hub-fab-sheet.jpg"
screenshots:
  - "/img/docs/design/en/01-design-hub-dashboard.jpg"
  - "/img/docs/design/en/02-design-hub-fab-sheet.jpg"
accent_colors:
  - "#0EA5E9"
  - "#F59E0B"
  - "#0F172A"
tags:
  - "travel"
  - "flight"
  - "boarding-pass"
  - "timer"
---

## Overview

Uses the `tpl_boarding_pass` layout to surface gate changes, seat assignments, and departure countdowns right in your HyperOS Super Island when traveling.
