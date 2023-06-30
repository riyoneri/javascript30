const pannels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(evt) {
  if (evt.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

pannels.forEach((panel) => panel.addEventListener("click", toggleOpen));
pannels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
