const wrapper = document.querySelector(".loadWrapper");

wrapper.style.height = window.innerHeight + "px";
wrapper.style.wight = window.innerWidth + "px";

setTimeout(loadPage, 5000);

export function loadPage() {
  document.body.removeAttribute("lock");
  const loadEl = document.querySelector(".load");
  const loadWrapperEl = document.querySelector(".loadWrapper");
  loadEl.removeAttribute("load");
  loadWrapperEl.removeAttribute("load");
}
