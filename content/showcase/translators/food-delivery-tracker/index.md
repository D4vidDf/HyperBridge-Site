---
title: "Food Delivery Live Tracker"
description: "Intercepts Uber Eats and DoorDash order updates, extracts delivery percentage via regex, and wires a 1-tap Call Driver smart action."
date: 2026-10-15
showcase_id: "translators/food-delivery-tracker"
showcase_type: "translator"
file_extension: ".htrans"
version: "1.1.0"
min_app_version: "0.6.0"

developer_id: "D4vidDf"
repo_url: "https://github.com/D4vidDf/HyperBridge"
download_url: "/presets/translators/food_delivery_tracker.htrans.json"
license: "MIT"

target_scope: "SPECIFIC_APPS"
notification_types:
  - "PROGRESS"
target_apps:
  - name: "Uber Eats"
    package: "com.ubercab.eats"
  - name: "DoorDash"
    package: "com.doordash.driverapp"
template_base: "tpl_ride_delivery"
preview_image: "/img/docs/translators/en/01-edit-overview-weather-nav.jpg"
preview_compact: "/img/docs/translators/en/17-edit-pill-customization-overview.jpg"
screenshots:
  - "/img/docs/translators/en/01-edit-overview-weather-nav.jpg"
  - "/img/docs/translators/en/06-edit-match-conditions-rules.jpg"
  - "/img/docs/translators/en/20-edit-progress-and-timing-overview.jpg"
accent_colors:
  - "#06C167"
  - "#10B981"
tags:
  - "delivery"
  - "uber-eats"
  - "doordash"
  - "regex"
---

## Overview

**Food Delivery Live Tracker** matches incoming delivery notifications (`(?i).*(order|delivering|driver|courier).*`), extracts numeric completion percentages from notification text (`(\d+)%\s*completed`), and renders a live `tpl_ride_delivery` island with a `DIAL_NUMBER` Smart Action button.
