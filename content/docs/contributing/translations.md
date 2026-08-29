---
title: "Website & Docs Translation Guide"
description: "Complete guide on contributing translations, localized images, and Blowfish components to HyperBridge-Site."
weight: 2
showTableOfContents: true
---

Thank you for your interest in making **Hyper Bridge** accessible to users worldwide!

This guide explains how to translate the **website and documentation** hosted on [GitHub: HyperBridge-Site](https://github.com/D4vidDf/HyperBridge-Site).

{{< alert icon="lightbulb" >}}
**Translating the Android App vs. the Website:**
* **Android App Strings:** Translated via our [Crowdin Project](https://crowdin.com/project/hyper-bridge).
* **Website & Documentation:** Translated directly via Pull Requests on [GitHub (HyperBridge-Site)](https://github.com/D4vidDf/HyperBridge-Site).
{{< /alert >}}

---

## 1. How Multilingual Content Works

HyperBridge-Site is built with [Hugo](https://gohugo.io/) and the [Blowfish theme](https://blowfish.page/). Hugo handles multiple languages using **language-specific filename suffixes** (`.<lang>.md`).

The default language of the site is **English (`en`)**.

### File Naming Convention

To create a translation of any document, create a file with the same base name and the target [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) before `.md`:

| English Original (Source) | Translated File (Example: Spanish `es`) | Translated File (Example: German `de`) |
| :--- | :--- | :--- |
| `content/_index.md` | `content/_index.es.md` | `content/_index.de.md` |
| `content/docs/_index.md` | `content/docs/_index.es.md` | `content/docs/_index.de.md` |
| `content/docs/getting-started/installation.md` | `content/docs/getting-started/installation.es.md` | `content/docs/getting-started/installation.de.md` |
| `content/privacy/_index.md` | `content/privacy/_index.es.md` | `content/privacy/_index.de.md` |

---

## 2. Quick Start Workflow

Follow these steps to contribute a translation via Git:

### Step 1: Fork & Clone the Repository

```bash
# Clone your fork (make sure submodules are initialized for Blowfish theme)
git clone --recurse-submodules https://github.com/<your-username>/HyperBridge-Site.git
cd HyperBridge-Site
```

### Step 2: Run the Hugo Development Server

Make sure you have [Hugo Extended](https://gohugo.io/installation/) installed (`hugo version` should show `extended`).

```bash
# Start local development server with drafts and live reloading
hugo server -D
```

Open your browser at `http://localhost:1313/` (or `http://localhost:1313/<lang>/` to preview your language).

### Step 3: Add or Edit Translated Files

1. Copy the English file you want to translate (e.g. `content/docs/permissions/notification-listener.md`).
2. Save it as `notification-listener.<lang>.md` in the same directory (e.g. `notification-listener.es.md`).
3. Translate the Markdown content and front matter while keeping weights and structure intact.

### Step 4: Commit and Submit a PR

```bash
git checkout -b docs/translate-permissions-es
git add content/docs/permissions/notification-listener.es.md
git commit -m "docs(i18n): add Spanish translation for notification-listener"
git push origin docs/translate-permissions-es
```

Open a Pull Request on [D4vidDf/HyperBridge-Site](https://github.com/D4vidDf/HyperBridge-Site).

---

## 3. Front Matter Rules

Every Markdown file begins with YAML front matter enclosed by `---`. When translating, adapt the text fields while preserving structural and navigation variables:

```yaml
---
title: "Guía de Permisos de Notificación"       # Translated page title
description: "Cómo habilitar el acceso a..."    # Translated page summary/meta description
weight: 10                                      # MUST match the English page's weight
showTableOfContents: true                       # Keep identical to source
---
```

{{< alert icon="triangle-exclamation" >}}
**Important:** Do **not** change the `weight` parameter between language versions. The navigation menu and sidebar order rely on matching weights across translations.
{{< /alert >}}

---

## 4. Using Custom & Localized Images

Visual explanations and screenshots may feature localized Android or HyperOS interfaces. You can easily supply language-specific images for your translations.

### Method A: Shared Assets Directory (Recommended)

Place localized images inside `assets/img/docs/<lang>/` or `static/img/docs/<lang>/`:

```
assets/
└── img/
    ├── hero.png                 # Default English hero image
    └── docs/
        ├── permissions-en.png   # English screenshot
        ├── es/
        │   └── permissions.png  # Spanish screenshot
        └── de/
            └── permissions.png  # German screenshot
```

#### In Markdown / Shortcode:

Standard Markdown image:
```markdown
![Configuración de Permisos](/img/docs/es/permissions.png)
```

Blowfish `figure` shortcode (recommended for captions, zooming, and styling):
```markdown
{{</* figure 
    src="/img/docs/es/permissions.png" 
    alt="Configuración del servicio de escucha de notificaciones" 
    caption="Paso 1: Concede acceso al servicio Hyper Bridge" 
*/>}}
```

---

### Method B: Page Bundle Assets (Leaf Bundles)

If a documentation section is organized as a leaf bundle directory:

```
content/docs/getting-started/installation/
├── index.md           # English content
├── index.es.md        # Spanish content
├── step-1.png         # Default English image
└── step-1.es.png      # Localized Spanish image
```

In `index.es.md`, you can directly reference the localized asset:
```markdown
![Paso 1](step-1.es.png)
```

---

### Method C: Localized Hero Image in Front Matter

For pages with hero headers (such as the landing page or section headers):

```yaml
---
title: "Hyper Bridge"
heroCaption: "Expande tu Super Island"
heroLead: "Desbloquea el sistema nativo de notificaciones visuales de HyperOS."
heroImage: "img/es/hero.png"    # Path to localized hero image
---
```

---

## 5. Theme Components & Shortcodes

HyperBridge-Site uses Blowfish shortcodes and custom components. **Preserve shortcode markup and translate only the inner text and user-facing parameters.**

### Alerts / Callouts (`alert`)

Used to highlight tips, warnings, or notes:

```markdown
{{</* alert icon="lightbulb" */>}}
**Consejo:** Asegúrate de desactivar las restricciones de ahorro de batería.
{{</* /alert */>}}

{{</* alert icon="triangle-exclamation" */>}}
**Advertencia:** No fuerces el cierre del servicio en segundo plano.
{{</* /alert */>}}
```

#### Custom Alert Colors

Our custom alert shortcode supports optional color parameters:

```markdown
{{</* alert icon="shield" cardColor="#1e293b" iconColor="#38bdf8" textColor="#f8fafc" */>}}
Procesamiento 100% local y privado.
{{</* /alert */>}}
```

---

### Stats (`stats` and `stat`)

Used for highlight metrics on landing pages:

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

### Feature Grid (`feature-grid` and `feature`)

Used to display feature cards:

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

### Steps & Procedures (`steps` and `step`)

For ordered tutorials and installation instructions:

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

### Tabs (`tabs` and `tab`)

For multi-platform or alternative methods:

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

### Badges, Lead Text & Icons

* **Lead paragraph:** `{{</* lead */>}}Texto destacado de introducción{{</* /lead */>}}`
* **Badges:** `{{</* badge */>}}Recomendado{{</* /badge */>}}`
* **Icons:** `{{</* icon "check" */>}}` (Accepts any standard FontAwesome icon identifier like `wand-magic-sparkles`, `bell`, `shield`, `code`, `lightbulb`).

---

## 6. Configuring a New Language

If you are adding a completely **new language** that isn't configured yet:

### 1. Add Language Configuration

Create `config/_default/languages.<lang>.toml` (e.g. `languages.fr.toml`):

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

### 2. Add Localized Menus

Create `config/_default/menus.<lang>.toml` (e.g. `menus.fr.toml`):

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

## 7. Style Guide & Terminology

To maintain high quality and consistency across translations, follow these terminology guidelines:

| English Term | Recommended Translation Guideline |
| :--- | :--- |
| **HyperIsland / Super Island** | Keep as brand name (or official localized Xiaomi HyperOS term). |
| **Smart Translators** | Translate descriptively (e.g. *Traductores Inteligentes*, *Traducteurs intelligents*). |
| **Notification Listener** | Refer to system service (e.g. *Acceso a Notificaciones*, *Notification Listener*). |
| **Shizuku** | Keep as tool name (*Shizuku*). |
| **HyperOS** | Keep as brand name (*HyperOS*). |

---

## 8. Translation Contribution Checklist

Before opening your Pull Request, please check:

- [ ] File is named `<original-filename>.<lang>.md`.
- [ ] Front matter `weight` matches the source English document.
- [ ] All internal links (`/docs/...`) are valid and work in the local preview (`hugo server -D`).
- [ ] Shortcodes (e.g. alert, feature, stats) are properly opened and closed.
- [ ] Custom images are placed in `assets/img/docs/<lang>/` (or leaf bundles) and render cleanly.
- [ ] `hugo server -D` builds without errors or warnings in the terminal.
- [ ] Pull request has a descriptive title (e.g., `docs(i18n): add German translation for getting-started`).

---

## Need Help?

If you have questions about translating or setting up Hugo:
* Open an issue or discussion on [GitHub: HyperBridge-Site](https://github.com/D4vidDf/HyperBridge-Site/issues).
* Check the official [Blowfish Documentation](https://blowfish.page/docs/getting-started/).
