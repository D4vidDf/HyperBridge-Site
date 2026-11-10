---
title: "Aplicaciones del Sistema y Opciones"
description: "Configura islas integradas del sistema para Grabación de Pantalla, Actualizaciones del Sistema, Estado de Carga, Depuración USB y VPN."
weight: 2
showTableOfContents: true
---

Hyper Bridge incluye adaptadores nativos para servicios esenciales de HyperOS y Android: **Grabación de Pantalla**, **Actualizaciones del Sistema**, **Estado de Carga**, **Depuración USB y Wi-Fi** y **Conexiones VPN**. Estos módulos disponen de diseños especializados, temporizadores en vivo, barras de progreso y ajustes personalizables.

Puedes acceder y configurar cada módulo directamente desde la lista de **Aplicaciones Activas** (bajo el filtro `Sistema`) pulsando el icono de engranaje junto al servicio correspondiente.

---

## 1. Isla de Grabación de Pantalla

Muestra una cápsula de estado en vivo durante las capturas de pantalla activas, con indicador de grabación, texto descriptivo y temporizador en tiempo real.

- **Lado Izquierdo**: Elige mostrar solo el icono rojo de grabación, icono con mensaje, o solo mensaje.
- **Lado Derecho**: Muestra el cronómetro en vivo transcurrido (`MM:SS`) o déjalo vacío para una cápsula compacta.
- **Tiempo de Marca de Verificación**: Ajusta cuántos segundos permanece visible la marca de confirmación al detener la grabación.

---

## 2. Isla de Actualizaciones del Sistema

Muestra el progreso de descarga de actualizaciones OTA de HyperOS y paquetes del sistema sin saturar tu panel de notificaciones.

- **Lado Izquierdo**: Icono de descarga y versión del sistema operativo (por ejemplo, `3.0.304.0`).
- **Lado Derecho**: Porcentaje numérico exacto o anillo de progreso circular.
- **Icono**: Elige entre el glifo oficial de HyperOS, icono de paquete del sistema o flecha estándar.

---

## 3. Isla de Estado de Carga (Novedad en v0.6.0)

Añade una isla dinámica interactiva que indica el estado de carga de la batería:
- Muestra el modo de velocidad de carga y potencia en vatios (soporte para baterías de doble celda).
- Estimación precisa del tiempo restante de carga para dispositivos Xiaomi/HyperOS.
- Diseños visuales personalizables y vista previa en tiempo real en ajustes.

---

## 4. Depuración USB y Wi-Fi (Novedad en v0.6.0)

Cápsula automática que indica sesiones activas de depuración ADB por cable USB o red inalámbrica, permitiendo a desarrolladores verificar la conectividad de un vistazo.

---

## 5. Isla de Conexión VPN

Supervisa el estado de la red y túneles cifrados:
- Pantalla de personalización completa con múltiples modos de detección y orden de prioridad por proveedor.
- Compatibilidad mejorada para adaptadores como Cloudflare WARP.
