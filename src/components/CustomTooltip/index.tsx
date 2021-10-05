import React from 'react';
import ReactTooltip from 'react-tooltip';
import classNames from 'classnames';

import { useThemeContext } from '../../index';

import './style.scss';

interface CustomTooltipProps {
  tooltipId: string;
  text: string;
}

export default function CustomTooltip({ tooltipId, text }: CustomTooltipProps) {
  const { isCurrentThemeDark } = useThemeContext();

  return (
    <ReactTooltip
      className={classNames('CustomTooltip', { CustomTooltip__dark: isCurrentThemeDark })}
      id={tooltipId}
      effect="solid"
    >
      <div className="CustomTooltip__content">
        <p>{text}</p>
      </div>
    </ReactTooltip>
  );
}
