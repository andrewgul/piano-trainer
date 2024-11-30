import * as React from 'react';
import clsx from 'clsx';

import s from './Button.module.scss';

type Props = {
  before?: React.ReactNode;
  after?: React.ReactNode;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { selected?: boolean }

export const Button = ({ selected, children, className, before, after, ...props }: Props): React.ReactElement => {
  return (
    <button className={clsx(s.button, className, selected && s.button_selected)} {...props}>
      {before}
      {children}
      {after}
    </button>
  );
};
