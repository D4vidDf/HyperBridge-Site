(function () {
  "use strict";

  function ensureLightboxModal() {
    var existing = document.getElementById("sc-lightbox");
    if (existing) return existing;

    var modal = document.createElement("div");
    modal.id = "sc-lightbox";
    modal.className = "sc-lightbox sc-hidden";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Image Preview");
    modal.innerHTML =
      '<div class="sc-lightbox-backdrop" data-lightbox-close></div>' +
      '<div class="sc-lightbox-content">' +
      '<div class="sc-lightbox-topbar">' +
      '<span id="sc-lightbox-caption" class="sc-lightbox-caption">Image Preview</span>' +
      '<button type="button" class="sc-lightbox-close-btn" data-lightbox-close aria-label="Close preview">&times; Close</button>' +
      "</div>" +
      '<div class="sc-lightbox-img-wrap">' +
      '<img id="sc-lightbox-img" src="" alt="Enlarged preview" class="sc-lightbox-img nozoom" />' +
      "</div>" +
      "</div>";

    document.body.appendChild(modal);
    return modal;
  }

  function initDocImageLightbox() {
    var images = document.querySelectorAll(
      "img:not(.nozoom):not(.sc-page-wrap img):not(.logo):not(.sc-lightbox-img)"
    );
    if (!images || images.length === 0) return;

    var lightbox = ensureLightboxModal();
    var lightboxImg = document.getElementById("sc-lightbox-img");
    var lightboxCaption = document.getElementById("sc-lightbox-caption");
    if (!lightbox || !lightboxImg) return;

    function setHidden(el, hide) {
      if (!el) return;
      el.classList.toggle("sc-hidden", hide);
      el.classList.toggle("hidden", hide);
    }

    function openLightbox(src, captionText) {
      if (!src) return;
      lightboxImg.src = src;
      if (lightboxCaption) {
        lightboxCaption.textContent = captionText || "Image Preview";
      }
      setHidden(lightbox, false);
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      setHidden(lightbox, true);
      lightboxImg.src = "";
      document.body.style.overflow = "";
    }

    if (lightbox.dataset.docLightboxBound !== "true") {
      lightbox.dataset.docLightboxBound = "true";
      lightbox.querySelectorAll("[data-lightbox-close]").forEach(function (btn) {
        btn.addEventListener("click", closeLightbox);
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !lightbox.classList.contains("sc-hidden")) {
          closeLightbox();
        }
      });
    }

    images.forEach(function (img) {
      if (img.dataset.scZoomBound === "true") return;
      img.dataset.scZoomBound = "true";
      img.classList.add("sc-zoomable-img");

      img.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        var src = img.getAttribute("data-zoom-src") || img.currentSrc || img.src;
        var figure = img.closest("figure");
        var figcaption = figure ? figure.querySelector("figcaption") : null;
        var caption =
          (figcaption && figcaption.textContent.trim()) ||
          img.getAttribute("title") ||
          img.getAttribute("alt") ||
          document.title ||
          "Image Preview";

        openLightbox(src, caption);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDocImageLightbox);
  } else {
    initDocImageLightbox();
  }
})();
