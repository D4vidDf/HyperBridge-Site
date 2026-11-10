---
title: "Empaquetado y Distribución de Archivos .hwidget"
description: "Estructura interna de los paquetes .hwidget, exportación desde la app y verificación de integridad."
weight: 4
series: ["Diseño de Widgets Personalizados"]
series_order: 4
seriesOpened: true
showTableOfContents: true
linkTitle: "4. Empaquetado (.hwidget)"
aliases:
  - "/docs/customization/custom-widget-files-packaging/"
---

Los diseños de Widget Studio se distribuyen mediante el formato estandarizado **`.hwidget`**, un archivo ZIP que contiene la estructura del diseño, metadatos y fuentes tipográficas asociadas.

---

## Estructura de un Paquete .hwidget

```text
mi_diseño.hwidget
├── widget.json          <-- Definición de capas y propiedades
├── metadata.json        <-- Nombre, autor, versión y requisitos
└── assets/              <-- Fuentes TTF/OTF e iconos locales
```

Exporta directamente desde la app pulsando en **Compartir / Exportar** en la pantalla del Studio o importa creaciones de la comunidad abriendo el archivo en tu dispositivo.
