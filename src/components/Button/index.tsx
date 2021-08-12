import React, { ReactElement } from 'react';
import classNames from 'classnames';

import './style.scss';

export interface ButtonProps {
  onClick?: (event: any) => void;
  title: string;
  type?: 'button' | 'submit';
  size?: 'big' | 'medium' | 'normal' | 'small';
  transparent?: boolean;
  mobileBig?: boolean;
  iconComponent?: ReactElement | ReactElement[];
  disabled?: boolean;
  className?: string;
}

export default function Button({
  onClick,
  title,
  type = 'button',
  size = 'medium',
  transparent,
  mobileBig,
  iconComponent,
  disabled,
  className,
}: ButtonProps) {
  return (
    <button
      className={classNames(
        'Button',
        `Button__${size}`,
        { Button__mobileBig: mobileBig, Button__transparent: transparent },
        className
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="Button__wrapper">
        {iconComponent && iconComponent}

        <span>{title}</span>
      </div>
    </button>
  );
}
