const form = document.querySelector(".newsletter-subscribe-form");
let formData = {};

form.addEventListener("input", (event) => {
  (formData.email = event.target.value.trim()),
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});
function getValue(form) {
  const localStorageValue = localStorage.getItem("feedback-form-state");
  if (localStorageValue) {
    const parsedObj = JSON.parse(localStorageValue);
    form.elements["email"].value = parsedObj.email;
  }
}
getValue(form);

const input = document.querySelector("input");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value.trim() !== "") {
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    input.value = "";
  }
});
