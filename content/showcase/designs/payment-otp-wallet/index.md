---
title: "Smart Payment & OTP Wallet Card"
description: "Transaction receipt island card (tpl_payment_wallet) with highlighted payment totals and a 1-tap Copy Verification Code / OTP smart action."
date: 2026-10-13
showcase_id: "designs/payment-otp-wallet"
showcase_type: "design"
file_extension: ".hwidget"
version: "1.0.0"
min_app_version: "0.6.0"

developer_id: "D4vidDf"
repo_url: "https://github.com/D4vidDf/HyperBridge"
download_url: "/presets/designs/payment_otp_wallet.hwidget.json"
license: "MIT"

target_scope: "SPECIFIC_APPS"
notification_types:
  - "MESSAGING"
  - "STANDARD"
target_apps:
  - name: "Google Wallet"
    package: "com.google.android.apps.walletnfcrel"
  - name: "Revolut"
    package: "com.revolut.revolut"
  - name: "PayPal"
    package: "com.paypal.android.p2pmobile"
canvas_size: "MEDIUM"
template_base: "tpl_payment_wallet"
preview_image: "/img/docs/designs/en/05-template-configuration-scope.jpg"
preview_compact: "/img/docs/designs/en/01-designs-manager-empty.jpg"
screenshots:
  - "/img/docs/designs/en/05-template-configuration-scope.jpg"
accent_colors:
  - "#3B82F6"
  - "#10B981"
  - "#0F172A"
tags:
  - "payment"
  - "wallet"
  - "otp"
  - "banking"
---

## Overview

Configured using Xiaomi's `tpl_payment_wallet` (`BASE_TYPE_2`) layout, this design formats banking alerts, card transactions, and 3D-Secure verification prompts into a structured receipt card with an instant **Copy OTP** button.
