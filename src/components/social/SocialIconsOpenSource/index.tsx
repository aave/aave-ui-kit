import React from 'react';

import SocialIconsWrapper, { Icon, SocialIconsProps } from '../SocialIconsWrapper';

import githubIcon from '../images/githubIcon.svg';
import colorGithubIcon from '../images/colorGithub.svg';
import whiteGithubIcon from '../images/whiteGithub.svg';
import discordIcon from '../images/discordIcon.svg';
import colorDiscordIcon from '../images/colorDiscord.svg';
import whiteDiscordIcon from '../images/whiteDiscord.svg';

const icons: Icon[] = [
  {
    url: 'https://github.com/aave/aave-client-v2',
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

export default function SocialIconsOpenSource(props: SocialIconsProps) {
  return <SocialIconsWrapper {...props} icons={icons} />;
}
