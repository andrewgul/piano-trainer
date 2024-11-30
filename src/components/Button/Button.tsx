import * as React from 'react';

import s from './Button.module.scss';

export const Button = (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>): React.ReactElement => {
  return (
    <button className={s.button} {...props} />
  );
};
