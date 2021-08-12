import React, { ReactNode, useEffect } from 'react';
import Modal from 'react-modal';
import classNames from 'classnames';

import { useThemeContext } from '../../libs/theme-provider';

import './style.scss';

import closeButton from './images/closeIcon.svg';

export interface BasicModalProps {
  isVisible: boolean;
  onBackdropPress: () => void;
  children: ReactNode;
  withCloseButton?: boolean;
  className?: string;
  closeIcon?: string;
}

export default function BasicModal({
  isVisible,
  onBackdropPress,
  children,
  withCloseButton,
  className,
  closeIcon,
}: BasicModalProps) {
  const { isCurrentThemeDark } = useThemeContext();

  useEffect(() => {
    if (isVisible) {
      window.onpopstate = () => {
        onBackdropPress();
      };
    } else {
      window.onpopstate = () => {};
    }

    return () => {
      window.onpopstate = () => {};
    };
  }, [isVisible]);

  return (
    <Modal
      className={classNames(className, { BasicModal__dark: isCurrentThemeDark })}
      isOpen={isVisible}
      onRequestClose={(e: React.MouseEvent) => {
        e.stopPropagation();
        onBackdropPress();
      }}
      ariaHideApp={false}
    >
      {children}

      {withCloseButton && (
        <div className="BasicModal__close-wrapper">
          <button
            className="BasicModal__close"
            type="button"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              onBackdropPress();
            }}
          >
            <img src={closeIcon || closeButton} alt="Close modal" />
          </button>
        </div>
      )}
    </Modal>
  );
}
