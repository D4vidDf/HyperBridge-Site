---
title: "App Settings & Preferences"
description: "Comprehensive guide to all Hyper Bridge settings, behaviors, limit strategies, and maintenance tools."
weight: 4
showTableOfContents: true
---

The **Settings** menu in Hyper Bridge provides complete command over engine behaviors, queuing limits, privacy exclusions, and diagnostic tools. Tap the gear icon in the top right corner of the app to access settings.

---

## 1. Global Settings

Global Settings defines core notification lifecycle behavior, engine selection, and system integrations.

{{< figure 
    src="/img/docs/settings/en/02-global-settings-menu.jpg" 
    alt="Global Settings Menu" 
    caption="Access Engine selection, Island Behavior, DND, Permanent Island, Smart Actions, Navigation, and Inline Reply." 
>}}

### Engine Mode
Choose between rendering pipelines:
- **Xiaomi Featured Design**: Modern rich cards and status pills for Global and EEA ROMs.
- **Live Update Design**: Native notification channels and live cards for CN ROMs or custom setups.

### Island Behavior
Fine-tune how notifications appear, minimize, and dismiss:
{{< figure 
    src="/img/docs/settings/en/04-island-behavior-part1.jpg" 
    alt="Island Behavior Settings" 
    caption="Adjust auto-hide timeouts and heads-up banner visibility." 
>}}

- **Auto-hide Island**: Define how many seconds (e.g. `5s` to `60s`) an island floats before collapsing.
- **Heads-up Popup**: Briefly display full heads-up notification banners before minimizing into the island pill.
- **Notification Panel Visibility**: Choose whether notifications remain in your pull-down shade while active as an island.
- **Remove original notification**: Dismiss the Android notification when a Live Update is active.
- **Dismiss with original**: Dismiss the island when you clear the notification from your shade.

### Do Not Disturb (DND)
{{< figure 
    src="/img/docs/settings/en/06-do-not-disturb.jpg" 
    alt="Do Not Disturb Settings" 
    caption="Automate island silence during DND or pause islands on demand." 
>}}

- **Auto-detect System DND**: Automatically silences island popups while your device is in Do Not Disturb mode.
- **Pause Islands**: Instant manual pause switch to silence all island popups without altering phone system settings.

### Navigation Layout
{{< figure 
    src="/img/docs/settings/en/10-navigation-layout-config.jpg" 
    alt="Navigation Layout Configuration" 
    caption="Configure left and right side layout for turn-by-turn navigation islands." 
>}}

Customize what is shown while navigation is active:
- **Left Side**: Choose between *Instruction*, *Distance*, *Arrival Time*, or *Distance & Time*.
- **Right Side**: Choose between *Instruction*, *Distance*, *Arrival Time*, *Distance & Time*, or *Empty*.

---

## 2. Floating Notification Setup (Anti-Duplicate Banners)

In HyperOS, apps may produce both an Android system floating banner (heads-up) and a Hyper Bridge dynamic island.

{{< figure 
    src="/img/docs/settings/en/16-floating-notification-setup.jpg" 
    alt="Floating Notification Setup Screen" 
    caption="Manage app banners to prevent duplicate popups." 
>}}

- **Why it matters**: Disabling native floating banners in system settings lets Hyper Bridge display its clean dynamic island without an underlying native popup clashing behind it.
- **Assisted Review**: Hyper Bridge lists every bridged app, lets you jump directly to its system notification setting via the external link icon, and mark it as confirmed.

---

## 3. Limit Strategy (Multi-Island Queue)

What happens when more than 9 applications or notifications are active at the same time?

{{< figure 
    src="/img/docs/settings/en/19-limit-strategy.jpg" 
    alt="Limit Strategy Selection" 
    caption="Choose queue behavior: Most Recent, First Come First Served, or Custom Priority." 
>}}

- **Most Recent (Default)**: Newer notifications replace the oldest active islands once the limit is reached.
- **First Come, First Served**: Retains the first 9 apps; incoming apps wait in queue until active ones dismiss.
- **Custom Priority**: High-value categories (phone calls, live timers, GPS directions) always take precedence over chat messages.

---

## 4. Blocked Terms & Spoiler Protection

Filter out unwanted notifications or protect yourself from TV show spoilers and sports scores.

{{< figure 
    src="/img/docs/settings/en/17-blocked-terms-global.jpg" 
    alt="Blocked Terms Screen" 
    caption="Add global blocked keywords or configure app-specific filter rules." 
>}}

- **Global Rules**: Add keywords (e.g., `Spoiler`, `Score`). Any notification containing these words will never trigger an island.
- **App-Specific Rules**: Set up keyword blocklists limited strictly to selected apps without affecting other apps.

---

## 5. Backup & Restore

Protect your personalized themes, custom translators, and notification settings:

{{< figure 
    src="/img/docs/settings/en/20-backup-restore.jpg" 
    alt="Backup & Restore Screen" 
    caption="Export and restore App Settings, Blocklist Database, and Priority Rules." 
>}}

- **App Settings**: Setup status, theme preferences, and behavior modes.
- **Blocklist Database**: Your custom blocked keywords and app rules.
- **Priority Rules**: Custom notification category priority hierarchies.
- **One-Tap Export/Import**: Tap **Create Backup** to export an offline `.json` snapshot or **Restore Backup** to migrate to a new device.

---

## 6. Guides, Diagnostics & Bug Reporting

Hyper Bridge includes built-in troubleshooting utilities accessible directly from Settings:

{{< figure 
    src="/img/docs/settings/en/21-settings-guides-about.jpg" 
    alt="Guides & Help Menu in Settings" 
    caption="Direct links to System Setup, Documentation, Diagnostics, and Bug Reports." 
>}}

- **[System Setup Guide]({{< ref "docs/permissions/system-setup.md" >}})**: Verify all 6 system permissions and autostart optimizations.
- **[Diagnostics Dashboard]({{< ref "docs/troubleshooting/diagnostics.md" >}})**: Live status of notification listeners and event logs.
- **[Bug Reporting Guide]({{< ref "docs/troubleshooting/bug-reporting.md" >}})**: Export sanitized diagnostic logs to GitHub or email.

---

## 7. About & Community Credits

{{< figure 
    src="/img/docs/settings/en/28-settings-about-credits.jpg" 
    alt="About Screen and Community Credits" 
    caption="Version info, open source licenses, privacy policy, and special thanks." 
>}}

The About section details the active Hyper Bridge version, open source licenses, and gives special thanks to community researchers and contributors who make Hyper Bridge possible!
