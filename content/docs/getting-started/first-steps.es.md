---
title: "Primeros Pasos y Asistente de Inicio"
description: "Paso a paso visual del asistente de configuración inicial de Hyper Bridge en Xiaomi HyperOS."
weight: 2
showTableOfContents: true
---

Al abrir **Hyper Bridge** por primera vez, un intuitivo asistente visual de 22 pasos te guía a través de la comprobación de compatibilidad, permisos esenciales de Android, optimizaciones de segundo plano y personalización básica de la isla.

---

## 1. Bienvenida y Compatibilidad

{{< figure 
    src="/img/docs/onboarding/en/01-welcome.jpg" 
    alt="Pantalla de Bienvenida de Hyper Bridge" 
    caption="Paso 1: Bienvenida a Hyper Bridge — Integra las islas dinámicas en tu experiencia HyperOS." 
>}}

### Paso 1: Bienvenida
Pulsa **Comenzar** para iniciar el proceso de configuración guiada.

### Paso 2: Verificación de Compatibilidad
Hyper Bridge detecta el modelo de tu dispositivo (Xiaomi, Redmi o POCO) y la versión de HyperOS instalada para garantizar compatibilidad total.

---

## 2. Permisos Esenciales de Android y HyperOS

Para convertir las notificaciones estándar en islas dinámicas flotantes, Hyper Bridge requiere tres permisos clave:

### Paso 3: Mostrar Isla (POST_NOTIFICATIONS)
- Permite a Hyper Bridge mostrar la notificación de la isla dinámica en tu pantalla.
- Pulsa **Conceder Permiso** y confirma en el diálogo del sistema.

### Paso 4: Leer Notificaciones (Acceso a Notificaciones)
- Permite a Hyper Bridge interceptar avisos de apps como Spotify, Google Maps, WhatsApp o temporizadores para convertirlos en islas.
- Pulsa **Conceder Permiso** &rarr; selecciona **Hyper Bridge** &rarr; activa **Permitir acceso a las notificaciones**.
- *Guía detallada:* [Guía de Acceso a Notificaciones]({{< ref "docs/permissions/notification-listener.md" >}}).

### Paso 5: Mostrar sobre Otras Apps (SYSTEM_ALERT_WINDOW)
- Necesario para abrir el cuadro flotante de respuesta rápida al pulsar responder en un mensaje.
- Pulsa **Conceder Permiso** &rarr; activa **Permitir mostrar sobre otras aplicaciones**.

### Paso 6: Comprobación de HyperIsland / Notificaciones de Enfoque
- Comprueba si tu instalación de HyperOS autoriza el canal de notificación privilegiado de la isla (**HyperIsland** en HyperOS 4+, o **Notificaciones de enfoque** en HyperOS 3).
- *Guía detallada:* [Guía de Permisos de HyperIsland y Enfoque]({{< ref "docs/permissions/hyperos-focus-permissions.md" >}}).

### Paso 7: Optimización del Dispositivo (Batería e Inicio Automático)
Para evitar que el sistema cierre la app en segundo plano:
- Pulsa **Permitir Inicio Automático**: Garantiza que Hyper Bridge se inicie al reiniciar el móvil.
- Pulsa **Desactivar Restricciones**: Ajusta el ahorro de batería a **Sin restricciones**.
- *Guía detallada:* [Guía de Batería e Inicio Automático]({{< ref "docs/permissions/battery-and-autostart.md" >}}).

---

## 3. Selección de Aplicaciones y Personalización

A continuación, el asistente te permite seleccionar qué aplicaciones deseas activar en Hyper Bridge (reproductores de música, mensajería, navegación GPS) y configurar la posición exacta de tu cámara frontal (centro, izquierda o derecha) para un ajuste visual perfecto de la cápsula punch-hole.
