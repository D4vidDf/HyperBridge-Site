---
title: "Preguntas Frecuentes (FAQ)"
description: "Respuestas a dudas comunes sobre Hyper Bridge, arquitectura de HyperIsland, compatibilidad con otros fabricantes, pantalla de bloqueo y privacidad."
weight: 1
showTableOfContents: true
linkTitle: "Preguntas Frecuentes"
---

Encuentra respuestas a preguntas frecuentes sobre el funcionamiento de Hyper Bridge, arquitectura, compatibilidad y garantías de privacidad.

---

## ¿Qué hace Hyper Bridge?

Hyper Bridge es una aplicación que funciona como puente traductor, leyendo las notificaciones estándar de Android y transformándolas en notificaciones nativas de Xiaomi HyperOS para que se muestren de forma fluida en la **HyperIsland** (Super Isla).

---

## ¿Qué tecnología utiliza internamente?

Hyper Bridge utiliza el **[Hyper Island ToolKit](https://github.com/D4vidDf/HyperIsland-ToolKit)** para generar notificaciones nativas que cumplen estrictamente las **[especificaciones oficiales de Xiaomi HyperIsland](https://dev.mi.com/xiaomihyperos/ability/XiaomiHyperIsland)**.

---

## ¿Por qué la isla sigue apareciendo al desinstalar Hyper Bridge?

Xiaomi introdujo la capacidad de islas nativamente como Notificaciones de Enfoque en **HyperOS 3** y renombró oficialmente el framework a **HyperIsland** en **HyperOS 4**.

Dado que Hyper Bridge actúa como una capa de traducción hacia el sistema, las funciones propias del sistema operativo —como la reproducción multimedia, el temporizador o las animaciones de carga— seguirán apareciendo en la isla incluso tras desinstalar Hyper Bridge, ya que forman parte del propio sistema Xiaomi.

---

## ¿Puede Hyper Bridge funcionar en dispositivos que no sean Xiaomi?

No. Hyper Bridge está específicamente adaptado al framework nativo de HyperIsland de Xiaomi. No inyecta una capa flotante artificial sobre la pantalla. Dado que otros fabricantes (como Samsung, Google o OnePlus) no disponen de esta arquitectura de Xiaomi en su sistema, Hyper Bridge no puede ejecutarse en dispositivos de otras marcas.

---

## ¿Se pueden mostrar islas en la pantalla de bloqueo?

**¡Sí! A partir de HyperBridge v0.6.0**, puedes mostrar islas dinámicas en la pantalla de bloqueo utilizando Traductores Personalizados:

1. **Permiso del Sistema:** Asegúrate de activar **Mostrar en pantalla de bloqueo** en los ajustes de notificación de HyperBridge en HyperOS (**Ajustes** &rarr; **Notificaciones y barra de estado** &rarr; **Notificaciones de aplicaciones** &rarr; **Hyper Bridge**).
2. **Ajuste del Traductor:** En HyperBridge, abre tu traductor personalizado, entra en **Ajustes de Comportamiento** y activa **Mostrar en pantalla de bloqueo** &rarr; **ACTIVADO**.

### Cómo funciona internamente
Por defecto, HyperOS oculta las islas cuando la pantalla está bloqueada. HyperBridge alterna dinámicamente la clave interna de Xiaomi `islandProperty`:
- Mientras el móvil está bloqueado, envía la notificación con `islandProperty: 0`, indicando al sistema que dibuje la cápsula en la pantalla de bloqueo.
- En cuanto se desbloquea el teléfono, HyperBridge cambia automáticamente a `islandProperty: 1`, permitiendo que la isla siga las reglas habituales de tiempo de espera, descarte e interacción.

---

## ¿Recopila Hyper Bridge mis datos personales?

**No, en absoluto.** Hyper Bridge funciona al 100% en tu dispositivo y no recopila, registra ni comparte ningún dato personal. La aplicación no solicita ni posee permisos de acceso a internet (`android.permission.INTERNET`).

---

## ¿Hyper Bridge consume mucha batería?

**No.** Hyper Bridge está diseñado bajo una arquitectura orientada a eventos. Solo procesa datos en el instante exacto en que Android emite o actualiza una notificación. Cuando no hay notificaciones activas, el consumo de procesador en segundo plano es del 0%.
