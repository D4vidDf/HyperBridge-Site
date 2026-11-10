---
title: "Problemas Conocidos y Particularidades de HyperOS"
description: "Comportamientos específicos de Xiaomi HyperOS y soluciones recomendadas."
weight: 3
showTableOfContents: true
linkTitle: "Problemas Conocidos"
---

Algunas versiones de Xiaomi HyperOS presentan comportamientos particulares. Aquí recopilamos las situaciones más habituales y cómo solucionarlas:

---

## 1. La isla deja de aparecer tras un tiempo con pantalla apagada
* **Causa**: El optimizador de batería de Xiaomi cierra procesos en segundo plano.
* **Solución**: Asegúrate de haber configurado el Ahorro de Batería en **Sin restricciones** y de haber activado el **Inicio automático** para Hyper Bridge.

---

## 2. Doble notificación emergente al recibir mensajes
* **Causa**: La aplicación de mensajería (WhatsApp, Telegram) tiene activadas sus notificaciones flotantes nativas al mismo tiempo que la isla de HyperBridge.
* **Solución**: En HyperBridge, ve a **Ajustes** &rarr; **Configuración de Notificaciones Flotantes** y desactiva las notificaciones flotantes de esa app específica, manteniendo activas solo las de HyperBridge.

---

## 3. Dispositivos con ROM de China (CN) no muestran islas de apps internacionales
* **Causa**: Lista blanca restrictiva del firmware chino de HyperOS.
* **Solución**: Conecta **Shizuku** y activa el modo de omisión en los ajustes de motor de Hyper Bridge.
