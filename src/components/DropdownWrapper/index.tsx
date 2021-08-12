import React, { ReactElement, ReactNode, useEffect, useRef } from 'react';
import classNames from 'classnames';

import './style.scss';

interface DropdownWrapperProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
  className?: string;
  contentClassName?: string;
  buttonComponent: ReactElement;
  children: ReactNode;
  verticalPosition?: 'bottom' | 'top';
  horizontalPosition?: 'left' | 'right' | 'center';
  contentId?: string;
}

export default function DropdownWrapper({
  visible,
  setVisible,
  className,
  contentClassName,
  buttonComponent,
  children,
  verticalPosition,
  horizontalPosition,
  contentId,
}: DropdownWrapperProps) {
  const wrapperRef = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    // @ts-ignore
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={classNames(
        'DropdownWrapper',
        className,
        `DropdownWrapper__${verticalPosition}`,
        `DropdownWrapper__${horizontalPosition}`
      )}
      ref={wrapperRef}
    >
      {buttonComponent}

      <div
        className={classNames(
          'DropdownWrapper__content',
          {
            DropdownWrapper__contentVisible: visible,
          },
          contentClassName
        )}
        id={contentId}
      >
        {children}
      </div>
    </div>
  );
}
