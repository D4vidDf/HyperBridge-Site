---
title: "Acciones Inteligentes y Botones de Contexto"
description: "Copiado de códigos de verificación en 1 toque, direcciones de navegación, seguimiento de envíos y marcación directa en la HyperIsland."
weight: 5
showTableOfContents: true
linkTitle: "Acciones Inteligentes"
---

Las **Acciones Inteligentes** (*Smart Actions*) detectan automáticamente entidades útiles en tus notificaciones —como códigos de verificación (2FA), direcciones postales, enlaces de mapas, números de teléfono y números de seguimiento de paquetes— e insertan botones de acción en 1 toque directamente en la **HyperIsland** y en la cortina de notificaciones.

En lugar de cambiar de app o memorizar códigos, puedes copiar un SMS de verificación o abrir tu navegador GPS con un solo toque.

---

## Tipos de Acciones Inteligentes Compatibles

Hyper Bridge incorpora un motor de extracción inteligente multilingüe con cinco categorías principales:

1. **Contraseñas de un Solo Uso (OTP / 2FA)**: Detecta códigos de verificación y tokens de seguridad (de 4 a 8 dígitos) en mensajes SMS y chats. Permite copiar el código con un toque y cuenta con un modo de privacidad para ocultar el código en texto plano.
2. **Navegación y Direcciones**: Detecta enlaces de Google Maps, Waze, OpenStreetMap o direcciones postales escritas (en español, inglés, francés, italiano, alemán, etc.) y genera un botón de "Cómo llegar" para abrir tu app GPS favorita.
3. **Seguimiento de Paquetes**: Identifica códigos de seguimiento de agencias de transporte (Correos, DHL, FedEx, UPS, Amazon) y abre directamente la web de seguimiento.
4. **Enlaces Web (URLs)**: Reconoce páginas web en mensajes y ofrece un botón de "Abrir enlace".
5. **Números de Teléfono**: Detecta teléfonos en formatos locales e internacionales con botón directo de llamada.

---

## Privacidad y Seguridad Garantizadas

- **100% en el Dispositivo**: El motor de extracción está escrito en Kotlin puro y se ejecuta exclusivamente en tu teléfono. El texto de tus mensajes **jamás** se envía a servidores externos ni a modelos de inteligencia artificial en la nube.
- **Desactivado por Defecto**: La función está apagada de forma inicial y requiere activación deliberada.
- **Sin Permiso de Internet**: Hyper Bridge carece del permiso `android.permission.INTERNET`, haciendo técnicamente imposible cualquier fuga de datos.
