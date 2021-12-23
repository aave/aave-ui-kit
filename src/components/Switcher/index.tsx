import React, { useState, useEffect, useCallback, ReactElement, ReactNode } from 'react';
import Switch from 'react-switch';
import classNames from 'classnames';

import './style.scss';

type SwitcherProps = {
  onSwitch: (value: boolean) => void;
  offLabel?: string | ReactNode;
  onLabel?: string | ReactNode;
  onColor?: string;
  offColor?: string;
  value: boolean | undefined;
  disabled?: boolean;
  swiperHeight: number;
  swiperWidth: number;
  withOutDelay?: boolean;
  className?: string;
  classNameSwiper?: string;
  uncheckedIcon?: ReactElement | boolean;
  checkedIcon?: ReactElement | boolean;
};

export default function Switcher({
  onSwitch,
  onLabel,
  offLabel,
  value = false,
  onColor,
  offColor,
  disabled,
  swiperHeight,
  swiperWidth,
  withOutDelay,
  className,
  classNameSwiper,
  checkedIcon = false,
  uncheckedIcon = false,
}: SwitcherProps) {
  const [switching, setSwitching] = useState(value);

  const onClick = useCallback(() => {
    setSwitching(!value);
    if (!withOutDelay) {
      setTimeout(() => onSwitch(!value), 600);
    } else {
      onSwitch(!value);
    }
  }, [value, onSwitch, withOutDelay]);

  useEffect(() => {
    setSwitching(value);
  }, [value]);

  return (
    <div className={classNames('Switcher', className)}>
      <div className="Switcher__wrapper">
        {onLabel && offLabel && (
          <div className="Switcher__label" style={{ color: switching ? onColor : offColor }}>
            {switching ? onLabel : offLabel}
          </div>
        )}

        <Switch
          onChange={onClick}
          checked={switching}
          offColor={offColor}
          onColor={onColor}
          height={swiperHeight}
          width={swiperWidth}
          disabled={disabled}
          uncheckedIcon={uncheckedIcon}
          checkedIcon={checkedIcon}
          className={classNames('Switcher__swiper', classNameSwiper, {
            Switcher__swiperDisabled: disabled,
          })}
        />
      </div>
    </div>
  );
}
