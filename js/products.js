document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".product-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Obtiene el nombre del producto desde la card padre
      const card = e.target.closest(".product-card");
      const name = card?.querySelector(".product-name")?.textContent || "este producto";

      // FIX: reemplazado alert() por toast premium
      showToast(`${name} — Ficha completa próximamente.`);
    });
  });
});
