const featuresList = document.querySelectorAll(".features-goals-list-item");
const featuresText = document.querySelectorAll(".features-overlay-text");

featuresList.forEach((elem) => {
  elem.classList.add("increase");
  elem.addEventListener("click", function () {
    featuresText.forEach((elem) => {
      elem.innerHTML = `You have 30 minutes to find a relic, signal for extraction, and grab
one of three spots on the rescue chopper.`;
    });
  });
});
