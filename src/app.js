/* eslint-disable */
import "bootstrap";
import "./style.css";

let board = [null, null, null, null, null, null, null, null, null];
let currentPlayer = "times";

window.onload = render;
//write your code here
function render() {
  document.querySelector(".board").innerHTML = board
    .map(elm => drawGrid(elm))
    .join("");

  document.querySelectorAll(".grid").forEach((node, index) =>
    node.addEventListener("click", function() {
      play(index);
    })
  );
}

//action function
function play(index) {
  board[index] = currentPlayer;

  if (currentPlayer === "times") {
    currentPlayer = "circle";
  } else {
    currentPlayer = "times";
  }

  render();
}

//rendering function
function drawGrid(symbol = "times") {
  return `<div class="grid">
  <i class="fas fa-${symbol}"></i>
</div>`;
}
