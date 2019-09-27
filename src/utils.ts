import { Board } from 'hocs/Provider/Game';

export function placePlayer(board: Board) {
  const { hIndex, wIndex, } = Object.values(board).find(cell => !cell.sprite);
  return {
    board: {
      ...board,
      [`${hIndex}-${wIndex}`]: { hIndex, wIndex, sprite: false, player: true }
    },
    player: {
      hIndex,
      wIndex,
    },
  };
}

function getRandomInt(height: number, width: number) {
  const max = Math.round((height + width) / 2);
  return Math.floor(Math.random() * Math.floor(max));
}

export function generateBoard(height: number, width: number): Board {
  const board = {};
  let randomInt: number;

  for (let hIndex = 0; hIndex < height; hIndex++) {
    randomInt = getRandomInt(height, width);

    for (let wIndex = 0; wIndex < width; wIndex++) {
      board[`${hIndex}-${wIndex}`] = { hIndex, wIndex, sprite: wIndex === randomInt, player: false };
    }
  }
  return board;
}

export function updateCell(board: Board, { wIndex, hIndex }, prevPlayer): Board {
  board[`${hIndex}-${wIndex}`] = { ...board[`${hIndex}-${wIndex}`], player: true, sprite: false };
  board[`${prevPlayer.hIndex}-${prevPlayer.wIndex}`] = { ...board[`${prevPlayer.hIndex}-${prevPlayer.wIndex}`], player: false, sprite: false };
  return board;
}

export function isGameActive(board: Board): boolean {
  return !!Object.values(board).find(cell => cell.sprite);
}
