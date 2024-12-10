import * as React from 'react';
import clsx from 'clsx';

import s from './Container.module.scss';

type Direction = 'horizontal' | 'vertical';

type Spacing = 's' | 'm' | 'l' | 'xl' | 'xxl';

type AxisPosition = 'start' | 'center' | 'end' | 'stretch';

type Props = React.PropsWithChildren<{
  direction?: Direction;
  spacing?: Spacing;
  align?: AxisPosition;
  justify?: AxisPosition | 'space-between';
  className?: string;
}>;

export const Container = ({
  children,
  direction = 'horizontal',
  spacing = 'm',
  align = 'start',
  justify = 'stretch',
  className,
}: Props): React.ReactElement => {
  return (
    <div
      className={clsx(
        className,
        s.container,
        s[`container_direction_${direction}`],
        s[`container_spacing_${spacing}`],
        s[`container_align_${align}`],
        s[`container_justify_${justify}`],
      )}
    >
      {children}
    </div>
  );
};
