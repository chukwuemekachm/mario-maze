import * as React from 'react';

import ModalProvider, { ModalContext } from './Modal';
import GameProvider, { GameContext } from './Game';

export function withContext(ChildComponent) {
  return function (props) {
    return (
      <ModalContext.Consumer>
        {modal => (
          <GameContext.Consumer>
            {game => (
              <ChildComponent {...props} context={{ modal, game }} />
            )}
          </GameContext.Consumer>
        )}
      </ModalContext.Consumer>
    );
  }
}

export default function Provider({ children }) {
  return (
    <ModalProvider>
      <GameProvider>
        {children}
      </GameProvider>
    </ModalProvider>
  );
}
