export function isInWindow() {
  const listOfNumbs = document.querySelector(".reviews-achievement");
  const locationNumb = listOfNumbs.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  return locationNumb.top <= windowHeight && locationNumb.bottom >= 0;
}
