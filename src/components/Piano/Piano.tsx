import * as React from 'react';
import { Note, NoteWithOctave, Scale } from '@config/music';
import { getNotesInScale } from '@utils/getNotesInScale';


import s from './Piano.module.scss';
import { Octave } from './Octave';
import { PianoContext } from './context';

import { AlteredNotes } from '@/typings/AlteredNotes';

type Props = {
  notation?: 'letter' | 'solfedge';
  rootNote?: Note | null;
  scale?: Scale | null;
  octaves?: number;
  startOctave?: number;
  alteredNotes?: AlteredNotes;
  playingNote?: NoteWithOctave | null;
};

export const Piano = ({ notation = 'letter', alteredNotes = '#', octaves = 2, startOctave = 4, rootNote, playingNote, scale }: Props): React.ReactElement => {
  const highlightedNotes = React.useMemo(() => {
    if (!rootNote || !scale) {
      return null;
    }

    return getNotesInScale(rootNote, scale);
  }, [rootNote, scale]);

  return (
    <PianoContext.Provider value={{ notation, alteredNotes, playingNote }}>
      <div className={s.piano}>
        {Array.from({ length: octaves }, (_, index) => startOctave + index).map((octave) => (
          <Octave key={octave} notesInChosenScale={highlightedNotes} order={octave} />
        ))}
      </div>
    </PianoContext.Provider>
  );
};