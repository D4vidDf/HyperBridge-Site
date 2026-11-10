---
title: "Native System Apps & Options"
description: "Configure built-in system islands including Screen Recording, System Updates, Charging Status, USB Debugging, and VPN."
weight: 4
showTableOfContents: true
linkTitle: "System Islands"
---

Hyper Bridge includes native system island adapters for essential HyperOS and Android platform services: **Screen Recording**, **System Updates**, **Charging Status**, **USB & Wireless Debugging**, and **VPN connections**. These system modules feature specialized layouts, live timers, wattage calculations, and custom side display configurations.

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
- **Left Side**: Determines what information is displayed on the left of the camera cutout (Icon only, Icon and message, or Message only).
- **Right Side**: Determines what appears on the right side of the camera cutout (Live Timer `MM:SS` or Nothing).
- **Auto-hide Island**: Controls whether the island auto-hides after recording completes.
  - **Completion Checkmark Duration**: Adjust how long (e.g. `4s`) the completion checkmark remains visible on screen once you stop recording before the island collapses.

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
- **Left Side**: Configures the update icon and OS version label (Icon and version, Icon only, or Version only).
- **Right Side**: Configures the numeric percentage or circular progress indicator.
- **Icon Source**: Choose between Default notification icon, Package app icon, System update icon, or Download icon.
- **Auto-hide Island**: Set how long (e.g. `4s`) the completion indicator stays visible after the update finishes downloading.

---

## 3. ⚡ Charging Status Island (#424, #426, #448)

Introduced in **HyperBridge v0.6.0**, the **Charging Status Island** turns plug-in and wireless charging events into an expressive, real-time battery status card centered on your camera cutout.

### Features & Capabilities

- **Real-Time Interactive Preview**: Test charging animations, layouts, and typography directly inside the settings screen before plugging in your phone.
- **Charging Speed Display Mode**:
  - **Standard Battery %**: Displays clean battery level percentage with charging bolt.
  - **Live Wattage Mode**: Renders dynamic charging speed in watts (e.g. `67W`, `90W`, `120W`).
- **Dual-Cell Battery Wattage Calculation (#448)**: Modern Xiaomi flagship devices (such as Xiaomi 13 Pro/Ultra, Xiaomi 14 series, POCO F6 Pro, and Redmi K-series) use dual-cell split-battery architectures. HyperBridge accurately calculates total wattage across both battery cells rather than underreporting half the power.
- **Vendor-Specific Charge Time Estimation (#448)**: Queries Xiaomi-specific battery fuel gauge drivers to calculate remaining time until full charge with minute-by-minute precision.
- **Customizable Layout Designs**: Choose between minimal compact pills, extended charging bars, or prominent wattage badges.

---

## 4. 🛠️ USB & Wireless Debugging Island (#430)

For Android developers, power users, and modders, HyperBridge v0.6.0 introduces an automatic **Debugging Status Island**:

- **Automatic Triggering**: Instantly displays an island status capsule as soon as an active USB debugging (`adb`) or Wireless ADB session is established.
- **Interface Indicator**:
  - **USB Debugging**: Displays the USB cable glyph and host machine connection status.
  - **Wireless Debugging**: Shows the Wi-Fi broadcast indicator along with the active pairing port (`ip:port`).
- **Zero-Clutter Workspace**: Replaces the bulky Android system notification shade prompt with an elegant camera pill that stays visible while testing.
- **Quick Dismissal**: Automatically dismisses the moment the ADB server disconnects or the USB cable is unplugged.

---

## 5. 🔒 VPN Island & Customization Suite (#431)

HyperBridge v0.6.0 upgrades the VPN Island with a full-fledged **VPN Customization Screen**:

### Customization Options

- **Multi-Mode Detection**:
  - **Network Callback Mode**: Listens directly to Android's `ConnectivityManager.NetworkCallback` for immediate tunnel establishment.
  - **Interface Polling Mode**: Monitors low-level `tun0` / `pdp_data` network interfaces, ideal for custom VPN daemons and proxy tools.
- **Cloudflare WARP Adapter Support**: Tailored recognition for the Cloudflare `1.1.1.1` WARP adapter, wireguard routing, and split-tunnel states.
- **Provider Priority Sorting**: If you run multiple VPN, AdGuard, or DNS services simultaneously, drag to re-order provider priority so the most relevant VPN service takes the island anchor.
- **Connected Duration Stopwatch**: Live elapsed time counter (`HH:MM:SS`) tracking how long your secure tunnel has been active.
- **Country Flags & Server Indicator**: Automatically parses geographic endpoints to display the server country flag directly on the expanded card.
- **1-Tap Disconnect Action**: Expanded island card provides a dedicated disconnect button, allowing you to terminate active VPN tunnels without navigating into system settings.

---

## 🔗 Related Resources

- **[Dynamic Island Engine]({{< ref "docs/features/dynamic-islands.md" >}})**: Learn how notifications and system events are mapped into HyperIslands.
- **[Design Hub & Custom Themes]({{< ref "docs/customization/design-hub.md" >}})**: Customize colors, shapes, and layouts across all your islands.
- **[Shizuku Privileged Features]({{< ref "docs/shizuku/privileged-features.md" >}})**: Elevated IPC controls for Xiaomi screen recording and system telemetry.
