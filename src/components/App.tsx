import * as React from 'react';

import NavBar from 'components/ui/NavBar';
import Board from 'components/Board';
import ErrorBoundary from 'hocs/ErrorBoundary';
import Provider from 'hocs/Provider';
import '../styles/_global.scss';

export default function App() {
  return (
    <ErrorBoundary>
      <Provider>
        <NavBar />
        <Board />
      </Provider>
    </ErrorBoundary>
  );
}
