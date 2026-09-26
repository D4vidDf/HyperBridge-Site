---
title: "Native System Apps & Options"
description: "Configure built-in system islands including Screen Recording, System Update, and VPN."
weight: 2
showTableOfContents: true
---

Hyper Bridge includes native system island adapters for essential HyperOS and Android platform services: **Screen Recording**, **System Updates**, and **VPN connections**. These system modules have specialized layouts, live timers, progress bars, and custom side display configurations.

You can access and configure each system app directly from the **Active Apps** list (under the `System` filter chip) by tapping the gear icon next to the corresponding service.

---

## 1. Screen Recording Island

The Screen Recording island provides a sleek live status pill during active screen captures, showing a recording indicator, customizable message, and live elapsed timer.

{{< figure 
    src="/img/docs/system-apps/en/01-screen-recording-config.jpg" 
    alt="Screen Recording Island Configuration" 
    caption="Live preview and configuration options for the Screen Recording island." 
>}}

### Configuration Options

- **Preview**: An interactive live preview of how the dynamic island looks while screen capture is active.
- **Left Side**: Determines what information is displayed on the left of the camera cutout.
- **Right Side**: Determines what appears on the right side of the camera cutout.
- **Auto-hide Island**: Controls whether the island auto-hides after recording completes.
  - **Completion Checkmark Duration**: Adjust how long (e.g. `4s`) the completion checkmark remains visible on screen once you stop recording before the island collapses.

---

### Customizing Left & Right Sides

Tap on **Left Side** or **Right Side** to select the presentation style:

{{< figure 
    src="/img/docs/system-apps/en/02-screen-recording-left-side.jpg" 
    alt="Screen Recording Left Side Options" 
    caption="Left Side options: Icon only, Icon and message, or Message only." 
>}}

- **Icon only**: Displays only the red recording pulse dot/icon.
- **Icon and message (Default)**: Displays both the icon and text indicator (`Recording...`).
- **Message only**: Shows only the text message.

{{< figure 
    src="/img/docs/system-apps/en/03-screen-recording-right-side.jpg" 
    alt="Screen Recording Right Side Options" 
    caption="Right Side options: Live Timer or Nothing." 
>}}

- **Timer (Default)**: Shows an accurate live elapsed stopwatch timer (`MM:SS`).
- **Nothing**: Leaves the right side empty for a minimalist compact island.

---

## 2. System Update Island

The System Update island surfaces download progress for HyperOS OTA updates and system packages, keeping you informed without taking over your notification shade.

{{< figure 
    src="/img/docs/system-apps/en/04-system-update-config.jpg" 
    alt="System Update Island Configuration" 
    caption="System Update island live preview, left/right layouts, icon source, and timeout." 
>}}

### Configuration Options

- **Preview**: Shows the live OTA progress with package version and percentage download.
- **Left Side**: Configures the update icon and OS version label.
- **Right Side**: Configures the numeric percentage or circular progress indicator.
- **Icon**: Choose the icon source displayed in the island.
- **Auto-hide Island**: 
  - **Completion Checkmark Duration**: Set how long (e.g. `4s`) the completion indicator stays visible after the update finishes downloading.

---

### Layout & Icon Customization

{{< figure 
    src="/img/docs/system-apps/en/05-system-update-left-side.jpg" 
    alt="System Update Left Side Options" 
    caption="Left Side options: Icon and version, Icon only, or Version only." 
>}}

- **Icon and version (Default)**: Displays the download arrow alongside the target OS version number (e.g., `3.0.304.0`).
- **Icon only**: Displays only the update arrow icon.
- **Version only**: Displays the version string only.

{{< figure 
    src="/img/docs/system-apps/en/06-system-update-right-side.jpg" 
    alt="System Update Right Side Options" 
    caption="Right Side options: Percentage, Progress circle, or Nothing." 
>}}

- **Percentage (Default)**: Shows exact numeric progress (e.g., `17%`).
- **Progress circle**: Renders a circular animated progress ring.
- **Nothing**: Keeps the right side blank for an ultra-compact pill.

{{< figure 
    src="/img/docs/system-apps/en/07-system-update-icon.jpg" 
    alt="System Update Icon Selection Sheet" 
    caption="Select icon source: Default notification icon, Package app icon, System update icon, or Download icon." 
>}}

- **Default notification icon**: Uses the icon provided in the original notification.
- **Package app icon**: Pulls the official system updater app icon.
- **System update icon**: Uses the dedicated HyperOS system update glyph.
- **Download icon**: Uses a universal downward download arrow icon.

---

## 3. VPN Island & Global Settings

In addition to Screen Recording and System Updates, HyperOS system services like **VPN** can be monitored dynamically:
- When a VPN connection starts or establishes a tunnel, the VPN island displays the active status icon and network status.
- You can manage whether system services auto-hide or remain pinned using **Global Settings** (`Settings` > `Global Settings`).

---

## Next Steps

- **[Dynamic Island Engine]({{< ref "docs/features/dynamic-islands.md" >}})**: Learn how notifications and system events are mapped into Super Islands.
- **[Design Hub & Custom Themes]({{< ref "docs/customization/design-hub.md" >}})**: Customize colors, shapes, and layouts across all your islands.
