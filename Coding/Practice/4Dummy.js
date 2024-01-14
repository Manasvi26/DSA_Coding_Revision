const button = document.querySelector(".button");
const modal = document.querySelector(".modal");
const container = document.querySelector(".container");

button.addEventListener("click", (e) => {
  toggleDisplay(true);
});

function toggleDisplay(value) {
  modal.style.display = value ? "flex" : "none";
}

container.addEventListener("click", (e) => {
  if (e.target.className === "container") {
    toggleDisplay(false);
  }
});
