class Game {
  constructor(numberOne, numberTwo) {
    this.players = [numberOne, numberTwo];
  }
  turn = 0; // Whose turn us is it !? 0 = Player 1, 1 = Player 2
  winner = null;
  annocment = "";
  board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  resetGame() {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.turn = 0;
    this.winner = null;
    this.annocment = "";
  }
  makeMove(position) {
    if (this.winner === null) {
      if (
        this.board[position[0]][position[1]] === null &&
        position[0] >= 0 &&
        position[0] <= 3 &&
        position[1] >= 0 &&
        position[1] <= 3
      ) {
        if (this.turn === 0) {
          this.board[position[0]][position[1]] = "X";
          this.checkForWin();
          if (!this.winner) {
            this.turn = 1;
          }
        } else {
          this.board[position[0]][position[1]] = "O";
          this.checkForWin();
          if (!this.winner) {
            this.turn = 0;
          }
        }
        this.checkForWin();
        this.annocment = "";
      } else {
        console.error("Place is taken");
        this.annocment = "Box is occupied";
      }
      if (
        this.board[0][0] &&
        this.board[0][1] &&
        this.board[0][2] &&
        this.board[1][0] &&
        this.board[1][1] &&
        this.board[1][2] &&
        this.board[2][0] &&
        this.board[2][1] &&
        this.board[2][2]
      ) {
        this.annocment = "No more moves. Please reset the game!";
      }
    } else {
      this.annocment = "Please reset the game";
    }
  }
  checkForWin() {
    if (
      this.board[0][0] !== null &&
      this.board[0][0] === this.board[0][1] &&
      this.board[0][0] === this.board[0][2]
    ) {
      /*    X X X
              n n n
              n n n
          */
      this.winner = this.players[this.turn];
      this.annocment = "Winner announced";
    } else if (
      this.board[1][0] !== null &&
      this.board[1][0] === this.board[1][1] &&
      this.board[1][1] === this.board[1][2]
    ) {
      /*    n n n
                X X X
                n n n
          */
      this.winner = this.players[this.turn];
      this.annocment = "Winner announced";
    } else if (
      this.board[2][0] !== null &&
      this.board[2][0] === this.board[2][1] &&
      this.board[2][0] === this.board[2][2]
    ) {
      this.winner = this.players[this.turn];
      this.annocment = "Winner announced";
      /*    n n n
                n n n
                X X X
          */
    } else if (
      this.board[0][0] !== null &&
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2]
    ) {
      this.winner = this.players[this.turn];
      this.annocment = "Winner announced";
      /*      X n n
                  n X n
                  n n X
          */
    } else if (
      this.board[0][2] !== null &&
      this.board[0][2] === this.board[1][1] &&
      this.board[1][1] === this.board[2][0]
    ) {
      this.winner = this.players[this.turn];
      this.annocment = "Winner announced";
      /*    n n X 
                n X n
                X n n
            */
    } else if (
      this.board[0][0] !== null &&
      this.board[0][0] === this.board[1][0] &&
      this.board[1][0] === this.board[2][0]
    ) {
      this.winner = this.players[this.turn];
      this.annocment = "Winner announced";
      /*    X n n 
                  X n n
                  X n n
          */
    } else if (
      this.board[0][1] !== null &&
      this.board[0][1] === this.board[1][1] &&
      this.board[1][1] === this.board[2][1]
    ) {
      this.winner = this.players[this.turn];
      this.annocment = "Winner announced";
      /*      n X n 
                  n X n
                  n X n
              */
    } else if (
      this.board[0][2] !== null &&
      this.board[0][2] === this.board[1][2] &&
      this.board[1][2] === this.board[2][2]
    ) {
      this.winner = this.players[this.turn];
      this.annocment = "Winner announced";
      /*    n n X 
                n n X
                n n X
          */
    }
  }
}
export default Game;
