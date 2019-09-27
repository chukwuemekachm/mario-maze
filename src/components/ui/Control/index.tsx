import * as React from 'react';

import './style.scss';

export default function Control(props) {
  const { toggleModal, isActive, movePlayer } = props;

  function playGame() {
    return !isActive && toggleModal();
  }

  function move(position) {
    return isActive && movePlayer(position);
  }

  return (
    <div className="control">
      <div className="control__row">
        <span className={`control__row-button ${!isActive ? '__in-active': ''}`} onClick={() => move('UP')}>
          <i className="icon ion-md-arrow-dropup" />
        </span>
      </div>
      <div className="control__row">
        <span className={`control__row-button ${!isActive ? '__in-active': ''}`} onClick={() => move('LEFT')}>
          <i className="icon ion-md-arrow-dropleft" />
        </span>
        <span className={`control__row-button ${isActive ? '__in-active': ''}`} onClick={playGame}>
          <i className="icon ion-md-play-circle" />
        </span>
        <span className={`control__row-button ${!isActive ? '__in-active': ''}`} onClick={() => move('RIGHT')}>
          <i className="icon ion-md-arrow-dropright" />
        </span>
      </div>
      <div className="control__row">
        <span className={`control__row-button ${!isActive ? '__in-active': ''}`} onClick={() => move('DOWN')}>
          <i className="icon ion-md-arrow-dropdown" />
        </span>
      </div>
    </div>
  );
}
