---
title: "Ride-Share HyperIsland (RAW_PARAM_V2)"
description: "Advanced Xiaomi param_v2 protocol translator with regex capture groups for ETA & driver name, fallback cascades, and direct action bundling."
date: 2026-10-14
showcase_id: "translators/rideshare-raw-param-v2"
showcase_type: "translator"
file_extension: ".htrans"
version: "2.0.0"
min_app_version: "0.6.0"

developer_id: "HyperStudioTeam"
repo_url: "https://github.com/D4vidDf/HyperBridge"
download_url: "/presets/translators/rideshare_raw_param_v2.htrans.json"
license: "MIT"

target_scope: "SPECIFIC_APPS"
notification_types:
  - "NAVIGATION"
  - "PROGRESS"
target_apps:
  - name: "Uber"
    package: "com.ubercab"
  - name: "Bolt"
    package: "ee.mtakso.driver"
template_base: "RAW_PARAM_V2"
preview_image: "/img/docs/translators/en/10-edit-presentation-layout-overview.jpg"
preview_compact: "/img/docs/translators/en/26-edit-behavior-and-engine.jpg"
screenshots:
  - "/img/docs/translators/en/10-edit-presentation-layout-overview.jpg"
  - "/img/docs/translators/en/26-edit-behavior-and-engine.jpg"
accent_colors:
  - "#000000"
  - "#38BDF8"
tags:
  - "raw-param-v2"
  - "uber"
  - "bolt"
  - "advanced"
---

## Overview

A reference implementation of `PresentationMode.RAW_PARAM_V2` demonstrating how to extract `eta_mins`, `driver_name`, and `driver_avatar` via `custom_variables` and inject them directly into a native Xiaomi HyperOS `param_v2` JSON payload.
