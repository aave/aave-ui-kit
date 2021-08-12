import React from 'react';
import classNames from 'classnames';

import './style.scss';

interface AnimationArrowProps {
  className?: string;
  active: boolean;
  width: number;
  height: number;
  marginLeft?: number;
  arrowTopPosition: number;
  arrowWidth: number;
  arrowHeight: number;
  color: string;
}

export default function AnimationArrow({
  className,
  active,
  width,
  height,
  marginLeft,
  arrowTopPosition,
  arrowWidth,
  arrowHeight,
  color,
}: AnimationArrowProps) {
  return (
    <i
      className={classNames(
        'AnimationArrow',
        {
          AnimationArrow__active: active,
        },
        className
      )}
      style={{ width: `${width}px`, height: `${height}px`, marginLeft: `${marginLeft}px` }}
    >
      <i
        style={{
          top: `${arrowTopPosition}`,
          width: `${arrowWidth}px`,
          height: `${arrowHeight}px`,
          backgroundColor: color,
        }}
      />
      <i
        style={{
          top: `${arrowTopPosition}`,
          width: `${arrowWidth}px`,
          height: `${arrowHeight}px`,
          backgroundColor: color,
        }}
      />
    </i>
  );
}
