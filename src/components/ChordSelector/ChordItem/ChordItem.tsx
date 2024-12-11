import { ChordInScale } from '@config/music';
import clsx from 'clsx';
import * as React from 'react';

import s from './ChordItem.module.scss';

type Props = React.PropsWithChildren<{
  className?: string;
  chord: ChordInScale;
  onChordSelect?: (chord: ChordInScale | null) => void;
}>;

export const ChordItem = ({
  className,
  children,
  chord,
  onChordSelect,
}: Props): React.ReactElement => {
  const handleMouseEnter = React.useCallback(
    () => onChordSelect?.(chord),
    [onChordSelect, chord],
  );

  const handleMouseLeave = React.useCallback(
    () => onChordSelect?.(null),
    [onChordSelect, chord],
  );

  return (
    <div
      className={clsx(className, s.item)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};
