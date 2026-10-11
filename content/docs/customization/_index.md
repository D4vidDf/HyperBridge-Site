---
title: "Customization & User Guides"
description: "User guides for customizing your Xiaomi HyperOS HyperIsland: Design Hub, Themes, System Widgets, Island Templates, and Translators."
icon: "palette"
weight: 40
showTableOfContents: false
---

Explore step-by-step guides on personalizing your Xiaomi HyperOS HyperIsland using Hyper Bridge's built-in visual tools:

- **[Design Studio & Hub]({{< ref "design-hub.md" >}})**: Learn how the Bento grid, hero showcase, and central creation action sheet work.
- **[Visual Theme Creator]({{< ref "theme-creator.md" >}})**: Customize colors, dynamic app extraction, geometric masks, call buttons, and export/import `.hbr` themes without code.
- **[System Widgets Guide]({{< ref "widgets-guide.md" >}})**: Mount any Android home-screen widget (Spotify, Google Calendar, Weather) directly into your HyperIsland.
- **[Island Templates & Designs]({{< ref "custom-designs.md" >}})**: Browse and apply Xiaomi's 10 official HyperIsland layouts (waypoint delivery, OTP payment, boarding pass, etc.).
- **[Custom Translators Guide]({{< ref "custom-translators.md" >}})**: Build notification rules using the in-app visual editor, regex matching, and smart action buttons.

---

### 🎨 Custom Widget Design Series (Hyper Bridge 0.6.0-beta4)

A comprehensive 5-part guide to building, styling, and packaging KWGT-style micro-widgets for Xiaomi HyperOS HyperIsland:

1. **[Part 1: Studio Overview & In-App Builder]({{< ref "custom-widget-studio.md" >}})**: Interface walkthrough, canvas controls (350dp), floating toolbar, scenario switcher, and draft persistence.
2. **[Part 2: Elements & Visual Properties]({{< ref "custom-widget-elements.md" >}})**: All 6 building block elements (Text, Image, Progress, Button, Shape, Container) and their properties.
3. **[Part 3: Formulas, Dynamic Data & Visibility Conditions]({{< ref "custom-widget-formulas-conditions.md" >}})**: Dynamic `{token}` interpolation, bindable properties, and `showIf` visibility conditions.
4. **[Part 4: Color Schemes & Dynamic Palettes]({{< ref "custom-widget-color-schemes.md" >}})**: Material 3 dynamic color architecture, 5 palette sources, and YAML color scheme authoring (`.hscheme.yaml`).
5. **[Part 5: Packaging, Sharing & Handcrafting .hwidget Files]({{< ref "custom-widget-files-packaging.md" >}})**: Anatomy of `.hwidget` archives, handcrafting from scratch, in-app export/import, and safety guardrails.

---

{{< alert icon="code" >}}
**Looking for Developer Specifications & APIs?**  
For technical JSON schemas, the `.htrans` specification, `RAW_PARAM_V2` direct Xiaomi protocol, `.hbr` ZIP packaging rules, and companion Android Intent APIs, visit the **[Advanced & Developer]({{< ref "docs/advanced/" >}})** section.
{{< /alert >}}
