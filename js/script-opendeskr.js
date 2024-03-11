const featuresList = document.querySelectorAll(".features-goals-list-item");

featuresList.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    let featuresMission = `<p class="increase">You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.</p>`;
    if (event.target.querySelector(".increase")) {
      event.target.querySelector(".increase").remove();
    } else {
      event.target.insertAdjacentHTML("beforeend", featuresMission);
    }
  });
});
