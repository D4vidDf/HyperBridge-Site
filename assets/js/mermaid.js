function css(name) {
  var val = getComputedStyle(document.documentElement).getPropertyValue(name);
  if (!val) return "";
  val = val.trim();
  if (val.startsWith("#") || val.startsWith("rgb")) return val;
  return "rgb(" + val + ")";
}

function initMermaidLight() {
  if (typeof mermaid === "undefined") return;
  mermaid.initialize({
    startOnLoad: false,
    theme: "base",
    themeVariables: {
      background: css("--color-neutral") || "#ffffff",
      primaryColor: css("--color-primary-100") || "#c3efbe",
      primaryTextColor: css("--color-neutral-900") || "#1c1917",
      primaryBorderColor: css("--color-primary-500") || "#3d9735",
      secondaryColor: css("--color-secondary-100") || "#dcfce7",
      secondaryTextColor: css("--color-neutral-900") || "#1c1917",
      secondaryBorderColor: css("--color-secondary-500") || "#22c55e",
      tertiaryColor: css("--color-neutral-100") || "#f5f5f4",
      tertiaryTextColor: css("--color-neutral-800") || "#292524",
      tertiaryBorderColor: css("--color-neutral-300") || "#d6d3d1",
      lineColor: css("--color-neutral-600") || "#57534e",
      textColor: css("--color-neutral-900") || "#1c1917",
      fontFamily:
        "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,noto sans,sans-serif",
      fontSize: "15px",
    },
  });
}

function initMermaidDark() {
  if (typeof mermaid === "undefined") return;
  mermaid.initialize({
    startOnLoad: false,
    theme: "dark",
    themeVariables: {
      background: css("--color-neutral-900") || "#18181b",
      primaryColor: css("--color-primary-800") || "#213d21",
      primaryTextColor: css("--color-primary-100") || "#c3efbe",
      primaryBorderColor: css("--color-primary-400") || "#85b84c",
      secondaryColor: css("--color-secondary-900") || "#14532d",
      secondaryTextColor: css("--color-secondary-100") || "#dcfce7",
      secondaryBorderColor: css("--color-secondary-400") || "#4ade80",
      tertiaryColor: css("--color-neutral-800") || "#27272a",
      tertiaryTextColor: css("--color-neutral-200") || "#e4e4e7",
      tertiaryBorderColor: css("--color-neutral-600") || "#52525b",
      lineColor: css("--color-neutral-400") || "#a1a1aa",
      textColor: css("--color-neutral-100") || "#f4f4f5",
      fontFamily:
        "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,noto sans,sans-serif",
      fontSize: "15px",
    },
  });
}

function renderMermaid() {
  if (typeof mermaid === "undefined") return;
  var isDark = document.documentElement.classList.contains("dark");
  var mermaids = document.querySelectorAll("pre.mermaid, .language-mermaid");
  if (!mermaids || mermaids.length === 0) return;

  mermaids.forEach(function (e) {
    var container = e;
    if (e.tagName.toLowerCase() === "code" && e.parentElement && e.parentElement.tagName.toLowerCase() === "pre") {
      container = e.parentElement;
    }
    container.classList.add("not-prose", "mermaid");
    if (container.getAttribute("data-processed")) {
      container.removeAttribute("data-processed");
      var originalGraph = container.getAttribute("data-graph");
      if (originalGraph) {
        container.innerHTML = originalGraph;
      }
    } else {
      container.setAttribute("data-graph", container.textContent);
    }
  });

  if (isDark) {
    initMermaidDark();
  } else {
    initMermaidLight();
  }

  try {
    mermaid.run({
      querySelector: "pre.mermaid",
    });
  } catch (err) {
    console.error("Failed to render mermaid diagrams", err);
  }
}

// Auto-run on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderMermaid);
} else {
  renderMermaid();
}

// Re-render when theme / dark mode changes
window.addEventListener("appearance-changed", renderMermaid);
try {
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.attributeName === "class") {
        renderMermaid();
      }
    });
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
} catch (_) {}
