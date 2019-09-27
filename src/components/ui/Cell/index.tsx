import * as React from 'react';

import './style.scss';
import { GameContext } from 'hocs/Provider/Game';
import Image from 'components/ui/Image';

interface CellProps {
  wIndex: number;
  hIndex: number;
}

export default function Cell({ wIndex, hIndex }: CellProps) {
  return (
    <GameContext.Consumer>
      {({ board }) => {
        const { sprite, player } = board[`${hIndex}-${wIndex}`];
        return (
          <div className="cell">
            {(sprite || player) && <Image type={player ? 'PLAYER' : 'SPRITE'} />}
          </div>
        );
      }}
    </GameContext.Consumer>
  );
}
