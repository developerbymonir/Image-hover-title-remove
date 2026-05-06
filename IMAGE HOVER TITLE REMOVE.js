// =========================
// IMAGE HOVER TITLE REMOVE
// =========================
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("img[title]").forEach(function (img) {
        img.removeAttribute("title");
    });
});
