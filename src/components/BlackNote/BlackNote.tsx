import * as React from 'react';

import s from './BlackNote.module.scss';
import { playNote } from '../../utils/playNote';
import { Note } from '../../config/music';

type Props = {
  value: Note;
  offset: number;
  className?: string;
};

export const BlackNote = ({ value, offset }: Props): React.ReactElement => {
  return (
    <div onClick={() => playNote(value)} className={s['black-note']} style={{ '--offset': offset } as React.CSSProperties}>
      <div className={s.value}>
        {value}
      </div>
    </div>
  );
};
