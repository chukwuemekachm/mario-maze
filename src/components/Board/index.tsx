import * as React from 'react';

import './style.scss';
import Row from 'components/ui/Row';
import Control from 'components/ui/Control';

function Board(props) {
  const height = 10;
  const width = 10;
  const rows = [];

  for (let index = 0; index < height; index++) {
    rows.push(<Row key={index} index={index} length={width} />)
  }

  return (
    <div className="game">
      <div className="game__board">{rows}</div>
      <Control />
    </div>
  );
}

export default Board;
