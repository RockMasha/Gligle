import { animateValue } from "./js/animateValue";
import { isInWindow } from "./js/isInWindow";

document.addEventListener("scroll", activatingNumb);

function activatingNumb() {
  if (!isInWindow()) {
    return;
  }

  const numbElements = document.querySelectorAll(".reviews-achievement__numb");

  numbElements.forEach((elem) => {
    const maxNumb = elem.dataset.value;
    animateValue(elem, maxNumb, 1500);
  });

  document.addEventListener("scroll", WaitOutWindow);
  document.removeEventListener("scroll", activatingNumb);
}


function WaitOutWindow() {
  if(!isInWindow()){
    document.addEventListener("scroll", activatingNumb );
    document.removeEventListener("scroll", WaitOutWindow);
  }
}