---
title: "Ride & Delivery Waypoint Card"
description: "Official Xiaomi HyperIsland tpl_ride_delivery design with live vehicle waypoint progress, ETA badge, and 1-tap driver contact shortcuts."
date: 2026-10-15
showcase_id: "designs/ride-delivery-waypoint"
showcase_type: "design"
file_extension: ".hwidget"
version: "1.1.0"
min_app_version: "0.6.0"

developer_id: "HyperStudioTeam"
repo_url: "https://github.com/D4vidDf/HyperBridge"
download_url: "/presets/designs/ride_delivery_waypoint.hwidget.json"
license: "MIT"

target_scope: "SPECIFIC_APPS"
notification_types:
  - "PROGRESS"
  - "NAVIGATION"
target_apps:
  - name: "Uber"
    package: "com.ubercab"
  - name: "Uber Eats"
    package: "com.ubercab.eats"
  - name: "Glovo"
    package: "com.glovo"
  - name: "Deliveroo"
    package: "com.deliveroo.orderapp"
canvas_size: "LARGE"
template_base: "tpl_ride_delivery"
preview_image: "/img/docs/designs/en/04-template-preview-weather-nav.jpg"
preview_compact: "/img/docs/designs/en/03-select-template-picker.jpg"
screenshots:
  - "/img/docs/designs/en/04-template-preview-weather-nav.jpg"
  - "/img/docs/designs/en/03-select-template-picker.jpg"
accent_colors:
  - "#06C167"
  - "#10B981"
  - "#18181B"
tags:
  - "delivery"
  - "uber"
  - "rideshare"
  - "waypoint"
---

## Overview

Built on Xiaomi's `tpl_ride_delivery` template and customizable in the Studio screen, this design tracks rides and food deliveries with a moving vehicle waypoint indicator along a progress track and a compact status bar pill showing remaining ETA or percent.
