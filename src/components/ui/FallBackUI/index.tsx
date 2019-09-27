import * as React from 'react';

import './style.scss';

export default function FallBackUI() {
  return (
    <div className="fallback-ui">
      <div className="fallback-ui__wrapper">
        <i className="icon ion-ios-information-circle-outline fallback-ui__wrapper-icon" />
        <h3 className="fallback-ui__wrapper-title">Oops! An error just occurred please reload the page and try again!</h3>
      </div>
    </div>
  );
}
