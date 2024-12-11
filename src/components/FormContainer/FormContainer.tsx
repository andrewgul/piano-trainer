import { Container } from '@components/Container';
import * as React from 'react';
import clsx from 'clsx';

import s from './FormContainer.module.scss';

type Props = React.PropsWithChildren<{
  title?: string;
  className?: string;
  actions?: React.ReactNode;
}>;

export const FormContainer = ({
  className,
  actions,
  children,
  title,
}: Props): React.ReactElement => {
  return (
    <Container
      className={clsx(className, s['form-container'])}
      direction="vertical"
      align="stretch"
    >
      <Container padding="xxl" direction="vertical" spacing="l">
        {title && <div className={s.title}>{title}</div>}
        {children}
      </Container>
      {actions && (
        <>
          <div className={s.divider} />
          <Container
            padding="xxl"
            align="center"
            justify="space-between"
            spacing="l"
          >
            {actions}
          </Container>
        </>
      )}
    </Container>
  );
};
