---
title: "Funciones Privilegiadas y Capacidades de Shizuku"
description: "Qué desbloquea Shizuku en Hyper Bridge: omisión de listas blancas en ROMs de China, control de grabador y persistencia total."
weight: 2
showTableOfContents: true
linkTitle: "Funciones Privilegiadas"
---

Al vincular Shizuku con Hyper Bridge, se desbloquean tres capacidades avanzadas del sistema:

---

## 1. Compatibilidad Total con ROMs de China (CN)
En dispositivos Xiaomi con firmware chino (CN ROM), HyperOS restringe las islas dinámicas únicamente a un grupo cerrado de apps chinas (como Gaode Maps o Meituan). Las apps internacionales (Spotify, Telegram, WhatsApp) quedan bloqueadas por defecto.

* **La solución de Shizuku**: Gracias a los permisos de sistema de Shizuku, HyperBridge registra las notificaciones directamente en el framework nativo de Xiaomi Live Updates, omitiendo completamente las restricciones regionales.

---

## 2. Controles Directos del Grabador de Pantalla
Shizuku permite a HyperBridge enviar comandos IPC directos a `com.miui.screenrecorder`, permitiendo pausar, reanudar o detener grabaciones de pantalla directamente desde los botones de la isla dinámica.

---

## 3. Máxima Persistencia en Memoria
Evita que el agresivo optimizador de Xiaomi suspenda o cierre el servicio de lectura de notificaciones tras periodos prolongados con la pantalla apagada.
