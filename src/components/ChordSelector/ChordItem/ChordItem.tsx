import { ChordInScale } from '@config/music';
import clsx from 'clsx';
import * as React from 'react';
import { useDisplayNote } from '@hooks/useDisplayNote';

import s from './ChordItem.module.scss';

type Props = {
  className?: string;
  chord: ChordInScale;
  onChordSelect?: (chord: ChordInScale | null) => void;
};

export const ChordItem = ({
  className,
  chord,
  onChordSelect,
}: Props): React.ReactElement => {
  const { getDisplayedNote } = useDisplayNote();

  const handleMouseEnter = React.useCallback(
    () => onChordSelect?.(chord),
    [onChordSelect, chord],
  );

  const handleMouseLeave = React.useCallback(
    () => onChordSelect?.(null),
    [onChordSelect],
  );

  return (
    <div
      className={clsx(className, s.item)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={s.num}>{chord.romanNumeration}</div>
      <div className={s.chord}>
        <span className={s['chord-note']}>{getDisplayedNote(chord.note)}</span>
        <span className={s['chord-chord']}>{chord.chord}</span>
      </div>
      <div className={s.role}>{chord.role}</div>
    </div>
  );
};
