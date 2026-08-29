# Contributing to HyperBridge-Site

Welcome and thank you for your interest in contributing to the **Hyper Bridge Website and Documentation**!

This repository powers the official documentation and web presence for [Hyper Bridge](https://hyper-bridge.app/).

---

## How You Can Help

### 1. Translating Documentation & Website
Help translate our documentation into your language, or add localized screenshots and diagrams!
* **Read the full [Website & Docs Translation Guide](https://hyper-bridge.app/docs/contributing/translations/)** (or local file [`content/docs/contributing/translations.md`](content/docs/contributing/translations.md)).
* *Note:* If you want to translate the Android app interface and strings, visit our [Crowdin Project](https://crowdin.com/project/hyper-bridge).

### 2. Improving Documentation Content & Fixes
* Fixing typos, broken links, or outdated troubleshooting steps.
* Adding new guides for permissions, Shizuku setup, or custom translators.

### 3. Site Design & Features
* HyperBridge-Site is built with [Hugo Extended](https://gohugo.io/) and the [Blowfish theme](https://blowfish.page/).
* Components and styles use Vanilla CSS and Blowfish shortcodes.

---

## Local Development Setup

1. **Clone the repository with submodules:**
   ```bash
   git clone --recurse-submodules https://github.com/D4vidDf/HyperBridge-Site.git
   cd HyperBridge-Site
   ```

2. **Install Hugo Extended:**
   Make sure you have [Hugo Extended](https://gohugo.io/installation/) installed (`hugo version` should include `extended`).

3. **Start the local development server:**
   ```bash
   hugo server -D
   ```
   Open `http://localhost:1313/` in your browser.

---

## Submitting Pull Requests

1. Create a branch for your changes:
   ```bash
   git checkout -b docs/my-translation-or-fix
   ```
2. Test your changes with `hugo server -D`.
3. Commit and push to your fork:
   ```bash
   git commit -m "docs: add Spanish translation for troubleshooting"
   git push origin docs/my-translation-or-fix
   ```
4. Open a Pull Request against the `main` branch with a clear description.
