const introVideo = document.getElementById("introVideo");
const enterBtn = document.getElementById("enterBtn");

function goToHome() {
  window.location.href = "home.html";
}

enterBtn.addEventListener("click", async () => {
  try {
    introVideo.currentTime = 0;
    introVideo.volume = 1;

    await introVideo.play();

    // FIX: usamos el evento "ended" para navegar al terminar el video
    introVideo.addEventListener("ended", goToHome, { once: true });

    // FIX: esperamos a que los metadatos carguen antes de evaluar duration,
    // para evitar falsos positivos cuando duration es NaN o 0
    const checkDuration = () => {
      if (introVideo.duration && introVideo.duration < 1) {
        setTimeout(goToHome, 4000);
      }
    };

    if (introVideo.readyState >= 1) {
      checkDuration();
    } else {
      introVideo.addEventListener("loadedmetadata", checkDuration, { once: true });
    }

  } catch (error) {
    // Si el video falla (formato no soportado, archivo no encontrado, etc.)
    goToHome();
  }
});
