---
title: "Especificación Técnica de Traductores"
description: "Especificación técnica del esquema JSON de traductores, extracción de datos por expresiones regulares, protocolo RAW_PARAM_V2 y gestión de pantalla de bloqueo."
weight: 1
showTableOfContents: true
linkTitle: "Especificación de Traductores"
---

Esta especificación técnica detalla la estructura formal de los archivos de traductores (`.htrans` y `.json`), las reglas de evaluación del motor de Hyper Bridge y el protocolo directo con Xiaomi HyperOS.

---

## Protocolo Dinámico en Pantalla de Bloqueo (#433)

HyperBridge alterna dinámicamente la propiedad interna `islandProperty` de Xiaomi:
- **En pantalla de bloqueo**: emite con `islandProperty: 0`, instruyendo a `SystemUI` a dibujar la cápsula en la pantalla de bloqueo (keyguard).
- **Al desbloquear**: actualiza inmediatamente a `islandProperty: 1` para permitir tiempos de espera normales y modo interactivo.
