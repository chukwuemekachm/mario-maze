import * as React from 'react';

import './style.scss';

interface CellProps {
  wIndex: number;
  hIndex: number;
}

export default function Cell({ wIndex, hIndex }: CellProps) {
  return (
    <div className="cell"></div>
  );
}
