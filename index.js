const openBtn = document.querySelector("button");
const closeBtn = document.querySelector("#close");
const modal = document.querySelector(".modal");

function openModal() {
  modal.style.display = "grid";
}

function closeModal() {
  modal.classList.add("close-modal");
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("close-modal");
  }, 1000);
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    closeModal();
  }
});
