document.addEventListener("DOMContentLoaded", () => {

  // ── COUNTDOWN ──────────────────────────────────────
  // Cambia esta fecha por la del Drop 02 real
  const DROP_DATE = new Date("2026-06-01T00:00:00");

  function updateCountdown() {
    const now = new Date();
    const diff = DROP_DATE - now;

    if (diff <= 0) {
      document.getElementById("cd-days").textContent = "00";
      document.getElementById("cd-hours").textContent = "00";
      document.getElementById("cd-minutes").textContent = "00";
      document.getElementById("cd-seconds").textContent = "00";
      return;
    }

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("cd-days").textContent    = String(days).padStart(2, "0");
    document.getElementById("cd-hours").textContent   = String(hours).padStart(2, "0");
    document.getElementById("cd-minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("cd-seconds").textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ── PRÓXIMO DROP BUTTON ────────────────────────────
  const nextDropBtn = document.getElementById("nextDropBtn");
  if (nextDropBtn) {
    nextDropBtn.addEventListener("click", () => {
      document.getElementById("notify-section")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  // ── NOTIFY FORM ────────────────────────────────────
  const notifyForm = document.getElementById("notifyForm");
  if (notifyForm) {
    notifyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = notifyForm.querySelector("input[type='email']");
      const email = input?.value?.trim();

      if (email) {
        // Aquí conectarías con tu backend / Mailchimp / etc.
        showToast("¡Listo! Te avisamos cuando caiga el Drop 02.");
        input.value = "";
      }
    });
  }

});