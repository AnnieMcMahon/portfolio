const cards = document.querySelectorAll(".card");

function flipcard() {
    this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipcard));