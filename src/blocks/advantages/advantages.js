const listOfCards = document.querySelector(".advantages-list");

listOfCards.addEventListener("click", rotateCard);

export function rotateCard(event) {
  const card = event.target.closest(".advantages-list__item");
  if (!card) {
    return;
  }

  const faceOfCard = card.querySelector(".advantages-list-face");
  const backOfCard = card.querySelector(".advantages-list-back");

  faceOfCard.classList.toggle("advantages-list-face_active");
  backOfCard.classList.toggle("advantages-list-back_active");
}