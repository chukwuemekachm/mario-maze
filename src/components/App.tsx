import * as React from 'react';

import NavBar from 'components/ui/NavBar';
import Board from 'components/Board';
import ErrorBoundary from 'hocs/ErrorBoundary';
import Provider from 'hocs/Provider';
import '../styles/_global.scss';
import Alert from './ui/Alert';

export default function App() {
  return (
    <ErrorBoundary>
      <Provider>
        <Alert />
        <NavBar />
        <Board />
      </Provider>
    </ErrorBoundary>
  );
}
