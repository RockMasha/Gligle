let time;
const modal = document.querySelector(".modal-wrapper");
const modalBtn = document.querySelector(".modal__btn");
const loaderNumb = document.querySelector(".modal-loader__numb");
let modalTimeout;

function resetTimer() {
  clearTimeout(time);
  time = setTimeout(showModal, 60000);
}

function showModal() {
  modal.setAttribute("block", "");
  document.body.setAttribute("lock", "");
  countDown();
  modalTimeout = setTimeout(closePage, 10000);
}

function closeModal() {
  modal.removeAttribute("block");
  document.body.removeAttribute("lock");
  clearTimeout(modalTimeout);
}

function closePage() {
  window.close();
}

function countDown() {
  for (let i = 10; i >= 0; i--) {
    setTimeout(() => {
      loaderNumb.textContent = i;
    }, (10 - i) * 1000);
  }
}

window.onload = resetTimer;
document.onmousemove = resetTimer;
document.onkeypress = resetTimer;
document.onscroll = resetTimer;
document.onclick = resetTimer;

modalBtn.onclick = function () {
  closeModal();
  resetTimer();
};
