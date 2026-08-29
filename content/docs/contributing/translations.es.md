---
title: "Guía de Traducción del Sitio y Documentación"
description: "Guía completa sobre cómo contribuir con traducciones, imágenes localizadas y componentes Blowfish en HyperBridge-Site."
weight: 2
showTableOfContents: true
---

¡Gracias por tu interés en hacer que **Hyper Bridge** esté disponible para usuarios de todo el mundo!

Esta guía detalla el proceso para traducir el **sitio web y la documentación** alojados en [GitHub: HyperBridge-Site](https://github.com/D4vidDf/HyperBridge-Site).

{{< alert icon="lightbulb" >}}
**Traducción de la Aplicación Android vs. Sitio Web:**
* **Textos de la App Android:** Se traducen a través de nuestro [Proyecto en Crowdin](https://crowdin.com/project/hyper-bridge).
* **Sitio Web y Documentación:** Se traducen directamente mediante Pull Requests en [GitHub (HyperBridge-Site)](https://github.com/D4vidDf/HyperBridge-Site).
{{< /alert >}}

---

## 1. Cómo funciona el contenido multilingüe

HyperBridge-Site está construido con [Hugo](https://gohugo.io/) y el [tema Blowfish](https://blowfish.page/). Hugo gestiona los idiomas mediante **sufijos de archivo específicos de idioma** (`.<lang>.md`).

El idioma base y predeterminado del sitio es **inglés (`en`)**.

### Convención de nombres de archivo

Para crear la traducción de cualquier documento, crea un archivo con el mismo nombre base y el [código de idioma ISO 639-1](https://es.wikipedia.org/wiki/ISO_639-1) antes de `.md`:

| Original en Inglés (Origen) | Archivo Traducido (Ejemplo: Español `es`) | Archivo Traducido (Ejemplo: Alemán `de`) |
| :--- | :--- | :--- |
| `content/_index.md` | `content/_index.es.md` | `content/_index.de.md` |
| `content/docs/_index.md` | `content/docs/_index.es.md` | `content/docs/_index.de.md` |
| `content/docs/getting-started/installation.md` | `content/docs/getting-started/installation.es.md` | `content/docs/getting-started/installation.de.md` |
| `content/privacy/_index.md` | `content/privacy/_index.es.md` | `content/privacy/_index.de.md` |

---

## 2. Flujo de trabajo rápido

Sigue estos pasos para contribuir con una traducción mediante Git:

### Paso 1: Haz un Fork y clona el repositorio

```bash
# Clona tu fork (asegúrate de inicializar los submódulos para el tema Blowfish)
git clone --recurse-submodules https://github.com/<tu-usuario>/HyperBridge-Site.git
cd HyperBridge-Site
```

### Paso 2: Ejecuta el servidor de desarrollo de Hugo

Asegúrate de tener instalado [Hugo Extended](https://gohugo.io/installation/) (`hugo version` debe mostrar `extended`).

```bash
# Inicia el servidor local con borradores y recarga en vivo
hugo server -D
```

Abre tu navegador en `http://localhost:1313/` (o `http://localhost:1313/es/` para previsualizar en español).

### Paso 3: Agrega o edita archivos traducidos

1. Copia el archivo en inglés que deseas traducir (por ejemplo, `content/docs/permissions/notification-listener.md`).
2. Guárdalo como `notification-listener.es.md` en el mismo directorio.
3. Traduce el contenido en Markdown y el front matter manteniendo intactos los pesos (`weight`) y la estructura.

### Paso 4: Haz commit y envía una PR

```bash
git checkout -b docs/traducir-permisos-es
git add content/docs/permissions/notification-listener.es.md
git commit -m "docs(i18n): add Spanish translation for notification-listener"
git push origin docs/traducir-permisos-es
```

Abre una Pull Request en [D4vidDf/HyperBridge-Site](https://github.com/D4vidDf/HyperBridge-Site).

---

## 3. Reglas para el Front Matter

Cada archivo Markdown comienza con un bloque de metadatos YAML delimitado por `---`. Al traducir, adapta los campos de texto y conserva las variables de navegación:

```yaml
---
title: "Guía de Permisos de Notificación"       # Título traducido de la página
description: "Cómo habilitar el acceso a..."    # Resumen / descripción meta
weight: 10                                      # DEBE coincidir con el peso del original en inglés
showTableOfContents: true                       # Mantener idéntico al original
---
```

{{< alert icon="triangle-exclamation" >}}
**Importante:** **No** modifiques el parámetro `weight` entre versiones de idioma. La barra lateral y el orden de navegación dependen de pesos idénticos en todas las traducciones.
{{< /alert >}}

---

## 4. Uso de imágenes personalizadas y localizadas

Las explicaciones visuales y capturas de pantalla pueden mostrar interfaces del sistema en el idioma del usuario. Puedes proporcionar fácilmente imágenes específicas para cada idioma.

### Método A: Directorio de recursos compartido (Recomendado)

Coloca las imágenes traducidas dentro de `assets/img/docs/<lang>/` o `static/img/docs/<lang>/`:

```
assets/
└── img/
    ├── hero.png                 # Imagen hero en inglés por defecto
    └── docs/
        ├── permissions-en.png   # Captura en inglés
        ├── es/
        │   └── permissions.png  # Captura en español
        └── de/
            └── permissions.png  # Captura en alemán
```

#### En Markdown / Shortcode:

Imagen estándar en Markdown:
```markdown
![Configuración de Permisos](/img/docs/es/permissions.png)
```

Shortcode `figure` de Blowfish (recomendado para pie de foto, zoom y estilos):
```markdown
{{</* figure 
    src="/img/docs/es/permissions.png" 
    alt="Configuración del servicio de escucha de notificaciones" 
    caption="Paso 1: Concede acceso al servicio Hyper Bridge" 
*/>}}
```

---

### Método B: Paquetes de página (Leaf Bundles)

Si una sección de documentación está estructurada como directorio de paquete de página:

```
content/docs/getting-started/installation/
├── index.md           # Contenido en inglés
├── index.es.md        # Traducción al español
├── step-1.png         # Imagen por defecto en inglés
└── step-1.es.png      # Imagen localizada en español
```

En `index.es.md`, puedes hacer referencia directa a la imagen localizada:
```markdown
![Paso 1](step-1.es.png)
```

---

### Método C: Imagen Hero localizada en el Front Matter

Para páginas con encabezado Hero (como la página de inicio o portadas de sección):

```yaml
---
title: "Hyper Bridge"
heroCaption: "Expande tu Super Island"
heroLead: "Desbloquea el sistema nativo de notificaciones visuales de HyperOS."
heroImage: "img/es/hero.png"    # Ruta a la imagen hero localizada
---
```

---

## 5. Componentes del tema y Shortcodes

HyperBridge-Site utiliza shortcodes de Blowfish y componentes propios. **Mantén las etiquetas de los shortcodes intactas y traduce únicamente los textos y parámetros visibles al usuario.**

### Alertas / Avisos (`alert`)

Se usan para resaltar consejos, avisos o notas importantes:

```markdown
{{</* alert icon="lightbulb" */>}}
**Consejo:** Asegúrate de desactivar las restricciones de ahorro de batería.
{{</* /alert */>}}

{{</* alert icon="triangle-exclamation" */>}}
**Advertencia:** No fuerces el cierre del servicio en segundo plano.
{{</* /alert */>}}
```

#### Colores personalizados para alertas

El shortcode de alertas de Hyper Bridge admite parámetros de color opcionales:

```markdown
{{</* alert icon="shield" cardColor="#1e293b" iconColor="#38bdf8" textColor="#f8fafc" */>}}
Procesamiento 100% local y privado.
{{</* /alert */>}}
```

---

### Estadísticas (`stats` y `stat`)

```markdown
{{</* stats columns="2" */>}}
{{</* stat value="1M+" label="Descargas" */>}}
Confiado por usuarios en todo el mundo en Google Play y GitHub.
{{</* /stat */>}}
{{</* stat value="100%" label="Offline y Privado" */>}}
Se ejecuta enteramente en el dispositivo sin telemetría.
{{</* /stat */>}}
{{</* /stats */>}}
```

---

### Cuadrícula de características (`feature-grid` y `feature`)

```markdown
{{</* feature-grid */>}}

{{</* feature icon="wand-magic-sparkles" title="Isla Dinámica para HyperOS" */>}}
Conecta las notificaciones estándar de Android con la Super Isla nativa de Xiaomi HyperOS.
{{</* /feature */>}}

{{</* feature icon="shield" title="Privacidad y Seguridad" */>}}
Tus datos nunca salen de tu teléfono.
{{</* /feature */>}}

{{</* /feature-grid */>}}
```

---

### Pasos y procedimientos (`steps` y `step`)

```markdown
{{</* steps */>}}

{{</* step */>}}
#### Instala la Aplicación
Descarga Hyper Bridge desde Google Play o GitHub Releases.
{{</* /step */>}}

{{</* step */>}}
#### Concede los Permisos
Habilita el Acceso a Notificaciones en los Ajustes del Sistema.
{{</* /step */>}}

{{</* /steps */>}}
```

---

### Pestañas (`tabs` y `tab`)

```markdown
{{</* tabs */>}}
{{</* tab name="Google Play" */>}}
Descarga directa con actualizaciones automáticas.
{{</* /tab */>}}
{{</* tab name="GitHub APK" */>}}
Descarga el archivo APK más reciente desde Releases.
{{</* /tab */>}}
{{</* /tabs */>}}
```

---

### Insignias, Texto introductorio e Iconos

* **Párrafo destacado:** `{{</* lead */>}}Texto destacado de introducción{{</* /lead */>}}`
* **Insignias:** `{{</* badge */>}}Recomendado{{</* /badge */>}}`
* **Iconos:** `{{</* icon "check" */>}}` (Admite cualquier identificador de FontAwesome como `wand-magic-sparkles`, `bell`, `shield`, `code`, `lightbulb`).

---

## 6. Configuración de un nuevo idioma

Si estás agregando un idioma completamente nuevo que aún no está configurado en el sitio:

### 1. Añadir archivo de configuración del idioma

Crea `config/_default/languages.<lang>.toml` (ejemplo `languages.fr.toml`):

```toml
locale = "fr"
label = "Français"
displayName = "Français"
weight = 5
title = "Hyper Bridge"

[params]
  displayName = "Français"
  isoCode = "fr"
  dateFormat = "2 January 2006"
  logo = "img/logo.svg"
  description = "Hyper Bridge déverrouille le système de notifications visuelles natif d'HyperOS."
  copyright = "© 2026 D4vidDf. Tous droits réservés."

[params.author]
  name = "Hyper Bridge"
  image = "img/logo.svg"
  headline = "Étendez votre Super Island"
  bio = "Hyper Bridge déverrouille le système de notifications visuelles natif d'HyperOS."
  links = [
    { github = "https://github.com/D4vidDf/HyperBridge" },
    { globe = "https://crowdin.com/project/hyperbridge" }
  ]
```

### 2. Añadir menús traducidos

Crea `config/_default/menus.<lang>.toml` (ejemplo `menus.fr.toml`):

```toml
[[main]]
  name = "Documentation"
  pageRef = "docs"
  weight = 10

[[main]]
  name = "Notes de version"
  pageRef = "changelog"
  weight = 20

[[main]]
  name = "Confidentialité"
  pageRef = "privacy"
  weight = 22

[[main]]
  url = "https://play.google.com/store/apps/details?id=com.d4viddf.hyperbridge"
  weight = 25
  pre = "google-play"
  title = "Google Play"

[[main]]
  url = "https://github.com/D4vidDf/HyperBridge"
  weight = 30
  pre = "github"
  title = "GitHub"
```

---

## 7. Glosario y estilo

Para mantener la coherencia y calidad entre traducciones:

| Término en Inglés | Recomendación de Traducción |
| :--- | :--- |
| **HyperIsland / Super Island** | Mantener como nombre propio (o término oficial en Xiaomi HyperOS). |
| **Smart Translators** | Traducir descriptivamente (*Traductores Inteligentes*). |
| **Notification Listener** | Referirse al servicio (*Acceso a Notificaciones*, *Notification Listener*). |
| **Shizuku** | Mantener como nombre de herramienta (*Shizuku*). |
| **HyperOS** | Mantener como marca (*HyperOS*). |

---

## 8. Lista de verificación antes de enviar tu PR

Antes de abrir tu Pull Request, verifica lo siguiente:

- [ ] El archivo tiene el formato `<nombre-original>.<lang>.md`.
- [ ] El parámetro `weight` en el front matter coincide exactamente con la página en inglés.
- [ ] Todos los enlaces internos (`/docs/...`) funcionan correctamente en la previsualización local (`hugo server -D`).
- [ ] Todos los shortcodes (ej. alert, feature, stats) están bien cerrados.
- [ ] Las imágenes personalizadas se encuentran en `assets/img/docs/<lang>/` (o dentro de paquetes de página) y cargan bien.
- [ ] `hugo server -D` compila sin errores ni advertencias en la terminal.
- [ ] La Pull Request incluye un título descriptivo (ej. `docs(i18n): add German translation for getting-started`).
