import React from 'react';
import classNames from 'classnames';

import TokenIcon from '../index';

import { images } from './images';

import './style.scss';

interface DoubleIconProps {
  width: number;
  height: number;
  separatorSymbol: string;
  firstSymbol: string;
  secondSymbol: string;
}

export default function DoubleIcon({
  width,
  height,
  separatorSymbol,
  firstSymbol,
  secondSymbol,
}: DoubleIconProps) {
  return (
    <div
      className={classNames('DoubleIcon', { DoubleIcon__BPT: separatorSymbol === 'BPT' })}
      style={{ width, height }}
    >
      <TokenIcon className="DoubleIcon__icon" tokenSymbol={firstSymbol} height={10} width={10} />
      <img className="DoubleIcon__separator" src={images[separatorSymbol]} alt={separatorSymbol} />
      <TokenIcon className="DoubleIcon__icon" tokenSymbol={secondSymbol} height={10} width={10} />
    </div>
  );
}
