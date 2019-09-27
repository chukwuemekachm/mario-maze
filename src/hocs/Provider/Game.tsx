import * as React from 'react'
import { generateBoard, placePlayer, updateCell } from 'utils';

export type Board = Record<string, Cell>;

export interface Cell {
  wIndex: number,
  hIndex: number,
  sprite: boolean,
  player: boolean,
}

const { createContext, useState } = React;

const initialState = {
  height: 0,
  width: 0,
  isActive: false,
  board: {},
  player: { hIndex: 0, wIndex: 0 },
};

export const GameContext = createContext(initialState);

export default function GameProvider({ children }) {
  const [game, setGame] = useState(initialState);

  function startGame({ width, height }) {
    const gameBoard = generateBoard(height, width);
    const { player, board } = placePlayer(gameBoard);

    setGame({ width, height, isActive: true, board, player });
  }

  function movePlayer(position) {
    const { height, width } = game;
    let { player, player: { hIndex, wIndex }, board } = game;

    switch (position) {
      case 'UP':
        if (hIndex > 0) {
          player = {
            ...player,
            hIndex: hIndex - 1,
          };
          board = updateCell(board, player, { hIndex, wIndex });
        }
        break;
      case 'DOWN':
        if (hIndex < height - 1) {
          player = {
            ...player,
            hIndex: hIndex + 1,
          };
          board = updateCell(board, player, { hIndex, wIndex });
        }
        break;
      case 'LEFT':
        if (wIndex > 0) {
          player = {
            ...player,
            wIndex: wIndex - 1,
          };
          board = updateCell(board, player, { hIndex, wIndex });
        }
        break;
      case 'RIGHT':
        if (wIndex < width - 1) {
          player = {
            ...player,
            wIndex: wIndex + 1,
          };
          board = updateCell(board, player, { hIndex, wIndex });
        }
        break;

      default:
        break;
    }

    setGame({ width, height, isActive: true, board, player });
  }

  function sendContext() {
    return {
      ...game,
      startGame,
      movePlayer,
    };
  }

  return (
    <GameContext.Provider value={sendContext()}>
      {children}
    </GameContext.Provider>
  );
}
