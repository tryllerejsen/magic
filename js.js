let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".carousel-item");
  const totalSlides = slides.length;
  const visibleSlides = window.innerWidth < 750 ? 2 : 3; // Viser 2 bilder på mobil, 3 på desktop

  currentIndex += direction;

  // Sikrer at currentIndex ikke går utenfor grensene
  if (currentIndex > totalSlides - visibleSlides) {
    currentIndex = 0; // Går tilbake til start om man er på slutten
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - visibleSlides; // Går til slutten om man går forbi starten
  }

  // Kalkulerer hvor langt vi skal flytte karusellen
  const newTranslateX = -currentIndex * (100 / visibleSlides);
  document.querySelector(".carousel-slide").style.transform = `translateX(${newTranslateX}%)`;
}

document.addEventListener("DOMContentLoaded", function () {
  // Tilføj funktionen til knapperne
  document.querySelector(".carousel-prev").onclick = () => moveSlide(-1);
  document.querySelector(".carousel-next").onclick = () => moveSlide(1);
});
