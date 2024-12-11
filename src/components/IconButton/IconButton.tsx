import * as React from 'react';
import { IconType } from 'react-icons';
import { MdClear } from 'react-icons/md';
import { BsGearWideConnected } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import clsx from 'clsx';

import s from './IconButton.module.scss';

type Icon = 'cross' | 'gear' | 'github';

const MAP_ICON: Record<Icon, IconType> = {
  cross: MdClear,
  gear: BsGearWideConnected,
  github: FaGithub,
};

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: Icon;
  link?: string;
};

export const IconButton = ({
  icon,
  className,
  link,
  ...props
}: Props): React.ReactElement => {
  const Icon = MAP_ICON[icon];

  if (link) {
    return (
      <a className={clsx(s.button, className)} href={link} target="_blank">
        <Icon />
      </a>
    );
  }

  return (
    <button className={clsx(s.button, className)} {...props}>
      <Icon />
    </button>
  );
};
