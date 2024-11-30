import * as React from 'react';
import { NOTES } from '../../config/music';
import s from './Piano.module.scss';
import { WhiteNote } from '../WhiteNote/WhiteNote';
import { BlackNote } from '../BlackNote';

const countWhiteNotesBefore = (incomingNote: string) => {
  let result = 0;

  for (const note of NOTES) {
    if (note === incomingNote) {
      return result;
    }

    if (!note.endsWith('#')) {
      result += 1;
    }
  }

  return result;
}

export const Piano = (): React.ReactElement => {
  return (
    <div className={s.container}>
      <div className={s.piano}>
        <div className={s.octave}>
          {NOTES.map((note) => (
            <React.Fragment key={note}> 
              {note.endsWith('#') ? (
                <BlackNote value={note} offset={countWhiteNotesBefore(note)} />
              ) : (
                <WhiteNote value={note} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};