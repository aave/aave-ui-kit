import React from 'react';

import SocialIconsWrapper, { Icon, SocialIconsProps } from '../SocialIconsWrapper';

import twitterIcon from '../images/twitterIcon.svg';
import colorTwitterIcon from '../images/colorTwitter.svg';
import whiteTwitterIcon from '../images/whiteTwitter.svg';
import instagramIcon from '../images/instagramIcon.svg';
import colorInstagramIcon from '../images/colorInstagram.svg';
import whiteInstagramIcon from '../images/whiteInstagram.svg';
import telegramIcon from '../images/telegramIcon.svg';
import colorTelegramIcon from '../images/colorTelegram.svg';
import whiteTelegramIcon from '../images/whiteTelegram.svg';
import githubIcon from '../images/githubIcon.svg';
import colorGithubIcon from '../images/colorGithub.svg';
import whiteGithubIcon from '../images/whiteGithub.svg';
import discordIcon from '../images/discordIcon.svg';
import colorDiscordIcon from '../images/colorDiscord.svg';
import whiteDiscordIcon from '../images/whiteDiscord.svg';

const icons: Icon[] = [
  {
    url: 'https://twitter.com/aaveaave',
    title: 'Twitter',
    icon: twitterIcon,
    colorIcon: colorTwitterIcon,
    whiteIcon: whiteTwitterIcon,
  },
  {
    url: 'https://www.instagram.com/aave.aave/',
    title: 'Instagram',
    icon: instagramIcon,
    colorIcon: colorInstagramIcon,
    whiteIcon: whiteInstagramIcon,
  },
  {
    url: 'https://t.me/Aavesome',
    title: 'Telegram',
    icon: telegramIcon,
    colorIcon: colorTelegramIcon,
    whiteIcon: whiteTelegramIcon,
  },
  {
    url: 'https://github.com/aave/aave-protocol',
    title: 'Github',
    icon: githubIcon,
    colorIcon: colorGithubIcon,
    whiteIcon: whiteGithubIcon,
  },
  {
    url: 'https://aave.com/discord',
    title: 'Discord',
    icon: discordIcon,
    colorIcon: colorDiscordIcon,
    whiteIcon: whiteDiscordIcon,
  },
];

export default function SocialIcons(props: SocialIconsProps) {
  return <SocialIconsWrapper {...props} icons={icons} />;
}
