---
title: "Changelog"
description: "Release history and updates for HyperBridge (Español (España))."
layout: "simple"
---

Follow the latest updates, features, and release history for **HyperBridge**.


---

### v0.5.7: Actualización de Rendimiento y Sincronización `Latest`

**Optimizaciones y correcciones**

- **Optimización de código:** Actualización a la última versión del Plugin de Gradle para Android y habilitación de R8 para una app más pequeña y rápida.

- **Estabilidad:** Mejora en la sincronización de notificaciones y corrección de un error donde las notificaciones originales a veces se eliminaban prematuramente (PR #258).

---

### v0.5.6: Modo Horizontal y Correcciones de Estabilidad

**Correcciones y Mejoras**

- **Estabilidad de System UI:** Validación de highlightColor antes de enviarlo a SystemUI para evitar cierres.

- **Isla Permanente:** Solucionado un problema por el que la isla permanente desaparecía tras recibir notificaciones o desbloquear el dispositivo.

- **Modo Horizontal:** Añadida opción para ocultar la isla permanente en orientación horizontal.

---

### v0.5.5: Mensajería y Correcciones

**Live Updates e Islas**

- **Iconos:** Solucionado un problema por el que el icono de la aplicación original no se mostraba correctamente en los Live Updates de Android 16.

- **Respuestas Rápidas:** Ahora puedes usar las respuestas rápidas directamente desde las notificaciones de Live Updates.

- **Cierre de Islas:** Solucionado un problema por el que las islas no se cerraban correctamente al descartarlas.


**Renovación de Agrupación de Mensajes**

- **Desduplicación:** Se ha rediseñado por completo la forma en que se agrupan las notificaciones de mensajería (como WhatsApp) para evitar islas duplicadas.


**Correcciones y Estabilidad**

- **Migración de Actualización:** Se ha solucionado un error crítico por el que la actualización de la aplicación no activaba correctamente la lógica de migración de la base de datos.

- **Valores predeterminados:** Se ha desactivado "Mostrar en panel" por defecto en la pantalla de inicio.

- **Localización:** Se han corregido los caracteres corruptos en las cadenas traducidas.

---

### v0.5.2: Respuesta Rápida, Rendimiento y Estabilidad

**¡Nueva Respuesta Rápida!**

- **Respuesta Rápida:** ¡Ahora puedes responder a los mensajes directamente desde la isla sin abrir la app!

- **Personalización:** Personaliza completamente el aspecto del nuevo editor de respuestas rápidas a nivel global o por aplicación.

- **Ajustes Globales:** Accede a la nueva sección de personalización de Respuestas directamente desde los Ajustes Globales -> Respuesta Rápida.



**Actualización de Rendimiento y Estabilidad**

- **Creador de Temas:** Se resolvió un cierre inesperado al cargar conjuntos de iconos grandes.

- **Mejora en la Bienvenida:** Eliminado un error de "Aplicación no Responde" (ANR) en la primera pantalla.

- **Selector de Widgets:** Prevenidos cierres y errores de falta de memoria (OOM) causados por vistas previas gigantes.

- **Diseño Más Robusto:** Solucionados problemas de restricciones de diseño en Jetpack Compose al achicar menús.

- **Copias de Seguridad:** Mejorado el análisis de JSON, evitando errores de OOM al restaurar archivos grandes.

- **Inicio Rápido:** Reducción significativa de los bloqueos de la interfaz, acelerando el inicio de la app en dispositivos de gama media.

- **Servicio en Segundo Plano:** Arquitectura de memoria del Notification Listener completamente rediseñada, reduciendo el consumo en segundo plano al 0% y mejorando la batería.

---

### v0.5.1: Correcciones y Mejoras

**Correcciones y Estabilidad**

Corrección de Duplicados en WhatsApp: Resuelto un problema que causaba que aparecieran notificaciones duplicadas de WhatsApp.

Corrección de Parpadeos y Cierres: Solucionado un cierre inesperado causado al recibir múltiples notificaciones en un corto período. La aplicación ahora actualiza las notificaciones de manera segura, eliminando el parpadeo y mejorando la estabilidad.

Intenciones Restauradas: Corregido un problema donde al hacer clic en una notificación destacada, la app te dirigía incorrectamente a la pantalla de solución de problemas en lugar de abrir la aplicación original.


**Características y Mejoras**

Eliminar Isla al Descartar: Añadida una nueva opción para eliminar automáticamente la isla si se descarta la notificación original del sistema.

Diagnóstico de Notificaciones: Añadida una nueva pantalla de verificación durante la configuración inicial para comprobar si tu dispositivo Xiaomi es compatible con las Notificaciones Destacadas.

Integración de Estado del Sistema: El estado de los permisos de Notificaciones Destacadas ahora se monitoriza continuamente y se muestra dentro de la pantalla de Estado del Sistema.

Pantalla de Solución de Problemas: Añadida una pantalla dedicada que guía a los usuarios sobre cómo habilitar los permisos ocultos del sistema (o usar Shizuku).

Terminología Más Clara: Renombrada la sección de "Actualizaciones en Vivo" en el menú de ajustes a "Gestión de Notificaciones" para reflejar mejor su propósito.

Pulido de Interfaz en Ajustes: Restauradas las esquinas redondeadas faltantes en la opción "Isla Permanente" en la lista de Ajustes Globales.

Traducciones al Español: Añadidas traducciones completas al español para todos los nuevos diálogos de solución de problemas, verificaciones del sistema y ajustes.

---

### v0.5.0: La actualización en vivo

**Soporte para ROMs CN**

- Habilita la nueva solución Sui & Shizuku para disfrutar de Hyper Islands en tus dispositivos con ROMs HyperOS CN (China) sin soporte nativo.


**Mejoras del Motor de Temas**

- Selección de Motor: Ahora puedes elegir motores de animación por aplicación o globalmente.

- Solución Shizuku: Opción agregada directamente a la pestaña Motor del Editor de Temas.

- Controles de Comportamiento: Tiempos de espera personalizados y lógica de ventanas emergentes son ahora totalmente compatibles.


**Isla Permanente Inteligente**

- Siempre Visible: Mantén la isla en pantalla incluso sin notificaciones activas.

- Ocultar Automáticamente: La isla permanente ahora se oculta automáticamente cuando se muestra un widget activo en la pantalla.


**Tintado Inteligente de Iconos**

- El nuevo sistema de detección analiza automáticamente los iconos de notificación extraídos y los tiñe inteligentemente de blanco si son oscuros o monocromáticos.


**Descargas y Progreso**

- Nuevo Diseño Dedicado para Descargas: Diseños de descarga y progreso separados con diseños visuales dedicados.

- Soporte de Progreso de Texto: Texto de porcentaje analizado (por ejemplo, "12%") para actualizaciones de aplicaciones incluso sin barras de progreso nativas.

- Filtrado Inteligente: Verificación de progreso basada en texto restringida a descargas de tiendas e instaladores para evitar activaciones falsas en otras notificaciones de estado.


**Correcciones de Mensajería**

- Se corrigió la falta de avatares del remitente en aplicaciones como Telegram (ahora extrae correctamente los datos "sender_person").

- Se resolvieron problemas con notificaciones agrupadas (resúmenes de chat) que no activaban las islas.

- Se corrigieron errores de desaparición de la isla causados por condiciones de carrera en la actualización de notificaciones.


**Sistema y Configuración Inicial**

- Nueva Pantalla de Bienvenida: Un proceso de configuración completamente nuevo y más fácil para los permisos críticos.

- Corrección de Inicio: El servicio ahora se inicia inmediata y confiablemente después de reiniciar.

- Alertas más Inteligentes: Las descargas y medios se actualizan silenciosamente, mientras que las actualizaciones de mensajes activan animaciones emergentes de manera confiable.

- Navegación: Transiciones de aplicaciones más rápidas y fluidas

---

### v0.4.2: Actualización Rápida

- **Corrección de errores:** Se solucionó un error crítico que provocaba el cierre de la aplicación al abrir la configuración en Chino Tradicional.

- **Mejoras generales:** Corrección de errores menores y mejoras de estabilidad para que la Isla funcione sin problemas.

---

### v0.4.0: La Actualización de Personalización

**Theme Engine 🎨**

¡La actualización más grande hasta la fecha! Ahora puedes personalizar completamente la experiencia visual de la isla dinámica.

- **Creador de temas:** Diseña temas directamente en tu teléfono con cambios en tiempo real.

- **Control avanzado:** Elegir exactamente cómo se muestran los iconos, personalizar colores y formas de notificación de llamadas, y configurar aplicaciones individuales.

- **Colores Inteligentes:** Extraer automáticamente los colores de acento de los iconos de la aplicación.

- **Personalización por acción (Beta):** Ajusta el aspecto de las acciones de notificación específicas.

- **Compartir:** Exporta e importa temas como paquetes <i>. hbr</i>.



**Soporte para Widgets🧩**

Ancla Widgets a la isla para un rápido acceso, incluso en tu **Pantalla de Bloqueo**!

- Elija entre **modo interactivo** o **Snapshot** para aquellas aplcaciones que tengan problemas para cargar la información.



**Motor de notificación 2.0. ⚡**

Una completa reescritura de la lógica para una mejor estabilidad:

- **Análisis más inteligente:** Problemas arreglados donde las notificaciones mostraban los nombres de los paquetes (ej. com.whatsapp) en lugar del contenido del mensaje.

- **Anti-Flicker:** Nuevo hashing de contenido previene actualizaciones redundantes.

- **Notificaciones Fantasmas:** Resuelto varios problemas que hacían que las notificaciones se mantuvieran auqnue la notificación original ya no estaba presente



**Refresco visual ✨**

- Pestaña "Diseño": Nueva pantalla que permite crear tus propios temas o usar Widgets.

- Nuevos botones de "Texto" para acciones de notificación más claras.

- Añadido soporte para 🇮🇩 Indonesia y 🇹🇷 Turco.



<i>Nota: Esta versión incluye cambios significativos en la arquitectura. Por favor, informe de cualquier error en GitHub!</i>

---

### v0.3.1: Actualización de Copias y Idiomas

**Copia de Seguridad y Restauración 📦**

¡Nueva función para usuarios avanzados! Exporta de forma segura tu configuración, listas de bloqueo y prioridades a un archivo .hbr y restáuralos cuando quieras.


**Nuevos Idiomas 🌍**

Añadido soporte para:

- 🇩🇪 Alemán

- 🇷🇺 Ruso

- 🇺🇦 Ucraniano (Mejorado)

<i>Además: Nuevo selector de idioma en la app para cambiarlo sin afectar a los ajustes del sistema.</i>


**Renovación Visual 🎨**

La aplicación se ha actualizado al diseño **Material 3 Expressive**. Disfruta de cabeceras más grandes, formas más redondeadas y una experiencia más fluida.


**Privacidad y Configuración 🛡️**

- Onboarding mejorado con una página de Privacidad dedicada que aclara la arquitectura offline.

- Verificaciones de compatibilidad más estrictas para asegurar la mejor experiencia en HyperOS 3.0.


**Correcciones 🛠️**

- Solucionado un error crítico donde la configuración se perdía al reiniciar (migración a base de datos).

- Corregido el botón "Salir" en la isla de Navegación (ahora muestra texto en lugar de un icono).

- Corregida la carga del icono de la App en Ajustes.

---

### v0.3.0: La Actualización Global

**Notificación Oculta 👻**

Nueva opción para ocultar notificaciones del panel del sistema manteniendo la Isla activa. ¡Revisa los Ajustes Globales!


**Nuevos Idiomas 🌍**

¡Un agradecimiento especial a la comunidad por estas traducciones!

- 🇧🇷 Portugués (Brasil)

- 🇵🇱 Polaco

- 🇰🇷 Coreano

- 🇺🇦 Ucraniano


**Personalización de Navegación 🧭**

Ahora puedes elegir qué información aparece a la izquierda y derecha de la Isla de Navegación (Distancia, Hora de llegada, Instrucción).


**Protección Anti-Spoilers 🛡️**

Nueva función de "Términos Bloqueados". Define palabras globalmente o por aplicación para evitar que ciertas notificaciones aparezcan en la Isla.


**Mejoras en Llamadas 📞**

Mejorada la lógica de detección para soportar más aplicaciones de VoIP y Teléfono.


**Correcciones y Mejoras 🛠️**

- Solucionado un error crítico donde la app se quedaba cargando tras reiniciar.

- Corregido error donde las notificaciones mostraban el nombre del paquete (ej. "com.google…") en lugar del contenido.

- Rediseñado el panel de Configuración de App.

- Mejorada la pantalla de Comprobación de Compatibilidad con info detallada.

---

### v0.2.0: La Actualización de Información

- **Progreso Avanzado:** Soporte para "Pasos" (ej. 1 de 3) y barras de progreso con iconos en el panel de notificaciones.

- **Sistema de Prioridad:** Nuevos ajustes de "Comportamiento". Elige el orden de aparición de las islas.

- **Filtros Inteligentes:** Detección mejorada de duplicados.

- **Mejoras Visuales:** Diseño de navegación mejorado.

- **Configuración por Aplicación:** Personaliza la duración y tiempo de muestra por aplicación.

---

### v0.1.0: La Actualización Expresiva

- **Nuevo Diseño :** Hyper Bridge ahora usa Material 3 Expressive con nuevas animaciones.

- **Mejoras en HyperIsland:** El texto ahora aparece a la derecha y muestra un tick verde para descargas completas.

- **Configuración por aplicación:** Ahora puedes personalizar que tipos de notificación se puede mostrar para cada aplicación.

- **Filtros Inteligentes:** Hyper Bridge ahora bloquea notificaciones duplicadas y ahorra batería.

- **Nueva Biblioteca:** Filtra aplicaciones por categoría y orden.

- **Idiomas:** Soporte completo para Español.
