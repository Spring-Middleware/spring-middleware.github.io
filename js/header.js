document.addEventListener("DOMContentLoaded", async () => {
  const mountPoint = document.getElementById("site-header");
  if (!mountPoint) return;

  try {
    const response = await fetch("partials/headers.html");
    const html = await response.text();
    mountPoint.innerHTML = html;

    const current = document.body.dataset.page;
    if (current) {
      const activeLink = mountPoint.querySelector(`[data-nav="${current}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  } catch (error) {
    console.error("Failed to load header:", error);
  }
});