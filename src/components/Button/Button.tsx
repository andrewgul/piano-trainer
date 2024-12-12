import * as React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import s from './Button.module.scss';

type Props = {
  before?: React.ReactNode;
  after?: React.ReactNode;
  stretched?: boolean;
  to?: string;
  content?: 'shrinked' | 'start';
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { selected?: boolean };

/**
 * @todo fix icons alignment
 */
export const Button = ({
  selected,
  children,
  className,
  before,
  after,
  stretched,
  to,
  content: contentPosition = 'shrinked',
  ...props
}: Props): React.ReactElement => {
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
      <Link
        className={clsx(
          s.button,
          s[`button_content_${contentPosition}`],
          className,
          { [s.button_selected]: selected, [s.button_stretched]: stretched },
        )}
        to={to}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={clsx(
        s.button,
        s[`button_content_${contentPosition}`],
        className,
        { [s.button_selected]: selected, [s.button_stretched]: stretched },
      )}
      {...props}
    >
      {content}
    </button>
  );
};
