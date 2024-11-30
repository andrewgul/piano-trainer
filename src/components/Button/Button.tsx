import * as React from 'react';

import s from './Button.module.scss';
import clsx from 'clsx';

export const Button = ({ selected, ...props }: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { selected?: boolean }): React.ReactElement => {
  return (
    <button className={clsx(s.button, selected && s.button_selected)} {...props} />
  );
};
