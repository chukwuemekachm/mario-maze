import * as React from 'react';

import './style.scss';

export default function Control(props) {
  const { toggleModal, isActive, movePlayer } = props;

  function playGame() {
    return !isActive && toggleModal()
  }

  return (
    <div className="control">
      <div className="control__row">
        <span className="control__row-button" onClick={() => movePlayer('UP')}>
          <i className="icon ion-md-arrow-dropup" />
        </span>
      </div>
      <div className="control__row">
        <span className="control__row-button" onClick={() => movePlayer('LEFT')}>
          <i className="icon ion-md-arrow-dropleft" />
        </span>
        <span className={`control__row-button ${isActive ? '__in-active': ''}`} onClick={playGame}>
          <i className="icon ion-md-play-circle" />
        </span>
        <span className="control__row-button" onClick={() => movePlayer('RIGHT')}>
          <i className="icon ion-md-arrow-dropright" />
        </span>
      </div>
      <div className="control__row">
        <span className="control__row-button" onClick={() => movePlayer('DOWN')}>
          <i className="icon ion-md-arrow-dropdown" />
        </span>
      </div>
    </div>
  );
}
