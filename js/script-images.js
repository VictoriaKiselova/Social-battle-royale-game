let gallery = document.querySelector(".gallery");
let images = document.querySelectorAll(".deskr-img");

function showImages(images) {
  for (let i = 0; i < images.length; i++) {
    return images[i];
  }
}
gallery.innerHTML = showImages(images);

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 150,
  captions: true,
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  overlay: true,
  overlayOpacity: 0,
  scaleImageToRatio: true,
  widthRatio: 0.9,
  heightRatio: 0.9,
});
const listImages = document.querySelectorAll(".deskr-img-list");
function moveImg(listImages) {
  let marginStart = 0;
  const move = listImages.forEach((element) => {
    element.style.marginLeft = "0px";
    marginStart += 28;
    element.style.marginLeft = `${marginStart}px`;
    element.style.marginTop = `${marginStart}px`;
  });
}
moveImg(listImages);
