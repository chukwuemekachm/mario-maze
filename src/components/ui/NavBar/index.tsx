import * as React from 'react';

import './style.scss';

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <i className="icon ion-md-play-circle" />
      <h2 className="nav-bar__title">Mario maze game</h2>
    </nav>
  );
}
