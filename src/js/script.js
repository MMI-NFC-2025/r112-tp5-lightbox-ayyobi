// *** LIGHTBOX ***
// Récupération du <dialog> et de l'image à l'intérieur
const lightbox = document.querySelector("#lightbox");
const lightboxImg = lightbox.querySelector("img");

// Récupération de toutes les miniatures
const thumbnails = document.querySelectorAll("ul img");

// Pour chaque miniature, on ajoute un événement de clic
thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    // On lit l'URL de l'image en grand depuis data-full-img
    const fullImgUrl = thumb.dataset.fullImg;

    // On met à jour l'image du dialogue
    lightboxImg.src = fullImgUrl;
    lightboxImg.alt = thumb.alt || "";

    // On ouvre le dialogue en mode modal
    lightbox.showModal();
  });
});

// Fermer la lightbox en cliquant dessus
lightbox.addEventListener("click", () => {
  lightbox.close();
});
