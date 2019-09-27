import * as React from 'react';

const { createContext, useState } = React;

const initialState = {
  isAlertOpen: false,
  message: '',
  hideAlert: null,
  displayAlert: null,
};

export const AlertContext = createContext(initialState);

export default function AlertProvider({ children }) {
  const [alert, setAlert] = useState(initialState);

  function hideAlert() {
    return setAlert({ ...alert, isAlertOpen: false, message: '' });
  }

  function displayAlert(message, toggle = true) {
    setAlert({ ...alert, isAlertOpen: true, message });
    if (toggle) setTimeout(hideAlert, 5000);
  }

  function sendContext() {
    return {
      ...alert,
      hideAlert,
      displayAlert,
    };
  }

  return (
    <AlertContext.Provider value={sendContext()}>
      {children}
    </AlertContext.Provider>
  );
}
