---
title: "Diagnóstico y Monitor del Sistema"
description: "Cómo usar el panel de Diagnóstico en tiempo real, telemetría de servicios y registro de eventos en Hyper Bridge."
weight: 2
showTableOfContents: true
---

En la aplicación Hyper Bridge, accede a:
**Ajustes** &rarr; **Diagnóstico** (dentro de la sección de Soporte y Solución de Problemas).

---

## 1. Tarjeta de Estado del Sistema

En la parte superior de la pantalla de Diagnóstico, una **Tarjeta de Estado** resume tus permisos fundamentales:
- **Acceso a Notificaciones:** Si Hyper Bridge cuenta con el permiso activo de Notification Listener en Android.
- **Publicar Notificaciones:** Permiso para crear avisos en la barra de estado.
- **Ajustes Restringidos:** Si se autorizaron los ajustes restringidos de Android 13+ para APKs externos.
- **HyperIsland / Notificaciones de Enfoque:** Si el canal de notificación privilegiado de Xiaomi está habilitado.

{{< alert icon="lightbulb" >}}
Al pulsar la tarjeta de estado se abre inmediatamente la guía interactiva de [Estado y Configuración del Sistema]({{< ref "docs/permissions/system-setup.md" >}}).
{{< /alert >}}

---

## 2. Métricas del Servicio en Tiempo Real

Debajo de la tarjeta de estado, una cuadrícula muestra telemetría en vivo del motor de notificaciones:

| Métrica | Descripción | Estado Esperado |
|---|---|---|
| **Estado del Servicio** | Estado de conexión de `NotificationReaderService`. | `Conectado` (Verde). |
| **Apps Seleccionadas** | Número de aplicaciones activas en tu biblioteca. | Coincide con tus apps habilitadas. |
| **Revisión Flotante** | Apps pendientes de revisión para evitar avisos emergentes duplicados. | `0` (o pulsar para revisar en Ajustes Flotantes). |

---

## 3. Registro de Eventos en Vivo

La consola de Diagnóstico incluye un registro en tiempo real con las últimas 50 operaciones del motor, permitiendo comprobar la intercepción de eventos, traductores activados y transiciones de pantalla.
