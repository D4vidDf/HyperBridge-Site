---
title: "WhatsApp VIP Contact & Inline Reply"
description: "High-priority translator (`priority: 500`) that elevates messages from VIP contacts with contact avatar pill, green branding, and inline reply."
date: 2026-10-16
showcase_id: "translators/whatsapp-vip-contact"
showcase_type: "translator"
file_extension: ".htrans"
version: "1.3.0"
min_app_version: "0.6.0"

developer_id: "D4vidDf"
repo_url: "https://github.com/D4vidDf/HyperBridge"
download_url: "/presets/translators/whatsapp_vip_contact.htrans.json"
license: "MIT"

target_scope: "SPECIFIC_APPS"
notification_types:
  - "MESSAGING"
target_apps:
  - name: "WhatsApp"
    package: "com.whatsapp"
  - name: "Telegram"
    package: "org.telegram.messenger"
template_base: "STANDARD"
preview_image: "/img/docs/features/en/inline-reply-appearance.jpg"
preview_compact: "/img/docs/features/en/inline-reply-colors.jpg"
screenshots:
  - "/img/docs/features/en/inline-reply-appearance.jpg"
  - "/img/docs/features/en/inline-reply-colors.jpg"
accent_colors:
  - "#25D366"
  - "#128C7E"
tags:
  - "whatsapp"
  - "telegram"
  - "messaging"
  - "inline-reply"
  - "vip"
---

## Overview

Uses `type_specific_conditions.messaging.sender_name_regex` to match your most important contacts, displaying their circular contact avatar on the status bar pill and enabling interactive **Inline Reply** directly from the floating island.
