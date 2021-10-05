import React from 'react';

import TokenIcon from '../index';

import { images } from './images';

import './style.scss';

interface MultipleIconsProps {
  width: number;
  height: number;
  marketSymbol: string;
  symbols: string[];
}

export default function MultipleIcons({
  width,
  height,
  marketSymbol,
  symbols,
}: MultipleIconsProps) {
  return (
    <div className="MultipleIcons">
      <div className="MultipleIcons__symbols">
        {symbols.slice(1, symbols.length).map((symbol, index) => (
          <TokenIcon
            key={index}
            tokenSymbol={symbol}
            height={height}
            width={width}
            style={index > 0 ? { marginLeft: -(width / 2) } : undefined}
          />
        ))}
      </div>

      <img
        className="MultipleIcons__marketSymbol"
        src={images[marketSymbol]}
        alt={marketSymbol}
        width={40 * (width / 100)}
        height={40 * (height / 100)}
        style={{ marginLeft: -((40 * (width / 100)) / 2) }}
      />
    </div>
  );
}
