---
title: "Aplicaciones del Sistema y Opciones"
description: "Configura islas integradas del sistema para Grabación de Pantalla, Actualizaciones del Sistema, Estado de Carga, Depuración USB y VPN."
weight: 2
showTableOfContents: true
---

Hyper Bridge incluye adaptadores nativos para servicios esenciales de HyperOS y Android: **Grabación de Pantalla**, **Actualizaciones del Sistema**, **Estado de Carga**, **Depuración USB y Wi-Fi** y **Conexiones VPN**. Estos módulos disponen de diseños especializados, temporizadores en vivo, cálculo de potencia en vatios y ajustes personalizables.

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

## 3. ⚡ Isla de Estado de Carga (#424, #426, #448)

Introducida en **HyperBridge v0.6.0**, la **Isla de Estado de Carga** convierte la conexión del cargador o carga inalámbrica en una tarjeta visual interactiva en tiempo real sobre el recorte de la cámara:

- **Vista Previa en Tiempo Real**: Prueba animaciones y diseños directamente en la pantalla de ajustes antes de conectar el cable.
- **Modos de Velocidad de Carga**: Visualización de porcentaje estándar o potencia en vatios en vivo (`67W`, `90W`, `120W`).
- **Cálculo de Baterías de Doble Celda (#448)**: Los modelos insignia de Xiaomi (Xiaomi 13 Pro/Ultra, serie 14, POCO F6 Pro) emplean baterías divididas en dos celdas. HyperBridge calcula correctamente la potencia total sumando ambas celdas en lugar de reportar la mitad.
- **Estimación Precisa de Tiempo de Carga (#448)**: Consulta los controladores específicos de Xiaomi para estimar los minutos restantes hasta el 100% con máxima precisión.

---

## 4. 🛠️ Depuración USB y Wi-Fi (#430)

Diseñada para desarrolladores y usuarios avanzados, esta isla se activa automáticamente al iniciar sesiones ADB:
- **Indicador de Conexión**: Distingue entre conexión directa por cable USB y depuración inalámbrica Wi-Fi con el puerto activo (`ip:puerto`).
- **Espacio Limpio**: Reemplaza el aviso persistente de la cortina de notificaciones por una cápsula sutil en la cámara.
- **Cierre Inmediato**: Se oculta automáticamente en cuanto se desconecta el cable o se cierra el servidor ADB.

---

## 5. 🔒 Isla de VPN y Panel de Personalización (#431)

HyperBridge v0.6.0 renueva por completo la experiencia de conexión VPN con una pantalla de ajustes dedicada:

- **Detección Multimodo**: Alterna entre escucha de eventos de red de Android (`NetworkCallback`) y sondeo de interfaces de red de bajo nivel (`tun0`).
- **Soporte para Cloudflare WARP**: Reconocimiento nativo para el adaptador `1.1.1.1` WARP y túneles WireGuard.
- **Prioridad de Proveedores**: Si utilizas varias apps de VPN o bloqueo DNS simultáneamente, ordena la prioridad arrastrando los servicios.
- **Cronómetro de Duración de Conexión**: Muestra el tiempo transcurrido en vivo (`HH:MM:SS`) desde que el túnel seguro está activo.
- **Banderas de Países y Servidor**: Detecta la ubicación del servidor y muestra la bandera del país en la tarjeta expandida.
- **Botón de Desconexión Rápida**: Desconecta el túnel VPN en 1 toque directamente desde la tarjeta expandida de la isla.
