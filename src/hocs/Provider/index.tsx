import * as React from 'react';

import ModalProvider, { ModalContext } from './Modal';
import GameProvider, { GameContext } from './Game';
import AlertProvider, { AlertContext } from './Alert';

export function withContext(ChildComponent) {
  return function (props) {
    return (
      <ModalContext.Consumer>
        {modal => (
          <GameContext.Consumer>
            {game => (
              <AlertContext.Consumer>
                {alert => (
                  <ChildComponent {...props} context={{ modal, game, alert }} />
                )}
              </AlertContext.Consumer>
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
        <AlertProvider>
          {children}
        </AlertProvider>
      </GameProvider>
    </ModalProvider>
  );
}
