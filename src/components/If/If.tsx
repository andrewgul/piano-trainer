import * as React from 'react';

type Props = React.PropsWithChildren<{
  condition: unknown;
}>;

export const If = ({
  condition,
  children,
}: Props): React.ReactElement | null => {
  if (condition) {
    return <>{children}</>;
  }

  return null;
};
