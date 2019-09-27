import * as React from 'react';

import './style.scss';
import { AlertContext } from 'hocs/Provider/Alert';

export default function Alert() {
  return (
    <AlertContext.Consumer>
      {({ message, isAlertOpen, hideAlert }) => {
        return isAlertOpen && (
          <div className="alert">
            <p className="alert__message">{message}</p>
            <i className="icon ion-md-close-circle-outline alert__icon" onClick={hideAlert} />
          </div>
        )
      }}
    </AlertContext.Consumer>
  )
}
