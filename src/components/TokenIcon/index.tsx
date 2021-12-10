import React, { CSSProperties } from 'react';
import classNames from 'classnames';

import { useThemeContext } from '../../index';
import { Asset, getAssetInfo as getAssetInfoDefault } from '../../helpers/assets-list';
import MultipleIcons from './MultipleIcons';
import CustomTooltip from '../CustomTooltip';

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
  style?: CSSProperties;
  tooltipId?: string;
  isAtokenIcon?: boolean;
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
  style,
  tooltipId,
  isAtokenIcon,
}: TokenIconProps) {
  const { isCurrentThemeDark } = useThemeContext();
  const asset = getAssetInfo(tokenSymbol);

  const icon = isAtokenIcon ? (asset.aIcon ? asset.aIcon : asset.icon) : asset.icon || undefined;

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
      style={style}
    >
      {icon && tokenSymbol !== 'USD' && (
        <img
          className="TokenIcon__image"
          src={icon}
          alt={tokenSymbol}
          height={height}
          width={width}
        />
      )}

      {!!asset.symbolsArray && asset.symbolsArray.length > 2 && (
        <MultipleIcons
          width={width}
          height={height}
          marketSymbol={asset.symbolsArray[0]}
          symbols={asset.symbolsArray}
        />
      )}

      {tokenSymbol === 'USD' && <span className="TokenIcon__dollar">$</span>}

      {!icon && tokenSymbol !== 'USD' && !!asset.symbolsArray && asset.symbolsArray.length < 2 && (
        <span className="TokenIcon__symbol">{tokenSymbol}</span>
      )}

      {tokenFullName && (
        <p className="TokenIcon__name" data-tip={true} data-for={tooltipId}>
          <b>{tokenFullName}</b>
          {color && <span className="TokenIcon__color-dot" style={{ backgroundColor: color }} />}
          {withTokenSymbol && displayedTokenSymbol && <span> ({displayedTokenSymbol})</span>}
        </p>
      )}

      {!!tooltipId && !!tokenFullName && (
        <CustomTooltip tooltipId={tooltipId} text={tokenFullName} />
      )}
    </div>
  );
}
