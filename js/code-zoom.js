document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("code-zoom-overlay");
    const content = document.getElementById("code-zoom-content");
    const closeBtn = document.getElementById("code-zoom-close");

    if (!overlay || !content || !closeBtn) return;

    const zoomableCards = document.querySelectorAll(".card-zoomable");

    zoomableCards.forEach(card => {
        card.addEventListener("click", () => {
            const source = card.querySelector("pre, .code-block, .diagram-card, .diagram-svg-wrapper");
            if (!source) return;

            content.innerHTML = "";
            content.appendChild(source.cloneNode(true));
            overlay.classList.add("is-open");
            overlay.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        });
    });

    const closeOverlay = () => {
        overlay.classList.remove("is-open");
        overlay.setAttribute("aria-hidden", "true");
        content.innerHTML = "";
        document.body.style.overflow = "";
    };

    closeBtn.addEventListener("click", closeOverlay);
    overlay.querySelector(".code-zoom-backdrop").addEventListener("click", closeOverlay);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && overlay.classList.contains("is-open")) {
            closeOverlay();
        }
    });
});