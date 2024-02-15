const listImages = document.querySelectorAll(".deskr-img-list");
function moveImg(listImages) {
  let marginStart = 0;
  let isFirstImage = true;
  listImages.forEach((element) => {
    if (!isFirstImage) {
      element.style.marginLeft = `${marginStart}px`;
      element.style.marginTop = `${marginStart}px`;
    } else {
      isFirstImage = false;
    }
    marginStart += 28;
  });
}
moveImg(listImages);
let gallery = document.querySelector(".gallery");
let images = document.querySelectorAll(".deskr-img");
function showImages(images) {
  for (let i = 0; i < images.length; i++) {
    return images[i];
  }
  gallery.appendChild(images);
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 150,
  captions: true,
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  overlay: true,
  overlayOpacity: 0,
  scaleImageToRatio: true,
  widthRatio: 1,
  heightRatio: 0.9,
});
