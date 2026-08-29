---
title: "Frequently Asked Questions (FAQ)"
description: "Common questions about Hyper Bridge, HyperIsland architecture, OEM compatibility, lock screen limitations, and privacy."
weight: 1
showTableOfContents: true
---

Find answers to common questions about how Hyper Bridge works, its architecture, compatibility, and privacy guarantees.

---

## What does Hyper Bridge do?

Hyper Bridge is an application that acts as a bridge, reading standard Android notifications and translating them into native, featured notifications for Xiaomi HyperOS to display seamlessly on the **HyperIsland** (Super Island / Dynamic Island).

---

## What does Hyper Bridge use under the hood?

Hyper Bridge uses the **[Hyper Island ToolKit](https://github.com/D4vidDf/HyperIsland-ToolKit)** ([ToolKit documentation](https://hyperisland.d4viddf.com/)) to generate native notifications following the official **[Xiaomi HyperOS HyperIsland specifications](https://dev.mi.com/xiaomihyperos/ability/XiaomiHyperIsland)**.

Hyper Island ToolKit was created and is actively maintained by **D4vidDf** (the developer of Hyper Bridge). It was originally built via reverse engineering before official documentation was made public by Xiaomi, and now adheres strictly to official HyperOS guidelines and best practices to ensure optimal performance and stability.

---

## Why does the island still show when I uninstall Hyper Bridge?

Xiaomi introduced Hyper Island natively starting in **HyperOS 3**, allowing system applications and approved third-party apps to display status cards directly in the island area. 

Because Hyper Bridge only functions as a translation layer, native OS features—such as multimedia playback, the built-in Clock and timer apps, or charging status animations—will continue to appear on the island even when Hyper Bridge is uninstalled, as they are part of the core operating system.

---

## Why can't Hyper Bridge work on other OEMs or non-Xiaomi devices?

Hyper Bridge operates purely as a translation layer specifically tailored to Xiaomi's native Hyper Island specification. It does not draw a custom overlay or inject a simulated UI layer on your screen. Because other manufacturers (such as Samsung, Google, or OnePlus) do not have the native Xiaomi HyperIsland framework, Hyper Bridge cannot render islands on non-Xiaomi devices.

---

## Why can't I have an island on the lock screen?

Xiaomi restricts the display of Hyper Island strictly to when the device is unlocked; the island is deliberately hidden on the lock screen by the operating system. Because Hyper Bridge relies 100% on the native OS framework rather than drawing custom overlays over your lock screen, it cannot display notifications on the lock screen.

---

## Does Hyper Bridge collect my personal data?

**No, absolutely not.** Hyper Bridge operates entirely on-device and does not collect, log, or share any personal data with the developers or third parties. 

Furthermore, the Hyper Bridge application does not request or contain network permissions (`android.permission.INTERNET`), making external communication technically impossible.

---

## Does Hyper Bridge drain battery?

**No.** Hyper Bridge is designed to be lightweight and event-driven. It only processes notifications at the moment they are posted or updated by Android. When no notification is actively updating or displayed, background CPU usage is 0%.

If you ever experience abnormal or heavy battery drain, please report the issue on **[GitHub Issues](https://github.com/D4vidDf/HyperBridge/issues)** or contact us directly via email at **[d4viddf@d4viddf.com](mailto:d4viddf@d4viddf.com)** so we can investigate and address it promptly.

---

## Is Hyper Bridge free and open source?

Yes! Hyper Bridge is 100% free and open-source under the **Apache 2.0** license. You can inspect the source code, contribute, or track releases on our official **[GitHub repository](https://github.com/D4vidDf/HyperBridge)**.
