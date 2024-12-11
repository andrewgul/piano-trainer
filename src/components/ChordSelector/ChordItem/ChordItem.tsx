import clsx from 'clsx';
import * as React from 'react';

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export const ChordItem = ({
  className,
  children,
}: Props): React.ReactElement => {
  return <div className={clsx(className)}>{children}</div>;
};
