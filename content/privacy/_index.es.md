---
title: "Política de Privacidad"
description: "Política de Privacidad para Hyper Bridge y hyper-bridge.app"
layout: "simple"
---

*Última actualización: 28 de agosto de 2026*

Bienvenido/a a **Hyper Bridge** ([hyper-bridge.app](https://hyper-bridge.app)). Esta Política de Privacidad describe cómo se maneja tu información cuando visitas nuestro sitio web o utilizas la aplicación **Hyper Bridge** (los "Servicios"). Tu privacidad es nuestra máxima prioridad.

---

### 1. Principio Fundamental: Procesamiento 100% Local en el Dispositivo

Hyper Bridge está diseñado bajo una estricta arquitectura de privacidad:
- **Sin Compartición de Datos:** Hyper Bridge **no comparte, vende, transmite ni monetiza** tus datos personales o el contenido de tus notificaciones con terceros ni con servidores remotos.
- **Cero Telemetría / Analíticas:** La aplicación no incluye SDKs de análisis, rastreadores ni servicios de publicidad.
- **Procesamiento Exclusivamente Local:** Todo el análisis de notificaciones, evaluación de reglas, traductores de islas y renderizado de temas se ejecuta completa y exclusivamente en tu propio dispositivo.

---

### 2. Información que Procesamos y su Finalidad

#### Acceso al Servicio de Notificaciones (`NotificationListenerService`)
Para ofrecer su funcionalidad principal, Hyper Bridge requiere permiso de acceso a las notificaciones de Android.
- **Finalidad:** Hyper Bridge lee las notificaciones entrantes (reproducción multimedia, temporizadores, descargas, navegación GPS, mensajes y llamadas) únicamente para **procesarlas localmente en tiempo real y traducirlas a la especificación de Super Island / Dynamic Island de Xiaomi HyperOS**.
- **Alcance:** Los datos de las notificaciones se mantienen en memoria volátil solo mientras la isla o notificación activa se encuentra visible, tras lo cual se liberan de inmediato.
- **Almacenamiento:** El contenido de las notificaciones **nunca se almacena de forma permanente** en bases de datos ni se envía a servidores externos.

#### Integración con Shizuku y Servicios Privilegiados (Opcional)
Si habilitas la integración con Shizuku para funciones avanzadas de HyperOS (como una gestión optimizada de las islas o coordinación con System UI), toda la comunicación se realiza localmente entre procesos de tu dispositivo mediante IPC de Android (AIDL). Ningún dato con permisos elevados sale de tu dispositivo.

#### Copias de Seguridad y Configuración
Si utilizas la función de Copia de Seguridad y Restauración, los ajustes de la aplicación (listas de bloqueo, temas personalizados y prioridades) se exportan a un archivo local `.hbr` en la ubicación que elijas. Nosotros no tenemos acceso a tus copias de seguridad.

#### Sitio Web y Contacto Directo
Si te pones en contacto con nosotros por correo electrónico ([d4viddf@d4viddf.com](mailto:d4viddf@d4viddf.com)), utilizaremos tu dirección de correo y la información proporcionada exclusivamente para responder a tu consulta técnica o sugerencia.

---

### 3. Almacenamiento y Seguridad de los Datos
- **Almacenamiento Local:** Todos los ajustes, configuraciones de temas y cachés de widgets se almacenan estrictamente en el almacenamiento interno de tu dispositivo (DataStore y base de datos Room).
- **Seguridad:** Al no transmitirse información a través de internet, tus datos permanecen protegidos dentro del entorno aislado (sandbox) de Android.

---

### 4. Compartir Información con Terceros
No compartimos, vendemos ni revelamos tu información personal o de notificaciones a ningún tercero.

---

### 5. Control y Derechos del Usuario
Tienes control total sobre Hyper Bridge:
- Puedes revocar el permiso de acceso a notificaciones en cualquier momento desde los ajustes del sistema de Android.
- Puedes excluir o bloquear aplicaciones específicas para que no se procesen ni se muestren en la isla.
- Borrar los datos de la aplicación o desinstalarla elimina permanentemente todas las preferencias locales y cachés.

---

### 6. Privacidad de Menores
Hyper Bridge no recopila deliberadamente información personal de menores de 13 años.

---

### 7. Cambios a esta Política de Privacidad
Podemos actualizar esta Política de Privacidad ocasionalmente. Cualquier cambio se publicará en esta página con la fecha de última actualización correspondiente.

---

### 8. Contacto
Si tienes preguntas o dudas sobre esta Política de Privacidad, puedes contactarnos a través de:

**David DF**  
Correo electrónico: [d4viddf@d4viddf.com](mailto:d4viddf@d4viddf.com)  
Sitio web: [https://d4viddf.com](https://d4viddf.com)  
Repositorio: [https://github.com/D4vidDf/HyperBridge](https://github.com/D4vidDf/HyperBridge)
