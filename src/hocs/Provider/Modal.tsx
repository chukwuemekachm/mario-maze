import * as React from 'react'

const { createContext, useState } = React;

export const ModalContext = createContext({
  isModalOpen: false,
});

export default function ModalProvider({ children }) {
  const [isModalOpen, setModalState] = useState(false);

  function sendContext() {
    return {
      isModalOpen,
      toggleModal: function () {
        return setModalState(!isModalOpen);
      }
    };
  }

  return (
    <ModalContext.Provider value={sendContext()}>
      {children}
    </ModalContext.Provider>
  );
}
