---
title: "Experiencia Adaptativa para Pantallas Grandes y Plegables"
description: "Espacio de trabajo adaptativo de 3 columnas en Widget Studio, desplazamiento de lienzo, edición de temas en panel dividido y diseño en cascada para traductores."
weight: 3
showTableOfContents: true
---

A partir de **HyperBridge v0.6.0**, la aplicación incorpora un rediseño completo pensado específicamente para pantallas grandes, teléfonos plegables y modos de escritorio / Workstation de HyperOS.

En lugar de limitarse a estirar la interfaz de móvil, HyperBridge adapta sus herramientas mediante los estándares modernos de **Window Size Class** ([#453](https://github.com/D4vidDf/HyperBridge/pull/453)).

---

## 🖥️ Espacio de Trabajo Adaptativo de 3 Columnas en Widget Studio (#456)

Al usar **Widget Studio** en una tableta (Xiaomi Pad 6, Xiaomi Pad 7 Pro, Redmi Pad) o en un móvil plegable desplegado (Xiaomi MIX Fold 3 / 4), la interfaz se transforma automáticamente en un **Estudio Creativo de 3 Columnas**:

1. **Columna Izquierda: Árbol de Capas y Jerarquía**: Muestra la lista ordenada de elementos (Contenedores, Textos, Imágenes, Barras de Progreso, Botones y Formas). Permite seleccionar, reorganizar y eliminar capas con 1 toque.
2. **Columna Central: Lienzo Interactivo con Desplazamiento (Panning)**:
   - **Desplazamiento Infinito de Lienzo**: Arrastra el lienzo con fluidez para inspeccionar diseños complejos sin limitaciones de borde.
   - **Selector de Escenario**: Alterna en vivo entre la tarjeta de isla expandida y la cápsula compacta.
   - **Vista Previa de Alta Fidelidad**: Los cambios aplicados se renderizan al instante en el lienzo con fuentes, colores y máscaras exactas.
3. **Columna Derecha: Inspector Contextual de Propiedades**: Se adapta al elemento seleccionado (dimensiones, tipografías personalizadas TTF/OTF, fórmulas dinámicas `{token}` y condiciones de visibilidad `showIf`).

---

## 🎨 Panel Dividido y Navegación en Cascada en el Creador de Temas (#455)

En pantallas grandes, el **Creador de Temas** se organiza en un **Panel Dividido**:
- **Panel Principal (Izquierda)**: Revisa los metadatos del tema, acentos principales, paletas de fondo y la vista previa activa de la isla.
- **Panel en Cascada (Derecha)**: Al entrar en subsecciones (botones de llamada, iconos de acción o sobreescritura de apps), los ajustes se abren en un panel secundario junto a la vista principal sin perder el contexto.

---

## ⚡ Experiencia Adaptativa para Traductores (#460)

El **Editor de Traductores Personalizados** adopta un diseño de doble panel con navegación en cascada:
- **Panel Izquierdo**: Lista de traductores, prioridades, reglas de filtrado y paquetes objetivo.
- **Panel Derecho**: Extractores de variables, asignación de botones de acción e interruptores de comportamiento (`Mostrar en pantalla de bloqueo`, `Solo flotar en la primera alerta`).

---

## 📱 Dispositivos Compatibles

- **Tabletas Xiaomi y Redmi**: Xiaomi Pad 5, Pad 6 / 6S Pro, Xiaomi Pad 7 / 7 Pro y Redmi Pad Pro.
- **Plegables**: Gama Xiaomi MIX Fold (2, 3, 4) y Xiaomi MIX Flip.
- **Modo Estación de Trabajo de HyperOS**: Uso en ventanas flotantes o monitores externos.
