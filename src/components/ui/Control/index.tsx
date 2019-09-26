import * as React from 'react';

import './style.scss';

export default function Control(props) {
  return (
    <div className="control">
      <div className="control__row">
        <span className="control__row-button">
          <i className="icon ion-md-arrow-dropup" />
        </span>
      </div>
      <div className="control__row">
        <span className="control__row-button">
          <i className="icon ion-md-arrow-dropleft" />
        </span>
        <span className="control__row-button">
          <i className="icon ion-md-play-circle" />
        </span>
        <span className="control__row-button">
          <i className="icon ion-md-arrow-dropright" />
        </span>
      </div>
      <div className="control__row">
        <span className="control__row-button">
          <i className="icon ion-md-arrow-dropdown" />
        </span>
      </div>
    </div>
  );
}
