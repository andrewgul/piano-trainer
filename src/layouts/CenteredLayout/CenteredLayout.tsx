import { Container, ContainerProps } from '@components/Container';
import * as React from 'react';
import clsx from 'clsx';

import s from './CenteredLayout.module.scss';

type Props = React.PropsWithChildren<{
  className?: string;
}> &
  ContainerProps;

export const CenteredLayout = ({
  className,
  children,
  justify = 'center',
  align = 'center',
  ...containerProps
}: Props): React.ReactElement => {
  return (
    <Container
      className={clsx(s.layout, className)}
      justify={justify}
      align={align}
      {...containerProps}
    >
      {children}
    </Container>
  );
};
