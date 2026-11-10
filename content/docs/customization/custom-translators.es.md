---
title: "Guía de Traductores Personalizados"
description: "Construye reglas avanzadas para transformar notificaciones con el editor visual, expresiones regulares y acciones inteligentes."
weight: 5
showTableOfContents: true
linkTitle: "Traductores Personalizados"
---

Los **Traductores Personalizados** son el motor de lógica de HyperBridge. Permiten interceptar alertas de cualquier aplicación, extraer datos con expresiones regulares y darles formato en tarjetas interactivas de la isla dinámica.

---

## Módulos del Editor de Traductores

1. **Información y Metadatos**: Nombre, autor, descripción e icono del traductor.
2. **Criterios de Activación**: Filtra por nombre de paquete, título o contenido de la notificación.
3. **Extracción de Variables**: Captura datos específicos (como nombres de conductor, minutos restantes o porcentajes).
4. **Configuración de Botones**: Asigna acciones del sistema, respuestas rápidas o comandos multimedia.
5. **Ajustes de Comportamiento (#416, #433)**:
   - **Solo flotar en la primera alerta (#416)**: Evita que las actualizaciones repetidas de progreso vuelvan a desplegar avisos emergentes sobre la pantalla.
   - **Mostrar en pantalla de bloqueo (#433)**: Gestiona la clave interna `islandProperty` para mostrar la isla en la pantalla de bloqueo y pasar a modo interactivo al desbloquear.
