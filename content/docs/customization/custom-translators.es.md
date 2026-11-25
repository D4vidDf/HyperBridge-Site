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
3. **Extracción de Variables**: Captura datos específicos (como nombres de conductor, minutos restantes, `{media.remaining}` o porcentajes).
4. **Personalización Granular de la Píldora Compacta (#463, #465, #470)**:
   - **Ranura Izquierda**: Elige la fuente gráfica (Icono de la app, Icono de notificación, Avatar, Carátula multimedia, Icono de tema u Oculto) y la fuente de texto (Título, Cuerpo, Remitente, Pista, Artista, Plantilla `{token}` o Ninguno).
   - **Ranura Derecha Categorizada**:
     - 🧠 **Inteligente y Contextual**: Autodetección, Código OTP/2FA (`smart_action.OTP.code`), Tarjeta de Embarque (vuelo, puerta, asiento), Porcentaje de progreso o Temporizador.
     - 💬 **Contenido de Notificación**: Título, Cuerpo, Remitente o Insignia de mensajes no leídos (`+3`).
     - 🎵 **Multimedia y Reproducción**: Título de pista, Artista o Contador multimedia (**Tiempo transcurrido** `02:45` vs. **Tiempo restante** `-01:15`, con dígitos monoespaciados nativos `sameWidthDigitInfo` #470 para evitar cambios de tamaño de la isla).
     - 🎨 **Personalizado y Minimalista**: Texto destacado o Vacío.
   - *Nota (#465)*: Estas personalizaciones granulares se aplican exclusivamente a los traductores dinámicos personalizados, manteniendo el diseño clásico en los traductores integrados por defecto.
5. **Temporizadores y Cronómetros Configurables (#468, #471)**:
   - Configura el **Modo de referencia de inicio** (*Automático*, *Primera detección / Inicio de llamada* o *Marca de tiempo de la notificación*) y la **Dirección** (*Cuenta progresiva* o *Cuenta regresiva*), ideal para llamadas de Discord o sesiones de juego sin cronómetro nativo.
6. **Configuración de Botones**: Asigna acciones del sistema, respuestas rápidas o comandos multimedia.
7. **Ajustes de Comportamiento (#416, #433, #479)**:
   - **Solo flotar en la primera alerta (#416)**: Evita que las actualizaciones repetidas de progreso vuelvan a desplegar avisos emergentes sobre la pantalla.
   - **Mostrar en pantalla de bloqueo y Privacidad (#433, #479)**: Gestiona la clave interna `islandProperty` para mostrar la isla en la pantalla de bloqueo y pasar a modo interactivo al desbloquear, respetando estrictamente la privacidad de la pantalla de bloqueo cuando la app de origen oculta contenido sensible.
