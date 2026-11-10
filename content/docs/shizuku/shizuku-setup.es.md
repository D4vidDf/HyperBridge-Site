---
title: "Guía de Configuración de Shizuku"
description: "Paso a paso para emparejar y autorizar Shizuku mediante depuración inalámbrica en Xiaomi HyperOS."
weight: 1
showTableOfContents: true
linkTitle: "Configurar Shizuku"
---

**Shizuku** permite que aplicaciones estándar invoquen APIs privilegiadas de Android a nivel de comandos del sistema (`adb`) de forma 100% segura y sin root.

---

## Pasos para Activar Shizuku en HyperOS

### 1. Activar Opciones de Desarrollador
1. Abre los **Ajustes** del teléfono &rarr; **Sobre el teléfono**.
2. Pulsa repetidamente sobre **Versión de OS** (7 veces) hasta ver el mensaje *"¡Ya eres desarrollador!"*.

### 2. Habilitar Depuración Inalámbrica
1. Ve a **Ajustes** &rarr; **Ajustes adicionales** &rarr; **Opciones de desarrollador**.
2. Activa **Depuración USB** y **Depuración inalámbrica**.
3. En dispositivos Xiaomi, asegúrate de activar también **Depuración USB (Ajustes de seguridad)**.

### 3. Emparejar Shizuku
1. Abre la aplicación **Shizuku** (descárgala de Google Play o GitHub).
2. Toca en **Emparejamiento** bajo la sección de Depuración Inalámbrica.
3. En la notificación que aparece, introduce el código de emparejamiento de 6 dígitos.
4. Vuelve a Shizuku y pulsa **Iniciar**.

### 4. Autorizar Hyper Bridge
1. En Shizuku, entra en **Aplicaciones autorizadas**.
2. Activa el interruptor junto a **Hyper Bridge**.
3. En Hyper Bridge, abre **Ajustes** &rarr; **Diagnóstico** y comprueba que Shizuku figure como `ACTIVO`.
