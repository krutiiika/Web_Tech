const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

/* Fade-in after load (staggered effect) */
images.forEach((img, index) => {
  setTimeout(() => {
    img.classList.add("show");
  }, index * 150);
});

/* Lightbox click */
images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

/* Close lightbox */
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
