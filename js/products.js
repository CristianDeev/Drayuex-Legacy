document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".product-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Ficha de producto Drayuex Legacy próximamente.");
    });
  });
});
