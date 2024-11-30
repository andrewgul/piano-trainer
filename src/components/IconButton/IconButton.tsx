import * as React from 'react';

import s from './IconButton.module.scss';
import { IconType } from 'react-icons';
import { FaTimes } from 'react-icons/fa';
import clsx from 'clsx';

type Icon = 'cross';

const MAP_ICON: Record<Icon, IconType> = {
  cross: FaTimes,
};

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { icon: Icon };

export const IconButton = ({ icon, className, ...props }: Props): React.ReactElement => {
  const Icon = MAP_ICON[icon];

  return (
    <button className={clsx(s.button, className)} {...props}>
      <Icon />
    </button>
  );
};
