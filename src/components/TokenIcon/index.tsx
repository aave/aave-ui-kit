import React from 'react';
import classNames from 'classnames';

import { useThemeContext } from '../../libs/theme-provider';
import { Asset, getAssetInfo as getAssetInfoDefault } from '../../helpers/assets-list';
import DoubleIcon from './DoubleIcon';

import './style.scss';

export interface TokenIconProps {
  tokenSymbol: string;
  tokenFullName?: string;
  className?: string;
  height: number;
  width: number;
  color?: string;
  withTokenSymbol?: boolean;
  onWhiteBackground?: boolean;
  getAssetInfo?: (symbol: string) => Asset;
}

export default function TokenIcon({
  tokenSymbol,
  tokenFullName,
  className,
  height,
  width,
  color,
  withTokenSymbol,
  onWhiteBackground,
  getAssetInfo = getAssetInfoDefault,
}: TokenIconProps) {
  const { isCurrentThemeDark } = useThemeContext();
  const asset = getAssetInfo(tokenSymbol);

  const icon = asset.icon || undefined;

  let displayedTokenSymbol = '';
  if (
    !!asset.symbolsArray &&
    asset.symbolFormatted !== 'SUSD' &&
    asset.symbolsArray[0] !== 'UNI' &&
    asset.symbolsArray[0] !== 'BPT' &&
    asset.symbolFormatted !== tokenFullName
  ) {
    displayedTokenSymbol = asset.symbolFormatted || '';
  }

  return (
    <div
      className={classNames('TokenIcon', className, {
        TokenIconWithFullName: tokenFullName,
        TokenIcon__dark: isCurrentThemeDark,
        TokenIcon__onWhiteBackground: onWhiteBackground,
        TokenIcon__withSymbolAndName: withTokenSymbol,
      })}
    >
      {icon && tokenSymbol !== 'USD' && (
        <img src={icon} alt={tokenSymbol} height={height} width={width} />
      )}

      {!!asset.symbolsArray && asset.symbolsArray.length > 2 && (
        <DoubleIcon
          width={width}
          height={height}
          separatorSymbol={asset.symbolsArray[0]}
          firstSymbol={asset.symbolsArray[1]}
          secondSymbol={asset.symbolsArray[2]}
        />
      )}

      {tokenSymbol === 'USD' && <span className="TokenIcon__dollar">$</span>}

      {!icon && tokenSymbol !== 'USD' && !!asset.symbolsArray && asset.symbolsArray.length < 2 && (
        <span className="TokenIcon__symbol">{tokenSymbol}</span>
      )}

      {tokenFullName && (
        <p className="TokenIcon__name">
          <b>{tokenFullName}</b>
          {color && <span className="TokenIcon__color-dot" style={{ backgroundColor: color }} />}
          {withTokenSymbol && displayedTokenSymbol && <span> ({displayedTokenSymbol})</span>}
        </p>
      )}
    </div>
  );
}
