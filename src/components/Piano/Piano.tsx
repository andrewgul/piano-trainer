import * as React from 'react';
import { Chord, Note, NoteWithOctave, Scale } from '@config/music';
import { getNotesInScale } from '@utils/getNotesInScale';
import { getNotesInChord } from '@utils/getNotesInChord';
import { AlteredNotesDisplay } from '@typings/AlteredNotesDisplay';

import s from './Piano.module.scss';
import { Octave } from './Octave';
import { PianoContext } from './context';

type Props = {
  notation?: 'letter' | 'solfege';
  rootNote?: Note | null;
  scale?: Scale | null;
  chord?: Chord | null;
  octaves?: number;
  startOctave?: number;
  alteredNotes?: AlteredNotesDisplay;
  playingNote?: NoteWithOctave | null;
  onPlayNote?: (note: Note) => void;
};

export const Piano = ({
  notation = 'letter',
  alteredNotes = '#',
  octaves = 2,
  startOctave = 4,
  rootNote,
  playingNote,
  scale,
  chord,
  onPlayNote,
}: Props): React.ReactElement => {
  const notesInChosenScale = React.useMemo(() => {
    if (!rootNote || !scale) {
      return null;
    }

    return getNotesInScale(rootNote, scale);
  }, [rootNote, scale]);

  const notesInChord = React.useMemo(() => {
    if (!chord) {
      return null;
    }

    return getNotesInChord(chord.note, chord.chord);
  }, [chord]);

  return (
    <PianoContext.Provider
      value={{ notation, alteredNotes, playingNote, onPlayNote }}
    >
      <div className={s.piano}>
        {Array.from({ length: octaves }, (_, index) => startOctave + index).map(
          (octave) => (
            <Octave
              key={octave}
              notesInChosenScale={notesInChosenScale}
              notesInChord={notesInChord}
              order={octave}
            />
          ),
        )}
      </div>
    </PianoContext.Provider>
  );
};
