---
title: "Theme Creator Guide"
description: "How to customize shapes, colors, and per-app styling using HyperThemes."
weight: 1
showTableOfContents: true
---

HyperBridge themes are packaged in portable `.htheme` files containing JSON configuration and custom icon assets.

## Core Theme Features

- **Shapes:** Choose between Squircle, Circle, Rounded, Flower, and Cookie shapes.
- **Color Extraction:** Automatically extract prominent brand colors from notification icons.
- **Per-App Overrides:** Set unique highlight colors and button styles for specific apps (e.g. Spotify, WhatsApp, Telegram).

```json
{
  "name": "Emerald Glass",
  "author": "HyperBridge Community",
  "version": "1.0",
  "global": {
    "highlightColor": "#10B981",
    "useAppColors": true,
    "shape": "SQUIRCLE"
  }
}
```
