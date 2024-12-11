import { FormContainer } from '@components/FormContainer';
import { ChordInScale, Note, Scale } from '@config/music';
import { getChordsInScale } from '@utils/getChordsInScale';
import * as React from 'react';

import { ChordItem } from './ChordItem';
import s from './ChordSelector.module.scss';

type Props = {
  scale: Scale;
  rootNote: Note;
  className?: string;
  selectedChord?: ChordInScale | null;
  onChordSelect?: (chord: ChordInScale | null) => void;
};

export const ChordSelector = ({
  scale,
  rootNote,
  className,
  onChordSelect,
}: Props): React.ReactElement => {
  const chords = React.useMemo(
    () => getChordsInScale(rootNote, scale),
    [rootNote, scale],
  );

  return (
    <FormContainer
      contentSpacing="l"
      contentDirection="horizontal"
      contentPadding="l"
      width="unset"
      className={className}
    >
      {chords.map((chord) => (
        <ChordItem
          key={chord.romanNumeration}
          className={s.item}
          chord={chord}
          onChordSelect={onChordSelect}
        />
      ))}
    </FormContainer>
  );
};
