const cards = document.querySelectorAll(".project-box");

function flipcard() {
    this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipcard));