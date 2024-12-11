import { Container, ContainerProps } from '@components/Container';
import * as React from 'react';
import clsx from 'clsx';

import s from './FormContainer.module.scss';

type Props = React.PropsWithChildren<{
  title?: string;
  className?: string;
  actions?: React.ReactNode;
  contentDirection?: ContainerProps['direction'];
  contentSpacing?: ContainerProps['spacing'];
  contentPadding?: ContainerProps['padding'];
  width?: number | 'unset';
}>;

export const FormContainer = ({
  className,
  actions,
  children,
  title,
  contentDirection = 'vertical',
  contentSpacing = 'xxl',
  contentPadding = 'xxl',
  width = 360,
}: Props): React.ReactElement => {
  return (
    <Container
      className={clsx(className, s['form-container'])}
      direction="vertical"
      align="stretch"
      style={
        {
          '--width': width === 'unset' ? 'unset' : `${width}px`,
        } as React.CSSProperties
      }
    >
      <Container
        padding={contentPadding}
        direction={contentDirection}
        spacing={contentSpacing}
      >
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
