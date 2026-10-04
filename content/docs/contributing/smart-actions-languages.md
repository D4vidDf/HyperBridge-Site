---
title: "Adding Smart Actions Support for Your Language"
description: "How to teach the Smart Actions extractor the verification-code words, street names and parcel vocabulary of your language."
weight: 3
showTableOfContents: true
---

[Smart Actions]({{< ref "docs/features/smart-actions.md" >}}) find verification codes, addresses, links, phone numbers and parcel numbers in notification text. Numbers and links look the same everywhere, but the **words around them** don't: "code", "Calle", "Straße" and "посылка" all have to be listed somewhere. This guide shows where those lists live and how to add your language.

{{< alert icon="lightbulb" >}}
**Button labels are not here.** Labels like "Copy code" or "Directions" are normal app strings and are translated on [Crowdin](https://crowdin.com/project/hyper-bridge). This guide is about **detection**: making Hyper Bridge recognise notifications written in your language.
{{< /alert >}}

---

## 1. Where the Code Lives

Everything is in one file of the [Hyper Bridge repository](https://github.com/D4vidDf/HyperBridge), with its tests next to it:

| File | What it is |
| :--- | :--- |
| `app/src/main/java/com/d4viddf/hyperbridge/service/smartactions/SmartActionsExtractor.kt` | The extractor: plain Kotlin, no Android APIs |
| `app/src/test/java/com/d4viddf/hyperbridge/service/smartactions/SmartActionsExtractorTest.kt` | JVM unit tests, run in seconds without a phone |

Base your branch on the current development branch (`dev/0_6_0` at the time of writing) and open the Pull Request against it.

---

## 2. Which List to Edit

Each action type has its own language-specific constants. You rarely need to touch more than one or two.

### 🔐 Verification codes (OTP)

| Constant | Purpose | Example entries |
| :--- | :--- | :--- |
| `OTP_KEYWORDS_LATIN` | Words that introduce a code, in Latin-script languages. Matched as whole words. | `codes?`, `c[oó]digos?`, `best[äa]tigungscode`, `wachtwoord` |
| `OTP_KEYWORDS_OTHER` | The same for other scripts (Cyrillic, CJK, Arabic, Hebrew...). Matched as substrings. | `код`, `验证码`, `인증번호`, `رمز` |
| `OTP_NEGATIVE_PHRASES` | Phrases that contain a keyword but are **not** a login code, such as postal codes, promo codes and order codes. They are removed before detection. | `c[oó]digo\s+postal`, `Postleitzahl` |

A number only becomes a "Copy" button when it sits close to one of these keywords. If codes in your language are not detected, a keyword is missing. If postal codes or discount codes turn into copy buttons, add a negative phrase.

### 🧭 Addresses

| Constant | Purpose | Example entries |
| :--- | :--- | :--- |
| `STREET_PREFIX` | Street words that come **before** the name: "Calle Mayor 12", "Via Roma 3". | `calle`, `r[uú]a`, `via`, `rue` |
| `STREET_SUFFIX_EN` | English street words that come **after** the name: "221B Baker Street". | `street`, `ave\.?`, `road` |
| `STREET_SUFFIX_GLUED` | Street words glued to the name: "Hauptstraße 5", "Kalverstraat 12". | `stra(?:ß\|ss)e`, `straat`, `gasse` |
| `NAV_CONTEXT` | Words like "address", "pickup" or "meet at" that make a weaker match trustworthy. | `direcci[oó]n`, `abhol`, `bezorg` |
| `CITY_TAIL` | The optional ", 28013 Madrid" part after the street, including connector words such as `de`, `do`, `der`. | `de\|del\|la\|...` |

Map links (Google Maps, Waze, Yandex, Naver, Amap...) are listed in `MAP_LINK`. They don't depend on language, but if a popular maps service from your country is missing, add its domain there.

### 📦 Parcel tracking

| Constant | Purpose |
| :--- | :--- |
| `TRACKING_CONTEXT` | Words such as "shipment", "paquete" or "Sendung" that a generic tracking number must appear near. |
| `CARRIERS` | Carrier-specific number formats and their tracking URLs (e.g. Correos `XX123456789ES`). Add your national postal service here. |

### 📞 Phone numbers

| Constant | Purpose |
| :--- | :--- |
| `PHONE_NEGATIVE_CONTEXT` | Words like "order", "invoice" or "IBAN" that mean the number after them is an identifier, not something to dial. |

---

## 3. Worked Example: Polish Street Names

Polish addresses look like `ul. Marszałkowska 10` (ulica = street) or `Aleja Róż 4` (aleja = avenue). The street word comes first, so they belong in `STREET_PREFIX`:

```kotlin
private const val STREET_PREFIX =
    "calle|c/|c\\.|cl\\.|avenida|..." +
            // ...existing languages...
            "rue|boulevard|bd\\.?|chemin|all[ée]e|impasse|quai|cours|route|passage|" +
            "ul\\.|ulica|al\\.|aleja|plac"
```

Then add tests to `SmartActionsExtractorTest.kt`. Add one that must match, and at least one that must **not**:

```kotlin
@Test
fun polishStreetAddressIsDetected() {
    assertEquals(
        "ul. Marszałkowska 10",
        only("Kurier dostarczy paczkę na ul. Marszałkowska 10, 00-590 Warszawa", SmartActionType.NAVIGATION)?.value
    )
    assertEquals("Aleja Róż 4", only("Spotkajmy się: Aleja Róż 4", SmartActionType.NAVIGATION)?.value)
}

@Test
fun polishFalsePositivesStayQuiet() {
    assertNull(only("Mam 2 bilety na mecz w 2026", SmartActionType.NAVIGATION))
    assertNull(only("Ulica była pusta o 22:30", SmartActionType.NAVIGATION))
}
```

Run the tests from the project root:

```bash
./gradlew :app:testDebugUnitTest --tests "*SmartActionsExtractorTest*"
```

The Polish postal code `00-590` has a dash, which `CITY_TAIL` doesn't recognise yet. The address is still found, just without the city. Supporting that format would be a separate, slightly bigger change to `CITY_TAIL`, and it should come with its own tests.

---

## 4. Regex Tips

The patterns are Kotlin strings, so a few things trip people up:

* **Backslashes are doubled.** The regex `\.` is written `"\\."` in Kotlin and `\d` is written `"\\d"`.
* **Don't use `\b` for non-English words.** `\b` only understands ASCII letters, so `\bcódigo\b` breaks on the accent. Use the lookarounds the file already uses: `(?<![\p{L}\p{N}])` before and `(?![\p{L}\p{N}])` after.
* **Cover accents and variants in one entry.** `c[oó]digo` matches both "codigo" and "código", and `stra(?:ß|ss)e` matches both "Straße" and "Strasse".
* **Keep case-insensitivity scoped.** Address patterns use `(?i:...)` only around the street word, because the city part relies on capital letters to know where the address ends.
* **Short words are risky.** A two- or three-letter keyword can appear inside ordinary sentences. Require a dot (`ul\.`) or prefer the full word, and always add a false-positive test.
* **Order matters.** Codes are extracted first, then tracking numbers, then map links and addresses, then links, and phone numbers last. Text claimed by one action is never reused by another.

---

## 5. Pull Request Checklist

- [ ] The change is in `SmartActionsExtractor.kt` only (plus tests). There are no new dependencies and no Android APIs.
- [ ] Every new keyword has at least one **positive** test with a realistic notification in your language.
- [ ] There is at least one **negative** test showing that ordinary sentences don't trigger it.
- [ ] `./gradlew :app:testDebugUnitTest` passes.
- [ ] The PR description names the language and pastes one or two real notification texts it now handles, with personal data removed.

Not sure which list a word belongs in? Open an issue on [GitHub](https://github.com/D4vidDf/HyperBridge/issues) with a few example notifications (codes and personal details replaced), and we'll point you in the right direction.
