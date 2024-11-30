import * as React from 'react';
import { NOTES } from '../../../config/music';
import s from './Octave.module.scss';
import { Key } from './Key';
import { getKeyColor } from '../../../utils/getKeyColor';
import clsx from 'clsx';
import { countWhiteNotesBefore } from '../../../utils/countWhiteNotesBefore';

export const Octave = (): React.ReactElement => {
  return (
    <div className={s.octave}>
      {NOTES.map(note => {
        const color = getKeyColor(note);

        return <Key key={note} className={clsx(s.key, s[`key_${color}`])} value={note} color={color} style={color === 'black' ? { '--offset': countWhiteNotesBefore(note) } as React.CSSProperties : undefined} />
      })}
    </div>
  );
};
