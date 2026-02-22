const introVideo = document.getElementById("introVideo");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", async () => {
  try {
    introVideo.currentTime = 0;
    introVideo.volume = 1;

    await introVideo.play();

    introVideo.onended = () => {
      window.location.href = "home.html";
    };

    if (introVideo.duration && introVideo.duration < 1) {
      setTimeout(() => {
        window.location.href = "home.html";
      }, 4000);
    }
  } catch (error) {
    window.location.href = "home.html";
  }
});
