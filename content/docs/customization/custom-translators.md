---
title: "Custom Translators Guide"
description: "Building .htrans translation packages with regex rule matching."
weight: 2
showTableOfContents: true
---

Translators determine how incoming Android notifications are transformed into native Xiaomi Super Island specifications.

## Anatomy of a Translator
A `.htrans` package contains:
1. `translator.json`: Rules specifying target package, title/text match regex, and island template.
2. `icons/`: Custom vector or bitmap icons for the island card.

```json
{
  "id": "custom.food.delivery",
  "targetPackage": "com.delivery.app",
  "matchPattern": ".*(delivering|on the way).*",
  "template": "TEMPLATE_PROGRESS_TRACKER",
  "actions": ["CALL_DRIVER", "TRACK_MAP"]
}
```


Work in Progress, to be released in 0.6.0