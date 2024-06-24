import { animateValue } from "./js/animateValue";
import { isInWindow } from "./js/isInWindow";

document.addEventListener("scroll", activatingNumb);

function activatingNumb() {
  if (isInWindow()) {
    const numbElements = document.querySelectorAll(
      ".reviews-achievement__numb"
    );

    numbElements.forEach((elem) => {
      const maxNumb = elem.dataset.value;
      animateValue(elem, maxNumb, 1500);
    });

    document.removeEventListener("scroll", activatingNumb);
  }
}
