const featuresList = document.querySelectorAll(".features-goals-list-item");

let text = `<div> <p>You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.</p></div> `;
function showText(text) {
  featuresList.forEach(function (item) {
    item.innerHTML += text;
  });
}

featuresList.addEventListener("click", showText(text));
