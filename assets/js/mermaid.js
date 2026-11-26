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

function setupMermaidZoomControls(preEl) {
  if (preEl.closest(".mermaid-zoom-wrapper")) {
    return;
  }

  var wrapper = document.createElement("div");
  wrapper.className = "mermaid-zoom-wrapper not-prose";

  var toolbar = document.createElement("div");
  toolbar.className = "mermaid-zoom-toolbar";
  toolbar.setAttribute("role", "toolbar");
  toolbar.setAttribute("aria-label", "Flowchart zoom controls");

  toolbar.innerHTML =
    '<span class="mermaid-zoom-hint">Drag to pan • Ctrl + Scroll to zoom</span>' +
    '<div class="mermaid-zoom-btns">' +
    '<button type="button" class="mermaid-zoom-btn" data-action="zoom-out" title="Zoom out" aria-label="Zoom out">' +
    '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>' +
    "</button>" +
    '<button type="button" class="mermaid-zoom-level" data-action="zoom-reset" title="Reset zoom to 100%" aria-label="Reset zoom">100%</button>' +
    '<button type="button" class="mermaid-zoom-btn" data-action="zoom-in" title="Zoom in" aria-label="Zoom in">' +
    '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>' +
    "</button>" +
    '<button type="button" class="mermaid-zoom-btn" data-action="zoom-reset" title="Reset view" aria-label="Reset view">' +
    '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>' +
    "</button>" +
    '<button type="button" class="mermaid-zoom-btn" data-action="zoom-fullscreen" title="Toggle fullscreen" aria-label="Toggle fullscreen">' +
    '<svg class="icon-expand" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>' +
    '<svg class="icon-collapse" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>' +
    "</button>" +
    "</div>";

  var viewport = document.createElement("div");
  viewport.className = "mermaid-zoom-viewport";

  preEl.parentNode.insertBefore(wrapper, preEl);
  viewport.appendChild(preEl);
  wrapper.appendChild(toolbar);
  wrapper.appendChild(viewport);

  var state = {
    scale: 1,
    minScale: 0.5,
    maxScale: 3.0,
    step: 0.25,
    panX: 0,
    panY: 0,
    isDragging: false,
    startX: 0,
    startY: 0,
  };

  var levelBtn = toolbar.querySelector(".mermaid-zoom-level");
  var expandIcon = toolbar.querySelector(".icon-expand");
  var collapseIcon = toolbar.querySelector(".icon-collapse");

  function applyTransform() {
    preEl.style.transform =
      "translate(" + state.panX + "px, " + state.panY + "px) scale(" + state.scale + ")";
    if (levelBtn) {
      levelBtn.textContent = Math.round(state.scale * 100) + "%";
    }
    viewport.classList.toggle("is-zoomed", state.scale !== 1 || state.panX !== 0 || state.panY !== 0);
  }

  function setZoom(newScale) {
    var clamped = Math.max(state.minScale, Math.min(state.maxScale, Math.round(newScale * 100) / 100));
    state.scale = clamped;
    if (clamped === 1) {
      state.panX = 0;
      state.panY = 0;
    }
    applyTransform();
  }

  function resetView() {
    state.scale = 1;
    state.panX = 0;
    state.panY = 0;
    applyTransform();
  }

  function toggleFullscreen(forceState) {
    var isFull =
      typeof forceState === "boolean"
        ? forceState
        : !wrapper.classList.contains("is-fullscreen");
    wrapper.classList.toggle("is-fullscreen", isFull);
    document.body.classList.toggle("mermaid-fullscreen-open", isFull);
    if (expandIcon && collapseIcon) {
      expandIcon.style.display = isFull ? "none" : "";
      collapseIcon.style.display = isFull ? "" : "none";
    }
  }

  toolbar.addEventListener("click", function (ev) {
    var btn = ev.target.closest("[data-action]");
    if (!btn) return;
    var action = btn.getAttribute("data-action");
    if (action === "zoom-in") {
      setZoom(state.scale + state.step);
    } else if (action === "zoom-out") {
      setZoom(state.scale - state.step);
    } else if (action === "zoom-reset") {
      resetView();
    } else if (action === "zoom-fullscreen") {
      toggleFullscreen();
    }
  });

  // Mouse drag to pan
  viewport.addEventListener("mousedown", function (ev) {
    if (ev.button !== 0) return;
    state.isDragging = true;
    state.startX = ev.clientX - state.panX;
    state.startY = ev.clientY - state.panY;
    viewport.classList.add("is-dragging");
    ev.preventDefault();
  });

  window.addEventListener("mousemove", function (ev) {
    if (!state.isDragging) return;
    state.panX = ev.clientX - state.startX;
    state.panY = ev.clientY - state.startY;
    applyTransform();
  });

  window.addEventListener("mouseup", function () {
    if (!state.isDragging) return;
    state.isDragging = false;
    viewport.classList.remove("is-dragging");
  });

  // Touch drag to pan
  viewport.addEventListener(
    "touchstart",
    function (ev) {
      if (ev.touches.length !== 1) return;
      state.isDragging = true;
      state.startX = ev.touches[0].clientX - state.panX;
      state.startY = ev.touches[0].clientY - state.panY;
    },
    { passive: true }
  );

  viewport.addEventListener(
    "touchmove",
    function (ev) {
      if (!state.isDragging || ev.touches.length !== 1) return;
      if (state.scale > 1 || wrapper.classList.contains("is-fullscreen")) {
        state.panX = ev.touches[0].clientX - state.startX;
        state.panY = ev.touches[0].clientY - state.startY;
        applyTransform();
        ev.preventDefault();
      }
    },
    { passive: false }
  );

  viewport.addEventListener("touchend", function () {
    state.isDragging = false;
  });

  // Ctrl + Wheel / Pinch to zoom
  viewport.addEventListener(
    "wheel",
    function (ev) {
      if (!ev.ctrlKey && !ev.metaKey && !wrapper.classList.contains("is-fullscreen")) {
        return;
      }
      ev.preventDefault();
      var delta = ev.deltaY < 0 ? 0.15 : -0.15;
      setZoom(state.scale + delta);
    },
    { passive: false }
  );

  // Double-click to zoom in or reset
  viewport.addEventListener("dblclick", function () {
    if (state.scale < 1.5) {
      setZoom(state.scale + 0.5);
    } else {
      resetView();
    }
  });

  // Escape exits fullscreen
  window.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && wrapper.classList.contains("is-fullscreen")) {
      toggleFullscreen(false);
    }
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
    setupMermaidZoomControls(container);
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
