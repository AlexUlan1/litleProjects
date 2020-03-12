const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seats:not(.occupied)");
const count = document.querySelector("#count");
const price = document.querySelector("#price");
const movieSelect = document.querySelector("#movie");
let ticketPrice = +movieSelect.value;

function updateSelectCount() {
  const selectedSeat = container.querySelectorAll(".select");
  const selectedSeatCount = selectedSeat.length;

  count.innerText = selectedSeatCount;
  price.innerText = selectedSeatCount * ticketPrice;
}

movieSelect.addEventListener("change", e => {
  ticketPrice = e.target.value;
  updateSelectCount();
});

container.addEventListener("click", e => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("select");
    updateSelectCount();
  }
});
