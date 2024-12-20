import * as React from 'react';
import clsx from 'clsx';

import s from './Container.module.scss';

type Direction = 'horizontal' | 'vertical';

type Spacing = 's' | 'm' | 'l' | 'xl' | 'xxl';

type AxisPosition = 'start' | 'center' | 'end' | 'stretch';

export type ContainerProps = React.PropsWithChildren<{
  direction?: Direction;
  /**
   * @todo typing?
   */
  spacing?: Spacing | 'zero';
  /**
   * @todo typing?
   */
  padding?: Spacing | 'zero';
  align?: AxisPosition;
  /**
   * @todo typing
   */
  justify?: AxisPosition | 'space-between';
  className?: string;
  style?: React.CSSProperties;
}>;

export const Container = ({
  children,
  direction = 'horizontal',
  spacing = 'zero',
  align = 'start',
  justify = 'stretch',
  padding = 'zero',
  style,
  className,
}: ContainerProps): React.ReactElement => {
  return (
    <div
      className={clsx(
        className,
        s.container,
        s[`container_direction_${direction}`],
        s[`container_spacing_${spacing}`],
        s[`container_align_${align}`],
        s[`container_justify_${justify}`],
        s[`container_padding_${padding}`],
      )}
      style={style}
    >
      {children}
    </div>
  );
};
