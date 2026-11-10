---
title: "Esquemas de Color y Paletas Dinámicas Material 3"
description: "Cómo usar esquemas de color dinámicos de Material 3, paletas adaptables al fondo de pantalla y creación de esquemas YAML (.hscheme)."
weight: 4
showTableOfContents: true
linkTitle: "Esquemas de Color (.hscheme)"
---

Hyper Bridge 0.6.0 incorpora una arquitectura de color completa basada en **Material Design 3 (M3)** para dotar a tus widgets y temas de coherencia visual y contraste garantizado.

---

## Fuentes de Paleta de Color

1. **Tema Hyper Bridge Activo**: Adopta automáticamente los colores del tema general seleccionado.
2. **Material You Dinámico (Monet)**: Extrae tonalidades armónicas de tu fondo de pantalla activo de Android.
3. **Color del Icono de la App**: Muestrea los tonos dominantes del icono de la aplicación que emite la notificación.
4. **Portada del Álbum / Foto**: Adapta los botones y fondos al arte del álbum musical o foto adjunta en el chat.
5. **Esquema YAML Personalizado (`.hscheme`)**: Aplica una paleta definida en un archivo YAML independiente.

---

## Roles Principales de Material 3

- `primary`: Color de acento de alto énfasis (barras de progreso, botones destacados).
- `on_primary`: Texto sobre fondos primarios.
- `surface`: Color de fondo de la tarjeta principal.
- `on_surface`: Títulos y textos principales.
- `outline`: Bordes, divisores y contornos de botones.
- `error`: Avisos críticos y batería baja.
