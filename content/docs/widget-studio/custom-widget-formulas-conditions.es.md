---
title: "Fórmulas, Datos Dinámicos y Condiciones"
description: "Cómo usar tokens de variables, formateo de texto, operadores lógicos y reglas de visibilidad condicional (showIf)."
weight: 3
series: ["Diseño de Widgets Personalizados"]
series_order: 3
seriesOpened: true
showTableOfContents: true
linkTitle: "3. Fórmulas y Lógica"
aliases:
  - "/docs/customization/custom-widget-formulas-conditions/"
---

Los widgets cobran vida cuando se vinculan a datos dinámicos mediante fórmulas reactivas y condiciones de visibilidad:

---

## Tokens de Notificaciones y Sistema

- `{notif.title}`: Título de la notificación activa o nombre del remitente.
- `{notif.text}`: Cuerpo del mensaje o subtítulo de la alerta.
- `{device.battery}`: Nivel actual de batería del dispositivo (0–100%).
- `{media.track}` / `{media.artist}`: Nombre de la pista musical y artista.

---

## Reglas de Visibilidad (`showIf`)

Permite mostrar u ocultar capas según el estado del dispositivo:
- Mostrar un icono de batería solo cuando `{device.battery} < 20`.
- Mostrar controles multimedia únicamente durante la reproducción activa.
