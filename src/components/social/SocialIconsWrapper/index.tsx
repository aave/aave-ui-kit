import React from 'react';
import classNames from 'classnames';

import './style.scss';

export interface Icon {
  url: string;
  title: string;
  icon: string;
  colorIcon: string;
  whiteIcon: string;
}

export interface SocialIconsProps {
  className?: string;
  linkClassName?: string;
  iconHeight: number;
  iconWidth: number;
  colored?: boolean;
  white?: boolean;
  withTitle?: boolean;
}

interface SocialIconsWrapperProps extends SocialIconsProps {
  icons: Icon[];
}

export default function SocialIconsWrapper({
  icons,
  className,
  linkClassName,
  iconHeight,
  iconWidth,
  colored,
  white,
  withTitle,
}: SocialIconsWrapperProps) {
  return (
    <div className={classNames('SocialIcons', className)}>
      {icons.map((item, index) => (
        <React.Fragment key={index}>
          {item.url && (
            <a
              href={item.url}
              rel="noopener noreferrer"
              target="_blank"
              className={classNames(linkClassName, { SocialIcon__withTitle: withTitle })}
            >
              <img
                src={colored ? item.colorIcon : white ? item.whiteIcon : item.icon}
                height={iconHeight}
                width={iconWidth}
                alt="Aave"
              />
              {withTitle && <span>{item.title}</span>}
            </a>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
