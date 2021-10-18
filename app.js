import Game from "./game.js";

const game = new Game("Player 1", "Player 2");

const getAllComponent = () => {
  let boardComp = document.querySelector("#board");
  let playerName = document.querySelector("#player");
  let reset = document.querySelector("#reset");
  let annocment = document.querySelector("#annocment");
  return {
    boardComp,
    playerName,
    annocment,
    reset,
  };
};
const init = () => {
  const { reset, boardComp } = getAllComponent();
  renderBoxes();
  reset.addEventListener("click", () => {
    game.resetGame();
    renderBoxes();
    console.log(game.board);
  });
  boardComp.addEventListener("click", (e) => {
    const box = e.target;
    // caputure element that has position dataset
    if (box.dataset["position"]) {
      const positionBox = box.dataset.position;
      const positionContainer = box.parentElement.dataset.container;
      game.makeMove([positionContainer, positionBox]);
      renderBoxes();
    }
  });
};
const renderBoxes = () => {
  const { boardComp, playerName, annocment } = getAllComponent();
  const boxes = game.board;
  let stringElements = [];
  for (let index = 0; index < boxes.length; index++) {
    const element = boxes[index];
    stringElements.push(`
    <div class="container container-${index}" data-container=${index}>
      ${element
        .map(
          (box, i) =>
            `<div class="box box-${i}" data-position="${i}">${
              box ? box : ""
            }</div>`
        )
        .join("")}
        </div>`);
  }
  boardComp.innerHTML = stringElements.join("");
  if (game.winner) {
    playerName.innerHTML = `Winner is ${game.winner}`;
  } else {
    playerName.innerHTML = `${game.players[game.turn]} turn to play`;
  }
  annocment.innerHTML = game.annocment;
};

init();
