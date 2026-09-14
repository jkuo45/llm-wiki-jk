/* Shared gallery lightbox — extracted from the copy-pasted inline IIFE
   previously duplicated in senescence / sirtuins articles-and-figures
   pages (en-US + zh-TW). Load once per page:
     <script src="../themes/shared/lightbox.js"></script>
   Images keep calling openLightbox(src, alt) inline; no page changes needed. */
(function () {
  "use strict";
  window.openLightbox = function (src, alt) {
    var lb = document.getElementById("galleryLightbox");
    var img = document.getElementById("lightboxImg");
    var cap = document.getElementById("lightboxCap");
    if (!lb || !img) return;
    img.src = src;
    img.alt = alt || "";
    if (cap) cap.textContent = alt || "";
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  };
  window.closeLightbox = function () {
    var lb = document.getElementById("galleryLightbox");
    if (!lb) return;
    lb.classList.remove("open");
    document.body.style.overflow = "";
  };
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") window.closeLightbox();
  });
})();
