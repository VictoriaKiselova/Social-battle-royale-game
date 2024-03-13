const mobileMenuButton = document.querySelector(".icon-menu");

mobileMenuButton.addEventListener("click", function (event) {
  event.preventDefault();
  const instance = basicLightbox.create(
    `
      <div class="modal">
        <div class="modal-menu">
          <div class="modal-mob">
            <button class="modal-button-close" type="button">
              <svg class="modal-button-close-icon" width="15" height="15" aria-label="modal-close-button">
                <use href="./images/icon.svg#icon-cancel"></use>
              </svg>
            </button>
          </div>
        <a class="page-footer-logo-link" href="index.html"><img class="page-footer-logo mob-logo" src="./images/logo.jpg"
                        alt="logo" width="50" height="50"></a>
          <div class="modal-mob-list">
            <ul class="modal-mob-list-menu list">
              <li class="modal-mob-list-menu-item">
                <a class="modal-mob-list-menu-link link" href="#about">About</a>
              </li>
              <li class="modal-mob-list-menu-item">
                <a class="modal-mob-list-menu-link link" href="#features">Game features</a>
              </li>
              <li class="modal-mob-list-menu-item">
                <a class="modal-mob-list-menu-link link" href="#requirements">System requirements</a>
              </li>
              <li class="modal-mob-list-menu-item">
                <a class="modal-mob-list-menu-link link" href="#reviews">Quotes</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `,
    {
      onShow: (instance) => {
        instance.element().querySelector(".modal-button-close").onclick =
          instance.close;

        instance
          .element()
          .querySelectorAll(".modal-mob-list-menu-item")
          .forEach((elem) => {
            elem.onclick = instance.close;
            console.log(elem);
          });
      },
    }
  );
  instance.show();
});
