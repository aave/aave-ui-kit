import React, { ReactNode } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import classNames from 'classnames';

import './style.scss';

interface ScrollBarProps {
  children: ReactNode;
  className?: string;
  onUpdate?: (value: any) => void;
}

export default function ScrollBar({ children, className, onUpdate }: ScrollBarProps) {
  return (
    <Scrollbars className={classNames('ScrollBar', className)} onUpdate={onUpdate}>
      {children}
    </Scrollbars>
  );
}
