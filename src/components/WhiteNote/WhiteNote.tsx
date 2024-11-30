import * as React from 'react';

import s from './WhiteNote.module.scss';
import { playNote } from '../../utils/playNote';
import { Note } from '../../config/music';

type Props = {
  value: Note;
  className?: string;
};

export const WhiteNote = ({ value }: Props): React.ReactElement => {
  return (
    <div className={s['white-note']} onClick={() => playNote(value)}>
      <div className={s.value}>
        {value}
      </div>
    </div>
  );
};
