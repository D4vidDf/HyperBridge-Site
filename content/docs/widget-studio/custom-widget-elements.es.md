---
title: "Elementos de Widget y Propiedades Visuales"
description: "Domina los 6 elementos de construcción en Micro-Widgets Studio: Texto, Imagen, Progreso, Botón, Forma y Contenedor."
weight: 2
series: ["Diseño de Widgets Personalizados"]
series_order: 2
seriesOpened: true
showTableOfContents: true
linkTitle: "2. Elementos y Propiedades"
aliases:
  - "/docs/customization/custom-widget-elements/"
---

Cada diseño en Widget Studio se compone de un árbol de nodos visuales que Hyper Bridge compila en vistas nativas de Android RemoteViews:

---

## Los 6 Elementos Principales

1. **Texto (`TextNode`)**: Renderiza títulos, contadores o variables dinámicas (`{notif.title}`). Soporta **importación de fuentes personalizadas TTF/OTF (#446, #447)** renderizadas en mapas de bits de alta resolución.
2. **Imagen (`ImageNode`)**: Iconos de app, portadas de álbum o fotos de contacto gestionadas a través del selector unificado `ImageConfigSelectorCard` (#458).
3. **Progreso (`ProgressNode`)**: Barras de progreso continuas, anillos circulares, ondas animadas para música o pasos divididos.
4. **Botón (`ButtonNode`)**: Botones interactivos que ejecutan respuestas rápidas, pausas de música o descartes, con tipografía personalizada (#447).
5. **Forma (`ShapeNode`)**: Cápsulas, círculos, rectángulos y bordes decorativos.
6. **Contenedor (`LayoutContainer`)**: Dispone elementos en filas (Row), columnas (Column), pilas (Box) o coordenadas libres, con soporte para esquemas de color por contenedor (#451).
