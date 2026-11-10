---
title: "Acceso a Notificaciones (Listener)"
description: "Cómo conceder de forma segura el acceso a notificaciones en Android, resolver ajustes restringidos en Android 13+ y superar la cuenta atrás de seguridad de Xiaomi."
weight: 2
showTableOfContents: true
linkTitle: "Acceso a Notificaciones"
---

En Android, las aplicaciones de terceros no pueden leer los avisos de otras apps por motivos de seguridad. Para capturar la reproducción de música, mensajes de chat entrantes, progreso de descargas, avisos de navegación y temporizadores del sistema, **HyperBridge** requiere el permiso especializado de **Acceso a notificaciones** (`NotificationListenerService`).

Sin este permiso, HyperBridge no puede detectar la llegada ni actualización de notificaciones, lo que impide que las islas dinámicas puedan mostrarse.

---

## 🔒 Privacidad y Seguridad en el Dispositivo

Otorgar acceso a notificaciones permite a una aplicación observar títulos, textos, acciones y metadatos multimedia. HyperBridge trata la privacidad con máxima rigurosidad:

* **Procesamiento 100% en el Dispositivo**: Los datos de las notificaciones se procesan exclusivamente en la memoria RAM temporal y se convierten al vuelo en vistas nativas para la isla de HyperOS.
* **Cero Permisos de Red**: HyperBridge **no** solicita el permiso de internet de Android (`android.permission.INTERNET`). Es técnicamente imposible que la aplicación envíe tus mensajes, códigos de verificación o datos personales a servidores externos.
* **Sin Registro en Disco**: El contenido de los mensajes y notificaciones jamás se almacena en el almacenamiento de tu teléfono ni en bases de datos persistentes.

---

## 🛠️ Paso a Paso: Cómo Activar en HyperOS

Puedes otorgar el Acceso a Notificaciones durante el [Asistente de Bienvenida]({{< ref "docs/getting-started/first-steps.md" >}}), desde la pantalla de **Estado del Sistema** (**Ajustes** &rarr; **Estado del Sistema**), o manualmente en los Ajustes de HyperOS.

### Método 1: Desde HyperBridge (Recomendado)

1. Abre **HyperBridge** y pulsa en la tarjeta de **Estado del Sistema** o ve a **Ajustes** &rarr; **Estado del Sistema**.
2. En la lista de permisos, pulsa **Conceder Permiso** junto a **Acceso a Notificaciones**.
3. Android abrirá directamente la pantalla de **Notificaciones de dispositivos y apps**.
4. Busca y pulsa sobre **Hyper Bridge**.
5. Activa el interruptor **Permitir acceso a las notificaciones**.
6. Acepta la [Cuenta Atrás de Seguridad de 10 Segundos](#-superar-el-aviso-de-seguridad-de-10-segundos-de-xiaomi).

---

### Método 2: Ruta Manual en Ajustes de HyperOS

1. Abre los **Ajustes** de tu teléfono.
2. Desplázate hacia abajo y entra en **Aplicaciones** &rarr; **Acceso especial de aplicaciones** (o escribe *"Notificaciones de dispositivos y apps"* en el buscador de Ajustes).
3. Pulsa en **Notificaciones de dispositivos y apps** (o **Acceso a notificaciones** en versiones antiguas de MIUI).
4. Selecciona **Hyper Bridge** en la lista.
5. Activa el interruptor **Permitir acceso a las notificaciones**.

---

## ⚠️ Solución para "Ajustes Restringidos" en Android 13, 14 y 15+

Si instalaste HyperBridge directamente desde un archivo APK (por ejemplo desde GitHub Releases) en lugar de Google Play Store, Android marca la app como instalada externamente y bloquea el interruptor con el siguiente aviso:

> **"Ajuste restringido: Por tu seguridad, este ajuste no está disponible actualmente."**

### Cómo Desbloquear Ajustes Restringidos:

1. Abre los **Ajustes** de tu dispositivo &rarr; **Aplicaciones** &rarr; **Administrar aplicaciones**.
2. Busca y pulsa en **Hyper Bridge** para abrir la pantalla de **Información de la aplicación**.
3. En la esquina superior derecha, pulsa el menú de los **tres puntos (⋮)**.
4. Selecciona **Permitir ajustes restringidos**.
5. Confirma tu identidad con tu huella digital, desbloqueo facial o PIN/patrón.
6. Aparecerá un aviso emergente indicando *"Se han permitido los ajustes restringidos para Hyper Bridge"*.
7. Regresa a **Notificaciones de dispositivos y apps** y activa **Permitir acceso a las notificaciones**.

---

## ⏱️ Superar el Aviso de Seguridad de 10 Segundos de Xiaomi

Cada vez que una aplicación solicita acceso a notificaciones o servicios de accesibilidad en dispositivos Xiaomi, HyperOS muestra un cuadro de diálogo del sistema titulado *"Peligro"*:

> *"El acceso a las notificaciones permite a la app leer todas las notificaciones, incluida información personal..."*

Se trata de un mecanismo de seguridad estándar de Xiaomi para garantizar que el usuario otorga este permiso de forma deliberada.

### Cómo confirmar el aviso:
1. Espera a que el **contador de 10 segundos** llegue a cero.
2. Marca la casilla **"Soy consciente de los posibles riesgos y asumo voluntariamente todas las posibles consecuencias."**
3. Pulsa en **Aceptar**.

---

## ✅ Verificación del Servicio

Una vez concedido, vuelve a **HyperBridge**:
1. Comprueba el indicador de **Estado del Sistema**: ahora debe mostrar un distintivo verde (**"Estado del Sistema: Correcto"**).
2. Consulta el estado del servicio en **Diagnóstico** (**Ajustes** &rarr; **Diagnóstico**): el servicio `NotificationListenerService` debe figurar como `CONECTADO` y `ACTIVO`.
