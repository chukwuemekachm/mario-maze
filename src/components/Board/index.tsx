import * as React from 'react';

import './style.scss';
import Row from 'components/ui/Row';
import Control from 'components/ui/Control';
import Modal from 'components/ui/Modal';
import { withContext } from 'hocs/Provider';

function Board(props) {
  const {
    context: {
      game: { height, width },
      game,
      modal: { isModalOpen },
      modal,
    },
  } = props;
  const rows = [];

  for (let index = 0; index < height; index++) {
    rows.push(<Row key={index} index={index} length={width} />)
  }

  return (
    <div className="game">
      <div className="game__board">{rows}</div>
      <Control {...modal} {...game} />
      {isModalOpen && <Modal {...modal} {...game} />}
    </div>
  );
}

export default withContext(Board);
