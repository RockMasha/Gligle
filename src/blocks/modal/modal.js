let time;
let modal = document.querySelector(".modal-wrapper");
let modalBtn = document.querySelector(".modal__btn");
let modalTimeout;

function resetTimer() {
  clearTimeout(time);
  time = setTimeout(showModal, 60000);
}

function showModal() {
  modal.setAttribute("block", "");
  document.body.setAttribute("lock", "");
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

window.onload = resetTimer;
document.onmousemove = resetTimer;
document.onkeypress = resetTimer;
document.onscroll = resetTimer;
document.onclick = resetTimer;

modalBtn.onclick = function () {
  closeModal();
  resetTimer();
};
