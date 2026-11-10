---
title: "Respuesta Rápida Integrada (Inline Reply)"
description: "Responde rápidamente a chats y mensajes entrantes directamente desde la isla con colores y estilos personalizables."
weight: 6
showTableOfContents: true
linkTitle: "Respuesta Rápida"
---

**Inline Reply** permite responder mensajes de chat de forma inmediata y fluida desde la isla dinámica de HyperOS. En lugar de desplegar toda la cortina de notificaciones o cambiar de aplicación o juego, pulsar el botón de responder en cualquier mensaje compatible abre al instante un cuadro de texto flotante.

---

## 1. Experiencia de Respuesta Flotante Rápida

Cuando llega un mensaje de aplicaciones compatibles (como WhatsApp, Telegram, Signal, Discord, SMS o Slack), la isla muestra un botón de respuesta directa.

Al pulsar responder se abre la **Ventana de Respuesta Rápida**:
- Escribe tu respuesta en el campo de texto flotante.
- Envía directamente con un solo toque en el icono de enviar o con la tecla de acción de tu teclado.
- La ventana se cierra automáticamente y envía tu mensaje mediante el framework nativo `RemoteInput` de Android, asegurando rapidez y fiabilidad.

---

## 2. Colores y Temas Personalizados

Hyper Bridge ofrece un control profundo sobre los colores del campo de texto y botones de acción:

{{< figure 
    src="/img/docs/features/en/inline-reply-colors.jpg" 
    alt="Colores personalizados de respuesta rápida" 
    caption="Personaliza el color del campo de texto, color de letra y color del botón de enviar." 
>}}

- **Color del Campo de Texto**: Define el tono de fondo del contenedor de texto.
- **Color del Texto**: Elige el color tipográfico para el mensaje que escribes.
- **Color del Botón de Enviar**: Elige el color de acento para la flecha flotante de envío.

### Modos de Color Disponibles

Pulsa en **Modo de Color** para elegir cómo se determina la paleta de colores:

- **Por Defecto**: Colores de contraste estándar del tema de Hyper Bridge.
- **Colores Personalizados**: Selección manual de color para el campo, texto y botón.
- **Colores de la App**: Extrae dinámicamente los tonos del icono de la app de mensajería (verde para WhatsApp, azul para Telegram).
- **Material You (Monet)**: Extrae tonalidades armónicas directamente de tu fondo de pantalla activo en Android.

---

## 3. Apariencia y Efecto Cristal (Glassmorphism)

Ajusta el diseño geométrico y los efectos visuales del cuadro de respuesta:

- **Efecto Desenfocado (Glassmorphism)**: Activa un fondo translúcido esmerilado detrás del cuadro de respuesta para una estética moderna.
- **Radio de Esquinas del Campo**: Ajusta el deslizador para esquinas suaves o cápsulas redondeadas.
- **Radio de Esquinas del Botón**: Personaliza la curvatura del botón de enviar.
