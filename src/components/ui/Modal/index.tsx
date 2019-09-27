import * as React from 'react';

import './style.scss';

export default function Modal(props) {
  const { toggleModal, startGame, displayAlert } = props;
  const [{ width, height }, setBoard] = React.useState({ height: 4, width: 4 });

  function handleChange({ target: { name, value } }) {
    setBoard({
      width,
      height,
      [name]: Number(value),
    });
  }

  function handleSubmit() {
    if (width && height) {
      startGame({ width, height });
      toggleModal();
      displayAlert('Move mario around with the keys below 👇');
    }
  }

  return (
    <div className="modal-wrapper">
      <div className="modal-wrapper__card">
        <div className="modal-wrapper__card-header">
          <h4 className="modal-wrapper__card-header-title">Provide the board dimensions</h4>
          <i className="icon ion-md-close modal-wrapper__card-header-icon" onClick={toggleModal} />
        </div>
        <form className="modal-wrapper__card-form">
          <span>
            Width
            <input
              type="number"
              min="1"
              max="10"
              value={width}
              className="modal-wrapper__card-form-input"
              name="width"
              tabIndex={0}
              onChange={handleChange}
            />
          </span>
          <span>
            Length
            <input
              type="number"
              min="1"
              max="10"
              value={height}
              className="modal-wrapper__card-form-input"
              name="height"
              tabIndex={1}
              onChange={handleChange}
            />
          </span>
        </form>
        <button
          tabIndex={2}
          type="submit"
          className="modal-wrapper__card-button"
          onClick={handleSubmit}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
