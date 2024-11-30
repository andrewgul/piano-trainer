import * as React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import s from './Button.module.scss';

type Props = {
  before?: React.ReactNode;
  after?: React.ReactNode;
  stretched?: boolean;
  to?: string;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { selected?: boolean }

export const Button = ({ selected, children, className, before, after, stretched, to, ...props }: Props): React.ReactElement => {
  const content = React.useMemo<React.ReactNode>(() => {
    return (
      <>
        <span>{before}</span>
        {children}
        <span>{after}</span>
      </>
    );
  }, [before, children, after]);

  if (to) {
    return (
      <Link className={clsx(s.button, className, { [s.button_selected]: selected, [s.button_stretched]: stretched })} to={to}>
        {content}
      </Link>
    )
  }

  return (
    <button className={clsx(s.button, className, { [s.button_selected]: selected, [s.button_stretched]: stretched })} {...props}>
      {content}
    </button>
  );
};
