import * as React from 'react';
import s from './Piano.module.scss';
import { Octave } from './Octave';
import { PianoContext } from './context';
import { Note, Scale } from '../../config/music';
import { getNotesInScale } from '../../utils/getNotesInScale';

type Props = {
  notation?: 'letter' | 'solfedge';
  rootNote?: Note | null;
  scale?: Scale | null;
  octaves?: number;
  startOctave?: number;
};

export const Piano = ({ notation = 'letter', octaves = 2, startOctave = 4, rootNote, scale }: Props): React.ReactElement => {
  const highlightedNotes = React.useMemo(() => {
    if (!rootNote || !scale) {
      return null;
    }

    return getNotesInScale(rootNote, scale);
  }, [rootNote, scale]);

  return (
    <PianoContext.Provider value={{ notation }}>
      <div className={s.piano}>
        {Array.from({ length: octaves }, (_, index) => startOctave + index).map((octave) => (
          <Octave key={octave} highlightedNotes={highlightedNotes} order={octave} />
        ))}
      </div>
    </PianoContext.Provider>
  );
};