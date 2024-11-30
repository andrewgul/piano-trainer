import * as React from 'react';
import s from './IconButton.module.scss';
import { IconType } from 'react-icons';
import { FaTimes } from 'react-icons/fa';
import { BsGearWideConnected } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import clsx from 'clsx';

type Icon = 'cross' | 'gear' | 'github';

const MAP_ICON: Record<Icon, IconType> = {
  cross: FaTimes,
  gear: BsGearWideConnected,
  github: FaGithub,
};

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { icon: Icon, link?: string };

export const IconButton = ({ icon, className, link, ...props }: Props): React.ReactElement => {
  const Icon = MAP_ICON[icon];

  if (link) {
    return (
      <a className={clsx(s.button, className)} href={link} target="_blank">
        <Icon />
      </a>
    )
  }

  return (
    <button className={clsx(s.button, className)} {...props}>
      <Icon />
    </button>
  );
};
