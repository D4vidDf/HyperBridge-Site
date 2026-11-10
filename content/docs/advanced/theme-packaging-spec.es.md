---
title: "Especificación de Temas y Paletas (.htheme / .hscheme / .hbr)"
description: "Normas de empaquetado para temas .htheme y especificación YAML para esquemas de color independientes .hscheme con validación estricta."
weight: 2
showTableOfContents: true
linkTitle: "Especificación de Temas y .hscheme"
---

Define los contratos de integración para distribuir temas (`.htheme` / `.hbr`) y esquemas de color independientes (`.hscheme`):

---

## Esquema .hscheme (#443)

El formato `.hscheme` es un archivo YAML independiente que define los roles de color estándar de Material Design 3 (`primary`, `surface`, `outline`, etc.), validado estrictamente en la importación para garantizar legibilidad y contraste.
