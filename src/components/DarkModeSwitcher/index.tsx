import React from 'react';
import classNames from 'classnames';

import { ThemeNames, useThemeContext } from '../../libs/theme-provider';

import './style.scss';

import lightIcon from './images/lightIcon.svg';
import darkIcon from './images/darkIcon.svg';

export default function DarkModeSwitcher() {
  const { isCurrentThemeDark, changeTheme } = useThemeContext();

  return (
    <label
      className={classNames('DarkModeSwitcher', { DarkModeSwitcher__active: isCurrentThemeDark })}
      id="DarkModeSwitcher"
    >
      <input
        type="checkbox"
        checked={isCurrentThemeDark}
        onChange={() =>
          isCurrentThemeDark ? changeTheme(ThemeNames.default) : changeTheme(ThemeNames.dark)
        }
      />
      <span className="DarkModeSwitcher__slider">
        <img src={isCurrentThemeDark ? darkIcon : lightIcon} alt="" />
      </span>
    </label>
  );
}
