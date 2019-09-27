import * as React from 'react';

import sprite from 'assets/img/sprite.png';
import mario from 'assets/img/mario.png';

type ImageType = 'SPRITE' | 'PLAYER';

interface ImageProps {
  type?: ImageType;
}

export default function Image({ type = 'SPRITE' }: ImageProps) {
  const image = type === 'SPRITE' ? sprite : mario;

  return (<img src={image} />);
}
